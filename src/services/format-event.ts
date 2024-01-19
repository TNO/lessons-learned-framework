import m, { Attributes, FactoryComponent } from "mithril";
import { FormAttributes, LayoutForm, SlimdownView } from "mithril-ui-form";
import { IEvent, IMultimedia, IPublication } from "../models";
import { ILesson } from "../models/lesson";
import { formatOptional, i18n } from "../utils";

/** Print optional */
const p = (val: string | number | Date | undefined, output?: string) =>
  val ? output || val : "";

/** Print a list: a, b and c */
const l = (val: undefined | string | string[], and = "en") => {
  if (!val) {
    return "";
  }
  if (val instanceof Array) {
    if (val.length === 1) {
      return val[0];
    }
    const [last, oneButLast, ...items] = val.reverse();
    return [...items, `${oneButLast} ${and} ${last}`]
      .filter(Boolean)
      .join(", ");
  } else {
    return val;
  }
};

const showEditors = (event: Partial<IEvent>) => {
  const { editors } = event;
  return editors
    ? `<p class="center-align"><i>door ${editors
        .filter(Boolean)
        .map(
          (e) =>
            `${e.name}${formatOptional(
              { brackets: true },
              e.role,
              e.organisation
            )}`
        )
        .join(", ")}</i></p>`
    : "";
};

const showOrganisations = (event: Partial<IEvent>) => {
  const { organisations } = event;
  return organisations
    ? organisations
        .filter(Boolean)
        .map(
          (org) =>
            `- ${org.name}${formatOptional(
              { brackets: true },
              org.type,
              org.country
            )}${p(org.info, `<br>${org.info}`)}`
        )
        .join("\n")
    : "";
};

const showLessons = (event: Partial<IEvent>) => {
  const { lessons } = event;
  if (!lessons || lessons.length === 0) {
    return "Er werden nog geen lessen aangemaakt.";
  }
  const obs = ({ effectiveness, observationInfo }: ILesson) =>
    `Waarnemingen gedurende de gebeurtenis van deze CM processen toont dat de effectiviteit '${p(
      effectiveness
    )}' was. ${p(observationInfo)}`;
  const createLesson = (les: ILesson, index: number) => {
    const {
      name,
      solutionType,
      expectedImprovementsInfo,
      lesson,
      cmFunction,
      victimsImprovements,
      // materialDamageImprovements,
      // ciLossImprovements,
      // socEcoDisruptionImprovements,
      // environmentalDegradationImprovements,
      effectsOnPerformance,
      // effectsOnEfficiency,
      // effectsOnResponderHealthAndSafety,
      explanationImprovements,
    } = les;
    const st = l(solutionType);
    const intro =
      index === 0
        ? `Na aanleiding van de evaluatie van deze gebeurtenis werd${
            lessons.length > 1 ? "en" : ""
          } de volgende ${
            lessons.length === 1 ? "les" : `${lessons.length} lessen`
          } geleerd.`
        : "";

    return (
      `${intro}
<h6 class="primary-text">Les ${index + 1}: ${p(name)}</h6>

Deze les richt zich in het bijzonder op het CM proces ‘${p(cmFunction)}’.

${obs(les)}

Mogelijke oplossing of verbetering van het CM proces: ${p(st)}. ${p(lesson)}

De verwachtte verbetering van het CM proces bij het implementeren van deze oplossing zijn ${p(
        effectsOnPerformance
      )}. ${p(expectedImprovementsInfo)}

Additioneel, de verwachtte impactreductie van het beschreven incident zijn ${p(
        victimsImprovements
      )}. ` +
      // ${p(materialDamageImprovements, `- Material damage reduction: ${materialDamageImprovements}`)}
      // ${p(ciLossImprovements, `- Loss of services reduction: ${ciLossImprovements}`)}
      // ${p(socEcoDisruptionImprovements, `- Social/economic reduction: ${socEcoDisruptionImprovements}`)}
      // ${p(
      //   environmentalDegradationImprovements,
      //   `- Environmental degradation reduction: ${environmentalDegradationImprovements}`
      // )}
      `${p(explanationImprovements)}`
    );
  };
  return lessons ? lessons.filter(Boolean).map(createLesson).join("\n") : "";
};

const formatUrl = (url?: string) => (url ? `[${url}](${url})` : "");

