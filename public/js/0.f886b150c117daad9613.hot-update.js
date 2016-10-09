webpackHotUpdate(0,{

/***/ 648:
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
	
	var _TextField = __webpack_require__(497);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _IconButton = __webpack_require__(456);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _close = __webpack_require__(649);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _clientActions = __webpack_require__(643);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	
	var PlayerForm = function (_React$Component) {
	  _inherits(PlayerForm, _React$Component);
	
	  function PlayerForm(props) {
	    _classCallCheck(this, PlayerForm);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerForm).call(this, props));
	
	    _this.handleSubmit = function () {
	      (0, _clientActions.addPlayer)(_clubStore2.default.getCurrentClub()._id, _this.state);
	      _this.setState({ name: "", rating: "0" });
	    };
	
	    _this.state = {
	      name: "",
	      rating: "0"
	    };
	    return _this;
	  }
	
	  _createClass(PlayerForm, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      if (!prevProps.modalOpen && this.props.modalOpen) {
	        document.getElementById("name").focus();
	      }
	    }
	  }, {
	    key: "updateField",
	    value: function updateField(name, e) {
	      this.setState(_defineProperty({}, name, e.target.value));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement("div", {
	        className: "player-form",
	        style: { display: this.props.modalOpen ? "block" : "none" }
	      }, _react2.default.createElement("form", null, _react2.default.createElement(_IconButton2.default, {
	        style: { position: "absolute", right: "10px", top: "10px" },
	        iconClassName: "material-icons",
	        onClick: this.props.closeModal,
	        tooltip: "Close Form", touch: Boolean(true)
	      }, _react2.default.createElement(_close2.default, null)), _react2.default.createElement("h3", null, "Player Form"), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        floatingLabelText: "Name",
	        id: "name",
	        hintText: "Name",
	        onChange: function onChange(e) {
	          return _this2.updateField("name", e);
	        },
	        value: this.state.name,
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        floatingLabelText: "Rating",
	        hintText: "Rating",
	        onChange: function onChange(e) {
	          return _this2.updateField("rating", e);
	        },
	        value: this.state.rating, pattern: "^\\d{2,4}$",
	        required: true
	      })), _react2.default.createElement(_RaisedButton2.default, {
	        fullWidth: Boolean(true),
	        label: "Register Player",
	        style: { marginTop: "20px" },
	        onTouchTap: this.handleSubmit
	      })));
	    }
	  }]);
	
	  return PlayerForm;
	}(_react2.default.Component);
	
	PlayerForm.propTypes = {
	  modalOpen: _react.PropTypes.bool,
	  closeModal: _react.PropTypes.func
	};
	exports.default = PlayerForm;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wbGF5ZXJGb3JtLmpzP2QxOGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTt5QkFLSjs7dUJBQVksT0FBTzsyQkFBQTs7K0ZBQ1g7O1dBY1IsZUFBZSxZQUNiO3FDQUFVLG9CQUFVLGlCQUFpQixLQUFLLE1BQzFDO2FBQUssU0FBUyxFQUFFLE1BQU0sSUFBSSxRQUMzQjtBQWhCQzs7V0FBSzthQUVIO2VBQVE7QUFEUjtZQUdIOzs7Ozt3Q0FDa0IsV0FDakI7V0FBSSxDQUFDLFVBQVUsYUFBYSxLQUFLLE1BQU0sV0FDckM7a0JBQVMsZUFBZSxRQUN6QjtBQUNGOzs7O2lDQUNXLE1BQU0sR0FDaEI7WUFBSyw2QkFBWSxNQUFPLEVBQUUsT0FDM0I7Ozs7OEJBS1E7b0JBQ1A7OzhCQUFRO29CQUVOO2dCQUFPLEVBQUUsU0FBUyxLQUFLLE1BQU0sWUFBWSxVQUFVO0FBRG5ELFFBRE0sa0JBSU4sNENBQ0U7Z0JBQ1MsRUFBRSxVQUFVLFlBQVksT0FBTyxRQUFRLEtBQzlDO3dCQUNBO2tCQUFTLEtBQUssTUFDZDtrQkFBUSxjQUFhLE9BQU8sUUFBUTtBQUhwQyxRQURGLEVBTUUsK0NBTkYsUUFRQSwwRUFDQTtlQUdJOzRCQUNBO2FBQ0E7bUJBQ0E7bUJBQVUsa0JBQUMsR0FBRDtrQkFBTyxPQUFLLFlBQVksUUFBUTtBQUMxQztnQkFBTyxLQUFLLE1BQ1o7bUJBUEY7QUFDRSxRQURGLENBREYsbUJBV0E7ZUFHSTs0QkFDQTttQkFDQTttQkFBVSxrQkFBQyxHQUFEO2tCQUFPLE9BQUssWUFBWSxVQUFVO0FBQzVDO2dCQUFPLEtBQUssTUFBTSxRQUFRLFNBQzFCO21CQU5GO0FBQ0UsUUFERixDQURGO29CQVdhLFFBQ1g7Z0JBQ0E7Z0JBQU8sRUFBRSxXQUNUO3FCQUFZLEtBSW5CO0FBUE8sUUFERixDQS9CRjs7Ozs7R0E3Qm1CLGdCQUFNOztBQUF6QixZQUNHO2NBQ00saUJBQ1g7ZUFBWSxpQkFBVTtBQUR0QjttQkFxRVcsVyIsImZpbGUiOiIwLmY4ODZiMTUwYzExN2RhYWQ5NjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcbmltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuY2xhc3MgUGxheWVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kYWxPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcmF0aW5nOiBcIjBcIlxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLm1vZGFsT3BlbiAmJiB0aGlzLnByb3BzLm1vZGFsT3Blbikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUZpZWxkKG5hbWUsIGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgYWRkUGxheWVyKENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLl9pZCwgdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIHJhdGluZzogXCIwXCIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicGxheWVyLWZvcm1cIlxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5wcm9wcy5tb2RhbE9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgID5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIjEwcHhcIiB9fVxuICAgICAgICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIHRvb2x0aXA9XCJDbG9zZSBGb3JtXCIgdG91Y2g9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8aDM+UGxheWVyIEZvcm08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJOYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVGaWVsZChcIm5hbWVcIiwgZSl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlJhdGluZ1wiXG4gICAgICAgICAgICBoaW50VGV4dD1cIlJhdGluZ1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRmllbGQoXCJyYXRpbmdcIiwgZSl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRpbmd9IHBhdHRlcm49XCJeXFxkezIsNH0kXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGg9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbGFiZWw9XCJSZWdpc3RlciBQbGF5ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cbiAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckZvcm07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BsYXllckZvcm0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9