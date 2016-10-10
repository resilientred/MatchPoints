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
	
	var _playerList = __webpack_require__(654);
	
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

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _IconButton = __webpack_require__(455);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _close = __webpack_require__(649);
	
	var _close2 = _interopRequireDefault(_close);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PlayerList = function (_Component) {
	  _inherits(PlayerList, _Component);
	
	  function PlayerList(props) {
	    _classCallCheck(this, PlayerList);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerList).call(this, props));
	
	    _this.state = {
	      players: [],
	      counter: 0
	    };
	    return _this;
	  }
	
	  _createClass(PlayerList, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.state.players = this.props.players.slice(0, 20);
	      var interval = setInterval(function () {
	        (function () {
	          var length = this.state.players.length;
	          var updatedCounter = this.state.counter + 20;
	          var modPlayers = this.state.players.concat(this.props.players.slice(length, length + 20));
	          this.setState({
	            counter: updatedCounter,
	            players: modPlayers
	          });
	
	          if (updatedCounter >= this.props.players.length) {
	            clearInterval(interval);
	          }
	        })();
	      }, 500);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var players = this.state.players;
	      var idRef = {};
	      var playerList = players.map(function (player, i) {
	        idRef[i] = player._id;
	        return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!_this2.props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), !_this2.props.deletePlayer ? "" : _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
	          onClick: function onClick() {
	            return _this2.props.deletePlayer(player._id);
	          },
	          iconClassName: "material-icons",
	          tooltip: "Remove Player"
	        }, _react2.default.createElement(_close2.default, null))));
	      });
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, this.props.title), _react2.default.createElement(_Table.Table, {
	        height: "400px",
	        fixedHeader: Boolean(true),
	        selectable: Boolean(true),
	        multiSelectable: Boolean(true),
	        onCellClick: function onCellClick(i, col, e) {
	          return _this2.props.handleToggle(idRef[i], e);
	        }
	      }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"), this.props.deletePlayer && _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, {
	        displayRowCheckBox: this.props.selectable,
	        showRowHover: Boolean(true),
	        deselectOnClickaway: Boolean(false)
	      }, playerList)));
	    }
	  }]);
	
	  return PlayerList;
	}(_react.Component);
	
	PlayerList.propTypes = {
	  players: _react.PropTypes.array,
	  addPlayers: _react.PropTypes.array,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanM/YzNiZSIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBTSxRQUFRLEVBQUUsVUFBVTs7QUFFMUIsS0FBTSxjQUFjOzBCQUNqQix1QkFBSyxXQUFVLGtCQUNkLG1EQUFTLE9BQU87Y0FFTCxNQUNUO21CQUFjLE1BQ2Q7WUFDQTtpQkFBWSxRQUNaO21CQUFjLE1BQ2Q7bUJBQWMsTUFBTTtBQUxwQixJQURGLENBRkQsRUFVQyxtREFBUyxPQUFPO2NBRUwsTUFDVDttQkFBYyxNQUNkO1lBQ0E7aUJBQ0E7bUJBQWMsTUFBTTtBQUpwQixJQURGLEdBT0EsbURBQVMsT0FBTztBQW5CcEI7O0FBdUJBLGFBQVk7ZUFDRSxpQkFDWjtpQkFBYyxpQkFDZDtvQkFBaUIsaUJBQ2pCO2lCQUFjLGlCQUNkO2lCQUFjLGlCQUFVO0FBSnhCOzttQkFPYSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNmOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBRWpCOztXQUFLO2dCQUVIO2dCQUFTO0FBRFQ7WUFHSDs7Ozs7eUNBR0M7WUFBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFFBQVEsTUFBTSxHQUM5QztXQUFNLHVCQUF1QixZQUMxQjtzQkFDQztlQUFNLFNBQVMsS0FBSyxNQUFNLFFBQzFCO2VBQU0saUJBQWlCLEtBQUssTUFBTSxVQUNsQztlQUFNLGFBQWEsS0FBSyxNQUFNLFFBQzNCLE9BQU8sS0FBSyxNQUFNLFFBQ2hCLE1BQU0sUUFBUSxTQUVuQjtnQkFBSztzQkFFSDtzQkFHRjtBQUpFOztlQUlFLGtCQUFrQixLQUFLLE1BQU0sUUFBUSxRQUN2QzsyQkFDRDtBQUNGO0FBQ0Y7QUFqQmdCLFVBa0JsQjs7Ozs4QkFFUTtvQkFDUDs7V0FBTSxVQUFVLEtBQUssTUFDckI7V0FBTSxRQUNOO1dBQU0scUJBQXFCLElBQUksVUFBQyxRQUFRLEdBQ3RDO2VBQU0sS0FBSyxPQUNYO2dCQUFRLGlEQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQUssTUFBTSxhQUFhLE9BQU8sUUFDNUUsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU8sU0FFdEIsQ0FBQyxPQUFLLE1BQU0sZUFBZSxxQkFDekIsMkRBQ0U7b0JBQ1c7b0JBQU0sT0FBSyxNQUFNLGFBQWEsT0FBTztBQUM5QzswQkFDQTtvQkFBUTtBQUZSLFVBREYsRUFLRSwrQ0FLWCxNQVhPO0FBYVIsUUFwQm1COztjQXFCakIsMkNBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsS0FBSyxNQUFNLHdCQUN6QztpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE9BQUssTUFBTSxhQUFhLE1BQU0sSUFBSTtBQUxoRTtBQUNFLFFBREYsRUFPRSxvREFBYSxrQkFBa0IsU0FDN0IscURBQ0UsdUVBQ0EseUVBRUUsS0FBSyxNQUFNLGdCQUFnQix3REFKL0IseUJBUUY7NkJBQ3NCLEtBQUssTUFDekI7dUJBQWMsUUFDZDs4QkFBcUIsUUFBUTtBQUY3QixRQURGLEVBVVA7Ozs7Ozs7QUFHSCxZQUFXO1lBQ0EsaUJBQ1Q7ZUFBWSxpQkFDWjtpQkFBYyxpQkFDZDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO1VBQU8saUJBQVU7QUFMakI7O21CQVFhLFciLCJmaWxlIjoiMC4xZTJlMmU0NmQ1OWY3NWNjZjZkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RpdmlkZXJcIjtcbmltcG9ydCBQbGF5ZXJMaXN0IGZyb20gXCIuL3BsYXllckxpc3RcIjtcblxuY29uc3Qgc3R5bGUgPSB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfTtcblxuY29uc3QgUGxheWVyR3JvdXAgPSBwcm9wcyA9PiAoXG4gICg8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1saXN0c1wiPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWxsUGxheWVyc31cbiAgICAgIGhhbmRsZVRvZ2dsZT17cHJvcHMuaGFuZGxlVG9nZ2xlfVxuICAgICAgdGl0bGU9XCJBbGwgUGxheWVyc1wiXG4gICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgYWRkZWRQbGF5ZXJzPXtwcm9wcy5vYmpBZGRlZFBsYXllcnN9XG4gICAgICBkZWxldGVQbGF5ZXI9e3Byb3BzLmRlbGV0ZVBsYXllcn1cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWRkZWRQbGF5ZXJzfVxuICAgICAgaGFuZGxlVG9nZ2xlPXtwcm9wcy5oYW5kbGVUb2dnbGV9XG4gICAgICB0aXRsZT1cIlNlbGVjdGVkIFBsYXllcnNcIlxuICAgICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgICBhZGRlZFBsYXllcnM9e3Byb3BzLm9iakFkZGVkUGxheWVyc31cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgPC9kaXY+KVxuKTtcblxuUGxheWVyR3JvdXAucHJvcFR5cGVzID0ge1xuICBhbGxQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9iakFkZGVkUGxheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcblxuY2xhc3MgUGxheWVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgIGNvdW50ZXI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS5wbGF5ZXJzID0gdGhpcy5wcm9wcy5wbGF5ZXJzLnNsaWNlKDAsIDIwKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdXBkYXRlZENvdW50ZXIgPSB0aGlzLnN0YXRlLmNvdW50ZXIgKyAyMDtcbiAgICAgICAgY29uc3QgbW9kUGxheWVycyA9IHRoaXMuc3RhdGUucGxheWVyc1xuICAgICAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5wbGF5ZXJzXG4gICAgICAgICAgICAuc2xpY2UobGVuZ3RoLCBsZW5ndGggKyAyMClcbiAgICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjb3VudGVyOiB1cGRhdGVkQ291bnRlcixcbiAgICAgICAgICBwbGF5ZXJzOiBtb2RQbGF5ZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGRhdGVkQ291bnRlciA+PSB0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzO1xuICAgIGNvbnN0IGlkUmVmID0ge307XG4gICAgY29uc3QgcGxheWVyTGlzdCA9IHBsYXllcnMubWFwKChwbGF5ZXIsIGkpID0+IHtcbiAgICAgIGlkUmVmW2ldID0gcGxheWVyLl9pZDtcbiAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17cGxheWVyLl9pZH0gc2VsZWN0ZWQ9eyEhdGhpcy5wcm9wcy5hZGRlZFBsYXllcnNbcGxheWVyLl9pZF19PlxuICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICB7XG4gICAgICAgICAgIXRoaXMucHJvcHMuZGVsZXRlUGxheWVyID8gXCJcIiA6XG4gICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIocGxheWVyLl9pZCl9XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICB0b29sdGlwPVwiUmVtb3ZlIFBsYXllclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgfVxuICAgICAgPC9UYWJsZVJvdz4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWJsZS10aXRsZVwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbXVsdGlTZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uQ2VsbENsaWNrPXsoaSwgY29sLCBlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+TmFtZTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIgJiYgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgICBkaXNwbGF5Um93Q2hlY2tCb3g9e3RoaXMucHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICAgIGRlc2VsZWN0T25DbGlja2F3YXk9e0Jvb2xlYW4oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgcGxheWVyTGlzdCB9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFkZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==