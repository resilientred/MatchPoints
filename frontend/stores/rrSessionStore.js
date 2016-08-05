import { Store } from "flux/utils"
import AppDispatcher from "../dispatcher/dispatcher"
import { FETCHED_SESSION, FETCHED_SESSIONS, DELETED_SESSION } from "../constants/constants"

var RRSessionStore = new Store(AppDispatcher);
var _rrSessions = {};

var _resetSession = (session) => {
  _rrSessions[session.id] = session;
  RRSessionStore.__emitChange();
};

var _resetSessions = (sessions) => {
  sessions.forEach( (session) => {
    _rrSessions[session.id] = session;
  } );
  RRSessionStore.__emitChange();
};

var _deleteSession = (sessionId) => {
  delete _rrSessions[sessionId];
  RRSessionStore.__emitChange();
};

RRSessionStore.all = () => {
  return Object.keys(_rrSessions)
    .map( sessionId => _rrSessions[sessionId]);
}

RRSessionStore.find = (id) => {
  return _rrSessions[id];
}

RRSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType){
    case FETCHED_SESSION:
      _resetSession(payload.session);
      break;
    case FETCHED_SESSIONS:
      _resetSessions(payload.sessions);
      break;
    case DELETED_SESSION:
      _deleteSession(payload.session);
      break;
  }
}

export default RRSessionStore;