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
	    url: "/api/upload/players/",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hY3Rpb25zL2NsaWVudEFjdGlvbnMuanM/NzY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxLQUFNLGVBQWUsc0JBQUMsUUFDcEI7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLGNBQWMscUJBQUMsSUFDbkI7OzRCQUVFO2NBRUg7QUFIRztBQUZKO0FBTUEsS0FBTSxZQUFZLG1CQUFDLFFBQVEsUUFDekI7OzBCQUNxQixTQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFBSSxRQUNoQzs7MEJBQ3FCLHVCQUNuQjthQUNBO1dBQU0sRUFBRSxRQUNSO2NBRUg7QUFMRztBQUZKO0FBUUEsS0FBTSxlQUFlLHNCQUFDLFFBQVEsSUFDNUI7OzBCQUNxQix1QkFDbkI7YUFDQTtjQUVIO0FBSkc7QUFGSjs7QUFRQSxLQUFNLGdCQUFnQix5QkFDcEI7O1VBRUU7Y0FFSDtBQUhHO0FBRko7O0FBT0EsS0FBTSxhQUFhLG9CQUFDLE1BQ2xCOztVQUVFO2FBQ0E7V0FDQTtjQUVIO0FBTEc7QUFGSjtBQVFBLEtBQU0sY0FBYyxxQkFBQyxjQUFjLFNBQVMsTUFBTSxNQUNoRDs7eUJBQ29CLEtBQ2xCO2FBQ0E7O2dCQUNXLEVBQUUsY0FBRixjQUFnQixTQUFoQixTQUF5QixNQUF6QixNQUErQixNQUUxQztBQUZFO2NBR0Y7WUFFSDtBQVJHO0FBRko7O0FBWUEsS0FBTSwwQkFBMEIsaUNBQUMsUUFDL0I7OzBCQUNxQixTQUNuQjtjQUVIO0FBSEc7QUFGSjs7QUFPQSxLQUFNLHVCQUF1Qiw4QkFBQyxRQUM1Qjs7MEJBQ3FCLFNBQ25CO2NBRUg7QUFIRztBQUZKOztTQU9TO1NBQWM7U0FBYTtTQUNsQztTQUFjO1NBQWM7U0FDNUI7U0FBYTtTQUF5QjtTQUN0Qyx3QiIsImZpbGUiOiIwLjI3ZmYxMjUxZmI3ZTRiYjMxOWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlTZXJ2aWNlLCBhcGlDU1JGU2VydmljZSB9IGZyb20gXCIuLi91dGlscy9hcGlVdGlsXCI7XG5cbmNvbnN0IGZldGNoUGxheWVycyA9IChjbHViSWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9jbHVicy8ke2NsdWJJZH0vcGxheWVyc2AsXG4gICAgc3VjY2VzczogXCJmZXRjaGVkUGxheWVyc1wiXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hQbGF5ZXIgPSAoaWQpID0+IHtcbiAgYXBpU2VydmljZSh7XG4gICAgdXJsOiBgL2FwaS9wbGF5ZXJzLyR7aWR9YCxcbiAgICBzdWNjZXNzOiBcImZldGNoZWRQbGF5ZXJcIlxuICB9KTtcbn07XG5jb25zdCBhZGRQbGF5ZXIgPSAoY2x1YklkLCBwbGF5ZXIpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvbmV3YCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGRhdGE6IHsgcGxheWVyIH0sXG4gICAgc3VjY2VzczogXCJsb2dnZWRJblwiXG4gIH0pO1xufTtcbmNvbnN0IHVwZGF0ZVBsYXllciA9IChjbHViSWQsIGlkLCBwbGF5ZXIpID0+IHtcbiAgYXBpQ1NSRlNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnMvJHtpZH1gLFxuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGRhdGE6IHsgcGxheWVyIH0sXG4gICAgc3VjY2VzczogXCJ1cGRhdGVkQ2x1YlwiXG4gIH0pO1xufTtcbmNvbnN0IGRlbGV0ZVBsYXllciA9IChjbHViSWQsIGlkKSA9PiB7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9wbGF5ZXJzLyR7aWR9YCxcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgc3VjY2VzczogXCJyZW1vdmVkUGxheWVyXCJcbiAgfSk7XG59O1xuXG5jb25zdCBmZXRjaEFsbENsdWJzID0gKCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS9jbHVicy9hbGxcIixcbiAgICBzdWNjZXNzOiBcImZldGNoZWRBbGxDbHVic1wiXG4gIH0pO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IChkYXRhKSA9PiB7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IFwiL2FwaS91cGxvYWQvcGxheWVycy9cIixcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGRhdGEsXG4gICAgc3VjY2VzczogXCJwYXJzZWRQbGF5ZXJzXCJcbiAgfSk7XG59O1xuY29uc3QgZ2VuZXJhdGVQREYgPSAoYWRkZWRQbGF5ZXJzLCBzY2hlbWFzLCBjbHViLCBkYXRlKSA9PiB7XG4gIGFwaUNTUkZTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL3BkZnMvJHtjbHViLl9pZH1gLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YToge1xuICAgICAgc2Vzc2lvbjogeyBhZGRlZFBsYXllcnMsIHNjaGVtYXMsIGNsdWIsIGRhdGUgfVxuICAgIH0sXG4gICAgc3VjY2VzczogXCJnZW5lcmF0ZWRQREZcIixcbiAgICBlcnJvcjogXCJQREZFcnJvclwiXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hBbGxQbGF5ZXJzRnJvbUNsdWIgPSAoY2x1YklkKSA9PiB7XG4gIGFwaVNlcnZpY2Uoe1xuICAgIHVybDogYC9hcGkvY2x1YnMvJHtjbHViSWR9L3BsYXllcnNgLFxuICAgIHN1Y2Nlc3M6IFwiZmV0Y2hlZFBsYXllcnNcIlxuICB9KTtcbn07XG5cbmNvbnN0IGZldGNoQ2x1YlJvdW5kcm9iaW5zID0gKGNsdWJJZCkgPT4ge1xuICBhcGlTZXJ2aWNlKHtcbiAgICB1cmw6IGAvYXBpL2NsdWJzLyR7Y2x1YklkfS9yb3VuZHJvYmluc2AsXG4gICAgc3VjY2VzczogXCJmZXRjaGVkQ2x1YlJvdW5kcm9iaW5zXCJcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmZXRjaFBsYXllcnMsIGZldGNoUGxheWVyLCBhZGRQbGF5ZXIsXG4gIHVwZGF0ZVBsYXllciwgZGVsZXRlUGxheWVyLCBmZXRjaEFsbENsdWJzLFxuICBnZW5lcmF0ZVBERiwgZmV0Y2hBbGxQbGF5ZXJzRnJvbUNsdWIsIGZldGNoQ2x1YlJvdW5kcm9iaW5zLFxuICB1cGxvYWRGaWxlIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2FjdGlvbnMvY2xpZW50QWN0aW9ucy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=