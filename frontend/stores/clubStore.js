import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { LOGGED_IN, LOG_IN_ERROR } from "../constants/constants"

let _currentClub = null;
let _error = null;

const _setCurrentClub = (club) => {
  _currentClub = club === "" ? null : club;
}

const _setError = (err) => {
  _error = err.responseText ? err.responseText : null;
}

const ClubStore = new Store(AppDispatcher);


ClubStore.getCurrentClub = () => {
  debugger;
  return _currentClub;
}

ClubStore.getError = () => {
  let error = _error;
  _error = null;
  return error;
}
ClubStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case LOGGED_IN:
      _setCurrentClub(payload.club);
      ClubStore.__emitChange();
      break;
    case LOG_IN_ERROR:
      _setError(payload.err);
      ClubStore.__emitChange();
      break;
  }
}


export default ClubStore;