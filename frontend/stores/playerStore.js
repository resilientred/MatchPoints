import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import { FETCHED_PLAYERS, FETCHED_PLAYER, REMOVED_PLAYER, LOGGED_IN }from '../constants/constants';

let _currentClubPlayers = {};
let _players = {};

const _resetPlayers = (club) => {
  const players = club.players;
  _players[club.id] = {};
  if (players){
    players.forEach(player => (_players[club.id][player._id] = player));
  }  
}; 

// const _setClub = (club) => {
//   _players[club.id] = player;
// };

// const _removePlayer = (player) => {
//   delete _players[player._id];
// };
const PlayerStore = new Store(Dispatcher);

PlayerStore.setClub = (clubId) => {
  _currentClubPlayers = Object.assign({}, _players[clubId]);
};
PlayerStore.allPlayerInClub = () => {
  return _currentClubPlayers;
};
PlayerStore.contain = (id) => {
  return !!_players[id];
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



  