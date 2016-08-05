import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER } from "../constants/constants"

module.exports = {
	deletedRRSession (sessionId){
		Dispatcher.dispatch({
			actionType: DELETED_SESSION,
			session: sessionId
		})
	},
	fetchedRRSessions(sessions){
		Dispatcher.dispatch({
			actionType: FETCHED_SESSIONS,
			sessions: sessions
		})
	},
	fetchedRRSession(session){
		Dispatcher.dispatch({
			actionType: FETCHED_SESSION,
			session: session
		})
	},
	loggedIn(club) {
		Dispatcher.dispatch({
			actionType: LOGGED_IN,
			club: club
		})
	},
	fetchedPlayers(players) {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYERS,
			players: players
		})
	},
	fetchedPlayer(player) {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYER,
			players: player
		})
	},
	
	updatedPlayer(player) {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYER,
			player: player
		})
	},

	removedPlayer (player) {
		Dispatcher.dispatch({
			actionType: REMOVED_PLAYER,
			player: player
		})
	}
}

