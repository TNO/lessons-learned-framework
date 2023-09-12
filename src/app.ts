import 'material-icons/iconfont/filled.css';
import "materialize-css/dist/css/materialize.min.css";
//import 'materialize-css/dist/js/materialize.min.js';
import m from "mithril";
import "./css/style.css";
import { dashboardSvc } from "./services/dashboard-service";
import { Auth } from "./services/login-service";
import { leafletPlugin } from "mithril-ui-form-leaflet-plugin";
import { registerPlugin } from "mithril-ui-form";

registerPlugin("map", leafletPlugin); // import L from "leaflet";

// delete (L.Icon.Default.prototype as any)._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const restoreSession = async () => {
  await Auth.refreshLogin();
};
restoreSession();

m.route(document.body, dashboardSvc.defaultRoute, dashboardSvc.routingTable);
