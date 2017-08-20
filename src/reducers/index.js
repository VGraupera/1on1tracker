import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { ARCHIVED_ACTION_PREFIX } from '../constants/general';
import directsReducerFactory from './directs';
import meetingsReducerFactory from './meetings';
import followUpsReducerFactory from './followUps';
import teams from './teams';
import questions from './questions';
import categoriesQuestions from './categoriesQuestions';

import auth from './auth';
import header from './header';

const rootReducer = combineReducers({
  directs: directsReducerFactory(),
  archivedDirects: directsReducerFactory(ARCHIVED_ACTION_PREFIX),
  meetings: meetingsReducerFactory(),
  archivedMeetings: meetingsReducerFactory(ARCHIVED_ACTION_PREFIX),
  followUps: followUpsReducerFactory(),
  archivedFollowUp: followUpsReducerFactory(ARCHIVED_ACTION_PREFIX),
  auth,
  header,
  teams,
  questions,
  categoriesQuestions,
  form: formReducer,
  routing: routerReducer });

export default rootReducer;
