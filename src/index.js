import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import store, { history } from './store/store';
import './index.css';
import routes from './routes';

injectTapEventPlugin();

ReactGA.initialize('UA-2153940-18');

history.listen((location) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }
});

const router = (
  <Provider store={store}>
    <Router
      history={history}
      routes={routes(store)}
    />
  </Provider>
);

render(router, document.getElementById('root'));
