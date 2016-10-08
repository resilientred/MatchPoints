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
	
	var style = {
	  cursor: "pointer",
	  position: "absolute",
	  top: 0,
	  bottom: 0,
	  right: 0,
	  left: 0,
	  width: "100%",
	  opacity: 0
	};
	
	var FileUploader = function (_Component) {
	  _inherits(FileUploader, _Component);
	
	  function FileUploader(props) {
	    _classCallCheck(this, FileUploader);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileUploader).call(this, props));
	
	    _this.updateFile = function (e) {
	      console.log(e.target.files);
	      var reader = new FileReader();
	      var file = e.target.files[0];
	
	      reader.onload = function (upload) {
	        _this.setState({
	          data_uri: upload.target.result,
	          filename: file.name,
	          filetype: file.type
	        });
	      };
	      reader.readAsDataURL(file);
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	
	      // const fd = new FormData();
	      // fd.append("file", this.state.file);
	      // uploadFile(fd);
	    };
	
	    _this.state = {
	      data_uri: null,
	      filename: null,
	      filetype: null,
	      processing: false
	    };
	    return _this;
	  }
	
	  _createClass(FileUploader, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement(_RaisedButton2.default, {
	        label: "Choose a file (.csv or .json)",
	        labelPosition: "before",
	        containerElement: "label"
	      }, _react2.default.createElement("input", {
	        type: "file",
	        value: this.state.file,
	        onChange: this.updateFile,
	        style: style
	      })), _react2.default.createElement(_RaisedButton2.default, {
	        label: "Upload",
	        labelPosition: "before",
	        containerElement: "label"
	      }, _react2.default.createElement("input", { type: "submit", style: style })));
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtXQUVKO2FBQ0E7UUFDQTtXQUNBO1VBQ0E7U0FDQTtVQUNBO1lBQVM7QUFQVDs7S0FTbUI7MkJBQ25COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0FRUixhQUFhLFVBQUMsR0FDWjtlQUFRLElBQUksRUFBRSxPQUNkO1dBQU0sU0FBUyxJQUNmO1dBQU0sT0FBTyxFQUFFLE9BQU8sTUFFdEI7O2NBQU8sU0FBUyxVQUFDLFFBQ2Y7ZUFBSztxQkFDTyxPQUFPLE9BQ2pCO3FCQUFVLEtBQ1Y7cUJBQVUsS0FFYjtBQUpHO0FBS0o7Y0FBTyxjQUNSO0FBdEJrQjs7V0F1Qm5CLGFBQWEsVUFBQyxHQUNaO1NBS0Q7Ozs7O0FBM0JDOztXQUFLO2lCQUVIO2lCQUNBO2lCQUNBO21CQUFZO0FBSFo7WUFLSDs7Ozs7OEJBdUJDOzhCQUNFO2FBRUU7a0JBQ0E7bUJBQVUsS0FBSztBQUZmLFFBREYsa0JBS0U7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREYsRUFLRSx5Q0FBTyxNQUFLLFVBQVMsT0FJNUI7Ozs7Ozs7bUJBM0RrQixhIiwiZmlsZSI6IjAuNTEwZjhlNWU1MWIwMDlmMmY3MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICByaWdodDogMCxcbiAgbGVmdDogMCxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBvcGFjaXR5OiAwXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFfdXJpOiBudWxsLFxuICAgICAgZmlsZW5hbWU6IG51bGwsXG4gICAgICBmaWxldHlwZTogbnVsbCxcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICB1cGRhdGVGaWxlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcyk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cbiAgICByZWFkZXIub25sb2FkID0gKHVwbG9hZCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGFfdXJpOiB1cGxvYWQudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgZmlsZXR5cGU6IGZpbGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gZmQuYXBwZW5kKFwiZmlsZVwiLCB0aGlzLnN0YXRlLmZpbGUpO1xuICAgIC8vIHVwbG9hZEZpbGUoZmQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgaWQ9XCJ1cGxvYWQtZm9ybVwiXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBsb2FkRmlsZX1cbiAgICAgID5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWxlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJVcGxvYWRcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9