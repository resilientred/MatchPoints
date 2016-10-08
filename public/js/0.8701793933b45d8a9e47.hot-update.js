webpackHotUpdate(0,{

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
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
	
	var _Tabs = __webpack_require__(510);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _recordTableEnter = __webpack_require__(700);
	
	var _recordTableEnter2 = _interopRequireDefault(_recordTableEnter);
	
	var _recordTableView = __webpack_require__(701);
	
	var _recordTableView2 = _interopRequireDefault(_recordTableView);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
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
	
	var RecordTable = function (_Component) {
	  _inherits(RecordTable, _Component);
	
	  function RecordTable(props) {
	    _classCallCheck(this, RecordTable);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordTable).call(this, props));
	
	    _this.handleCalculate = function () {
	      _this.props.updateScore(_this.calculateScore(), _this.props.groupNum - 1);
	    };
	
	    _this.changeTab = function (tab) {
	      _this.setState({ tab: tab });
	    };
	
	    _this.updateResult = function (i, j, k, e, idx, val) {
	      _this.state.result[i][j][k] = val;
	      _this.setState({
	        result: _this.state.result
	      });
	    };
	
	    _this.state = {
	      result: [].concat(_toConsumableArray(Array(_this.props.sizeOfGroup))).map(function () {
	        return [].concat(_toConsumableArray(Array(_this.props.sizeOfGroup))).map(function () {
	          return [0, 0];
	        });
	      }),
	      tab: 0
	    };
	    return _this;
	  }
	
	  _createClass(RecordTable, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate() {
	      if (this.props.groupNum && this.props.state && this.props.sizeOfGroup) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: "calculateScore",
	    value: function calculateScore() {
	      var joinedPlayers = this.props.joinedPlayers;
	      var playerIds = Object.keys(joinedPlayers);
	      var startIdx = this.props.start;
	      var calculatedScore = [];
	      var rc = {};
	
	      this.state.result.forEach(function (indRecord, i) {
	        var currentRecord = indRecord.map(function (record, j) {
	          if (j < i) return -calculatedScore[j][i];
	          if (i === j) return 0;
	
	          var sign = -1;
	          if (record[0] - record[1] === 0) {
	            sign = 0;
	          } else if (record[0] - record[1] > 0) {
	            sign = 1;
	          }
	
	          if (sign === 0) return 0;
	          var player1Id = playerIds[startIdx + i];
	          var player2Id = playerIds[startIdx + j];
	          var modifier = sign === 1 ? -record[1] * 2 : record[0] * 2;
	
	          var scoreAdjust = parseInt(16 * sign - (joinedPlayers[player1Id].rating - joinedPlayers[player2Id].rating) * sign * 0.04 + modifier, 10);
	
	          rc[player1Id] = {
	            change: rc[player1Id] ? rc[player1Id].change : 0 + scoreAdjust,
	            ratingBefore: +joinedPlayers[player1Id].rating
	          };
	          rc[player2Id] = {
	            change: rc[player2Id] ? rc[player2Id].change : 0 - scoreAdjust,
	            ratingBefore: +joinedPlayers[player2Id].rating
	          };
	          return scoreAdjust;
	        });
	        calculatedScore.push(currentRecord);
	      });
	      return [calculatedScore, rc];
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var finalized = _props.finalized;
	
	      var propsToPass = _objectWithoutProperties(_props, ["finalized"]);
	
	      if (finalized) {
	        return _react2.default.createElement("div", { style: { overflow: "scroll" } }, _react2.default.createElement(_recordTableView2.default, _extends({}, propsToPass, {
	          result: this.state.result
	        })));
	      }
	
	      return _react2.default.createElement("div", null, _react2.default.createElement(_FlatButton2.default, {
	        secondary: Boolean(true),
	        label: "Update",
	        onTouchTap: this.handleCalculate
	      }), _react2.default.createElement(_Tabs.Tabs, {
	        value: this.state.tab,
	        onChange: this.changeTab,
	        contentContainerStyle: {
	          padding: "20px",
	          border: "1px solid #E0E0E0",
	          overflow: "scroll"
	        }
	      }, _react2.default.createElement(_Tabs.Tab, { label: "Enter Result", value: 0 }, _react2.default.createElement(_recordTableEnter2.default, _extends({}, propsToPass, {
	        result: this.state.result,
	        updateResult: this.updateResult
	      }))), _react2.default.createElement(_Tabs.Tab, { label: "View Result", value: 1 }, _react2.default.createElement(_recordTableView2.default, _extends({}, propsToPass, { result: this.state.result })))));
	    }
	  }]);
	
	  return RecordTable;
	}(_react.Component);
	
	RecordTable.propTypes = {
	  updateScore: _react.PropTypes.func,
	  finalized: _react.PropTypes.bool,
	  sizeOfGroup: _react.PropTypes.number,
	  groupNum: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  state: _react.PropTypes.String,
	  joinedPlayers: _react.PropTypes.Object
	};
	exports.default = RecordTable;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZS5qcz85YzVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTswQkFVSjs7d0JBQVksT0FBTzsyQkFBQTs7Z0dBQ1g7O1dBY1Isa0JBQWtCLFlBQ2hCO2FBQUssTUFBTSxZQUFZLE1BQUssa0JBQWtCLE1BQUssTUFBTSxXQUMxRDtBQWpCa0I7O1dBa0JuQixZQUFZLFVBQUMsS0FDWDthQUFLLFNBQVMsRUFBRSxLQUNqQjtBQXBCa0I7O1dBK0RuQixlQUFlLFVBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQy9CO2FBQUssTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUN4QjthQUFLO2lCQUNLLE1BQUssTUFFaEI7QUFGRztBQWhFRjs7V0FBSzs0Q0FDUyxNQUFNLE1BQUssTUFBTSxlQUFjLElBQUk7NkNBQ3pDLE1BQU0sTUFBSyxNQUFNLGVBQWMsSUFBSTtrQkFBTSxDQUFDLEdBQUc7QUFBakQ7QUFDRixRQUZRO1lBRUg7QUFGTDtZQUlIOzs7Ozs2Q0FHQztXQUFJLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxhQUN4RDtnQkFDRDtBQUNEO2NBQ0Q7Ozs7c0NBUUM7V0FBTSxnQkFBZ0IsS0FBSyxNQUMzQjtXQUFNLFlBQVksT0FBTyxLQUN6QjtXQUFNLFdBQVcsS0FBSyxNQUN0QjtXQUFNLGtCQUNOO1dBQU0sS0FFTjs7WUFBSyxNQUFNLE9BQU8sUUFBUSxVQUFDLFdBQVcsR0FDcEM7YUFBTSwwQkFBMEIsSUFBSSxVQUFDLFFBQVEsR0FDM0M7ZUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUNuQztlQUFJLE1BQU0sR0FBRyxPQUViOztlQUFJLE9BQU8sQ0FDWDtlQUFJLE9BQU8sS0FBSyxPQUFPLE9BQU8sR0FDNUI7b0JBQ0Q7QUFGRCxrQkFFTyxJQUFJLE9BQU8sS0FBSyxPQUFPLEtBQUssR0FDakM7b0JBQ0Q7QUFFRDs7ZUFBSSxTQUFTLEdBQUcsT0FDaEI7ZUFBTSxZQUFZLFVBQVUsV0FDNUI7ZUFBTSxZQUFZLFVBQVUsV0FDNUI7ZUFBTSxXQUFXLFNBQVMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FFdEQ7O2VBQU0sY0FBYyxTQUFXLEtBQUssT0FDakMsQ0FBQyxjQUFjLFdBQVcsU0FBUyxjQUFjLFdBQVcsVUFDM0QsT0FBTyxPQUFTLFVBRXBCOztjQUFHO3FCQUNPLEdBQUcsYUFBYSxHQUFHLFdBQVcsU0FBUyxJQUMvQzsyQkFBYyxDQUFDLGNBQWMsV0FFL0I7QUFIRTtjQUdDO3FCQUNPLEdBQUcsYUFBYSxHQUFHLFdBQVcsU0FBUyxJQUMvQzsyQkFBYyxDQUFDLGNBQWMsV0FFL0I7QUFIRTtrQkFJSDtBQUNELFVBOUJzQjt5QkE4Qk4sS0FDakI7QUFDRDtjQUFPLENBQUMsaUJBQ1Q7Ozs7OEJBUVE7b0JBQytCLEtBQUs7V0FBbkM7O1dBQWMsZ0RBRXRCOztXQUFJLFdBQ0Y7Z0NBQVEsdUJBQUssT0FBTyxFQUFFLFVBQVUsb0ZBRXhCO21CQUNJLEtBQUssTUFHbEI7QUFISyxXQUZGLENBRE07QUFRVjs7OEJBQVE7b0JBRU8sUUFDWDtnQkFDQTtxQkFBWSxLQUFLO0FBRmpCLFFBREYsQ0FETSxrQkFNTjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjs7b0JBRUU7bUJBQ0E7cUJBQVU7QUFGVjtBQUhGLFFBREYsRUFTRSwyQ0FBSyxPQUFNLGdCQUFlLE9BQU8sNEVBRXpCO2lCQUNJLEtBQUssTUFDYjt1QkFBYyxLQUFLO0FBRG5CLFNBRkYsSUFNRiwyQ0FBSyxPQUFNLGVBQWMsT0FBTyxLQUM5QixzRUFBcUIsZUFBYSxRQUFRLEtBQUssTUFJdEQ7Ozs7Ozs7QUF2SEcsYUFDRztnQkFDUSxpQkFDYjtjQUFXLGlCQUNYO2dCQUFhLGlCQUNiO2FBQVUsaUJBQ1Y7VUFBTyxpQkFDUDtVQUFPLGlCQUNQO2tCQUFlLGlCQUFVO0FBTnpCO21CQXdIVyxZIiwiZmlsZSI6IjAuODcwMTc5MzkzM2I0NWQ4YTllNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicywgVGFiIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYnNcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgUmVjb3JkVGFibGVFbnRlciBmcm9tIFwiLi9yZWNvcmRUYWJsZUVudGVyXCI7XG5pbXBvcnQgUmVjb3JkVGFibGVWaWV3IGZyb20gXCIuL3JlY29yZFRhYmxlVmlld1wiO1xuXG5jbGFzcyBSZWNvcmRUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXBkYXRlU2NvcmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbmFsaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZU9mR3JvdXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JvdXBOdW06IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3RhdGU6IFByb3BUeXBlcy5TdHJpbmcsXG4gICAgam9pbmVkUGxheWVyczogUHJvcFR5cGVzLk9iamVjdFxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXN1bHQ6IFsuLi5BcnJheSh0aGlzLnByb3BzLnNpemVPZkdyb3VwKV0ubWFwKCgpID0+XG4gICAgICAgIFsuLi5BcnJheSh0aGlzLnByb3BzLnNpemVPZkdyb3VwKV0ubWFwKCgpID0+IFswLCAwXSkpLFxuICAgICAgdGFiOiAwXG4gICAgfTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ncm91cE51bSAmJiB0aGlzLnByb3BzLnN0YXRlICYmIHRoaXMucHJvcHMuc2l6ZU9mR3JvdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaGFuZGxlQ2FsY3VsYXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2NvcmUodGhpcy5jYWxjdWxhdGVTY29yZSgpLCB0aGlzLnByb3BzLmdyb3VwTnVtIC0gMSk7XG4gIH1cbiAgY2hhbmdlVGFiID0gKHRhYikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWIgfSk7XG4gIH1cbiAgY2FsY3VsYXRlU2NvcmUoKSB7XG4gICAgY29uc3Qgam9pbmVkUGxheWVycyA9IHRoaXMucHJvcHMuam9pbmVkUGxheWVycztcbiAgICBjb25zdCBwbGF5ZXJJZHMgPSBPYmplY3Qua2V5cyhqb2luZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzdGFydElkeCA9IHRoaXMucHJvcHMuc3RhcnQ7XG4gICAgY29uc3QgY2FsY3VsYXRlZFNjb3JlID0gW107XG4gICAgY29uc3QgcmMgPSB7fTtcblxuICAgIHRoaXMuc3RhdGUucmVzdWx0LmZvckVhY2goKGluZFJlY29yZCwgaSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFJlY29yZCA9IGluZFJlY29yZC5tYXAoKHJlY29yZCwgaikgPT4ge1xuICAgICAgICBpZiAoaiA8IGkpIHJldHVybiAtY2FsY3VsYXRlZFNjb3JlW2pdW2ldO1xuICAgICAgICBpZiAoaSA9PT0gaikgcmV0dXJuIDA7XG5cbiAgICAgICAgbGV0IHNpZ24gPSAtMTtcbiAgICAgICAgaWYgKHJlY29yZFswXSAtIHJlY29yZFsxXSA9PT0gMCkge1xuICAgICAgICAgIHNpZ24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZFswXSAtIHJlY29yZFsxXSA+IDApIHtcbiAgICAgICAgICBzaWduID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduID09PSAwKSByZXR1cm4gMDtcbiAgICAgICAgY29uc3QgcGxheWVyMUlkID0gcGxheWVySWRzW3N0YXJ0SWR4ICsgaV07XG4gICAgICAgIGNvbnN0IHBsYXllcjJJZCA9IHBsYXllcklkc1tzdGFydElkeCArIGpdO1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IHNpZ24gPT09IDEgPyAtcmVjb3JkWzFdICogMiA6IHJlY29yZFswXSAqIDI7XG5cbiAgICAgICAgY29uc3Qgc2NvcmVBZGp1c3QgPSBwYXJzZUludCgoKDE2ICogc2lnbikgLVxuICAgICAgICAgICgoam9pbmVkUGxheWVyc1twbGF5ZXIxSWRdLnJhdGluZyAtIGpvaW5lZFBsYXllcnNbcGxheWVyMklkXS5yYXRpbmcpICpcbiAgICAgICAgICAgIHNpZ24gKiAwLjA0KSkgKyBtb2RpZmllciwgMTApO1xuXG4gICAgICAgIHJjW3BsYXllcjFJZF0gPSB7XG4gICAgICAgICAgY2hhbmdlOiByY1twbGF5ZXIxSWRdID8gcmNbcGxheWVyMUlkXS5jaGFuZ2UgOiAwICsgc2NvcmVBZGp1c3QsXG4gICAgICAgICAgcmF0aW5nQmVmb3JlOiAram9pbmVkUGxheWVyc1twbGF5ZXIxSWRdLnJhdGluZ1xuICAgICAgICB9O1xuICAgICAgICByY1twbGF5ZXIySWRdID0ge1xuICAgICAgICAgIGNoYW5nZTogcmNbcGxheWVyMklkXSA/IHJjW3BsYXllcjJJZF0uY2hhbmdlIDogMCAtIHNjb3JlQWRqdXN0LFxuICAgICAgICAgIHJhdGluZ0JlZm9yZTogK2pvaW5lZFBsYXllcnNbcGxheWVyMklkXS5yYXRpbmdcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3JlQWRqdXN0O1xuICAgICAgfSk7XG4gICAgICBjYWxjdWxhdGVkU2NvcmUucHVzaChjdXJyZW50UmVjb3JkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NhbGN1bGF0ZWRTY29yZSwgcmNdO1xuICB9XG4gIHVwZGF0ZVJlc3VsdCA9IChpLCBqLCBrLCBlLCBpZHgsIHZhbCkgPT4ge1xuICAgIHRoaXMuc3RhdGUucmVzdWx0W2ldW2pdW2tdID0gdmFsO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzdWx0OiB0aGlzLnN0YXRlLnJlc3VsdFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmluYWxpemVkLCAuLi5wcm9wc1RvUGFzcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChmaW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgICAgPFJlY29yZFRhYmxlVmlld1xuICAgICAgICAgIHsuLi5wcm9wc1RvUGFzc31cbiAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUucmVzdWx0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGxhYmVsPVwiVXBkYXRlXCJcbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDYWxjdWxhdGV9XG4gICAgICAvPlxuICAgICAgPFRhYnNcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFifVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VUYWJ9XG4gICAgICAgIGNvbnRlbnRDb250YWluZXJTdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0UwRTBFMFwiLFxuICAgICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJFbnRlciBSZXN1bHRcIiB2YWx1ZT17MH0+XG4gICAgICAgICAgPFJlY29yZFRhYmxlRW50ZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc1RvUGFzc31cbiAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5yZXN1bHR9XG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQ9e3RoaXMudXBkYXRlUmVzdWx0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGxhYmVsPVwiVmlldyBSZXN1bHRcIiB2YWx1ZT17MX0+XG4gICAgICAgICAgPFJlY29yZFRhYmxlVmlldyB7Li4ucHJvcHNUb1Bhc3N9IHJlc3VsdD17dGhpcy5zdGF0ZS5yZXN1bHR9IC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UYWJzPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVjb3JkL3JlY29yZFRhYmxlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==