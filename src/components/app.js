import React from 'react';
import { connect } from 'redux-bundler-react';
import { getNavHelper } from 'internal-nav-helper';
import './app.scss';
const App = ({ route, pathname, doUpdateUrl }) => {
  const headerNavItems = [
    { url: '/', label: <i className="icon ion-md-home" /> },
    { url: '/crypto', label: <i className="icon ion-md-pizza" /> },
    { url: '/trophies', label: <i className="icon ion-md-trophy" /> },
    { url: '/resume', label: <i className="icon ion-md-person" /> }
  ];
  const footerLinks = [
    {
      url: 'https://github.com/Timikcool',
      label: <i className="icon ion-logo-github" />
    },
    {
      url: 'https://linkedin.com/in/timur-samoylov-b4519315b/',
      label: <i className="icon ion-logo-linkedin" />
    },
    { url: 'https://t.me/tsamoylov', label: <i className="icon ion-md-paper-plane"></i> },
    { url: 'skype:live:5767f73db386bfd8?userinfo', label: <i className="icon ion-logo-skype"></i> },
    { url: 'mailto:t.samoylov@yandex.ru', label: <i className="icon ion-md-mail"></i> }
  ];
  const Page = route;
  return (
    <main onClick={getNavHelper(doUpdateUrl)}>
      <header>
        <nav>
          {headerNavItems.map(item => (
            <a
              href={item.url}
              className={item.url === pathname ? 'active' : 'disabled'}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="content">
        <Page />
      </div>
      <footer>
        {footerLinks.map(item => (
          <a rel="noopener noreferrer" target="_blank" href={item.url}>
            {item.label}
          </a>
        ))}
      </footer>
    </main>
  );
};
export default connect(
  'selectRoute',
  'selectPathname',
  'doUpdateUrl',
  App
);
