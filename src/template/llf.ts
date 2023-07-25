import { UIForm } from "mithril-ui-form";
import { IEvent, IPublication } from "../models";
import { ILesson } from "../models/lesson";
import { IOrganisation } from "../models/organisation";

export const veiligheidsregios: { id: string; label: string }[] = [
  { id: "VRAA", label: "Amsterdam-Amstelland" },
  { id: "VRBN", label: "Brabant-Noord" },
  { id: "VRBZO", label: "Brabant-Zuidoost" },
  { id: "VRD", label: "Drenthe" },
  { id: "VRFL", label: "Flevoland" },
  { id: "VRF", label: "Fryslân" },
  { id: "VRGM", label: "Gelderland-Midden" },
  { id: "VRGZ", label: "Gelderland-Zuid" },
  { id: "VRGV", label: "Gooi en Vechtstreek" },
  { id: "VRG", label: "Groningen" },
  { id: "VRH", label: "Haaglanden" },
  { id: "VRHM", label: "Hollands Midden" },
  { id: "VRIJ", label: "IJsselland" },
  { id: "VRK", label: "Kennemerland" },
  { id: "VRLN", label: "Limburg-Noord" },
  { id: "VRMWB", label: "Midden en West-Brabant" },
  { id: "VRNOG", label: "Noord- en Oost-Gelderland" },
  { id: "VRNHN", label: "Noord-Holland Noord" },
  { id: "VRRR", label: "Rotterdam-Rijnmond" },
  { id: "VRT", label: "Twente" },
  { id: "VRU", label: "Utrecht" },
  { id: "VRZW", label: "Zaanstreek-Waterland" },
  { id: "VRZ", label: "Zeeland" },
  { id: "VRZHZ", label: "Zuid-Holland Zuid" },
  { id: "VRZL", label: "Zuid-Limburg" },
];

export const countries = [
  // {
  //   id: "austria",
  //   label: "Austria",
  // },
  {
    id: "belgium",
    label: "Belgium",
  },
  // {
  //   id: "bulgaria",
  //   label: "Bulgaria",
  // },
  // {
  //   id: "croatia",
  //   label: "Croatia",
  // },
  // {
  //   id: "cyprus",
  //   label: "Cyprus",
  // },
  // {
  //   id: "czech_republic",
  //   label: "Czech Republic",
  // },
  // {
  //   id: "denmark",
  //   label: "Denmark",
  // },
  // {
  //   id: "estonia",
  //   label: "Estonia",
  // },
  // {
  //   id: "finland",
  //   label: "Finland",
  // },
  // {
  //   id: "france",
  //   label: "France",
  // },
  {
    id: "germany",
    label: "Germany",
  },
  // {
  //   id: "greece",
  //   label: "Greece",
  // },
  // {
  //   id: "hungary",
  //   label: "Hungary",
  // },
  // {
  //   id: "ireland",
  //   label: "Ireland",
  // },
  // {
  //   id: "italy",
  //   label: "Italy",
  // },
  // {
  //   id: "latvia",
  //   label: "Latvia",
  // },
  // {
  //   id: "lithuania",
  //   label: "Lithuania",
  // },
  // {
  //   id: "luxembourg",
  //   label: "Luxembourg",
  // },
  // {
  //   id: "malta",
  //   label: "Malta",
  // },
  // {
  //   id: "netherlands",
  //   label: "Netherlands",
  // },
  // {
  //   id: "poland",
  //   label: "Poland",
  // },
  // {
  //   id: "portugal",
  //   label: "Portugal",
  // },
  // {
  //   id: "romania",
  //   label: "Romania",
  // },
  // {
  //   id: "slovakia",
  //   label: "Slovakia",
  // },
  // {
  //   id: "slovenia",
  //   label: "Slovenia",
  // },
  // {
  //   id: "spain",
  //   label: "Spain",
  // },
  // {
  //   id: "sweden",
  //   label: "Sweden",
  // },
  // {
  //   id: "united_kingdom",
  //   label: "United Kingdom",
  // },
];

