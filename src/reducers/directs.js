import * as types from '../actions/types';
import { SORT_BY_NAME } from '../constants/general';

const INITIAL_STATE = {
  activeDirect: null,
  list: [],
  loading: false,
  error: null,
  sortBy: SORT_BY_NAME,
};


export default function (name='') {

  return function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case name + types.LOAD_DIRECTS_SUCCESS:
        return {
          ...state,
          list: action.payload,
        };
      case name + types.UNLOAD_DIRECTS_SUCCESS:
        return INITIAL_STATE;
      case name + types.SET_ACTIVE_DIRECT:
        return {
          ...state,
          activeDirect: action.payload,
        };
      case name + types.RESET_ACTIVE_DIRECT:
        return {
          ...state,
          activeDirect: null,
        };
      case name + types.SET_DIRECTS_SORT_BY:
        return { ...state, ...{ sortBy: action.payload } };
      default:
        return state;
    }
  };
}
