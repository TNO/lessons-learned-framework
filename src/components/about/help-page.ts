import m from "mithril";
import { SlimdownView } from "mithril-ui-form";
import l3 from "../../assets/l3-schema.png";

const md = `<h4 class="primary-text">Uitleg van de Lessons Learned Library</h4>
<h5 class="primary-text">Doel</h5>

De Lessons Learned Library (L3) is een zogenaamde ‘repository’, een soort van online bibliotheek. De L3 is bedoeld om veiligheidsregio’s en andere organisaties die betrokken zijn bij rampenbestrijding en crisismanagement te ondersteunen bij het bewerken, onderhouden, raadplegen en delen van belangrijke positieve en negatieve ervaringen: lessen. Denk aan lessen omtrent de inzet of samenwerking tijdens een groot incident of een andere activiteit zoals een multidisciplinaire oefening. Hierbij is het delen van lessen niet strikt beperkt tot één organisatie. L3 is niet alleen bedoeld om lessen te delen binnen en tussen veiligheidsregio’s maar ook met organisaties zoals gemeenten, hulpdiensten en andere instanties die betrokken zijn bij rampenbestrijding en crisisbeheersing, met als doel om de aanpak van grote incidenten, rampen en crises in Nederland te verbeteren door het leren en gebruikmaken van elkaars ervaringen.

Lessen kunnen worden verzameld uit verschillende soorten gebeurtenissen: routinematige, dagelijkse operaties, bijna-incidenten, crisissituaties, trainingen en oefeningen, experimenten en tests, maar ook uit risicomanagement of andere preventieve activiteiten. Het leren van lessen kan worden beschouwd als een gestructureerde aanpak om op ervaring gebaseerde kennis vast te leggen. Dit kan worden toegepast om doctrines, organisaties, trainingen, uitrusting, leiderschap, personeel en faciliteiten te ontwikkelen en te verbeteren, met als doel om effectievere, efficiëntere en veiligere operaties te realiseren.

In eenvoudige bewoordingen is een les een reeks antwoorden op vragen zoals: 'Wat was de situatie?', 'Wat was de impact?', 'Wat ging goed in de aanpak van de situatie en is de moeite waard om te implementeren?' of 'Wat ging er mis en welke verbeteringen zijn nodig?'. Gebruikers kunnen waardevolle informatie en lessen van gebeurtenissen verstrekken door een nieuwe gebeurtenis aan de bibliotheek toe te voegen. Door het invullen van een gelimiteerd aantal datavelden kunnen gegevens en ervaringen worden gedeeld met andere gemeenschappen voor noodbeheer in Nederland.

Lessen kunnen van uiteenlopende aard of meer of minder van belang zijn buiten de organisatie of sector waar ze zijn verzameld. Daarom stelt een filtersysteem gebruikers in staat om het soort informatie te selecteren dat ze willen raadplegen: informatie over een specifieke gebeurtenis (bijv. intocht van sinterklaas), lessen van een bepaald type gebeurtenis (bijv. oefeningen), bepaalde soorten incidenten (bijv. bosbranden of bomaanslagen), of van specifieke crisismanagementprocessen (bijv. evacuatie of situatiebeoordeling).`;

const md2 = `<h5 class="primary-text">Functionaliteiten en structuur</h5>

De belangrijkste functionaliteiten van de L3 zijn enerzijds het toevoegen en bewerken van gebeurtenissen en de bijbehorende lessen op basis van eigen ervaringen, en anderzijds het vinden en raadplegen van specifieke gebeurtenissen en lessen die andere collega-organisaties hebben gedeeld.

Zoals weergegeven in onderstaand figuur kan elke gebeurtenis in de bibliotheek nul, één of meerdere lessen bevatten. Elke les kan worden gekoppeld aan één of meerdere crisismanagementprocessen. Een bepaald crisismanagementproces (CM-proces) kan dus worden geadresseerd door verschillende lessen van dezelfde gebeurtenis of van andere gebeurtenissen.

<h5 class="primary-text">Gebeurtenissen, lessen en crisismanagementprocessen</h5>

Een **gebeurtenis** wordt beschreven door:

- Een samenvatting inclusief algemene gegevens, zoals het type gebeurtenis (bijv. een incident of een oefening), en de datum, periode en plaats van de gebeurtenis.
- Meer gedetailleerde informatie over het incidentscenario en crisisbeheeroperaties, zoals het initiële incident en opeenvolgende gebeurtenissen, de (potentiële) impact, een kaart van de situatie, betrokken organisaties, en een overzicht van kritieke crisismanagementprocessen die zijn uitgevoerd (kritiek in de in zin van kenmerkend voor de opgedane positieve of negatieve ervaringen).
- Lessen die zijn geleerd uit de gebeurtenis.

De omschrijving van een **les** bestaat uit twee delen:

- Een beschrijving van de waarneming van positieve of negatieve ervaringen met betrekking tot het crisismanagementproces tijdens de gebeurtenis. Dit omvat de prestatie van het uitvoeren van het CM-proces, die wordt uitgedrukt door de effectiviteit (geschiktheid) van het uitvoeren van het CM-proces op een 5-puntsschaal

- De karakterisering van een (potentiële) oplossing om het CM-proces te verbeteren op basis van de opgedane ervaringen tijdens de gebeurtenis. Dit omvat een beschrijving van de verwachte prestatieverbetering van het CM-proces (uitgedrukt op een 5-puntsschaal) zodra deze is geïmplementeerd. Daarnaast kan er een indicatie worden gegeven van de verwachte impactvermindering door de oplossing. Hiertoe worden de vijf impactdimensies van UNISDR gebruikt: aantal slachtoffers, materiële schade, verlies van diensten, sociaal/economisch verlies, en milieudegradatie.

De L3 bevat 24 **crisismanagementprocessen** om uit te kiezen. Dit betreft:

- *Operationele CM-processen*<br>Waarschuwing (112), Crisis-/risicocommunicatie naar de samenleving, Crowdmanagement, Ontsmetting, Spoedeisende gezondheidszorg, Evacuatie en Schuilplaats, Bestrijden/elimineren van incidentbron (bijv. brandbestrijding, stoppen van een lekkage), Handhaving van de wet, Basisbehoeften voor de bevolking verstrekken, Verwijderen van puin, Reddingsoperaties (SAR), en Herstellen van kritieke diensten.
- *Operaties die CM-processen mogelijk maken of ondersteunen*<br>Commando, Controle en Coördinatie (C3)/Informatiebeheer, Detectie/Surveillance, Internationale samenwerking (incl. ondersteuning van het thuisland), Logistiek/Middelenbeheer, Situatiebeoordeling, Sociale media-analyse, Verkeersmanagement, Opschalen/Afschalen van noodhulpdiensten, en Vrijwilligersbeheer.
- *Preparatoire CM-processen*<br>Opleidings en Training, Planning/Doctrinaire ontwikkeling, en Risicobeoordeling.
`;

export const HelpPage = () => ({
  view: () =>
    m(".row", [
      m(SlimdownView, { md }),
      m("img.responsive-img", {
        src: l3,
        style: "margin: 0 auto; padding: 0 10px",
      }),
      m(SlimdownView, { md: md2 }),
    ]),
});
