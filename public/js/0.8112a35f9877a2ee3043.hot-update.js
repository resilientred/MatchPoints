webpackHotUpdate(0,{

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _SelectField = __webpack_require__(669);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
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
	
	var style = { paddingLeft: "0" };
	
	var RecordTableDetail = function RecordTableDetail(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var result = props.result;
	
	  return _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    wrapperStyle: { minWidth: "650px" }
	  }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false }, _react2.default.createElement(_Table.TableRow, null, [].concat(_toConsumableArray(Array(sizeOfGroup + 2))).map(function (_, i) {
	    return _react2.default.createElement(_Table.TableHeaderColumn, { key: "head" + (i - 1), style: i === 1 ? style : {} }, function mapHeader(x) {
	      switch (x) {
	        case 0:
	          return "Group " + props.groupNum;
	        case 1:
	          return "Name";
	        default:
	          return "vs. " + (i - 1);
	      }
	    }(i));
	  }))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, [].concat(_toConsumableArray(Array(sizeOfGroup))).map(function (_, m) {
	    var curPlayer = joinedPlayers[m + start];
	    return _react2.default.createElement(_Table.TableRow, { key: "row" + m }, [].concat(_toConsumableArray(Array(sizeOfGroup + 2))).map(function (__, n) {
	      var content = void 0;
	      var cellStyle = void 0;
	      var disabled = false;
	      (function mapContent(i, j) {
	        switch (i) {
	          case 0:
	            content = j + 1;
	            break;
	          case j + 2:
	            content = null;
	            disabled = true;
	            break;
	          case 1:
	            content = _react2.default.createElement("h3", null, curPlayer.name, _react2.default.createElement("br", null), "Rating: " + curPlayer.rating);
	            cellStyle = style;
	            break;
	          default:
	            if (i - 2 > j) {
	              content = _react2.default.createElement("div", { className: "score-div" }, _react2.default.createElement(_SelectField2.default, {
	                style: { marginRight: "5px", width: "50%" },
	                key: "row" + j + ":" + i + "-1",
	                onChange: function onChange() {
	                  return props.updateResult(j, i - 2, 0);
	                },
	                value: result[j][i - 2][0]
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, {
	                value: 3,
	                primaryText: "3",
	                disabled: result[j][i - 2][1] === 3
	              })), _react2.default.createElement(_SelectField2.default, {
	                style: { width: "50%" },
	                key: "row" + j + ":" + i + "-2",
	                onChange: function onChange() {
	                  return props.updateResult(j, i - 2, 1);
	                },
	                value: result[j][i - 2][1]
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, {
	                value: 3,
	                primaryText: "3",
	                disabled: result[j][i - 2][0] === 3
	              })));
	            } else {
	              content = _react2.default.createElement("div", null, _react2.default.createElement(_SelectField2.default, {
	                style: { marginRight: "5px", width: "50%" },
	                key: "row" + j + ":" + i + "-1",
	                value: result[i - 2][j][1],
	                disabled: true
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: "3" })), _react2.default.createElement(_SelectField2.default, {
	                style: { width: "50%" },
	                key: "row" + j + ":" + i + "-2",
	                value: result[i - 2][j][0],
	                disabled: true
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: "3" })));
	            }
	            break;
	        }
	      })(n, m);
	      return _react2.default.createElement(_Table.TableRowColumn, {
	        style: cellStyle,
	        key: "row" + m + ":" + n,
	        disabled: disabled
	      }, content);
	    }));
	  })));
	};
	
	RecordTableDetail.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.Array,
	  result: _react.PropTypes.Array
	};
	
	exports.default = RecordTableDetail;

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
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
	
	var RecordTableDetail = function RecordTableDetail(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var scoreChange = props.scoreChange;
	  var groupNum = props.groupNum;
	
	  return _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    wrapperStyle: { minWidth: "1000px" }
	  }, _react2.default.createElement(_Table.TableHeader, {
	    displaySelectAll: false,
	    adjustForCheckbox: false,
	    enableSelectAll: false
	  }, _react2.default.createElement(_Table.TableRow, null, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, i) {
	    var content = void 0;
	    var style = {};
	    switch (i) {
	      case 0:
	        content = "Group " + groupNum;
	        style = { paddingLeft: "5px", paddingRight: "5px" };
	        break;
	      case 1:
	        content = "Name";
	        style = { paddingLeft: "0" };
	        break;
	      case 2:
	        content = "Before";
	        break;
	      case sizeOfGroup + 3:
	        content = "Change";
	        break;
	      case sizeOfGroup + 4:
	        content = "After";
	        break;
	      default:
	        content = i - 2;
	        break;
	    }
	    return _react2.default.createElement(_Table.TableHeaderColumn, { key: "head" + (i - 1), style: style }, content);
	  }))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, [].concat(_toConsumableArray(Array(sizeOfGroup))).map(function (__, m) {
	    var curPlayer = joinedPlayers[m + start];
	    var ratingChangeSum = 0;
	
	    return _react2.default.createElement(_Table.TableRow, { key: "row" + m }, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, n) {
	      if (n === 0) {
	        return _react2.default.createElement(_Table.TableRowColumn, {
	          key: "row" + m + ":" + n,
	          style: { paddingLeft: "5px", paddingRight: "5px" }
	        }, m + 1);
	      }
	      if (n === m + 3) return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      var cellContent = void 0;
	      var style = void 0;
	      switch (n) {
	        case 1:
	          style = { whiteSpace: "initial", paddingLeft: "0" };
	          cellContent = curPlayer.name;
	          break;
	        case 2:
	          cellContent = curPlayer.rating;
	          break;
	        case sizeOfGroup + 3:
	          cellContent = ratingChangeSum;
	          break;
	        case sizeOfGroup + 4:
	          cellContent = ratingChangeSum + +curPlayer.rating;
	          break;
	        default:
	          break;
	      }
	      if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 1 || n === 2) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n, style: style }, cellContent);
	      }
	
	      if (!scoreChange) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      }
	      ratingChangeSum += +scoreChange[m][n - 3];
	      return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, scoreChange[m][n - 3]);
	    }));
	  })));
	};
	
	RecordTableDetail.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  groupNum: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.Array,
	  scoreChange: _react.PropTypes.Array
	};
	
	exports.default = RecordTableDetail;

