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
	      _this.setState({ input: e.target.value.toLowerCase() });
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
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, this.props.title), _react2.default.createElement(_TextField2.default, {
	        hintText: "Start typing...",
	        onChange: this.handleUpdateInput,
	        floatingLabelText: "Search for a player",
	        fullWidth: Boolean(true)
	      }), _react2.default.createElement(_Table.Table, {
	        height: "400px",
	        fixedHeader: Boolean(true),
	        selectable: Boolean(true),
	        multiSelectable: Boolean(true),
	        onCellClick: function onCellClick(i, col, e) {
	          return _this3.props.handleToggle(idRef[i], e);
	        }
	      }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"), _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBQ1g7O1dBTVIsb0JBQW9CLFVBQUMsR0FDbkI7YUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sTUFDakM7QUFQQzs7V0FBSztjQUNJO0FBQVA7WUFFSDs7Ozs7K0JBTVMsUUFBUTtvQkFDaEI7O2NBQVEsaURBQVUsS0FBSyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsS0FBSyxNQUFNLGFBQWEsT0FBTyxRQUM1RSwyREFBaUIsT0FBTyxPQUN4QiwyREFBaUIsT0FBTyx5QkFDeEIsMkRBQ0U7a0JBQ1c7a0JBQU0sT0FBSyxNQUFNLGFBQWEsT0FBTztBQUM5Qzt3QkFDQTtrQkFBUTtBQUZSLFFBREYsRUFLRSwrQ0FJUCxNQVZHOzs7OzhCQVdLO29CQUNQOztXQUFNLFVBQVUsS0FBSyxNQUNyQjtXQUFNLFFBQVEsS0FBSyxNQUNuQjtXQUFNLFFBQ047V0FBTSxhQUVOOztZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksVUFBVSxNQUFNLFdBQVcsVUFBVSxJQUN2QztBQUNEO0FBQ0Q7YUFBTSxTQUFTLFFBQ2Y7YUFBSSxPQUFPLEtBQUssY0FBYyxRQUFRLFNBQVMsQ0FBQyxHQUM5QztpQkFBTSxLQUFLLE9BQ1g7c0JBQVcsS0FBSyxLQUFLLFVBQ3RCO0FBQ0Y7QUFFRDs7OEJBQ0UsMkJBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsS0FBSyxNQUFNO21CQUd2QzttQkFBVSxLQUNWOzRCQUNBO29CQUFXLFFBQVE7QUFIbkIsUUFERixDQUZGLGtCQVFFO2lCQUVFO3NCQUFhLFFBQ2I7cUJBQVksUUFDWjswQkFBaUIsUUFDakI7c0JBQWEscUJBQUMsR0FBRyxLQUFLLEdBQVQ7a0JBQWUsT0FBSyxNQUFNLGFBQWEsTUFBTSxJQUFJO0FBTGhFO0FBQ0UsUUFERixFQU9FLG9EQUFhLGtCQUFrQixTQUM3QixxREFDRSx1RUFDQSx5RUFDQSx3REFIRix5QkFNRjs2QkFDc0IsS0FBSyxNQUN6Qjt1QkFBYyxRQUNkOzhCQUFxQixRQUFRO0FBRjdCLFFBREYsRUFVUDs7Ozs7OztBQUdILFlBQVc7WUFDQSxpQkFDVDtpQkFBYyxpQkFDZDtpQkFBYyxpQkFDZDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO1VBQU8saUJBQVU7QUFMakI7O21CQVFhLFciLCJmaWxlIjoiMC5hOWFkMDNiMGVmZDMwZmZmZDNiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWRlcixcbiAgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93LCBUYWJsZVJvd0NvbHVtbiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJsZVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcblxuY2xhc3MgUGxheWVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIlxuICAgIH07XG4gIH1cblxuICBoYW5kbGVVcGRhdGVJbnB1dCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpIH0pO1xuICB9XG5cbiAgcGxheWVyUm93KHBsYXllcikge1xuICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17cGxheWVyLl9pZH0gc2VsZWN0ZWQ9eyEhdGhpcy5wcm9wcy5hZGRlZFBsYXllcnNbcGxheWVyLl9pZF19PlxuICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIubmFtZX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIucmF0aW5nfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVQbGF5ZXIocGxheWVyLl9pZCl9XG4gICAgICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICB0b29sdGlwPVwiUmVtb3ZlIFBsYXllclwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cbiAgICA8L1RhYmxlUm93Pik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnByb3BzLnBsYXllcnM7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnN0YXRlLmlucHV0O1xuICAgIGNvbnN0IGlkUmVmID0ge307XG4gICAgY29uc3QgcGxheWVyTGlzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXQgPT09IFwiXCIgfHwgcGxheWVyTGlzdC5sZW5ndGggPj0gMTUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW2ldO1xuICAgICAgaWYgKHBsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dCkgPiAtMSkge1xuICAgICAgICBpZFJlZltpXSA9IHBsYXllci5faWQ7XG4gICAgICAgIHBsYXllckxpc3QucHVzaCh0aGlzLnBsYXllclJvdyhwbGF5ZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRhYmxlLXRpdGxlXCI+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaGludFRleHQ9XCJTdGFydCB0eXBpbmcuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZUlucHV0fVxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VhcmNoIGZvciBhIHBsYXllclwiXG4gICAgICAgICAgZnVsbFdpZHRoPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgc2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25DZWxsQ2xpY2s9eyhpLCBjb2wsIGUpID0+IHRoaXMucHJvcHMuaGFuZGxlVG9nZ2xlKGlkUmVmW2ldLCBlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5OYW1lPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPlJhdGluZzwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbiAvPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgIGRpc3BsYXlSb3dDaGVja0JveD17dGhpcy5wcm9wcy5zZWxlY3RhYmxlfVxuICAgICAgICAgICAgc2hvd1Jvd0hvdmVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgICAgZGVzZWxlY3RPbkNsaWNrYXdheT17Qm9vbGVhbihmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyBwbGF5ZXJMaXN0IH1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGxheWVyTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWxldGVQbGF5ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFuZGxlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckxpc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BsYXllckxpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9