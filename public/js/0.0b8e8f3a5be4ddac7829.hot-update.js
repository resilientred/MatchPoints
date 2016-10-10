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
	      var _this2 = this;
	
	      this.state.players = this.props.players.slice(0, 20);
	      var interval = setInterval(function () {
	        (function slowLoad(self) {
	          var length = self.state.players.length;
	          var updatedCounter = self.state.counter + 20;
	          var modPlayers = self.state.players.concat(self.props.players.slice(length, length + 20));
	          self.setState({
	            counter: updatedCounter,
	            players: modPlayers
	          });
	
	          if (updatedCounter >= self.props.players.length) {
	            clearInterval(interval);
	          }
	        })(_this2);
	      }, 500);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      var players = this.state.players;
	      var idRef = {};
	      var playerList = players.map(function (player, i) {
	        idRef[i] = player._id;
	        return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!_this3.props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), !_this3.props.deletePlayer ? "" : _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
	          onClick: function onClick() {
	            return _this3.props.deletePlayer(player._id);
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
	          return _this3.props.handleToggle(idRef[i], e);
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
	  addedPlayers: _react.PropTypes.array,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07eUJBQ0o7O3VCQUFZLE9BQU87MkJBQUE7OytGQUVqQjs7V0FBSztnQkFFSDtnQkFBUztBQURUO1lBR0g7Ozs7O3lDQUVtQjtvQkFDbEI7O1lBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxRQUFRLE1BQU0sR0FDOUM7V0FBTSx1QkFBdUIsWUFDMUI7bUJBQVMsU0FBUyxNQUNqQjtlQUFNLFNBQVMsS0FBSyxNQUFNLFFBQzFCO2VBQU0saUJBQWlCLEtBQUssTUFBTSxVQUNsQztlQUFNLGFBQWEsS0FBSyxNQUFNLFFBQzNCLE9BQU8sS0FBSyxNQUFNLFFBQ2hCLE1BQU0sUUFBUSxTQUVuQjtnQkFBSztzQkFFSDtzQkFHRjtBQUpFOztlQUlFLGtCQUFrQixLQUFLLE1BQU0sUUFBUSxRQUN2QzsyQkFDRDtBQUNGO0FBZkEsWUFnQkY7QUFqQmdCLFVBa0JsQjs7Ozs4QkFFUTtvQkFDUDs7V0FBTSxVQUFVLEtBQUssTUFDckI7V0FBTSxRQUNOO1dBQU0scUJBQXFCLElBQUksVUFBQyxRQUFRLEdBQ3RDO2VBQU0sS0FBSyxPQUNYO2dCQUFRLGlEQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQUssTUFBTSxhQUFhLE9BQU8sUUFDNUUsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU8sU0FFdEIsQ0FBQyxPQUFLLE1BQU0sZUFBZSxxQkFDekIsMkRBQ0U7b0JBQ1c7b0JBQU0sT0FBSyxNQUFNLGFBQWEsT0FBTztBQUM5QzswQkFDQTtvQkFBUTtBQUZSLFVBREYsRUFLRSwrQ0FLWCxNQVhPO0FBYVIsUUFwQm1COztjQXFCakIsMkNBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsS0FBSyxNQUFNLHdCQUN6QztpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE9BQUssTUFBTSxhQUFhLE1BQU0sSUFBSTtBQUxoRTtBQUNFLFFBREYsRUFPRSxvREFBYSxrQkFBa0IsU0FDN0IscURBQ0UsdUVBQ0EseUVBRUUsS0FBSyxNQUFNLGdCQUFnQix3REFKL0IseUJBUUY7NkJBQ3NCLEtBQUssTUFDekI7dUJBQWMsUUFDZDs4QkFBcUIsUUFBUTtBQUY3QixRQURGLEVBVVA7Ozs7Ozs7QUFHSCxZQUFXO1lBQ0EsaUJBQ1Q7aUJBQWMsaUJBQ2Q7aUJBQWMsaUJBQ2Q7ZUFBWSxpQkFDWjtpQkFBYyxpQkFDZDtVQUFPLGlCQUFVO0FBTGpCOzttQkFRYSxXIiwiZmlsZSI6IjAuMGI4ZThmM2E1YmU0ZGRhYzc4MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcInJlYWN0LWljb25zL2xpYi9tZC9jbG9zZVwiO1xuXG5jbGFzcyBQbGF5ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXllcnM6IFtdLFxuICAgICAgY291bnRlcjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnBsYXllcnMgPSB0aGlzLnByb3BzLnBsYXllcnMuc2xpY2UoMCwgMjApO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgKGZ1bmN0aW9uIHNsb3dMb2FkKHNlbGYpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2VsZi5zdGF0ZS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdXBkYXRlZENvdW50ZXIgPSBzZWxmLnN0YXRlLmNvdW50ZXIgKyAyMDtcbiAgICAgICAgY29uc3QgbW9kUGxheWVycyA9IHNlbGYuc3RhdGUucGxheWVyc1xuICAgICAgICAgIC5jb25jYXQoc2VsZi5wcm9wcy5wbGF5ZXJzXG4gICAgICAgICAgICAuc2xpY2UobGVuZ3RoLCBsZW5ndGggKyAyMClcbiAgICAgICAgICApO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICBjb3VudGVyOiB1cGRhdGVkQ291bnRlcixcbiAgICAgICAgICBwbGF5ZXJzOiBtb2RQbGF5ZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGRhdGVkQ291bnRlciA+PSBzZWxmLnByb3BzLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0odGhpcykpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMuc3RhdGUucGxheWVycztcbiAgICBjb25zdCBpZFJlZiA9IHt9O1xuICAgIGNvbnN0IHBsYXllckxpc3QgPSBwbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiB7XG4gICAgICBpZFJlZltpXSA9IHBsYXllci5faWQ7XG4gICAgICByZXR1cm4gKDxUYWJsZVJvdyBrZXk9e3BsYXllci5faWR9IHNlbGVjdGVkPXshIXRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzW3BsYXllci5faWRdfT5cbiAgICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIubmFtZX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAge1xuICAgICAgICAgICF0aGlzLnByb3BzLmRlbGV0ZVBsYXllciA/IFwiXCIgOlxuICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlUGxheWVyKHBsYXllci5faWQpfVxuICAgICAgICAgICAgICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIlJlbW92ZSBQbGF5ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsb3NlIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIH1cbiAgICAgIDwvVGFibGVSb3c+KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFibGUtdGl0bGVcIj57IHRoaXMucHJvcHMudGl0bGUgfTwvaDM+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBmaXhlZEhlYWRlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG11bHRpU2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBvbkNlbGxDbGljaz17KGksIGNvbCwgZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUb2dnbGUoaWRSZWZbaV0sIGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+UmF0aW5nPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlUGxheWVyICYmIDxUYWJsZUhlYWRlckNvbHVtbiAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgZGlzcGxheVJvd0NoZWNrQm94PXt0aGlzLnByb3BzLnNlbGVjdGFibGV9XG4gICAgICAgICAgICBzaG93Um93SG92ZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgICBkZXNlbGVjdE9uQ2xpY2thd2F5PXtCb29sZWFuKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHBsYXllckxpc3QgfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QbGF5ZXJMaXN0LnByb3BUeXBlcyA9IHtcbiAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICBhZGRlZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==