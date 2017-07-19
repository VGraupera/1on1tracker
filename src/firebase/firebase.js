import firebase from 'firebase';
import { firebaseConfig } from './config';
import * as types from '../actions/types';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

export class FirebaseApi {
  constructor(path = null, constants, orderBy) {
    this._path = path;
    this._constants = constants;
    this._orderBy = orderBy;
  }

  _baseRef(getState) {
    const state = getState();
    return firebaseDb.ref(this._path).child(state.auth.uid);
  }

  subscribe(dispatch, getState) {
    const state = getState();
    if (!state.auth.uid) return;
    let ref = this._baseRef(getState);

    if (this._orderBy) {
      ref = ref.orderByChild(this._orderBy);
    }

    ref.on('value', (snapshot) => {
      const itemsMap = new Map();
      snapshot.forEach((child) => {
        itemsMap.set(child.key, child.val());
      });
      dispatch({
        type: this._constants.LOAD_SUCCESS,
        payload: itemsMap,
      });
    });

    this._unsubscribe = () => ref.off();
  }

  unsubscribe(dispatch) {
    if (this._unsubscribe) this._unsubscribe();
    dispatch({
      type: this._constants.UNLOAD_SUCCESS,
    });
  }

  find = (key) => {
    return (dispatch, getState) => {
      this._baseRef(getState)
      .child(key)
      .on('value', (snapshot) => {
        if (snapshot) {
          dispatch({
            type: this._constants.SET_ACTIVE,
            payload: snapshot.val(),
            key,
          });
        } else {
          dispatch({
            type: types.FLASH_ERROR,
            error: 'Record not found!',
          });
        }
      });
    };
  }

  equalTo = (key, value) => {
    return (dispatch, getState) => {
      this._baseRef(getState)
        .orderByChild(key)
        .equalTo(value)
      .on('value', (snapshot) => {
        const itemsMap = new Map();
        snapshot.forEach((child) => {
          itemsMap.set(child.key, child.val());
        });
        dispatch({
          type: this._constants.SET_MATCHING,
          payload: itemsMap,
        });
      });
    };
  }

  remove = (key) => {
    return (dispatch, getState) => {
      return this._baseRef(getState)
        .child(key)
        .remove()
        .then(() => {
          dispatch(this.resetActive());
          dispatch({
            type: types.FLASH_NOTICE,
            message: 'Successfully deleted',
          });
        })
        .catch((error) => {
          dispatch({
            type: types.FLASH_ERROR,
            error: `Delete failed! ${error.message}`,
          });
        });
    };
  }

  removeEqualTo = (key, value) => {
    console.log(`key ${key} val ${value}`);
    return (dispatch, getState) => {
      this._baseRef(getState)
        .orderByChild(key)
        .equalTo(value)
        .on('child_added', (snapshot) => {
          snapshot.ref.remove();
        });
    };
  }

  update = (key, values) => {
    return (dispatch, getState) => {
      const record = {
        ...values,
        updatedAt: new Date().toISOString(),
      };
      return this._baseRef(getState)
        .child(key)
        .update(record)
        .then(() => {
          dispatch({
            type: types.FLASH_NOTICE,
            message: 'Saved!',
          });
        })
        .catch((error) => {
          dispatch({
            type: types.FLASH_ERROR,
            error: `Update failed! ${error}`,
          });
        });
    };
  }

  create = (values) => {
    return (dispatch, getState) => {
      const record = { ...values, createdAt: new Date().toISOString() };
      return this._baseRef(getState)
        .push(record, (error) => {
          if (!error) {
            dispatch({
              type: types.FLASH_NOTICE,
              message: 'Successfully created',
            });
          }
        });
    };
  }

  resetActive = () => {
    return {
      type: this._constants.RESET_ACTIVE,
    };
  }

  moveTo = (key, newRef) => {
    return (dispatch, getState) => {
      return this._baseRef(getState)
        .child(key)
        .once('value', (snapshot) => {
          return newRef._baseRef(getState)
              .child(key)
              .set(snapshot.val()).then(() => {
                dispatch(this.remove(key));
              });
        });
    };
  }
  moveEqualTo = (key, value, newRef) => {
    return (dispatch, getState) => {
      this._baseRef(getState)
        .orderByChild(key)
        .equalTo(value)
        .once('value', (snapshots) => {
          newRef._baseRef(getState)
            .set(snapshots.val())
            .then(() => {
              dispatch(this.removeEqualTo(key, value));
            });
        });
    };
  }
}
