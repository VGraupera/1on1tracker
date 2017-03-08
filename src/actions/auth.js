import * as firebase from 'firebase';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { firebaseAuth, firebaseDb } from '../firebase/firebase';
import * as types from './types';

import directActions from './directs';
import meetingActions from './meetings';
import followUpActions from './followUps';

const recordLogin = (accountData) => {
  firebaseDb.ref('accounts').child(accountData.uid).set(accountData)
    .catch((error) => {
      console.log(error);
    });
};

export function isAuthenticated(state) {
  return state.auth.status === types.AUTH_LOGGED_IN;
}

export function rootPath(authenticated) {
  return authenticated ? '/dashboard' : '/';
}

export const listenToAuth = () => {
  return (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged((authData) => {
      if (authData) {
        dispatch({
          ...authData.toJSON(),
          type: types.AUTH_LOGIN,
        });

        // reload on auth update.
        directActions.subscribe(dispatch, getState);
        meetingActions.subscribe(dispatch, getState);
        followUpActions.subscribe(dispatch, getState);
        browserHistory.push(rootPath(true));

        recordLogin({
          ...authData.toJSON(),
          lastLogin: new Date().toISOString(),
        });
      } else if (getState().auth.status !== types.AUTH_ANONYMOUS) {
        dispatch({ type: types.AUTH_LOGOUT });
      }
    });
  };
};

export const openAuth = () => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_AWAITING_RESPONSE });

    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithRedirect(provider);
    firebaseAuth.getRedirectResult().catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch({
        type: types.AUTH_ERROR,
        error: `Login failed! ${errorMessage}`,
      });
      dispatch({ type: types.AUTH_LOGOUT });
    });
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    directActions.unsubscribe(dispatch, getState);
    firebaseAuth.signOut().then(() => {
      dispatch({ type: types.AUTH_LOGOUT });
      dispatch(push(rootPath(false)));
    });
  };
};

export function requireAuth(nextState, replace) {
  return (dispatch, getState) => {
    if (!isAuthenticated(getState())) {
      replace({
        pathname: rootPath(false),
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}
