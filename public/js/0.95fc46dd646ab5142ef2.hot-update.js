webpackHotUpdate(0,{

/***/ 496:
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
	
	var _reactRouter = __webpack_require__(168);
	
	var _TextField = __webpack_require__(497);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _clubActions = __webpack_require__(469);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	
	var LogInForm = function (_Component) {
	  _inherits(LogInForm, _Component);
	
	  function LogInForm(props) {
	    _classCallCheck(this, LogInForm);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LogInForm).call(this, props));
	
	    _this.clubStoreChange = function () {
	      var error = _clubStore2.default.getError();
	      var club = _clubStore2.default.getCurrentClub();
	      if (club) {
	        _reactRouter.browserHistory.push("/club");
	      } else if (error) {
	        _this.setState({ error: error });
	      }
	    };
	
	    _this.handleSubmit = function (e) {
	      if (e) {
	        e.preventDefault();
	        if (e.target.tagName !== "BUTTON") {
	          (0, _clubActions.logIn)(_this.state);
	        }
	      } else {
	        (0, _clubActions.logIn)(_this.state);
	      }
	    };
	
	    _this.guestLogIn = function (e) {
	      e.preventDefault();
	      var user = "guest";
	      var password = "password";
	      var count = 0;
	      var int = setInterval(function () {
	        if (count < 5) {
	          _this.setState({ username: _this.state.username + user[count++] });
	        } else if (count < 13) {
	          _this.setState({ password: _this.state.password + password[count++ - 5] });
	        } else {
	          clearInterval(int);
	          _this.handleSubmit();
	        }
	      }, 200);
	    };
	
	    _this.state = {
	      username: "",
	      password: "",
	      error: ""
	    };
	    return _this;
	  }
	
	  _createClass(LogInForm, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      if (_clubStore2.default.getCurrentClub()) {
	        _reactRouter.browserHistory.push("/club");
	      } else {
	        this.csListener = _clubStore2.default.addListener(this.clubStoreChange);
	        (0, _clubActions.fetchCurrentClub)();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.csListener.remove();
	    }
	  }, {
	    key: "updateField",
	    value: function updateField(field, e) {
	      var newField = _defineProperty({}, field, e.target.value);
	
	      if (this.state.error) {
	        newField.error = "";
	      }
	      this.setState(newField);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement("div", { className: "forms" }, _react2.default.createElement("form", { onSubmit: this.handleSubmit }, _react2.default.createElement("h3", null, "Log In"), _react2.default.createElement("div", { className: "form-error" }, this.state.error), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        hintText: "username",
	        floatingLabelText: "Username",
	        value: this.state.username,
	        onChange: function onChange(e) {
	          return _this2.updateField("username", e);
	        }
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "password",
	        hintText: "password",
	        floatingLabelText: "Password",
	        value: this.state.password,
	        onChange: function onChange(e) {
	          return _this2.updateField("password", e);
	        }
	      })), _react2.default.createElement("div", { className: "button-div" }, _react2.default.createElement(_RaisedButton2.default, {
	        label: "Log In",
	        backgroundColor: "#1565C0",
	        labelColor: "white",
	        style: { marginRight: "10px" },
	        onClick: this.handleSubmit
	      }), _react2.default.createElement(_RaisedButton2.default, { label: "Guest", backgroundColor: "#EF6C00", labelColor: "white", onClick: this.guestLogIn })), _react2.default.createElement("div", { className: "redirect-signup" }, "Don't have an account yet?", "   ", _react2.default.createElement("a", { onClick: function onClick() {
	          return _this2.props.setTab(2);
	        } }, "Sign Up"))));
	    }
	  }]);
	
	  return LogInForm;
	}(_react.Component);
	
	LogInForm.propTypes = {
	  setTab: _react.PropTypes.func
	};
	exports.default = LogInForm;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3VzZXIvbG9nSW4uanM/ZjE5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCO3dCQUluQjs7c0JBQVksT0FBTzsyQkFBQTs7OEZBQ1g7O1dBMEJSLGtCQUFrQixZQUNoQjtXQUFNLFFBQVEsb0JBQ2Q7V0FBTSxPQUFPLG9CQUNiO1dBQUksTUFDRjtxQ0FBZSxLQUNoQjtBQUZELGNBRU8sSUFBSSxPQUNUO2VBQUssU0FBUyxFQUFFLE9BQ2pCO0FBQ0Y7QUFuQ2tCOztXQW9DbkIsZUFBZSxVQUFDLEdBQ2Q7V0FBSSxHQUNGO1dBQ0E7YUFBSSxFQUFFLE9BQU8sWUFBWSxVQUN2QjttQ0FBTSxNQUNQO0FBQ0Y7QUFMRCxjQU1FO2lDQUFNLE1BQ1A7QUFDRjtBQTdDa0I7O1dBOENuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQU0sT0FDTjtXQUFNLFdBQ047V0FBSSxRQUNKO1dBQU0sa0JBQWtCLFlBQ3RCO2FBQUksUUFBUSxHQUNWO2lCQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUssTUFBTSxXQUFXLEtBQ2pEO0FBRkQsb0JBRVcsUUFBUSxJQUNqQjtpQkFBSyxTQUFTLEVBQUUsVUFBVSxNQUFLLE1BQU0sV0FBVyxTQUFTLFVBQzFEO0FBRk0sZ0JBR0w7eUJBQ0E7aUJBQ0Q7QUFDRjtBQVRXLFVBVWI7QUEzREM7O1dBQUs7aUJBRUg7aUJBQ0E7Y0FBTztBQUZQO1lBSUg7Ozs7OzBDQUVDO1dBQUksb0JBQVUsa0JBQ1o7cUNBQWUsS0FDaEI7QUFGRCxjQUdFO2NBQUssYUFBYSxvQkFBVSxZQUFZLEtBQ3hDOzBCQUNEO0FBQ0Y7Ozs7NENBRUM7WUFBSyxXQUNOOzs7O2lDQUNXLE9BQU8sR0FDakI7V0FBTSwrQkFBYyxPQUFRLEVBQUUsT0FFOUI7O1dBQUksS0FBSyxNQUFNLE9BQ2I7a0JBQVMsUUFDVjtBQUNEO1lBQUssU0FDTjs7Ozs4QkFvQ1E7b0JBQ1A7O2NBQVEsdUNBQUssV0FBVSwyQkFDckIsd0JBQU0sVUFBVSxLQUFLLGdCQUNuQixxREFDQSx1Q0FBSyxXQUFVLGdCQUFlLEtBQUssTUFBTSx3QkFDekM7ZUFHSTttQkFDQTs0QkFDQTtnQkFBTyxLQUFLLE1BQ1o7bUJBQVUsa0JBQUMsR0FBRDtrQkFBTyxPQUFLLFlBQVksWUFBWTtBQUxoRDtBQUNFLFFBREYsQ0FERixDQUhGLGtCQVlFO2VBR0k7bUJBQ0E7NEJBQ0E7Z0JBQU8sS0FBSyxNQUNaO21CQUFVLGtCQUFDLEdBQUQ7a0JBQU8sT0FBSyxZQUFZLFlBQVk7QUFMaEQ7QUFDRSxRQURGLENBREYsbUJBU0EsdUJBQUssV0FBVTtnQkFHWDswQkFDQTtxQkFDQTtnQkFBTyxFQUFFLGFBQ1Q7a0JBQVMsS0FBSztBQUpkLFFBREYsQ0FERixFQVFFLHdEQUFjLE9BQU0sU0FBUSxpQkFBZ0IsV0FBVSxZQUFXLFNBQVEsU0FBUyxLQUFLLGdDQUV6Rix1QkFBSyxXQUFVLHFCQUNaLDhCQURILHVCQUVFLHFCQUFHLFNBQVM7a0JBQU0sT0FBSyxNQUFNLE9BQU87QUFBcEMsY0FNUCxVQVJLOzs7Ozs7O0FBbkdhLFdBQ1o7V0FDRyxpQkFBVTtBQUFsQjttQkFGaUIsVSIsImZpbGUiOiIwLjk1ZmM0NmRkNjQ2YWI1MTQyZWYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvVGV4dEZpZWxkXCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCB7IGZldGNoQ3VycmVudENsdWIsIGxvZ0luIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2x1YkFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nSW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXRUYWI6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBlcnJvcjogXCJcIlxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmIChDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNzTGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViU3RvcmVDaGFuZ2UpO1xuICAgICAgZmV0Y2hDdXJyZW50Q2x1YigpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNzTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cbiAgdXBkYXRlRmllbGQoZmllbGQsIGUpIHtcbiAgICBjb25zdCBuZXdGaWVsZCA9IHsgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICBuZXdGaWVsZC5lcnJvciA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUobmV3RmllbGQpO1xuICB9XG4gIGNsdWJTdG9yZUNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IENsdWJTdG9yZS5nZXRFcnJvcigpO1xuICAgIGNvbnN0IGNsdWIgPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKTtcbiAgICBpZiAoY2x1Yikge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViXCIpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiQlVUVE9OXCIpIHtcbiAgICAgICAgbG9nSW4odGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0luKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuICBndWVzdExvZ0luID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlciA9IFwiZ3Vlc3RcIjtcbiAgICBjb25zdCBwYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IGludCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lICsgdXNlcltjb3VudCsrXSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAxMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQgKyBwYXNzd29yZFtjb3VudCsrIC0gNV0gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDM+TG9nIEluPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+eyB0aGlzLnN0YXRlLmVycm9yIH08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBoaW50VGV4dD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRmllbGQoXCJ1c2VybmFtZVwiLCBlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUZpZWxkKFwicGFzc3dvcmRcIiwgZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWRpdlwiPlxuICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPVwiTG9nIEluXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMxNTY1QzBcIlxuICAgICAgICAgICAgbGFiZWxDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmFpc2VkQnV0dG9uIGxhYmVsPVwiR3Vlc3RcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUY2QzAwXCIgbGFiZWxDb2xvcj1cIndoaXRlXCIgb25DbGljaz17dGhpcy5ndWVzdExvZ0lufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRpcmVjdC1zaWdudXBcIj5cbiAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQgeWV0P1wifSZuYnNwOyAmbmJzcDtcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldFRhYigyKX0+XG4gICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvdXNlci9sb2dJbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=