/***/ },

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _clubResultView = __webpack_require__(711);
	
	var _clubResultView2 = _interopRequireDefault(_clubResultView);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var ClubResultDetails = function ClubResultDetails(props) {
	  if (!props._id) {
	    return _react2.default.createElement("div", { style: { marginTop: "5%" } }, "Please select a date...");
	  }
	  if (!props.finalized) {
	    return _react2.default.createElement("div", { style: { marginTop: "5%" } }, "The results have not been posted yet...");
	  }
	  var countedPlayers = 0;
	  return _react2.default.createElement("div", { style: { overflow: "scroll", marginTop: "5%" } }, props.selectedSchema.map(function (sizeOfGroup, i) {
	    countedPlayers += +sizeOfGroup;
	    return _react2.default.createElement(_clubResultView2.default, {
	      key: i,
	      groupNum: i + 1,
	      start: countedPlayers - sizeOfGroup,
	      finalized: props.finalized,
	      result: props.results[i],
	      joinedPlayers: props.players, sizeOfGroup: +sizeOfGroup
	    });
	  }));
	};
	
	ClubResultDetails.propTypes = {
	  players: _react.PropTypes.Array,
	  finalized: _react.PropTypes.bool,
	  selectedSchema: _react.PropTypes.Array,
	  _id: _react.PropTypes.number
	};
	
	exports.default = ClubResultDetails;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZUVudGVyLmpzPzI4ZTIiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZWNvcmQvcmVjb3JkVGFibGVWaWV3LmpzPzk5NzciLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXN1bHRzL2NsdWJSZXN1bHREZXRhaWxzLmpzPzZhMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU0sUUFBUSxFQUFFLGFBQWE7O0FBRTdCLEtBQU0sb0JBQW9CLDJCQUFDLE9BQVU7T0FDM0IsY0FBOEMsTUFBOUM7T0FBYSxRQUFpQyxNQUFqQztPQUFPLGdCQUEwQixNQUExQjtPQUFlLFNBQVcsTUFDdEQ7OzBCQUFRO2lCQUVOO3NCQUNBO21CQUFjLEVBQUUsVUFBVTtBQUYxQixJQURNLEVBS04sb0RBQWEsa0JBQWtCLE9BQU8sbUJBQW1CLHlCQUN2RCxrRUFFUSxNQUFNLGNBQWMsS0FBSSxJQUFJLFVBQUMsR0FBRyxHQUFKOzRCQUM5QiwwQ0FBbUIsZUFBWSxJQUFJLElBQUssT0FBTyxNQUFNLElBQUksUUFBUSxlQUVuRCxVQUFVLEdBQ2xCO2VBQ0U7Y0FDRTs2QkFBZ0IsTUFDbEI7Y0FDRTtrQkFDRjtBQUNFOzRCQUFlLElBRXBCOztBQVRBLE9BU0MsRUFYTjtBQURGLEtBRkosb0JBcUJGLGtDQUFXLG9CQUFvQixzQ0FFdkIsTUFBTSxlQUFjLElBQUksVUFBQyxHQUFHLEdBQzlCO1NBQU0sWUFBWSxjQUFjLElBQ2hDOzRCQUFRLGlDQUFVLGFBQVcsa0NBQVUsTUFBTSxjQUFjLEtBQUksSUFBSSxVQUFDLElBQUksR0FDdEU7V0FBSSxlQUNKO1dBQUksaUJBQ0o7V0FBSSxXQUNIO2lCQUFTLFdBQVcsR0FBRyxHQUN0QjtpQkFDRTtnQkFDRTt1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QztBQUNEO09BQUksQ0FBQyxNQUFNLFdBQ1Q7WUFBUSx1Q0FBSyxPQUFPLEVBQUUsV0FBVyxVQUdsQztBQUNEO09BQUksaUJBQ0o7MEJBQVEsdUJBQUssT0FBTyxFQUFFLFVBQVUsVUFBVSxXQUFXLGdCQUUzQyxlQUFlLElBQUksVUFBQyxhQUFhLEdBQ3JDO3VCQUFrQixDQUNsQjs7WUFHSTtpQkFBVSxJQUNWO2NBQU8saUJBQ1A7a0JBQVcsTUFDWDtlQUFRLE1BQU0sUUFDZDtzQkFBZSxNQUFNLFNBQVMsYUFBYSxDQUdoRDtBQVJLLE1BREY7QUFZVCxJQWZLLENBRkk7QUFaVjs7QUErQkEsbUJBQWtCO1lBQ1AsaUJBQ1Q7Y0FBVyxpQkFDWDttQkFBZ0IsaUJBQ2hCO1FBQUssaUJBQVU7QUFIZjs7bUJBTWEsa0IiLCJmaWxlIjoiMC44MTEyYTM1Zjk4NzdhMmVlMzA0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcblxuY29uc3Qgc3R5bGUgPSB7IHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuXG5jb25zdCBSZWNvcmRUYWJsZURldGFpbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNpemVPZkdyb3VwLCBzdGFydCwgam9pbmVkUGxheWVycywgcmVzdWx0IH0gPSBwcm9wcztcbiAgcmV0dXJuICg8VGFibGVcbiAgICBzZWxlY3RhYmxlPXtmYWxzZX1cbiAgICBtdWx0aVNlbGVjdGFibGU9e2ZhbHNlfVxuICAgIHdyYXBwZXJTdHlsZT17eyBtaW5XaWR0aDogXCI2NTBweFwiIH19XG4gID5cbiAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9IGFkanVzdEZvckNoZWNrYm94PXtmYWxzZX0+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIHtcbiAgICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyAyKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4ga2V5PXtgaGVhZCR7aSAtIDF9YH0gc3R5bGU9e2kgPT09IDEgPyBzdHlsZSA6IHt9fT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiBtYXBIZWFkZXIoeCkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYEdyb3VwICR7cHJvcHMuZ3JvdXBOdW19YDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHZzLiAkeyhpIC0gMSl9YDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KGkpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWRlcj5cbiAgICA8VGFibGVCb2R5IGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9PlxuICAgICAge1xuICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXApXS5tYXAoKF8sIG0pID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJQbGF5ZXIgPSBqb2luZWRQbGF5ZXJzW20gKyBzdGFydF07XG4gICAgICAgICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtgcm93JHttfWB9PntbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyAyKV0ubWFwKChfXywgbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgY2VsbFN0eWxlO1xuICAgICAgICAgICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAoZnVuY3Rpb24gbWFwQ29udGVudChpLCBqKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgaiArIDI6XG4gICAgICAgICAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoPGgzPlxuICAgICAgICAgICAgICAgICAgICB7IGN1clBsYXllci5uYW1lIH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgeyBgUmF0aW5nOiAke2N1clBsYXllci5yYXRpbmd9YCB9XG4gICAgICAgICAgICAgICAgICA8L2gzPik7XG4gICAgICAgICAgICAgICAgICBjZWxsU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoKGkgLSAyKSA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICg8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke2p9OiR7aX0tMWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gcHJvcHMudXBkYXRlUmVzdWx0KGosIGkgLSAyLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN1bHRbal1baSAtIDJdWzBdfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Jlc3VsdFtqXVtpIC0gMl1bMV0gPT09IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcm93JHtqfToke2l9LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHByb3BzLnVwZGF0ZVJlc3VsdChqLCBpIC0gMiwgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzdWx0W2pdW2kgLSAyXVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHByaW1hcnlUZXh0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9IHByaW1hcnlUZXh0PVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZXN1bHRbal1baSAtIDJdWzBdID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke2p9OiR7aX0tMWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzdWx0W2kgLSAyXVtqXVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfSBwcmltYXJ5VGV4dD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfSBwcmltYXJ5VGV4dD1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcm93JHtqfToke2l9LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3VsdFtpIC0gMl1bal1bMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0obiwgbSkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uXG4gICAgICAgICAgICAgICAgc3R5bGU9e2NlbGxTdHlsZX1cbiAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTwvVGFibGVSb3c+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L1RhYmxlQm9keT5cbiAgPC9UYWJsZT4pO1xufTtcblxuUmVjb3JkVGFibGVEZXRhaWwucHJvcFR5cGVzID0ge1xuICBzaXplT2ZHcm91cDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5BcnJheSxcbiAgcmVzdWx0OiBQcm9wVHlwZXMuQXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFRhYmxlRGV0YWlsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZUVudGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcblxuY29uc3QgUmVjb3JkVGFibGVEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaXplT2ZHcm91cCwgc3RhcnQsIGpvaW5lZFBsYXllcnMsIHNjb3JlQ2hhbmdlLCBncm91cE51bSB9ID0gcHJvcHM7XG4gIHJldHVybiAoPFRhYmxlXG4gICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgbXVsdGlTZWxlY3RhYmxlPXtmYWxzZX1cbiAgICB3cmFwcGVyU3R5bGU9e3sgbWluV2lkdGg6IFwiMTAwMHB4XCIgfX1cbiAgPlxuICAgIDxUYWJsZUhlYWRlclxuICAgICAgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9XG4gICAgICBhZGp1c3RGb3JDaGVja2JveD17ZmFsc2V9XG4gICAgICBlbmFibGVTZWxlY3RBbGw9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAge1xuICAgICAgICAgIFsuLi5BcnJheShzaXplT2ZHcm91cCArIDUpXS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBgR3JvdXAgJHtncm91cE51bX1gO1xuICAgICAgICAgICAgICAgIHN0eWxlID0geyBwYWRkaW5nTGVmdDogXCI1cHhcIiwgcGFkZGluZ1JpZ2h0OiBcIjVweFwiIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7IHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiQmVmb3JlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2Ugc2l6ZU9mR3JvdXAgKyAzOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIkNoYW5nZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgNDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJBZnRlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBpIC0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlSGVhZGVyQ29sdW1uIGtleT17YGhlYWQkeyhpIC0gMSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgeyBjb250ZW50IH1cbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkZXI+XG4gICAgPFRhYmxlQm9keSBkaXNwbGF5Um93Q2hlY2tib3g9e2ZhbHNlfT5cbiAgICAgIHtcbiAgICAgICAgWy4uLkFycmF5KHNpemVPZkdyb3VwKV0ubWFwKChfXywgbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1clBsYXllciA9IGpvaW5lZFBsYXllcnNbbSArIHN0YXJ0XTtcbiAgICAgICAgICBsZXQgcmF0aW5nQ2hhbmdlU3VtID0gMDtcblxuICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17YHJvdyR7bX1gfT57Wy4uLkFycmF5KHNpemVPZkdyb3VwICsgNSldLm1hcCgoXywgbikgPT4ge1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFibGVSb3dDb2x1bW5cbiAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjVweFwiLCBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsobSArIDEpfVxuICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobiA9PT0gbSArIDMpIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgbGV0IGNlbGxDb250ZW50O1xuICAgICAgICAgICAgbGV0IHN0eWxlO1xuICAgICAgICAgICAgc3dpdGNoIChuKSB7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHsgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsIHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gY3VyUGxheWVyLm5hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IGN1clBsYXllci5yYXRpbmc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2Ugc2l6ZU9mR3JvdXAgKyAzOlxuICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gcmF0aW5nQ2hhbmdlU3VtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgNDpcbiAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IHJhdGluZ0NoYW5nZVN1bSArICtjdXJQbGF5ZXIucmF0aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPT09IHNpemVPZkdyb3VwICsgMyB8fCBuID09PSBzaXplT2ZHcm91cCArIDQgfHwgbiA9PT0gMSB8fCBuID09PSAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0gc3R5bGU9e3N0eWxlfT57Y2VsbENvbnRlbnR9PC9UYWJsZVJvd0NvbHVtbj47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2NvcmVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZVJvd0NvbHVtbiBrZXk9e2Byb3cke219OiR7bn1gfT4wPC9UYWJsZVJvd0NvbHVtbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYXRpbmdDaGFuZ2VTdW0gKz0gK3Njb3JlQ2hhbmdlW21dW24gLSAzXTtcbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93Q29sdW1uIGtleT17YHJvdyR7bX06JHtufWB9PlxuICAgICAgICAgICAgICB7IHNjb3JlQ2hhbmdlW21dW24gLSAzXSB9XG4gICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgfSl9PC9UYWJsZVJvdz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvVGFibGVCb2R5PlxuICA8L1RhYmxlPik7XG59O1xuXG5SZWNvcmRUYWJsZURldGFpbC5wcm9wVHlwZXMgPSB7XG4gIHNpemVPZkdyb3VwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGFydDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JvdXBOdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5BcnJheSxcbiAgc2NvcmVDaGFuZ2U6IFByb3BUeXBlcy5BcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFRhYmxlRGV0YWlsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZVZpZXcuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2x1YlJlc3VsdFZpZXcgZnJvbSBcIi4vY2x1YlJlc3VsdFZpZXdcIjtcblxuY29uc3QgQ2x1YlJlc3VsdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5faWQpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUlXCIgfX0+XG4gICAgICBQbGVhc2Ugc2VsZWN0IGEgZGF0ZS4uLlxuICAgIDwvZGl2Pik7XG4gIH1cbiAgaWYgKCFwcm9wcy5maW5hbGl6ZWQpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUlXCIgfX0+XG4gICAgICBUaGUgcmVzdWx0cyBoYXZlIG5vdCBiZWVuIHBvc3RlZCB5ZXQuLi5cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGxldCBjb3VudGVkUGxheWVycyA9IDA7XG4gIHJldHVybiAoPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiwgbWFyZ2luVG9wOiBcIjUlXCIgfX0+XG4gICAge1xuICAgICAgcHJvcHMuc2VsZWN0ZWRTY2hlbWEubWFwKChzaXplT2ZHcm91cCwgaSkgPT4ge1xuICAgICAgICBjb3VudGVkUGxheWVycyArPSArc2l6ZU9mR3JvdXA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENsdWJSZXN1bHRWaWV3XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBncm91cE51bT17aSArIDF9XG4gICAgICAgICAgICBzdGFydD17Y291bnRlZFBsYXllcnMgLSBzaXplT2ZHcm91cH1cbiAgICAgICAgICAgIGZpbmFsaXplZD17cHJvcHMuZmluYWxpemVkfVxuICAgICAgICAgICAgcmVzdWx0PXtwcm9wcy5yZXN1bHRzW2ldfVxuICAgICAgICAgICAgam9pbmVkUGxheWVycz17cHJvcHMucGxheWVyc30gc2l6ZU9mR3JvdXA9eytzaXplT2ZHcm91cH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICB9XG4gIDwvZGl2Pik7XG59O1xuXG5DbHViUmVzdWx0RGV0YWlscy5wcm9wVHlwZXMgPSB7XG4gIHBsYXllcnM6IFByb3BUeXBlcy5BcnJheSxcbiAgZmluYWxpemVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWRTY2hlbWE6IFByb3BUeXBlcy5BcnJheSxcbiAgX2lkOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbHViUmVzdWx0RGV0YWlscztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXN1bHRzL2NsdWJSZXN1bHREZXRhaWxzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==