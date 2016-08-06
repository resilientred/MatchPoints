import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER,
				 LOG_IN_ERROR } from "../constants/constants"


export default {
	deletedRRSession: (sessionId) => {
		Dispatcher.dispatch({
			actionType: DELETED_SESSION,
			session: sessionId
		})
	}, 
	fetchedRRSessions: (sessions) => {
		Dispatcher.dispatch({
			actionType: FETCHED_SESSIONS,
			sessions: sessions
		})
	}, 
	fetchedRRSession: (session) => {
		Dispatcher.dispatch({
			actionType: FETCHED_SESSION,
			session: session
		})
	}, 
	loggedIn: (club) => {
		Dispatcher.dispatch({
			actionType: LOGGED_IN,
			club: club
		})
	}, 
	failedLogIn: (err) => {
		console.log(err)
		Dispatcher.dispatch({
			actionType: LOG_IN_ERROR,
			err: err
		})
	}, 
	fetchedPlayers: (players) => {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYERS,
			players: players
		})
	}, 
	fetchedPlayer: (player) => {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYER,
			players: player
		})
	}, 
	updatedPlayer: (player) => {
		Dispatcher.dispatch({
			actionType: FETCHED_PLAYER,
			player: player
		})
	}, 
	removedPlayer: (player) => {
		Dispatcher.dispatch({
			actionType: REMOVED_PLAYER,
			player: player
		})
	}
}