const languages = [
  {
    id: "nl",
    label: "Nederlands",
  },
  {
    id: "en",
    label: "Engels",
  },
  {
    id: "de",
    label: "Duits",
  },
  {
    id: "fr",
    label: "Frans",
  },
  {
    id: "other",
    label: "Overig",
  },
];

const sortByLabel:
  | ((
      a: { id: string; label: string },
      b: { id: string; label: string }
    ) => number)
  | undefined = (a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0);

export const incidentTypes = [
  {
    id: "animalDisease",
    label: "Dierenziekte",
    show: ["incidentCategory=natural"],
  },
  {
    id: "avalanche",
    label: "Lawine",
    show: ["incidentCategory=natural"],
  },
  {
    id: "earthquake",
    label: "Aardbeving",
    show: ["incidentCategory=natural"],
  },
  {
    id: "epidemics",
    label: "Epidemie / Pandemie",
    show: ["incidentCategory=natural"],
  },
  {
    id: "cold",
    label: "Extreme kou",
    show: ["incidentCategory=natural"],
  },
  {
    id: "heat",
    label: "Extreme warmte/droogte",
    show: ["incidentCategory=natural"],
  },
  {
    id: "hail",
    label: "Extreme hagel/sneeuwval",
    show: ["incidentCategory=natural"],
  },
  {
    id: "rain",
    label: "Extreme regen",
    show: ["incidentCategory=natural"],
  },
  {
    id: "coastal",
    label: "Overstroming: kust",
    show: ["incidentCategory=natural"],
  },
  {
    id: "flash",
    label: "Overstroming: Flash flood",
    show: ["incidentCategory=natural"],
  },
  {
    id: "river",
    label: "Overstroming: rivier",
    show: ["incidentCategory=natural"],
  },
  {
    id: "wildfire",
    label: "Bosbrand",
    show: ["incidentCategory=natural"],
  },
  {
    id: "landslide",
    label: "Aardverschuiving",
    show: ["incidentCategory=natural"],
  },
  {
    id: "meteorites",
    label: "Meteorieten",
    show: ["incidentCategory=natural"],
  },
  {
    id: "storm",
    label: "Storm/tornado",
    show: ["incidentCategory=natural"],
  },
  // {
  //   id: "eruption",
  //   label: "Vulkaanuitbarsting",
  //   show: ["incidentCategory=natural"],
  // },

  // {
  //   id: 'movement',
  //   label: 'Mass movement',
  //   show: ['incidentCategory=natural'],
  // },
  // {
  //   id: 'infestation',
  //   label: 'Insect infestation',
  //   show: ['incidentCategory=natural'],
  // },
  // {
  //   id: 'animal',
  //   label: 'Animal stampede',
  //   show: ['incidentCategory=natural'],
  // },

  {
    id: "infra",
    label: "Instorting vitale infrastructuur",
    show: ["incidentCategory=technical"],
  },
  {
    id: "explosion",
    label: "Explosie/gaslek",
    show: ["incidentCategory=technical"],
  },
  {
    id: "fire",
    label: "Brand in gebouw/infrastructuur",
    show: ["incidentCategory=technical"],
  },
  {
    id: "chemical",
    label: "Industrie: Chemische lekkage",
    show: ["incidentCategory=technical"],
  },
  {
    id: "industrial_explosion",
    label: "Industrie: Explosie/brand",
    show: ["incidentCategory=technical"],
  },
  {
    id: "nuclear",
    label: "Industrie: Nucleair ongeluk",
    show: ["incidentCategory=technical"],
  },
  {
    id: "gas_supply",
    label: "Uitval: Gas",
    show: ["incidentCategory=technical"],
  },
  {
    id: "power",
    label: "Uitval: Electriciteit)",
    show: ["incidentCategory=technical"],
  },
  {
    id: "ict_failure",
    label: "Uitval: Telecom/ICT",
    show: ["incidentCategory=technical"],
  },
  {
    id: "drinkingwater",
    label: "Uitval: Watervoorziening",
    show: ["incidentCategory=technical"],
  },
  {
    id: "aircrash",
    label: "Transport: Vliegongeval",
    show: ["incidentCategory=technical"],
  },
  {
    id: "railaccident",
    label: "Transport: Treinincident",
    show: ["incidentCategory=technical"],
  },
  {
    id: "roadaccident",
    label: "Transport: Verkeersinicident",
    show: ["incidentCategory=technical"],
  },
  {
    id: "wateraccident",
    label: "Transport: Waterincident",
    show: ["incidentCategory=technical"],
  },

  {
    id: "arson",
    label: "Brandstichting",
    show: ["incidentCategory=attack"],
  },
  {
    id: "biological",
    label: "Biologische aanval",
    show: ["incidentCategory=attack"],
  },
  {
    id: "bomb",
    label: "Bom (explosieven)",
    show: ["incidentCategory=attack"],
  },
  {
    id: "chemical_attack",
    label: "Chemische aanval",
    show: ["incidentCategory=attack"],
  },
  {
    id: "cyber_attack",
    label: "Cyber aanval/criminaliteit",
    show: ["incidentCategory=attack"],
  },
  {
    id: "dumping",
    label: "Afval dumpen",
    show: ["incidentCategory=attack"],
  },
  {
    id: "rn",
    label: "Radiologische/nucleaire aanval",
    show: ["incidentCategory=attack"],
  },
  {
    id: "sabotage",
    label: "Sabotage",
    show: ["incidentCategory=attack"],
  },
  {
    id: "vandalism",
    label: "Vandalisme",
    show: ["incidentCategory=attack"],
  },
].sort(sortByLabel);

