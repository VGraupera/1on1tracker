import locStore from 'store';
import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';
import { ARCHIVED_PATH_PREFIX, SORT_BY_KEY_NAME } from '../constants/general';

export const setSortBy = (value) => {
  return (dispatch) => {
    locStore.set(SORT_BY_KEY_NAME,value);
    dispatch({
      type: types.SET_DIRECTS_SORT_BY,
      payload: value,
    });
  };
};

export const archivedDirects = new FirebaseApi(`${ARCHIVED_PATH_PREFIX}directs`, {
  LOAD_SUCCESS: types.ARCHIVED_LOAD_DIRECTS_SUCCESS,
  UNLOAD_SUCCESS: types.ARCHIVED_UNLOAD_DIRECTS_SUCCESS,
  SET_ACTIVE: types.ARCHIVED_SET_ACTIVE_DIRECT,
  RESET_ACTIVE: types.ARCHIVED_RESET_ACTIVE_DIRECT,
  CREATE: types.ARCHIVED_CREATE_DIRECT,
  SET_MATCHING: types.ARCHIVED_SET_MATCHING_DIRECTS,
}, 'name');

export default new FirebaseApi('directs', {
  LOAD_SUCCESS: types.LOAD_DIRECTS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_DIRECTS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_DIRECT,
  RESET_ACTIVE: types.RESET_ACTIVE_DIRECT,
  CREATE: types.CREATE_DIRECT,
  SET_MATCHING: types.SET_MATCHING_DIRECTS,
}, 'name');
