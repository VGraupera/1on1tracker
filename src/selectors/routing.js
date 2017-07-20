import { createSelector } from 'reselect';

/**
 * @description return routing properties from state
 * @param {Object} state app state
 */
const getRouting = state => state.routing.locationBeforeTransitions;

/**
 * @description Check does routing state has prop state and isArchived
 */
export const getIsArchived = createSelector(getRouting, (routing) => {
  const { state } = routing;
  return (state && state.isArchived) || false;
});
