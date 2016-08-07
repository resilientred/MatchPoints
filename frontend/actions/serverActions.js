import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER,
				 LOG_IN_ERROR, FETCHED_ALL_CLUBS } from "../constants/constants"


module.exports = {
	deletedRRSession(sessionId){
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
	loggedIn(club){
		Dispatcher.dispatch({
			actionType: LOGGED_IN,
			club: club
		})
	}, 
	failedLogIn(err){
		Dispatcher.dispatch({
			actionType: LOG_IN_ERROR,
			err: err
		})
	}, 
	fetchedPlayers(club){
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYERS,
			club: club
		})
	},
	fetchedAllClubs(clubs) {
		Dispatcher.dispatch({
			actionType: FETCHED_ALL_CLUBS,
			clubs: clubs
		})
	}
}

