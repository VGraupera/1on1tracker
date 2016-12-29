import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    // applyMiddleware(thunk),
  ),
);

export const history = syncHistoryWithStore(browserHistory, store);
// export const history = browserHistory;

export default store;
