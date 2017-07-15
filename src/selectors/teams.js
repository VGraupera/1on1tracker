import { createSelector } from 'reselect';

import { getDirectsArray } from './direct';

/**
 * @description Return team list from state
 * @param {Object} state app state
 */
const getTeams = (state) => {
  if (!(state.teams.list instanceof Map)) {
    return [];
  }
  return state.teams.list;
};

/**
 * @description directs array
 */
const directArray = state => getDirectsArray(state);

/**
 * @description selector for team array
 * @return {Array} array of teams objects
 */
export const getTeamsArray = createSelector(getTeams, (teams) => {
  const arr = [];
  teams.forEach((team, id) => {
    arr.push({ ...team, ...{ id } });
  });
  return arr;
});

export const getTeamsArrayWithDeleteFlag = createSelector(
  [getTeamsArray, directArray],
  (teams, directs) => {
    return teams.map((team) => {
      const assigned = directs.find(direct => team.id === direct.team);
      return {
        ...team,
        ...{ allowedDelete: assigned === undefined } };
    });
  },
);

/**
 * @description return single team item from state
 * @param {String} id ID of team
 */
export const getTeam = id => createSelector(getTeamsArray, (teams) => {
  return teams.find(team => team.id === id);
});
