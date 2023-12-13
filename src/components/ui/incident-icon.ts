import m, { FactoryComponent } from "mithril";
import ziekte from "../../assets/icons/crisis_types/plagen-en-dierziekten.svg";
import epidemie from "../../assets/icons/crisis_types/verstoring-ziektegolf.svg";
import spoor from "../../assets/icons/crisis_types/spoorvervoerincidenten.svg";
import winter from "../../assets/ocha/snowfall.svg";
import buien from "../../assets/ocha/heavy-rain.svg";
import hittegolf from "../../assets/ocha/heatwave.svg";
import koudegolf from "../../assets/ocha/cold-wave.svg";
import storm from "../../assets/ocha/storm.svg";
import aardbeving from "../../assets/icons/crisis_types/aardbeving.svg";
import natuurbrand from "../../assets/icons/crisis_types/natuurbrand.svg";
import kust from "../../assets/ocha/flood.svg";
// import rivier from "../../assets/ocha/";
import vloedgolf from "../../assets/ocha/flash-flood.svg";
import drinkwater from "../../assets/icons/crisis_types/verstoring-drinkwatervoorziening.svg";
import elektriciteit from "../../assets/icons/crisis_types/verstoring-elektriciteitsvoorziening.svg";
import gas from "../../assets/icons/crisis_types/verstoring-gasvoorziening.svg";
import riool from "../../assets/icons/crisis_types/verstoring-riool-en-afvalwaterzuivering.svg";
import voedsel from "../../assets/icons/crisis_types/verstoring-voedselvoorziening.svg";
import cybercrime from "../../assets/icons/crisis_types/cybercrime.svg";
import ict from "../../assets/icons/crisis_types/verstoring-telecommunicatie-en-ict.svg";
import water from "../../assets/ocha/drowned.svg";
import tunnel from "../../assets/ocha/tunnel.svg";
import luchtvaart from "../../assets/icons/crisis_types/luchtvaartincidenten.svg";
import scheepvaart from "../../assets/icons/crisis_types/scheepvaartincidenten.svg";
import wegverkeer from "../../assets/icons/crisis_types/wegvervoerincidenten.svg";
import explosief from "../../assets/icons/crisis_types/incident-met-gevaarlijke-stoffen.svg";
import giftig from "../../assets/ocha/detergent.svg";
import bomaanslag from "../../assets/ocha/mine.svg";
import brandstichting from "../../assets/icons/noun-lighter-2109464.svg";
import technologicalDisaster from "../../assets/ocha/technological-disaster.svg";
import sabotage from "../../assets/icons/noun-destroy-4380930.svg";
import instorting from "../../assets/ocha/building-facility-affected.svg";
import brand from "../../assets/icons/crisis_types/gebouwbranden-en-instorting.svg";
import paniek from "../../assets/ocha/group.svg";
import vandalisme from "../../assets/icons/noun-graffiti-3194142.svg";
import voo from "../../assets/icons/crisis_types/verstoring-openbare-orde.svg";
import onrust from "../../assets/ocha/affected-population.svg";
import afval from "../../assets/icons/crisis_types/verstoring-afvalverwerking.svg";
import help from "../../assets/ocha/help.svg";
import { IncidentType } from "../../template/llf";

export const IncidentIcon: FactoryComponent<{
  incident?: IncidentType;
  label?: string;
  className?: string;
}> = () => {
  const incidentToSvg = (incident?: IncidentType) => {
    switch (incident) {
      case "ziekte":
        return ziekte;
      case "epidemie":
        return epidemie;
      case "winter":
        return winter;
      case "buien":
        return buien;
      case "hittegolf":
        return hittegolf;
      case "koudegolf":
        return koudegolf;
      case "storm":
        return storm;
      case "aardbeving":
        return aardbeving;
      case "natuurbrand":
        return natuurbrand;
      case "kust":
      case "rivier":
        return kust;
      case "vloedgolf":
        return vloedgolf;
      case "drinkwater":
        return drinkwater;
      case "elektriciteit":
        return elektriciteit;
      case "gas":
        return gas;
      case "riool":
        return riool;
      case "voedsel":
        return voedsel;
      case "cybercrime":
        return cybercrime;
      case "ict":
        return ict;
      case "waterincident":
        return water;
      case "tunnel":
        return tunnel;
      case "luchtvaart":
        return luchtvaart;
      case "scheepvaart":
        return scheepvaart;
      case "spoor":
        return spoor;
      case "wegverkeer":
        return wegverkeer;
      case "explosief":
        return explosief;
      case "giftig":
        return giftig;
      case "nucleair":
        return technologicalDisaster;
      case "bomaanslag":
        return bomaanslag;
      case "brandstichting":
        return brandstichting;
      case "cbrn":
        return technologicalDisaster;
      case "sabotage":
        return sabotage;
      case "instorting":
        return instorting;
      case "brand":
        return brand;
      case "paniek":
        return paniek;
      case "vandalisme":
        return vandalisme;
      case "voo":
        return voo;
      case "onrust":
        return onrust;
      case "afval":
        return afval;
      default:
        return help;
    }
  };

  return {
    view: ({ attrs: { incident, label, className } }) => {
      const src = incidentToSvg(incident);
      return m("img", {
        src,
        alt: label || incident,
        width: 32,
        height: 32,
        className,
        style: "margin-right: 12px",
      });
    },
  };
};
