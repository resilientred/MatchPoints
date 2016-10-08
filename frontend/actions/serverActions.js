import Dispatcher from "../dispatcher/dispatcher";
import { DELETED_SESSION, FETCHED_SESSIONS, FETCHED_SESSION,
  LOGGED_IN, REMOVED_PLAYER, FETCHED_PLAYERS,
  LOG_IN_ERROR, FETCHED_ALL_CLUBS, GENERATED_PDF,
  FETCHED_CLUB_ROUNDROBINS, RECEIVED_CACHED_SESSION,
  SESSION_ERROR, PDF_ERROR, PARSED_PLAYERS } from "../constants/constants";

export default {
  log(err) {
    console.log(err);
  },
  deletedRRSession(session) {
    Dispatcher.dispatch({
      actionType: DELETED_SESSION,
      session
    });
  },
  sessionError(error) {
    Dispatcher.dispatch({
      actionType: SESSION_ERROR,
      error
    });
  },
  removedPlayer(playerId) {
    Dispatcher.dispatch({
      actionType: REMOVED_PLAYER,
      playerId
    });
  },
  fetchedRRSessions(sessions) {
    Dispatcher.dispatch({
      actionType: FETCHED_SESSIONS,
      sessions
    });
  },
  receivedCachedSession(session) {
    if (session === "no data cached") {
      return;
    }
    Dispatcher.dispatch({
      actionType: RECEIVED_CACHED_SESSION,
      session
    });
  },
  fetchedRRSession(session) {
    Dispatcher.dispatch({
      actionType: FETCHED_SESSION,
      session
    });
  },
  loggedIn(club) {
    Dispatcher.dispatch({
      actionType: LOGGED_IN,
      club
    });
  },
  failedLogIn(err) {
    Dispatcher.dispatch({
      actionType: LOG_IN_ERROR,
      err
    });
  },
  fetchedPlayers(club) {
    Dispatcher.dispatch({
      actionType: FETCHED_PLAYERS,
      club
    });
  },
  fetchedAllClubs(clubs) {
    Dispatcher.dispatch({
      actionType: FETCHED_ALL_CLUBS,
      clubs
    });
  },
  generatedPDF(pdfs) {
    Dispatcher.dispatch({
      actionType: GENERATED_PDF,
      pdfs
    });
  },
  PDFError(error) {
    Dispatcher.dispatch({
      actionType: PDF_ERROR,
      error
    });
  },
  pdfNotFound() {
    Dispatcher.dispatch({
      actionType: GENERATED_PDF,
      pdfs: null
    });
  },
  fetchedClubRoundrobins(roundrobins) {
    Dispatcher.dispatch({
      actionType: FETCHED_CLUB_ROUNDROBINS,
      roundrobins
    });
  },
  parsedPlayers(club) {
    Dispatcher.dispatch({
      actionType: PARSED_PLAYERS,
      club
    });
  }
};
