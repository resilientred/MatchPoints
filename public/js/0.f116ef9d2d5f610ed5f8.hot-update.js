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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFDSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBQ1g7O1dBTVIsb0JBQW9CLFVBQUMsR0FDbkI7YUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQzFCO0FBUEM7O1dBQUs7Y0FDSTtBQUFQO1lBRUg7Ozs7OytCQU1TLFFBQVE7b0JBQ2hCOztjQUFRLGlEQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLEtBQUssTUFBTSxhQUFhLE9BQU8sUUFDNUUsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU8seUJBQ3hCLDJEQUNFO2tCQUNXO2tCQUFNLE9BQUssTUFBTSxhQUFhLE9BQU87QUFDOUM7d0JBQ0E7a0JBQVE7QUFGUixRQURGLEVBS0UsK0NBSVAsTUFWRzs7Ozs4QkFXSztvQkFDUDs7V0FBTSxVQUFVLEtBQUssTUFDckI7V0FBTSxRQUFRLEtBQUssTUFDbkI7V0FBTSxRQUNOO1dBQU0sYUFFTjs7WUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUNsQzthQUFJLFVBQVUsTUFBTSxXQUFXLFVBQVUsSUFDdkM7QUFDRDtBQUNEO2FBQU0sU0FBUyxRQUNmO2FBQUksT0FBTyxLQUFLLGNBQWMsUUFBUSxTQUFTLENBQUMsR0FDOUM7aUJBQU0sS0FBSyxPQUNYO3NCQUFXLEtBQUssS0FBSyxVQUN0QjtBQUNGO0FBRUQ7OzhCQUNFLDJCQUNFLHNDQUFJLFdBQVUsaUJBQWdCLEtBQUssTUFBTTttQkFHdkM7bUJBQVUsS0FDVjs0QkFDQTtvQkFBVyxRQUFRO0FBSG5CLFFBREYsQ0FGRixrQkFRRTtpQkFFRTtzQkFBYSxRQUNiO3FCQUFZLFFBQ1o7MEJBQWlCLFFBQ2pCO3NCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2tCQUFlLE9BQUssTUFBTSxhQUFhLE1BQU0sSUFBSTtBQUxoRTtBQUNFLFFBREYsRUFPRSxvREFBYSxrQkFBa0IsU0FDN0IscURBQ0UsdUVBQ0EseUVBQ0Esd0RBSEYseUJBTUY7NkJBQ3NCLEtBQUssTUFDekI7dUJBQWMsUUFDZDs4QkFBcUIsUUFBUTtBQUY3QixRQURGLEVBVVA7Ozs7Ozs7QUFHSCxZQUFXO1lBQ0EsaUJBQ1Q7aUJBQWMsaUJBQ2Q7aUJBQWMsaUJBQ2Q7ZUFBWSxpQkFDWjtpQkFBYyxpQkFDZDtVQUFPLGlCQUFVO0FBTGpCOzttQkFRYSxXIiwiZmlsZSI6IjAuZjExNmVmOWQyZDVmNjEwZWQ1ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2Nsb3NlXCI7XG5cbmNsYXNzIFBsYXllckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlSW5wdXQgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBwbGF5ZXJSb3cocGxheWVyKSB7XG4gICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtwbGF5ZXIuX2lkfSBzZWxlY3RlZD17ISF0aGlzLnByb3BzLmFkZGVkUGxheWVyc1twbGF5ZXIuX2lkXX0+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZVBsYXllcihwbGF5ZXIuX2lkKX1cbiAgICAgICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgUGxheWVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L1RhYmxlUm93Q29sdW1uPlxuICAgIDwvVGFibGVSb3c+KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMucGxheWVycztcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc3RhdGUuaW5wdXQ7XG4gICAgY29uc3QgaWRSZWYgPSB7fTtcbiAgICBjb25zdCBwbGF5ZXJMaXN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dCA9PT0gXCJcIiB8fCBwbGF5ZXJMaXN0Lmxlbmd0aCA+PSAxNSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaV07XG4gICAgICBpZiAocGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0KSA+IC0xKSB7XG4gICAgICAgIGlkUmVmW2ldID0gcGxheWVyLl9pZDtcbiAgICAgICAgcGxheWVyTGlzdC5wdXNoKHRoaXMucGxheWVyUm93KHBsYXllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFibGUtdGl0bGVcIj57IHRoaXMucHJvcHMudGl0bGUgfTwvaDM+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBoaW50VGV4dD1cIlN0YXJ0IHR5cGluZy4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBkYXRlSW5wdXR9XG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJTZWFyY2ggZm9yIGEgcGxheWVyXCJcbiAgICAgICAgICBmdWxsV2lkdGg9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBmaXhlZEhlYWRlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG11bHRpU2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBvbkNlbGxDbGljaz17KGksIGNvbCwgZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUb2dnbGUoaWRSZWZbaV0sIGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+UmF0aW5nPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgZGlzcGxheVJvd0NoZWNrQm94PXt0aGlzLnByb3BzLnNlbGVjdGFibGV9XG4gICAgICAgICAgICBzaG93Um93SG92ZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgICBkZXNlbGVjdE9uQ2xpY2thd2F5PXtCb29sZWFuKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHBsYXllckxpc3QgfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QbGF5ZXJMaXN0LnByb3BUeXBlcyA9IHtcbiAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICBhZGRlZFBsYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRlbGV0ZVBsYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=