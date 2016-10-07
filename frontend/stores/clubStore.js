import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { LOGGED_IN, LOG_IN_ERROR, REMOVED_PLAYER } from "../constants/constants";

const ClubStore = new Store(AppDispatcher);
let _currentClub = null;
let _error = null;

const _setCurrentClub = (club) => {
  _currentClub = club === "" ? null : club;
};
const _setError = (err) => {
  _error = err.responseText ? err.responseText : null;
};
const _removePlayer = (id) => {
  let players = _currentClub.players;
  for (let i = 0; i < _currentClub.players.length; i++){
    if (players[i]._id === id){
      players.splice(i, 1);
    }
  }
};



ClubStore.getCurrentClub = () => _currentClub;

ClubStore.getError = () => {
  let error = _error;
  _error = null;
  return error;
};

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
    case REMOVED_PLAYER:
      _removePlayer(payload.playerId);
      break;
    default:
      break;
  }
};

export default ClubStore;
