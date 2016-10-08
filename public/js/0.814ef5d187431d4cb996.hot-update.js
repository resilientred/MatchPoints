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
	      if (_this.playerLen !== _clubStore2.default.getCurrentClub().players.length) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUNuQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGNBQWMsWUFDWjthQUFLLFNBQVMsRUFBRSxZQUNoQjtXQUFJLE1BQUssY0FBYyxvQkFBVSxpQkFBaUIsUUFBUSxRQUN6RCxDQUNGO0FBOUJrQjs7V0ErQm5CLGFBQWEsVUFBQyxHQUNaO1dBQU0sT0FBTyxFQUFFLE9BQU8sTUFDdEI7V0FBSSxXQUFXLEtBQUssS0FBSyxPQUN2QjthQUFNLFNBQVMsSUFDZjtlQUFLLFNBQVMsRUFBRSxZQUNoQjtnQkFBTyxTQUFTLFVBQUMsUUFDZjtpQkFBSzt1QkFDTyxPQUFPLE9BQ2pCO3VCQUFVLEtBQ1Y7dUJBQVUsS0FDVjt5QkFFSDtBQUxHO0FBTUo7Z0JBQU8sY0FDUjtBQVpELGNBYUU7ZUFBSzttREFDbUMsS0FFekM7QUFGRztBQUdMO0FBbERrQjs7V0FtRG5CLGFBQWEsVUFBQyxHQUNaO1NBQ0E7V0FBSSxNQUFLLE1BQU0sWUFBWSxNQUFLLE1BQU0sWUFBWSxNQUFLLE1BQU0sVUFDM0Q7ZUFBSyxTQUFTLEVBQUUsWUFDaEI7ZUFBSyxZQUFZLG9CQUFVLGlCQUFpQixRQUM1Qzs7cUJBQ1ksTUFBSyxNQUNmO3FCQUFVLE1BQUssTUFDZjtxQkFBVSxNQUFLLE1BRWxCO0FBSkc7QUFLTDtBQTVEQzs7V0FBSztpQkFFSDtpQkFDQTtpQkFDQTttQkFBWTtBQUhaO1lBS0g7Ozs7O3lDQUdDO1lBQUssV0FBVyxvQkFBVSxZQUFZLEtBQ3ZDOzs7OzJDQUVxQixXQUFXLFdBQy9CO1dBQUksS0FBSyxNQUFNLGVBQWUsVUFBVSxjQUN0QyxLQUFLLE1BQU0sYUFBYSxVQUFVLFVBQ2xDO2dCQUNEO0FBRUQ7O2NBQ0Q7Ozs7NENBRUM7WUFBSyxTQUNOOzs7OzhCQXdDQztjQUFRLEtBQUssTUFBTSxjQUFlLHVDQUFLLFdBQVUsYUFDL0MsdUNBQUssV0FBVSxhQUNiLDREQUFrQixNQUd2Qjs7Ozs4QkFFQzs4QkFDRTthQUVFO2tCQUNBO21CQUFVLEtBQUs7QUFGZixRQURGLEVBS0UsaUVBQXlCLEtBQUssTUFBTSxZQUFZLDBCQUNoRDtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERjtlQU9JO2dCQUFPLEtBQUssTUFDWjttQkFBVSxLQUNWO2dCQUFPO0FBSFAsUUFERixvQkFPRjtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERixFQUtFLHlDQUFPLE1BQUssVUFBUyxPQUFPLFdBRTVCLEtBR1A7Ozs7Ozs7bUJBckdrQixhIiwiZmlsZSI6IjAuODE0ZWY1ZDE4NzQzMWQ0Y2I5OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgcmlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb3BhY2l0eTogMFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhX3VyaTogbnVsbCxcbiAgICAgIGZpbGVuYW1lOiBudWxsLFxuICAgICAgZmlsZXR5cGU6IG51bGwsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucHJvY2Vzc2luZyAhPT0gbmV4dFN0YXRlLnByb2Nlc3NpbmcgfHxcbiAgICAgIHRoaXMuc3RhdGUuZmlsZW5hbWUgIT09IG5leHRTdGF0ZS5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucGxheWVyTGVuICE9PSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgIH1cbiAgfVxuICB1cGRhdGVGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKC9jc3Z8anNvbi8udGVzdChmaWxlLnR5cGUpKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKHVwbG9hZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhX3VyaTogdXBsb2FkLnRhcmdldC5yZXN1bHQsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZW5hbWU6IGBVbnJlY29nbml6ZWQgZmlsZSB0eXBlOiAuJHtmaWxlLnR5cGV9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3VyaSAmJiB0aGlzLnN0YXRlLmZpbGV0eXBlICYmIHRoaXMuc3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wbGF5ZXJMZW4gPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aFxuICAgICAgdXBsb2FkRmlsZSh7XG4gICAgICAgIGRhdGFfdXJpOiB0aGlzLnN0YXRlLmRhdGFfdXJpLFxuICAgICAgICBmaWxlbmFtZTogdGhpcy5zdGF0ZS5maWxlbmFtZSxcbiAgICAgICAgZmlsZXR5cGU6IHRoaXMuc3RhdGUuZmlsZXR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxkaXY+e2BGaWxlIFNlbGVjdGVkOiAgJHt0aGlzLnN0YXRlLmZpbGVuYW1lIHx8IFwiTm9uZVwifWB9PC9kaXY+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiVXBsb2FkXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICB7IHRoaXMubG9hZGVyKCkgfVxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==