webpackHotUpdate(0,{

/***/ 668:
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
	
	var SelectedPlayerList = function SelectedPlayerList(props) {
	  var players = props.players;
	  var idRef = {};
	  var playerList = players.map(function (player, i) {
	    idRef[i] = player._id;
	    return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating));
	  });
	
	  return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, props.title), _react2.default.createElement(_Table.Table, {
	    height: "400px",
	    fixedHeader: Boolean(true),
	    selectable: Boolean(true),
	    multiSelectable: Boolean(true),
	    onCellClick: function onCellClick(i, col, e) {
	      return props.handleToggle(idRef[i], e);
	    }
	  }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"))), _react2.default.createElement(_Table.TableBody, {
	    displayRowCheckBox: props.selectable,
	    showRowHover: Boolean(true),
	    deselectOnClickaway: Boolean(false)
	  }, playerList)));
	};
	
	SelectedPlayerList.propTypes = {
	  players: _react.PropTypes.array,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = SelectedPlayerList;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9zZWxlY3RlZFBsYXllckxpc3QuanM/MGZlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUdBLEtBQU0scUJBQXFCLDRCQUFDLE9BQzFCO09BQU0sVUFBVSxNQUNoQjtPQUFNLFFBQ047T0FBTSxxQkFBcUIsSUFBSSxVQUFDLFFBQVEsR0FDdEM7V0FBTSxLQUFLLE9BQ1g7WUFBUSxpREFBVSxLQUFLLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxNQUFNLGFBQWEsT0FBTyxRQUN2RSwyREFBaUIsT0FBTyxPQUN4QiwyREFBaUIsT0FFcEI7QUFFRCxJQVJtQjs7VUFTakIsMkNBQ0Usc0NBQUksV0FBVSxpQkFBZ0IsTUFBTSx3QkFDcEM7YUFFRTtrQkFBYSxRQUNiO2lCQUFZLFFBQ1o7c0JBQWlCLFFBQ2pCO2tCQUFhLHFCQUFDLEdBQUcsS0FBSyxHQUFUO2NBQWUsTUFBTSxhQUFhLE1BQU0sSUFBSTtBQUwzRDtBQUNFLElBREYsRUFPRSxvREFBYSxrQkFBa0IsU0FDN0IscURBQ0UsdUVBQ0EsMkZBR0o7eUJBQ3NCLE1BQ3BCO21CQUFjLFFBQ2Q7MEJBQXFCLFFBQVE7QUFGN0IsSUFERixFQVVQO0FBckNEOztBQXVDQSxvQkFBbUI7WUFDUixpQkFDVDtlQUFZLGlCQUNaO2lCQUFjLGlCQUNkO1VBQU8saUJBQVU7QUFIakI7O21CQU1hLG1CIiwiZmlsZSI6IjAuMWU4ZWVlM2QwNGJkNzNjMTk5MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5cbmNvbnN0IFNlbGVjdGVkUGxheWVyTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBwbGF5ZXJzID0gcHJvcHMucGxheWVycztcbiAgY29uc3QgaWRSZWYgPSB7fTtcbiAgY29uc3QgcGxheWVyTGlzdCA9IHBsYXllcnMubWFwKChwbGF5ZXIsIGkpID0+IHtcbiAgICBpZFJlZltpXSA9IHBsYXllci5faWQ7XG4gICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtwbGF5ZXIuX2lkfSBzZWxlY3RlZD17ISFwcm9wcy5hZGRlZFBsYXllcnNbcGxheWVyLl9pZF19PlxuICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIubmFtZX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIucmF0aW5nfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgPC9UYWJsZVJvdz4pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGFibGUtdGl0bGVcIj57IHByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgPFRhYmxlXG4gICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG11bHRpU2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25DZWxsQ2xpY2s9eyhpLCBjb2wsIGUpID0+IHByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICA+XG4gICAgICAgIDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPlJhdGluZzwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgIGRpc3BsYXlSb3dDaGVja0JveD17cHJvcHMuc2VsZWN0YWJsZX1cbiAgICAgICAgICBzaG93Um93SG92ZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgZGVzZWxlY3RPbkNsaWNrYXdheT17Qm9vbGVhbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7IHBsYXllckxpc3QgfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZWxlY3RlZFBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRQbGF5ZXJMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9zZWxlY3RlZFBsYXllckxpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9