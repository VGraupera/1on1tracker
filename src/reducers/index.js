import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import directs from './directs';
import meetings from './meetings';
import followUps from './followUps';
import teams from './teams';

import auth from './auth';
import header from './header';

const rootReducer = combineReducers({
  directs,
  meetings,
  followUps,
  auth,
  header,
  teams,
  form: formReducer,
  routing: routerReducer });

export default rootReducer;
