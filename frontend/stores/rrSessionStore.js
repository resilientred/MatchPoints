import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { FETCHED_SESSION, FETCHED_SESSIONS, DELETED_SESSION, SESSION_ERROR } from "../constants/constants";

const RRSessionStore = new Store(AppDispatcher);
const _rrSessions = {};
let _error = null;

const _resetSession = (session) => {
  _rrSessions[session.id] = session;
  RRSessionStore.__emitChange();
};

const _resetSessions = (sessions) => {
  sessions.forEach((session) => {
    _rrSessions[session.id] = session;
  });
  RRSessionStore.__emitChange();
};

const _deleteSession = (sessionId) => {
  delete _rrSessions[sessionId];
  RRSessionStore.__emitChange();
};

const _setError = (error) => {
  _error = error.responseText;
};

RRSessionStore.all = () => {
  let sessions = Object.keys(_rrSessions);

  return sessions.length === 0 ? null :
    sessions.map( sessionId => _rrSessions[sessionId]);
};

RRSessionStore.find = id => _rrSessions[id];

RRSessionStore.getError = () => {
  let err = _error;
  _error = null;
  return err;
};

RRSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_SESSION:
      _resetSession(payload.session);
      break;
    case FETCHED_SESSIONS:
      _resetSessions(payload.sessions);
      break;
    case DELETED_SESSION:
      _deleteSession(payload.session);
      break;
    case SESSION_ERROR:
      _setError(payload.error);
      break;
    default:
      break;
  }
};

export default RRSessionStore;
