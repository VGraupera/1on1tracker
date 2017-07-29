import * as types from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOAD_TEAMS_SUCCESS:
      return {
        ...state,
        ...{ list: action.payload },
      };
    case types.UNLOAD_TEAMS_SUCCESS:
      return {
        ...{},
        ...state,
      };
    default:
      return state;
  }
}
