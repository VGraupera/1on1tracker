import * as types from '../actions/types';

const INITIAL_STATE = {
  list: {},
  loading: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_TEAMS_SUCCESS:
      return {
        ...state,
        ...{ list: action.payload },
      };
    case types.UNLOAD_TEAMS_SUCCESS:
      return {
        ...{},
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
