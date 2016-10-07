import { Store } from "flux/utils";
import Dispatcher from "../dispatcher/dispatcher";
import { FETCHED_PLAYERS, LOGGED_IN } from "../constants/constants";

const _players = {};
let _currentClubPlayers = {};
const _currentClub = null;
const _resetPlayers = (club) => {
  const players = club.players;
  _players[club._id] = {};
  if (players) {
    players.forEach(player => (_players[club._id][player._id] = player));
  }
};

const PlayerStore = new Store(Dispatcher);

PlayerStore.setClub = (clubId) => {
  _currentClubPlayers = _players[clubId];
};

PlayerStore.allPlayersInClub = () => _currentClubPlayers;

PlayerStore.containClub = id => !!_players[id];

PlayerStore.currentClub = () => _currentClub;

PlayerStore.find = id => _currentClubPlayers[id];

PlayerStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_PLAYERS:
      _resetPlayers(payload.club);
      PlayerStore.__emitChange();
      break;
    case LOGGED_IN:
      _resetPlayers(payload.club);
      break;
    default:
      break;
  }
};

export default PlayerStore;
