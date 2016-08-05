import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import { FETCHED_PLAYERS, FETCHED_PLAYER, REMOVED_PLAYER }from '../constants/constants';
let _players = {};
const _resetPlayers = (players) => {
  players.forEach(player=> (_players[player._id] = player));
}; 

const _setPlayer = (player) => {
  _players[player._id] = player;
};

const _removePlayer = (player) => {
  delete _players[player._id];
};
const PlayerStore = new Store(Dispatcher);
PlayerStore.all = () => {
  return _players;
},

PlayerStore.find = (id) => {
  return _players[id];
},

PlayerStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case FETCHED_PLAYERS:
      _resetPlayers(payload.players);
      PlayerStore.__emitChange();
      break;
    case FETCHED_PLAYER:
      _setPlayer(payload.player);
      PlayerStore.__emitChange();
      break;
    case REMOVED_PLAYER:
      _removePlayer(payload.player);
      PlayerStore.__emitChange();
      break;
  }
}
export default PlayerStore;



  