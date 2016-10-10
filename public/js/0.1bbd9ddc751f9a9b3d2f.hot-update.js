webpackHotUpdate(0,{

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
	          var modPlayers = this.state.players.concat(this.props.players.slice(length, length + 20));
	          this.setState({
	            counter: this.state.counter + 20,
	            players: modPlayers
	          });
	
	          if (counter >= length(this.props.players)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07eUJBQ0o7O3VCQUFZLE9BQU87MkJBQUE7OytGQUVqQjs7V0FBSztnQkFFSDtnQkFBUztBQURUO1lBR0g7Ozs7O3lDQUdDO1lBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxRQUFRLE1BQU0sR0FDOUM7V0FBTSx1QkFBdUIsWUFDMUI7c0JBQ0M7ZUFBTSxTQUFTLEtBQUssTUFBTSxRQUMxQjtlQUFNLGFBQWEsS0FBSyxNQUFNLFFBQzNCLE9BQU8sS0FBSyxNQUFNLFFBQ2hCLE1BQU0sUUFBUSxTQUVuQjtnQkFBSztzQkFDTSxLQUFLLE1BQU0sVUFDcEI7c0JBR0Y7QUFKRTs7ZUFJRSxXQUFXLE9BQU8sS0FBSyxNQUFNLFVBQy9COzJCQUNEO0FBQ0Y7QUFDRjtBQWhCZ0IsVUFpQmxCOzs7OzhCQUVRO29CQUNQOztXQUFNLFVBQVUsS0FBSyxNQUNyQjtXQUFNLFFBQ047V0FBTSxxQkFBcUIsSUFBSSxVQUFDLFFBQVEsR0FDdEM7ZUFBTSxLQUFLLE9BQ1g7Z0JBQVEsaURBQVUsS0FBSyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsT0FBSyxNQUFNLGFBQWEsT0FBTyxRQUM1RSwyREFBaUIsT0FBTyxPQUN4QiwyREFBaUIsT0FBTyxTQUV0QixDQUFDLE9BQUssTUFBTSxlQUFlLHFCQUN6QiwyREFDRTtvQkFDVztvQkFBTSxPQUFLLE1BQU0sYUFBYSxPQUFPO0FBQzlDOzBCQUNBO29CQUFRO0FBRlIsVUFERixFQUtFLCtDQUtYLE1BWE87QUFhUixRQXBCbUI7O2NBcUJqQiwyQ0FDRSxzQ0FBSSxXQUFVLGlCQUFnQixLQUFLLE1BQU0sd0JBQ3pDO2lCQUVFO3NCQUFhLFFBQ2I7cUJBQVksUUFDWjswQkFBaUIsUUFDakI7c0JBQWEscUJBQUMsR0FBRyxLQUFLLEdBQVQ7a0JBQWUsT0FBSyxNQUFNLGFBQWEsTUFBTSxJQUFJO0FBTGhFO0FBQ0UsUUFERixFQU9FLG9EQUFhLGtCQUFrQixTQUM3QixxREFDRSx1RUFDQSx5RUFFRSxLQUFLLE1BQU0sZ0JBQWdCLHdEQUovQix5QkFRRjs2QkFDc0IsS0FBSyxNQUN6Qjt1QkFBYyxRQUNkOzhCQUFxQixRQUFRO0FBRjdCLFFBREYsRUFVUDs7Ozs7OztBQUdILFlBQVc7WUFDQSxpQkFDVDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO2VBQVksaUJBQ1o7aUJBQWMsaUJBQ2Q7VUFBTyxpQkFBVTtBQUxqQjs7bUJBUWEsVyIsImZpbGUiOiIwLjFiYmQ5ZGRjNzUxZjlhOWIzZDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcblxuY2xhc3MgUGxheWVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgIGNvdW50ZXI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS5wbGF5ZXJzID0gdGhpcy5wcm9wcy5wbGF5ZXJzLnNsaWNlKDAsIDIwKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbW9kUGxheWVycyA9IHRoaXMuc3RhdGUucGxheWVyc1xuICAgICAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5wbGF5ZXJzXG4gICAgICAgICAgICAuc2xpY2UobGVuZ3RoLCBsZW5ndGggKyAyMClcbiAgICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAyMCxcbiAgICAgICAgICBwbGF5ZXJzOiBtb2RQbGF5ZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb3VudGVyID49IGxlbmd0aCh0aGlzLnByb3BzLnBsYXllcnMpKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzO1xuICAgIGNvbnN0IGlkUmVmID0ge307XG4gICAgY29uc3QgcGxheWVyTGlzdCA9IHBsYXllcnMubWFwKChwbGF5ZXIsIGkpID0+IHtcbiAgICAgIGlkUmVmW2ldID0gcGxheWVyLl9pZDtcbiAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17cGxheWVyLl9pZH0gc2VsZWN0ZWQ9eyEhdGhpcy5wcm9wcy5hZGRlZFBsYXllcnNbcGxheWVyLl9pZF19PlxuICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICB7XG4gICAgICAgICAgIXRoaXMucHJvcHMuZGVsZXRlUGxheWVyID8gXCJcIiA6XG4gICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIocGxheWVyLl9pZCl9XG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICB0b29sdGlwPVwiUmVtb3ZlIFBsYXllclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgfVxuICAgICAgPC9UYWJsZVJvdz4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWJsZS10aXRsZVwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbXVsdGlTZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uQ2VsbENsaWNrPXsoaSwgY29sLCBlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+TmFtZTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIgJiYgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgICBkaXNwbGF5Um93Q2hlY2tCb3g9e3RoaXMucHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICAgIGRlc2VsZWN0T25DbGlja2F3YXk9e0Jvb2xlYW4oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgcGxheWVyTGlzdCB9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFkZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==