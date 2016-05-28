import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";
import UserConstants from "../constants/userConstants";

module.exports = {
	fetchedCSRF (token){
		Dispatcher.dispatch({
			actionType: UserConstants.FETCHED_CSRF,
			token: token
		})
	},
	loggedIn (user) {
		Dispatcher.dispatch({
			actionType: UserConstants.LOGGED_IN,
			user: user
		})
	},
	fetchedPlayers (players) {
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYERS,
			players: players
		})
	},
	
	updatedPlayer (player) {
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYER,
			player: player
		})
	},

	removedPlayer (player) {
		Dispatcher.dispatch({
			actionType: PlayerConstants.REMOVED_PLAYER,
			player: player
		})
	}
}

