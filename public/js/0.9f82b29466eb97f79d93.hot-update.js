webpackHotUpdate(0,{

/***/ 711:
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
	
	var ClubResultView = function ClubResultView(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var result = props.result;
	
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
	        content = "Group " + props.groupNum;
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
	      if (!result[m]) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      }
	      ratingChangeSum += +result[m][n - 3];
	      return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, result[m][n - 3]);
	    }));
	  })));
	};
	
	ClubResultView.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.Object,
	  result: _react.PropTypes.Array
	};
	exports.default = ClubResultView;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3VsdHMvY2x1YlJlc3VsdFZpZXcuanM/NjJmNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQix3QkFBQyxPQUFVO09BQ3hCLGNBQThDLE1BQTlDO09BQWEsUUFBaUMsTUFBakM7T0FBTyxnQkFBMEIsTUFBMUI7T0FBZSxTQUFXLE1BQ3REOzswQkFBUTtpQkFFTjtzQkFDQTttQkFBYyxFQUFFLFVBQVU7QUFGMUIsSUFETSxrQkFLTjt1QkFFRTt3QkFDQTtzQkFBaUI7QUFGakIsSUFERixrQkFLRSxrRUFFUSxNQUFNLGNBQWMsS0FBSSxJQUFJLFVBQUMsR0FBRyxHQUNsQztTQUFJLGVBQ0o7U0FBSSxRQUNKO2FBQ0U7WUFDRTs4QkFBbUIsTUFDbkI7aUJBQVEsRUFBRSxhQUFhLE9BQU8sY0FDOUI7QUFDRjtZQUNFO21CQUNBO2lCQUFRLEVBQUUsYUFDVjtBQUNGO1lBQ0U7bUJBQ0E7QUFDRjtZQUFLLGNBQ0g7bUJBQ0E7QUFDRjtZQUFLLGNBQ0g7bUJBQ0E7QUFDRjtBQUNFO21CQUFVLElBQ1Y7QUFHSjs7O1lBQVEsMERBQW1CLGVBQVksSUFBSSxJQUFLLE9BQU8sU0FHeEQ7QUE3QkQsS0FGSixvQkFtQ0Ysa0NBQVcsb0JBQW9CLHNDQUVyQixNQUFNLGVBQWMsSUFBSSxVQUFDLElBQUksR0FDL0I7U0FBTSxZQUFZLGNBQWMsSUFDaEM7U0FBSSxrQkFFSjs7NEJBQVEsaUNBQVUsYUFBVyxrQ0FBVSxNQUFNLGNBQWMsS0FBSSxJQUFJLFVBQUMsR0FBRyxHQUNyRTtXQUFJLE1BQU0sR0FDUjtnQ0FBUTt3QkFDSyxVQUNYO2tCQUFPLEVBQUUsYUFBYSxPQUFPLGNBQWM7QUFEM0MsVUFETSxFQUlKLElBRUw7QUFDRDtXQUFJLE1BQU0sSUFBSSxHQUFHLE9BQU8sdURBQWdCLGFBQVcsVUFBSyxLQUN4RDtXQUFJLG1CQUNKO1dBQUksYUFDSjtlQUNFO2NBQ0U7bUJBQVEsRUFBRSxZQUFZLFdBQVcsYUFDakM7eUJBQWMsVUFDZDtBQUNGO2NBQ0U7eUJBQWMsVUFDZDtBQUNGO2NBQUssY0FDSDt5QkFDQTtBQUNGO2NBQUssY0FDSDt5QkFBYyxrQkFBa0IsQ0FBQyxVQUNqQztBQUNGO0FBQ0U7QUFFSjs7V0FBSSxNQUFNLGNBQWMsS0FBSyxNQUFNLGNBQWMsS0FBSyxNQUFNLEtBQUssTUFBTSxHQUNyRTtnQkFBTyx1REFBZ0IsYUFBVyxVQUFLLEdBQUssT0FBTyxTQUNwRDtBQUNEO1dBQUksQ0FBQyxPQUFPLElBQ1Y7Z0JBQU8sdURBQWdCLGFBQVcsVUFBSyxLQUN4QztBQUNEOzBCQUFtQixDQUFDLE9BQU8sR0FBRyxJQUM5QjtjQUFRLHVEQUFnQixhQUFXLFVBQUssS0FDcEMsT0FBTyxHQUFHLElBRWY7QUFDRixNQXhDb0MsQ0FBM0I7QUE0Q25CLElBaERTLENBRk47QUEvQ0o7O0FBbUdBLGdCQUFlO2dCQUNBLGlCQUNiO1VBQU8saUJBQ1A7a0JBQWUsaUJBQ2Y7V0FBUSxpQkFBVTtBQUhsQjttQkFLYSxlIiwiZmlsZSI6IjAuOWY4MmIyOTQ2NmViOTdmNzlkOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLCBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5cbmNvbnN0IENsdWJSZXN1bHRWaWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2l6ZU9mR3JvdXAsIHN0YXJ0LCBqb2luZWRQbGF5ZXJzLCByZXN1bHQgfSA9IHByb3BzO1xuICByZXR1cm4gKDxUYWJsZVxuICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgIG11bHRpU2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgd3JhcHBlclN0eWxlPXt7IG1pbldpZHRoOiBcIjEwMDBweFwiIH19XG4gID5cbiAgICA8VGFibGVIZWFkZXJcbiAgICAgIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfVxuICAgICAgZW5hYmxlU2VsZWN0QWxsPXtmYWxzZX1cbiAgICA+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIHtcbiAgICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyA1KV0ubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gYEdyb3VwICR7cHJvcHMuZ3JvdXBOdW19YDtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHsgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsIHBhZGRpbmdSaWdodDogXCI1cHhcIiB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlID0geyBwYWRkaW5nTGVmdDogXCIwXCIgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIkJlZm9yZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgMzpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJDaGFuZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBzaXplT2ZHcm91cCArIDQ6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiQWZ0ZXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gaSAtIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlSGVhZGVyQ29sdW1uIGtleT17YGhlYWQke2kgLSAxfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZGVyPlxuICAgIDxUYWJsZUJvZHkgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX0+XG4gICAgICB7XG4gICAgICAgICAgWy4uLkFycmF5KHNpemVPZkdyb3VwKV0ubWFwKChfXywgbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VyUGxheWVyID0gam9pbmVkUGxheWVyc1ttICsgc3RhcnRdO1xuICAgICAgICAgICAgbGV0IHJhdGluZ0NoYW5nZVN1bSA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17YHJvdyR7bX1gfT57Wy4uLkFycmF5KHNpemVPZkdyb3VwICsgNSldLm1hcCgoXywgbikgPT4ge1xuICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93Q29sdW1uXG4gICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsIHBhZGRpbmdSaWdodDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsgbSArIDEgfVxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobiA9PT0gbSArIDMpIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgICBsZXQgY2VsbENvbnRlbnQ7XG4gICAgICAgICAgICAgIGxldCBzdHlsZTtcbiAgICAgICAgICAgICAgc3dpdGNoIChuKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7IHdoaXRlU3BhY2U6IFwiaW5pdGlhbFwiLCBwYWRkaW5nTGVmdDogXCIwXCIgfTtcbiAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gY3VyUGxheWVyLm5hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IGN1clBsYXllci5yYXRpbmc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgMzpcbiAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gcmF0aW5nQ2hhbmdlU3VtO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzaXplT2ZHcm91cCArIDQ6XG4gICAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IHJhdGluZ0NoYW5nZVN1bSArICtjdXJQbGF5ZXIucmF0aW5nO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuID09PSBzaXplT2ZHcm91cCArIDMgfHwgbiA9PT0gc2l6ZU9mR3JvdXAgKyA0IHx8IG4gPT09IDEgfHwgbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0gc3R5bGU9e3N0eWxlfT57IGNlbGxDb250ZW50IH08L1RhYmxlUm93Q29sdW1uPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXJlc3VsdFttXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJhdGluZ0NoYW5nZVN1bSArPSArcmVzdWx0W21dW24gLSAzXTtcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+XG4gICAgICAgICAgICAgICAgeyByZXN1bHRbbV1bbiAtIDNdIH1cbiAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj4pO1xuICAgICAgICAgICAgfSl9PC9UYWJsZVJvdz4pO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L1RhYmxlQm9keT5cbiAgPC9UYWJsZT4pO1xufTtcblxuQ2x1YlJlc3VsdFZpZXcucHJvcFR5cGVzID0ge1xuICBzaXplT2ZHcm91cDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5PYmplY3QsXG4gIHJlc3VsdDogUHJvcFR5cGVzLkFycmF5XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2x1YlJlc3VsdFZpZXc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzdWx0cy9jbHViUmVzdWx0Vmlldy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=