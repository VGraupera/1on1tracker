import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';

export default new FirebaseApi('followUps', {
  LOAD_SUCCESS: types.LOAD_FOLLOW_UPS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_FOLLOW_UPS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_FOLLOW_UP,
  RESET_ACTIVE: types.RESET_ACTIVE_FOLLOW_UP,
  CREATE: types.CREATE_FOLLOW_UP,
  SET_MATCHING: types.SET_MATCHING_FOLLOW_UPS,
});
