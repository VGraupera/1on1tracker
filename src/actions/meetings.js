import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';
import { ARCHIVED_PATH_PREFIX } from '../constants/general';

export const archivedMeetings = new FirebaseApi(`${ARCHIVED_PATH_PREFIX}meetings`, {
  LOAD_REQUEST: types.ARCHIVED_LOAD_MEETINGS_REQUEST,
  LOAD_SUCCESS: types.ARCHIVED_LOAD_MEETINGS_SUCCESS,
  UNLOAD_SUCCESS: types.ARCHIVED_UNLOAD_MEETINGS_SUCCESS,
  SET_ACTIVE: types.ARCHIVED_SET_ACTIVE_MEETING,
  RESET_ACTIVE: types.ARCHIVED_RESET_ACTIVE_MEETING,
  CREATE: types.ARCHIVED_CREATE_MEETING,
  SET_MATCHING: types.ARCHIVED_SET_MATCHING_MEETINGS,
},
'meetingDateReverse');

export default new FirebaseApi('meetings', {
  LOAD_REQUEST: types.LOAD_MEETINGS_REQUEST,
  LOAD_SUCCESS: types.LOAD_MEETINGS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_MEETINGS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_MEETING,
  RESET_ACTIVE: types.RESET_ACTIVE_MEETING,
  CREATE: types.CREATE_MEETING,
  SET_MATCHING: types.SET_MATCHING_MEETINGS,
},
'meetingDateReverse');
