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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL2NsaWVudEFjdGlvbnMuanM/NzY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxLQUFNLGVBQWUsc0JBQUMsUUFDcEI7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLGNBQWMscUJBQUMsSUFDbkI7OzRCQUVFO2NBRUg7QUFIRztBQUZKO0FBTUEsS0FBTSxZQUFZLG1CQUFDLFFBQVEsUUFDekI7OzBCQUNxQixTQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFBSSxRQUNoQzs7MEJBQ3FCLHVCQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFDNUI7OzBCQUNxQix1QkFDbkI7YUFDQTtjQUVIO0FBSkc7QUFGSjs7QUFRQSxLQUFNLGdCQUFnQix5QkFDcEI7O1VBRUU7Y0FFSDtBQUhHO0FBRko7O0FBT0EsS0FBTSxhQUFhLG9CQUFDLE1BQ2xCOztVQUVFO2FBQ0E7V0FDQTtjQUVIO0FBTEc7QUFGSjtBQVFBLEtBQU0sY0FBYyxxQkFBQyxjQUFjLFNBQVMsTUFBTSxNQUNoRDs7eUJBQ29CLEtBQ2xCO2FBQ0E7O2dCQUNXLEVBQUUsY0FBRixjQUFnQixTQUFoQixTQUF5QixNQUF6QixNQUErQixNQUUxQztBQUZFO2NBR0Y7WUFFSDtBQVJHO0FBRko7O0FBWUEsS0FBTSwwQkFBMEIsaUNBQUMsUUFDL0I7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLHVCQUF1Qiw4QkFBQyxRQUM1Qjs7MEJBQ3FCLFNBQ25CO2NBRUg7QUFIRztBQUZKOztTQU9TO1NBQWM7U0FBYTtTQUNsQztTQUFjO1NBQWM7U0FDNUI7U0FBYTtTQUF5QjtTQUN0Qyx3QiIsImZpbGUiOiIwLjRkZDlkYzUwOWY0N2ZhYjM3OTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlTZXJ2aWNlLCBhcGlDU1JGU2VydmljZSB9IGZyb20gXCIuLi91dGlscy9hcGlVdGlsXCI7XG5cbmNvbnN0IGZldGNoUGxheWVycyA9IChjbHViSWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVyc2AsXG4gICAgc3VjY2VzczogXCJmZXRjaGVkUGxheWVyc1wiXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hQbGF5ZXIgPSAoaWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9wbGF5ZXJzLyR7aWR9YCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRQbGF5ZXJcIlxuICB9KTtcbn07XG5jb25zdCBhZGRQbGF5ZXIgPSAoY2x1YklkLCBwbGF5ZXIpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvbmV3YCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGRhdGE6IHsgcGxheWVyIH0sXG4gICAgc3VjY2VzczogXCJsb2dnZWRJblwiXG4gIH0pO1xufTtcbmNvbnN0IHVwZGF0ZVBsYXllciA9IChjbHViSWQsIGlkLCBwbGF5ZXIpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvJHtpZH1gLFxuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGRhdGE6IHsgcGxheWVyIH0sXG4gICAgc3VjY2VzczogXCJ1cGRhdGVkQ2x1YlwiXG4gIH0pO1xufTtcbmNvbnN0IGRlbGV0ZVBsYXllciA9IChjbHViSWQsIGlkKSA9PiB7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9wbGF5ZXJzLyR7aWR9YCxcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgc3VjY2VzczogXCJyZW1vdmVkUGxheWVyXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaEFsbENsdWJzID0gKCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS9jbHVicy9hbGxcIixcbiAgICBzdWNjZXNzOiBcImZldGNoZWRBbGxDbHVic1wiXG4gIH0pO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IChkYXRhKSA9PiB7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS91cGxvYWQvcGxheWVyc1wiLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YSxcbiAgICBzdWNjZXNzOiBcInBhcnNlZFBsYXllcnNcIlxuICB9KTtcbn07XG5jb25zdCBnZW5lcmF0ZVBERiA9IChhZGRlZFBsYXllcnMsIHNjaGVtYXMsIGNsdWIsIGRhdGUpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvcGRmcy8ke2NsdWIuX2lkfWAsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBkYXRhOiB7XG4gICAgICBzZXNzaW9uOiB7IGFkZGVkUGxheWVycywgc2NoZW1hcywgY2x1YiwgZGF0ZSB9XG4gICAgfSxcbiAgICBzdWNjZXNzOiBcImdlbmVyYXRlZFBERlwiLFxuICAgIGVycm9yOiBcIlBERkVycm9yXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaEFsbFBsYXllcnNGcm9tQ2x1YiA9IChjbHViSWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVyc2AsXG4gICAgc3VjY2VzczogXCJmZXRjaGVkUGxheWVyc1wiXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hDbHViUm91bmRyb2JpbnMgPSAoY2x1YklkKSA9PiB7XG4gIGFwaVNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3JvdW5kcm9iaW5zYCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRDbHViUm91bmRyb2JpbnNcIlxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZldGNoUGxheWVycywgZmV0Y2hQbGF5ZXIsIGFkZFBsYXllcixcbiAgdXBkYXRlUGxheWVyLCBkZWxldGVQbGF5ZXIsIGZldGNoQWxsQ2x1YnMsXG4gIGdlbmVyYXRlUERGLCBmZXRjaEFsbFBsYXllcnNGcm9tQ2x1YiwgZmV0Y2hDbHViUm91bmRyb2JpbnMsXG4gIHVwbG9hZEZpbGUgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvYWN0aW9ucy9jbGllbnRBY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==