import m, { FactoryComponent } from "mithril";
import ziekte from "../../assets/ocha/livestock.svg";
import epidemie from "../../assets/ocha/epidemic.svg";
import spoor from "../../assets/ocha/train.svg";
import winter from "../../assets/ocha/snowfall.svg";
import buien from "../../assets/ocha/heavy-rain.svg";
import hittegolf from "../../assets/ocha/heatwave.svg";
import koudegolf from "../../assets/ocha/cold-wave.svg";
import storm from "../../assets/ocha/storm.svg";
import aardbeving from "../../assets/ocha/earthquake.svg";
import natuurbrand from "../../assets/icons/noun-forest-fire-4211620.svg";
import kust from "../../assets/ocha/flood.svg";
// import rivier from "../../assets/ocha/";
import vloedgolf from "../../assets/ocha/flash-flood.svg";
import drinkwater from "../../assets/ocha/potable-water.svg";
import elektriciteit from "../../assets/ocha/power-electricity-affected.svg";
import gas from "../../assets/ocha/stove.svg";
import riool from "../../assets/ocha/water-sanitation-and-hygiene.svg";
import voedsel from "../../assets/ocha/food-security.svg";
import cyberaanval from "../../assets/icons/noun-cyber-attack-5161319.svg";
import ict from "../../assets/ocha/information-technology.svg";
import water from "../../assets/ocha/drowned.svg";
import tunnel from "../../assets/ocha/tunnel.svg";
import luchtvaart from "../../assets/ocha/airport-affected.svg";
import scheepvaart from "../../assets/ocha/port-affected.svg";
import wegverkeer from "../../assets/ocha/road-affected.svg";
import explosief from "../../assets/ocha/attack.svg";
import giftig from "../../assets/ocha/detergent.svg";
import bomaanslag from "../../assets/ocha/mine.svg";
import brandstichting from "../../assets/icons/noun-lighter-2109464.svg";
import technologicalDisaster from "../../assets/ocha/technological-disaster.svg";
import sabotage from "../../assets/icons/noun-destroy-4380930.svg";
import instorting from "../../assets/ocha/building-facility-affected.svg";
import brand from "../../assets/ocha/house-burned.svg";
import paniek from "../../assets/ocha/group.svg";
import vandalisme from "../../assets/icons/noun-graffiti-3194142.svg";
import voo from "../../assets/ocha/advocacy.svg";
import onrust from "../../assets/ocha/affected-population.svg";
import dumpen from "../../assets/ocha/debris-management.svg";
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
      case "cyberaanval":
        return cyberaanval;
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
      case "dumpen":
        return dumpen;
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
