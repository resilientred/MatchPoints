import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER,
				 LOG_IN_ERROR, FETCHED_ALL_CLUBS, GENERATED_PDF, 
				 FETCHED_CLUB_ROUNDROBINS, RECEIVED_CACHED_SESSION, UPDATED_CLUB } from "../constants/constants"


module.exports = {
	log(err){
		console.log(err);
	},
	deletedRRSession(sessionId){
		Dispatcher.dispatch({
			actionType: DELETED_SESSION,
			session: sessionId
		})
	}, 
	updatedClub(club){
		Dispatcher.dispatch({
			actionType: UPDATED_CLUB,
			club: club
		})
	},
	fetchedRRSessions(sessions){
		Dispatcher.dispatch({
			actionType: FETCHED_SESSIONS,
			sessions: sessions
		})
	}, 
	receivedCachedSession(session){
		if (session === "no data cached"){
			return;
		}
		Dispatcher.dispatch({
			actionType: RECEIVED_CACHED_SESSION,
			session: session
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
	},
	generatedPDF(pdfs) {
		Dispatcher.dispatch({
			actionType: GENERATED_PDF,
			pdfs: pdfs
		})
	},
	PDFError(error) {
		Dispatcher.dispatch({
			actiontype: PDF_ERROR,
			error: error
		})
	},
	pdfNotFound(err){
		console.log(err);
		Dispatcher.dispatch({
			actionType: GENERATED_PDF,
			pdfs: null
		})
	},
	fetchedClubRoundrobins(roundrobins){
		Dispatcher.dispatch({
			actionType: FETCHED_CLUB_ROUNDROBINS,
			roundrobins: roundrobins
		})
	}
}

