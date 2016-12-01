import * as types from '../actions/types';

const INITIAL_STATE = {
  text: '1on1 Tracker',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.HEADER_SET_TEXT:
      return { ...state,
        text: action.payload,
      };
    case types.HEADER_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
