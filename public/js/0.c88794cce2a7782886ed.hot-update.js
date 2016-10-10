webpackHotUpdate(0,{

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	
	var _SelectField = __webpack_require__(669);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _IconMenu = __webpack_require__(676);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _IconButton = __webpack_require__(456);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(678);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _Snackbar = __webpack_require__(537);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _FlatButton = __webpack_require__(521);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _participantGroup = __webpack_require__(679);
	
	var _participantGroup2 = _interopRequireDefault(_participantGroup);
	
	var _findSchema = __webpack_require__(683);
	
	var _findSchema2 = _interopRequireDefault(_findSchema);
	
	var _clientActions = __webpack_require__(643);
	
	var _pdfStore = __webpack_require__(647);
	
	var _pdfStore2 = _interopRequireDefault(_pdfStore);
	
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
	
	var rangeOfPlayers = [3, 4, 5, 6, 7];
	
	var Grouping = function (_Component) {
	  _inherits(Grouping, _Component);
	
	  function Grouping(props) {
	    _classCallCheck(this, Grouping);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grouping).call(this, props));
	
	    _this.tempSave = function () {
	      _this.props.temporarilySaveSession(_this.state.min, _this.state.max, _this.state.schemata, _this.state.selectedGroup, _this.state.pdfs);
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ open: false });
	    };
	
	    _this.handleDialogClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.fetchedPDF = function () {
	      var error = _pdfStore2.default.getError();
	      if (error) {
	        _this.error = error;
	        _this.setState({ loading: false });
	        _this.handleOpen();
	      } else {
	        _this.setState({ pdfs: _pdfStore2.default.getPDF(), loading: false });
	      }
	    };
	
	    _this.handleChange = function (field, e, idx, value) {
	      if (value) {
	        (function () {
	          var _this$state = _this.state;
	          var min = _this$state.min;
	          var max = _this$state.max;
	
	          _this.setState(_defineProperty({}, field, value));
	          if (field === "min") {
	            min = value;
	          } else {
	            max = value;
	          }
	
	          process.nextTick(function () {
	            var numPlayers = nextProps.numPlayers;
	            var range = [];
	            for (var i = max; i >= min; i--) {
	              range.push(i);
	            }
	            var schemata = (0, _findSchema2.default)(numPlayers, range);
	            _this.setState({
	              schemata: schemata.length ? schemata : [[]]
	            });
	          });
	        })();
	      }
	    };
	
	    _this.changeSchema = function (e, _, selectedGroup) {
	      if (selectedGroup) {
	        _this.totalPlayerAdded = 0;
	        _this.setState({ selectedGroup: selectedGroup.split(",").map(function (el) {
	            return +el;
	          }) });
	      }
	    };
	
	    _this.generatePDF = function () {
	      if (_this.state.generated) {
	        _this.title = "Whooops..";
	        _this.content = "You may only generate once every 30secs.";
	        _this.setState({ dialogOpen: true });
	        return;
	      }
	      if (!_this.state.schemata[0].length) {
	        _this.title = "Oooops..";
	        _this.content = "There are no players yet :(.";
	        _this.setState({ dialogOpen: true });
	        return;
	      }
	      (0, _clientActions.generatePDF)(_this.props.addedPlayers, _this.state.selectedGroup, _this.props.club, _this.props.date);
	
	      _this.setState({ generated: true, loading: true });
	      setTimeout(function () {
	        _this.setState({ generated: false });
	      }, 30000);
	    };
	
	    _this.handleSave = function () {
	      if (!_this.state.selectedGroup.length) {
	        _this.title = "Well....";
	        _this.content = "You have to have selected a schema before you can save.";
	        _this.setState({ dialogOpen: true });
	      } else {
	        _this.setState({ loading: true });
	        _this.props.saveSession(_this.state.schemata, _this.state.selectedGroup, _this.props.addedPlayers);
	      }
	    };
	
	    _this.download = function (link) {
	      try {
	        window.open("/api/pdfs/download/" + link);
	      } catch (e) {
	        console.log(e);
	      }
	    };
	
	    _this.moveUp = function (group) {
	      if (group === 0) return;
	      var selectedGroup = _this.state.selectedGroup.slice();
	      selectedGroup[group - 1] += 1;
	      selectedGroup[group] -= 1;
	      _this.setState({ selectedGroup: selectedGroup });
	    };
	
	    _this.moveDown = function (group) {
	      var selectedGroup = _this.state.selectedGroup.slice();
	      if (group === selectedGroup.length - 1) return;
	      selectedGroup[group + 1] += 1;
	      selectedGroup[group] -= 1;
	      _this.setState({ selectedGroup: selectedGroup });
	    };
	
	    _this.state = {
	      schemata: [[]],
	      max: null,
	      min: null,
	      selectedGroup: [],
	      pdfs: null,
	      generated: false,
	      stepIndex: 0,
	      open: false,
	      dialogOpen: false,
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(Grouping, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.pListener = _pdfStore2.default.addListener(this.fetchedPDF);
	      this.int = setInterval(this.tempSave, 60000);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.cached !== nextProps.cached) {
	        var schemata = function parseSchemata(s) {
	          if (s) {
	            if (typeof s === "string" || typeof s === "number") {
	              return [+s];
	            }
	
	            return s.map(function (arr) {
	              return arr.map(function (el) {
	                return +el;
	              });
	            });
	          }
	
	          return [[]];
	        }();
	        this.setState({
	          schemata: schemata,
	          selectedGroup: nextProps.selectedGroup ? nextProps.selectedGroup.map(function (el) {
	            return +el;
	          }) : [],
	          pdfs: nextProps.pdfs === "" ? null : nextProps.pdfs,
	          min: nextProps.min ? +nextProps.min : null,
	          max: nextProps.max ? +nextProps.max : null
	        });
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.pListener.remove();
	      clearInterval(this.int);
	    }
	  }, {
	    key: "handleOpen",
	    value: function handleOpen() {
	      this.setState({ open: true });
	    }
	  }, {
	    key: "schemata",
	    value: function schemata() {
	      var schemata = this.state.schemata;
	      if (schemata.length) {
	        return _react2.default.createElement("div", null, _react2.default.createElement(_SelectField2.default, {
	          value: this.state.selectedGroup.join(","),
	          onChange: this.changeSchema,
	          floatingLabelText: "Select a schema",
	          floatingLabelFixed: Boolean(true)
	        }, schemata ? schemata.map(function (schema) {
	          return _react2.default.createElement(_MenuItem2.default, {
	            key: schema,
	            value: schema.join(","),
	            primaryText: schema.join(", ")
	          });
	        }) : _react2.default.createElement(_MenuItem2.default, { key: "noth", disabled: Boolean(true), primaryText: "No Available Schemas..." })));
	      }
	      return null;
	    }
	  }, {
	    key: "numOfPlayers",
	    value: function numOfPlayers() {
	      var _this2 = this;
	
	      var _state = this.state;
	      var min = _state.min;
	      var max = _state.max;
	
	      return _react2.default.createElement("div", { className: "min-max" }, _react2.default.createElement(_SelectField2.default, {
	        value: max,
	        floatingLabelFixed: Boolean(true),
	        floatingLabelText: "Max Players",
	        onChange: function onChange(e, idx, val) {
	          return _this2.handleChange("max", e, idx, val);
	        }
	      }, rangeOfPlayers.map(function (num) {
	        return _react2.default.createElement(_MenuItem2.default, { key: num, value: num, primaryText: num, disabled: num < min });
	      })), _react2.default.createElement(_SelectField2.default, {
	        value: min,
	        floatingLabelFixed: Boolean(true),
	        floatingLabelText: "Min Players",
	        onChange: function onChange(e, idx, val) {
	          return _this2.handleChange("min", e, idx, val);
	        }
	      }, rangeOfPlayers.map(function (num) {
	        return _react2.default.createElement(_MenuItem2.default, { key: num, value: num, primaryText: num, disabled: num > max });
	      })));
	    }
	  }, {
	    key: "groupTables",
	    value: function groupTables() {
	      var _this3 = this;
	
	      var pdfs = this.state.pdfs;
	      return _react2.default.createElement("div", null, this.state.selectedGroup.map(function (numPlayers, i, arr) {
	        _this3.totalPlayerAdded += +numPlayers;
	        return _react2.default.createElement(_participantGroup2.default, {
	          key: "" + i + numPlayers, groupId: i,
	          pdfDownload: !pdfs ? function () {} : _this3.download.bind(_this3, pdfs["group" + (i + 1)]),
	          pdfs: !!pdfs,
	          numPlayers: numPlayers,
	          players: _this3.props.addedPlayers.slice(_this3.totalPlayerAdded - numPlayers, _this3.totalPlayerAdded),
	          moveUp: i === 0 ? null : _this3.moveUp,
	          moveDown: i === arr.length - 1 ? null : _this3.moveDown
	        });
	      }));
	    }
	  }, {
	    key: "loading",
	    value: function loading() {
	      if (this.state.loading) {
	        return _react2.default.createElement("div", { className: "overlay" }, _react2.default.createElement("div", { className: "loading" }, _react2.default.createElement(_CircularProgress2.default, { size: 2 })));
	      }
	      return "";
	    }
	  }, {
	    key: "dialog",
	    value: function dialog() {
	      if (this.state.dialogOpen) {
	        var actions = [_react2.default.createElement(_FlatButton2.default, {
	          label: "Close",
	          primary: Boolean(true),
	          onTouchTap: this.handleDialogClose
	        })];
	        return _react2.default.createElement(_Dialog2.default, {
	          title: this.title,
	          actions: actions,
	          open: this.state.dialogOpen,
	          modal: false,
	          onRequestClose: this.handleDialogClose
	        }, this.content);
	      }
	      return "";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var schemata = void 0;
	      var groupTables = void 0;
	      if (this.state.max && this.state.min) {
	        schemata = this.schemata();
	        if (this.state.selectedGroup) {
	          groupTables = this.groupTables();
	        }
	      }
	      this.totalPlayerAdded = 0;
	
	      return _react2.default.createElement("div", { className: "grouping" }, _react2.default.createElement(_IconMenu2.default, {
	        style: {
	          position: "absolute",
	          right: 0,
	          top: "-20px",
	          zIndex: "50"
	        },
	        iconButtonElement: _react2.default.createElement(_IconButton2.default, null, _react2.default.createElement(_moreVert2.default, null)),
	        anchorOrigin: { horizontal: "right", vertical: "top" },
	        targetOrigin: { horizontal: "right", vertical: "top" }
	      }, _react2.default.createElement(_MenuItem2.default, {
	        primaryText: "Generate PDF",
	        onClick: this.generatePDF,
	        disabled: this.state.generated || !this.state.selectedGroup.length
	      }), _react2.default.createElement(_MenuItem2.default, {
	        primaryText: "Save",
	        onClick: this.handleSave,
	        disabled: !this.state.selectedGroup.length
	      })), this.numOfPlayers(), schemata, groupTables, _react2.default.createElement(_Snackbar2.default, {
	        open: this.state.open,
	        onRequestClose: this.handleClose,
	        message: this.error || "",
	        autoHideDuration: 8000
	      }), this.loading(), this.dialog());
	    }
	  }]);
	
	  return Grouping;
	}(_react.Component);
	
	Grouping.propTypes = {
	  club: _react.PropTypes.object,
	  date: _react.PropTypes.string,
	  addedPlayers: _react.PropTypes.array,
	  saveSession: _react.PropTypes.func,
	  cached: _react.PropTypes.bool,
	  temporarilySaveSession: _react.PropTypes.func
	};
	exports.default = Grouping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7O0tBRTlCO3VCQVNKOztxQkFBWSxPQUFPOzJCQUFBOzs2RkFDWDs7V0E4Q1IsV0FBVyxZQUNUO2FBQUssTUFBTSx1QkFDVCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUF2RGtCOztXQTJEbkIsY0FBYyxZQUNaO2FBQUssU0FBUyxFQUFFLE1BQ2pCO0FBN0RrQjs7V0E4RG5CLG9CQUFvQixZQUNsQjthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQWhFa0I7O1dBaUVuQixhQUFhLFlBQ1g7V0FBTSxRQUFRLG1CQUNkO1dBQUksT0FDRjtlQUFLLFFBQ0w7ZUFBSyxTQUFTLEVBQUUsU0FDaEI7ZUFDRDtBQUpELGNBS0U7ZUFBSyxTQUFTLEVBQUUsTUFBTSxtQkFBUyxVQUFVLFNBQzFDO0FBQ0Y7QUExRWtCOztXQTJFbkIsZUFBZSxVQUFDLE9BQU8sR0FBRyxLQUFLLE9BQzdCO1dBQUksT0FBTztzQkFBQTs2QkFDVSxNQUFLO2VBQWxCO2VBQUssa0JBQ1g7O2lCQUFLLDZCQUFZLE9BQ2pCO2VBQUksVUFBVSxPQUNaO21CQUNEO0FBRkQsa0JBR0U7bUJBQ0Q7QUFFRDs7bUJBQVEsU0FBUyxZQUNmO2lCQUFNLGFBQWEsVUFDbkI7aUJBQU0sUUFDTjtrQkFBSyxJQUFJLElB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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIm1hdGVyaWFsLXVpL01lbnVJdGVtXCI7XG5pbXBvcnQgSWNvbk1lbnUgZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25NZW51XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnRcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgUGFydGljaXBhbnRHcm91cCBmcm9tIFwiLi9wYXJ0aWNpcGFudEdyb3VwXCI7XG5pbXBvcnQgZmluZFNjaGVtYXRhIGZyb20gXCIuLi8uLi9tZXRob2RzL2ZpbmRTY2hlbWFcIjtcbmltcG9ydCB7IGdlbmVyYXRlUERGIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IFBERlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGRmU3RvcmVcIjtcblxuY29uc3QgcmFuZ2VPZlBsYXllcnMgPSBbMywgNCwgNSwgNiwgN107XG5cbmNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2F2ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhY2hlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NoZW1hdGE6IFtbXV0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IG51bGwsXG4gICAgICBzZWxlY3RlZEdyb3VwOiBbXSxcbiAgICAgIHBkZnM6IG51bGwsXG4gICAgICBnZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgc3RlcEluZGV4OiAwLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIgPSBQREZTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRQREYpO1xuICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwodGhpcy50ZW1wU2F2ZSwgNjAwMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGVkICE9PSBuZXh0UHJvcHMuY2FjaGVkKSB7XG4gICAgICBjb25zdCBzY2hlbWF0YSA9IChmdW5jdGlvbiBwYXJzZVNjaGVtYXRhKHMpIHtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWytzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcy5tYXAoYXJyID0+IGFyci5tYXAoZWwgPT4gK2VsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgIH0oKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2NoZW1hdGEsXG4gICAgICAgIHNlbGVjdGVkR3JvdXA6IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwID8gbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAubWFwKGVsID0+ICtlbCkgOiBbXSxcbiAgICAgICAgcGRmczogbmV4dFByb3BzLnBkZnMgPT09IFwiXCIgPyBudWxsIDogbmV4dFByb3BzLnBkZnMsXG4gICAgICAgIG1pbjogbmV4dFByb3BzLm1pbiA/ICtuZXh0UHJvcHMubWluIDogbnVsbCxcbiAgICAgICAgbWF4OiBuZXh0UHJvcHMubWF4ID8gK25leHRQcm9wcy5tYXggOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50KTtcbiAgfVxuICB0ZW1wU2F2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb24oXG4gICAgICB0aGlzLnN0YXRlLm1pbixcbiAgICAgIHRoaXMuc3RhdGUubWF4LFxuICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCxcbiAgICAgIHRoaXMuc3RhdGUucGRmc1xuICAgICk7XG4gIH1cbiAgaGFuZGxlT3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IGZhbHNlIH0pO1xuICB9XG4gIGZldGNoZWRQREYgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBQREZTdG9yZS5nZXRFcnJvcigpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZGZzOiBQREZTdG9yZS5nZXRQREYoKSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCwgZSwgaWR4LCB2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHsgbWluLCBtYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgICBpZiAoZmllbGQgPT09IFwibWluXCIpIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bVBsYXllcnMgPSBuZXh0UHJvcHMubnVtUGxheWVycztcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1heDsgaSA+PSBtaW47IGktLSkge1xuICAgICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NoZW1hdGEgPSBmaW5kU2NoZW1hdGEobnVtUGxheWVycywgcmFuZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY2hlbWF0YTogc2NoZW1hdGEubGVuZ3RoID8gc2NoZW1hdGEgOiBbW11dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNjaGVtYXRhKCkge1xuICAgIGNvbnN0IHNjaGVtYXRhID0gdGhpcy5zdGF0ZS5zY2hlbWF0YTtcbiAgICBpZiAoc2NoZW1hdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuam9pbihcIixcIil9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlU2NoZW1hfVxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VsZWN0IGEgc2NoZW1hXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY2hlbWF0YSA/XG4gICAgICAgICAgICAgIHNjaGVtYXRhLm1hcChzY2hlbWEgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtzY2hlbWF9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1hLmpvaW4oXCIsXCIpfVxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9e3NjaGVtYS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtcIm5vdGhcIn0gZGlzYWJsZWQ9e0Jvb2xlYW4odHJ1ZSl9IHByaW1hcnlUZXh0PVwiTm8gQXZhaWxhYmxlIFNjaGVtYXMuLi5cIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG51bU9mUGxheWVycygpIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1pbi1tYXhcIj5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWF4fVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWF4IFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KGUsIGlkeCwgdmFsKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShcIm1heFwiLCBlLCBpZHgsIHZhbCl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA8IG1pbn0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgIHZhbHVlPXttaW59XG4gICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJNaW4gUGxheWVyc1wiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSwgaWR4LCB2YWwpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWluXCIsIGUsIGlkeCwgdmFsKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHJhbmdlT2ZQbGF5ZXJzLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bnVtfSB2YWx1ZT17bnVtfSBwcmltYXJ5VGV4dD17bnVtfSBkaXNhYmxlZD17bnVtID4gbWF4fSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgPC9kaXY+KTtcbiAgfVxuICBjaGFuZ2VTY2hlbWEgPSAoZSwgXywgc2VsZWN0ZWRHcm91cCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwKSB7XG4gICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHNlbGVjdGVkR3JvdXAuc3BsaXQoXCIsXCIpLm1hcChlbCA9PiArZWwpIH0pO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZVBERiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5nZW5lcmF0ZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIldob29vcHMuLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgbWF5IG9ubHkgZ2VuZXJhdGUgb25jZSBldmVyeSAzMHNlY3MuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNjaGVtYXRhWzBdLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiT29vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiVGhlcmUgYXJlIG5vIHBsYXllcnMgeWV0IDooLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdlbmVyYXRlUERGKFxuICAgICAgdGhpcy5wcm9wcy5hZGRlZFBsYXllcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnByb3BzLmNsdWIsXG4gICAgICB0aGlzLnByb3BzLmRhdGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmVyYXRlZDogdHJ1ZSwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IGZhbHNlIH0pO1xuICAgIH0sIDMwMDAwKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXZWxsLi4uLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgaGF2ZSB0byBoYXZlIHNlbGVjdGVkIGEgc2NoZW1hIGJlZm9yZSB5b3UgY2FuIHNhdmUuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICB0aGlzLnByb3BzLnNhdmVTZXNzaW9uKFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLFxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBkb3dubG9hZCA9IChsaW5rKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5vcGVuKGAvYXBpL3BkZnMvZG93bmxvYWQvJHtsaW5rfWApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICBtb3ZlVXAgPSAoZ3JvdXApID0+IHtcbiAgICBpZiAoZ3JvdXAgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cCAtIDFdICs9IDE7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cF0gLT0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cCB9KTtcbiAgfVxuICBtb3ZlRG93biA9IChncm91cCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuc2xpY2UoKTtcbiAgICBpZiAoZ3JvdXAgPT09IHNlbGVjdGVkR3JvdXAubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgKyAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgZ3JvdXBUYWJsZXMoKSB7XG4gICAgY29uc3QgcGRmcyA9IHRoaXMuc3RhdGUucGRmcztcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5tYXAoKG51bVBsYXllcnMsIGksIGFycikgPT4ge1xuICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCArPSArbnVtUGxheWVycztcbiAgICAgICAgICByZXR1cm4gKDxQYXJ0aWNpcGFudEdyb3VwXG4gICAgICAgICAgICBrZXk9e2Ake2l9JHtudW1QbGF5ZXJzfWB9IGdyb3VwSWQ9e2l9XG4gICAgICAgICAgICBwZGZEb3dubG9hZD17IXBkZnMgPyAoKSA9PiB7fSA6IHRoaXMuZG93bmxvYWQuYmluZCh0aGlzLCBwZGZzW2Bncm91cCR7KGkgKyAxKX1gXSl9XG4gICAgICAgICAgICBwZGZzPXshIXBkZnN9XG4gICAgICAgICAgICBudW1QbGF5ZXJzPXtudW1QbGF5ZXJzfVxuICAgICAgICAgICAgcGxheWVycz17dGhpcy5wcm9wcy5hZGRlZFBsYXllcnMuc2xpY2UoXG4gICAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCAtIG51bVBsYXllcnMsIHRoaXMudG90YWxQbGF5ZXJBZGRlZFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgbW92ZVVwPXtpID09PSAwID8gbnVsbCA6IHRoaXMubW92ZVVwfVxuICAgICAgICAgICAgbW92ZURvd249e2kgPT09IGFyci5sZW5ndGggLSAxID8gbnVsbCA6IHRoaXMubW92ZURvd259XG4gICAgICAgICAgLz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbiAgbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz48L2Rpdj48L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGRpYWxvZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaWFsb2dPcGVuKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIF07XG4gICAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e3RoaXMudGl0bGV9XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuZGlhbG9nT3Blbn1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgID5cbiAgICAgICAge3RoaXMuY29udGVudH1cbiAgICAgIDwvRGlhbG9nPik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2NoZW1hdGE7XG4gICAgbGV0IGdyb3VwVGFibGVzO1xuICAgIGlmICh0aGlzLnN0YXRlLm1heCAmJiB0aGlzLnN0YXRlLm1pbikge1xuICAgICAgc2NoZW1hdGEgPSB0aGlzLnNjaGVtYXRhKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwKSB7XG4gICAgICAgIGdyb3VwVGFibGVzID0gdGhpcy5ncm91cFRhYmxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyb3VwaW5nXCI+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogXCItMjBweFwiLFxuICAgICAgICAgIHpJbmRleDogXCI1MFwiXG4gICAgICAgIH19XG4gICAgICAgIGljb25CdXR0b25FbGVtZW50PXs8SWNvbkJ1dHRvbj48TW9yZVZlcnRJY29uIC8+PC9JY29uQnV0dG9uPn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgICAgdGFyZ2V0T3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJHZW5lcmF0ZSBQREZcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQREZ9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZ2VuZXJhdGVkIHx8ICF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBwcmltYXJ5VGV4dD1cIlNhdmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5sZW5ndGh9XG4gICAgICAgIC8+XG4gICAgICA8L0ljb25NZW51PlxuICAgICAgeyB0aGlzLm51bU9mUGxheWVycygpIH1cbiAgICAgIHsgc2NoZW1hdGEgfVxuICAgICAgeyBncm91cFRhYmxlcyB9XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgbWVzc2FnZT17dGhpcy5lcnJvciB8fCBcIlwifVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs4MDAwfVxuICAgICAgLz5cbiAgICAgIHsgdGhpcy5sb2FkaW5nKCkgfVxuICAgICAgeyB0aGlzLmRpYWxvZygpIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2dyb3VwaW5nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==