webpackHotUpdate(0,{

/***/ 686:
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
	
	    _this.clubChanged = function () {
	      _this.setState({ processing: false });
	      if (_this.playerLen !== _clubStore2.default.getCurrentClub().players.length) {
	        _this.props.handleClose();
	      }
	    };
	
	    _this.updateFile = function (e) {
	      var file = e.target.files[0];
	      if (/csv|json/.test(file.type)) {
	        var reader = new FileReader();
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
	      } else {
	        _this.setState({
	          filename: "Unrecognized file type: ." + file.type
	        });
	      }
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      if (_this.state.data_uri && _this.state.filetype && _this.state.filename) {
	        _this.setState({ processing: true });
	        _this.playerLen = _clubStore2.default.getCurrentClub().players.length;
	        (0, _clientActions.uploadFile)({
	          data_uri: _this.state.data_uri,
	          filename: _this.state.filename,
	          filetype: _this.state.filetype
	        });
	      }
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
	      }, _react2.default.createElement("div", null, "File Selected:  " + (this.state.filename || "None")), _react2.default.createElement(_RaisedButton2.default, {
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
	        containerElement: "label",
	        primary: Boolean(true)
	      }, _react2.default.createElement("input", { type: "submit", style: style })), this.loader());
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	FileUploader.propTypes = {
	  handleClose: _react.PropTypes.func
	};
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUluQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGNBQWMsWUFDWjthQUFLLFNBQVMsRUFBRSxZQUNoQjtXQUFJLE1BQUssY0FBYyxvQkFBVSxpQkFBaUIsUUFBUSxRQUN4RDtlQUFLLE1BQ047QUFDRjtBQS9Ca0I7O1dBZ0NuQixhQUFhLFVBQUMsR0FDWjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO1dBQUksV0FBVyxLQUFLLEtBQUssT0FDdkI7YUFBTSxTQUFTLElBQ2Y7ZUFBSyxTQUFTLEVBQUUsWUFDaEI7Z0JBQU8sU0FBUyxVQUFDLFFBQ2Y7aUJBQUs7dUJBQ08sT0FBTyxPQUNqQjt1QkFBVSxLQUNWO3VCQUFVLEtBQ1Y7eUJBRUg7QUFMRztBQU1KO2dCQUFPLGNBQ1I7QUFaRCxjQWFFO2VBQUs7bURBQ21DLEtBRXpDO0FBRkc7QUFHTDtBQW5Ea0I7O1dBb0RuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQUksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFVBQzNEO2VBQUssU0FBUyxFQUFFLFlBQ2hCO2VBQUssWUFBWSxvQkFBVSxpQkFBaUIsUUFDNUM7O3FCQUNZLE1BQUssTUFDZjtxQkFBVSxNQUFLLE1BQ2Y7cUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBS0w7QUE3REM7O1dBQUs7aUJBRUg7aUJBQ0E7aUJBQ0E7bUJBQVk7QUFIWjtZQUtIOzs7Ozt5Q0FHQztZQUFLLFdBQVcsb0JBQVUsWUFBWSxLQUN2Qzs7OzsyQ0FFcUIsV0FBVyxXQUMvQjtXQUFJLEtBQUssTUFBTSxlQUFlLFVBQVUsY0FDdEMsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUNsQztnQkFDRDtBQUVEOztjQUNEOzs7OzRDQUVDO1lBQUssU0FDTjs7Ozs4QkF5Q0M7Y0FBUSxLQUFLLE1BQU0sY0FBZSx1Q0FBSyxXQUFVLGFBQy9DLHVDQUFLLFdBQVUsYUFDYiw0REFBa0IsTUFHdkI7Ozs7OEJBRUM7OEJBQ0U7YUFFRTtrQkFDQTttQkFBVSxLQUFLO0FBRmYsUUFERixFQUtFLGlFQUF5QixLQUFLLE1BQU0sWUFBWSwwQkFDaEQ7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQ0E7a0JBQVMsUUFBUTtBQUhqQixRQURGLEVBTUUseUNBQU8sTUFBSyxVQUFTLE9BQU8sV0FFNUIsS0FHUDs7Ozs7OztBQTFHa0IsY0FDWjtnQkFDUSxpQkFBVTtBQUF2QjttQkFGaUIsYSIsImZpbGUiOiIwLjgyYmI2ZjU0Yzk1NzNhMjNkZGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgcmlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb3BhY2l0eTogMFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFfdXJpOiBudWxsLFxuICAgICAgZmlsZW5hbWU6IG51bGwsXG4gICAgICBmaWxldHlwZTogbnVsbCxcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICE9PSBuZXh0U3RhdGUucHJvY2Vzc2luZyB8fFxuICAgICAgdGhpcy5zdGF0ZS5maWxlbmFtZSAhPT0gbmV4dFN0YXRlLmZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIGNsdWJDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5wbGF5ZXJMZW4gIT09IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUZpbGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoL2Nzdnxqc29uLy50ZXN0KGZpbGUudHlwZSkpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogdHJ1ZSB9KTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAodXBsb2FkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGFfdXJpOiB1cGxvYWQudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGV0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWxlbmFtZTogYFVucmVjb2duaXplZCBmaWxlIHR5cGU6IC4ke2ZpbGUudHlwZX1gXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdXBsb2FkRmlsZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmRhdGFfdXJpICYmIHRoaXMuc3RhdGUuZmlsZXR5cGUgJiYgdGhpcy5zdGF0ZS5maWxlbmFtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICB0aGlzLnBsYXllckxlbiA9IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLnBsYXllcnMubGVuZ3RoO1xuICAgICAgdXBsb2FkRmlsZSh7XG4gICAgICAgIGRhdGFfdXJpOiB0aGlzLnN0YXRlLmRhdGFfdXJpLFxuICAgICAgICBmaWxlbmFtZTogdGhpcy5zdGF0ZS5maWxlbmFtZSxcbiAgICAgICAgZmlsZXR5cGU6IHRoaXMuc3RhdGUuZmlsZXR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxkaXY+e2BGaWxlIFNlbGVjdGVkOiAgJHt0aGlzLnN0YXRlLmZpbGVuYW1lIHx8IFwiTm9uZVwifWB9PC9kaXY+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiVXBsb2FkXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIHsgdGhpcy5sb2FkZXIoKSB9XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9