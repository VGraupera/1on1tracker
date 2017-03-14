import * as types from '../actions/types';

const INITIAL_STATE = {
  activeDirect: null,
  list: [],
  loading: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_DIRECTS_SUCCESS:
      return { ...state,
        list: action.payload,
      };
    case types.UNLOAD_DIRECTS_SUCCESS:
      return INITIAL_STATE;
    case types.SET_ACTIVE_DIRECT:
      return {
        ...state,
        activeDirect: action.payload,
      };
    case types.RESET_ACTIVE_DIRECT:
      return {
        ...state,
        activeDirect: null,
      };
    default:
      return state;
  }
}
