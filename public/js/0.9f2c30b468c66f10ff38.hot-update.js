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
	          console.log(player);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBQ1g7O1dBTVIsb0JBQW9CLFVBQUMsR0FDbkI7YUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sTUFDakM7QUFQQzs7V0FBSztjQUNJO0FBQVA7WUFFSDs7Ozs7K0JBTVMsUUFBUTtvQkFDaEI7O2NBQVEsaURBQVUsS0FBSyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsS0FBSyxNQUFNLGFBQWEsT0FBTyxRQUM1RSwyREFBaUIsT0FBTyxPQUN4QiwyREFBaUIsT0FBTyx5QkFDeEIsMkRBQ0U7a0JBQ1c7a0JBQU0sT0FBSyxNQUFNLGFBQWEsT0FBTztBQUM5Qzt3QkFDQTtrQkFBUTtBQUZSLFFBREYsRUFLRSwrQ0FJUCxNQVZHOzs7OzhCQVdLO29CQUNQOztXQUFNLFVBQVUsS0FBSyxNQUNyQjtXQUFNLFFBQVEsS0FBSyxNQUNuQjtXQUFNLFFBQ047V0FBTSxhQUVOOztZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksVUFBVSxNQUFNLFdBQVcsVUFBVSxJQUN2QztBQUNEO0FBQ0Q7YUFBTSxTQUFTLFFBQ2Y7YUFBSSxPQUFPLEtBQUssY0FBYyxRQUFRLFNBQVMsQ0FBQyxHQUM5QzttQkFBUSxJQUNSO2lCQUFNLEtBQUssT0FDWDtzQkFBVyxLQUFLLEtBQUssVUFDdEI7QUFDRjtBQUVEOzs4QkFDRSwyQkFDRSxzQ0FBSSxXQUFVLGlCQUFnQixLQUFLLE1BQU07bUJBR3ZDO21CQUFVLEtBQ1Y7NEJBQ0E7b0JBQVcsUUFBUTtBQUhuQixRQURGLENBRkYsa0JBUUU7aUJBRUU7c0JBQWEsUUFDYjtxQkFBWSxRQUNaOzBCQUFpQixRQUNqQjtzQkFBYSxxQkFBQyxHQUFHLEtBQUssR0FBVDtrQkFBZSxPQUFLLE1BQU0sYUFBYSxNQUFNLElBQUk7QUFMaEU7QUFDRSxRQURGLEVBT0Usb0RBQWEsa0JBQWtCLFNBQzdCLHFEQUNFLHVFQUNBLHlFQUNBLHdEQUhGLHlCQU1GOzZCQUNzQixLQUFLLE1BQ3pCO3VCQUFjLFFBQ2Q7OEJBQXFCLFFBQVE7QUFGN0IsUUFERixFQVVQOzs7Ozs7O0FBR0gsWUFBVztZQUNBLGlCQUNUO2lCQUFjLGlCQUNkO2lCQUFjLGlCQUNkO2VBQVksaUJBQ1o7aUJBQWMsaUJBQ2Q7VUFBTyxpQkFBVTtBQUxqQjs7bUJBUWEsVyIsImZpbGUiOiIwLjlmMmMzMGI0NjhjNjZmMTBmZjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvVGV4dEZpZWxkXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcInJlYWN0LWljb25zL2xpYi9tZC9jbG9zZVwiO1xuXG5jbGFzcyBQbGF5ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZUlucHV0ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgfSk7XG4gIH1cblxuICBwbGF5ZXJSb3cocGxheWVyKSB7XG4gICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtwbGF5ZXIuX2lkfSBzZWxlY3RlZD17ISF0aGlzLnByb3BzLmFkZGVkUGxheWVyc1twbGF5ZXIuX2lkXX0+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZVBsYXllcihwbGF5ZXIuX2lkKX1cbiAgICAgICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgUGxheWVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L1RhYmxlUm93Q29sdW1uPlxuICAgIDwvVGFibGVSb3c+KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMucGxheWVycztcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc3RhdGUuaW5wdXQ7XG4gICAgY29uc3QgaWRSZWYgPSB7fTtcbiAgICBjb25zdCBwbGF5ZXJMaXN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dCA9PT0gXCJcIiB8fCBwbGF5ZXJMaXN0Lmxlbmd0aCA+PSAxNSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaV07XG4gICAgICBpZiAocGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0KSA+IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcilcbiAgICAgICAgaWRSZWZbaV0gPSBwbGF5ZXIuX2lkO1xuICAgICAgICBwbGF5ZXJMaXN0LnB1c2godGhpcy5wbGF5ZXJSb3cocGxheWVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWJsZS10aXRsZVwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGhpbnRUZXh0PVwiU3RhcnQgdHlwaW5nLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVcGRhdGVJbnB1dH1cbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlYXJjaCBmb3IgYSBwbGF5ZXJcIlxuICAgICAgICAgIGZ1bGxXaWR0aD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbXVsdGlTZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uQ2VsbENsaWNrPXsoaSwgY29sLCBlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+TmFtZTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gLz5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgICBkaXNwbGF5Um93Q2hlY2tCb3g9e3RoaXMucHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICAgIGRlc2VsZWN0T25DbGlja2F3YXk9e0Jvb2xlYW4oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgcGxheWVyTGlzdCB9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFkZGVkUGxheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==