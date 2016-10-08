webpackHotUpdate(0,{

/***/ 684:
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
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _clientActions = __webpack_require__(643);
	
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
	
	var FileUploader = function (_Component) {
	  _inherits(FileUploader, _Component);
	
	  function FileUploader(props) {
	    _classCallCheck(this, FileUploader);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileUploader).call(this, props));
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      var fd = new FormData();
	      fd.append("file", _this.state.file);
	      (0, _clientActions.uploadFile)(fd);
	    };
	
	    _this.state = {
	      file: null
	    };
	    return _this;
	  }
	
	  _createClass(FileUploader, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement("h1", null, "Hello"), _react2.default.createElement(_RaisedButton2.default, {
	        label: "Choose a file (.csv or .json)",
	        labelPosition: "before",
	        containerElement: "label"
	      }, _react2.default.createElement("input", {
	        type: "file",
	        onChange: function onChange(e) {
	          return _this2.setState(e.target.value);
	        },
	        style: {
	          cursor: 'pointer',
	          position: 'absolute',
	          top: 0,
	          bottom: 0,
	          right: 0,
	          left: 0,
	          width: '100%',
	          opacity: 0
	        }
	      })), _react2.default.createElement(_RaisedButton2.default, { label: "Upload" }, _react2.default.createElement("input", { type: "submit" })));
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCOzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBS1IsYUFBYSxVQUFDLEdBQ1o7U0FDQTtXQUFNLEtBQUssSUFDWDtVQUFHLE9BQU8sUUFBUSxNQUFLLE1BQ3ZCO3NDQUNEO0FBVEM7O1dBQUs7YUFDRztBQUFOO1lBRUg7Ozs7OzhCQU9RO29CQUNQOzs4QkFDRTthQUVFO2tCQUNBO21CQUFVLEtBQUs7QUFGZixRQURGLEVBS0Usb0VBQ0E7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTttQkFBVTtrQkFBSyxPQUFLLFNBQVMsRUFBRSxPQUFPO0FBQ3RDOzttQkFFRTtxQkFDQTtnQkFDQTttQkFDQTtrQkFDQTtpQkFDQTtrQkFDQTtvQkFBUztBQVBUO0FBSEYsUUFERixJQWVGLHdEQUFjLE9BQU0sWUFDbEIseUNBQU8sTUFJZDs7Ozs7OzttQkE5Q2tCLGEiLCJmaWxlIjoiMC43Njg4YzBhMWEwNjk3Y2ZmMDJlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZTogbnVsbFxuICAgIH07XG4gIH1cbiAgdXBsb2FkRmlsZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZmQuYXBwZW5kKFwiZmlsZVwiLCB0aGlzLnN0YXRlLmZpbGUpO1xuICAgIHVwbG9hZEZpbGUoZmQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgaWQ9XCJ1cGxvYWQtZm9ybVwiXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBsb2FkRmlsZX1cbiAgICAgID5cbiAgICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJVcGxvYWRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==