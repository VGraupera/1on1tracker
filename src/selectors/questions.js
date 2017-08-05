import { createSelector } from 'reselect';

const getQuestions = (state) => {
  if (!(state.questions.list instanceof Map)) {
    return [];
  }
  return state.questions.list;
};

export const getQuestionsArray = createSelector(
  getQuestions,
  (questions) => {
    const arr = [];
    questions.forEach((question, id) => {
      arr.push({ ...question, ...{ id } });
    });
    return arr;
  },
);
