import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";

module.exports = {
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