const societalSectors = [
  { id: "drinking_water", label: "Drinkwater" },
  { id: "education", label: "Onderwijs/Research" },
  { id: "energy_supply", label: "Energievoorziening" },
  { id: "financial_services", label: "Financiële diensten" },
  { id: "food_agriculture", label: "Voedsel/Landbouw" },
  { id: "government_administr.", label: "Overheid/Administrie" },
  { id: "industry", label: "Industrie" },
  { id: "legal_order", label: "Juridisch" },
  { id: "media_culture", label: "Media/Cultuur" },
  { id: "public_health", label: "Volksgezondheid" },
  { id: "public_order", label: "Openbare orde & veiligheid" },
  { id: "retail_trade", label: "Handel" },
  { id: "telecom_internet", label: "Telecom/Internet" },
  { id: "transport", label: "Transport" },
  { id: "water_management", label: "Waterbeheer" },
];

const qualityLevels = [
  {
    id: "unknown",
    label: "Onbekend",
  },
  {
    id: "very_poor",
    label: "Zeer slecht",
  },
  {
    id: "poor",
    label: "Slecht",
  },
  {
    id: "neutral",
    label: "Neutraal",
  },
  {
    id: "good",
    label: "Goed",
  },
  {
    id: "very_good",
    label: "Zeer goed",
  },
];

const improvementLevels = [
  {
    id: "unknown",
    label: "Onbekend",
  },
  {
    id: "none",
    label: "Geen",
  },
  {
    id: "limited",
    label: "Beperkt",
  },
  {
    id: "moderate",
    label: "Gemiddeld",
  },
  {
    id: "considerable",
    label: "Behoorlijk",
  },
  {
    id: "very_high",
    label: "Zeer hoog",
  },
  {
    id: "na",
    label: "Niet van toepassing",
  },
];

// export const templateInfo = {
//   author: 'Dirk Stolk',
//   created: '2018-10-23',
//   version: 'v0.0.1',
//   tableOfContent: 'Table of Content',
//   and: 'and',
//   docInfoTitle: 'Document info',
//   authorLabel: 'Author',
//   releaseLabel: 'Comments',
//   versionLabel: 'Version',
//   createdLabel: 'Created on',
//   updatedLabel: 'Updated on',
//   nextLabel: 'Next',
//   prevLabel: 'Previous',
//   showTemplateSelector: true,
// };

