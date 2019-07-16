import m, { Vnode } from 'mithril';
import logo from '../assets/logo_white.svg';
import { dashboardSvc } from '../services/dashboard-service';

const isActive = (path: string) => (m.route.get().indexOf(path) >= 0 ? '.active' : '');

export const Layout = () => ({
  view: (vnode: Vnode) =>
    m('.main', [
      m(
        'nav',
        m('.nav-wrapper', [
          m(
            'a.brand-logo[href=#]',
            { style: 'margin-left: 20px' },
            m(`img[width=48][height=48][src=${logo}]`, { style: 'margin-top: 5px; margin-left: -5px;' })
          ),
          m(
            'ul.right',
            dashboardSvc
              .getList()
              .filter(d => d.visible)
              .map(d =>
                m(
                  `li${isActive(d.route)}`,
                  m(
                    'a',
                    { href: d.route, oncreate: m.route.link },
                    m('i.material-icons.right', d.icon ? m('i.material-icons', d.icon) : d.title)
                  )
                )
              )
          ),
        ])
      ),
      m('.container', m('.row', vnode.children)),
    ]),
});
