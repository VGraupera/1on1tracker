import axios from 'axios';
import * as types from './types';


import { SUGGESTED_QUESTION_URL } from '../constants/general';
import { FirebaseApi } from '../firebase/firebase';


class QuestionFirebaseApi extends FirebaseApi {

  importQuestionsTo = () => {
    return (dispatch, getState) => {
      axios.get(SUGGESTED_QUESTION_URL)
        .then((res) => {
          const { data } = res;
          const promiseAction = [];
          data.forEach((item) => {
            dispatch({
              type: types.IMPORT_QUESTIONS_REQUEST,
            });
            promiseAction.push(this._baseRef(getState)
              .orderByChild('externalID')
              .equalTo(item.id)
              .once('value', (snapshot) => {
                const exist = snapshot.val();
                if (!exist) {
                  snapshot.ref.push({
                    question: item.question,
                    externalID: item.id,
                    externalData: { ...item },
                  });
                }
              }));
          });
          Promise.all(promiseAction).then(() => {
            dispatch({ type: types.IMPORT_QUESTIONS_SUCCESS });
          }).catch((err) => {
            dispatch({
              type: types.IMPORT_QUESTIONS_FAILURE,
              payload: err.message,
            });
          });
        });
    };
  };
}

export default new QuestionFirebaseApi('questions', {
  LOAD_REQUEST: types.LOAD_QUESTIONS_REQUEST,
  LOAD_SUCCESS: types.LOAD_QUESTIONS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_QUESTIONS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_QUESTIONS,
  RESET_ACTIVE: types.RESET_ACTIVE_QUESTIONS,
  CREATE: types.CREATE_QUESTIONS,
  SET_MATCHING: types.SET_MATCHING_QUESTIONS,
}, 'question');
