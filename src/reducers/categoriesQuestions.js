import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES_QUESTIONS_REQUEST:
      return {
        ...state,
        ...{ loading: true },
      };
    case types.LOAD_CATEGORIES_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...{
          list: action.payload,
          loading: false,
          error: null,
        },
      };
    case types.UNLOAD_CATEGORIES_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...{
          activeQuestion: null,
          list: [],
          error: null,
        },
      };
    case types.SET_ACTIVE_CATEGORIES_QUESTIONS:
      return {
        ...state,
        activeQuestion: action.payload,
      };
    case types.RESET_ACTIVE_CATEGORIES_QUESTIONS:
      return {
        ...state,
        activeQuestion: null,
      };
    default:
      return state;
  }
};
