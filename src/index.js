import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import store, { history } from './store';
import './index.css';
import routes from './routes';

injectTapEventPlugin();

ReactGA.initialize('UA-2153940-18');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const router = (
  <Provider store={store}>
    <Router history={history} routes={routes(store)} onUpdate={logPageView} />
  </Provider>
);

render(router, document.getElementById('root'));
