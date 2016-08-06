import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER,
				 LOG_IN_ERROR } from "../constants/constants"


export const deletedRRSession =  (sessionId) => {
	Dispatcher.dispatch({
		actionType: DELETED_SESSION,
		session: sessionId
	})
}
export const fetchedRRSessions = (sessions) => {
	Dispatcher.dispatch({
		actionType: FETCHED_SESSIONS,
		sessions: sessions
	})
}
export const fetchedRRSession = (session) => {
	Dispatcher.dispatch({
		actionType: FETCHED_SESSION,
		session: session
	})
}
export const loggedIn = (club) => {
	Dispatcher.dispatch({
		actionType: LOGGED_IN,
		club: club
	})
}
export const failedLogIn = (err) => {
	Dispatcher.dispatch({
		actionType: LOG_IN_ERROR,
		err: err
	})
}
export const fetchedPlayers = (players) => {
	Dispatcher.dispatch({
		actionType: FETCHED_PLAYERS,
		players: players
	})
}
export const fetchedPlayer = (player) => {
	Dispatcher.dispatch({
		actionType: FETCHED_PLAYER,
		players: player
	})
}
	
export const updatedPlayer = (player) => {
	Dispatcher.dispatch({
		actionType: FETCHED_PLAYER,
		player: player
	})
}

export const removedPlayer =  (player) => {
	Dispatcher.dispatch({
		actionType: REMOVED_PLAYER,
		player: player
	})
}


