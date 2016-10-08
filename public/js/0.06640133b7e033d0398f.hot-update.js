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
	      debugger;
	      addPlayers(payload.club.players);
	      ClubStore.__emitChange();
	      break;
	    default:
	      break;
	  }
	};
	
	exports.default = ClubStore;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zdG9yZXMvY2x1YlN0b3JlLmpzPzc2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNLFlBQVksOEJBQWxCO0FBQ0EsS0FBSSxjQUFjO0FBQ2xCLEtBQUksUUFBUTs7QUFFWixLQUFNLGlCQUFpQix3QkFBQyxNQUN0QjtpQkFBYyxTQUFTLEtBQUssT0FDN0I7QUFGRDs7QUFJQSxLQUFNLFdBQVcsa0JBQUMsS0FDaEI7V0FBUSxJQUFJLGVBQWUsSUFBSSxlQUNoQztBQUZEOztBQUlBLEtBQU0sZUFBZSxzQkFBQyxJQUNwQjtPQUFNLFVBQVUsWUFDaEI7UUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksUUFBUSxRQUFRLEtBQzlDO1NBQUksUUFBUSxHQUFHLFFBQVEsSUFDckI7ZUFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRjtBQVBEOztBQVNBLEtBQU0sYUFBYSxvQkFBQyxTQUNsQjtXQUFRLFFBQVEsVUFBQyxRQUNmO2lCQUFZLFFBQVEsS0FDckI7QUFDRjtBQUpEOztBQU1BLFdBQVUsaUJBQWlCO1VBQU07QUFBakM7O0FBRUEsV0FBVSxXQUFXLFlBQ25CO09BQU0sTUFDTjtXQUNBO1VBQ0Q7QUFKRDs7QUFNQSxXQUFVLGVBQWUsVUFBQyxTQUN4QjtXQUFRLFFBQ047cUJBQ0U7c0JBQWUsUUFDZjtpQkFDQTtBQUNGO3FCQUNFO2dCQUFTLFFBQ1Q7aUJBQ0E7QUFDRjtxQkFDRTtvQkFBYSxRQUNiO0FBQ0Y7cUJBQ0U7QUFDQTtrQkFBVyxRQUFRLEtBQ25CO2lCQUNBO0FBQ0Y7QUFDRTtBQUVMOztBQXJCRDs7bUJBdUJlLFUiLCJmaWxlIjoiMC4wNjY0MDEzM2I3ZTAzM2QwMzk4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiZmx1eC91dGlsc1wiO1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXIvZGlzcGF0Y2hlclwiO1xuaW1wb3J0IHsgTE9HR0VEX0lOLCBMT0dfSU5fRVJST1IsXG4gIFJFTU9WRURfUExBWUVSLCBQQVJTRURfUExBWUVSUyB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IENsdWJTdG9yZSA9IG5ldyBTdG9yZShBcHBEaXNwYXRjaGVyKTtcbmxldCBjdXJyZW50Q2x1YiA9IG51bGw7XG5sZXQgZXJyb3IgPSBudWxsO1xuXG5jb25zdCBzZXRDdXJyZW50Q2x1YiA9IChjbHViKSA9PiB7XG4gIGN1cnJlbnRDbHViID0gY2x1YiA9PT0gXCJcIiA/IG51bGwgOiBjbHViO1xufTtcblxuY29uc3Qgc2V0RXJyb3IgPSAoZXJyKSA9PiB7XG4gIGVycm9yID0gZXJyLnJlc3BvbnNlVGV4dCA/IGVyci5yZXNwb25zZVRleHQgOiBudWxsO1xufTtcblxuY29uc3QgcmVtb3ZlUGxheWVyID0gKGlkKSA9PiB7XG4gIGNvbnN0IHBsYXllcnMgPSBjdXJyZW50Q2x1Yi5wbGF5ZXJzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRDbHViLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGxheWVyc1tpXS5faWQgPT09IGlkKSB7XG4gICAgICBwbGF5ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZFBsYXllcnMgPSAocGxheWVycykgPT4ge1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGN1cnJlbnRDbHViLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICB9KTtcbn07XG5cbkNsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YiA9ICgpID0+IGN1cnJlbnRDbHViO1xuXG5DbHViU3RvcmUuZ2V0RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVyciA9IGVycm9yO1xuICBlcnJvciA9IG51bGw7XG4gIHJldHVybiBlcnI7XG59O1xuXG5DbHViU3RvcmUuX19vbkRpc3BhdGNoID0gKHBheWxvYWQpID0+IHtcbiAgc3dpdGNoIChwYXlsb2FkLmFjdGlvblR5cGUpIHtcbiAgICBjYXNlIExPR0dFRF9JTjpcbiAgICAgIHNldEN1cnJlbnRDbHViKHBheWxvYWQuY2x1Yik7XG4gICAgICBDbHViU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR19JTl9FUlJPUjpcbiAgICAgIHNldEVycm9yKHBheWxvYWQuZXJyKTtcbiAgICAgIENsdWJTdG9yZS5fX2VtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFRF9QTEFZRVI6XG4gICAgICByZW1vdmVQbGF5ZXIocGF5bG9hZC5wbGF5ZXJJZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBBUlNFRF9QTEFZRVJTOlxuICAgICAgZGVidWdnZXI7XG4gICAgICBhZGRQbGF5ZXJzKHBheWxvYWQuY2x1Yi5wbGF5ZXJzKTtcbiAgICAgIENsdWJTdG9yZS5fX2VtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1YlN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9zdG9yZXMvY2x1YlN0b3JlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==