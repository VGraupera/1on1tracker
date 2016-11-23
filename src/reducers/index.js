import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import directs from './directs';
import meetings from './meetings';
import auth from './auth';

const rootReducer = combineReducers({
  directs,
  meetings,
  auth,
  form: formReducer,
  routing: routerReducer });

export default rootReducer;
