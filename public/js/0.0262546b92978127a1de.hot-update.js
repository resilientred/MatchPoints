webpackHotUpdate(0,{

/***/ 685:
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
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _fileUploader = __webpack_require__(686);
	
	var _fileUploader2 = _interopRequireDefault(_fileUploader);
	
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
	
	var UploadDialog = function (_Component) {
	  _inherits(UploadDialog, _Component);
	
	  function UploadDialog() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, UploadDialog);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UploadDialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClose = function () {
	      _this.props.handleClose("uploadDialogOpen");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(UploadDialog, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      if (this.props.open !== nextProps.open) {
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Close",
	        secondary: Boolean(true),
	        onTouchTap: this.handleClose
	      })];
	
	      return _react2.default.createElement(_Dialog2.default, {
	        title: "Upload Players",
	        actions: actions,
	        modal: false,
	        open: this.props.open,
	        onRequestClose: this.handleClose
	      }, _react2.default.createElement(_fileUploader2.default, {
	        handleClose: this.handleClose
	      }));
	    }
	  }]);
	
	  return UploadDialog;
	}(_react.Component);
	
	UploadDialog.propTypes = {
	  open: _react.PropTypes.bool,
	  handleClose: _react.PropTypes.func
	};
	exports.default = UploadDialog;

