import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
				 LOGGED_IN, FETCHED_PLAYER, FETCHED_PLAYERS, REMOVED_PLAYER,
				 LOG_IN_ERROR, FETCHED_ALL_CLUBS, GENERATED_PDF, 
				 FETCHED_CLUB_ROUNDROBINS, RECEIVED_CACHED_SESSION, 
				 SESSION_ERROR, PDF_ERROR, PARSED_FILE} from "../constants/constants"


export const log = (err) => {
	console.log(err);
};

export const deletedRRSession = (sessionId) => {
	Dispatcher.dispatch({
		actionType: DELETED_SESSION,
		session: sessionId
	})
};

export const sessionError = (error) => {
	Dispatcher.dispatch({
		actionType: SESSION_ERROR,
		error: error
	})
};

export const removedPlayer = (id) = >{
	Dispatcher.dispatch({
		actionType: REMOVED_PLAYER,
		playerId: id
	})
};

export const fetchedRRSessions = (sessions) => {
	Dispatcher.dispatch({
		actionType: FETCHED_SESSIONS,
		sessions: sessions
	})
};

export const receivedCachedSession = (session) => {
	if (session === "no data cached"){
		return;
	}
	Dispatcher.dispatch({
		actionType: RECEIVED_CACHED_SESSION,
		session: session
	})
};

export const fetchedRRSession = (session) => {
	Dispatcher.dispatch({
		actionType: FETCHED_SESSION,
		session: session
	})
};

export const loggedIn = (club) => {
	Dispatcher.dispatch({
		actionType: LOGGED_IN,
		club: club
	})
};

export const failedLogIn = (err) => {
	Dispatcher.dispatch({
		actionType: LOG_IN_ERROR,
		err: err
	})
};
export const fetchedPlayers = (club) => {
	Dispatcher.dispatch({
		actionType: FETCHED_PLAYERS,
		club: club
	})
};
export const fetchedAllClubs = (clubs) =>  {
	Dispatcher.dispatch({
		actionType: FETCHED_ALL_CLUBS,
		clubs: clubs
	})
};
export const generatedPDF = (pdfs) =>  {
	Dispatcher.dispatch({
		actionType: GENERATED_PDF,
		pdfs: pdfs
	})
};
export const PDFError = (error) =>  {
	Dispatcher.dispatch({
		actionType: PDF_ERROR,
		error: error
	})
};
export const pdfNotFound = (err) => {
	console.log(err);
	Dispatcher.dispatch({
		actionType: GENERATED_PDF,
		pdfs: null
	})
};
export const fetchedClubRoundrobins = (roundrobins) => {
	Dispatcher.dispatch({
		actionType: FETCHED_CLUB_ROUNDROBINS,
		roundrobins: roundrobins
	})
};
export const parsedFile = (players) => {
	Dispatcher.dispatch({
		actionType: PARSED_FILE,
		players: players
	})
};