const publicationForm = [
  {
    id: "title",
    label: "Nederlandse title",
    type: "text",
    required: true,
    icon: "title",
    className: "col s6",
  },
  {
    id: "orgTitle",
    label: "Originele titel (indien van toepassing)",
    type: "text",
    icon: "title",
    className: "col s6",
  },
  {
    id: "author",
    type: "text",
    label: "Eerste auteur en/of organisatie",
    icon: "person",
    className: "col s9",
  },
  {
    id: "yearOfPublication",
    type: "number",
    min: 1900,
    max: 2100,
    label: "Jaar van publicatie",
    className: "col s3",
  },
  {
    id: "url",
    label: "Link",
    type: "url",
    icon: "link",
    className: "col s6",
  },
  {
    id: "language",
    label: "Taal",
    type: "select",
    value: "en",
    options: languages,
    className: "col s3",
  },
  {
    id: "dissemination",
    required: true,
    label: "Disseminatieniveau",
    type: "select",
    className: "col s3",
    options: [
      {
        id: "public",
        label: "Publiek",
      },
      {
        id: "restricted",
        label: "Restrictief",
      },
      {
        id: "secret",
        label: "Geheim",
      },
    ],
  },
  {
    id: "otherLanguage",
    label: "Andere taal",
    type: "text",
    show: "language = other",
    options: languages,
    className: "col s3",
  },
] as UIForm<IPublication>;

export const eventTypes = [
  { id: "crisis", label: "Incident, crisis of ramp" },
  { id: "event", label: "Evenement" },
  { id: "prevention", label: "Preventieve activiteit" },
  { id: "test", label: "Test of trial" },
  { id: "training", label: "Training of oefening" },
];

export const gripLevels = [
  { id: "grip-0", label: "GRIP-0/n.v.t." },
  { id: "grip-1", label: "GRIP-1" },
  { id: "grip-2", label: "GRIP-2" },
  { id: "grip-3", label: "GRIP-3" },
  { id: "grip-4", label: "GRIP-4" },
  { id: "grip-5", label: "GRIP-5" },
];

export const cmFunctions = [
  { id: "risk_assessment", label: "Risico inschatting" },
  { id: "planning", label: "Planning/Doctrine" },
  { id: "education_training", label: "Onderwijs & Training" },
  { id: "risk_communication", label: "Crisis/Risico communicatie" },
  { id: "detection_surveillance", label: "Detectie/Surveillance" },
  { id: "alerting", label: "Alarmering, incl. 112" },
  { id: "scale", label: "Opschalen/Afschalen" },
  { id: "fight_incident_sources", label: "Elimineer incident bron" },
  { id: "rescue_operations", label: "Reddingsoperations/SAR" },
  { id: "law_enforcement", label: "Openbare orde en Veiligheid" },
  { id: "evacuation_shelter", label: "Evacuatie & Opvang" },
  { id: "medical_treatment", label: "Eerste Hulp" },
  { id: "c3", label: "C3/Informatiemanagement" },
  { id: "sa", label: "Situation Assessment" },
  { id: "logistics", label: "Logistiek/Resource mgt." },
  { id: "volunteer_management", label: "Vrijwilligers management" },
  { id: "social_media_mining", label: "Social media mining" },
  { id: "debris", label: "Verwijderen afval" },
  { id: "restore", label: "Herstellen kritieke diensten" },
  { id: "crowd_mgmt", label: "Crowd management" },
  { id: "traffic_mgmt", label: "Verkeersmanagement" },
  { id: "decontamination", label: "Decontaminatie" },
  { id: "collaboration", label: "Internationale samenwerking" },
  { id: "needs", label: "Voorzien in basisbehoeften" },
].sort(sortByLabel);

const preSelectedCmFunctions = cmFunctions.map((f) => ({
  ...f,
  show: [`cmFunctions = ${f.id}`],
}));

