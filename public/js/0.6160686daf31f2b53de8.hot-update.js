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
	  numPlayers: _react.PropTypes.number,
	  temporarilySaveSession: _react.PropTypes.func
	};
	exports.default = Grouping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7O0tBRTlCO3VCQVVKOztxQkFBWSxPQUFPOzJCQUFBOzs2RkFDWDs7V0E4Q1IsV0FBVyxZQUNUO2FBQUssTUFBTSx1QkFDVCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUF2RGtCOztXQTJEbkIsY0FBYyxZQUNaO2FBQUssU0FBUyxFQUFFLE1BQ2pCO0FBN0RrQjs7V0E4RG5CLG9CQUFvQixZQUNsQjthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQWhFa0I7O1dBaUVuQixhQUFhLFlBQ1g7V0FBTSxRQUFRLG1CQUNkO1dBQUksT0FDRjtlQUFLLFFBQ0w7ZUFBSyxTQUFTLEVBQUUsU0FDaEI7ZUFDRDtBQUpELGNBS0U7ZUFBSyxTQUFTLEVBQUUsTUFBTSxtQkFBUyxVQUFVLFNBQzFDO0FBQ0Y7QUExRWtCOztXQTJFbkIsZUFBZSxVQUFDLE9BQU8sR0FBRyxLQUFLLE9BQzdCO1dBQUksT0FBTztzQkFBQTs2QkFDVSxNQUFLO2VBQWxCO2VBQUssa0JBQ1g7O2lCQUFLLDZCQUFZLE9BQ2pCO2VBQUksVUFBVSxPQUNaO21CQUNEO0FBRkQsa0JBR0U7bUJBQ0Q7QUFFRDs7bUJBQVEsU0FBUyxZQUNmO2lCQUFNLGFBQWEsVUFDbkI7aUJBQU0sUUFDTjtrQkFBSyxJQUFJLElB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YjUzZGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcbmltcG9ydCBJY29uTWVudSBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbk1lbnVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uL0ljb25CdXR0b25cIjtcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIm1hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21vcmUtdmVydFwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIm1hdGVyaWFsLXVpL0RpYWxvZ1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBQYXJ0aWNpcGFudEdyb3VwIGZyb20gXCIuL3BhcnRpY2lwYW50R3JvdXBcIjtcbmltcG9ydCBmaW5kU2NoZW1hdGEgZnJvbSBcIi4uLy4uL21ldGhvZHMvZmluZFNjaGVtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQREYgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuXG5jb25zdCByYW5nZU9mUGxheWVycyA9IFszLCA0LCA1LCA2LCA3XTtcblxuY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZGRlZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2FjaGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBudW1QbGF5ZXJzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjaGVtYXRhOiBbW11dLFxuICAgICAgbWF4OiBudWxsLFxuICAgICAgbWluOiBudWxsLFxuICAgICAgc2VsZWN0ZWRHcm91cDogW10sXG4gICAgICBwZGZzOiBudWxsLFxuICAgICAgZ2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgIHN0ZXBJbmRleDogMCxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgZGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucExpc3RlbmVyID0gUERGU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5mZXRjaGVkUERGKTtcbiAgICB0aGlzLmludCA9IHNldEludGVydmFsKHRoaXMudGVtcFNhdmUsIDYwMDAwKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmNhY2hlZCAhPT0gbmV4dFByb3BzLmNhY2hlZCkge1xuICAgICAgY29uc3Qgc2NoZW1hdGEgPSAoZnVuY3Rpb24gcGFyc2VTY2hlbWF0YShzKSB7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgcyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFsrc107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHMubWFwKGFyciA9PiBhcnIubWFwKGVsID0+ICtlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtbXV07XG4gICAgICB9KCkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjaGVtYXRhLFxuICAgICAgICBzZWxlY3RlZEdyb3VwOiBuZXh0UHJvcHMuc2VsZWN0ZWRHcm91cCA/IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwLm1hcChlbCA9PiArZWwpIDogW10sXG4gICAgICAgIHBkZnM6IG5leHRQcm9wcy5wZGZzID09PSBcIlwiID8gbnVsbCA6IG5leHRQcm9wcy5wZGZzLFxuICAgICAgICBtaW46IG5leHRQcm9wcy5taW4gPyArbmV4dFByb3BzLm1pbiA6IG51bGwsXG4gICAgICAgIG1heDogbmV4dFByb3BzLm1heCA/ICtuZXh0UHJvcHMubWF4IDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludCk7XG4gIH1cbiAgdGVtcFNhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9uKFxuICAgICAgdGhpcy5zdGF0ZS5taW4sXG4gICAgICB0aGlzLnN0YXRlLm1heCxcbiAgICAgIHRoaXMuc3RhdGUuc2NoZW1hdGEsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnN0YXRlLnBkZnNcbiAgICApO1xuICB9XG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiBmYWxzZSB9KTtcbiAgfVxuICBmZXRjaGVkUERGID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUERGU3RvcmUuZ2V0RXJyb3IoKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGRmczogUERGU3RvcmUuZ2V0UERGKCksIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQsIGUsIGlkeCwgdmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCB7IG1pbiwgbWF4IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgICAgaWYgKGZpZWxkID09PSBcIm1pblwiKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1QbGF5ZXJzID0gbmV4dFByb3BzLm51bVBsYXllcnM7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLS0pIHtcbiAgICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjaGVtYXRhID0gZmluZFNjaGVtYXRhKG51bVBsYXllcnMsIHJhbmdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2NoZW1hdGE6IHNjaGVtYXRhLmxlbmd0aCA/IHNjaGVtYXRhIDogW1tdXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzY2hlbWF0YSgpIHtcbiAgICBjb25zdCBzY2hlbWF0YSA9IHRoaXMuc3RhdGUuc2NoZW1hdGE7XG4gICAgaWYgKHNjaGVtYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmpvaW4oXCIsXCIpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVNjaGVtYX1cbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbGVjdCBhIHNjaGVtYVwiXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2NoZW1hdGEgP1xuICAgICAgICAgICAgICBzY2hlbWF0YS5tYXAoc2NoZW1hID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjaGVtYS5qb2luKFwiLFwiKX1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXtzY2hlbWEuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17XCJub3RoXCJ9IGRpc2FibGVkPXtCb29sZWFuKHRydWUpfSBwcmltYXJ5VGV4dD1cIk5vIEF2YWlsYWJsZSBTY2hlbWFzLi4uXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBudW1PZlBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJtaW4tbWF4XCI+XG4gICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgdmFsdWU9e21heH1cbiAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIk1heCBQbGF5ZXJzXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlLCBpZHgsIHZhbCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoXCJtYXhcIiwgZSwgaWR4LCB2YWwpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcmFuZ2VPZlBsYXllcnMubWFwKG51bSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtudW19IHZhbHVlPXtudW19IHByaW1hcnlUZXh0PXtudW19IGRpc2FibGVkPXtudW0gPCBtaW59IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWlufVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWluIFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KGUsIGlkeCwgdmFsKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShcIm1pblwiLCBlLCBpZHgsIHZhbCl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA+IG1heH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgIDwvZGl2Pik7XG4gIH1cbiAgY2hhbmdlU2NoZW1hID0gKGUsIF8sIHNlbGVjdGVkR3JvdXApID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCkge1xuICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiBzZWxlY3RlZEdyb3VwLnNwbGl0KFwiLFwiKS5tYXAoZWwgPT4gK2VsKSB9KTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVQREYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2VuZXJhdGVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXaG9vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IG1heSBvbmx5IGdlbmVyYXRlIG9uY2UgZXZlcnkgMzBzZWNzLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5zY2hlbWF0YVswXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIk9vb29wcy4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIlRoZXJlIGFyZSBubyBwbGF5ZXJzIHlldCA6KC5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBERihcbiAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5wcm9wcy5jbHViLFxuICAgICAgdGhpcy5wcm9wcy5kYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IHRydWUsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZXJhdGVkOiBmYWxzZSB9KTtcbiAgICB9LCAzMDAwMCk7XG4gIH1cblxuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiV2VsbC4uLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IGhhdmUgdG8gaGF2ZSBzZWxlY3RlZCBhIHNjaGVtYSBiZWZvcmUgeW91IGNhbiBzYXZlLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlU2Vzc2lvbihcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgICB0aGlzLnByb3BzLmFkZGVkUGxheWVyc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZG93bmxvYWQgPSAobGluaykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cub3BlbihgL2FwaS9wZGZzL2Rvd25sb2FkLyR7bGlua31gKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbiAgbW92ZVVwID0gKGdyb3VwKSA9PiB7XG4gICAgaWYgKGdyb3VwID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5zbGljZSgpO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgLSAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgbW92ZURvd24gPSAoZ3JvdXApID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgaWYgKGdyb3VwID09PSBzZWxlY3RlZEdyb3VwLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwICsgMV0gKz0gMTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwXSAtPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwIH0pO1xuICB9XG4gIGdyb3VwVGFibGVzKCkge1xuICAgIGNvbnN0IHBkZnMgPSB0aGlzLnN0YXRlLnBkZnM7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubWFwKChudW1QbGF5ZXJzLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgKz0gK251bVBsYXllcnM7XG4gICAgICAgICAgcmV0dXJuICg8UGFydGljaXBhbnRHcm91cFxuICAgICAgICAgICAga2V5PXtgJHtpfSR7bnVtUGxheWVyc31gfSBncm91cElkPXtpfVxuICAgICAgICAgICAgcGRmRG93bmxvYWQ9eyFwZGZzID8gKCkgPT4ge30gOiB0aGlzLmRvd25sb2FkLmJpbmQodGhpcywgcGRmc1tgZ3JvdXAkeyhpICsgMSl9YF0pfVxuICAgICAgICAgICAgcGRmcz17ISFwZGZzfVxuICAgICAgICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgICAgICAgIHBsYXllcnM9e3RoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgLSBudW1QbGF5ZXJzLCB0aGlzLnRvdGFsUGxheWVyQWRkZWRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG1vdmVVcD17aSA9PT0gMCA/IG51bGwgOiB0aGlzLm1vdmVVcH1cbiAgICAgICAgICAgIG1vdmVEb3duPXtpID09PSBhcnIubGVuZ3RoIC0gMSA/IG51bGwgOiB0aGlzLm1vdmVEb3dufVxuICAgICAgICAgIC8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+PC9kaXY+PC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBkaWFsb2coKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3Blbikge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICBdO1xuICAgICAgcmV0dXJuICg8RGlhbG9nXG4gICAgICAgIHRpdGxlPXt0aGlzLnRpdGxlfVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmRpYWxvZ09wZW59XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmNvbnRlbnR9XG4gICAgICA8L0RpYWxvZz4pO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNjaGVtYXRhO1xuICAgIGxldCBncm91cFRhYmxlcztcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXggJiYgdGhpcy5zdGF0ZS5taW4pIHtcbiAgICAgIHNjaGVtYXRhID0gdGhpcy5zY2hlbWF0YSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCkge1xuICAgICAgICBncm91cFRhYmxlcyA9IHRoaXMuZ3JvdXBUYWJsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJncm91cGluZ1wiPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB0b3A6IFwiLTIwcHhcIixcbiAgICAgICAgICB6SW5kZXg6IFwiNTBcIlxuICAgICAgICB9fVxuICAgICAgICBpY29uQnV0dG9uRWxlbWVudD17PEljb25CdXR0b24+PE1vcmVWZXJ0SWNvbiAvPjwvSWNvbkJ1dHRvbj59XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICAgIHRhcmdldE9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIHByaW1hcnlUZXh0PVwiR2VuZXJhdGUgUERGXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUERGfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmdlbmVyYXRlZCB8fCAhdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJTYXZlXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgPC9JY29uTWVudT5cbiAgICAgIHsgdGhpcy5udW1PZlBsYXllcnMoKSB9XG4gICAgICB7IHNjaGVtYXRhIH1cbiAgICAgIHsgZ3JvdXBUYWJsZXMgfVxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIG1lc3NhZ2U9e3RoaXMuZXJyb3IgfHwgXCJcIn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgIC8+XG4gICAgICB7IHRoaXMubG9hZGluZygpIH1cbiAgICAgIHsgdGhpcy5kaWFsb2coKSB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=