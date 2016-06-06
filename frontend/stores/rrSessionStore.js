import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import RRSessionConstants from "../components/constants/rrSessionConstants";

let RRSessionStore = new Store(AppDispatcher);
let _rrSessions = {};

let _resetSession = (session){
  _rrSessions[session._id] = session;
}

let _resetSessions = (sessions){
  sessions.forEach( (session) => {
    _rrSessions[session._id] = session;
  } )
}

RRSessionStore.all = () => {
  let sessions = Object.keys(_rrSessions).map( (sessionId) =>
    _rrSessions[sessionId]);
  return sessions;
}

RRSessionStore.find = (id) => {
  return _rrSessions[id];
}

RRSessionStore.__onDispatcher = (payload) => {
  switch (payload.actionType){
    case RRSessionConstants.FETCHED_SESSION:
      _resetSession(payload.session);
      break;
    case RRSessionConstants.FETCHED_SESSIONS:
      _resetSessions(payload.sessions);
      break;
  }
}

export default RRSessionStore;