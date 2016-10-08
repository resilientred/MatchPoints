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
	        containerElement: "label"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUluQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGNBQWMsWUFDWjthQUFLLFNBQVMsRUFBRSxZQUNoQjtXQUFJLE1BQUssY0FBYyxvQkFBVSxpQkFBaUIsUUFBUSxRQUN4RDtlQUFLLE1BQ047QUFDRjtBQS9Ca0I7O1dBZ0NuQixhQUFhLFVBQUMsR0FDWjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO1dBQUksV0FBVyxLQUFLLEtBQUssT0FDdkI7YUFBTSxTQUFTLElBQ2Y7ZUFBSyxTQUFTLEVBQUUsWUFDaEI7Z0JBQU8sU0FBUyxVQUFDLFFBQ2Y7aUJBQUs7dUJBQ08sT0FBTyxPQUNqQjt1QkFBVSxLQUNWO3VCQUFVLEtBQ1Y7eUJBRUg7QUFMRztBQU1KO2dCQUFPLGNBQ1I7QUFaRCxjQWFFO2VBQUs7bURBQ21DLEtBRXpDO0FBRkc7QUFHTDtBQW5Ea0I7O1dBb0RuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQUksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFVBQzNEO2VBQUssU0FBUyxFQUFFLFlBQ2hCO2VBQUssWUFBWSxvQkFBVSxpQkFBaUIsUUFDNUM7O3FCQUNZLE1BQUssTUFDZjtxQkFBVSxNQUFLLE1BQ2Y7cUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBS0w7QUE3REM7O1dBQUs7aUJBRUg7aUJBQ0E7aUJBQ0E7bUJBQVk7QUFIWjtZQUtIOzs7Ozt5Q0FHQztZQUFLLFdBQVcsb0JBQVUsWUFBWSxLQUN2Qzs7OzsyQ0FFcUIsV0FBVyxXQUMvQjtXQUFJLEtBQUssTUFBTSxlQUFlLFVBQVUsY0FDdEMsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUNsQztnQkFDRDtBQUVEOztjQUNEOzs7OzRDQUVDO1lBQUssU0FDTjs7Ozs4QkF5Q0M7Y0FBUSxLQUFLLE1BQU0sY0FBZSx1Q0FBSyxXQUFVLGFBQy9DLHVDQUFLLFdBQVUsYUFDYiw0REFBa0IsTUFHdkI7Ozs7OEJBRUM7OEJBQ0U7YUFFRTtrQkFDQTttQkFBVSxLQUFLO0FBRmYsUUFERixFQUtFLGlFQUF5QixLQUFLLE1BQU0sWUFBWSwwQkFDaEQ7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREYsRUFLRSx5Q0FBTyxNQUFLLFVBQVMsT0FBTyxXQUU1QixLQUdQOzs7Ozs7O0FBekdrQixjQUNaO2dCQUNRLGlCQUFVO0FBQXZCO21CQUZpQixhIiwiZmlsZSI6IjAuNzNkZTBlZWM2OTgzYjM1ZmFlMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICByaWdodDogMCxcbiAgbGVmdDogMCxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBvcGFjaXR5OiAwXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YV91cmk6IG51bGwsXG4gICAgICBmaWxlbmFtZTogbnVsbCxcbiAgICAgIGZpbGV0eXBlOiBudWxsLFxuICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgIT09IG5leHRTdGF0ZS5wcm9jZXNzaW5nIHx8XG4gICAgICB0aGlzLnN0YXRlLmZpbGVuYW1lICE9PSBuZXh0U3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgY2x1YkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnBsYXllckxlbiAhPT0gQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCkucGxheWVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKVxuICAgIH1cbiAgfVxuICB1cGRhdGVGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKC9jc3Z8anNvbi8udGVzdChmaWxlLnR5cGUpKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKHVwbG9hZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhX3VyaTogdXBsb2FkLnRhcmdldC5yZXN1bHQsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZW5hbWU6IGBVbnJlY29nbml6ZWQgZmlsZSB0eXBlOiAuJHtmaWxlLnR5cGV9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3VyaSAmJiB0aGlzLnN0YXRlLmZpbGV0eXBlICYmIHRoaXMuc3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wbGF5ZXJMZW4gPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aFxuICAgICAgdXBsb2FkRmlsZSh7XG4gICAgICAgIGRhdGFfdXJpOiB0aGlzLnN0YXRlLmRhdGFfdXJpLFxuICAgICAgICBmaWxlbmFtZTogdGhpcy5zdGF0ZS5maWxlbmFtZSxcbiAgICAgICAgZmlsZXR5cGU6IHRoaXMuc3RhdGUuZmlsZXR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxkaXY+e2BGaWxlIFNlbGVjdGVkOiAgJHt0aGlzLnN0YXRlLmZpbGVuYW1lIHx8IFwiTm9uZVwifWB9PC9kaXY+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiVXBsb2FkXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICB7IHRoaXMubG9hZGVyKCkgfVxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==