const solutionTypes = [
  { id: "doctrine", label: "Doctrine/procedure" },
  { id: "equipment", label: "Materiaal/hulpmiddelen" },
  { id: "ict", label: "ICT" },
  { id: "personnel", label: "Personeel" },
  { id: "training", label: "Training" },
  { id: "other", label: "Anders" },
];
const lessonForm: UIForm<ILesson> = [
  { id: "name", type: "text", label: "Title", icon: "title", required: true },
  {
    type: "md",
    value: "##### Observatie",
  },
  {
    id: "cmFunction",
    type: "select",
    label: "Crisis Management functie",
    className: "col s12",
    multiple: true,
    options: preSelectedCmFunctions,
  },
  {
    id: "effectiveness",
    type: "select",
    label: "Waargenomen effectiviteit gedurende de gebeurtenis",
    className: "col s6",
    options: qualityLevels,
  },
  {
    id: "observationInfo",
    label: "Uitleg van de waarneming",
    description:
      "_Beschrijf de waarneming, positieve of negatieve ervaringen, etc. m.b.t. de CM-functie._",
    type: "textarea",
  },

  {
    type: "md",
    value: `##### Verbeterpunten
Oplossing of oplossingsrichting voor (verdere) verbetering van de effectiviteit van het CM proces.`,
  },
  {
    id: "solutionType",
    label: "Aard van de oplossing",
    type: "options",
    multiple: true,
    checkboxClass: "col s12 m6 xl4",
    options: solutionTypes,
  },
  {
    id: "lesson",
    label: "Beschrijving van de oplossing",
    type: "textarea",
  },

  {
    type: "md",
    value: `##### Verwachtingen
Gevolgen van de oplossing(srichting) op de effectiviteit van de van toepassing zijnde CM-functies wanneer deze oplossing geïmplementeerd wordt en toegepast bij alle betrokken CM organisaties:`,
  },
  {
    id: "effectsOnPerformance",
    label: "Verwachtte effectiviteitsverbetering van de CM-functie",
    type: "select",
    className: "col s12",
    options: improvementLevels,
  },
  {
    id: "expectedImprovementsInfo",
    label:
      "Toelichting waarom een verbetering van de CM-functie verwacht wordt",
    type: "textarea",
  },
  {
    type: "md",
    value:
      "Reductie van het aantal slachtoffers en/of schade in geval van een incident, crisis of ramp bij het toepassen van de oplossing in vergelijking tot de huidige praktijk:",
  },
  {
    id: "victimsImprovements",
    label: "Verwachte impactreductie",
    className: "col s6 l4",
    options: improvementLevels,
  },
  // {
  //   id: 'materialDamageImprovements',
  //   label: 'Material damage reduction',
  //   className: 'col s6 l4',
  //   options: improvementLevels,
  // },
  // {
  //   id: 'ciLossImprovements',
  //   label: 'Loss of services reduction',
  //   className: 'col s6 l4',
  //   options: improvementLevels,
  // },
  // {
  //   id: 'socEcoDisruptionImprovements',
  //   label: 'Social/economic disruption reduction',
  //   className: 'col s6 l4',
  //   options: improvementLevels,
  // },
  // {
  //   id: 'environmentalDegradationImprovements',
  //   label: 'Environmental degradation reduction',
  //   className: 'col s6 l4',
  //   options: improvementLevels,
  // },
  {
    id: "explanationImprovements",
    label: "Toelichting op de verwachtte impactreductie",
    type: "textarea",
  },
];

