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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtXQUVKO2FBQ0E7UUFDQTtXQUNBO1VBQ0E7U0FDQTtVQUNBO1lBQVM7QUFQVDs7S0FTbUI7MkJBQ25COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0FRUixhQUFhLFVBQUMsR0FDWjtlQUFRLElBQUksRUFBRSxPQUNkO1dBQU0sU0FBUyxJQUNmO1dBQU0sT0FBTyxFQUFFLE9BQU8sTUFFdEI7O2NBQU8sU0FBUyxVQUFDLFFBQ2Y7ZUFBSztxQkFDTyxPQUFPLE9BQ2pCO3FCQUFVLEtBQ1Y7cUJBQVUsS0FFYjtBQUpHO0FBS0w7QUFyQmtCOztXQXNCbkIsYUFBYSxVQUFDLEdBQ1o7U0FLRDs7Ozs7QUExQkM7O1dBQUs7aUJBRUg7aUJBQ0E7aUJBQ0E7bUJBQVk7QUFIWjtZQUtIOzs7Ozs4QkFzQkM7OEJBQ0U7YUFFRTtrQkFDQTttQkFBVSxLQUFLO0FBRmYsUUFERixrQkFLRTtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERjtlQU9JO2dCQUFPLEtBQUssTUFDWjttQkFBVSxLQUNWO2dCQUFPO0FBSFAsUUFERixvQkFPRjtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERixFQUtFLHlDQUFPLE1BQUssVUFBUyxPQUk1Qjs7Ozs7OzttQkExRGtCLGEiLCJmaWxlIjoiMC42ODJlNmVmYTQzM2M2MDBjYTZiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YV91cmk6IG51bGwsXG4gICAgICBmaWxlbmFtZTogbnVsbCxcbiAgICAgIGZpbGV0eXBlOiBudWxsLFxuICAgICAgcHJvY2Vzc2luZzogZmFsc2VcbiAgICB9O1xuICB9XG4gIHVwZGF0ZUZpbGUgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgIHJlYWRlci5vbmxvYWQgPSAodXBsb2FkKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YV91cmk6IHVwbG9hZC50YXJnZXQucmVzdWx0LFxuICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdXBsb2FkRmlsZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAvLyBmZC5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuc3RhdGUuZmlsZSk7XG4gICAgLy8gdXBsb2FkRmlsZShmZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybVxuICAgICAgICBpZD1cInVwbG9hZC1mb3JtXCJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICBvblN1Ym1pdD17dGhpcy51cGxvYWRGaWxlfVxuICAgICAgPlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJDaG9vc2UgYSBmaWxlICguY3N2IG9yIC5qc29uKVwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpbGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=