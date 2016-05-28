import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";
import UserConstants from "../constants/userConstants";

module.exports = {
	fetchedCSRF: function(token){
		Dispatcher.dispatch({
			actionType: UserConstants.FETCHED_CSRF,
			token: token
		})
	},
	fetchedPlayers: function(players){
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYERS,
			players: players
		})
	},
	
	updatedPlayer: function(player){
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYER,
			player: player
		})
	},

	removedPlayer: function(player){
		Dispatcher.dispatch({
			actionType: PlayerConstants.REMOVED_PLAYER,
			player: player
		})
	}
}

