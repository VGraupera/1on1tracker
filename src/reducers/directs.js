import * as types from '../actions/types';

const INITIAL_STATE = {
  activeDirect: null,
  activeDirectKey: null,
  list: [],
  keys: [],
  loading: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_DIRECTS_SUCCESS:
      return { ...state,
        list: action.list,
        keys: action.keys,
      };
    case types.UNLOAD_DIRECTS_SUCCESS:
      return INITIAL_STATE;
    case types.SET_ACTIVE_DIRECT:
      return { ...state,
        activeDirect: action.payload,
        activeDirectKey: action.key };
    case types.RESET_ACTIVE_DIRECT:
      return { ...state,
        activeDirect: null,
        activeDirectKey: null };
    default:
      return state;
  }
}
