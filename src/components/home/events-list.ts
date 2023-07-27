import m from "mithril";
import { FlatButton, Icon, Select, TextInput } from "mithril-materialized";
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

export const EventsList = () => {
  const state = {
    filterValue: "",
    vrFilter: [],
    eventTypeFilter: [],
    incidentTypeFilter: [],
    cmFunctionFilter: [],
  } as {
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

  const pageSize = 24;

  return {
    oninit: () => EventsSvc.loadList(),
    view: () => {
      console.log("EVENTS-LIST VIEW");
      const {
        vrFilter,
        eventTypeFilter,
        cmFunctionFilter,
        incidentTypeFilter,
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
      return m(".row", { style: "margin-top: 1em;" }, [
        m(
          ".col.s12.l3",
          m(
            "ul#slide-out.sidenav.sidenav-fixed",
            {
              style: "height: 95vh",
              oncreate: ({ dom }) => {
                M.Sidenav.init(dom);
              },
            },
            [
              Auth.isAuthenticated &&
                m(FlatButton, {
                  label: "Nieuwe gebeurtenis",
                  iconName: "add",
                  class: "col s11 indigo darken-4 white-text",
                  style: "margin: 1em;",
                  onclick: async () => {
                    const ev = await EventsSvc.create({
                      name: "Nieuwe gebeurtenis",
                      owner: [Auth.username],
                      published: false,
                      duration: 1,
                    });
                    if (ev) {
                      dashboardSvc.switchTo(Dashboards.EDIT, { id: ev.$loki });
                    }
                  },
                }),
              m(
                "h4.primary-text",
                { style: "margin-left: 0.5em;" },
                "Filter gebeurtenis"
              ),
              m(TextInput, {
                label: "Filter op tekst",
                id: "filter",
                placeholder: "Deel van titel of beschrijving...",
                iconName: "filter_list",
                onkeyup: (_: KeyboardEvent, v?: string) =>
                  (state.filterValue = v ? v : ""),
                style: "margin-right:100px",
                className: "col s12",
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "Type gebeurtenis",
                checkedId: eventTypeFilter,
                options: eventTypes,
                iconName: "event_note",
                multiple: true,
                onchange: (f) => (state.eventTypeFilter = f),
                className: "col s12",
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "Type incident",
                checkedId: incidentTypeFilter,
                options: incidentTypes,
                iconName: "flash_on",
                multiple: true,
                onchange: (f) => (state.incidentTypeFilter = f as string[]),
                className: "col s12",
              }),
              m(Select, {
                placeholder: "Selecteer",
                label: "CM proces",
                checkedId: cmFunctionFilter,
                options: cmFunctions,
                iconName: "connect_without_contact",
                multiple: true,
                onchange: (f) => (state.cmFunctionFilter = f),
                className: "col s12",
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
                className: "col s12",
              }),
              m(FlatButton, {
                label: "Wis alle filters",
                iconName: "clear_all",
                class: "col s11",
                style: "margin: 1em;",
                onclick: () => {
                  state.filterValue = "";
                  state.vrFilter.length = 0;
                  state.cmFunctionFilter.length = 0;
                  state.eventTypeFilter.length = 0;
                  state.incidentTypeFilter.length = 0;
                },
              }),
            ]
          )
        ),
        m(
          ".col.s12.l9",
          filteredEvents.map((event) =>
            m(".col.s12.m6.xl4", [
              m(
                ".card.hoverable",
                m(".card-content", { style: "height: 150px;" }, [
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
                  m(
                    "a",
                    {
                      target: "_blank",
                      href: `${AppState.apiService}/api/events/${event.$loki}`,
                    },
                    m(Icon, {
                      className: "white-text",
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
      // return m('.events-list', [
      //   m('.row', [
      //     m(FlatButton, {
      //       label: 'Add event',
      //       iconName: 'add',
      //       class: 'green input-field right btn-medium',
      //       style: 'margin: 1em 1em 0 0;',
      //       onclick: () => {
      //         EventsSvc.new({ title: 'New event' });
      //         dashboardSvc.switchTo(Dashboards.EDIT, { id: -1 });
      //       },
      //     }),
      //     m(TextInput, {
      //       label: 'Text filter of events',
      //       id: 'filter',
      //       iconName: 'filter_list',
      //       onkeyup: (_: KeyboardEvent, v?: string) => (state.filterValue = v ? v : ''),
      //       style: 'margin-right:100px',
      //       className: 'col s12 l4',
      //     }),
      //     m(Select, {
      //       placeholder: 'Kies één',
      //       label: 'Event type filter',
      //       inline: true,
      //       checkedId: filter,
      //       options: eventTypes.map(o => ({ label: capitalizeFirstLetter(o.id), ...o })),
      //       onchange: f => state.filter = f,
      //       className: 'col s12 l4'
      //     }),
      //   ]),
      //   m('.row', m('p', 'Available events.')),
      //   m(
      //     '.row',
      //     filteredEvents.map(event =>
      //       m('.col.s12.l4', [
      //         m(
      //           '.card.hoverable',
      //           m('.card-content', { style: 'height: 150px;' }, [
      //             m(
      //               m.route.Link,
      //               {
      //                 className: 'card-title',
      //                 href: dashboardSvc.route(Dashboards.READ).replace(':id', `${event.$loki}`),
      //               },
      //               event.name || 'Untitled'
      //             ),
      //             m('p.light.block-with-text', event.desc),
      //           ]),
      //           m('.card-action', [
      //             m(
      //               'a',
      //               {
      //                 target: '_blank',
      //                 href: `${AppState.apiService()}/lessons/${event.$loki}`,
      //               },
      //               m(Icon, {
      //                 iconName: 'cloud_download',
      //               })
      //             ),
      //             m(
      //               'span.badge',
      //               `${
      //                 event.lessons
      //                   ? event.lessons.length === 1
      //                     ? '1 lesson'
      //                     : `${event.lessons.length} lessons`
      //                   : '0 lessons'
      //               }`
      //             ),
      //           ])
      //         ),
      //       ])
      //     )
      //   ),
      // ]);
    },
  };
};
