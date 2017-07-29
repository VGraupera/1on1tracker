import * as types from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.HEADER_SET_TEXT:
      return { ...state,
        text: action.payload,
      };
    case types.HEADER_RESET:
      return state;
    default:
      return state;
  }
}
