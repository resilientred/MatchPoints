import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { FETCHED_SESSION, FETCHED_SESSIONS,
  DELETED_SESSION, SESSION_ERROR,
  SAVED_SESSION } from "../constants/constants";

const RRSessionStore = new Store(AppDispatcher);
const rrSessions = {};
let error = null;

const resetSession = (session) => {
  rrSessions[session.id] = session;
  RRSessionStore.__emitChange();
};

const resetSessions = (sessions) => {
  sessions.forEach((session) => {
    rrSessions[session.id] = session;
  });
  RRSessionStore.__emitChange();
};

const deleteSession = (sessionId) => {
  delete rrSessions[sessionId];
  RRSessionStore.__emitChange();
};

const setError = (e) => {
  error = e.responseText;
};

RRSessionStore.all = () => {
  const sessions = Object.keys(rrSessions);

  return sessions.length === 0 ? null :
    sessions.map(sessionId => rrSessions[sessionId]);
};

RRSessionStore.find = id => rrSessions[id];

RRSessionStore.getError = () => {
  const err = error;
  error = null;
  return err;
};

RRSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_SESSION:
      resetSession(payload.session);
      break;
    case FETCHED_SESSIONS:
      resetSessions(payload.sessions);
      break;
    case DELETED_SESSION:
      deleteSession(payload.session);
      break;
    case SAVED_SESSION:
      if (RRSessionStore.all()) {
        resetSession(payload.session);
      }
      RRSessionStore.__emitChange();
      break;
    case SESSION_ERROR:
      setError(payload.error);
      break;
    default:
      break;
  }
};

export default RRSessionStore;
