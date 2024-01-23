import m from "mithril";
import { Icon, InputCheckbox, Select, TextInput } from "mithril-materialized";
import { IEvent } from "../../models";
import { AppState } from "../../models/app-state";
import { Roles } from "../../models/roles";
import { Dashboards, dashboardSvc } from "../../services/dashboard-service";
import { EventsSvc } from "../../services/events-service";
import { Auth } from "../../services/login-service";
import {
  cmFunctions,
  eventTypes,
  incidentTypes,
  veiligheidsregios,
} from "../../template/llf";
import {
  incidentFilter,
  nameAndDescriptionFilter,
  typeFilter,
} from "../../utils";
import { IncidentIcon } from "../ui/incident-icon";

export const EventsList = () => {
  const state = {
    showFilters: false,
    filterValue: "",
    vrFilter: [],
    eventTypeFilter: [],
    incidentTypeFilter: [],
    cmFunctionFilter: [],
  } as {
    showFilters: boolean;
    vrFilter: Array<string | number>;
    eventTypeFilter: Array<string | number>;
    incidentTypeFilter: string[];
    cmFunctionFilter: Array<string | number>;
    filterValue: string;
  };

  const sortByName:
    | ((a: Partial<IEvent>, b: Partial<IEvent>) => number)
    | undefined = (a, b) =>
    (a.name || "") > (b.name || "")
      ? 1
      : (a.name || "") < (b.name || "")
      ? -1
      : 0;

  const pageSize = 124;

  return {
    oninit: () => EventsSvc.loadList(),
    view: () => {
      const {
        vrFilter,
        eventTypeFilter,
        cmFunctionFilter,
        incidentTypeFilter,
        showFilters,
      } = state;
      const events = (EventsSvc.getList() || ([] as IEvent[])).sort(sortByName);
      const query = nameAndDescriptionFilter(state.filterValue);
      const page = m.route.param("page") ? +m.route.param("page") : 0;
      const filteredEvents =
        events
          .filter(
            (ev) =>
              ev.published ||
              (Auth.isAuthenticated &&
                (Auth.roles.indexOf(Roles.ADMIN) >= 0 || Auth.canEdit(ev)))
          )
          .filter(query)
          .filter(typeFilter("vrs", vrFilter))
          .filter(typeFilter("eventType", eventTypeFilter))
          .filter(typeFilter("cmFunctions", cmFunctionFilter))
          .filter(incidentFilter(incidentTypeFilter))
          .slice(page * pageSize, (page + 1) * pageSize) || [];
      return m("div", { style: "margin-top: 1em;" }, [
        m(".row.filters", [
          m(TextInput, {
            label: "Zoek op tekst",
            id: "search",
            placeholder: "Deel van titel of beschrijving...",
            iconName: "search",
            onkeyup: (_: KeyboardEvent, v?: string) =>
              (state.filterValue = v ? v : ""),
            className: "col s10",
          }),
          m(InputCheckbox, {
            label: "Show filters",
            iconName: "filter_list",
            modalId: "filter-panel",
            className: "col s2",
            checked: showFilters,
            onchange: (f) => (state.showFilters = f),
          }),
          showFilters &&
            m(".row.filter-panel", [
              m(Select, {
                placeholder: "Selecteer",
                label: "Type gebeurtenis",
                checkedId: eventTypeFilter,
                options: eventTypes,
                iconName: "event_note",
                multiple: true,
                onchange: (f) => (state.eventTypeFilter = f),
                className: "col s12 m6 l3",
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "Type incident",
                checkedId: incidentTypeFilter,
                options: incidentTypes,
                iconName: "flash_on",
                multiple: true,
                onchange: (f) => (state.incidentTypeFilter = f as string[]),
                className: "col s12 m6 l3",
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "CM proces",
                checkedId: cmFunctionFilter,
                options: cmFunctions,
                iconName: "connect_without_contact",
                multiple: true,
                onchange: (f) => (state.cmFunctionFilter = f),
                className: "col s12 m6 l3",
                dropdownOptions: { container: "body" as any },
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "Veiligheidsregio",
                checkedId: vrFilter,
                options: veiligheidsregios,
                iconName: "public",
                multiple: true,
                onchange: (f) => (state.vrFilter = f),
                className: "col s12 m6 l3",
              }),
            ]),
        ]),
        m(
          "#event-list.row",
          filteredEvents.map((event) =>
            m(".card-item", [
              m(
                ".card.small.hoverable",
                m(".card-content", [
                  m(
                    m.route.Link,
                    {
                      className: "card-title",
                      href: dashboardSvc
                        .route(Dashboards.READ)
                        .replace(":id", `${event.$loki}`),
                    },
                    event.name || "Untitled"
                  ),
                  m("p.light.block-with-text", event.desc),
                ]),
                m(".card-action", [
                  m(IncidentIcon, { incident: event.initialIncident }),
                  m(
                    "a",
                    {
                      target: "_blank",
                      href: `${AppState.apiService}/api/events/${event.$loki}`,
                    },
                    m(Icon, {
                      className: "black-text",
                      iconName: "cloud_download",
                    })
                  ),
                  m(
                    "span.badge",
                    `${
                      event.lessons
                        ? event.lessons.length === 1
                          ? "1 les"
                          : `${event.lessons.length} lessen`
                        : "0 lessen"
                    }`
                  ),
                ])
              ),
            ])
          )
        ),
      ]);
    },
  };
};
