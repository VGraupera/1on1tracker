import { createSelector } from 'reselect';

const getQuestions = (state) => {
  if (!(state.questions.list instanceof Map)) {
    return [];
  }
  return state.questions.list;
};
const getFilterByCategory = state => state.questions.filterByCategory;

export const getQuestionsArray = createSelector(
  getQuestions,
  (questions) => {
    const arr = [];
    questions.forEach((question, key) => {
      arr.push({ ...question, ...{ id: key } });
    });
    return arr;
  },
);

export const getFiltreredQuestionsArray = createSelector(
  getQuestionsArray, getFilterByCategory,
  (questions, filter) => {
    if (!filter) {
      return questions;
    }
    return questions.filter(question => question.categoriesQuestionsID === filter);
  },
);
