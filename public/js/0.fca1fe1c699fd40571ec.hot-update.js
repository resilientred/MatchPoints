webpackHotUpdate(0,{

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Divider = __webpack_require__(652);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _playerList = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./playerList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _playerList2 = _interopRequireDefault(_playerList);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var style = { position: "relative" };
	
	var PlayerGroup = function PlayerGroup(props) {
	  return _react2.default.createElement("div", { className: "player-lists" }, _react2.default.createElement(_Divider2.default, { style: style }), _react2.default.createElement(_playerList2.default, {
	    players: props.allPlayers,
	    handleToggle: props.handleToggle,
	    title: "All Players",
	    selectable: Boolean(true),
	    addedPlayers: props.objAddedPlayers,
	    deletePlayer: props.deletePlayer
	  }), _react2.default.createElement(_Divider2.default, { style: style }), _react2.default.createElement(_playerList2.default, {
	    players: props.addedPlayers,
	    handleToggle: props.handleToggle,
	    title: "Selected Players",
	    selectable: false,
	    addedPlayers: props.objAddedPlayers
	  }), _react2.default.createElement(_Divider2.default, { style: style }));
	};
	
	PlayerGroup.propTypes = {
	  allPlayers: _react.PropTypes.array,
	  handleToggle: _react.PropTypes.func,
	  objAddedPlayers: _react.PropTypes.object,
	  deletePlayer: _react.PropTypes.func,
	  addedPlayers: _react.PropTypes.array
	};
	
	exports.default = PlayerGroup;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanM/YzNiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNLFFBQVEsRUFBRSxVQUFVOztBQUUxQixLQUFNLGNBQWM7MEJBQ2pCLHVCQUFLLFdBQVUsa0JBQ2QsbURBQVMsT0FBTztjQUVMLE1BQ1Q7bUJBQWMsTUFDZDtZQUNBO2lCQUFZLFFBQ1o7bUJBQWMsTUFDZDttQkFBYyxNQUFNO0FBTHBCLElBREYsQ0FGRCxFQVVDLG1EQUFTLE9BQU87Y0FFTCxNQUNUO21CQUFjLE1BQ2Q7WUFDQTtpQkFDQTttQkFBYyxNQUFNO0FBSnBCLElBREYsR0FPQSxtREFBUyxPQUFPO0FBbkJwQjs7QUF1QkEsYUFBWTtlQUNFLGlCQUNaO2lCQUFjLGlCQUNkO29CQUFpQixpQkFDakI7aUJBQWMsaUJBQ2Q7aUJBQWMsaUJBQVU7QUFKeEI7O21CQU9hLFkiLCJmaWxlIjoiMC5mY2ExZmUxYzY5OWZkNDA1NzFlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RpdmlkZXJcIjtcbmltcG9ydCBQbGF5ZXJMaXN0IGZyb20gXCIuL3BsYXllckxpc3RcIjtcblxuY29uc3Qgc3R5bGUgPSB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfTtcblxuY29uc3QgUGxheWVyR3JvdXAgPSBwcm9wcyA9PiAoXG4gICg8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1saXN0c1wiPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWxsUGxheWVyc31cbiAgICAgIGhhbmRsZVRvZ2dsZT17cHJvcHMuaGFuZGxlVG9nZ2xlfVxuICAgICAgdGl0bGU9XCJBbGwgUGxheWVyc1wiXG4gICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgYWRkZWRQbGF5ZXJzPXtwcm9wcy5vYmpBZGRlZFBsYXllcnN9XG4gICAgICBkZWxldGVQbGF5ZXI9e3Byb3BzLmRlbGV0ZVBsYXllcn1cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWRkZWRQbGF5ZXJzfVxuICAgICAgaGFuZGxlVG9nZ2xlPXtwcm9wcy5oYW5kbGVUb2dnbGV9XG4gICAgICB0aXRsZT1cIlNlbGVjdGVkIFBsYXllcnNcIlxuICAgICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgICBhZGRlZFBsYXllcnM9e3Byb3BzLm9iakFkZGVkUGxheWVyc31cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgPC9kaXY+KVxuKTtcblxuUGxheWVyR3JvdXAucHJvcFR5cGVzID0ge1xuICBhbGxQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9iakFkZGVkUGxheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9