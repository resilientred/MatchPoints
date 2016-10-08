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
	      debugger;
	      setPlayers(payload.club.players);
	      ClubStore.__emitChange();
	      break;
	    default:
	      break;
	  }
	};
	
	exports.default = ClubStore;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zdG9yZXMvY2x1YlN0b3JlLmpzPzc2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNLFlBQVksOEJBQWxCO0FBQ0EsS0FBSSxjQUFjO0FBQ2xCLEtBQUksUUFBUTs7QUFFWixLQUFNLGlCQUFpQix3QkFBQyxNQUN0QjtpQkFBYyxTQUFTLEtBQUssT0FDN0I7QUFGRDs7QUFJQSxLQUFNLFdBQVcsa0JBQUMsS0FDaEI7V0FBUSxJQUFJLGVBQWUsSUFBSSxlQUNoQztBQUZEOztBQUlBLEtBQU0sZUFBZSxzQkFBQyxJQUNwQjtPQUFNLFVBQVUsWUFDaEI7UUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksUUFBUSxRQUFRLEtBQzlDO1NBQUksUUFBUSxHQUFHLFFBQVEsSUFDckI7ZUFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRjtBQVBEOztBQVNBLEtBQU0sYUFBYSxvQkFBQyxTQUNsQjtlQUFZLFVBQ2I7QUFGRDs7QUFJQSxXQUFVLGlCQUFpQjtVQUFNO0FBQWpDOztBQUVBLFdBQVUsV0FBVyxZQUNuQjtPQUFNLE1BQ047V0FDQTtVQUNEO0FBSkQ7O0FBTUEsV0FBVSxlQUFlLFVBQUMsU0FDeEI7V0FBUSxRQUNOO3FCQUNFO3NCQUFlLFFBQ2Y7aUJBQ0E7QUFDRjtxQkFDRTtnQkFBUyxRQUNUO2lCQUNBO0FBQ0Y7cUJBQ0U7b0JBQWEsUUFDYjtBQUNGO3FCQUNBO0FBQ0U7a0JBQVcsUUFBUSxLQUNuQjtpQkFDQTtBQUNGO0FBQ0U7QUFFTDs7QUFyQkQ7O21CQXVCZSxVIiwiZmlsZSI6IjAuZmU3ZWNmZDk0NDY2OTdiMGQ5YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcImZsdXgvdXRpbHNcIjtcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCB7IExPR0dFRF9JTiwgTE9HX0lOX0VSUk9SLFxuICBSRU1PVkVEX1BMQVlFUiwgUEFSU0VEX1BMQVlFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBDbHViU3RvcmUgPSBuZXcgU3RvcmUoQXBwRGlzcGF0Y2hlcik7XG5sZXQgY3VycmVudENsdWIgPSBudWxsO1xubGV0IGVycm9yID0gbnVsbDtcblxuY29uc3Qgc2V0Q3VycmVudENsdWIgPSAoY2x1YikgPT4ge1xuICBjdXJyZW50Q2x1YiA9IGNsdWIgPT09IFwiXCIgPyBudWxsIDogY2x1Yjtcbn07XG5cbmNvbnN0IHNldEVycm9yID0gKGVycikgPT4ge1xuICBlcnJvciA9IGVyci5yZXNwb25zZVRleHQgPyBlcnIucmVzcG9uc2VUZXh0IDogbnVsbDtcbn07XG5cbmNvbnN0IHJlbW92ZVBsYXllciA9IChpZCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzID0gY3VycmVudENsdWIucGxheWVycztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Q2x1Yi5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBpZCkge1xuICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRQbGF5ZXJzID0gKHBsYXllcnMpID0+IHtcbiAgY3VycmVudENsdWIucGxheWVycyA9IHBsYXllcnNcbn07XG5cbkNsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YiA9ICgpID0+IGN1cnJlbnRDbHViO1xuXG5DbHViU3RvcmUuZ2V0RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVyciA9IGVycm9yO1xuICBlcnJvciA9IG51bGw7XG4gIHJldHVybiBlcnI7XG59O1xuXG5DbHViU3RvcmUuX19vbkRpc3BhdGNoID0gKHBheWxvYWQpID0+IHtcbiAgc3dpdGNoIChwYXlsb2FkLmFjdGlvblR5cGUpIHtcbiAgICBjYXNlIExPR0dFRF9JTjpcbiAgICAgIHNldEN1cnJlbnRDbHViKHBheWxvYWQuY2x1Yik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR19JTl9FUlJPUjpcbiAgICAgIHNldEVycm9yKHBheWxvYWQuZXJyKTtcbiAgICAgIENsdWJTdG9yZS5fX2VtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFRF9QTEFZRVI6XG4gICAgICByZW1vdmVQbGF5ZXIocGF5bG9hZC5wbGF5ZXJJZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBBUlNFRF9QTEFZRVJTOlxuICAgIGRlYnVnZ2VyO1xuICAgICAgc2V0UGxheWVycyhwYXlsb2FkLmNsdWIucGxheWVycyk7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvc3RvcmVzL2NsdWJTdG9yZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=