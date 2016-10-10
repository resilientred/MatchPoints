webpackHotUpdate(0,{

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
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
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var rangeOfPlayers = [3, 4, 5, 6, 7];
	
	var objToString = function objToString(obj) {
	  return Object.keys(obj).reduce(function (a, b) {
	    return a + b + obj[b];
	  }, "");
	};
	
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
	      debugger;
	      if (value) _this.setState(_defineProperty({}, field, value));
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
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _this2 = this;
	
	      if (this.state.dialogOpen !== nextState.dialogOpen || this.state.generated !== nextState.generated || this.state.loading !== nextState.loading || this.state.open !== nextState.open) {
	        return true;
	      }
	      if (!this.state.pdfs && nextState.pdfs || nextState.pdfs && objToString(this.state.pdfs) !== objToString(nextState.pdfs)) {
	        return true;
	      }
	      if (this.state.selectedGroup && nextState.selectedGroup && this.state.selectedGroup.toString() !== nextState.selectedGroup.toString()) {
	        return true;
	      }
	      if (this.state.schemata && nextState.schemata && this.state.schemata.toString() !== nextState.schemata.toString()) {
	        return true;
	      }
	
	      var _state = this.state;
	      var min = _state.min;
	      var max = _state.max;
	
	      if (max !== nextState.max && !min) return true;
	      if (max !== nextState.max || max && min !== nextState.min || this.props.numPlayers !== nextProps.numPlayers && max && min) {
	        var _ret = function () {
	          var range = [];
	          for (var i = nextState.max; i >= (nextState.min || min); i--) {
	            range.push(i);
	          }
	          process.nextTick(function () {
	            var numPlayers = nextProps.numPlayers;
	            var range2 = range.slice();
	            var schemata = (0, _findSchema2.default)(numPlayers, range2);
	            _this2.setState({
	              schemata: schemata.length ? schemata : [[]]
	            });
	          });
	          return {
	            v: true
	          };
	        }();
	
	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }
	
	      return false;
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
	      var _this3 = this;
	
	      var _state2 = this.state;
	      var min = _state2.min;
	      var max = _state2.max;
	
	      return _react2.default.createElement("div", { className: "min-max" }, _react2.default.createElement(_SelectField2.default, {
	        value: max,
	        floatingLabelFixed: Boolean(true),
	        floatingLabelText: "Max Players",
	        onChange: function onChange(e, idx, val) {
	          return _this3.handleChange("max", e, idx, val);
	        }
	      }, rangeOfPlayers.map(function (num) {
	        return _react2.default.createElement(_MenuItem2.default, { key: num, value: num, primaryText: num, disabled: num < min });
	      })), _react2.default.createElement(_SelectField2.default, {
	        value: min,
	        floatingLabelFixed: Boolean(true),
	        floatingLabelText: "Min Players",
	        onChange: function onChange(e, idx, val) {
	          return _this3.handleChange("min", e, idx, val);
	        }
	      }, rangeOfPlayers.map(function (num) {
	        return _react2.default.createElement(_MenuItem2.default, { key: num, value: num, primaryText: num, disabled: num > max });
	      })));
	    }
	  }, {
	    key: "groupTables",
	    value: function groupTables() {
	      var _this4 = this;
	
	      var pdfs = this.state.pdfs;
	      return _react2.default.createElement("div", null, this.state.selectedGroup.map(function (numPlayers, i, arr) {
	        _this4.totalPlayerAdded += +numPlayers;
	        return _react2.default.createElement(_participantGroup2.default, {
	          key: "" + i + numPlayers, groupId: i,
	          pdfDownload: !pdfs ? function () {} : _this4.download.bind(_this4, pdfs["group" + (i + 1)]),
	          pdfs: !!pdfs,
	          numPlayers: numPlayers,
	          players: _this4.props.addedPlayers.slice(_this4.totalPlayerAdded - numPlayers, _this4.totalPlayerAdded),
	          moveUp: i === 0 ? null : _this4.moveUp,
	          moveDown: i === arr.length - 1 ? null : _this4.moveDown
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7O0FBRXBDLEtBQU0sY0FBYztpQkFDWCxLQUFLLEtBQUssT0FBTyxVQUFDLEdBQUcsR0FBSjtZQUFVLElBQUksSUFBSSxJQUFJO0FBQTlDLE1BQWtEO0FBRHBEOztLQUlNO3VCQVVKOztxQkFBWSxPQUFPOzJCQUFBOzs2RkFDWDs7V0F1RlIsV0FBVyxZQUNUO2FBQUssTUFBTSx1QkFDVCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUFoR2tCOztXQW9HbkIsY0FBYyxZQUNaO2FBQUssU0FBUyxFQUFFLE1BQ2pCO0FBdEdrQjs7V0F1R25CLG9CQUFvQixZQUNsQjthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQXpHa0I7O1dBMEduQixhQUFhLFlBQ1g7V0FBTSxRQUFRLG1CQUNkO1dBQUksT0FDRjtlQUFLLFFBQ0w7ZUFBSyxTQUFTLEVBQUUsU0FDaEI7ZUFDRDtBQUpELGNBS0U7ZUFBSyxTQUFTLEVBQUUsTUFBTSxtQkFBUyxVQUFVLFNBQzFDO0FBQ0Y7QUFuSGtCOztXQW9IbkIsZUFBZSxVQUFDLE9BQU8sR0FBRyxLQUFLLE9BQzdCO0FBQ0E7V0FBSSxPQUFPLE1BQUssNkJBQVksT0FDN0I7QUF2SGtCOztXQWlMbkIsZUFBZSxVQUFDLEdBQUcsR0FBRyxlQUNwQjtXQUFJLGVBQ0Y7ZUFBSyxtQkFDTDtlQUFLLFdBQVcsNkJBQTZCLE1BQU0sS0FBSyxJQUFJO29CQUFNLENBQUM7QUFDcEUsWUFEZ0MsQ0FBakI7QUFFakI7QUF0TGtCOztXQXVMbkIsY0FBYyxZQUNaO1dBQUksTUFBSyxNQUFNLFdBQ2I7ZUFBSyxRQUNMO2VBQUssVUFDTDtlQUFLLFNBQVMsRUFBRSxZQUNoQjtBQUNEO0FBQ0Q7V0FBSSxDQUFDLE1BQUssTUFBTSxTQUFTLEdBQUcsUUFDMUI7ZUFBSyxRQUNMO2VBQUssVUFDTDtlQUFLLFNBQVMsRUFBRSxZQUNoQjtBQUNEO0FBQ0Q7dUNBQ0UsTUFBSyxNQUFNLGNBQ1gsTUFBSyxNQUFNLGVBQ1gsTUFBSyxNQUFNLE1BQ1gsTUFBSyxNQUVQOzthQUFLLFNBQVMsRUFBRSxXQUFXLE1BQU0sU0FDakM7a0JBQVcsWUFDVDtlQUFLLFNBQVMsRUFBRSxXQUNqQjtBQUZELFVBR0Q7QUE5TWtCOztXQWdObkIsYUFBYSxZQUNYO1dBQUksQ0FBQyxNQUFLLE1BQU0sY0FBYyxRQUM1QjtlQUFLLFFBQ0w7ZUFBSyxVQUNMO2VBQUssU0FBUyxFQUFFLFlBQ2pCO0FBSkQsY0FLRTtlQUFLLFNBQVMsRUFBRSxTQUNoQjtlQUFLLE1BQU0sWUFDVCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUFDRjtBQTdOa0I7O1dBOE5uQixXQUFXLFVBQUMsTUFDVjtXQUNFO2dCQUFPLDZCQUNSO0FBRkQsU0FFRSxPQUFPLEdBQ1A7aUJBQVEsSUFDVDtBQUNGO0FBcE9rQjs7V0FxT25CLFNBQVMsVUFBQyxPQUNSO1dBQUksVUFBVSxHQUNkO1dBQU0sZ0JBQWdCLE1BQUssTUFBTSxjQUNqQztxQkFBYyxRQUFRLE1BQ3RCO3FCQUFjLFVBQ2Q7YUFBSyxTQUFTLEVBQUUsZUFDakI7QUEzT2tCOztXQTRPbkIsV0FBVyxVQUFDLE9BQ1Y7V0FBTSxnQkFBZ0IsTUFBSyxNQUFNLGNBQ2pDO1dBQUksVUFBVSxjQUFjLFNBQVMsR0FDckM7cUJBQWMsUUFBUSxNQUN0QjtxQkFBYyxVQUNkO2FBQUssU0FBUyxFQUFFLGVBQ2pCO0FBaFBDOztXQUFLO2lCQUNPLENBQ1Y7WUFDQTtZQUNBO3NCQUNBO2FBQ0E7a0JBQ0E7a0JBQ0E7YUFDQTttQkFDQTtnQkFBUztBQVRUO1lBV0g7Ozs7OzBDQUVDO1lBQUssWUFBWSxtQkFBUyxZQUFZLEtBQ3RDO1lBQUssTUFBTSxZQUFZLEtBQUssVUFDN0I7Ozs7K0NBQ3lCLFdBQ3hCO1dBQUksS0FBSyxNQUFNLFdBQVcsVUFBVSxRQUNsQzthQUFNLG9CQUFxQixjQUFjLEdBQ3ZDO2VBQUksR0FDRjtpQkFBSSxPQUFPLE1BQU0sWUFDZixPQUFPLE1BQU0sVUFDYjtzQkFBTyxDQUFDLENBQ1Q7QUFFRDs7c0JBQVMsSUFBSTswQkFBVyxJQUFJO3dCQUFNLENBQUM7QUFBZjtBQUNyQixjQURRO0FBR1Q7O2tCQUFPLENBQ1I7QUFDRCxVQVprQjtjQVliO3FCQUVIO29DQUF5QiwwQkFBMEIsY0FBYyxJQUFJO29CQUFNLENBQUM7QUFBbkMsYUFBMUIsR0FDZjtpQkFBTSxVQUFVLFNBQVMsS0FBSyxPQUFPLFVBQ3JDO2dCQUFLLFVBQVUsTUFBTSxDQUFDLFVBQVUsTUFDaEM7Z0JBQUssVUFBVSxNQUFNLENBQUMsVUFBVSxNQUVuQztBQU5HO0FBT0w7Ozs7MkNBQ3FCLFdBQVcsV0FBVztvQkFDMUM7O1dBQUksS0FBSyxNQUFNLGVBQWUsVUFBVSxjQUNsQyxLQUFLLE1BQU0sY0FBYyxVQUFVLGFBQ25DLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FDakMsS0FBSyxNQUFNLFNBQVMsVUFBVSxNQUNsQztnQkFDRDtBQUNEO1dBQUssQ0FBQyxLQUFLLE1BQU0sUUFBUSxVQUFVLFFBQzVCLFVBQVUsUUFBUSxZQUFZLEtBQUssTUFBTSxVQUFVLFlBQVksVUFBVSxPQUM5RTtnQkFDRDtBQUNEO1dBQUksS0FBSyxNQUFNLGlCQUFpQixVQUFVLGlCQUNwQyxLQUFLLE1BQU0sY0FBYyxlQUFlLFVBQVUsY0FBYyxZQUNwRTtnQkFDRDtBQUNEO1dBQUksS0FBSyxNQUFNLFlBQVksVUFBVSxZQUMvQixLQUFLLE1BQU0sU0FBUyxlQUFlLFVBQVUsU0FBUyxZQUMxRDtnQkFDRDtBQWxCeUM7O29CQW9CckIsS0FBSztXQUFsQjtXQUFLLGFBQ2I7O1dBQUksUUFBUSxVQUFVLE9BQU8sQ0FBQyxLQUFLLE9BQ25DO1dBQUssUUFBUSxVQUFVLE9BQ3BCLE9BQVEsUUFBUSxVQUFVLE9BQzFCLEtBQUssTUFBTSxlQUFlLFVBQVUsY0FBYyxPQUFPLEtBQU07Z0NBQ2hFO2VBQU0sUUFDTjtnQkFBSyxJQUFJLElBQUksVUFBVSxLQUFLLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FDdkQ7bUJBQU0sS0FDUDtBQUNEO21CQUFRLFNBQVMsWUFDZjtpQkFBTSxhQUFhLFVBQ25CO2lCQUFNLFNBQVMsTUFDZjtpQkFBTSxXQUFXLDBCQUFhLFlBQzlCO29CQUFLO3lCQUNPLFNBQVMsU0FBUyxXQUFXLENBRTFDO0FBRkc7QUFHSjs7Z0JBQU87QUFBUDtBQWJnRTs7bUdBY2pFO0FBRUQ7O2NBQ0Q7Ozs7NENBRUM7WUFBSyxVQUNMO3FCQUFjLEtBQ2Y7Ozs7a0NBV0M7WUFBSyxTQUFTLEVBQUUsTUFDakI7Ozs7Z0NBc0JDO1dBQU0sV0FBVyxLQUFLLE1BQ3RCO1dBQUksU0FBUyxRQUNYO2dCQUFRLDJEQUNOO2tCQUNTLEtBQUssTUFBTSxjQUFjLEtBQ2hDO3FCQUFVLEtBQ1Y7OEJBQ0E7K0JBQW9CLFFBQVE7QUFINUIsVUFERixzQkFRZSxJQUFJOztrQkFHVDtvQkFBTyxPQUFPLEtBQ2Q7MEJBQWEsT0FBTyxLQUFLO0FBRnpCLFlBREY7QUFERixXQURGLEdBU0Usb0RBQVUsS0FBSyxRQUFRLFVBQVUsUUFBUSxPQUFPLGFBSXpEO0FBQ0Q7Y0FDRDs7OztvQ0FDYztvQkFBQTs7cUJBQ1EsS0FBSztXQUFsQjtXQUFLLGNBRWI7OzhCQUFRLHVCQUFLLFdBQVUsNkJBQ3JCO2dCQUVFOzZCQUFvQixRQUNwQjs0QkFDQTttQkFBVSxrQkFBQyxHQUFHLEtBQUssS0FBVDtrQkFBaUIsT0FBSyxhQUFhLE9BQU8sR0FBRyxLQUFLO0FBSjlEO0FBQ0UsUUFERixpQkFPbUIsSUFBSTtnQkFDakIsb0RBQVUsS0FBSyxLQUFLLE9BQU8sS0FBSyxhQUFhLEtBQUssVUFBVSxNQUFNO0FBRHBFLFVBUkUsa0JBYU47Z0JBRUU7NkJBQW9CLFFBQ3BCOzRCQUNBO21CQUFVLGtCQUFDLEdBQUcsS0FBSyxLQUFUO2tCQUFpQixPQUFLLGFBQWEsT0FBTyxHQUFHLEtBQUs7QUFKOUQ7QUFDRSxRQURGLGlCQU9tQixJQUFJO2dCQUNqQixvREFBVSxLQUFLLEtBQUssT0FBTyxLQUFLLGFBQWEsS0FBSyxVQUFVLE1BQU07QUFLM0UsUUFOTzs7OzttQ0F5RU07b0JBQ1o7O1dBQU0sT0FBTyxLQUFLLE1BQ2xCOzhCQUFRLGdDQUVDLE1BQU0sY0FBYyxJQUFJLFVBQUMsWUFBWSxHQUFHLEtBQzNDO2dCQUFLLG9CQUFvQixDQUN6Qjs7cUJBQ1UsSUFBSSxZQUFjLFNBQzFCO3dCQUFhLENBQUMsT0FBTyxZQUFRLENBQWhCLElBQW1CLE9BQUssU0FBUyxhQUFXLGdCQUFjLElBQ3ZFO2lCQUFNLENBQUMsQ0FDUDt1QkFDQTtvQkFBUyxPQUFLLE1BQU0sYUFBYSxNQUMvQixPQUFLLG1CQUFtQixZQUFZLE9BRXRDO21CQUFRLE1BQU0sSUFBSSxPQUFPLE9BQ3pCO3FCQUFVLE1BQU0sSUFBSSxTQUFTLElBQUksT0FBTyxPQUUzQztBQVZHLFVBRE07QUFjZixRQWhCSyxDQUZJOzs7OytCQW9CUjtXQUFJLEtBQUssTUFBTSxTQUNiO2dCQUFPLHVDQUFLLFdBQVUsYUFBVSx1Q0FBSyxXQUFVLGFBQVUsNERBQWtCLE1BQzVFO0FBQ0Q7Y0FDRDs7Ozs4QkFFQztXQUFJLEtBQUssTUFBTSxZQUNiO2FBQU07a0JBR0Y7b0JBQVMsUUFDVDt1QkFBWSxLQUdoQjtBQUxJLFVBREYsQ0FEYztnQ0FPUjtrQkFDQyxLQUNQO29CQUNBO2lCQUFNLEtBQUssTUFDWDtrQkFDQTsyQkFBZ0IsS0FBSztBQUpyQixVQURNLEVBT0wsS0FFSjtBQUNEO2NBQ0Q7Ozs7OEJBRUM7V0FBSSxnQkFDSjtXQUFJLG1CQUNKO1dBQUksS0FBSyxNQUFNLE9BQU8sS0FBSyxNQUFNLEtBQy9CO29CQUFXLEtBQ1g7YUFBSSxLQUFLLE1BQU0sZUFDYjt5QkFBYyxLQUNmO0FBQ0Y7QUFDRDtZQUFLLG1CQUVMOzs4QkFBUSx1QkFBSyxXQUFVLDhCQUNyQjs7cUJBR0k7a0JBQ0E7Z0JBQ0E7bUJBRUY7QUFMRTs0QkFLaUIsMERBQVksa0RBQy9CO3VCQUFjLEVBQUUsWUFBWSxTQUFTLFVBQ3JDO3VCQUFjLEVBQUUsWUFBWSxTQUFTLFVBQVU7QUFSL0MsUUFERjtzQkFhSTtrQkFBUyxLQUNUO21CQUFVLEtBQUssTUFBTSxhQUFhLENBQUMsS0FBSyxNQUFNLGNBQWM7QUFGNUQsUUFERjtzQkFPRTtrQkFBUyxLQUNUO21CQUFVLENBQUMsS0FBSyxNQUFNLGNBQWM7QUFGcEMsUUFERixJQU1BLEtBQUssZ0JBQ0wsVUFDQTtlQUVNLEtBQUssTUFDWDt5QkFBZ0IsS0FDaEI7a0JBQVMsS0FBSyxTQUNkOzJCQUFrQjtBQUhsQixRQURGLENBMUJNLEVBZ0NKLEtBQUssV0FDTCxLQUVMOzs7Ozs7O0FBM1ZHLFVBQ0c7U0FDQyxpQkFDTjtTQUFNLGlCQUNOO2lCQUFjLGlCQUNkO2dCQUFhLGlCQUNiO1dBQVEsaUJBQ1I7ZUFBWSxpQkFDWjsyQkFBd0IsaUJBQVU7QUFObEM7bUJBNlZXLFMiLCJmaWxlIjoiMC4yYzM1M2QzNjExZGQwZTU3OWE3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIm1hdGVyaWFsLXVpL01lbnVJdGVtXCI7XG5pbXBvcnQgSWNvbk1lbnUgZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25NZW51XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnRcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgUGFydGljaXBhbnRHcm91cCBmcm9tIFwiLi9wYXJ0aWNpcGFudEdyb3VwXCI7XG5pbXBvcnQgZmluZFNjaGVtYXRhIGZyb20gXCIuLi8uLi9tZXRob2RzL2ZpbmRTY2hlbWFcIjtcbmltcG9ydCB7IGdlbmVyYXRlUERGIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IFBERlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGRmU3RvcmVcIjtcblxuY29uc3QgcmFuZ2VPZlBsYXllcnMgPSBbMywgNCwgNSwgNiwgN107XG5cbmNvbnN0IG9ialRvU3RyaW5nID0gb2JqID0+IChcbiAgT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiICsgb2JqW2JdLCBcIlwiKVxuKTtcblxuY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZGRlZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2FjaGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBudW1QbGF5ZXJzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjaGVtYXRhOiBbW11dLFxuICAgICAgbWF4OiBudWxsLFxuICAgICAgbWluOiBudWxsLFxuICAgICAgc2VsZWN0ZWRHcm91cDogW10sXG4gICAgICBwZGZzOiBudWxsLFxuICAgICAgZ2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgIHN0ZXBJbmRleDogMCxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgZGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucExpc3RlbmVyID0gUERGU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5mZXRjaGVkUERGKTtcbiAgICB0aGlzLmludCA9IHNldEludGVydmFsKHRoaXMudGVtcFNhdmUsIDYwMDAwKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmNhY2hlZCAhPT0gbmV4dFByb3BzLmNhY2hlZCkge1xuICAgICAgY29uc3Qgc2NoZW1hdGEgPSAoZnVuY3Rpb24gcGFyc2VTY2hlbWF0YShzKSB7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgcyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFsrc107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHMubWFwKGFyciA9PiBhcnIubWFwKGVsID0+ICtlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtbXV07XG4gICAgICB9KCkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjaGVtYXRhLFxuICAgICAgICBzZWxlY3RlZEdyb3VwOiBuZXh0UHJvcHMuc2VsZWN0ZWRHcm91cCA/IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwLm1hcChlbCA9PiArZWwpIDogW10sXG4gICAgICAgIHBkZnM6IG5leHRQcm9wcy5wZGZzID09PSBcIlwiID8gbnVsbCA6IG5leHRQcm9wcy5wZGZzLFxuICAgICAgICBtaW46IG5leHRQcm9wcy5taW4gPyArbmV4dFByb3BzLm1pbiA6IG51bGwsXG4gICAgICAgIG1heDogbmV4dFByb3BzLm1heCA/ICtuZXh0UHJvcHMubWF4IDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpYWxvZ09wZW4gIT09IG5leHRTdGF0ZS5kaWFsb2dPcGVuIHx8XG4gICAgICAgICAgdGhpcy5zdGF0ZS5nZW5lcmF0ZWQgIT09IG5leHRTdGF0ZS5nZW5lcmF0ZWQgfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgIT09IG5leHRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuICE9PSBuZXh0U3RhdGUub3Blbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgoIXRoaXMuc3RhdGUucGRmcyAmJiBuZXh0U3RhdGUucGRmcykgfHxcbiAgICAgICAgICAobmV4dFN0YXRlLnBkZnMgJiYgb2JqVG9TdHJpbmcodGhpcy5zdGF0ZS5wZGZzKSAhPT0gb2JqVG9TdHJpbmcobmV4dFN0YXRlLnBkZnMpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAgJiYgbmV4dFN0YXRlLnNlbGVjdGVkR3JvdXAgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAudG9TdHJpbmcoKSAhPT0gbmV4dFN0YXRlLnNlbGVjdGVkR3JvdXAudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNjaGVtYXRhICYmIG5leHRTdGF0ZS5zY2hlbWF0YSAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hdGEudG9TdHJpbmcoKSAhPT0gbmV4dFN0YXRlLnNjaGVtYXRhLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKG1heCAhPT0gbmV4dFN0YXRlLm1heCAmJiAhbWluKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoKG1heCAhPT0gbmV4dFN0YXRlLm1heCkgfHxcbiAgICAgIChtYXggJiYgKG1pbiAhPT0gbmV4dFN0YXRlLm1pbikpIHx8XG4gICAgICAodGhpcy5wcm9wcy5udW1QbGF5ZXJzICE9PSBuZXh0UHJvcHMubnVtUGxheWVycyAmJiBtYXggJiYgbWluKSkge1xuICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBuZXh0U3RhdGUubWF4OyBpID49IChuZXh0U3RhdGUubWluIHx8IG1pbik7IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bVBsYXllcnMgPSBuZXh0UHJvcHMubnVtUGxheWVycztcbiAgICAgICAgY29uc3QgcmFuZ2UyID0gcmFuZ2Uuc2xpY2UoKTtcbiAgICAgICAgY29uc3Qgc2NoZW1hdGEgPSBmaW5kU2NoZW1hdGEobnVtUGxheWVycywgcmFuZ2UyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2NoZW1hdGE6IHNjaGVtYXRhLmxlbmd0aCA/IHNjaGVtYXRhIDogW1tdXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnQpO1xuICB9XG4gIHRlbXBTYXZlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudGVtcG9yYXJpbHlTYXZlU2Vzc2lvbihcbiAgICAgIHRoaXMuc3RhdGUubWluLFxuICAgICAgdGhpcy5zdGF0ZS5tYXgsXG4gICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5zdGF0ZS5wZGZzXG4gICAgKTtcbiAgfVxuICBoYW5kbGVPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfVxuICBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgZmV0Y2hlZFBERiA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IFBERlN0b3JlLmdldEVycm9yKCk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBkZnM6IFBERlN0b3JlLmdldFBERigpLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCBlLCBpZHgsIHZhbHVlKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgaWYgKHZhbHVlKSB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH1cbiAgc2NoZW1hdGEoKSB7XG4gICAgY29uc3Qgc2NoZW1hdGEgPSB0aGlzLnN0YXRlLnNjaGVtYXRhO1xuICAgIGlmIChzY2hlbWF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5qb2luKFwiLFwiKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VTY2hlbWF9XG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJTZWxlY3QgYSBzY2hlbWFcIlxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjaGVtYXRhID9cbiAgICAgICAgICAgICAgc2NoZW1hdGEubWFwKHNjaGVtYSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e3NjaGVtYX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2hlbWEuam9pbihcIixcIil9XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dD17c2NoZW1hLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e1wibm90aFwifSBkaXNhYmxlZD17Qm9vbGVhbih0cnVlKX0gcHJpbWFyeVRleHQ9XCJObyBBdmFpbGFibGUgU2NoZW1hcy4uLlwiIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbnVtT2ZQbGF5ZXJzKCkge1xuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibWluLW1heFwiPlxuICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgIHZhbHVlPXttYXh9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJNYXggUGxheWVyc1wiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSwgaWR4LCB2YWwpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWF4XCIsIGUsIGlkeCwgdmFsKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHJhbmdlT2ZQbGF5ZXJzLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bnVtfSB2YWx1ZT17bnVtfSBwcmltYXJ5VGV4dD17bnVtfSBkaXNhYmxlZD17bnVtIDwgbWlufSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgdmFsdWU9e21pbn1cbiAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIk1pbiBQbGF5ZXJzXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlLCBpZHgsIHZhbCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoXCJtaW5cIiwgZSwgaWR4LCB2YWwpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcmFuZ2VPZlBsYXllcnMubWFwKG51bSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtudW19IHZhbHVlPXtudW19IHByaW1hcnlUZXh0PXtudW19IGRpc2FibGVkPXtudW0gPiBtYXh9IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGNoYW5nZVNjaGVtYSA9IChlLCBfLCBzZWxlY3RlZEdyb3VwKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXApIHtcbiAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCA9IDA7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogc2VsZWN0ZWRHcm91cC5zcGxpdChcIixcIikubWFwKGVsID0+ICtlbCkgfSk7XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlUERGID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmdlbmVyYXRlZCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiV2hvb29wcy4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIllvdSBtYXkgb25seSBnZW5lcmF0ZSBvbmNlIGV2ZXJ5IDMwc2Vjcy5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhdGUuc2NoZW1hdGFbMF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJPb29vcHMuLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJUaGVyZSBhcmUgbm8gcGxheWVycyB5ZXQgOiguXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2VuZXJhdGVQREYoXG4gICAgICB0aGlzLnByb3BzLmFkZGVkUGxheWVycyxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCxcbiAgICAgIHRoaXMucHJvcHMuY2x1YixcbiAgICAgIHRoaXMucHJvcHMuZGF0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZXJhdGVkOiB0cnVlLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmVyYXRlZDogZmFsc2UgfSk7XG4gICAgfSwgMzAwMDApO1xuICB9XG5cbiAgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIldlbGwuLi4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIllvdSBoYXZlIHRvIGhhdmUgc2VsZWN0ZWQgYSBzY2hlbWEgYmVmb3JlIHlvdSBjYW4gc2F2ZS5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucHJvcHMuc2F2ZVNlc3Npb24oXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hdGEsXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCxcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRlZFBsYXllcnNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGRvd25sb2FkID0gKGxpbmspID0+IHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Lm9wZW4oYC9hcGkvcGRmcy9kb3dubG9hZC8ke2xpbmt9YCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG4gIG1vdmVVcCA9IChncm91cCkgPT4ge1xuICAgIGlmIChncm91cCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuc2xpY2UoKTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwIC0gMV0gKz0gMTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwXSAtPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwIH0pO1xuICB9XG4gIG1vdmVEb3duID0gKGdyb3VwKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5zbGljZSgpO1xuICAgIGlmIChncm91cCA9PT0gc2VsZWN0ZWRHcm91cC5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cCArIDFdICs9IDE7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cF0gLT0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cCB9KTtcbiAgfVxuICBncm91cFRhYmxlcygpIHtcbiAgICBjb25zdCBwZGZzID0gdGhpcy5zdGF0ZS5wZGZzO1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLm1hcCgobnVtUGxheWVycywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkICs9ICtudW1QbGF5ZXJzO1xuICAgICAgICAgIHJldHVybiAoPFBhcnRpY2lwYW50R3JvdXBcbiAgICAgICAgICAgIGtleT17YCR7aX0ke251bVBsYXllcnN9YH0gZ3JvdXBJZD17aX1cbiAgICAgICAgICAgIHBkZkRvd25sb2FkPXshcGRmcyA/ICgpID0+IHt9IDogdGhpcy5kb3dubG9hZC5iaW5kKHRoaXMsIHBkZnNbYGdyb3VwJHsoaSArIDEpfWBdKX1cbiAgICAgICAgICAgIHBkZnM9eyEhcGRmc31cbiAgICAgICAgICAgIG51bVBsYXllcnM9e251bVBsYXllcnN9XG4gICAgICAgICAgICBwbGF5ZXJzPXt0aGlzLnByb3BzLmFkZGVkUGxheWVycy5zbGljZShcbiAgICAgICAgICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkIC0gbnVtUGxheWVycywgdGhpcy50b3RhbFBsYXllckFkZGVkXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBtb3ZlVXA9e2kgPT09IDAgPyBudWxsIDogdGhpcy5tb3ZlVXB9XG4gICAgICAgICAgICBtb3ZlRG93bj17aSA9PT0gYXJyLmxlbmd0aCAtIDEgPyBudWxsIDogdGhpcy5tb3ZlRG93bn1cbiAgICAgICAgICAvPik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxuICBsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPjwvZGl2PjwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgZGlhbG9nKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgcHJpbWFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZURpYWxvZ0Nsb3NlfVxuICAgICAgICAvPlxuICAgICAgXTtcbiAgICAgIHJldHVybiAoPERpYWxvZ1xuICAgICAgICB0aXRsZT17dGhpcy50aXRsZX1cbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5kaWFsb2dPcGVufVxuICAgICAgICBtb2RhbD17ZmFsc2V9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZURpYWxvZ0Nsb3NlfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5jb250ZW50fVxuICAgICAgPC9EaWFsb2c+KTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzY2hlbWF0YTtcbiAgICBsZXQgZ3JvdXBUYWJsZXM7XG4gICAgaWYgKHRoaXMuc3RhdGUubWF4ICYmIHRoaXMuc3RhdGUubWluKSB7XG4gICAgICBzY2hlbWF0YSA9IHRoaXMuc2NoZW1hdGEoKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXApIHtcbiAgICAgICAgZ3JvdXBUYWJsZXMgPSB0aGlzLmdyb3VwVGFibGVzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCA9IDA7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBpbmdcIj5cbiAgICAgIDxJY29uTWVudVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgdG9wOiBcIi0yMHB4XCIsXG4gICAgICAgICAgekluZGV4OiBcIjUwXCJcbiAgICAgICAgfX1cbiAgICAgICAgaWNvbkJ1dHRvbkVsZW1lbnQ9ezxJY29uQnV0dG9uPjxNb3JlVmVydEljb24gLz48L0ljb25CdXR0b24+fVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogXCJyaWdodFwiLCB2ZXJ0aWNhbDogXCJ0b3BcIiB9fVxuICAgICAgICB0YXJnZXRPcmlnaW49e3sgaG9yaXpvbnRhbDogXCJyaWdodFwiLCB2ZXJ0aWNhbDogXCJ0b3BcIiB9fVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBwcmltYXJ5VGV4dD1cIkdlbmVyYXRlIFBERlwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBERn1cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5nZW5lcmF0ZWQgfHwgIXRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5sZW5ndGh9XG4gICAgICAgIC8+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIHByaW1hcnlUZXh0PVwiU2F2ZVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aH1cbiAgICAgICAgLz5cbiAgICAgIDwvSWNvbk1lbnU+XG4gICAgICB7IHRoaXMubnVtT2ZQbGF5ZXJzKCkgfVxuICAgICAgeyBzY2hlbWF0YSB9XG4gICAgICB7IGdyb3VwVGFibGVzIH1cbiAgICAgIDxTbmFja0JhclxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICBtZXNzYWdlPXt0aGlzLmVycm9yIHx8IFwiXCJ9XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezgwMDB9XG4gICAgICAvPlxuICAgICAgeyB0aGlzLmxvYWRpbmcoKSB9XG4gICAgICB7IHRoaXMuZGlhbG9nKCkgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHcm91cGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZ3JvdXBpbmcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9