import { createSelector } from 'reselect';

/**
 * @description Return team list from state
 * @param {Object} state app state
 */
const getTeams = state => state.teams.list;

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

/**
 * @description return single team item from state
 * @param {String} id ID of team
 */
export const getTeam = id => createSelector(getTeamsArray, (teams) => {
  return teams.find(team => team.id === id);
});
