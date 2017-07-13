import { createSelector } from 'reselect';
import objNaturalSort from 'object-property-natural-sort';

import { getTeamsArray } from './teams';

/**
 * @description Return directs from state
 * @param {Object} state app state
 */
const getDirect = (state) => {
  if (!(state.directs.list instanceof Map)) {
    return [];
  }
  return state.directs.list;
};
const getTeams = state => getTeamsArray(state);
const sortBy = state => state.directs.sortBy;

/**
 * @description selector for directs array
 * @return {Array} array of direct objects
 */
export const getDirectsArray = createSelector(getDirect, (directs) => {
  const arr = [];
  directs.forEach((direct, key) => {
    arr.push({ ...direct, ...{ id: key } });
  });

  return arr;
});

/**
 * @description return sorted array of directs with teamName
 * @return {Array}
 */
export const getDirectsArrayWithTeam = createSelector(
  [getDirectsArray, getTeams, sortBy],
  (directs, teams, sortByValue) => {
    const arr = directs.map((direct) => {
      let teamName = '';
      if (direct.team) {
        const teamDirect = teams.find(team => team.id === direct.team);
        if (typeof teamDirect !== 'undefined') {
          teamName = teamDirect.name;
        }
      }
      return { ...direct, ...{ teamName } };
    });

    /**
     * @description natural sort for array
     */
    arr.sort(objNaturalSort(sortByValue));

    /**
     * @description put empty value to end
     */
    return arr.sort((a, b) => {
      if (a[sortByValue] === '') {
        return 1;
      }
      if (b[sortByValue] === '') {
        return -1;
      }
      return 0;
    });
  });
