webpackHotUpdate(0,{

/***/ 505:
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
	
	var SignUpForm = function (_Component) {
	  _inherits(SignUpForm, _Component);
	
	  function SignUpForm(props) {
	    _classCallCheck(this, SignUpForm);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignUpForm).call(this, props));
	
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
	      e.preventDefault();
	      (0, _clubActions.signUp)(_this.state);
	    };
	
	    _this.state = {
	      username: "",
	      password: "",
	      clubName: "",
	      stateName: "",
	      city: "",
	      error: ""
	    };
	    return _this;
	  }
	
	  _createClass(SignUpForm, [{
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
	
	      return _react2.default.createElement("div", { className: "forms" }, _react2.default.createElement("form", { onSubmit: this.handleSubmit }, _react2.default.createElement("h3", null, "Sign Up"), this.state.error, _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        hintText: "clubName",
	        floatingLabelText: "Club Name",
	        onChange: function onChange(e) {
	          return _this2.updateField("clubName", e);
	        },
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        hintText: "city",
	        floatingLabelText: "City",
	        onChange: function onChange(e) {
	          return _this2.updateField("city", e);
	        },
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        hintText: "State",
	        floatingLabelText: "State",
	        onChange: function onChange(e) {
	          return _this2.updateField("stateName", e);
	        },
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        hintText: "username",
	        floatingLabelText: "Username",
	        onChange: function onChange(e) {
	          return _this2.updateField("username", e);
	        },
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "password",
	        hintText: "password",
	        floatingLabelText: "Password",
	        onChange: function onChange(e) {
	          return _this2.updateField("password", e);
	        },
	        required: true
	      })), _react2.default.createElement("div", { className: "button-div" }, _react2.default.createElement(_RaisedButton2.default, {
	        backgroundColor: "#00796B",
	        labelColor: "white",
	        onClick: this.handleSubmit,
	        label: "Sign Up"
	      })), _react2.default.createElement("div", { className: "redirect-signup" }, "Already have an account yet?  ", _react2.default.createElement("a", { onClick: function onClick() {
	          return _this2.props.setTab(1);
	        } }, "Log In"))));
	    }
	  }]);
	
	  return SignUpForm;
	}(_react.Component);
	
	SignUpForm.propTypes = {
	  setTab: _react.PropTypes.func
	};
	exports.default = SignUpForm;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3VzZXIvc2lnblVwLmpzPzgzYmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjt5QkFJbkI7O3VCQUFZLE9BQU87MkJBQUE7OytGQUNYOztXQTBCUixrQkFBa0IsWUFDaEI7V0FBTSxRQUFRLG9CQUNkO1dBQU0sT0FBTyxvQkFDYjtXQUFJLE1BQ0Y7cUNBQWUsS0FDaEI7QUFGRCxjQUVPLElBQUksT0FDVDtlQUFLLFNBQVMsRUFBRSxPQUNqQjtBQUNGO0FBbkNrQjs7V0FvQ25CLGVBQWUsVUFBQyxHQUNkO1NBQ0E7Z0NBQU8sTUFDUjtBQXJDQzs7V0FBSztpQkFFSDtpQkFDQTtpQkFDQTtrQkFDQTthQUNBO2NBQU87QUFMUDtZQU9IOzs7OzswQ0FFQztXQUFJLG9CQUFVLGtCQUNaO3FDQUFlLEtBQ2hCO0FBRkQsY0FHRTtjQUFLLGFBQWEsb0JBQVUsWUFBWSxLQUN4QzswQkFDRDtBQUNGOzs7O2lDQUNXLE9BQU8sR0FDakI7V0FBTSwrQkFBYyxPQUFRLEVBQUUsT0FFOUI7O1dBQUksS0FBSyxNQUFNLE9BQ2I7a0JBQVMsUUFDVjtBQUNEO1lBQUssU0FDTjs7Ozs4QkFjUTtvQkFDUDs7Y0FBUSx1Q0FBSyxXQUFVLDJCQUNyQix3QkFBTSxVQUFVLEtBQUssZ0JBQ25CLHNEQUNDLEtBQUssTUFBTSx1QkFDWjtlQUdJO21CQUNBOzRCQUNBO21CQUFVLGtCQUFDLEdBQUQ7a0JBQU8sT0FBSyxZQUFZLFlBQVk7QUFDOUM7bUJBTEY7QUFDRSxRQURGLENBREYsQ0FIRixrQkFZRTtlQUdJO21CQUNBOzRCQUNBO21CQUFVLGtCQUFDLEdBQUQ7a0JBQU8sT0FBSyxZQUFZLFFBQVE7QUFDMUM7bUJBTEY7QUFDRSxRQURGLENBREYsbUJBU0E7ZUFHSTttQkFDQTs0QkFDQTttQkFBVSxrQkFBQyxHQUFEO2tCQUFPLE9BQUssWUFBWSxhQUFhO0FBQy9DO21CQUxGO0FBQ0UsUUFERixDQURGLG1CQVNBO2VBR0k7bUJBQ0E7NEJBQ0E7bUJBQVUsa0JBQUMsR0FBRDtrQkFBTyxPQUFLLFlBQVksWUFBWTtBQUM5QzttQkFMRjtBQUNFLFFBREYsQ0FERixtQkFTQTtlQUdJO21CQUNBOzRCQUNBO21CQUFVLGtCQUFDLEdBQUQ7a0JBQU8sT0FBSyxZQUFZLFlBQVk7QUFDOUM7bUJBTEY7QUFDRSxRQURGLENBREYsbUJBU0EsdUJBQUssV0FBVTswQkFHWDtxQkFDQTtrQkFBUyxLQUNUO2dCQUFNO0FBSE4sUUFERixDQURGLEdBUUEsdUNBQUssV0FBVSxxQkFBZixrREFDMEMscUJBQUcsU0FBUztrQkFBTSxPQUFLLE1BQU0sT0FBTztBQUFwQyxjQUkvQzs7Ozs7OztBQTNHa0IsWUFDWjtXQUNHLGlCQUFVO0FBQWxCO21CQUZpQixXIiwiZmlsZSI6IjAuZmZkNWFiNjExMDQwMmQzMmQwOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50Q2x1Yiwgc2lnblVwIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2x1YkFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0VGFiOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgY2x1Yk5hbWU6IFwiXCIsXG4gICAgICBzdGF0ZU5hbWU6IFwiXCIsXG4gICAgICBjaXR5OiBcIlwiLFxuICAgICAgZXJyb3I6IFwiXCJcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAoQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCkpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1YlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YlN0b3JlQ2hhbmdlKTtcbiAgICAgIGZldGNoQ3VycmVudENsdWIoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlRmllbGQoZmllbGQsIGUpIHtcbiAgICBjb25zdCBuZXdGaWVsZCA9IHsgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICBuZXdGaWVsZC5lcnJvciA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUobmV3RmllbGQpO1xuICB9XG4gIGNsdWJTdG9yZUNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IENsdWJTdG9yZS5nZXRFcnJvcigpO1xuICAgIGNvbnN0IGNsdWIgPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKTtcbiAgICBpZiAoY2x1Yikge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViXCIpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2lnblVwKHRoaXMuc3RhdGUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMz5TaWduIFVwPC9oMz5cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3J9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJjbHViTmFtZVwiXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkNsdWIgTmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRmllbGQoXCJjbHViTmFtZVwiLCBlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJjaXR5XCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiQ2l0eVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRmllbGQoXCJjaXR5XCIsIGUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBoaW50VGV4dD1cIlN0YXRlXCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU3RhdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUZpZWxkKFwic3RhdGVOYW1lXCIsIGUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBoaW50VGV4dD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUZpZWxkKFwidXNlcm5hbWVcIiwgZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBoaW50VGV4dD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUZpZWxkKFwicGFzc3dvcmRcIiwgZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kaXZcIj5cbiAgICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMDA3OTZCXCJcbiAgICAgICAgICAgIGxhYmVsQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGxhYmVsPVwiU2lnbiBVcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkaXJlY3Qtc2lnbnVwXCI+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQgeWV0PyZuYnNwOyZuYnNwOzxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0VGFiKDEpfT5Mb2cgSW48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy91c2VyL3NpZ25VcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=