const incidentCategories = [
  { id: "natural", label: "Natuurlijk incident" },
  { id: "technical", label: "Technologisch/menselijk falen" },
  { id: "attack", label: "Opzettelijk incident" },
];
const scale = [
  { id: "local", label: "Lokaal" },
  { id: "regional", label: "Regionaal" },
  { id: "national", label: "Nationaal" },
  { id: "across_border", label: "Grensoverschrijdend" },
  { id: "pan_europe", label: "Pan-Europees" },
  { id: "global", label: "Globaal" },
];
const organisationType = [
  { id: "authority", label: "Autoriteit" },
  { id: "fireBrigade", label: "Brandweer" },
  { id: "civil_protection", label: "Civiele Bescherming" },
  { id: "police", label: "Politie" },
  { id: "medical_services", label: "Medische diensten" },
  { id: "public_services", label: "Andere openbare diensten" },
  { id: "defence", label: "Defencie" },
  { id: "command_centres", label: "Command en/of Control centra" },
  { id: "monitoring_institute", label: "Toezichtshouder" },
  { id: "cip", label: "Kritieke Infrastructuur aanbieder" },
  { id: "ngo_volunteer.", label: "NGO/Vrijwilligersorganisatie" },
  { id: "training", label: "Training instituut" },
  { id: "other", label: "Anders" },
  { id: "research_organisation", label: "Onderzoeksorganisatie" },
  { id: "industry_sme", label: "Industrie/MKB" },
].sort(sortByLabel);

const organisationForm: UIForm<IOrganisation> = [
  {
    id: "name",
    label: "Organisatienaam",
    type: "text",
    className: "col s12 m6",
  },
  {
    id: "type",
    label: "Type organisatie",
    type: "select",
    className: "col s12 m6",
    options: organisationType,
  },
  // {
  //   id: "country",
  //   label: "Land van de organisatie",
  //   type: "select",
  //   className: "col s12 m4",
  //   options: countries,
  // },
  {
    id: "info",
    label: "Rol gedurende de gebeurtenis",
    type: "textarea",
  },
];

export interface IEditor {
  name?: string;
  organisation?: string;
  country?: string;
  lastEdit?: Date;
  info?: string;
}

const editorForm = [
  {
    id: "name",
    label: "Naam",
    type: "text",
    className: "col s6",
    iconName: "title",
    required: true,
  },
  {
    id: "organisation",
    type: "text",
    label: "Organisatie",
    className: "col s6",
  },
  {
    id: "country",
    label: "Veiligheidsregio",
    type: "select",
    options: veiligheidsregios,
    className: "col s6",
  },
  {
    id: "lastEdit",
    label: "Laaste bewerking op",
    type: "date",
    className: "col s6",
  },
  {
    id: "info",
    label: "Beschrijving van de aangeboden inhoud",
    type: "textarea",
  },
] as UIForm<IEditor>;

const multimediaForm = [
  { id: "desc", label: "Korte beschrijving", type: "textarea" },
  { id: "owner", label: "Eigenaar", type: "text", className: "col s6" },
  {
    id: "yearOfPublication",
    type: "number",
    min: 1900,
    max: 2100,
    label: "Publicatiejaar",
    className: "col s6",
  },
  { id: "url", label: "Link", type: "url", icon: "link", className: "col s12" },
];

