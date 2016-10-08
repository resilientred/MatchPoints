webpackHotUpdate(0,{

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _IconButton = __webpack_require__(456);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _pictureAsPdf = __webpack_require__(680);
	
	var _pictureAsPdf2 = _interopRequireDefault(_pictureAsPdf);
	
	var _keyboardArrowUp = __webpack_require__(681);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(682);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var moveDownArrow = function moveDownArrow(moveDown, i) {
	  return moveDown && _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    tooltip: "Move one player down",
	    onClick: function onClick() {
	      return moveDown(i);
	    },
	    style: {
	      position: "absolute",
	      left: "30px",
	      bottom: "1px",
	      zIndex: 10
	    }
	  }, _react2.default.createElement(_keyboardArrowDown2.default, null));
	};
	
	var moveUpArrow = function moveUpArrow(moveUp, i) {
	  return moveUp && _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    tooltip: "Move one player up",
	    onClick: function onClick() {
	      return moveUp(i);
	    },
	    style: {
	      position: "absolute",
	      left: "30px",
	      top: "57px",
	      zIndex: 10
	    }
	  }, _react2.default.createElement(_keyboardArrowUp2.default, null));
	};
	
	var ParticipantGroup = function ParticipantGroup(props) {
	  return _react2.default.createElement("div", { style: { position: "relative" } }, _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    style: { position: "absolute", right: "0", top: "5px", zIndex: 10 },
	    onClick: props.pdfDownload,
	    disabled: !props.pdfs,
	    tooltip: !props.pdfs ? "You must generate first" : "Download pdf"
	  }, _react2.default.createElement(_pictureAsPdf2.default, null)), _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    fixedHeader: Boolean(true)
	  }, _react2.default.createElement(_Table.TableHeader, {
	    displaySelectAll: false,
	    enableSelectAll: false,
	    adjustForCheckbox: false
	  }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Group ", props.groupId + 1), _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"))), _react2.default.createElement(_Table.TableBody, {
	    displayRowCheckbox: false,
	    showRowHover: Boolean(true),
	    style: { position: "relative" }
	  }, props.players.map(function (player, i) {
	    return _react2.default.createElement(_Table.TableRow, { className: "table-row", key: player._id }, _react2.default.createElement(_Table.TableRowColumn, null, i + 1), _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating));
	  }))), moveUpArrow(props.moveUp, props.groupId), moveDownArrow(props.moveDown, props.groupId));
	};
	
	ParticipantGroup.propTypes = {
	  pdfDownload: _react.PropTypes.func,
	  pdfs: _react.PropTypes.Array,
	  groupId: _react.PropTypes.number,
	  players: _react.PropTypes.Array,
	  moveUp: _react.PropTypes.func,
	  moveDown: _react.PropTypes.func
	};
	
	exports.default = ParticipantGroup;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudEdyb3VwLmpzPzQ0MmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQU0sZ0JBQWdCLHVCQUFDLFVBQVUsR0FBWDtVQUNuQiw0QkFBWTtvQkFFWDtjQUNBO2NBQVM7Y0FBTSxTQUFTO0FBQ3hCOztpQkFFRTthQUNBO2VBQ0E7ZUFBUTtBQUhSO0FBSkYsSUFEVyxFQVdYLDJEQVhXO0FBRGY7O0FBZ0JBLEtBQU0sY0FBYyxxQkFBQyxRQUFRLEdBQVQ7VUFDakIsMEJBQVU7b0JBRVQ7Y0FDQTtjQUFTO2NBQU0sT0FBTztBQUN0Qjs7aUJBRUU7YUFDQTtZQUNBO2VBQVE7QUFIUjtBQUpGLElBRFMsRUFXVCx5REFYUztBQURiOztBQWdCQSxLQUFNLG1CQUFtQjswQkFDdEIsdUJBQUssT0FBTyxFQUFFLFVBQVUsZ0NBQ3ZCO29CQUVFO1lBQU8sRUFBRSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxRQUN2RDtjQUFTLE1BQ1Q7ZUFBVSxDQUFDLE1BQ1g7Y0FBUyxDQUFDLE1BQU0sT0FBTyw0QkFBNEI7QUFKbkQsSUFERixFQU9FLHNEQVBGLHdCQVNBO2lCQUVFO3NCQUNBO2tCQUFhLFFBQVE7QUFGckIsSUFERixrQkFLRTt1QkFFRTtzQkFDQTt3QkFBbUI7QUFGbkIsSUFERixFQUtFLHFEQUNFLHdFQUEwQixNQUFNLFVBQVUsSUFDMUMsdUVBQ0EsMkZBR0o7eUJBRUU7bUJBQWMsUUFDZDtZQUFPLEVBQUUsVUFBVTtBQUZuQixJQURGLFFBTVUsUUFBUSxJQUFJLFVBQUMsUUFBUSxHQUFUO1lBQ2hCLGlEQUFVLFdBQVUsYUFBWSxLQUFLLE9BQU8sT0FDMUMsMkRBQWlCLElBQUksSUFDckIsMkRBQWlCLE9BQU8sT0FDeEIsMkRBQWlCLE9BQU87QUFKNUIsT0FoQ1AsRUEwQ0csWUFBWSxNQUFNLFFBQVEsTUFBTSxVQUNoQyxjQUFjLE1BQU0sVUFBVSxNQUFNO0FBNUMxQzs7QUFnREEsa0JBQWlCO2dCQUNGLGlCQUNiO1NBQU0saUJBQ047WUFBUyxpQkFDVDtZQUFTLGlCQUNUO1dBQVEsaUJBQ1I7YUFBVSxpQkFBVTtBQUxwQjs7bUJBUWEsaUIiLCJmaWxlIjoiMC40NmRlNmFkMWM4Y2IwYWU2Zjg3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVSb3csXG4gIFRhYmxlSGVhZGVyLCBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uL0ljb25CdXR0b25cIjtcbmltcG9ydCBQZGZJY29uIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvcGljdHVyZS1hcy1wZGZcIjtcbmltcG9ydCBVcEFycm93IGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctdXBcIjtcbmltcG9ydCBEb3duQXJyb3cgZnJvbSBcInJlYWN0LWljb25zL2xpYi9tZC9rZXlib2FyZC1hcnJvdy1kb3duXCI7XG5cbmNvbnN0IG1vdmVEb3duQXJyb3cgPSAobW92ZURvd24sIGkpID0+IChcbiAgKG1vdmVEb3duICYmIDxJY29uQnV0dG9uXG4gICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICB0b29sdGlwPVwiTW92ZSBvbmUgcGxheWVyIGRvd25cIlxuICAgIG9uQ2xpY2s9eygpID0+IG1vdmVEb3duKGkpfVxuICAgIHN0eWxlPXt7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogXCIzMHB4XCIsXG4gICAgICBib3R0b206IFwiMXB4XCIsXG4gICAgICB6SW5kZXg6IDEwXG4gICAgfX1cbiAgPlxuICAgIDxEb3duQXJyb3cgLz5cbiAgPC9JY29uQnV0dG9uPilcbik7XG5cbmNvbnN0IG1vdmVVcEFycm93ID0gKG1vdmVVcCwgaSkgPT4gKFxuICAobW92ZVVwICYmIDxJY29uQnV0dG9uXG4gICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICB0b29sdGlwPVwiTW92ZSBvbmUgcGxheWVyIHVwXCJcbiAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlVXAoaSl9XG4gICAgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBcIjMwcHhcIixcbiAgICAgIHRvcDogXCI1N3B4XCIsXG4gICAgICB6SW5kZXg6IDEwXG4gICAgfX1cbiAgPlxuICAgIDxVcEFycm93IC8+XG4gIDwvSWNvbkJ1dHRvbj4pXG4pO1xuXG5jb25zdCBQYXJ0aWNpcGFudEdyb3VwID0gcHJvcHMgPT4gKFxuICAoPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgIDxJY29uQnV0dG9uXG4gICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMFwiLCB0b3A6IFwiNXB4XCIsIHpJbmRleDogMTAgfX1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLnBkZkRvd25sb2FkfVxuICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5wZGZzfVxuICAgICAgdG9vbHRpcD17IXByb3BzLnBkZnMgPyBcIllvdSBtdXN0IGdlbmVyYXRlIGZpcnN0XCIgOiBcIkRvd25sb2FkIHBkZlwifVxuICAgID5cbiAgICAgIDxQZGZJY29uIC8+XG4gICAgPC9JY29uQnV0dG9uPlxuICAgIDxUYWJsZVxuICAgICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgICBtdWx0aVNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgPlxuICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgICBlbmFibGVTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgICBhZGp1c3RGb3JDaGVja2JveD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+R3JvdXAge3Byb3BzLmdyb3VwSWQgKyAxfTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX1cbiAgICAgICAgc2hvd1Jvd0hvdmVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5wbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgY2xhc3NOYW1lPVwidGFibGUtcm93XCIga2V5PXtwbGF5ZXIuX2lkfT5cbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPntpICsgMX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1RhYmxlQm9keT5cbiAgICA8L1RhYmxlPlxuICAgIHsgbW92ZVVwQXJyb3cocHJvcHMubW92ZVVwLCBwcm9wcy5ncm91cElkKSB9XG4gICAgeyBtb3ZlRG93bkFycm93KHByb3BzLm1vdmVEb3duLCBwcm9wcy5ncm91cElkKSB9XG4gIDwvZGl2Pilcbik7XG5cblBhcnRpY2lwYW50R3JvdXAucHJvcFR5cGVzID0ge1xuICBwZGZEb3dubG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHBkZnM6IFByb3BUeXBlcy5BcnJheSxcbiAgZ3JvdXBJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgcGxheWVyczogUHJvcFR5cGVzLkFycmF5LFxuICBtb3ZlVXA6IFByb3BUeXBlcy5mdW5jLFxuICBtb3ZlRG93bjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2lwYW50R3JvdXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BhcnRpY2lwYW50R3JvdXAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9