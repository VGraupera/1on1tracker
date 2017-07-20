import { createSelector } from 'reselect';

import { getTeamsArray } from './teams';
import { SORT_WITHOUT_TEAM_NAME } from '../constants/general';

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

const getTeams = state => getTeamsArray(state);

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

/**
 * @description return sorted array of directs with teamName
 * @return {Array}
 */
export const getArchivedDirectsArrayWithTeam = createSelector(
  [getArchivedArray, getTeams],
  (directs, teams) => {
    return directs.map((direct) => {
      let teamName = SORT_WITHOUT_TEAM_NAME;
      if (direct.team) {
        const teamDirect = teams.find(team => team.id === direct.team);
        if (typeof teamDirect !== 'undefined') {
          teamName = teamDirect.name;
        }
      }
      return { ...direct, ...{ teamName } };
    });

  });