import { createSelector } from 'reselect';

/**
 * @description Retrun meetings list from state
 * @param {Object} state app state
 * @return {Array|Map}
 */
const getMeetings = (state) => {
  if (!(state.meetings.list instanceof Map)) {
    return [];
  }
  return state.meetings.list;
};

/**
 * @description Return active meeting
 * @param {Object} state app state
 * @param {{id}} props
 * @return {Object} active meeting
 */
const getActiveMeeting = (state, props) => ({
  ...state.meetings.activeMeeting,
  ...{ id: props.id },
});

/**
 * @description selector for meetings array
 * @return {Array} array of meetings
 */
export const getMeetingsArray = createSelector(getMeetings, (meetings) => {
  const arr = [];
  meetings.forEach((meeting, id) => {
    arr.push({ ...meeting, ...{ id } });
  });
  return arr;
});

/**
 * @description Return array of meetings that belongs to same direct
 */
export const getMeetingsInSameDirectAsActive = createSelector(
  [getMeetingsArray, getActiveMeeting],
  (meetings, active) => {
    return meetings.filter(meeting => meeting.directKey === active.directKey);
  },
);

/**
 * @description return index of active meetings in array of meetings that belong same direct
 */
export const getIndexOfActiveMeating = createSelector(
  [getMeetingsInSameDirectAsActive, getActiveMeeting],
  (meetings, active) => {
    return meetings.findIndex(meeting => meeting.id === active.id);
  },
);
