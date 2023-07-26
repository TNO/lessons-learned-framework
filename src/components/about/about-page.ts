import m from "mithril";
import { SlimdownView } from "mithril-ui-form";
import driverLogo from "../../assets/driver-logo2.png";

const md = `<h4 class="primary-text">Over L3</h4>

Deze versie van de L3 is een uitwerking van de Lessons Learned Library die in 2019 werd ontwikkeld door Dirk Stolk en Erik Vullings van [TNO](https://www.tno.nl) als onderdeel van het Europese onderzoeksproject DRIVER+ ten behoeve van rampenbestrijding in Europe. Deze uitwerking is specifiek gericht op de situatie in Nederland en is tot stand gekomen in samenwerking tussen TNO, het NIPV en de Veiligheidsregio IJsselland.

The [DRIVER+](https://www.driver-project.eu) project has received funding from the European Union's 7th Framework Programme for Research, Technological Development and Demonstration under Grant Agreement (GA) N°#607798.`;

const md2 = `<h4 class="primary-text">Beknopte handleiding</h4>

<h5 class="primary-text">Het selecteren van een gebeurtenis</h5>

Een gebeurtenis kan worden geselecteerd in het hoofdmenu door op de knop van de betreffende gebeurtenis te klikken in de lijst van gebeurtenissen in de bibliotheek. Er kan ook gebruik worden gemaakt van filteropties aan de linkerkant van het scherm om de lijst met beschikbare gebeurtenissen te verkleinen. Filteren kan worden uitgevoerd:

- Door te filteren op tekst middels een trefwoord.
- Door veiligheidsregio’s, gebeurtenissen, incidenten (initieel of secundair), en/of CM-processen te selecteren.

Nadat een gebeurtenis is geselecteerd, wordt het betreffende document weergegeven met de belangrijkste informatie die is verstrekt over deze gebeurtenis. Indien nodig kan dit document worden afgedrukt (Ctrl P).

Indien iemand is ingelogd als editor, verschijnt rechtsboven de knop \`BEWERK GEBEURTENIS\`. Door op deze knop te klikken, kunnen meer gedetailleerde gegevens worden geraadpleegd.

<h5 class="primary-text">Het toevoegen van een gebeurtenis</h5>

Een gebeurtenis kan door een redacteur worden aangemaakt door op de knop + \`NIEUWE GEBEURTENIS\` te klikken bovenaan het hoofdmenu aan de linkerkant. Nadat een gebeurtenis is toegevoegd, kan het worden bewerkt.

<h5 class="primary-text">Het bewerken of raadplegen van een gebeurtenis</h5>

Wanneer een auteur een gebeurtenis bewerkt, kunnen middels het menu ‘Inhoud’ aan de linkerkant van het scherm verschillende secties worden geraadpleegd om de gebeurtenis en de lessen te beschrijven. Deze secties zijn:

- Algemene kenmerken gebeurtenis: naam en algemene beschrijving van de gebeurtenis, inclusief tijd en plaats.
- Incident karakteristieken: beschrijving van het startincident en andere (opeenvolgende) incidenten (indien aanwezig) tijdens de gebeurtenis, inclusief hun (potentiële) impact.
- Geografische karakteristieken: Geografische dimensie en schaal van het/ de incident(en), inclusief een kaart.
- Betrokken organisaties: organisaties die betrokken waren bij het uitvoeren van crisismanagementprocessen tijdens de gebeurtenis.
- Kritieke CM-processen: essentiële crisismanagementprocessen die zijn uitgevoerd om met het incident om te gaan en die typisch waren voor de geleerde lessen die zijn geleerd uit dit incident.
- Lessen: lessen worden beschreven voor afzonderlijke crisismanagementprocessen. Lessen worden gekenmerkt door hun technische of niet-technische aard, en hun potentiële bijdrage aan het verbeteren van crisismanagement.
- Publicaties: verwijzingen naar relevante documenten over de gebeurtenis of bijbehorende lessen.
- Multimedia bronnen: verwijzingen naar allerlei soorten multimediale gegevens.
- Auteurs: namen van functionarissen (inclusief organisaties) die hebben bijgedragen aan de inhoud van het document.

<h5 class="primary-text">Het tonen of verwijderen van een gebeurtenis</h5>

Onder het inhoudsmenu bevinden zich twee knoppen:

- \`TOON GEBEURTENIS\` om naar het betreffende document te gaan.
- \`VERWIJDER GEBEURTENIS\` om de gebeurtenis uit de L3-bibliotheek te verwijderen.

<h5 class="primary-text">Extra auteurs toevoegen aan een gebeurtenis</h5>

De auteur van een gebeurtenis kan rechten geven om de gebeurtenis te bewerken aan andere personen die editorrechten hebben. Dit kan worden gedaan door hun e-mailadressen linksonder in te voeren.

<h5 class="primary-text">Gebeurtenis publiceren</h5>

Als men de gebruiker of editor van een gebeurtenis is, kan hij/ zij besluiten om de gebeurtenis in de L3 te publiceren door het vakje naast PUBLICEER GEBEURTENIS bovenaan links op het scherm van het document aan te vinken. Hierna is de gebeurtenis openbaar beschikbaar. Door het vakje opnieuw aan te vinken, wordt de gebeurtenis niet meer gepubliceerd.`;

export const AboutPage = () => ({
  view: () =>
    m(".row", [
      m(SlimdownView, { md: md2 }),
      m(SlimdownView, { md }),
      m(
        ".row",
        m("img", {
          src: driverLogo,
          width: 300,
          height: 151,
          style: "display: block; margin: 0 auto;",
        })
      ),
    ]),
});
