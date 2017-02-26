import * as firebase from 'firebase';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { firebaseAuth, firebaseDb } from '../firebase/firebase';
import * as types from './types';

import directActions from './directs';
import meetingActions from './meetings';

const recordLogin = (accountData) => {
  firebaseDb.ref('accounts').child(accountData.uid).set(accountData)
    .then(() => {
      console.log('Login recorded');
    })
    .catch((error) => {
      console.log(error);
    });
};

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
        browserHistory.push('/directs');

        recordLogin({
          ...authData.toJSON(),
          lastLogin: new Date().toISOString(),
        });
      } else {
        if (getState().auth.status !== types.AUTH_ANONYMOUS) {
          dispatch({ type: types.AUTH_LOGOUT });
        }
      }
    });
  };
};

export const openAuth = () => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_AWAITING_RESPONSE });

    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithRedirect(provider);

    firebaseAuth.getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        console.log(result);
      }
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
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
    firebaseAuth.signOut()
    .then(
      () => {
        dispatch({ type: types.AUTH_LOGOUT });
        dispatch(push('/'));
      },
    );
  };
};

export function isAuthenticated(state) {
  return state.auth.status === types.AUTH_LOGGED_IN;
}

export function requireAuth(nextState, replace) {
  return (dispatch, getState) => {
    if (!isAuthenticated(getState())) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}
