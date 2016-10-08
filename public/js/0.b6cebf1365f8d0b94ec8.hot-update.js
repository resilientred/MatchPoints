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
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _clientActions = __webpack_require__(643);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
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
	
	    _this.clubChange = function () {
	      _this.setState({ processing: false });
	    };
	
	    _this.updateFile = function (e) {
	      var reader = new FileReader();
	      var file = e.target.files[0];
	      _this.setState({ processing: true });
	      reader.onload = function (upload) {
	        _this.setState({
	          data_uri: upload.target.result,
	          filename: file.name,
	          filetype: file.type,
	          processing: false
	        });
	      };
	      reader.readAsDataURL(file);
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      _this.setState({ processing: true });
	      (0, _clientActions.uploadFile)({
	        data_uri: _this.state.data_uri,
	        filename: _this.state.filename,
	        filetype: _this.state.filetype
	      });
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
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.listener = _clubStore2.default.addListener(this.clubChanged);
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.processing !== nextState.processing || this.state.filename !== nextState.filename) {
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.listener.remove();
	    }
	  }, {
	    key: "loader",
	    value: function loader() {
	      return this.state.processing && _react2.default.createElement("div", { className: "overlay" }, _react2.default.createElement("div", { className: "loading" }, _react2.default.createElement(_CircularProgress2.default, { size: 2 })));
	    }
	  }, {
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
	      }, _react2.default.createElement("input", { type: "submit", style: style })), this.loader());
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGFBQWEsWUFDWDthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQTVCa0I7O1dBNkJuQixhQUFhLFVBQUMsR0FDWjtXQUFNLFNBQVMsSUFDZjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO2FBQUssU0FBUyxFQUFFLFlBQ2hCO2NBQU8sU0FBUyxVQUFDLFFBQ2Y7ZUFBSztxQkFDTyxPQUFPLE9BQ2pCO3FCQUFVLEtBQ1Y7cUJBQVUsS0FDVjt1QkFFSDtBQUxHO0FBTUo7Y0FBTyxjQUNSO0FBMUNrQjs7V0EyQ25CLGFBQWEsVUFBQyxHQUNaO1NBQ0E7YUFBSyxTQUFTLEVBQUUsWUFDaEI7O21CQUNZLE1BQUssTUFDZjttQkFBVSxNQUFLLE1BQ2Y7bUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBN0NGOztXQUFLO2lCQUVIO2lCQUNBO2lCQUNBO21CQUFZO0FBSFo7WUFLSDs7Ozs7eUNBR0M7WUFBSyxXQUFXLG9CQUFVLFlBQVksS0FDdkM7Ozs7MkNBRXFCLFdBQVcsV0FDL0I7V0FBSSxLQUFLLE1BQU0sZUFBZSxVQUFVLGNBQ3RDLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFDbEM7Z0JBQ0Q7QUFFRDs7Y0FDRDs7Ozs0Q0FFQztZQUFLLFNBQ047Ozs7OEJBNkJDO2NBQVEsS0FBSyxNQUFNLGNBQWUsdUNBQUssV0FBVSxhQUMvQyx1Q0FBSyxXQUFVLGFBQ2IsNERBQWtCLE1BR3ZCOzs7OzhCQUVDOzhCQUNFO2FBRUU7a0JBQ0E7bUJBQVUsS0FBSztBQUZmLFFBREYsa0JBS0U7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREYsRUFLRSx5Q0FBTyxNQUFLLFVBQVMsT0FBTyxXQUU1QixLQUdQOzs7Ozs7O21CQXpGa0IsYSIsImZpbGUiOiIwLmI2Y2ViZjEzNjVmOGQwYjk0ZWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YV91cmk6IG51bGwsXG4gICAgICBmaWxlbmFtZTogbnVsbCxcbiAgICAgIGZpbGV0eXBlOiBudWxsLFxuICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgIT09IG5leHRTdGF0ZS5wcm9jZXNzaW5nIHx8XG4gICAgICB0aGlzLnN0YXRlLmZpbGVuYW1lICE9PSBuZXh0U3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgY2x1YkNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gIH1cbiAgdXBkYXRlRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICh1cGxvYWQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhX3VyaTogdXBsb2FkLnRhcmdldC5yZXN1bHQsXG4gICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgIGZpbGV0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogdHJ1ZSB9KTtcbiAgICB1cGxvYWRGaWxlKHtcbiAgICAgIGRhdGFfdXJpOiB0aGlzLnN0YXRlLmRhdGFfdXJpLFxuICAgICAgZmlsZW5hbWU6IHRoaXMuc3RhdGUuZmlsZW5hbWUsXG4gICAgICBmaWxldHlwZTogdGhpcy5zdGF0ZS5maWxldHlwZVxuICAgIH0pO1xuICB9XG4gIGxvYWRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUucHJvY2Vzc2luZyAmJiAoPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PikpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgaWQ9XCJ1cGxvYWQtZm9ybVwiXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBsb2FkRmlsZX1cbiAgICAgID5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWxlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJVcGxvYWRcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIHsgdGhpcy5sb2FkZXIoKSB9XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9