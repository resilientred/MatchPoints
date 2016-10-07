import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import {RECEIVED_CACHED_SESSION} from "../constants/constants";

const TempSessionStore = new Store(AppDispatcher);
let _cachedSession = null;

const _setCachedSession = (session) => {
  _cachedSession = session;
};

TempSessionStore.findCachedSession = () => _cachedSession;

TempSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case RECEIVED_CACHED_SESSION:
      _setCachedSession(payload.session);
      TempSessionStore.__emitChange();
      break;
    default:
      break;
  }
};

export default TempSessionStore;
