import { createSelector } from 'reselect';

const getCategoriesQuestions = (state) => {
  if (!(state.categoriesQuestions.list instanceof Map)) {
    return [];
  }
  return state.categoriesQuestions.list;
};

export const getCategoriesQuestionsArray = createSelector(
  getCategoriesQuestions,
  (categoriesQuestions) => {
    const arr = [];
    categoriesQuestions.forEach((question, id) => {
      arr.push({ ...question, ...{ id } });
    });
    return arr;
  },
);
