webpackHotUpdate(0,{

/***/ 245:
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
	
	var _MuiThemeProvider = __webpack_require__(246);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _navBar = __webpack_require__(403);
	
	var _navBar2 = _interopRequireDefault(_navBar);
	
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
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props, context) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props, context));
	
	    _this.state = { loading: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: "openLogin",
	    value: function openLogin() {
	      this.context.router.push({
	        pathname: "/", state: { login: true }
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement("div", null, _react2.default.createElement(_navBar2.default, { openLogin: function openLogin() {
	          return _this2.openLogin;
	        } }), this.props.children));
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.propTypes = {
	  children: _react.PropTypes.oneOf([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	};
	
	App.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};
	
	exports.default = App;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hcHAuanM/Zjg5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTtrQkFPSjs7Z0JBQVksT0FBTyxTQUFTOzJCQUFBOzt3RkFDcEIsT0FDTjs7V0FBSyxRQUFRLEVBQUUsU0FBUztZQUN6Qjs7Ozs7aUNBR0M7WUFBSyxRQUFRLE9BQU87bUJBQ1IsS0FBSyxPQUFPLEVBQUUsT0FFM0I7QUFGRzs7Ozs4QkFJSztvQkFDUDs7Y0FBUSxnRkFDTiw2RUFDVSxXQUFXO2tCQUFNLE9BQUs7QUFBOUIsYUFERixFQUVJLEtBQUssTUFHWjs7Ozs7OztBQXpCRyxLQUNHO2FBQ0ssaUJBQVUsTUFBTSxDQUN4QixpQkFBVSxRQUFRLGlCQUFVLE9BQzVCLGlCQUFVO0FBRlo7O0FBMEJKLEtBQUk7V0FDTSxpQkFBVSxPQUFPO0FBQXpCOzttQkFHYSxJIiwiZmlsZSI6IjAuNjljODJkMjhhMDFjZDA1NzI3N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2QmFyXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgICBQcm9wVHlwZXMubm9kZVxuICAgIF0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIG9wZW5Mb2dpbigpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6IFwiL1wiLCBzdGF0ZTogeyBsb2dpbjogdHJ1ZSB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8TXVpVGhlbWVQcm92aWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZCYXIgb3BlbkxvZ2luPXsoKSA9PiB0aGlzLm9wZW5Mb2dpbn0gLz5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj4pO1xuICB9XG59XG5cbkFwcC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=