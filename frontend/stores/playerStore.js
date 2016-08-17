import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import { FETCHED_PLAYERS, FETCHED_PLAYER, REMOVED_PLAYER, LOGGED_IN }from '../constants/constants';

let _currentClubPlayers = {};
let _players = {};
let _currentClub = null;
const _resetPlayers = (club) => {
  const players = club.players;
  _players[club._id] = {};
  if (players){
    players.forEach(player => (_players[club._id][player._id] = player));
  }  
}; 

const PlayerStore = new Store(Dispatcher);

PlayerStore.setClub = (clubId) => {
  _currentClubPlayers = _players[clubId];
};
PlayerStore.allPlayersInClub = () => {
  return _currentClubPlayers;
};
PlayerStore.containClub = (id) => {
  return !!_players[id];
}
PlayerStore.currentClub = () => {
  return _currentClub;
}
PlayerStore.find = (id) => {
  return _currentClubPlayers[id];
};

PlayerStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case FETCHED_PLAYERS:
      _resetPlayers(payload.club);
      PlayerStore.__emitChange();
      break;
    case LOGGED_IN:
      _resetPlayers(payload.club);
      break;
  }
}
export default PlayerStore;



  