/***/ },

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
	      var buttonLabel = this.state.filename ? "Selected File: " + this.state.filename : "Choose a file (.csv or .json)";
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement(_RaisedButton2.default, {
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
	        disabled: !this.data_uri
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi91cGxvYWREaWFsb2cuanM/ZDk2MSIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjs7Ozs7Ozs7Ozs7Ozs7Mk1BWW5CLGNBQWMsWUFDWjthQUFLLE1BQU0sWUFDWjs7Ozs7OzJDQVRxQixXQUNwQjtXQUFJLEtBQUssTUFBTSxTQUFTLFVBQVUsTUFDaEM7Z0JBQ0Q7QUFFRDs7Y0FDRDs7Ozs4QkFLQztXQUFNO2dCQUdGO29CQUFXLFFBQ1g7cUJBQVksS0FJaEI7QUFOSSxRQURGLENBRGM7OzhCQVFSO2dCQUVOO2tCQUNBO2dCQUNBO2VBQU0sS0FBSyxNQUNYO3lCQUFnQixLQUFLO0FBSnJCLFFBRE07c0JBUVMsS0FHbEI7QUFISyxRQURGOzs7Ozs7O0FBL0JlLGNBQ1o7U0FDQyxpQkFDTjtnQkFBYSxpQkFBVTtBQUR2QjttQkFGaUIsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBRUo7YUFDQTtRQUNBO1dBQ0E7VUFDQTtTQUNBO1VBQ0E7WUFBUztBQVBUOztLQVNtQjsyQkFJbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQXlCUixjQUFjLFlBQ1o7YUFBSyxTQUFTLEVBQUUsWUFDaEI7V0FBSSxNQUFLLGNBQWMsb0JBQVUsaUJBQWlCLFFBQVEsUUFDeEQ7ZUFBSyxNQUNOO0FBQ0Y7QUEvQmtCOztXQWdDbkIsYUFBYSxVQUFDLEdBQ1o7V0FBTSxPQUFPLEVBQUUsT0FBTyxNQUN0QjtXQUFJLFdBQVcsS0FBSyxLQUFLLE9BQ3ZCO2FBQU0sU0FBUyxJQUNmO2VBQUssU0FBUyxFQUFFLFlBQ2hCO2dCQUFPLFNBQVMsVUFBQyxRQUNmO2lCQUFLO3VCQUNPLE9BQU8sT0FDakI7dUJBQVUsS0FDVjt1QkFBVSxLQUNWO3lCQUVIO0FBTEc7QUFNSjtnQkFBTyxjQUNSO0FBWkQsY0FhRTtlQUFLO21EQUNtQyxLQUV6QztBQUZHO0FBR0w7QUFuRGtCOztXQW9EbkIsYUFBYSxVQUFDLEdBQ1o7U0FDQTtXQUFJLE1BQUssTUFBTSxZQUFZLE1BQUssTUFBTSxZQUFZLE1BQUssTUFBTSxVQUMzRDtlQUFLLFNBQVMsRUFBRSxZQUNoQjtlQUFLLFlBQVksb0JBQVUsaUJBQWlCLFFBQzVDOztxQkFDWSxNQUFLLE1BQ2Y7cUJBQVUsTUFBSyxNQUNmO3FCQUFVLE1BQUssTUFFbEI7QUFKRztBQUtMO0FBN0RDOztXQUFLO2lCQUVIO2lCQUNBO2lCQUNBO21CQUFZO0FBSFo7WUFLSDs7Ozs7eUNBR0M7WUFBSyxXQUFXLG9CQUFVLFlBQVksS0FDdkM7Ozs7MkNBRXFCLFdBQVcsV0FDL0I7V0FBSSxLQUFLLE1BQU0sZUFBZSxVQUFVLGNBQ3RDLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFDbEM7Z0JBQ0Q7QUFFRDs7Y0FDRDs7Ozs0Q0FFQztZQUFLLFNBQ047Ozs7OEJBeUNDO2NBQVEsS0FBSyxNQUFNLGNBQWUsdUNBQUssV0FBVSxhQUMvQyx1Q0FBSyxXQUFVLGFBQ2IsNERBQWtCLE1BR3ZCOzs7OzhCQUVDO1dBQU0sY0FBYyxLQUFLLE1BQU0sK0JBQ1gsS0FBSyxNQUFNLFdBRS9COzhCQUNFO2FBRUU7a0JBQ0E7bUJBQVUsS0FBSztBQUZmLFFBREYsa0JBS0U7Z0JBRUU7d0JBQ0E7MkJBQWlCO0FBRmpCLFFBREY7ZUFPSTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsS0FDVjtnQkFBTztBQUhQLFFBREYsb0JBT0Y7Z0JBRUU7d0JBQ0E7MkJBQ0E7a0JBQVMsUUFDVDttQkFBVSxDQUFDLEtBQUs7QUFKaEIsUUFERixFQU9FLHlDQUFPLE1BQUssVUFBUyxPQUFPLFdBRTVCLEtBR1A7Ozs7Ozs7QUE3R2tCLGNBQ1o7Z0JBQ1EsaUJBQVU7QUFBdkI7bUJBRmlCLGEiLCJmaWxlIjoiMC4wMjYyNTQ2YjkyOTc4MTI3YTFkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gXCIuL2ZpbGVVcGxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWREaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoXCJ1cGxvYWREaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgXTtcblxuICAgIHJldHVybiAoPERpYWxvZ1xuICAgICAgdGl0bGU9XCJVcGxvYWQgUGxheWVyc1wiXG4gICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgPlxuICAgICAgPEZpbGVVcGxvYWRlclxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi91cGxvYWREaWFsb2cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgcmlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb3BhY2l0eTogMFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFfdXJpOiBudWxsLFxuICAgICAgZmlsZW5hbWU6IG51bGwsXG4gICAgICBmaWxldHlwZTogbnVsbCxcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICE9PSBuZXh0U3RhdGUucHJvY2Vzc2luZyB8fFxuICAgICAgdGhpcy5zdGF0ZS5maWxlbmFtZSAhPT0gbmV4dFN0YXRlLmZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIGNsdWJDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5wbGF5ZXJMZW4gIT09IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUZpbGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoL2Nzdnxqc29uLy50ZXN0KGZpbGUudHlwZSkpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogdHJ1ZSB9KTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAodXBsb2FkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGFfdXJpOiB1cGxvYWQudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGV0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWxlbmFtZTogYFVucmVjb2duaXplZCBmaWxlIHR5cGU6IC4ke2ZpbGUudHlwZX1gXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdXBsb2FkRmlsZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmRhdGFfdXJpICYmIHRoaXMuc3RhdGUuZmlsZXR5cGUgJiYgdGhpcy5zdGF0ZS5maWxlbmFtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICB0aGlzLnBsYXllckxlbiA9IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLnBsYXllcnMubGVuZ3RoO1xuICAgICAgdXBsb2FkRmlsZSh7XG4gICAgICAgIGRhdGFfdXJpOiB0aGlzLnN0YXRlLmRhdGFfdXJpLFxuICAgICAgICBmaWxlbmFtZTogdGhpcy5zdGF0ZS5maWxlbmFtZSxcbiAgICAgICAgZmlsZXR5cGU6IHRoaXMuc3RhdGUuZmlsZXR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uTGFiZWwgPSB0aGlzLnN0YXRlLmZpbGVuYW1lID9cbiAgICAgIGBTZWxlY3RlZCBGaWxlOiAke3RoaXMuc3RhdGUuZmlsZW5hbWV9YCA6XG4gICAgICBcIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD17YnV0dG9uTGFiZWx9XG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpbGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5kYXRhX3VyaX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgeyB0aGlzLmxvYWRlcigpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=