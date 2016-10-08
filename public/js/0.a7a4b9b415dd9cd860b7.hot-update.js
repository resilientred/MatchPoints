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
	
	var setPlayers = function setPlayers(players) {
	  currentClub.players = players;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zdG9yZXMvY2x1YlN0b3JlLmpzPzc2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNLFlBQVksOEJBQWxCO0FBQ0EsS0FBSSxjQUFjO0FBQ2xCLEtBQUksUUFBUTs7QUFFWixLQUFNLGlCQUFpQix3QkFBQyxNQUN0QjtpQkFBYyxTQUFTLEtBQUssT0FDN0I7QUFGRDs7QUFJQSxLQUFNLFdBQVcsa0JBQUMsS0FDaEI7V0FBUSxJQUFJLGVBQWUsSUFBSSxlQUNoQztBQUZEOztBQUlBLEtBQU0sZUFBZSxzQkFBQyxJQUNwQjtPQUFNLFVBQVUsWUFDaEI7UUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksUUFBUSxRQUFRLEtBQzlDO1NBQUksUUFBUSxHQUFHLFFBQVEsSUFDckI7ZUFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRjtBQVBEOztBQVNBLEtBQU0sYUFBYSxvQkFBQyxTQUNsQjtlQUFZLFVBQ2I7QUFGRDs7QUFJQSxXQUFVLGlCQUFpQjtVQUFNO0FBQWpDOztBQUVBLFdBQVUsV0FBVyxZQUNuQjtPQUFNLE1BQ047V0FDQTtVQUNEO0FBSkQ7O0FBTUEsV0FBVSxlQUFlLFVBQUMsU0FDeEI7V0FBUSxRQUNOO3FCQUNFO3NCQUFlLFFBQ2Y7aUJBQ0E7QUFDRjtxQkFDRTtnQkFBUyxRQUNUO2lCQUNBO0FBQ0Y7cUJBQ0U7b0JBQWEsUUFDYjtBQUNGO3FCQUNFO3NCQUFlLFFBQ2Y7aUJBQ0E7QUFDRjtBQUNFO0FBRUw7O0FBcEJEOzttQkFzQmUsVSIsImZpbGUiOiIwLmE3YTRiOWI0MTVkZDljZDg2MGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJmbHV4L3V0aWxzXCI7XG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlci9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBMT0dHRURfSU4sIExPR19JTl9FUlJPUixcbiAgUkVNT1ZFRF9QTEFZRVIsIFBBUlNFRF9QTEFZRVJTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuY29uc3QgQ2x1YlN0b3JlID0gbmV3IFN0b3JlKEFwcERpc3BhdGNoZXIpO1xubGV0IGN1cnJlbnRDbHViID0gbnVsbDtcbmxldCBlcnJvciA9IG51bGw7XG5cbmNvbnN0IHNldEN1cnJlbnRDbHViID0gKGNsdWIpID0+IHtcbiAgY3VycmVudENsdWIgPSBjbHViID09PSBcIlwiID8gbnVsbCA6IGNsdWI7XG59O1xuXG5jb25zdCBzZXRFcnJvciA9IChlcnIpID0+IHtcbiAgZXJyb3IgPSBlcnIucmVzcG9uc2VUZXh0ID8gZXJyLnJlc3BvbnNlVGV4dCA6IG51bGw7XG59O1xuXG5jb25zdCByZW1vdmVQbGF5ZXIgPSAoaWQpID0+IHtcbiAgY29uc3QgcGxheWVycyA9IGN1cnJlbnRDbHViLnBsYXllcnM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudENsdWIucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwbGF5ZXJzW2ldLl9pZCA9PT0gaWQpIHtcbiAgICAgIHBsYXllcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2V0UGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGN1cnJlbnRDbHViLnBsYXllcnMgPSBwbGF5ZXJzXG59O1xuXG5DbHViU3RvcmUuZ2V0Q3VycmVudENsdWIgPSAoKSA9PiBjdXJyZW50Q2x1YjtcblxuQ2x1YlN0b3JlLmdldEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnIgPSBlcnJvcjtcbiAgZXJyb3IgPSBudWxsO1xuICByZXR1cm4gZXJyO1xufTtcblxuQ2x1YlN0b3JlLl9fb25EaXNwYXRjaCA9IChwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBMT0dHRURfSU46XG4gICAgICBzZXRDdXJyZW50Q2x1YihwYXlsb2FkLmNsdWIpO1xuICAgICAgQ2x1YlN0b3JlLl9fZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMT0dfSU5fRVJST1I6XG4gICAgICBzZXRFcnJvcihwYXlsb2FkLmVycik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFTU9WRURfUExBWUVSOlxuICAgICAgcmVtb3ZlUGxheWVyKHBheWxvYWQucGxheWVySWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQQVJTRURfUExBWUVSUzpcbiAgICAgIHNldEN1cnJlbnRDbHViKHBheWxvYWQuY2x1Yik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvc3RvcmVzL2NsdWJTdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=