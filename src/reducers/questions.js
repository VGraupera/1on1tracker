import * as types from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_REQUEST:
      return {
        ...state,
        ...{ loading: true },
      };
    case types.LOAD_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...{
          list: action.payload,
          loading: false,
        },
      };
    case types.UNLOAD_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...{
          activeQuestion: null,
          list: [],
          loading: false,
          error: null,
        },
      };
    case types.SET_ACTIVE_QUESTIONS:
      return {
        ...state,
        activeQuestion: action.payload,
      };
    case types.RESET_ACTIVE_QUESTIONS:
      return {
        ...state,
        activeQuestion: null,
      };
    default:
      return state;
  }
}
