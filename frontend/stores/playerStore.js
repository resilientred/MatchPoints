import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import PlayerConstants from '../constants/playerConstants';
let _players = {};

let _resetPlayers = (players) => {
	players.forEach(player=>(_players[id] = player));
}; 

let _setPlayer = (player) => {
	_players[player];
};

let _removePlayer = (player) => {
	delete _players[player.id];
};

export default class PlayerStore extends Store {	
	all(){
		return _players;
	}

	find(id){
		return _players[id];
	}

	__onDispatch(payload){
		switch(payload.actionType){
			case PlayerConstants.FETCHED_PLAYERS:
				debugger;
				_resetPlayers(payload.players);
				PlayerStore.__emitChange();
				break;
			case PlayerConstants.FETCHED_PLAYER:
				_setPlayer(payload.player);
				PlayerStore.__emitChange();
				break;
			case PlayerConstants.REMOVED_PLAYER:
				_removePlayer(payload.player);
				PlayerStore.__emitChange();
				break;
		}
	}
}

	