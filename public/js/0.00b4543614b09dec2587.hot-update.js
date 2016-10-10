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
	
	var _TextField = __webpack_require__(497);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
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
	
	    _this.handleUpdateInput = function (e) {
	      _this.setState({ input: e.target.value });
	    };
	
	    _this.state = {
	      input: ""
	    };
	    return _this;
	  }
	
	  _createClass(PlayerList, [{
	    key: "playerRow",
	    value: function playerRow(player) {
	      var _this2 = this;
	
	      return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!this.props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
	        onClick: function onClick() {
	          return _this2.props.deletePlayer(player._id);
	        },
	        iconClassName: "material-icons",
	        tooltip: "Remove Player"
	      }, _react2.default.createElement(_close2.default, null))));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      var players = this.props.players;
	      var input = this.state.input;
	      var idRef = {};
	      var playerList = [];
	
	      for (var i = 0; i < players.length; i++) {
	        if (input === "" || playerList.length >= 15) {
	          break;
	        }
	        var player = players[i];
	        if (player.name.toLowerCase().indexOf(input) > -1) {
	          idRef[i] = player._id;
	          playerList.push(this.playerRow(player));
	        }
	      }
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, this.props.title), _react2.default.createElement(_Table.Table, {
	        height: "400px",
	        fixedHeader: Boolean(true),
	        selectable: Boolean(true),
	        multiSelectable: Boolean(true),
	        onCellClick: function onCellClick(i, col, e) {
	          return _this3.props.handleToggle(idRef[i], e);
	        }
	      }, _react2.default.createElement(_Table.TableHeader, null, _react2.default.createElement(_Table.TableRow, null, this.props.deletePlayer && _react2.default.createElement(_TextField2.default, {
	        hintText: "Start typing...",
	        onChange: this.handleUpdateInput,
	        floatingLabelText: "Search for a player",
	        fullWidth: Boolean(true)
	      }))), _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"), _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, {
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
	  addedPlayers: _react.PropTypes.object,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBQ1g7O1dBTVIsb0JBQW9CLFVBQUMsR0FDbkI7YUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQzFCO0FBUEM7O1dBQUs7Y0FDSTtBQUFQO1lBRUg7Ozs7OytCQU1TLFFBQVE7b0JBQ2hCOztjQUFRLGlEQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLEtBQUssTUFBTSxhQUFhLE9BQU8sUUFDNUUsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU8seUJBQ3hCLDJEQUNFO2tCQUNXO2tCQUFNLE9BQUssTUFBTSxhQUFhLE9BQU87QUFDOUM7d0JBQ0E7a0JBQVE7QUFGUixRQURGLEVBS0UsK0NBSVAsTUFWRzs7Ozs4QkFXSztvQkFDUDs7V0FBTSxVQUFVLEtBQUssTUFDckI7V0FBTSxRQUFRLEtBQUssTUFDbkI7V0FBTSxRQUNOO1dBQU0sYUFFTjs7WUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUNsQzthQUFJLFVBQVUsTUFBTSxXQUFXLFVBQVUsSUFDdkM7QUFDRDtBQUNEO2FBQU0sU0FBUyxRQUNmO2FBQUksT0FBTyxLQUFLLGNBQWMsUUFBUSxTQUFTLENBQUMsR0FDOUM7aUJBQU0sS0FBSyxPQUNYO3NCQUFXLEtBQUssS0FBSyxVQUN0QjtBQUNGO0FBRUQ7O2NBQ0UsMkNBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsS0FBSyxNQUFNLHdCQUN6QztpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE9BQUssTUFBTSxhQUFhLE1BQU0sSUFBSTtBQUxoRTtBQUNFLFFBREYsRUFPRSx3RUFDRSxxQ0FFSSxLQUFLLE1BQU07bUJBR1A7bUJBQVUsS0FDVjs0QkFDQTtvQkFBVyxRQUFRO0FBSG5CLFFBREYsQ0FITixJQVlGLG9EQUFhLGtCQUFrQixTQUM3QixxREFDRSx1RUFDQSx5RUFDQSx3REFIRix5QkFNRjs2QkFDc0IsS0FBSyxNQUN6Qjt1QkFBYyxRQUNkOzhCQUFxQixRQUFRO0FBRjdCLFFBREYsRUFVUDs7Ozs7OztBQUdILFlBQVc7WUFDQSxpQkFDVDtpQkFBYyxpQkFDZDtpQkFBYyxpQkFDZDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO1VBQU8saUJBQVU7QUFMakI7O21CQVFhLFciLCJmaWxlIjoiMC4wMGI0NTQzNjE0YjA5ZGVjMjU4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWRlcixcbiAgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93LCBUYWJsZVJvd0NvbHVtbiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJsZVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcblxuY2xhc3MgUGxheWVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIlxuICAgIH07XG4gIH1cblxuICBoYW5kbGVVcGRhdGVJbnB1dCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHBsYXllclJvdyhwbGF5ZXIpIHtcbiAgICByZXR1cm4gKDxUYWJsZVJvdyBrZXk9e3BsYXllci5faWR9IHNlbGVjdGVkPXshIXRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzW3BsYXllci5faWRdfT5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLm5hbWV9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgPFRhYmxlUm93Q29sdW1uPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlUGxheWVyKHBsYXllci5faWQpfVxuICAgICAgICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgdG9vbHRpcD1cIlJlbW92ZSBQbGF5ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvVGFibGVSb3dDb2x1bW4+XG4gICAgPC9UYWJsZVJvdz4pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5wcm9wcy5wbGF5ZXJzO1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zdGF0ZS5pbnB1dDtcbiAgICBjb25zdCBpZFJlZiA9IHt9O1xuICAgIGNvbnN0IHBsYXllckxpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0ID09PSBcIlwiIHx8IHBsYXllckxpc3QubGVuZ3RoID49IDE1KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1tpXTtcbiAgICAgIGlmIChwbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQpID4gLTEpIHtcbiAgICAgICAgaWRSZWZbaV0gPSBwbGF5ZXIuX2lkO1xuICAgICAgICBwbGF5ZXJMaXN0LnB1c2godGhpcy5wbGF5ZXJSb3cocGxheWVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWJsZS10aXRsZVwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbXVsdGlTZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uQ2VsbENsaWNrPXsoaSwgY29sLCBlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZVBsYXllciAmJlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIlN0YXJ0IHR5cGluZy4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlYXJjaCBmb3IgYSBwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+UmF0aW5nPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgZGlzcGxheVJvd0NoZWNrQm94PXt0aGlzLnByb3BzLnNlbGVjdGFibGV9XG4gICAgICAgICAgICBzaG93Um93SG92ZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgICBkZXNlbGVjdE9uQ2xpY2thd2F5PXtCb29sZWFuKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHBsYXllckxpc3QgfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QbGF5ZXJMaXN0LnByb3BUeXBlcyA9IHtcbiAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICBhZGRlZFBsYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRlbGV0ZVBsYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=