export const llf: UIForm<IEvent> = [
  { id: "Algemene kenmerken gebeurtenis", type: "section" },
  {
    type: "md",
    value: `#### Algemene kenmerken gebeurtenis
Naam en algemene kenmerken om de gebeurtenis te beschrijven.`,
  },
  {
    id: "name",
    label: "Naam van de beoordeelde gebeurtenis",
    type: "text",
    maxLength: 70,
    required: true,
    className: "col s12 m8",
  },
  {
    id: "eventType",
    label: "Type gebeurtenis",
    type: "select",
    required: true,
    className: "col s12 m4",
    options: eventTypes,
  },
  {
    id: "date",
    type: "date",
    label: "Start datum",
    required: true,
    className: "col s12 m4",
  },
  {
    id: "duration",
    type: "number",
    label: "Duur (in dagen)",
    value: 1 as any,
    required: true,
    className: "col s12 m4",
  },
  {
    id: "level",
    type: "select",
    label: "GRIP niveau",
    required: true,
    className: "col s12 m4",
    options: eventTypes,
  },
  {
    id: "locationText",
    label: "Locatie van de gebeurtenis",
    required: true,
    type: "textarea",
    className: "col s12",
  },
  {
    id: "desc",
    label: "Korte beschrijving van de gebeurtenis",
    type: "textarea",
  },

  // Incident karakteristieken
  {
    id: "characteristics",
    type: "section",
    label: "Incident karakteristieken",
  },
  {
    type: "md",
    value: `#### Incident karakteristieken
Beschrijving van het verloop van de gebeurtenis: met welk incident begon het, welke andere incidenten vloeiden hier uit voort, en wat was hun impact op de maatschappij.`,
  },
  {
    id: "incidentCategory",
    label: "Incidentcategorie",
    required: true,
    className: "col s12 m6",
    type: "select",
    options: incidentCategories,
  },
  {
    id: "initialIncident",
    label: "Startincident",
    required: true,
    className: "col s12 m6",
    type: "select",
    options: incidentTypes,
  },
  {
    id: "otherIncidents",
    label: "Vervolgincidenten",
    description: "_Neveneffecten of ketenincidenten_",
    className: "col s12",
    multiple: true,
    options: incidentTypes
      .filter((i) => i.show[0].indexOf("attack") < 0)
      .map((i) => ({ id: i.id, label: i.label })),
  },
  {
    id: "incidentInfo",
    label: "Toelichting van het incident",
    type: "textarea",
  },
  {
    id: "scale",
    label: "Schaal van het incident en de impact",
    type: "select",
    required: true,
    className: "col s6",
    options: scale,
  },

  {
    id: "progression",
    label: "Verloop van het incident op hoofdlijnen",
    repeat: true,
    pageSize: 20,
    type: [
      {
        id: "time",
        label: "Tijdstip",
        type: "time",
        className: "col s4 m2",
      },
      {
        id: "event",
        label: "Omschrijving",
        type: "textarea",
        className: "col s8 m10",
      },
    ],
  },

  //

  { type: "md", value: "#### Aangetaste maatschappelijke sectoren" },
  {
    id: "societalSectors",
    label: "Kies één of meer",
    type: "options",
    required: true,
    checkboxClass: "col s6 xl4",
    options: societalSectors,
  },
  {
    id: "societalSectorsAdditional",
    label: "Andere betrokken maatschappelijke sectoren, indien van toepassing",
    type: "textarea",
    show: ["societalSectors = other"],
  },
  {
    id: "societalSectorsInfo",
    label: "Toelichting",
    type: "textarea",
  },
  {
    type: "md",
    value: `#### Maatschappelijke impact van het incident

Beschrijving van de (potentiële) impact van het incident op de maatschappij, uitgedrukt in criteria zoals gebruikt bij [UNISDR](https://www.unisdr.org/we/inform/terminology), en van de problemen die werden aangepakt door de crisis management organisaties.`,
  },
  {
    id: "victims",
    label: "Aantal slachtoffers",
    type: "textarea",
    placeholder: "Overleden of verwonde personen.",
  },
  {
    id: "damage",
    label: "Materiële schade",
    type: "textarea",
  },
  {
    id: "lossOfServices",
    label: "Uitval van diensten",
    type: "textarea",
  },
  {
    id: "disruption",
    label: "Sociale/economische disruptie",
    type: "textarea",
  },
  {
    id: "environment",
    label: "Milieuschade",
    type: "textarea",
  },

  // SCALE
  { id: "geo", type: "section", label: "Geografische karakteristieken" },
  {
    type: "md",
    value: `#### Geografische karakteristieken van de gebeurtenis

Geographic dimensies van het verloop van de gebeurtenis.`,
  },
  // {
  //   id: 'geo',
  //   label: 'Inside and/or outside the EU',
  //   type: 'select',
  //   required: true,
  //   className: 'col s6 m4',
  //   options: geographicRegion,
  // },
  // {
  //   id: 'international',
  //   label: 'International dimension',
  //   type: 'select',
  //   required: true,
  //   className: 'col s6 m4',
  //   options: internationalDimension,
  // },
  {
    id: "vrs",
    label: "Betrokken veiligheidsregio's",
    required: true,
    type: "options",
    checkboxClass: "col s6 m4",
    options: veiligheidsregios,
  },
  {
    id: "memberCountries",
    label: "Betrokken landen",
    multiple: true,
    type: "select",
    options: countries,
    className: "col s6",
  },
  {
    id: "otherCountries",
    label: "Andere landen",
    type: "text",
    className: "col s6",
  },
  {
    id: "intInstitutions",
    label: "Internationale instituten",
    type: "textarea",
  },
  {
    id: "scaleExplanation",
    label: "Uitleg van de geografische schaal",
    type: "textarea",
  },
  {
    type: "md",
    value: `##### Markeer de gebeurtenis op de kaart

_Gebruik de knoppen aan de linkerkant om de kaart te bewerken. Je kunt lijnen, veelhoeken, vierkanten en punten van belang toevoegen. Vergeet niet op de opslagknop te drukken (een na laatste) om je wijzigingen op te slaan._`,
  },
  { id: "location", type: "map", className: "col s12" },

  // Involved organisations
  { id: "organisations", type: "section", label: "Betrokken organisaties" },
  {
    type: "md",
    value: `#### Organisaties betrokken bij de uitvoering van de CM functie(s)

Lijst van organisaties die betrokken waren tijdens de uitvoering van een of meerdere crisismanagement functies.`,
  },
  {
    id: "organisations",
    label: "Voeg organisatie toe",
    repeat: true,
    inline: true,
    pageSize: 3,
    type: organisationForm as any,
    i18n: {
      createRepeat: "Maak een nieuwe organisatie",
      editRepeat: "Bewerk organisatie",
    },
  },

  // Impact & Challenges
  { id: "impact", type: "section", label: "Kritieke CM-processen" },
  {
    type: "md",
    value: "#### Kritieke crisismanagementprocessen",
  },
  {
    id: "cmFunctions",
    type: "options",
    multiple: true,
    required: true,
    label:
      "CM functie(s) van specifiek belang om deze gebeurtenis adequaat af te handelen",
    className: "col s12",
    checkboxClass: "col s12 m6",
    options: cmFunctions,
  },
  {
    id: "challengesInfo",
    label: "Toelichting op de uitdaging(en)",
    type: "textarea",
  },

  // LESSONS
  { id: "lessons", type: "section", label: "Lessen" },
  { type: "md", value: "#### Lessen" },
  {
    type: "md",
    value:
      "Geleerde lessen kunnen toegevoegd worden door op het + teken te klikken.",
  },

  {
    id: "lessons",
    label: "Voeg een les toe",
    repeat: true,
    type: lessonForm as any,
    pageSize: 1,
    propertyFilter: "name",
    filterLabel: "Filter op naam",
  },

  // { id: 'sources', type: 'section' },
  // { type: 'md', value: '#### Sources of information' },
  { id: "publicaties", type: "section" },
  { type: "md", value: "#### Publicaties" },
  {
    id: "publications",
    label: "Nieuwe publicatie",
    repeat: true,
    inline: true,
    pageSize: 3,
    type: publicationForm as any,
    i18n: {
      createRepeat: "Maak een nieuwe publicatie aan",
      editRepeat: "Bewerk publicatie",
    },
  },
  { id: "multimedia", label: "Multimedia bronnen", type: "section" },
  { type: "md", value: "#### Multimedia bronnen" },
  {
    id: "multimedia",
    label: "Nieuwe multimedia bron",
    repeat: true,
    type: multimediaForm as any,
    pageSize: 3,
    i18n: {
      createRepeat: "Maak een nieuwe multimedia bron aan",
      editRepeat: "Bewerk multimedia bron",
    },
  },
  { id: "editors", type: "section" },
  { type: "md", value: "#### Editors" },
  {
    id: "editors",
    label: "Add editor",
    className: "col s12",
    repeat: true,
    type: editorForm as any,
    i18n: {
      createRepeat: "Maak een nieuwe editor aan",
      editRepeat: "Bewerk editor",
    },
  },
  {
    id: "created",
    label: 'Gebeurtenis "{{event}}" aangemaakt op:',
    type: "date",
    required: true,
  },
];
