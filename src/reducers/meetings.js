import * as types from '../actions/types';

export default function (name = '') {
  return function (state = {}, action) {
    switch (action.type) {
      case name + types.LOAD_MEETINGS_REQUEST:
        return {
          ...state,
          ...{
            loading: true,
          },
        };
      case name + types.LOAD_MEETINGS_SUCCESS:
        return {
          ...state,
          ...{
            list: action.payload,
            loading: false,
          },
        };
      case name + types.UNLOAD_MEETINGS_SUCCESS:
        return {
          ...state,
          ...{
            list: {},
            activeMeeting: null,
            activeMeetingKey: null,
            loading: false,
            error: null,
          },
        };
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
