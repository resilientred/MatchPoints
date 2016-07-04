import Dispatcher from "../dispatcher/dispatcher";
import PlayerConstants from "../constants/playerConstants";
import ClubConstants from "../constants/clubConstants";
import SessionConstants from "../constants/rrSessionConstants";
module.exports = {
	fetchedCSRF (token){
		Dispatcher.dispatch({
			actionType: ClubConstants.FETCHED_CSRF,
			token: token
		})
	},
	deletedRRSession (sessionId){
		Dispatcher.dispatch({
			actionType: SessionConstants.DELETED_SESSION,
			session: sessionId
		})
	},
	fetchedRRSessions(sessions){
		Dispatcher.dispatch({
			actionType: SessionConstants.FETCHED_SESSIONS,
			sessions: sessions
		})
	},
	fetchedRRSession(session){
		debugger;
		Dispatcher.dispatch({
			actionType: SessionConstants.FETCHED_SESSION,
			session: session
		})
	},
	loggedIn(club) {
		Dispatcher.dispatch({
			actionType: ClubConstants.LOGGED_IN,
			club: club
		})
	},
	fetchedPlayers(players) {
		Dispatcher.dispatch({
			actionType: PlayerConstants.FETCHED_PLAYERS,
			players: players
		})
	},
	
	updatedPlayer(player) {
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

