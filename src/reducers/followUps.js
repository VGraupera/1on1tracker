import * as types from '../actions/types';

export default function (name = '') {
  return function (state = {}, action) {
    switch (action.type) {
      case name + types.LOAD_FOLLOW_UPS_SUCCESS:
        return { ...state,
          list: action.payload };
      case name + types.SET_MATCHING_FOLLOW_UPS:
        return { ...state,
          matchingList: action.payload };
      case name + types.UNLOAD_FOLLOW_UPS_SUCCESS:
        return state;
      case name + types.SET_ACTIVE_FOLLOW_UP:
        return { ...state,
          activeFollowUp: action.payload,
          activeFollowUpKey: action.key };
      case name + types.RESET_ACTIVE_FOLLOW_UP:
        return { ...state,
          activeFollowUp: null,
          activeFollowUpKey: null };
      default:
        return state;
    }
  }
};
