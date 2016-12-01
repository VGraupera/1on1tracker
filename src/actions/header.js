import * as types from './types';

export function setText(text) {
  return {
    type: types.HEADER_SET_TEXT,
    payload: text,
  };
}

export function reset() {
  return {
    type: types.HEADER_RESET,
  };
}
