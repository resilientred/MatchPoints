webpackHotUpdate(0,{

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uploadFile = exports.fetchClubRoundrobins = exports.fetchAllPlayersFromClub = exports.generatePDF = exports.fetchAllClubs = exports.deletePlayer = exports.updatePlayer = exports.addPlayer = exports.fetchPlayer = exports.fetchPlayers = undefined;
	
	var _apiUtil = __webpack_require__(470);
	
	var fetchPlayers = function fetchPlayers(clubId) {
	  (0, _apiUtil.apiService)({
	    url: "/api/clubs/" + clubId + "/players",
	    success: "fetchedPlayers"
	  });
	};
	
	var fetchPlayer = function fetchPlayer(id) {
	  (0, _apiUtil.apiService)({
	    url: "/api/players/" + id,
	    success: "fetchedPlayer"
	  });
	};
	var addPlayer = function addPlayer(clubId, player) {
	  (0, _apiUtil.apiCSRFService)({
	    url: "/api/clubs/" + clubId + "/players/new",
	    method: "POST",
	    data: { player: player },
	    success: "loggedIn"
	  });
	};
	var updatePlayer = function updatePlayer(clubId, id, player) {
	  (0, _apiUtil.apiCSRFService)({
	    url: "/api/clubs/" + clubId + "/players/" + id,
	    method: "PATCH",
	    data: { player: player },
	    success: "updatedClub"
	  });
	};
	var deletePlayer = function deletePlayer(clubId, id) {
	  (0, _apiUtil.apiCSRFService)({
	    url: "/api/clubs/" + clubId + "/players/" + id,
	    method: "DELETE",
	    success: "removedPlayer"
	  });
	};
	
	var fetchAllClubs = function fetchAllClubs() {
	  (0, _apiUtil.apiService)({
	    url: "/api/clubs/all",
	    success: "fetchedAllClubs"
	  });
	};
	
	var uploadFile = function uploadFile(data) {
	  debugger;
	  (0, _apiUtil.apiCSRFService)({
	    url: "/api/upload/players",
	    method: "POST",
	    data: data,
	    success: "parsedPlayers"
	  });
	};
	var generatePDF = function generatePDF(addedPlayers, schemas, club, date) {
	  (0, _apiUtil.apiCSRFService)({
	    url: "/api/pdfs/" + club._id,
	    method: "POST",
	    data: {
	      session: { addedPlayers: addedPlayers, schemas: schemas, club: club, date: date }
	    },
	    success: "generatedPDF",
	    error: "PDFError"
	  });
	};
	
	var fetchAllPlayersFromClub = function fetchAllPlayersFromClub(clubId) {
	  (0, _apiUtil.apiService)({
	    url: "/api/clubs/" + clubId + "/players",
	    success: "fetchedPlayers"
	  });
	};
	
	var fetchClubRoundrobins = function fetchClubRoundrobins(clubId) {
	  (0, _apiUtil.apiService)({
	    url: "/api/clubs/" + clubId + "/roundrobins",
	    success: "fetchedClubRoundrobins"
	  });
	};
	
	exports.fetchPlayers = fetchPlayers;
	exports.fetchPlayer = fetchPlayer;
	exports.addPlayer = addPlayer;
	exports.updatePlayer = updatePlayer;
	exports.deletePlayer = deletePlayer;
	exports.fetchAllClubs = fetchAllClubs;
	exports.generatePDF = generatePDF;
	exports.fetchAllPlayersFromClub = fetchAllPlayersFromClub;
	exports.fetchClubRoundrobins = fetchClubRoundrobins;
	exports.uploadFile = uploadFile;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL2NsaWVudEFjdGlvbnMuanM/NzY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxLQUFNLGVBQWUsc0JBQUMsUUFDcEI7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLGNBQWMscUJBQUMsSUFDbkI7OzRCQUVFO2NBRUg7QUFIRztBQUZKO0FBTUEsS0FBTSxZQUFZLG1CQUFDLFFBQVEsUUFDekI7OzBCQUNxQixTQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFBSSxRQUNoQzs7MEJBQ3FCLHVCQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFDNUI7OzBCQUNxQix1QkFDbkI7YUFDQTtjQUVIO0FBSkc7QUFGSjs7QUFRQSxLQUFNLGdCQUFnQix5QkFDcEI7O1VBRUU7Y0FFSDtBQUhHO0FBRko7O0FBT0EsS0FBTSxhQUFhLG9CQUFDLE1BQ2xCO0FBQ0E7O1VBRUU7YUFDQTtXQUNBO2NBRUg7QUFMRztBQUhKO0FBU0EsS0FBTSxjQUFjLHFCQUFDLGNBQWMsU0FBUyxNQUFNLE1BQ2hEOzt5QkFDb0IsS0FDbEI7YUFDQTs7Z0JBQ1csRUFBRSxjQUFGLGNBQWdCLFNBQWhCLFNBQXlCLE1BQXpCLE1BQStCLE1BRTFDO0FBRkU7Y0FHRjtZQUVIO0FBUkc7QUFGSjs7QUFZQSxLQUFNLDBCQUEwQixpQ0FBQyxRQUMvQjs7MEJBQ3FCLFNBQ25CO2NBRUg7QUFIRztBQUZKOztBQU9BLEtBQU0sdUJBQXVCLDhCQUFDLFFBQzVCOzswQkFDcUIsU0FDbkI7Y0FFSDtBQUhHO0FBRko7O1NBT1M7U0FBYztTQUFhO1NBQ2xDO1NBQWM7U0FBYztTQUM1QjtTQUFhO1NBQXlCO1NBQ3RDLHdCIiwiZmlsZSI6IjAuMTVkNjg0ZTMwMTg3ODhjZmUxNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVNlcnZpY2UsIGFwaUNTUkZTZXJ2aWNlIH0gZnJvbSBcIi4uL3V0aWxzL2FwaVV0aWxcIjtcblxuY29uc3QgZmV0Y2hQbGF5ZXJzID0gKGNsdWJJZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9wbGF5ZXJzYCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRQbGF5ZXJzXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaFBsYXllciA9IChpZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL3BsYXllcnMvJHtpZH1gLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZFBsYXllclwiXG4gIH0pO1xufTtcbmNvbnN0IGFkZFBsYXllciA9IChjbHViSWQsIHBsYXllcikgPT4ge1xuICBhcGlDU1JGU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVycy9uZXdgLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YTogeyBwbGF5ZXIgfSxcbiAgICBzdWNjZXNzOiBcImxvZ2dlZEluXCJcbiAgfSk7XG59O1xuY29uc3QgdXBkYXRlUGxheWVyID0gKGNsdWJJZCwgaWQsIHBsYXllcikgPT4ge1xuICBhcGlDU1JGU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVycy8ke2lkfWAsXG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgZGF0YTogeyBwbGF5ZXIgfSxcbiAgICBzdWNjZXNzOiBcInVwZGF0ZWRDbHViXCJcbiAgfSk7XG59O1xuY29uc3QgZGVsZXRlUGxheWVyID0gKGNsdWJJZCwgaWQpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvJHtpZH1gLFxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBzdWNjZXNzOiBcInJlbW92ZWRQbGF5ZXJcIlxuICB9KTtcbn07XG5cbmNvbnN0IGZldGNoQWxsQ2x1YnMgPSAoKSA9PiB7XG4gIGFwaVNlcnZpY2Uoe1xuICAgIHVybDogXCIvYXBpL2NsdWJzL2FsbFwiLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZEFsbENsdWJzXCJcbiAgfSk7XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gKGRhdGEpID0+IHtcbiAgZGVidWdnZXI7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS91cGxvYWQvcGxheWVyc1wiLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YSxcbiAgICBzdWNjZXNzOiBcInBhcnNlZFBsYXllcnNcIlxuICB9KTtcbn07XG5jb25zdCBnZW5lcmF0ZVBERiA9IChhZGRlZFBsYXllcnMsIHNjaGVtYXMsIGNsdWIsIGRhdGUpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvcGRmcy8ke2NsdWIuX2lkfWAsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBkYXRhOiB7XG4gICAgICBzZXNzaW9uOiB7IGFkZGVkUGxheWVycywgc2NoZW1hcywgY2x1YiwgZGF0ZSB9XG4gICAgfSxcbiAgICBzdWNjZXNzOiBcImdlbmVyYXRlZFBERlwiLFxuICAgIGVycm9yOiBcIlBERkVycm9yXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaEFsbFBsYXllcnNGcm9tQ2x1YiA9IChjbHViSWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVyc2AsXG4gICAgc3VjY2VzczogXCJmZXRjaGVkUGxheWVyc1wiXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hDbHViUm91bmRyb2JpbnMgPSAoY2x1YklkKSA9PiB7XG4gIGFwaVNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3JvdW5kcm9iaW5zYCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRDbHViUm91bmRyb2JpbnNcIlxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZldGNoUGxheWVycywgZmV0Y2hQbGF5ZXIsIGFkZFBsYXllcixcbiAgdXBkYXRlUGxheWVyLCBkZWxldGVQbGF5ZXIsIGZldGNoQWxsQ2x1YnMsXG4gIGdlbmVyYXRlUERGLCBmZXRjaEFsbFBsYXllcnNGcm9tQ2x1YiwgZmV0Y2hDbHViUm91bmRyb2JpbnMsXG4gIHVwbG9hZEZpbGUgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvYWN0aW9ucy9jbGllbnRBY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==