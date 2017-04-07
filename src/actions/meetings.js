import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';

export default new FirebaseApi('meetings', {
  LOAD_SUCCESS: types.LOAD_MEETINGS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_MEETINGS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_MEETING,
  RESET_ACTIVE: types.RESET_ACTIVE_MEETING,
  CREATE: types.CREATE_MEETING,
  SET_MATCHING: types.SET_MATCHING_MEETINGS,
},
'meetingDateReverse');
