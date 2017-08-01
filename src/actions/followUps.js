import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';
import { ARCHIVED_PATH_PREFIX } from '../constants/general';

export const archivedFollowUps = new FirebaseApi(`${ARCHIVED_PATH_PREFIX}followUps`, {
  LOAD_REQUEST: types.ARCHIVED_LOAD_FOLLOW_UPS_REQUEST,
  LOAD_SUCCESS: types.ARCHIVED_LOAD_FOLLOW_UPS_SUCCESS,
  UNLOAD_SUCCESS: types.ARCHIVED_UNLOAD_FOLLOW_UPS_SUCCESS,
  SET_ACTIVE: types.ARCHIVED_SET_ACTIVE_FOLLOW_UP,
  RESET_ACTIVE: types.ARCHIVED_RESET_ACTIVE_FOLLOW_UP,
  CREATE: types.ARCHIVED_CREATE_FOLLOW_UP,
  SET_MATCHING: types.ARCHIVED_SET_MATCHING_FOLLOW_UPS,
});

export default new FirebaseApi('followUps', {
  LOAD_REQUEST: types.LOAD_FOLLOW_UPS_REQUEST,
  LOAD_SUCCESS: types.LOAD_FOLLOW_UPS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_FOLLOW_UPS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_FOLLOW_UP,
  RESET_ACTIVE: types.RESET_ACTIVE_FOLLOW_UP,
  CREATE: types.CREATE_FOLLOW_UP,
  SET_MATCHING: types.SET_MATCHING_FOLLOW_UPS,
});
