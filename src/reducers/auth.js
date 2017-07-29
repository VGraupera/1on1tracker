import {
  AUTH_AWAITING_RESPONSE,
  AUTH_LOGGED_IN,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_ANONYMOUS,
  AUTH_LOGIN,
  AUTH_OPEN } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_OPEN:
      return {
        status: AUTH_AWAITING_RESPONSE,
        displayName: 'guest',
        uid: null,
        email: null,
        photoURL: null,
      };
    case AUTH_LOGIN:
      return {
        status: AUTH_LOGGED_IN,
        displayName: action.displayName,
        uid: action.uid,
        email: action.email,
        photoURL: action.photoURL,
      };
    case AUTH_LOGOUT:
    case AUTH_ERROR:
      return {
        status: AUTH_ANONYMOUS,
        displayName: 'guest',
        uid: null,
        email: null,
        photoURL: null,
      };
    default: return state;
  }
};
