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
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	};
	
	App.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};
	
	exports.default = App;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9hcHAuanM/Zjg5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTtrQkFPSjs7Z0JBQVksT0FBTyxTQUFTOzJCQUFBOzt3RkFDcEIsT0FDTjs7V0FBSyxRQUFRLEVBQUUsU0FBUztZQUN6Qjs7Ozs7aUNBR0M7WUFBSyxRQUFRLE9BQU87bUJBQ1IsS0FBSyxPQUFPLEVBQUUsT0FFM0I7QUFGRzs7Ozs4QkFJSztvQkFDUDs7Y0FBUSxnRkFDTiw2RUFDVSxXQUFXO2tCQUFNLE9BQUs7QUFBOUIsYUFERixFQUVJLEtBQUssTUFHWjs7Ozs7OztBQXpCRyxLQUNHO2FBQ0ssaUJBQVUsVUFBVSxDQUM1QixpQkFBVSxRQUFRLGlCQUFVLE9BQzVCLGlCQUFVO0FBRlo7O0FBMEJKLEtBQUk7V0FDTSxpQkFBVSxPQUFPO0FBQXpCOzttQkFHYSxJIiwiZmlsZSI6IjAuNGExNDhiODAyYTE3YzQwY2JmY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2QmFyXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICBdKVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGxvYWRpbmc6IGZhbHNlIH07XG4gIH1cblxuICBvcGVuTG9naW4oKSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9cIiwgc3RhdGU6IHsgbG9naW46IHRydWUgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPE11aVRoZW1lUHJvdmlkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIG9wZW5Mb2dpbj17KCkgPT4gdGhpcy5vcGVuTG9naW59IC8+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+KTtcbiAgfVxufVxuXG5BcHAuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9