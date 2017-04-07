import * as types from '../actions/types';

const INITIAL_STATE = {
  list: {},
  activeFollowUp: null,
  activeFollowUpKey: null,
  loading: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_FOLLOW_UPS_SUCCESS:
      return { ...state,
        list: action.payload };
    case types.SET_MATCHING_FOLLOW_UPS:
      return { ...state,
        matchingList: action.payload };
    case types.UNLOAD_FOLLOW_UPS_SUCCESS:
      return INITIAL_STATE;
    case types.SET_ACTIVE_FOLLOW_UP:
      return { ...state,
        activeFollowUp: action.payload,
        activeFollowUpKey: action.key };
    case types.RESET_ACTIVE_FOLLOW_UP:
      return { ...state,
        activeFollowUp: null,
        activeFollowUpKey: null };
    default:
      return state;
  }
}
