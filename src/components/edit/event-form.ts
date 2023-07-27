import M from "materialize-css";
import m from "mithril";
import { Button, Chips, ModalPanel } from "mithril-materialized";
import { deepCopy, FormAttributes, LayoutForm } from "mithril-ui-form";
import { IEvent } from "../../models";
import { EventsSvc } from "../../services";
import { Dashboards, dashboardSvc } from "../../services/dashboard-service";
import { Auth } from "../../services/login-service";
import { llf } from "../../template/llf";
import { capitalizeFirstLetter, i18n } from "../../utils";
import { CircularSpinner } from "../ui/preloader";

const log = console.log;

const close = async (e?: UIEvent) => {
  log("closing...");
  dashboardSvc.switchTo(Dashboards.SEARCH);
  if (e) {
    e.preventDefault();
  }
};

export const EventForm = () => {
  const state = {
    // hasChanged: false,
    event: {} as Partial<IEvent>,
    loaded: false,
    isValid: false,
    form: llf,
    error: "",
    /** Relevant context for the Form, can be used with show/disabling */
    context: [
      {
        admin: true,
      },
    ],
  };

  const onsubmit = async () => {
    // state.hasChanged = false;
    log("submitting...");
    if (state.event) {
      // const event = deepCopy(state.event);
      await EventsSvc.save(state.event);
      state.event = EventsSvc.getCurrent();
    }
  };

  return {
    oninit: () => {
      return new Promise<void>(async (resolve, reject) => {
        const event = await EventsSvc.load(m.route.param("id")).catch((r) =>
          reject(r)
        );
        state.event = event ? deepCopy(event) : ({} as IEvent);
        state.loaded = true;
        m.redraw();
        resolve();
      });
    },

    view: () => {
      const { event, form, context, loaded } = state;
      if (!loaded) {
        return m(CircularSpinner, {
          className: "center-align",
          style: "margin-top: 20%;",
        });
      }
      // log(event);
      const sections = form
        .filter((c) => c.type === "section")
        .map((c) => ({
          style: "cursor: pointer;",
          id: c.id,
          title: c.label || capitalizeFirstLetter((c.id || "").toString()),
        }));
      const section = m.route.param("section") || sections[0].id;
      return m(".row", [
        m(
          ".col.s12.l3.xl2",
          m(
            "ul#slide-out.sidenav.sidenav-fixed",
            {
              style: "height: 95vh",
              oncreate: ({ dom }) => {
                M.Sidenav.init(dom);
              },
            },
            [
              m("h4.primary-text", { style: "margin-left: 20px;" }, "Inhoud"),
              ...sections.map((s) =>
                m(
                  "li",
                  m(
                    m.route.Link,
                    {
                      href: dashboardSvc
                        .route(Dashboards.EDIT)
                        .replace(":id", `${event.$loki}?section=${s.id}`),
                    },
                    m("span.primary-text", s.title)
                  )
                )
              ),
              m(".buttons", [
                m(Button, {
                  label: "Toon gebeurtenis",
                  iconName: "visibility",
                  className: "right col s12",
                  onclick: () =>
                    dashboardSvc.switchTo(Dashboards.READ, { id: event.$loki }),
                }),
                // m(Button, {
                //   label: 'Save event',
                //   iconName: 'save',
                //   class: `green col s12 ${hasChanged ? '' : 'disabled'}`,
                //   onclick: onsubmit,
                // }),
                m(Button, {
                  modalId: "delete-event",
                  label: "Verwijder gebeurtenis",
                  iconName: "delete",
                  class: "red col s12",
                }),
              ]),
              Auth.isOwner(event)
                ? m(
                    "li",
                    m(
                      ".col.s12",
                      m(Chips, {
                        label: "Eigenaar(s)",
                        placeholder: "+gebruikersnaam",
                        onchange: async (chips) => {
                          event.owner = chips.map(({ tag }) => tag);
                          if (event.owner.length === 0) {
                            M.toast({
                              html: "Eigenaar(s) kan niet leeg zijn!",
                              classes: "red",
                            });
                            event.owner.push(Auth.username);
                          }
                          await onsubmit();
                        },
                        data: event.owner
                          ? event.owner instanceof Array
                            ? event.owner.map((owner) => ({ tag: owner }))
                            : [{ tag: event.owner }]
                          : [],
                      })
                    )
                  )
                : undefined,
              Auth.canCRUD(event)
                ? m(
                    "li",
                    m(
                      ".col.s12",
                      m(Chips, {
                        label: "Wie mag dit bewerken:",
                        placeholder: "+gebruikersnaam",
                        onchange: (chips) => {
                          event.canEdit = chips.map(({ tag }) => tag);
                          m.redraw();
                        },
                        data: (event.canEdit || []).map((editor) => ({
                          tag: editor,
                        })),
                      })
                    )
                  )
                : undefined,
            ]
          )
        ),
        m(".col.s12.l9.xl10", [
          m(LayoutForm, {
            key: section,
            form,
            obj: event,
            onchange: async () => {
              // console.log(JSON.stringify(event.cmFunctions, null, 2));
              // console.log(JSON.stringify(event.memberCountries, null, 2));
              // state.event = event;
              // state.hasChanged = true;
              await onsubmit();
            },
            context,
            section,
            i18n,
          } as FormAttributes<Partial<IEvent>>),
        ]),
        m(ModalPanel, {
          id: "delete-event",
          title: "Verwijder gebeurtenis",
          description:
            "Wilt u daadwerkelijk deze gebeurtenis verwijderen? Dit kan niet teruggedraaid worden.",
          options: { opacity: 0.7 },
          buttons: [
            {
              label: "Verwijder",
              onclick: async () => {
                EventsSvc.delete(event.$loki);
                close();
              },
            },
            {
              label: "Afbreken",
            },
          ],
        }),
      ]);
    },
  };
};
