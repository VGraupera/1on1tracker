import * as types from '../actions/types';
import { SORT_BY_NAME } from '../constants/sort';

const INITIAL_STATE = {
  activeDirect: null,
  list: [],
  loading: false,
  error: null,
  sortBy: SORT_BY_NAME,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_DIRECTS_SUCCESS:
      return {
        ...state,
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
    case types.SET_DIRECTS_SORT_BY:
      return { ...state, ...{ sortBy: action.payload } };
    default:
      return state;
  }
}
