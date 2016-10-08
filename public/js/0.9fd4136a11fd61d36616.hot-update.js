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
	    processData: false,
	    contentType: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL2NsaWVudEFjdGlvbnMuanM/NzY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxLQUFNLGVBQWUsc0JBQUMsUUFDcEI7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLGNBQWMscUJBQUMsSUFDbkI7OzRCQUVFO2NBRUg7QUFIRztBQUZKO0FBTUEsS0FBTSxZQUFZLG1CQUFDLFFBQVEsUUFDekI7OzBCQUNxQixTQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFBSSxRQUNoQzs7MEJBQ3FCLHVCQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFDNUI7OzBCQUNxQix1QkFDbkI7YUFDQTtjQUVIO0FBSkc7QUFGSjs7QUFRQSxLQUFNLGdCQUFnQix5QkFDcEI7O1VBRUU7Y0FFSDtBQUhHO0FBRko7O0FBT0EsS0FBTSxhQUFhLG9CQUFDLE1BQ2xCO0FBQ0E7O1VBRUU7YUFDQTtXQUNBO2tCQUNBO2tCQUNBO2NBRUg7QUFQRztBQUhKO0FBV0EsS0FBTSxjQUFjLHFCQUFDLGNBQWMsU0FBUyxNQUFNLE1BQ2hEOzt5QkFDb0IsS0FDbEI7YUFDQTs7Z0JBQ1csRUFBRSxjQUFGLGNBQWdCLFNBQWhCLFNBQXlCLE1BQXpCLE1BQStCLE1BRTFDO0FBRkU7Y0FHRjtZQUVIO0FBUkc7QUFGSjs7QUFZQSxLQUFNLDBCQUEwQixpQ0FBQyxRQUMvQjs7MEJBQ3FCLFNBQ25CO2NBRUg7QUFIRztBQUZKOztBQU9BLEtBQU0sdUJBQXVCLDhCQUFDLFFBQzVCOzswQkFDcUIsU0FDbkI7Y0FFSDtBQUhHO0FBRko7O1NBT1M7U0FBYztTQUFhO1NBQ2xDO1NBQWM7U0FBYztTQUM1QjtTQUFhO1NBQXlCO1NBQ3RDLHdCIiwiZmlsZSI6IjAuOWZkNDEzNmExMWZkNjFkMzY2MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVNlcnZpY2UsIGFwaUNTUkZTZXJ2aWNlIH0gZnJvbSBcIi4uL3V0aWxzL2FwaVV0aWxcIjtcblxuY29uc3QgZmV0Y2hQbGF5ZXJzID0gKGNsdWJJZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9wbGF5ZXJzYCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRQbGF5ZXJzXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaFBsYXllciA9IChpZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL3BsYXllcnMvJHtpZH1gLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZFBsYXllclwiXG4gIH0pO1xufTtcbmNvbnN0IGFkZFBsYXllciA9IChjbHViSWQsIHBsYXllcikgPT4ge1xuICBhcGlDU1JGU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVycy9uZXdgLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YTogeyBwbGF5ZXIgfSxcbiAgICBzdWNjZXNzOiBcImxvZ2dlZEluXCJcbiAgfSk7XG59O1xuY29uc3QgdXBkYXRlUGxheWVyID0gKGNsdWJJZCwgaWQsIHBsYXllcikgPT4ge1xuICBhcGlDU1JGU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVycy8ke2lkfWAsXG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgZGF0YTogeyBwbGF5ZXIgfSxcbiAgICBzdWNjZXNzOiBcInVwZGF0ZWRDbHViXCJcbiAgfSk7XG59O1xuY29uc3QgZGVsZXRlUGxheWVyID0gKGNsdWJJZCwgaWQpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvJHtpZH1gLFxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBzdWNjZXNzOiBcInJlbW92ZWRQbGF5ZXJcIlxuICB9KTtcbn07XG5cbmNvbnN0IGZldGNoQWxsQ2x1YnMgPSAoKSA9PiB7XG4gIGFwaVNlcnZpY2Uoe1xuICAgIHVybDogXCIvYXBpL2NsdWJzL2FsbFwiLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZEFsbENsdWJzXCJcbiAgfSk7XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gKGRhdGEpID0+IHtcbiAgZGVidWdnZXI7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS91cGxvYWQvcGxheWVyc1wiLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YSxcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IFwicGFyc2VkUGxheWVyc1wiXG4gIH0pO1xufTtcbmNvbnN0IGdlbmVyYXRlUERGID0gKGFkZGVkUGxheWVycywgc2NoZW1hcywgY2x1YiwgZGF0ZSkgPT4ge1xuICBhcGlDU1JGU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9wZGZzLyR7Y2x1Yi5faWR9YCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIHNlc3Npb246IHsgYWRkZWRQbGF5ZXJzLCBzY2hlbWFzLCBjbHViLCBkYXRlIH1cbiAgICB9LFxuICAgIHN1Y2Nlc3M6IFwiZ2VuZXJhdGVkUERGXCIsXG4gICAgZXJyb3I6IFwiUERGRXJyb3JcIlxuICB9KTtcbn07XG5cbmNvbnN0IGZldGNoQWxsUGxheWVyc0Zyb21DbHViID0gKGNsdWJJZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9wbGF5ZXJzYCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRQbGF5ZXJzXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaENsdWJSb3VuZHJvYmlucyA9IChjbHViSWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcm91bmRyb2JpbnNgLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZENsdWJSb3VuZHJvYmluc1wiXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hQbGF5ZXJzLCBmZXRjaFBsYXllciwgYWRkUGxheWVyLFxuICB1cGRhdGVQbGF5ZXIsIGRlbGV0ZVBsYXllciwgZmV0Y2hBbGxDbHVicyxcbiAgZ2VuZXJhdGVQREYsIGZldGNoQWxsUGxheWVyc0Zyb21DbHViLCBmZXRjaENsdWJSb3VuZHJvYmlucyxcbiAgdXBsb2FkRmlsZSB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9hY3Rpb25zL2NsaWVudEFjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9