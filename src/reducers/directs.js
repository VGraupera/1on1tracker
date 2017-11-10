import * as types from '../actions/types';

export default function (name = '') {
  return (state = {}, action) => {
    switch (action.type) {
      case name + types.LOAD_DIRECTS_REQUEST:
        return {
          ...state,
          ...{ loading: true },
        };
      case name + types.LOAD_DIRECTS_SUCCESS:
        return {
          ...state,
          ...{
            list: action.payload,
            loading: false,
          },
        };
      case name + types.UNLOAD_DIRECTS_SUCCESS:
        return {
          ...state,
          ...{
            activeDirect: null,
            list: [],
            loading: false,
            error: null,
          },
        };
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
