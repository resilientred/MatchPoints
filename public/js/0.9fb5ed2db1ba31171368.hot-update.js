webpackHotUpdate(0,{

/***/ 685:
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
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _fileUploader = __webpack_require__(686);
	
	var _fileUploader2 = _interopRequireDefault(_fileUploader);
	
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
	
	var UploadDialog = function (_Component) {
	  _inherits(UploadDialog, _Component);
	
	  function UploadDialog() {
	    _classCallCheck(this, UploadDialog);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UploadDialog).apply(this, arguments));
	  }
	
	  _createClass(UploadDialog, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      if (this.props.open !== nextProps.open) {
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Close",
	        secondary: Boolean(true),
	        onTouchTap: function onTouchTap() {
	          return _this2.props.handleClose("uploadDialogOpen");
	        }
	      })];
	
	      return _react2.default.createElement(_Dialog2.default, {
	        title: "Upload player lists",
	        actions: actions,
	        modal: false,
	        open: this.props.open,
	        onRequestClose: function onRequestClose() {
	          return _this2.props.handleClose("uploadDialogOpen");
	        }
	      }, _react2.default.createElement(_fileUploader2.default, null));
	    }
	  }]);
	
	  return UploadDialog;
	}(_react.Component);
	
	UploadDialog.propTypes = {
	  open: _react.PropTypes.bool,
	  handleClose: _react.PropTypes.func
	};
	exports.default = UploadDialog;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi91cGxvYWREaWFsb2cuanM/ZDk2MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjs7Ozs7Ozs7Ozs7MkNBS0csV0FDcEI7V0FBSSxLQUFLLE1BQU0sU0FBUyxVQUFVLE1BQ2hDO2dCQUNEO0FBRUQ7O2NBQ0Q7Ozs7OEJBQ1E7b0JBQ1A7O1dBQU07Z0JBR0Y7b0JBQVcsUUFDWDtxQkFBWTtrQkFBTSxPQUFLLE1BQU0sWUFBWTtBQUk3QztBQU5JLFFBREYsQ0FEYzs7OEJBUVI7Z0JBRU47a0JBQ0E7Z0JBQ0E7ZUFBTSxLQUFLLE1BQ1g7eUJBQWdCO2tCQUFNLE9BQUssTUFBTSxZQUFZO0FBTHZDO0FBQ04sUUFETSxFQU9OLHNEQUVIOzs7Ozs7O0FBOUJrQixjQUNaO1NBQ0MsaUJBQ047Z0JBQWEsaUJBQVU7QUFEdkI7bUJBRmlCLGEiLCJmaWxlIjoiMC45ZmI1ZWQyZGIxYmEzMTE3MTM2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gXCIuL2ZpbGVVcGxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWREaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDbG9zZShcInVwbG9hZERpYWxvZ09wZW5cIil9XG4gICAgICAvPlxuICAgIF07XG5cbiAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiVXBsb2FkIHBsYXllciBsaXN0c1wiXG4gICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoXCJ1cGxvYWREaWFsb2dPcGVuXCIpfVxuICAgID5cbiAgICAgIDxGaWxlVXBsb2FkZXIgLz5cbiAgICA8L0RpYWxvZz4pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3VwbG9hZERpYWxvZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=