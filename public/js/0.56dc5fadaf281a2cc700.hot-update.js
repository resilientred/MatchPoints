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
	      players: []
	    };
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
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, this.props.title), _react2.default.createElement(_Table.Table, {
	        height: "400px",
	        fixedHeader: Boolean(true),
	        selectable: Boolean(true),
	        multiSelectable: Boolean(true),
	        onCellClick: function onCellClick(i, col, e) {
	          return props.handleToggle(idRef[i], e);
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
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07eUJBQ0o7O3VCQUFZLE9BQU87MkJBQUE7OytGQUVqQjs7V0FBSztnQkFDTTtBQUFUO1lBRUg7Ozs7O3lDQUdDO1lBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxRQUFRLE1BQU0sR0FDOUM7bUJBQVksWUFFWCxDQUZELEdBR0Q7Ozs7OEJBRVE7b0JBQ1A7O1dBQU0sVUFBVSxLQUFLLE1BQ3JCO1dBQU0sUUFDTjtXQUFNLHFCQUFxQixJQUFJLFVBQUMsUUFBUSxHQUN0QztlQUFNLEtBQUssT0FDWDtnQkFBUSxpREFBVSxLQUFLLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxPQUFLLE1BQU0sYUFBYSxPQUFPLFFBQzVFLDJEQUFpQixPQUFPLE9BQ3hCLDJEQUFpQixPQUFPLFNBRXRCLENBQUMsTUFBTSxlQUFlLHFCQUNwQiwyREFDRTtvQkFDVztvQkFBTSxNQUFNLGFBQWEsT0FBTztBQUN6QzswQkFDQTtvQkFBUTtBQUZSLFVBREYsRUFLRSwrQ0FLWCxNQVhPO0FBYVIsUUFwQm1COztjQXFCakIsMkNBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsS0FBSyxNQUFNLHdCQUN6QztpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE1BQU0sYUFBYSxNQUFNLElBQUk7QUFMM0Q7QUFDRSxRQURGLEVBT0Usb0RBQWEsa0JBQWtCLFNBQzdCLHFEQUNFLHVFQUNBLHlFQUVFLEtBQUssTUFBTSxnQkFBZ0Isd0RBSi9CLHlCQVFGOzZCQUNzQixLQUFLLE1BQ3pCO3VCQUFjLFFBQ2Q7OEJBQXFCLFFBQVE7QUFGN0IsUUFERixFQVVQOzs7Ozs7O0FBR0gsWUFBVztZQUNBLGlCQUNUO2lCQUFjLGlCQUNkO2VBQVksaUJBQ1o7aUJBQWMsaUJBQ2Q7VUFBTyxpQkFBVTtBQUpqQjs7bUJBT2EsVyIsImZpbGUiOiIwLjU2ZGM1ZmFkYWYyODFhMmNjNzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcblxuY2xhc3MgUGxheWVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5ZXJzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLnBsYXllcnMgPSB0aGlzLnByb3BzLnBsYXllcnMuc2xpY2UoMCwgMjApO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcblxuICAgIH0sIDUwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5wcm9wcy5wbGF5ZXJzO1xuICAgIGNvbnN0IGlkUmVmID0ge307XG4gICAgY29uc3QgcGxheWVyTGlzdCA9IHBsYXllcnMubWFwKChwbGF5ZXIsIGkpID0+IHtcbiAgICAgIGlkUmVmW2ldID0gcGxheWVyLl9pZDtcbiAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17cGxheWVyLl9pZH0gc2VsZWN0ZWQ9eyEhdGhpcy5wcm9wcy5hZGRlZFBsYXllcnNbcGxheWVyLl9pZF19PlxuICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICB7XG4gICAgICAgICAgIXByb3BzLmRlbGV0ZVBsYXllciA/IFwiXCIgOlxuICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZVBsYXllcihwbGF5ZXIuX2lkKX1cbiAgICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgUGxheWVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICB9XG4gICAgICA8L1RhYmxlUm93Pik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRhYmxlLXRpdGxlXCI+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgc2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25DZWxsQ2xpY2s9eyhpLCBjb2wsIGUpID0+IHByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+TmFtZTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIgJiYgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgICBkaXNwbGF5Um93Q2hlY2tCb3g9e3RoaXMucHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICAgIGRlc2VsZWN0T25DbGlja2F3YXk9e0Jvb2xlYW4oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgcGxheWVyTGlzdCB9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlbGV0ZVBsYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=