import axios from 'axios';
import * as types from './types';


import { SUGGESTED_QUESTION_URL } from '../constants/general';
import { FirebaseApi } from '../firebase/firebase';

/**
 * @description Load questions JSON from external file
 * @return {Promise}
 */
const loadSuggestedQuestions = () => {
  return new Promise((resolve, reject) => {
    axios.get(SUGGESTED_QUESTION_URL)
      .then((res) => {
        const { data } = res;
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
  });
};

/**
 * @description Retrun array of questions categories with firebase id
 * @param {Object} ref The firebase reference
 * @param {Array} data array of quetionss
 * @return {Array} categories array
 */
const importCategoriesQuestions = (ref, data) => {
  const categories = [...new Set(data.map(a => a.category))];
  const categoriesQuestions = [];
  categories.forEach((category) => {
    ref.orderByChild('name')
      .equalTo(category)
      .once('value', (snapshot) => {
        const exist = snapshot.val();
        if (!exist) {
          const newCategory = snapshot.ref.push({
            name: category,
          });
          categoriesQuestions.push({ id: newCategory.key, name: category });
        } else {
          categoriesQuestions.push({ id: Object.keys(exist)[0], name: category });
        }
      });
  });
  return categoriesQuestions;
};

/**
 * @description Import question if doesn't exist
 * @param {Object} ref the firebase reference
 * @param {Object} item a question object
 * @param {Array} categories
 */
const getNoExistQuestions = (ref, item, categories) => {
  return new Promise((resolve) => {
    ref.orderByChild('externalID')
      .equalTo(item.id)
      .once('value', (snapshot) => {
        const exist = snapshot.val();
        const category = categories.find(cat => cat.name === item.category);
        if (!exist) {
          resolve({
            question: item.question,
            externalID: item.id,
            externalData: { ...item },
            categoriesQuestionsID: category.id,
          });
        }
        resolve();
      });
  });
};

class QuestionFirebaseApi extends FirebaseApi {

  importQuestionsTo = (categoriesQuestionsAction) => {
    return (dispatch, getState) => {
      dispatch({
        type: types.IMPORT_QUESTIONS_REQUEST,
      });
      this.unsubscribe(dispatch);
      const questionApiReference = this._baseRef(getState);
      loadSuggestedQuestions()
          .then((data) => {
            const reference = categoriesQuestionsAction._baseRef(getState);
            const categoriesQuestions = importCategoriesQuestions(reference, data);
            return { data, categoriesQuestions };
          })
        .then(({ data, categoriesQuestions }) => {
          const promiseAction = [];
          data.forEach((item) => {
            promiseAction.push(
              getNoExistQuestions(
                questionApiReference,
                item,
                categoriesQuestions,
              ));
          });
          return Promise.all(promiseAction)
            .then((res) => {
              return res;
            });
        })
        .then((questionsToInsert) => {
          const insertActions = [];
          questionsToInsert.forEach((question) => {
            if (question) {
              insertActions.push(questionApiReference.push(question));
            }
          });
          return Promise.all(insertActions);
        })
        .then(() => {
          this.subscribe(dispatch, getState);
        })
        .catch((err) => {
          dispatch({
            type: types.IMPORT_QUESTIONS_FAILURE,
            payload: err.message,
          });
          this.subscribe(dispatch, getState);
        });
    };
  };
}

export const setCategoryFilter = categoryId => ({
  type: types.SET_QUESTIONS_FILTER,
  payload: categoryId,
});

export default new QuestionFirebaseApi('questions', {
  LOAD_REQUEST: types.LOAD_QUESTIONS_REQUEST,
  LOAD_SUCCESS: types.LOAD_QUESTIONS_SUCCESS,
  UNLOAD_SUCCESS: types.UNLOAD_QUESTIONS_SUCCESS,
  SET_ACTIVE: types.SET_ACTIVE_QUESTIONS,
  RESET_ACTIVE: types.RESET_ACTIVE_QUESTIONS,
  CREATE: types.CREATE_QUESTIONS,
  SET_MATCHING: types.SET_MATCHING_QUESTIONS,
}, 'question');
