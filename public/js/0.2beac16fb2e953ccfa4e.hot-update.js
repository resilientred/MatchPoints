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
	      _this.setState({ username: "", password: "" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3VzZXIvbG9nSW4uanM/ZjE5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCO3dCQUluQjs7c0JBQVksT0FBTzsyQkFBQTs7OEZBQ1g7O1dBMEJSLGtCQUFrQixZQUNoQjtXQUFNLFFBQVEsb0JBQ2Q7V0FBTSxPQUFPLG9CQUNiO1dBQUksTUFDRjtxQ0FBZSxLQUNoQjtBQUZELGNBRU8sSUFBSSxPQUNUO2VBQUssU0FBUyxFQUFFLE9BQ2pCO0FBQ0Y7QUFuQ2tCOztXQW9DbkIsZUFBZSxVQUFDLEdBQ2Q7V0FBSSxHQUNGO1dBQ0E7YUFBSSxFQUFFLE9BQU8sWUFBWSxVQUN2QjttQ0FBTSxNQUNQO0FBQ0Y7QUFMRCxjQU1FO2lDQUFNLE1BQ1A7QUFDRjtBQTdDa0I7O1dBOENuQixhQUFhLFVBQUMsR0FDWjtTQUNBO1dBQU0sT0FDTjtXQUFNLFdBQ047YUFBSyxTQUFTLEVBQUUsVUFBVSxJQUFJLFVBQzlCO1dBQUksUUFDSjtXQUFNLGtCQUFrQixZQUN0QjthQUFJLFFBQVEsR0FDVjtpQkFBSyxTQUFTLEVBQUUsVUFBVSxNQUFLLE1BQU0sV0FBVyxLQUNqRDtBQUZELG9CQUVXLFFBQVEsSUFDakI7aUJBQUssU0FBUyxFQUFFLFVBQVUsTUFBSyxNQUFNLFdBQVcsU0FBUyxVQUMxRDtBQUZNLGdCQUdMO3lCQUNBO2lCQUNEO0FBQ0Y7QUFUVyxVQVViO0FBNURDOztXQUFLO2lCQUVIO2lCQUNBO2NBQU87QUFGUDtZQUlIOzs7OzswQ0FFQztXQUFJLG9CQUFVLGtCQUNaO3FDQUFlLEtBQ2hCO0FBRkQsY0FHRTtjQUFLLGFBQWEsb0JBQVUsWUFBWSxLQUN4QzswQkFDRDtBQUNGOzs7OzRDQUVDO1lBQUssV0FDTjs7OztpQ0FDVyxPQUFPLEdBQ2pCO1dBQU0sK0JBQWMsT0FBUSxFQUFFLE9BRTlCOztXQUFJLEtBQUssTUFBTSxPQUNiO2tCQUFTLFFBQ1Y7QUFDRDtZQUFLLFNBQ047Ozs7OEJBcUNRO29CQUNQOztjQUFRLHVDQUFLLFdBQVUsMkJBQ3JCLHdCQUFNLFVBQVUsS0FBSyxnQkFDbkIscURBQ0EsdUNBQUssV0FBVSxnQkFBZSxLQUFLLE1BQU0sd0JBQ3pDO2VBR0k7bUJBQ0E7NEJBQ0E7Z0JBQU8sS0FBSyxNQUNaO21CQUFVLGtCQUFDLEdBQUQ7a0JBQU8sT0FBSyxZQUFZLFlBQVk7QUFMaEQ7QUFDRSxRQURGLENBREYsQ0FIRixrQkFZRTtlQUdJO21CQUNBOzRCQUNBO2dCQUFPLEtBQUssTUFDWjttQkFBVSxrQkFBQyxHQUFEO2tCQUFPLE9BQUssWUFBWSxZQUFZO0FBTGhEO0FBQ0UsUUFERixDQURGLG1CQVNBLHVCQUFLLFdBQVU7Z0JBR1g7MEJBQ0E7cUJBQ0E7Z0JBQU8sRUFBRSxhQUNUO2tCQUFTLEtBQUs7QUFKZCxRQURGLENBREYsRUFRRSx3REFBYyxPQUFNLFNBQVEsaUJBQWdCLFdBQVUsWUFBVyxTQUFRLFNBQVMsS0FBSyxnQ0FFekYsdUJBQUssV0FBVSxxQkFDWiw4QkFESCx1QkFFRSxxQkFBRyxTQUFTO2tCQUFNLE9BQUssTUFBTSxPQUFPO0FBQXBDLGNBTVAsVUFSSzs7Ozs7OztBQXBHYSxXQUNaO1dBQ0csaUJBQVU7QUFBbEI7bUJBRmlCLFUiLCJmaWxlIjoiMC4yYmVhYzE2ZmIyZTk1M2NjZmE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRDbHViLCBsb2dJbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsdWJBY3Rpb25zXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ0luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0VGFiOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgZXJyb3I6IFwiXCJcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAoQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCkpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1YlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YlN0b3JlQ2hhbmdlKTtcbiAgICAgIGZldGNoQ3VycmVudENsdWIoKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG4gIHVwZGF0ZUZpZWxkKGZpZWxkLCBlKSB7XG4gICAgY29uc3QgbmV3RmllbGQgPSB7IFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgbmV3RmllbGQuZXJyb3IgPSBcIlwiO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5ld0ZpZWxkKTtcbiAgfVxuICBjbHViU3RvcmVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBDbHViU3RvcmUuZ2V0RXJyb3IoKTtcbiAgICBjb25zdCBjbHViID0gQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCk7XG4gICAgaWYgKGNsdWIpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1YlwiKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSBcIkJVVFRPTlwiKSB7XG4gICAgICAgIGxvZ0luKHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dJbih0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cbiAgZ3Vlc3RMb2dJbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXIgPSBcImd1ZXN0XCI7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUgKyB1c2VyW2NvdW50KytdIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDEzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCArIHBhc3N3b3JkW2NvdW50KysgLSA1XSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50KTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMz5Mb2cgSW48L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57IHRoaXMuc3RhdGUuZXJyb3IgfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGhpbnRUZXh0PVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVGaWVsZChcInVzZXJuYW1lXCIsIGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBoaW50VGV4dD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRmllbGQoXCJwYXNzd29yZFwiLCBlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZGl2XCI+XG4gICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJMb2cgSW5cIlxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzE1NjVDMFwiXG4gICAgICAgICAgICBsYWJlbENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJHdWVzdFwiIGJhY2tncm91bmRDb2xvcj1cIiNFRjZDMDBcIiBsYWJlbENvbG9yPVwid2hpdGVcIiBvbkNsaWNrPXt0aGlzLmd1ZXN0TG9nSW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGlyZWN0LXNpZ251cFwiPlxuICAgICAgICAgIHtcIkRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/XCJ9Jm5ic3A7ICZuYnNwO1xuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0VGFiKDIpfT5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy91c2VyL2xvZ0luLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==