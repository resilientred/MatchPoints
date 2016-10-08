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
	      }, _react2.default.createElement("div", null, "File Selected ", this.state.filename || "None"), _react2.default.createElement(_RaisedButton2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGFBQWEsWUFDWDthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQTVCa0I7O1dBNkJuQixhQUFhLFVBQUMsR0FDWjtXQUFNLFNBQVMsSUFDZjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO2FBQUssU0FBUyxFQUFFLFlBQ2hCO2NBQU8sU0FBUyxVQUFDLFFBQ2Y7ZUFBSztxQkFDTyxPQUFPLE9BQ2pCO3FCQUFVLEtBQ1Y7cUJBQVUsS0FDVjt1QkFFSDtBQUxHO0FBTUo7Y0FBTyxjQUNSO0FBMUNrQjs7V0EyQ25CLGFBQWEsVUFBQyxHQUNaO1NBQ0E7YUFBSyxTQUFTLEVBQUUsWUFDaEI7O21CQUNZLE1BQUssTUFDZjttQkFBVSxNQUFLLE1BQ2Y7bUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBN0NGOztXQUFLO2lCQUVIO2lCQUNBO2lCQUNBO21CQUFZO0FBSFo7WUFLSDs7Ozs7eUNBR0M7WUFBSyxXQUFXLG9CQUFVLFlBQVksS0FDdkM7Ozs7MkNBRXFCLFdBQVcsV0FDL0I7V0FBSSxLQUFLLE1BQU0sZUFBZSxVQUFVLGNBQ3RDLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFDbEM7Z0JBQ0Q7QUFFRDs7Y0FDRDs7Ozs0Q0FFQztZQUFLLFNBQ047Ozs7OEJBNkJDO2NBQVEsS0FBSyxNQUFNLGNBQWUsdUNBQUssV0FBVSxhQUMvQyx1Q0FBSyxXQUFVLGFBQ2IsNERBQWtCLE1BR3ZCOzs7OzhCQUVDOzhCQUNFO2FBRUU7a0JBQ0E7bUJBQVUsS0FBSztBQUZmLFFBREYsRUFLRSw2REFBb0IsS0FBSyxNQUFNLFlBQVkseUJBQzNDO2dCQUVFO3dCQUNBOzJCQUFpQjtBQUZqQixRQURGO2VBT0k7Z0JBQU8sS0FBSyxNQUNaO21CQUFVLEtBQ1Y7Z0JBQU87QUFIUCxRQURGLG9CQU9GO2dCQUVFO3dCQUNBOzJCQUFpQjtBQUZqQixRQURGLEVBS0UseUNBQU8sTUFBSyxVQUFTLE9BQU8sV0FFNUIsS0FHUDs7Ozs7OzttQkExRmtCLGEiLCJmaWxlIjoiMC42NjY3NDUyYTRiZDMxMWNiN2M0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICByaWdodDogMCxcbiAgbGVmdDogMCxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBvcGFjaXR5OiAwXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFfdXJpOiBudWxsLFxuICAgICAgZmlsZW5hbWU6IG51bGwsXG4gICAgICBmaWxldHlwZTogbnVsbCxcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICE9PSBuZXh0U3RhdGUucHJvY2Vzc2luZyB8fFxuICAgICAgdGhpcy5zdGF0ZS5maWxlbmFtZSAhPT0gbmV4dFN0YXRlLmZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIGNsdWJDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IGZhbHNlIH0pO1xuICB9XG4gIHVwZGF0ZUZpbGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgIHJlYWRlci5vbmxvYWQgPSAodXBsb2FkKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YV91cmk6IHVwbG9hZC50YXJnZXQucmVzdWx0LFxuICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxuICB1cGxvYWRGaWxlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgdXBsb2FkRmlsZSh7XG4gICAgICBkYXRhX3VyaTogdGhpcy5zdGF0ZS5kYXRhX3VyaSxcbiAgICAgIGZpbGVuYW1lOiB0aGlzLnN0YXRlLmZpbGVuYW1lLFxuICAgICAgZmlsZXR5cGU6IHRoaXMuc3RhdGUuZmlsZXR5cGVcbiAgICB9KTtcbiAgfVxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxkaXY+RmlsZSBTZWxlY3RlZCB7dGhpcy5zdGF0ZS5maWxlbmFtZSB8fCBcIk5vbmVcIn08L2Rpdj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWxlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJVcGxvYWRcIlxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9XCJsYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIHsgdGhpcy5sb2FkZXIoKSB9XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9