import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';

export default new FirebaseApi('directs', {
  LOAD_SUCCESS: types.LOAD_DIRECTS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_DIRECTS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_DIRECT,
  RESET_ACTIVE: types.RESET_ACTIVE_DIRECT,
  CREATE: types.CREATE_DIRECT,
},
'name');

