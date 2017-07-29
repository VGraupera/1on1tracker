import * as types from '../actions/types';

export default function (name = '') {
  return function (state = {}, action) {
    switch (action.type) {
      case name + types.LOAD_DIRECTS_SUCCESS:
        return {
          ...state,
          list: action.payload,
        };
      case name + types.UNLOAD_DIRECTS_SUCCESS:
        return state;
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
