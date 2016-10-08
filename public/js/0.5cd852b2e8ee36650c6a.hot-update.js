webpackHotUpdate(0,{

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dispatcher = __webpack_require__(472);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _constants = __webpack_require__(476);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = {
	  log: function log(err) {
	    console.log(err);
	  },
	  deletedRRSession: function deletedRRSession(session) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.DELETED_SESSION,
	      session: session
	    });
	  },
	  sessionError: function sessionError(error) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.SESSION_ERROR,
	      error: error
	    });
	  },
	  removedPlayer: function removedPlayer(playerId) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.REMOVED_PLAYER,
	      playerId: playerId
	    });
	  },
	  fetchedRRSessions: function fetchedRRSessions(sessions) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.FETCHED_SESSIONS,
	      sessions: sessions
	    });
	  },
	  receivedCachedSession: function receivedCachedSession(session) {
	    if (session === "no data cached") {
	      return;
	    }
	    _dispatcher2.default.dispatch({
	      actionType: _constants.RECEIVED_CACHED_SESSION,
	      session: session
	    });
	  },
	  fetchedRRSession: function fetchedRRSession(session) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.FETCHED_SESSION,
	      session: session
	    });
	  },
	  loggedIn: function loggedIn(club) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.LOGGED_IN,
	      club: club
	    });
	  },
	  failedLogIn: function failedLogIn(err) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.LOG_IN_ERROR,
	      err: err
	    });
	  },
	  fetchedPlayers: function fetchedPlayers(club) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.FETCHED_PLAYERS,
	      club: club
	    });
	  },
	  fetchedAllClubs: function fetchedAllClubs(clubs) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.FETCHED_ALL_CLUBS,
	      clubs: clubs
	    });
	  },
	  generatedPDF: function generatedPDF(pdfs) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.GENERATED_PDF,
	      pdfs: pdfs
	    });
	  },
	  PDFError: function PDFError(error) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.PDF_ERROR,
	      error: error
	    });
	  },
	  pdfNotFound: function pdfNotFound() {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.GENERATED_PDF,
	      pdfs: null
	    });
	  },
	  fetchedClubRoundrobins: function fetchedClubRoundrobins(roundrobins) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.FETCHED_CLUB_ROUNDROBINS,
	      roundrobins: roundrobins
	    });
	  },
	  parsedPlayers: function parsedPlayers(club) {
	    _dispatcher2.default.dispatch({
	      actionType: _constants.PARSED_PLAYERS,
	      club: club
	    });
	  }
	};

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL3NlcnZlckFjdGlvbnMuanM/YWM0OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7QUFNZSxxQkFDVCxLQUNGO2FBQVEsSUFDVDtBQUNEO0FBSmEsK0NBSUksU0FDZjswQkFBVzs4QkFFVDtnQkFFSDtBQUhHO0FBSUo7QUFWYSx1Q0FVQSxPQUNYOzBCQUFXOzhCQUVUO2NBRUg7QUFIRztBQUlKO0FBaEJhLHlDQWdCQyxVQUNaOzBCQUFXOzhCQUVUO2lCQUVIO0FBSEc7QUFJSjtBQXRCYSxpREFzQkssVUFDaEI7MEJBQVc7OEJBRVQ7aUJBRUg7QUFIRztBQUlKO0FBNUJhLHlEQTRCUyxTQUNwQjtTQUFJLFlBQVksa0JBQ2Q7QUFDRDtBQUNEOzBCQUFXOzhCQUVUO2dCQUVIO0FBSEc7QUFJSjtBQXJDYSwrQ0FxQ0ksU0FDZjswQkFBVzs4QkFFVDtnQkFFSDtBQUhHO0FBSUo7QUEzQ2EsK0JBMkNKLE1BQ1A7MEJBQVc7OEJBRVQ7YUFFSDtBQUhHO0FBSUo7QUFqRGEscUNBaURELEtBQ1Y7MEJBQVc7OEJBRVQ7WUFFSDtBQUhHO0FBSUo7QUF2RGEsMkNBdURFLE1BQ2I7MEJBQVc7OEJBRVQ7YUFFSDtBQUhHO0FBSUo7QUE3RGEsNkNBNkRHLE9BQ2Q7MEJBQVc7OEJBRVQ7Y0FFSDtBQUhHO0FBSUo7QUFuRWEsdUNBbUVBLE1BQ1g7MEJBQVc7OEJBRVQ7YUFFSDtBQUhHO0FBSUo7QUF6RWEsK0JBeUVKLE9BQ1A7MEJBQVc7OEJBRVQ7Y0FFSDtBQUhHO0FBSUo7QUEvRWEsdUNBZ0ZYOzBCQUFXOzhCQUVUO2FBRUg7QUFIRztBQUlKO0FBckZhLDJEQXFGVSxhQUNyQjswQkFBVzs4QkFFVDtvQkFFSDtBQUhHO0FBSUo7QUEzRmEseUNBMkZDLE1BQ1o7MEJBQVc7OEJBRVQ7YUFFSDtBQUhHO0FBN0ZTO0FBQ2IsRyIsImZpbGUiOiIwLjVjZDg1MmIyZThlZTM2NjUwYzZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlci9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBERUxFVEVEX1NFU1NJT04sIEZFVENIRURfU0VTU0lPTlMsIEZFVENIRURfU0VTU0lPTixcbiAgTE9HR0VEX0lOLCBSRU1PVkVEX1BMQVlFUiwgRkVUQ0hFRF9QTEFZRVJTLFxuICBMT0dfSU5fRVJST1IsIEZFVENIRURfQUxMX0NMVUJTLCBHRU5FUkFURURfUERGLFxuICBGRVRDSEVEX0NMVUJfUk9VTkRST0JJTlMsIFJFQ0VJVkVEX0NBQ0hFRF9TRVNTSU9OLFxuICBTRVNTSU9OX0VSUk9SLCBQREZfRVJST1IsIFBBUlNFRF9QTEFZRVJTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2coZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSxcbiAgZGVsZXRlZFJSU2Vzc2lvbihzZXNzaW9uKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBhY3Rpb25UeXBlOiBERUxFVEVEX1NFU1NJT04sXG4gICAgICBzZXNzaW9uXG4gICAgfSk7XG4gIH0sXG4gIHNlc3Npb25FcnJvcihlcnJvcikge1xuICAgIERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgYWN0aW9uVHlwZTogU0VTU0lPTl9FUlJPUixcbiAgICAgIGVycm9yXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZWRQbGF5ZXIocGxheWVySWQpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IFJFTU9WRURfUExBWUVSLFxuICAgICAgcGxheWVySWRcbiAgICB9KTtcbiAgfSxcbiAgZmV0Y2hlZFJSU2Vzc2lvbnMoc2Vzc2lvbnMpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IEZFVENIRURfU0VTU0lPTlMsXG4gICAgICBzZXNzaW9uc1xuICAgIH0pO1xuICB9LFxuICByZWNlaXZlZENhY2hlZFNlc3Npb24oc2Vzc2lvbikge1xuICAgIGlmIChzZXNzaW9uID09PSBcIm5vIGRhdGEgY2FjaGVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBhY3Rpb25UeXBlOiBSRUNFSVZFRF9DQUNIRURfU0VTU0lPTixcbiAgICAgIHNlc3Npb25cbiAgICB9KTtcbiAgfSxcbiAgZmV0Y2hlZFJSU2Vzc2lvbihzZXNzaW9uKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBhY3Rpb25UeXBlOiBGRVRDSEVEX1NFU1NJT04sXG4gICAgICBzZXNzaW9uXG4gICAgfSk7XG4gIH0sXG4gIGxvZ2dlZEluKGNsdWIpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IExPR0dFRF9JTixcbiAgICAgIGNsdWJcbiAgICB9KTtcbiAgfSxcbiAgZmFpbGVkTG9nSW4oZXJyKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBhY3Rpb25UeXBlOiBMT0dfSU5fRVJST1IsXG4gICAgICBlcnJcbiAgICB9KTtcbiAgfSxcbiAgZmV0Y2hlZFBsYXllcnMoY2x1Yikge1xuICAgIERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgYWN0aW9uVHlwZTogRkVUQ0hFRF9QTEFZRVJTLFxuICAgICAgY2x1YlxuICAgIH0pO1xuICB9LFxuICBmZXRjaGVkQWxsQ2x1YnMoY2x1YnMpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IEZFVENIRURfQUxMX0NMVUJTLFxuICAgICAgY2x1YnNcbiAgICB9KTtcbiAgfSxcbiAgZ2VuZXJhdGVkUERGKHBkZnMpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IEdFTkVSQVRFRF9QREYsXG4gICAgICBwZGZzXG4gICAgfSk7XG4gIH0sXG4gIFBERkVycm9yKGVycm9yKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBhY3Rpb25UeXBlOiBQREZfRVJST1IsXG4gICAgICBlcnJvclxuICAgIH0pO1xuICB9LFxuICBwZGZOb3RGb3VuZCgpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IEdFTkVSQVRFRF9QREYsXG4gICAgICBwZGZzOiBudWxsXG4gICAgfSk7XG4gIH0sXG4gIGZldGNoZWRDbHViUm91bmRyb2JpbnMocm91bmRyb2JpbnMpIHtcbiAgICBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IEZFVENIRURfQ0xVQl9ST1VORFJPQklOUyxcbiAgICAgIHJvdW5kcm9iaW5zXG4gICAgfSk7XG4gIH0sXG4gIHBhcnNlZFBsYXllcnMoY2x1Yikge1xuICAgIERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgYWN0aW9uVHlwZTogUEFSU0VEX1BMQVlFUlMsXG4gICAgICBjbHViXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2FjdGlvbnMvc2VydmVyQWN0aW9ucy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=