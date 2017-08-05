import { createSelector } from 'reselect';
import objNaturalSort from 'object-property-natural-sort';
import groupArray from 'group-array';
import sort from 'mout/array/sort';

import { SORT_BY_TEAM_NAME, SORT_WITHOUT_TEAM_NAME } from '../constants/general';
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
 * @description natural sort of array
 * @param {Array} arr
 * @param {String} sortByValue name of property
 * @return {Array.<T>}
 */
const arraySort = (arr, sortByValue) => {
  return sort(arr, objNaturalSort(sortByValue));
};

function putEmptyTeamToEnd(arr, sortByValue) {
  return sort(arr, (a, b) => {
    if (a[sortByValue] === SORT_WITHOUT_TEAM_NAME) {
      return 1;
    }
    if (b[sortByValue] === SORT_WITHOUT_TEAM_NAME) {
      return -1;
    }
    return 0;
  });
}

function groupByTeam(arr, sortByValue) {
  return groupArray(arr, sortByValue);
}

/**
 * @description return sorted array of directs with teamName
 * @return {Array}
 */
export const getDirectsArrayWithTeam = createSelector(
  [getDirectsArray, getTeams, sortBy],
  (directs, teams, sortByValue) => {
    const arr = directs.map((direct) => {
      let teamName = SORT_WITHOUT_TEAM_NAME;
      if (direct.team) {
        const teamDirect = teams.find(team => team.id === direct.team);
        if (typeof teamDirect !== 'undefined') {
          teamName = teamDirect.name;
        }
      }
      return { ...direct, ...{ teamName } };
    });

    let directsArray = arraySort(arr, sortByValue);

    if (sortByValue === SORT_BY_TEAM_NAME) {
      directsArray = putEmptyTeamToEnd(directsArray, sortByValue);
      return groupByTeam(directsArray, sortByValue);
    }

    return directsArray;
  });
