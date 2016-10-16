import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { LOGGED_IN, LOG_IN_ERROR,
  REMOVED_PLAYER, PARSED_PLAYERS,
  ADDED_PLAYER, UPDATED_PLAYER } from "../constants/constants";

const ClubStore = new Store(AppDispatcher);
let currentClub = null;
let error = null;

const setCurrentClub = (club) => {
  currentClub = club === "" ? null : club;
};

const setError = (err) => {
  error = err.responseText ? err.responseText : null;
};

const removePlayer = (id) => {
  const players = currentClub.players;
  for (let i = 0; i < players.length; i++) {
    if (players[i]._id === id) {
      players.splice(i, 1);
    }
  }
};

const addPlayer = (player) => {
  currentClub.players.push(player);
};

const setPlayers = (players) => {
  currentClub.players = players;
};
const updatedPlayer = (player) => {
  let players = currentClub.players;
  for (let i = 0; i < players.length; i++) {
    if (players[i]._id === player._id) {
      players[i] = player;
      break;
    }
  }
  currentClub.players = players;
}
ClubStore.getCurrentClub = () => currentClub;

ClubStore.getError = () => {
  const err = error;
  error = null;
  return err;
};

ClubStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case LOGGED_IN:
      setCurrentClub(payload.club);
      ClubStore.__emitChange();
      break;
    case LOG_IN_ERROR:
      setError(payload.err);
      ClubStore.__emitChange();
      break;
    case REMOVED_PLAYER:
      removePlayer(payload.playerId);
      break;
    case PARSED_PLAYERS:
      setPlayers(payload.club.players);
      ClubStore.__emitChange();
      break;
    case ADDED_PLAYER:
      addPlayer(payload.player);
      ClubStore.__emitChange();
      break;
    case UPDATED_PLAYER:
      setCurrentClub(payload.club);
      ClubStore.__emitChange();
      break;
    default:
      break;
  }
};

export default ClubStore;
