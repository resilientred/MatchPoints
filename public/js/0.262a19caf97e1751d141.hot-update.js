webpackHotUpdate(0,{

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var PlayerList = function PlayerList(props) {
	  var players = props.players;
	  var idRef = {};
	  var playerList = players.map(function (player, i) {
	    idRef[i] = player._id;
	    return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), !props.deletePlayer ? "" : _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
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
	};
	
	PlayerList.propTypes = {
	  players: _react.PropTypes.Array,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJMaXN0LmpzPzhiOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBTSxhQUFhLG9CQUFDLE9BQ2xCO09BQU0sVUFBVSxNQUNoQjtPQUFNLFFBQ047T0FBTSxxQkFBcUIsSUFBSSxVQUFDLFFBQVEsR0FDdEM7V0FBTSxLQUFLLE9BQ1g7WUFBUSxpREFBVSxLQUFLLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxNQUFNLGFBQWEsT0FBTyxRQUN2RSwyREFBaUIsT0FBTyxPQUN4QiwyREFBaUIsT0FBTyxTQUV0QixDQUFDLE1BQU0sZUFBZSxxQkFDcEIsMkRBQ0U7Z0JBQ1c7Z0JBQU0sTUFBTSxhQUFhLE9BQU87QUFDekM7c0JBQ0E7Z0JBQVE7QUFGUixNQURGLEVBS0UsK0NBS1gsTUFYTztBQWFSLElBcEJtQjs7VUFxQmpCLDJDQUNFLHNDQUFJLFdBQVUsaUJBQWdCLE1BQU0sd0JBQ3BDO2FBRUU7a0JBQWEsUUFDYjtpQkFBWSxRQUNaO3NCQUFpQixRQUNqQjtrQkFBYSxxQkFBQyxHQUFHLEtBQUssR0FBVDtjQUFlLE1BQU0sYUFBYSxNQUFNLElBQUk7QUFMM0Q7QUFDRSxJQURGLEVBT0Usb0RBQWEsa0JBQWtCLFNBQzdCLHFEQUNFLHVFQUNBLHlFQUVFLE1BQU0sZ0JBQWdCLHdEQUoxQix5QkFRRjt5QkFDc0IsTUFDcEI7bUJBQWMsUUFDZDswQkFBcUIsUUFBUTtBQUY3QixJQURGLEVBVVA7QUFwREQ7O0FBc0RBLFlBQVc7WUFDQSxpQkFDVDtpQkFBYyxpQkFDZDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO1VBQU8saUJBQVU7QUFKakI7O21CQU9hLFciLCJmaWxlIjoiMC4yNjJhMTljYWY5N2UxNzUxZDE0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcInJlYWN0LWljb25zL2xpYi9tZC9jbG9zZVwiO1xuXG5jb25zdCBQbGF5ZXJMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHBsYXllcnMgPSBwcm9wcy5wbGF5ZXJzO1xuICBjb25zdCBpZFJlZiA9IHt9O1xuICBjb25zdCBwbGF5ZXJMaXN0ID0gcGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4ge1xuICAgIGlkUmVmW2ldID0gcGxheWVyLl9pZDtcbiAgICByZXR1cm4gKDxUYWJsZVJvdyBrZXk9e3BsYXllci5faWR9IHNlbGVjdGVkPXshIXByb3BzLmFkZGVkUGxheWVyc1twbGF5ZXIuX2lkXX0+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgIHtcbiAgICAgICAgIXByb3BzLmRlbGV0ZVBsYXllciA/IFwiXCIgOlxuICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZVBsYXllcihwbGF5ZXIuX2lkKX1cbiAgICAgICAgICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgdG9vbHRpcD1cIlJlbW92ZSBQbGF5ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPlxuICAgICAgfVxuICAgIDwvVGFibGVSb3c+KTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRhYmxlLXRpdGxlXCI+eyBwcm9wcy50aXRsZSB9PC9oMz5cbiAgICAgIDxUYWJsZVxuICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBtdWx0aVNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uQ2VsbENsaWNrPXsoaSwgY29sLCBlKSA9PiBwcm9wcy5oYW5kbGVUb2dnbGUoaWRSZWZbaV0sIGUpfVxuICAgICAgPlxuICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9PlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5OYW1lPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm9wcy5kZWxldGVQbGF5ZXIgJiYgPFRhYmxlSGVhZGVyQ29sdW1uIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgIGRpc3BsYXlSb3dDaGVja0JveD17cHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICBzaG93Um93SG92ZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgZGVzZWxlY3RPbkNsaWNrYXdheT17Qm9vbGVhbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7IHBsYXllckxpc3QgfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QbGF5ZXJMaXN0LnByb3BUeXBlcyA9IHtcbiAgcGxheWVyczogUHJvcFR5cGVzLkFycmF5LFxuICBkZWxldGVQbGF5ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFuZGxlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckxpc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BsYXllckxpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9