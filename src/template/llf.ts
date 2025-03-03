import { UIForm } from "mithril-ui-form";
import { IEvent, IPublication } from "../models";
import { ILesson } from "../models/lesson";
import { IOrganisation } from "../models/organisation";

export const veiligheidsregios: { id: string; label: string }[] = [
  { id: "vr01", label: "01 Groningen" },
  { id: "vr02", label: "02 Fryslân" },
  { id: "vr03", label: "03 Drenthe" },
  { id: "vr04", label: "04 IJsselland" },
  { id: "vr05", label: "05 Twente" },
  { id: "vr06", label: "06 Noord- en Oost-Gelderland" },
  { id: "vr07", label: "07 Gelderland-Midden" },
  { id: "vr08", label: "08 Gelderland-Zuid" },
  { id: "vr09", label: "09 Utrecht" },
  { id: "vr10", label: "10 Noord-Holland Noord" },
  { id: "vr11", label: "11 Zaanstreek-Waterland" },
  { id: "vr12", label: "12 Kennemerland" },
  { id: "vr13", label: "13 Amsterdam-Amstelland" },
  { id: "vr14", label: "14 Gooi en Vechtstreek" },
  { id: "vr15", label: "15 Haaglanden" },
  { id: "vr16", label: "16 Hollands Midden" },
  { id: "vr17", label: "17 Rotterdam-Rijnmond" },
  { id: "vr18", label: "18 Zuid-Holland Zuid" },
  { id: "vr19", label: "19 Zeeland" },
  { id: "vr20", label: "20 Midden- en West-Brabant" },
  { id: "vr21", label: "21 Brabant-Noord" },
  { id: "vr22", label: "22 Brabant-Zuidoost" },
  { id: "vr23", label: "23 Limburg-Noord" },
  { id: "vr24", label: "24 Zuid-Limburg" },
  { id: "vr25", label: "25 Flevoland" },
  { id: "vr26", label: "26 Landelijk" },
];

