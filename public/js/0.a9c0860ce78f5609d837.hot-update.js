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
	      if (_this.playerLen !== _clubStore2.default.getCurrentClub().players.length) {} else {}
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
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGNBQWMsWUFDWjthQUFLLFNBQVMsRUFBRSxZQUNoQjtXQUFJLE1BQUssY0FBYyxvQkFBVSxpQkFBaUIsUUFBUSxRQUV6RCxDQUZELE9BSUMsQ0FDRjtBQWpDa0I7O1dBa0NuQixhQUFhLFVBQUMsR0FDWjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO1dBQUksV0FBVyxLQUFLLEtBQUssT0FDdkI7YUFBTSxTQUFTLElBQ2Y7ZUFBSyxTQUFTLEVBQUUsWUFDaEI7Z0JBQU8sU0FBUyxVQUFDLFFBQ2Y7aUJBQUs7dUJBQ08sT0FBTyxPQUNqQjt1QkFBVSxLQUNWO3VCQUFVLEtBQ1Y7eUJBRUg7QUFMRztBQU1KO2dCQUFPLGNBQ1I7QUFaRCxjQWFFO2VBQUs7bURBQ21DLEtBRXpDO0FBRkc7QUFHTDtBQXJEa0I7O1dBc0RuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQUksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFVBQzNEO2VBQUssU0FBUyxFQUFFLFlBQ2hCO2VBQUssWUFBWSxvQkFBVSxpQkFBaUIsUUFDNUM7O3FCQUNZLE1BQUssTUFDZjtxQkFBVSxNQUFLLE1BQ2Y7cUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBS0w7QUEvREM7O1dBQUs7aUJBRUg7aUJBQ0E7aUJBQ0E7bUJBQVk7QUFIWjtZQUtIOzs7Ozt5Q0FHQztZQUFLLFdBQVcsb0JBQVUsWUFBWSxLQUN2Qzs7OzsyQ0FFcUIsV0FBVyxXQUMvQjtXQUFJLEtBQUssTUFBTSxlQUFlLFVBQVUsY0FDdEMsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUNsQztnQkFDRDtBQUVEOztjQUNEOzs7OzRDQUVDO1lBQUssU0FDTjs7Ozs4QkEyQ0M7Y0FBUSxLQUFLLE1BQU0sY0FBZSx1Q0FBSyxXQUFVLGFBQy9DLHVDQUFLLFdBQVUsYUFDYiw0REFBa0IsTUFHdkI7Ozs7OEJBRUM7OEJBQ0U7YUFFRTtrQkFDQTttQkFBVSxLQUFLO0FBRmYsUUFERixFQUtFLGlFQUF5QixLQUFLLE1BQU0sWUFBWSwwQkFDaEQ7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREYsRUFLRSx5Q0FBTyxNQUFLLFVBQVMsT0FBTyxXQUU1QixLQUdQOzs7Ozs7O21CQXhHa0IsYSIsImZpbGUiOiIwLmE5YzA4NjBjZTc4ZjU2MDlkODM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YV91cmk6IG51bGwsXG4gICAgICBmaWxlbmFtZTogbnVsbCxcbiAgICAgIGZpbGV0eXBlOiBudWxsLFxuICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgIT09IG5leHRTdGF0ZS5wcm9jZXNzaW5nIHx8XG4gICAgICB0aGlzLnN0YXRlLmZpbGVuYW1lICE9PSBuZXh0U3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgY2x1YkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnBsYXllckxlbiAhPT0gQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCkucGxheWVycy5sZW5ndGgpIHtcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gIH1cbiAgdXBkYXRlRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmICgvY3N2fGpzb24vLnRlc3QoZmlsZS50eXBlKSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICh1cGxvYWQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YV91cmk6IHVwbG9hZC50YXJnZXQucmVzdWx0LFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZXR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbGVuYW1lOiBgVW5yZWNvZ25pemVkIGZpbGUgdHlwZTogLiR7ZmlsZS50eXBlfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB1cGxvYWRGaWxlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGF0YV91cmkgJiYgdGhpcy5zdGF0ZS5maWxldHlwZSAmJiB0aGlzLnN0YXRlLmZpbGVuYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucGxheWVyTGVuID0gQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCkucGxheWVycy5sZW5ndGhcbiAgICAgIHVwbG9hZEZpbGUoe1xuICAgICAgICBkYXRhX3VyaTogdGhpcy5zdGF0ZS5kYXRhX3VyaSxcbiAgICAgICAgZmlsZW5hbWU6IHRoaXMuc3RhdGUuZmlsZW5hbWUsXG4gICAgICAgIGZpbGV0eXBlOiB0aGlzLnN0YXRlLmZpbGV0eXBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbG9hZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICYmICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybVxuICAgICAgICBpZD1cInVwbG9hZC1mb3JtXCJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICBvblN1Ym1pdD17dGhpcy51cGxvYWRGaWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2PntgRmlsZSBTZWxlY3RlZDogICR7dGhpcy5zdGF0ZS5maWxlbmFtZSB8fCBcIk5vbmVcIn1gfTwvZGl2PlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJDaG9vc2UgYSBmaWxlICguY3N2IG9yIC5qc29uKVwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpbGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgeyB0aGlzLmxvYWRlcigpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=