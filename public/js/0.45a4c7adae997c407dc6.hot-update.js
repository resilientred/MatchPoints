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
	      var buttonLabel = this.state.filename ? "File:  " + this.state.filename : "Choose a file (.csv or .json)";
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement(_RaisedButton2.default, {
	        style: { midWidth: "150px" },
	        label: buttonLabel,
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
	        primary: Boolean(true),
	        disabled: !this.state.data_uri
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FFSjthQUNBO1FBQ0E7V0FDQTtVQUNBO1NBQ0E7VUFDQTtZQUFTO0FBUFQ7O0tBU21COzJCQUluQjs7eUJBQVksT0FBTzsyQkFBQTs7aUdBQ1g7O1dBeUJSLGNBQWMsWUFDWjthQUFLLFNBQVMsRUFBRSxZQUNoQjtXQUFJLE1BQUssY0FBYyxvQkFBVSxpQkFBaUIsUUFBUSxRQUN4RDtlQUFLLE1BQ047QUFDRjtBQS9Ca0I7O1dBZ0NuQixhQUFhLFVBQUMsR0FDWjtXQUFNLE9BQU8sRUFBRSxPQUFPLE1BQ3RCO1dBQUksV0FBVyxLQUFLLEtBQUssT0FDdkI7YUFBTSxTQUFTLElBQ2Y7ZUFBSyxTQUFTLEVBQUUsWUFDaEI7Z0JBQU8sU0FBUyxVQUFDLFFBQ2Y7aUJBQUs7dUJBQ08sT0FBTyxPQUNqQjt1QkFBVSxLQUNWO3VCQUFVLEtBQ1Y7eUJBRUg7QUFMRztBQU1KO2dCQUFPLGNBQ1I7QUFaRCxjQWFFO2VBQUs7bURBQ21DLEtBRXpDO0FBRkc7QUFHTDtBQW5Ea0I7O1dBb0RuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQUksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFlBQVksTUFBSyxNQUFNLFVBQzNEO2VBQUssU0FBUyxFQUFFLFlBQ2hCO2VBQUssWUFBWSxvQkFBVSxpQkFBaUIsUUFDNUM7O3FCQUNZLE1BQUssTUFDZjtxQkFBVSxNQUFLLE1BQ2Y7cUJBQVUsTUFBSyxNQUVsQjtBQUpHO0FBS0w7QUE3REM7O1dBQUs7aUJBRUg7aUJBQ0E7aUJBQ0E7bUJBQVk7QUFIWjtZQUtIOzs7Ozt5Q0FHQztZQUFLLFdBQVcsb0JBQVUsWUFBWSxLQUN2Qzs7OzsyQ0FFcUIsV0FBVyxXQUMvQjtXQUFJLEtBQUssTUFBTSxlQUFlLFVBQVUsY0FDdEMsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUNsQztnQkFDRDtBQUVEOztjQUNEOzs7OzRDQUVDO1lBQUssU0FDTjs7Ozs4QkF5Q0M7Y0FBUSxLQUFLLE1BQU0sY0FBZSx1Q0FBSyxXQUFVLGFBQy9DLHVDQUFLLFdBQVUsYUFDYiw0REFBa0IsTUFHdkI7Ozs7OEJBRUM7V0FBTSxjQUFjLEtBQUssTUFBTSx1QkFDbkIsS0FBSyxNQUFNLFdBRXZCOzhCQUNFO2FBRUU7a0JBQ0E7bUJBQVUsS0FBSztBQUZmLFFBREYsa0JBS0U7Z0JBQ1MsRUFBRSxVQUNUO2dCQUNBO3dCQUNBOzJCQUFpQjtBQUhqQixRQURGO2VBUUk7Z0JBQU8sS0FBSyxNQUNaO21CQUFVLEtBQ1Y7Z0JBQU87QUFIUCxRQURGLG9CQU9GO2dCQUVFO3dCQUNBOzJCQUNBO2tCQUFTLFFBQ1Q7bUJBQVUsQ0FBQyxLQUFLLE1BQU07QUFKdEIsUUFERixFQU9FLHlDQUFPLE1BQUssVUFBUyxPQUFPLFdBRTVCLEtBR1A7Ozs7Ozs7QUE5R2tCLGNBQ1o7Z0JBQ1EsaUJBQVU7QUFBdkI7bUJBRmlCLGEiLCJmaWxlIjoiMC40NWE0YzdhZGFlOTk3YzQwN2RjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhX3VyaTogbnVsbCxcbiAgICAgIGZpbGVuYW1lOiBudWxsLFxuICAgICAgZmlsZXR5cGU6IG51bGwsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucHJvY2Vzc2luZyAhPT0gbmV4dFN0YXRlLnByb2Nlc3NpbmcgfHxcbiAgICAgIHRoaXMuc3RhdGUuZmlsZW5hbWUgIT09IG5leHRTdGF0ZS5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucGxheWVyTGVuICE9PSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKC9jc3Z8anNvbi8udGVzdChmaWxlLnR5cGUpKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKHVwbG9hZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhX3VyaTogdXBsb2FkLnRhcmdldC5yZXN1bHQsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZW5hbWU6IGBVbnJlY29nbml6ZWQgZmlsZSB0eXBlOiAuJHtmaWxlLnR5cGV9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3VyaSAmJiB0aGlzLnN0YXRlLmZpbGV0eXBlICYmIHRoaXMuc3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wbGF5ZXJMZW4gPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgIHVwbG9hZEZpbGUoe1xuICAgICAgICBkYXRhX3VyaTogdGhpcy5zdGF0ZS5kYXRhX3VyaSxcbiAgICAgICAgZmlsZW5hbWU6IHRoaXMuc3RhdGUuZmlsZW5hbWUsXG4gICAgICAgIGZpbGV0eXBlOiB0aGlzLnN0YXRlLmZpbGV0eXBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbG9hZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICYmICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbkxhYmVsID0gdGhpcy5zdGF0ZS5maWxlbmFtZSA/XG4gICAgICBgRmlsZTogICR7dGhpcy5zdGF0ZS5maWxlbmFtZX1gIDpcbiAgICAgIFwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgaWQ9XCJ1cGxvYWQtZm9ybVwiXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBsb2FkRmlsZX1cbiAgICAgID5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IG1pZFdpZHRoOiBcIjE1MHB4XCIgfX1cbiAgICAgICAgICBsYWJlbD17YnV0dG9uTGFiZWx9XG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpbGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5kYXRhX3VyaX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgeyB0aGlzLmxvYWRlcigpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=