const showSources = (event: Partial<IEvent>) => {
  const { publications, multimedia } = event;

  const formatPublication = (pub: IPublication) =>
    `${pub.title}${
      pub.yearOfPublication
        ? ` (${pub.yearOfPublication}${
            pub.dissemination ? `, ${pub.dissemination}` : ""
          })`
        : `${pub.dissemination ? `, ${pub.dissemination}` : ""}`
    }${pub.author ? `, ${pub.author}` : ""}${
      pub.url ? `, ${formatUrl(pub.url)}` : ""
    }${formatOptional(
      { brackets: true, prepend: "originele titel: " },
      pub.orgTitle,
      /other/i.test(pub.language || "") ? pub.otherLanguage : pub.language
    )}`;

  const formatMultimedia = (mm: IMultimedia) =>
    `${formatUrl(mm.url)}${
      mm.yearOfPublication ? ` (${mm.yearOfPublication})` : ""
    }${mm.desc ? `, ${mm.desc}` : ""}${
      mm.owner ? ` (bezig van ${mm.owner})` : ""
    }`;

  const ps = publications
    ? publications
        .filter(Boolean)
        .map((pub, i) => `${i + 1}. ${formatPublication(pub)}`)
        .join("\n")
    : "";
  const ms = multimedia
    ? multimedia
        .filter(Boolean)
        .map((mm, i) => `${i + 1}. ${formatMultimedia(mm)}`)
        .join("\n")
    : "";

  // console.log(ps);

  return ps || ms
    ? `
${ps ? '<h5 class="primary-text">Publicaties</h5>' : ""}
${ps}

${ms ? '<h5 class="primary-text">Multimedia bronnen</h5>' : ""}
${ms}
`
    : "";
};

/**
 * Format an Event object to a markdown layout.
 */
const formatEvent = (event: IEvent) => {
  const {
    challengesInfo,
    cmFunctions,
    damage,
    date: startDate,
    duration,
    desc = "",
    disruption,
    environment,
    eventType,
    incidentInfo,
    initialIncident,
    locationText = "",
    lossOfServices,
    vrs = [],
    name,
    memberCountries,
    intInstitutions,
    otherIncidents,
    scale,
    scaleExplanation = "",
    societalSectors,
    societalSectorsAdditional,
    societalSectorsInfo,
    victims,
  } = event;
  const oi = l(otherIncidents);
  const ss = l(societalSectors);
  const mc = memberCountries ? l([...vrs, ...memberCountries]) : l(vrs);
  const cm = l(cmFunctions);
  const md = `
<h4 class="primary-text center-align">${name}</h4>

${showEditors(event)}

${p(eventType, `**Type gebeurtenis:** ${eventType}`)}

De gebeurtenis vond plaats in ${p(locationText)} ${p(
    startDate,
    `op ${new Date(startDate).toLocaleDateString()}`
  )}${p(
    duration,
    ` en duurde ${duration} dag${duration > 1 ? "en" : ""}`
  )}. ${desc}

<h5 class="primary-text">Incident kenmerken</h5>

Het incident werd veroorzaakt door een _${p(initialIncident)}_${
    oi && oi.length > 0
      ? formatOptional(
          { prepend: ", en veroorzaakte de volgende incidenten: _" },
          oi
        )
      : ""
  }_.

  ${p(incidentInfo)}
  ${p(scale, `De schaal van deze gebeurtenis was ${scale}.`)} ${p(
    ss,
    `Het trof verschillende maatschappelijke sectoren, met name ${ss}.`
  )} ${p(societalSectorsAdditional)} ${p(societalSectorsInfo)}

De (potentiële) impact van het incident was als volgt:
${p(victims, `- Aantal slachtoffers: ${victims}`)}
${p(damage, `- Materiële schade: ${damage}`)}
${p(lossOfServices, `- Uitval van diensten: ${lossOfServices}`)}
${p(disruption, `- Sociale/economische disruptie: ${disruption}`)}
${p(environment, `- Milieuschade: ${environment}`)}

<h5 class="primary-text">Geografische kenmerken</h5>

${p(mc, `De gebeurtenis betrof de volgende veiligheidsregio('s): _${mc}_. `)}
${p(intInstitutions, `Inclusief de volgende instituten: ${intInstitutions}. `)}

${scaleExplanation}`;

  const md2 = `<h5 class="primary-text">Betrokken organisaties</h5>

De volgende organisaties waren betrokken bij het effectief oplossen van deze gebeurtenis:
${showOrganisations(event)}

<h5 class="primary-text">Kritieke Crisis Management processen</h5>

De volgende crisis management processen waren van specifieke interesse voor het adequaat afhandelen van deze gebeurtenis: ${p(
    cm,
    cm
  )}.

${p(challengesInfo)}

<h5 class="primary-text">Lessen</h5>
${showLessons(event)}

${showSources(event)}
  `;

  return { md, md2 };
};

export interface IFormattedEvent extends Attributes {
  event: IEvent;
}

export const FormattedEvent: FactoryComponent<IFormattedEvent> = () => {
  return {
    view: ({ attrs: { event } }) => {
      const { md, md2 } = formatEvent(event);
      return m(".row", [
        m(".col.s12", m(SlimdownView, { md })),
        location
          ? m(LayoutForm, {
              form: [{ type: "map", id: "location" }],
              obj: event,
              disabled: true,
              context: {},
              i18n,
            } as FormAttributes<IEvent>)
          : undefined,
        m(".col.s12", m(SlimdownView, { md: md2 })),
      ]);
    },
  };
};
