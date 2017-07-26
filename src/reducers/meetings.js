import * as types from '../actions/types';

const INITIAL_STATE = {
  list: {},
  activeMeeting: null,
  activeMeetingKey: null,
  loading: false,
  error: null,
};
export default function (name = '') {
  return function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case name + types.LOAD_MEETINGS_SUCCESS:
        return { ...state,
          list: action.payload };
      case name + types.UNLOAD_MEETINGS_SUCCESS:
        return INITIAL_STATE;
      case name + types.SET_ACTIVE_MEETING:
        return { ...state,
          activeMeeting: action.payload,
          activeMeetingKey: action.key };
      case name + types.RESET_ACTIVE_MEETING:
        return { ...state,
          activeMeeting: null,
          activeMeetingKey: null };
      default:
        return state;
    }
  };
}
