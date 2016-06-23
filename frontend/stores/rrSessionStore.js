import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import RRSessionConstants from "../constants/rrSessionConstants";

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
  var sessions = Object.keys(_rrSessions).map( (sessionId) =>
    _rrSessions[sessionId]);
  return sessions;
}

RRSessionStore.find = (id) => {
  return _rrSessions[id];
}

RRSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType){
    case RRSessionConstants.FETCHED_SESSION:
      _resetSession(payload.session);
      break;
    case RRSessionConstants.FETCHED_SESSIONS:
      _resetSessions(payload.sessions);
      break;
    case RRSessionConstants.DELETED_SESSION:
      _deleteSession(payload.session);
      break;
  }
}

export default RRSessionStore;