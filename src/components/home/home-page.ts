import m from "mithril";
import { Button, Icon } from "mithril-materialized";
import { SlimdownView } from "mithril-ui-form";
import background from "../../assets/background.jpg";
import logo from "../../assets/logo_white.svg";
import tno from "../../assets/tno.svg";
import { Dashboards, dashboardSvc } from "../../services/dashboard-service";

export const HomePage = () => ({
  view: () => [
    m(".row", [
      m(
        "nav.white",
        m(".nav-wrapper", [
          m(
            "a.hide-on-med-and-down.brand-logo[href=#]",
            m(`img[width=70][height=70][src=${logo}][alt=L3]`, {
              style: "margin: -3px 0 0 10px;",
            })
          ),
          m(
            "a.hide-on-med-and-down.right[href=https://www.tno.nl][target=_blank]",
            m(`img[width=150][height=70][src=${tno}][alt=TNO]`, {
              style: "margin: 0 10px;",
            })
          ),
          m(
            "h3.center.black-text.white.hide-on-small-only",
            { style: "margin: 0 auto; padding: 10px 0;" },
            "Lessons Learned Library"
          ),
        ]),
        m(
          ".overlay.center",
          {
            style: "position: relative; top: 350px;",
          },
          m(Button, {
            className: "yellow darken-3 btn-large",
            label: "Start hier",
            onclick: () => dashboardSvc.switchTo(Dashboards.SEARCH),
          })
        )
      ),
      m(
        ".center-align",
        m("img.responsive-img", { alt: "Firefighters", src: background })
      ),
      // m(Parallax, { src: background }),
      m(
        ".section.white",
        m(".row.container.center", [
          m(SlimdownView, {
            md: `## Deel en Leer

              De **Lessons Learned Library (L3)** is een repository in het domein van crisismanagement (CM) voor het verzamelen en delen van lessen bij gebeurtenissen zoals ernstige incidenten, crisissituaties, testen of oefeningen.`,
          }),
          m(".row", [
            m(
              ".col.s12.m4",
              m(".icon-block", [
                m(".center", m(Icon, { iconName: "group" })),
                m("h5.center", "Deel je ervaring"),
                m(
                  "p.light",
                  "Help anderen, zodat zij kunnen profiteren van jouw ervaringen."
                ),
              ])
            ),
            m(
              ".col.s12.m4",
              m(".icon-block", [
                m(".center", m(Icon, { iconName: "flash_on" })),
                m("h5.center", "Snel een eenvoudig"),
                m(
                  "p.light",
                  "In een korte tijd kun je informatie en belangrijke lessen van een gebeurtenis op een goed georganiseerde manier bewerken."
                ),
              ])
            ),
            m(
              ".col.s12.m4",
              m(".icon-block", [
                m(".center", m(Icon, { iconName: "public" })),
                m("h5.center", "Open voor elke professional"),
                m(
                  "p.light",
                  "Niet opgesloten in een kluis of verborgen in een of ander rapport, maar toegankelijk voor elke CM-professional die geïnteresseerd is om te leren van andere collega's."
                ),
              ])
            ),
          ]),
        ])
      ),
    ]),
    // m(
    //   "footer.page-footer.yellow.darken-3",
    //   { style: "height: 100px; padding: 5px 0;" },
    //   m(
    //     ".container",
    //     m(".clearfix", [
    //       m("div", { style: "float: left; margin-right: 10px;" }, [
    //         m("img", {
    //           src: euLogo,
    //           width: 100,
    //           height: 67,
    //           style: "display: block; margin-left: 20px;",
    //         }),
    //         m("span", "v1.0, September 2019"),
    //       ]),
    //       m("div", { style: "float: right; margin-left: 10px;" }, [
    //         m("img", {
    //           src: driverLogo,
    //           width: 67,
    //           height: 67,
    //           style: "display: block; margin-left: 40px;",
    //         }),
    //         m(
    //           "a.primary-text",
    //           {
    //             style: "display: block",
    //             href: "https://www.project-driver.eu",
    //             target: "_blank",
    //           },
    //           "www.project-driver.eu"
    //         ),
    //       ]),
    //       m(
    //         ".white-text",
    //         `This project has received funding from the European Union's 7th Framework Programme for Research,
    //       Technological Development and Demonstration under Grant Agreement (GA)`
    //       ),
    //       m("span", "©DRIVER+"),
    //     ])
    //   )
    // ),
  ],
});
