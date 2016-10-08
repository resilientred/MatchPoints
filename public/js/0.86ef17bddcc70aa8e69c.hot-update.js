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
	
	      console.log("rendering...");
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement("h1", null, "Hello"), _react2.default.createElement(_RaisedButton2.default, {
	        label: "Choose a file (.csv or .json)"
	      }, _react2.default.createElement("input", {
	        type: "file",
	        name: "file",
	        className: "upload-file",
	        onChange: function onChange(e) {
	          return _this2.setState(e.target.value);
	        }
	      })), _react2.default.createElement(_RaisedButton2.default, { label: "Upload" }, _react2.default.createElement("input", { type: "submit" })));
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCOzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBS1IsYUFBYSxVQUFDLEdBQ1o7U0FDQTtXQUFNLEtBQUssSUFDWDtVQUFHLE9BQU8sUUFBUSxNQUFLLE1BQ3ZCO3NDQUNEO0FBVEM7O1dBQUs7YUFDRztBQUFOO1lBRUg7Ozs7OzhCQU9RO29CQUNQOztlQUFRLElBQ1I7OEJBQ0U7YUFFRTtrQkFDQTttQkFBVSxLQUFLO0FBRmYsUUFERixFQUtFLG9FQUNBO2dCQUNRO0FBQU4sUUFERjtlQUtJO2VBQ0E7b0JBQ0E7bUJBQVU7a0JBQUssT0FBSyxTQUFTLEVBQUUsT0FBTztBQUp4QztBQUNFLFFBREYsSUFPRix3REFBYyxPQUFNLFlBQ2xCLHlDQUFPLE1BSWQ7Ozs7Ozs7bUJBckNrQixhIiwiZmlsZSI6IjAuODZlZjE3YmRkY2M3MGFhOGU2OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGU6IG51bGxcbiAgICB9O1xuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZkLmFwcGVuZChcImZpbGVcIiwgdGhpcy5zdGF0ZS5maWxlKTtcbiAgICB1cGxvYWRGaWxlKGZkKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmcuLi5cIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWZpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJVcGxvYWRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==