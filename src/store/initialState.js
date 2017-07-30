import locStore from 'store';
import { SORT_BY_NAME, SORT_BY_KEY_NAME , LOCAL_STORAGE_AUTH_STATE_KEY} from '../constants/general';
import { AUTH_ANONYMOUS } from '../actions/types';

const initialState = {
  directs: {
    activeDirect: null,
    list: [],
    loading: false,
    error: null,
    sortBy: locStore.get(SORT_BY_KEY_NAME) || SORT_BY_NAME,
  },
  archivedDirects: {
    activeDirect: null,
    list: [],
    loading: false,
    error: null,
    sortBy: SORT_BY_NAME,
  },
  meetings: {
    list: {},
    activeMeeting: null,
    activeMeetingKey: null,
    loading: false,
    error: null,
  },
  archivedMeetings: {
    list: {},
    activeMeeting: null,
    activeMeetingKey: null,
    loading: false,
    error: null,
  },
  followUps: {
    list: {},
    activeFollowUp: null,
    activeFollowUpKey: null,
    loading: false,
    error: null,
  },
  archivedFollowUp: {
    list: {},
    activeFollowUp: null,
    activeFollowUpKey: null,
    loading: false,
    error: null,
  },
  auth: {
    displayName: null,
    uid: null,
    email: null,
    photoURL: null,
    status: locStore.get(LOCAL_STORAGE_AUTH_STATE_KEY) || AUTH_ANONYMOUS,
  },
  header: {
    text: '1on1 Tracker',
  },
  teams: {
    list: {},
    loading: false,
    error: null,
  },
};

export default initialState;
