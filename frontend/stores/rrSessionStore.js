import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";

let RRSessionStore = new Store(AppDispatcher);
let _RRSessions = {};

let _resetSession = (session){
  _RRSessions[session._id] = session;
}

RRSessionStore.__onDispatcher(payload){
  switch (payload.actionType){
    case "FETCHED_SESSION":
      _resetSession(payload.session);
      break;
  }
}

export default RRSessionStore;