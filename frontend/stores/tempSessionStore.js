import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { RECEIVED_CACHED_SESSION } from "../constants/constants";

const TempSessionStore = new Store(AppDispatcher);
let cachedSession = null;

const setCachedSession = (session) => {
  cachedSession = session;
};

TempSessionStore.findCachedSession = () => cachedSession;

TempSessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case RECEIVED_CACHED_SESSION:
      setCachedSession(payload.session);
      TempSessionStore.__emitChange();
      break;
    default:
      break;
  }
};

export default TempSessionStore;