export const countries = [
  // {
  //   id: "austria",
  //   label: "Austria",
  // },
  {
    id: "belgium",
    label: "België",
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
    label: "Duitsland",
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

const incidentCategories = [
  // { id: "natural", label: "Natuurlijk incident" },
  // { id: "urban", label: "Incident in bebouwing" },
  // { id: "chemical", label: "Incident met gevaarlijke stoffen" },
  // { id: "infra", label: "Incident in vitale infrastructuur" },
  // { id: "transport", label: "Transportincident" },
  // { id: "health", label: "Gezondheidsincident" },
  // { id: "social", label: "Sociaal-maatschappelijk incident" },
  // { id: "technical", label: "Technologisch/menselijk falen" },
  // { id: "attack", label: "Opzettelijk incident" },

  { id: "infectieziekten", label: "Infectieziekten" },
  { id: "natuurrampen", label: "Klimaat- en natuurrampen" },
  { id: "infra", label: "Bedreiging vitale infrastructuur" },
  { id: "cyber", label: "Cyberdreigingen" },
  { id: "ongeval", label: "Zware ongevallen" },
  { id: "terrorisme", label: "Extremisme en terrorisme" },
  { id: "oov", label: "Overige OOV" },
];

export type IncidentType =
  | "aardbeving"
  | "afval"
  | "bomaanslag"
  | "brand"
  | "brandstichting"
  | "buien"
  | "cbrn"
  | "cybercrime"
  | "drinkwater"
  | "elektriciteit"
  | "epidemie"
  | "explosief"
  | "gas"
  | "giftig"
  | "hittegolf"
  | "ict"
  | "instorting"
  | "koudegolf"
  | "kust"
  | "luchtvaart"
  | "natuurbrand"
  | "nucleair"
  | "onrust"
  | "paniek"
  | "riool"
  | "rivier"
  | "sabotage"
  | "scheepvaart"
  | "spoor"
  | "storm"
  | "tunnel"
  | "vandalisme"
  | "vloedgolf"
  | "voedsel"
  | "voo"
  | "waterincident"
  | "wegverkeer"
  | "winter"
  | "ziekte";

export const incidentTypes: Array<{
  id: IncidentType;
  label: string;
  show: string[];
}> = [
  {
    id: "ziekte" as IncidentType,
    label: "Plaag, dier- of plantziekte",
    show: ["incidentCategory=infectieziekten"],
  },
  {
    id: "epidemie" as IncidentType,
    label: "Epidemie / Pandemie",
    show: ["incidentCategory=infectieziekten"],
  },
  {
    id: "winter" as IncidentType,
    label: "Extreem weer - hagel/sneeuwval/ijzel",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "buien" as IncidentType,
    label: "Extreem weer - hevige buien/onweer",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "hittegolf" as IncidentType,
    label: "Extreem weer - hittegolf/droogte",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "koudegolf" as IncidentType,
    label: "Extreem weer - koudegolf",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "storm" as IncidentType,
    label: "Extreem weer - storm/tornado",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "aardbeving" as IncidentType,
    label: "Aardbeving",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "natuurbrand" as IncidentType,
    label: "Natuurbrand",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "kust" as IncidentType,
    label: "Overstroming - kust",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "rivier" as IncidentType,
    label: "Overstroming - rivier",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "vloedgolf" as IncidentType,
    label: "Overstroming - vloedgolf",
    show: ["incidentCategory=natuurrampen"],
  },
  {
    id: "drinkwater" as IncidentType,
    label: "Storing - drinkwater",
    show: ["incidentCategory=infra"],
  },
  {
    id: "elektriciteit" as IncidentType,
    label: "Storing - elektriciteitsvoorziening",
    show: ["incidentCategory=infra"],
  },
  {
    id: "gas" as IncidentType,
    label: "Storing - gasvoorziening",
    show: ["incidentCategory=infra"],
  },
  {
    id: "riool" as IncidentType,
    label: "Storing - riool-/afvalwaterzuivering",
    show: ["incidentCategory=infra"],
  },
  {
    id: "voedsel" as IncidentType,
    label: "Storing - voedselvoorziening",
    show: ["incidentCategory=infra"],
  },
  {
    id: "cybercrime" as IncidentType,
    label: "Cybercrime",
    show: ["incidentCategory=cyber"],
  },
  {
    id: "ict" as IncidentType,
    label: "Storing - telecommunicatie/ICT",
    show: ["incidentCategory=infra"],
  },
  {
    id: "waterincident" as IncidentType,
    label: "Incident op of onder water",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "tunnel" as IncidentType,
    label: "Incident in tunnel/ondergrondse infra",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "luchtvaart" as IncidentType,
    label: "Transportincident - luchtvaart",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "scheepvaart" as IncidentType,
    label: "Transportincident - scheepvaart",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "spoor" as IncidentType,
    label: "Transportincident - spoor",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "wegverkeer" as IncidentType,
    label: "Transportincident - wegverkeer",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "explosief" as IncidentType,
    label: "Ongeval brandbare/explosieve stoffen",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "giftig" as IncidentType,
    label: "Ongeval giftige stoffen",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "nucleair" as IncidentType,
    label: "Ongeval radiologische/nucleaire stoffen",
    show: ["incidentCategory=ongeval"],
  },
  {
    id: "bomaanslag" as IncidentType,
    label: "Bomaanslag",
    show: ["incidentCategory=terrorisme"],
  },
  {
    id: "brandstichting" as IncidentType,
    label: "Brandstichting",
    show: ["incidentCategory=terrorisme"],
  },
  {
    id: "geweld" as IncidentType,
    label: "Extreem geweld",
    show: ["incidentCategory=terrorisme"],
  },
  {
    id: "cbrn" as IncidentType,
    label: "CBRN-aanslag",
    show: ["incidentCategory=terrorisme"],
  },
  {
    id: "sabotage" as IncidentType,
    label: "Sabotage",
    show: ["incidentCategory=terrorisme"],
  },
  {
    id: "instorting" as IncidentType,
    label: "Instorting gebouw/kunstwerk",
    show: ["incidentCategory=oov"],
  },
  {
    id: "brand" as IncidentType,
    label: "Brand in gebouw/infrastructuur",
    show: ["incidentCategory=oov"],
  },
  {
    id: "paniek" as IncidentType,
    label: "Paniek in menigte",
    show: ["incidentCategory=oov"],
  },
  {
    id: "vandalisme" as IncidentType,
    label: "Vandalisme",
    show: ["incidentCategory=oov"],
  },
  {
    id: "voo" as IncidentType,
    label: "Verstoring openbare orde",
    show: ["incidentCategory=oov"],
  },
  {
    id: "volks­gezondheid" as IncidentType,
    label: "Verstoring volks­gezondheid",
    show: ["incidentCategory=oov"],
  },
  {
    id: "onrust" as IncidentType,
    label: "Sociale onrust",
    show: ["incidentCategory=oov"],
  },
  {
    id: "afval" as IncidentType,
    label: "Verstoring afvalverwerking",
    show: ["incidentCategory=infra"],
  },

  // { id: "flooding", label: "Overstroming", show: ["incidentCategory=natural"] },
  // { id: "fire", label: "Natuurbrand", show: ["incidentCategory=natural"] },
  // {
  //   id: "extreme_weather",
  //   label: "Extreem weer",
  //   show: ["incidentCategory=natural"],
  // },
  // { id: "earthquake", label: "Aardbeving", show: ["incidentCategory=natural"] },
  // { id: "plague", label: "Plaag", show: ["incidentCategory=natural"] },
  // {
  //   id: "animal_disease",
  //   label: "Dierziekte",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "fire_object",
  //   label: "Brand in kwetsbaar object",
  //   show: ["incidentCategory=urban"],
  // },
  // {
  //   id: "collapse",
  //   label: "Instorting gebouw/kunstwerk",
  //   show: ["incidentCategory=urban"],
  // },
  // {
  //   id: "explosives",
  //   label: "Brandbare of explosieve stoffen",
  //   show: ["incidentCategory=chemical"],
  // },
  // {
  //   id: "toxic",
  //   label: "Giftige stoffen",
  //   show: ["incidentCategory=chemical"],
  // },
  // {
  //   id: "energy_supply",
  //   label: "Energievoorziening",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "water_supply",
  //   label: "Drinkwatervoorziening",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "sewage",
  //   label: "Riool-/afvalwaterzuivering",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "ict",
  //   label: "Telecommunicatie/ICT",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "waste_disposal",
  //   label: "Afvalverwerking",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "food_supply",
  //   label: "Voedselvoorziening",
  //   show: ["incidentCategory=infra"],
  // },
  // {
  //   id: "air",
  //   label: "Luchtvaartincident",
  //   show: ["incidentCategory=transport"],
  // },
  // {
  //   id: "water",
  //   label: "Incident op of onder water",
  //   show: ["incidentCategory=transport"],
  // },
  // {
  //   id: "traffic",
  //   label: "Verkeersincident op land",
  //   show: ["incidentCategory=transport"],
  // },
  // {
  //   id: "tunnel",
  //   label: "Incident in tunnel",
  //   show: ["incidentCategory=transport"],
  // },
  // {
  //   id: "health",
  //   label: "Bedreiging volksgezondheid",
  //   show: ["incidentCategory=health"],
  // },
  // { id: "epidemic", label: "Ziektegolf", show: ["incidentCategory=health"] },
  // {
  //   id: "panique",
  //   label: "Paniek in menigte",
  //   show: ["incidentCategory=social"],
  // },
  // {
  //   id: "order",
  //   label: "Verstoring openbare orde",
  //   show: ["incidentCategory=social"],
  // },

  // TODO Onderstaande verdwijnen later

  // {
  //   id: "animalDisease",
  //   label: "Dierenziekte",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "avalanche",
  //   label: "Lawine",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "earthquake",
  //   label: "Aardbeving",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "epidemics",
  //   label: "Epidemie / Pandemie",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "cold",
  //   label: "Extreme kou",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "heat",
  //   label: "Extreme warmte/droogte",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "hail",
  //   label: "Extreme hagel/sneeuwval",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "rain",
  //   label: "Extreme regen",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "coastal",
  //   label: "Overstroming: kust",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "flash",
  //   label: "Overstroming: Flash flood",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "river",
  //   label: "Overstroming: rivier",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "wildfire",
  //   label: "Bosbrand",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "landslide",
  //   label: "Aardverschuiving",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "meteorites",
  //   label: "Meteorieten",
  //   show: ["incidentCategory=natural"],
  // },
  // {
  //   id: "storm",
  //   label: "Storm/tornado",
  //   show: ["incidentCategory=natural"],
  // },
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

  // {
  //   id: "infra",
  //   label: "Instorting vitale infrastructuur",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "explosion",
  //   label: "Explosie/gaslek",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "fire",
  //   label: "Brand in gebouw/infrastructuur",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "chemical",
  //   label: "Industrie: Chemische lekkage",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "industrial_explosion",
  //   label: "Industrie: Explosie/brand",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "nuclear",
  //   label: "Industrie: Nucleair ongeluk",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "gas_supply",
  //   label: "Uitval: Gas",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "power",
  //   label: "Uitval: Electriciteit)",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "ict_failure",
  //   label: "Uitval: Telecom/ICT",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "drinkingwater",
  //   label: "Uitval: Watervoorziening",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "aircrash",
  //   label: "Transport: Vliegongeval",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "railaccident",
  //   label: "Transport: Treinincident",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "roadaccident",
  //   label: "Transport: Verkeersinicident",
  //   show: ["incidentCategory=technical"],
  // },
  // {
  //   id: "wateraccident",
  //   label: "Transport: Waterincident",
  //   show: ["incidentCategory=technical"],
  // },

  // {
  //   id: "arson",
  //   label: "Brandstichting",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "biological",
  //   label: "Biologische aanval",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "bomb",
  //   label: "Bom (explosieven)",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "chemical_attack",
  //   label: "Chemische aanval",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "cyber_attack",
  //   label: "Cyber aanval/criminaliteit",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "dumping",
  //   label: "Afval dumpen",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "rn",
  //   label: "Radiologische/nucleaire aanval",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "sabotage",
  //   label: "Sabotage",
  //   show: ["incidentCategory=attack"],
  // },
  // {
  //   id: "vandalism",
  //   label: "Vandalisme",
  //   show: ["incidentCategory=attack"],
  // },
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

// const improvementLevels = [
//   {
//     id: "unknown",
//     label: "Onbekend",
//   },
//   {
//     id: "none",
//     label: "Geen",
//   },
//   {
//     id: "limited",
//     label: "Beperkt",
//   },
//   {
//     id: "moderate",
//     label: "Gemiddeld",
//   },
//   {
//     id: "considerable",
//     label: "Behoorlijk",
//   },
//   {
//     id: "very_high",
//     label: "Zeer hoog",
//   },
//   {
//     id: "na",
//     label: "Niet van toepassing",
//   },
// ];

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
    label: "Nederlandse titel",
    type: "text",
    required: true,
    icon: "title",
    className: "col s7",
  },
  {
    id: "orgTitle",
    label: "Originele titel (indien van toepassing)",
    type: "text",
    icon: "title",
    className: "col s5",
  },
  {
    id: "author",
    type: "text",
    label: "Eerste auteur en/of organisatie",
    icon: "person",
    className: "col s4",
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
    className: "col s2",
    options: [
      {
        id: "public",
        label: "Publiek",
      },
      {
        id: "restricted",
        label: "Restrictief",
      },
      // {
      //   id: "secret",
      //   label: "Geheim",
      // },
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
    id: "localUrl",
    label: "Upload publicatie",
    type: "file",
    url: `${API_SERVER}/upload/public`,
    options: [{ id: ".pdf" }],
    className: "col s6",
  },
] as UIForm<IPublication>;

export const eventTypes = [
  { id: "crisis", label: "Incident, ramp of crisis" },
  { id: "prevention", label: "Voorbereiding" },
  { id: "training", label: "Oefening" },
  { id: "event", label: "Evenement" },
  // { id: "test", label: "Test" },
];

export const gripLevels = [
  { id: "grip-0", label: "GRIP-0" },
  { id: "grip-1", label: "GRIP-1" },
  { id: "grip-2", label: "GRIP-2" },
  { id: "grip-3", label: "GRIP-3" },
  { id: "grip-4", label: "GRIP-4" },
  { id: "grip-5", label: "GRIP-5" },
];

export const cmFunctions = [
  { id: "alerts", label: "Melding en alarmering" },
  { id: "level", label: "Op- en afschaling" },
  { id: "leadership", label: "Leiding en coördinatie" },
  { id: "info_mgmt", label: "Informatiemanagement" },
  { id: "comm", label: "Crisiscommunicatie" },
  { id: "after", label: "Nafase" },
];

// const preSelectedCmFunctions = cmFunctions.map((f) => ({
//   ...f,
//   show: [`cmFunctions = ${f.id}`],
// }));

const solutionTypes = [
  { id: "doctrine", label: "Doctrine/procedure" },
  { id: "equipment", label: "Materiaal/hulpmiddelen" },
  { id: "ict", label: "ICT" },
  { id: "personnel", label: "Personeel" },
  { id: "training", label: "Training" },
  { id: "other", label: "Anders" },
];
const lessonForm: UIForm<ILesson> = [
  {
    id: "name",
    type: "text",
    label: "Korte naam",
    icon: "title",
    required: true,
  },
  {
    type: "md",
    value: "##### Observatie / Analyse",
  },
  {
    id: "cmFunction",
    type: "select",
    label: "Crisismanagementproces",
    required: true,
    className: "col s12 m9",
    options: cmFunctions,
    // preSelectedCmFunctions,
  },
  {
    id: "effectiveness",
    type: "select",
    label: "Waargenomen effectiviteit",
    className: "col s12 m3",
    options: qualityLevels,
  },
  {
    id: "observationInfo",
    label: "Beschrijf de observatie",
    description: "Beschrijf de observatie gerelateerd aan het CM proces._",
    type: "textarea",
  },

  {
    type: "md",
    value: `##### Conclusie
Oplossing of oplossingsrichting voor (verdere) verbetering van de effectiviteit van het CM proces.`,
  },
  {
    id: "judgement",
    label: "Aanbeveling / conclusie",
    type: "options",
    multiple: true,
    checkboxClass: "col s12 m6 xl4",
    options: [
      { id: "doen", label: "Groen (doorgaan en behouden)" },
      { id: "letop", label: "Oranje (aanpassen en verbeteren)" },
      { id: "laten", label: "Rood (stoppen/verbeteren)" },
    ],
  },
  {
    id: "lesson",
    label: "Toelichting",
    type: "textarea",
  },
  {
    id: "solutionType",
    label: "Oplossingsrichting (indien van toepassing)",
    type: "options",
    multiple: true,
    checkboxClass: "col s12 m6 xl4",
    options: solutionTypes,
  },

  // {
  //   type: "md",
  //   value: `##### Overige opmerkingen`,
  //   // Gevolgen van de oplossing(srichting) op de effectiviteit van de van toepassing zijnde CM processen wanneer deze oplossing geïmplementeerd wordt en toegepast bij alle betrokken CM organisaties:`,
  // },
  // {
  //   id: "effectsOnPerformance",
  //   label: "Verwachtte effectiviteitsverbetering van het CM proces",
  //   type: "select",
  //   className: "col s12",
  //   options: improvementLevels,
  // },
  {
    id: "expectedImprovementsInfo",
    label: "Overige opmerkingen",
    type: "textarea",
  },
  // {
  //   type: "md",
  //   value:
  //     "Reductie van het aantal slachtoffers en/of schade in geval van een incident, crisis of ramp bij het toepassen van de oplossing in vergelijking tot de huidige praktijk:",
  // },
  // {
  //   id: "victimsImprovements",
  //   label: "Verwachte impactreductie",
  //   className: "col s6 l4",
  //   options: improvementLevels,
  // },
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
  // {
  //   id: "explanationImprovements",
  //   label: "Toelichting op de verwachtte impactreductie",
  //   type: "textarea",
  // },
];

/** Scale of the incident */
const scale = [
  { id: "local", label: "Lokaal" },
  { id: "regional", label: "Regionaal" },
  { id: "multi_regions", label: "Bovenregionaal" },
  { id: "national", label: "Nationaal" },
  { id: "international", label: "Internationaal" },
];

const organisationType = [
  // Type kolom: Algemeen
  { id: "vr", label: "Veiligheidsregio", show: ["column = gen"] },
  { id: "Gemeente", label: "Gemeente", show: ["column = gen"] },
  { id: "brw", label: "Brandweer", show: ["column = gen"] },
  { id: "pol", label: "Politie", show: ["column = gen"] },
  { id: "ghor", label: "Geneeskundige dienst", show: ["column = gen"] },
  { id: "def", label: "Defensie", show: ["column = gen"] },
  { id: "om", label: "Openbaar Ministerie", show: ["column = gen"] },
  { id: "od", label: "Omgevingsdienst", show: ["column = gen"] },
  // Type kolom: Functioneel
  { id: "ws", label: "Waterschap", show: ["column = fun"] },
  { id: "rws", label: "RWS", show: ["column = fun"] },
  { id: "pr", label: "ProRail", show: ["column = fun"] },
  { id: "energy", label: "Energieleverancier", show: ["column = fun"] },
  { id: "net_energy", label: "Netbeheerder energie", show: ["column = fun"] },
  { id: "net_telecom", label: "Netbeheerder telecom", show: ["column = fun"] },
  { id: "water", label: "Drinkwaterbedrijf", show: ["column = fun"] },
  { id: "transport", label: "Vervoersmaatschappij", show: ["column = fun"] },
  { id: "other", label: "Anders", show: ["column = fun"] },
];
//.sort(sortByLabel);

const organisationForm: UIForm<IOrganisation> = [
  {
    id: "column",
    label: "Type kolom",
    type: "select",
    className: "col s12 m3",
    options: [
      { id: "gen", label: "Algemeen " },
      { id: "fun", label: "Functioneel " },
    ],
  },
  {
    id: "type",
    label: "Type organisatie",
    type: "select",
    className: "col s12 m4",
    options: organisationType,
  },
  {
    id: "name",
    label: "Organisatienaam",
    type: "text",
    className: "col s12 m5",
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
    label: "Betrokkenheid bij de gebeurtenis (taak of rol)",
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
    id: "vrs",
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
    label: "Datum",
    className: "col s12 m4",
  },
  {
    id: "duration",
    type: "number",
    label: "Duur (in dagen)",
    value: 1 as any,
    className: "col s12 m4",
  },
  {
    id: "level",
    type: "select",
    label: "Opschalingsniveau",
    required: true,
    className: "col s12 m4",
    options: gripLevels,
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
    label: "Karakteristieken",
  },
  {
    type: "md",
    value: `#### Karakteristieken
Beschrijving van het verloop van de gebeurtenis: met welk incident begon het, welke andere incidenten vloeiden hier uit voort, en wat was hun impact op de maatschappij.`,
  },
  {
    id: "incidentCategory",
    label: "Dreigingsthema",
    required: true,
    className: "col s12 m6",
    type: "select",
    options: incidentCategories,
  },
  {
    id: "initialIncident",
    label: "Dreigingscategorie",
    required: true,
    className: "col s12 m6",
    type: "select",
    options: incidentTypes,
  },
  {
    id: "otherIncidents",
    label: "Neveneffecten",
    className: "col s12",
    multiple: true,
    type: "options",
    checkboxClass: "col s6 xl4",
    options: incidentTypes
      .filter((i) => i.show[0].indexOf("attack") < 0)
      .map((i) => ({ id: i.id, label: i.label })),
  },
  {
    id: "incidentInfo",
    label: "Scenario",
    type: "textarea",
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
    value: `#### Impact van het incident

    Beschrijving van de (potentiële) impact van het incident. Hiervoor maken we gebruik van de de 'Methodiek nationale veiligheid' waarin wordt gekeken of en in welke mate een bepaalde gebeurtenis de zes nationale veiligheidsbelangen raakt. De zes belangen zijn elk opgesplitst in één of meerdere meetbare impactcriteria die helpen bij het in kaart brengen van de impact. Een uitgebreide uitleg voor elk van deze onderdelen bevindt zich in de door het ANV opgestelde leidraad risicobeoordeling ([ANV](https://www.rivm.nl/onderwerpen/nationale-veiligheid), 2022).`,
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
  {
    id: "legal",
    label: "Rechtsorde",
    type: "textarea",
  },

  // SCALE
  { id: "geo", type: "section", label: "Geografische karakteristieken" },
  {
    type: "md",
    value: `#### Geografische karakteristieken van de gebeurtenis`,
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
    checkboxClass: "col s6",
    options: veiligheidsregios,
  },
  {
    id: "scale",
    label: "Schaal",
    type: "select",
    required: true,
    className: "col s4",
    options: scale,
  },
  {
    id: "memberCountries",
    placeholder: "Selecteer",
    label: "Betrokken landen behalve Nederland",
    multiple: true,
    type: "select",
    options: countries,
    className: "col s4",
  },
  {
    id: "otherCountries",
    label: "Andere landen",
    type: "text",
    className: "col s4",
  },
  // {
  //   id: "intInstitutions",
  //   label: "Internationale instituten",
  //   type: "textarea",
  // },
  {
    id: "scaleExplanation",
    label: "Uitleg van de geografische schaal",
    type: "textarea",
  },
  {
    type: "md",
    value: `##### Geef de locatie op de kaart aan

_Gebruik de knoppen aan de linkerkant om de kaart te bewerken. Je kunt lijnen, veelhoeken, vierkanten en punten van belang toevoegen. Vergeet niet op de opslagknop te drukken (een na laatste) om je wijzigingen op te slaan._`,
  },
  { id: "location", type: "map", className: "col s12" },

  // Involved organisations
  { id: "organisations", type: "section", label: "Betrokken organisaties" },
  {
    type: "md",
    value: `#### Organisaties betrokken bij de uitvoering van de CM processen

Lijst van organisaties die betrokken waren tijdens de uitvoering van een of meerdere crisismanagementprocessen.`,
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
  // { id: "impact", type: "section", label: "Kritieke CM-processen" },
  // {
  //   type: "md",
  //   value: "#### Kritieke crisismanagementprocessen",
  // },
  // {
  //   id: "cmFunctions",
  //   type: "options",
  //   multiple: true,
  //   required: true,
  //   label:
  //     "CM processen van specifiek belang om deze gebeurtenis adequaat af te handelen",
  //   className: "col s12",
  //   checkboxClass: "col s12 m6",
  //   options: cmFunctions,
  // },
  // {
  //   id: "challengesInfo",
  //   label: "Toelichting op de uitdaging(en)",
  //   type: "textarea",
  // },

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
  { id: "editors", label: "Auteurs", type: "section" },
  { type: "md", value: "#### Auteurs" },
  {
    id: "editors",
    label: "Voeg auteur toe",
    className: "col s12",
    repeat: true,
    type: editorForm as any,
    i18n: {
      createRepeat: "Maak een nieuwe auteur aan",
      editRepeat: "Bewerk auteur",
    },
  },
  {
    id: "created",
    label: 'Gebeurtenis "{{event}}" aangemaakt op:',
    type: "date",
    required: true,
  },
];
