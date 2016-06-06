import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";
import UserConstants from "../constants/userConstants";
import SessionConstants from "../constants/sessionConstants";
module.exports = {
	fetchedCSRF (token){
		Dispatcher.dispatch({
			actionType: UserConstants.FETCHED_CSRF,
			token: token
		})
	},
	fetchedRRSessions (sessions){
		Dispatcher.dispatch({
			actionType: SessionConstants.FETCHED_SESSIONS,
			sessions: sessions
		})
	},
	fetchedRRSession(session){
		Dispatcher.disaptch({
			actionType: SessionConstants.FETCHED_SESSION,
			session: session
		})
	}
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

