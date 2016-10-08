webpackHotUpdate(0,{

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(478);
	
	var _dispatcher = __webpack_require__(472);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _constants = __webpack_require__(476);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var ClubStore = new _utils.Store(_dispatcher2.default);
	var currentClub = null;
	var error = null;
	
	var setCurrentClub = function setCurrentClub(club) {
	  currentClub = club === "" ? null : club;
	};
	
	var setError = function setError(err) {
	  error = err.responseText ? err.responseText : null;
	};
	
	var removePlayer = function removePlayer(id) {
	  var players = currentClub.players;
	  for (var i = 0; i < currentClub.players.length; i++) {
	    if (players[i]._id === id) {
	      players.splice(i, 1);
	    }
	  }
	};
	
	var addPlayers = function addPlayers(players) {
	  players.forEach(function (player) {
	    currentClub.players.push(player);
	  });
	};
	
	ClubStore.getCurrentClub = function () {
	  return currentClub;
	};
	
	ClubStore.getError = function () {
	  var err = error;
	  error = null;
	  return err;
	};
	
	ClubStore.__onDispatch = function (payload) {
	  switch (payload.actionType) {
	    case _constants.LOGGED_IN:
	      setCurrentClub(payload.club);
	      ClubStore.__emitChange();
	      break;
	    case _constants.LOG_IN_ERROR:
	      setError(payload.err);
	      ClubStore.__emitChange();
	      break;
	    case _constants.REMOVED_PLAYER:
	      removePlayer(payload.playerId);
	      break;
	    case _constants.PARSED_PLAYERS:
	      setCurrentClub(payload.club);
	      ClubStore.__emitChange();
	      break;
	    default:
	      break;
	  }
	};
	
	exports.default = ClubStore;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zdG9yZXMvY2x1YlN0b3JlLmpzPzc2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNLFlBQVksOEJBQWxCO0FBQ0EsS0FBSSxjQUFjO0FBQ2xCLEtBQUksUUFBUTs7QUFFWixLQUFNLGlCQUFpQix3QkFBQyxNQUN0QjtpQkFBYyxTQUFTLEtBQUssT0FDN0I7QUFGRDs7QUFJQSxLQUFNLFdBQVcsa0JBQUMsS0FDaEI7V0FBUSxJQUFJLGVBQWUsSUFBSSxlQUNoQztBQUZEOztBQUlBLEtBQU0sZUFBZSxzQkFBQyxJQUNwQjtPQUFNLFVBQVUsWUFDaEI7UUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksUUFBUSxRQUFRLEtBQzlDO1NBQUksUUFBUSxHQUFHLFFBQVEsSUFDckI7ZUFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRjtBQVBEOztBQVNBLEtBQU0sYUFBYSxvQkFBQyxTQUNsQjtXQUFRLFFBQVEsVUFBQyxRQUNmO2lCQUFZLFFBQVEsS0FDckI7QUFDRjtBQUpEOztBQU1BLFdBQVUsaUJBQWlCO1VBQU07QUFBakM7O0FBRUEsV0FBVSxXQUFXLFlBQ25CO09BQU0sTUFDTjtXQUNBO1VBQ0Q7QUFKRDs7QUFNQSxXQUFVLGVBQWUsVUFBQyxTQUN4QjtXQUFRLFFBQ047cUJBQ0U7c0JBQWUsUUFDZjtpQkFDQTtBQUNGO3FCQUNFO2dCQUFTLFFBQ1Q7aUJBQ0E7QUFDRjtxQkFDRTtvQkFBYSxRQUNiO0FBQ0Y7cUJBQ0U7c0JBQWUsUUFDZjtpQkFDQTtBQUNGO0FBQ0U7QUFFTDs7QUFwQkQ7O21CQXNCZSxVIiwiZmlsZSI6IjAuZmYyYmY1OTU5NmMxYzVkNDQ5ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcImZsdXgvdXRpbHNcIjtcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCB7IExPR0dFRF9JTiwgTE9HX0lOX0VSUk9SLFxuICBSRU1PVkVEX1BMQVlFUiwgUEFSU0VEX1BMQVlFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBDbHViU3RvcmUgPSBuZXcgU3RvcmUoQXBwRGlzcGF0Y2hlcik7XG5sZXQgY3VycmVudENsdWIgPSBudWxsO1xubGV0IGVycm9yID0gbnVsbDtcblxuY29uc3Qgc2V0Q3VycmVudENsdWIgPSAoY2x1YikgPT4ge1xuICBjdXJyZW50Q2x1YiA9IGNsdWIgPT09IFwiXCIgPyBudWxsIDogY2x1Yjtcbn07XG5cbmNvbnN0IHNldEVycm9yID0gKGVycikgPT4ge1xuICBlcnJvciA9IGVyci5yZXNwb25zZVRleHQgPyBlcnIucmVzcG9uc2VUZXh0IDogbnVsbDtcbn07XG5cbmNvbnN0IHJlbW92ZVBsYXllciA9IChpZCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzID0gY3VycmVudENsdWIucGxheWVycztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Q2x1Yi5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBpZCkge1xuICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRQbGF5ZXJzID0gKHBsYXllcnMpID0+IHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjdXJyZW50Q2x1Yi5wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgfSk7XG59O1xuXG5DbHViU3RvcmUuZ2V0Q3VycmVudENsdWIgPSAoKSA9PiBjdXJyZW50Q2x1YjtcblxuQ2x1YlN0b3JlLmdldEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnIgPSBlcnJvcjtcbiAgZXJyb3IgPSBudWxsO1xuICByZXR1cm4gZXJyO1xufTtcblxuQ2x1YlN0b3JlLl9fb25EaXNwYXRjaCA9IChwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBMT0dHRURfSU46XG4gICAgICBzZXRDdXJyZW50Q2x1YihwYXlsb2FkLmNsdWIpO1xuICAgICAgQ2x1YlN0b3JlLl9fZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMT0dfSU5fRVJST1I6XG4gICAgICBzZXRFcnJvcihwYXlsb2FkLmVycik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFTU9WRURfUExBWUVSOlxuICAgICAgcmVtb3ZlUGxheWVyKHBheWxvYWQucGxheWVySWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQQVJTRURfUExBWUVSUzpcbiAgICAgIHNldEN1cnJlbnRDbHViKHBheWxvYWQuY2x1Yik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvc3RvcmVzL2NsdWJTdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=