import ApiUtil from "../utils/apiUtil";
import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";

export default {
	fetchedUsers(players){
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYERS,
			players: players
		})
	},
	
	updatedUser(player){
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYER,
			player: player
		})
	},

	removedUser(player){
		Dispatcher.dispatch({
			actionType: PlayerConstants.REMOVED_PLAYER,
			player: player
		})
	}
}

