import { Store } from "flux/utils";
import Dispatcher from "../dispatcher/dispatcher";
import { FETCHED_PLAYERS, LOGGED_IN } from "../constants/constants";

const players = {};
let currentClubPlayers = {};
const currentClub = null;
const resetPlayers = (club) => {
  const clubPlayers = club.players;
  players[club._id] = {};
  if (clubPlayers) {
    clubPlayers.forEach(player => (players[club._id][player._id] = player));
  }
};

const PlayerStore = new Store(Dispatcher);

PlayerStore.setClub = (clubId) => {
  currentClubPlayers = players[clubId];
};

PlayerStore.allPlayersInClub = () => currentClubPlayers;

PlayerStore.containClub = id => !!players[id];

PlayerStore.currentClub = () => currentClub;

PlayerStore.find = id => currentClubPlayers[id];

PlayerStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_PLAYERS:
      resetPlayers(payload.club);
      PlayerStore.__emitChange();
      break;
    case LOGGED_IN:
      resetPlayers(payload.club);
      break;
    default:
      break;
  }
};

export default PlayerStore;
