import { createSelector } from 'reselect';

/**
 * @description Return directs from state
 * @param {Object} state app state
 */
const getArchivedDirect = (state) => {
  if (!(state.archivedDirects.list instanceof Map)) {
    return [];
  }
  return state.archivedDirects.list;
};

/**
 * @description selector for directs array
 * @return {Array} array of direct objects
 */
export const getArchivedArray = createSelector(getArchivedDirect, (directs) => {
  const arr = [];
  directs.forEach((direct, key) => {
    arr.push({ ...direct, ...{ id: key } });
  });

  return arr;
});

/**
 * @description selector for archived array count
 * @return {Number} number of array items
 */
export const getArchivedArrayCount = createSelector(
  getArchivedArray,
  arr => arr.length,
  );

