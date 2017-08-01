import * as types from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOAD_TEAMS_REQUEST:
      return {
        ...state,
        ...{
          loading: true,
        },
      };
    case types.LOAD_TEAMS_SUCCESS:
      return {
        ...state,
        ...{
          list: action.payload,
          loading: false,
        },
      };
    case types.UNLOAD_TEAMS_SUCCESS:
      return {
        ...state,
        ...{
          list: {},
          loading: false,
          error: null,
        },
      };
    default:
      return state;
  }
}
