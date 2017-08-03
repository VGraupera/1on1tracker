import * as types from './types';
import { FirebaseApi } from '../firebase/firebase';

export default new FirebaseApi('questions', {
  LOAD_REQUEST: types.LOAD_QUESTIONS_REQUEST,
  LOAD_SUCCESS: types.LOAD_QUESTIONS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_QUESTIONS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_QUESTIONS,
  RESET_ACTIVE: types.RESET_ACTIVE_QUESTIONS,
  CREATE: types.CREATE_QUESTIONS,
  SET_MATCHING: types.SET_MATCHING_QUESTIONS,
},'question');
