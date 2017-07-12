import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';

export default new FirebaseApi('teams', {
  LOAD_SUCCESS: types.LOAD_TEAMS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_TEAMS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_TEAM,
  RESET_ACTIVE: types.RESET_ACTIVE_TEAM,
  CREATE: types.CREATE_TEAM,
  SET_MATCHING: types.SET_MATCHING_TEAMS,
});
