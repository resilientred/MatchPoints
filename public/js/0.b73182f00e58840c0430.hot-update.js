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
	
	    _this.state.players = [];
	    return _this;
	  }
	
	  _createClass(PlayerList, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.state.players = this.props.players.slice(0, 20);
	      setInterval(function () {}, 500);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var players = this.props.players;
	      var idRef = {};
	      var playerList = players.map(function (player, i) {
	        idRef[i] = player._id;
	        return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!_this2.props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), !props.deletePlayer ? "" : _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
	          onClick: function onClick() {
	            return props.deletePlayer(player._id);
	          },
	          iconClassName: "material-icons",
	          tooltip: "Remove Player"
	        }, _react2.default.createElement(_close2.default, null))));
	      });
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, props.title), _react2.default.createElement(_Table.Table, {
	        height: "400px",
	        fixedHeader: Boolean(true),
	        selectable: Boolean(true),
	        multiSelectable: Boolean(true),
	        onCellClick: function onCellClick(i, col, e) {
	          return props.handleToggle(idRef[i], e);
	        }
	      }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"), props.deletePlayer && _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, {
	        displayRowCheckBox: props.selectable,
	        showRowHover: Boolean(true),
	        deselectOnClickaway: Boolean(false)
	      }, playerList)));
	    }
	  }]);
	
	  return PlayerList;
	}(_react.Component);
	
	PlayerList.propTypes = {
	  players: _react.PropTypes.array,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanM/YzNiZSIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBTSxRQUFRLEVBQUUsVUFBVTs7QUFFMUIsS0FBTSxjQUFjOzBCQUNqQix1QkFBSyxXQUFVLGtCQUNkLG1EQUFTLE9BQU87Y0FFTCxNQUNUO21CQUFjLE1BQ2Q7WUFDQTtpQkFBWSxRQUNaO21CQUFjLE1BQ2Q7bUJBQWMsTUFBTTtBQUxwQixJQURGLENBRkQsRUFVQyxtREFBUyxPQUFPO2NBRUwsTUFDVDttQkFBYyxNQUNkO1lBQ0E7aUJBQ0E7bUJBQWMsTUFBTTtBQUpwQixJQURGLEdBT0EsbURBQVMsT0FBTztBQW5CcEI7O0FBdUJBLGFBQVk7ZUFDRSxpQkFDWjtpQkFBYyxpQkFDZDtvQkFBaUIsaUJBQ2pCO2lCQUFjLGlCQUNkO2lCQUFjLGlCQUFVO0FBSnhCOzttQkFPYSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNmOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBRWpCOztXQUFLLE1BQU0sVUFBVTtZQUN0Qjs7Ozs7eUNBR0M7WUFBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFFBQVEsTUFBTSxHQUM5QzttQkFBWSxZQUVYLENBRkQsR0FHRDs7Ozs4QkFFUTtvQkFDUDs7V0FBTSxVQUFVLEtBQUssTUFDckI7V0FBTSxRQUNOO1dBQU0scUJBQXFCLElBQUksVUFBQyxRQUFRLEdBQ3RDO2VBQU0sS0FBSyxPQUNYO2dCQUFRLGlEQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQUssTUFBTSxhQUFhLE9BQU8sUUFDNUUsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU8sU0FFdEIsQ0FBQyxNQUFNLGVBQWUscUJBQ3BCLDJEQUNFO29CQUNXO29CQUFNLE1BQU0sYUFBYSxPQUFPO0FBQ3pDOzBCQUNBO29CQUFRO0FBRlIsVUFERixFQUtFLCtDQUtYLE1BWE87QUFhUixRQXBCbUI7O2NBcUJqQiwyQ0FDRSxzQ0FBSSxXQUFVLGlCQUFnQixNQUFNLHdCQUNwQztpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE1BQU0sYUFBYSxNQUFNLElBQUk7QUFMM0Q7QUFDRSxRQURGLEVBT0Usb0RBQWEsa0JBQWtCLFNBQzdCLHFEQUNFLHVFQUNBLHlFQUVFLE1BQU0sZ0JBQWdCLHdEQUoxQix5QkFRRjs2QkFDc0IsTUFDcEI7dUJBQWMsUUFDZDs4QkFBcUIsUUFBUTtBQUY3QixRQURGLEVBVVA7Ozs7Ozs7QUFHSCxZQUFXO1lBQ0EsaUJBQ1Q7aUJBQWMsaUJBQ2Q7ZUFBWSxpQkFDWjtpQkFBYyxpQkFDZDtVQUFPLGlCQUFVO0FBSmpCOzttQkFPYSxXIiwiZmlsZSI6IjAuYjczMTgyZjAwZTU4ODQwYzA0MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgUGxheWVyTGlzdCBmcm9tIFwiLi9wbGF5ZXJMaXN0XCI7XG5cbmNvbnN0IHN0eWxlID0geyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH07XG5cbmNvbnN0IFBsYXllckdyb3VwID0gcHJvcHMgPT4gKFxuICAoPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbGlzdHNcIj5cbiAgICA8RGl2aWRlciBzdHlsZT17c3R5bGV9IC8+XG4gICAgPFBsYXllckxpc3RcbiAgICAgIHBsYXllcnM9e3Byb3BzLmFsbFBsYXllcnN9XG4gICAgICBoYW5kbGVUb2dnbGU9e3Byb3BzLmhhbmRsZVRvZ2dsZX1cbiAgICAgIHRpdGxlPVwiQWxsIFBsYXllcnNcIlxuICAgICAgc2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgIGFkZGVkUGxheWVycz17cHJvcHMub2JqQWRkZWRQbGF5ZXJzfVxuICAgICAgZGVsZXRlUGxheWVyPXtwcm9wcy5kZWxldGVQbGF5ZXJ9XG4gICAgLz5cbiAgICA8RGl2aWRlciBzdHlsZT17c3R5bGV9IC8+XG4gICAgPFBsYXllckxpc3RcbiAgICAgIHBsYXllcnM9e3Byb3BzLmFkZGVkUGxheWVyc31cbiAgICAgIGhhbmRsZVRvZ2dsZT17cHJvcHMuaGFuZGxlVG9nZ2xlfVxuICAgICAgdGl0bGU9XCJTZWxlY3RlZCBQbGF5ZXJzXCJcbiAgICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgYWRkZWRQbGF5ZXJzPXtwcm9wcy5vYmpBZGRlZFBsYXllcnN9XG4gICAgLz5cbiAgICA8RGl2aWRlciBzdHlsZT17c3R5bGV9IC8+XG4gIDwvZGl2Pilcbik7XG5cblBsYXllckdyb3VwLnByb3BUeXBlcyA9IHtcbiAgYWxsUGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvYmpBZGRlZFBsYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRlbGV0ZVBsYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGFkZGVkUGxheWVyczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJHcm91cDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGFydGljaXBhbnRzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWRlcixcbiAgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93LCBUYWJsZVJvd0NvbHVtbiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJsZVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2Nsb3NlXCI7XG5cbmNsYXNzIFBsYXllckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlLnBsYXllcnMgPSBbXTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc3RhdGUucGxheWVycyA9IHRoaXMucHJvcHMucGxheWVycy5zbGljZSgwLCAyMCk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG4gICAgfSwgNTAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnByb3BzLnBsYXllcnM7XG4gICAgY29uc3QgaWRSZWYgPSB7fTtcbiAgICBjb25zdCBwbGF5ZXJMaXN0ID0gcGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4ge1xuICAgICAgaWRSZWZbaV0gPSBwbGF5ZXIuX2lkO1xuICAgICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtwbGF5ZXIuX2lkfSBzZWxlY3RlZD17ISF0aGlzLnByb3BzLmFkZGVkUGxheWVyc1twbGF5ZXIuX2lkXX0+XG4gICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLm5hbWV9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIucmF0aW5nfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIHtcbiAgICAgICAgICAhcHJvcHMuZGVsZXRlUGxheWVyID8gXCJcIiA6XG4gICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlUGxheWVyKHBsYXllci5faWQpfVxuICAgICAgICAgICAgICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIlJlbW92ZSBQbGF5ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsb3NlIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIH1cbiAgICAgIDwvVGFibGVSb3c+KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFibGUtdGl0bGVcIj57IHByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgc2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25DZWxsQ2xpY2s9eyhpLCBjb2wsIGUpID0+IHByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+TmFtZTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGVsZXRlUGxheWVyICYmIDxUYWJsZUhlYWRlckNvbHVtbiAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgZGlzcGxheVJvd0NoZWNrQm94PXtwcm9wcy5zZWxlY3RhYmxlfVxuICAgICAgICAgICAgc2hvd1Jvd0hvdmVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgICAgZGVzZWxlY3RPbkNsaWNrYXdheT17Qm9vbGVhbihmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyBwbGF5ZXJMaXN0IH1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGxheWVyTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==