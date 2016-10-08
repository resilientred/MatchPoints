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
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, UploadDialog);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UploadDialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClose = function () {
	      _this.props.handleClose("uploadDialogOpen");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
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
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Close",
	        secondary: Boolean(true),
	        onTouchTap: this.handleClose
	      })];
	
	      return _react2.default.createElement(_Dialog2.default, {
	        title: "Upload player lists",
	        actions: actions,
	        modal: false,
	        open: this.props.open,
	        onRequestClose: this.handleClose
	      }, _react2.default.createElement(_fileUploader2.default, {
	        handleClose: this.handleClose }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi91cGxvYWREaWFsb2cuanM/ZDk2MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjs7Ozs7Ozs7Ozs7Ozs7Mk1BWW5CLGNBQWMsWUFDWjthQUFLLE1BQU0sWUFDWjs7Ozs7OzJDQVRxQixXQUNwQjtXQUFJLEtBQUssTUFBTSxTQUFTLFVBQVUsTUFDaEM7Z0JBQ0Q7QUFFRDs7Y0FDRDs7Ozs4QkFLQztXQUFNO2dCQUdGO29CQUFXLFFBQ1g7cUJBQVksS0FJaEI7QUFOSSxRQURGLENBRGM7OzhCQVFSO2dCQUVOO2tCQUNBO2dCQUNBO2VBQU0sS0FBSyxNQUNYO3lCQUFnQixLQUFLO0FBSnJCLFFBRE0sRUFPTjtzQkFDZSxLQUVsQixXQUZLOzs7Ozs7O0FBaENhLGNBQ1o7U0FDQyxpQkFDTjtnQkFBYSxpQkFBVTtBQUR2QjttQkFGaUIsYSIsImZpbGUiOiIwLjliMjlmZTUwMDA5ZWE2NzVkMWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIm1hdGVyaWFsLXVpL0RpYWxvZ1wiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSBcIi4vZmlsZVVwbG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4gIT09IG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZShcInVwbG9hZERpYWxvZ09wZW5cIilcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAvPlxuICAgIF07XG5cbiAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiVXBsb2FkIHBsYXllciBsaXN0c1wiXG4gICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgPlxuICAgICAgPEZpbGVVcGxvYWRlclxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0vPlxuICAgIDwvRGlhbG9nPik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vdXBsb2FkRGlhbG9nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==