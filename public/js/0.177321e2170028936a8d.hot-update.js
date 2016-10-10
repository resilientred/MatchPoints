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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7O0FBRXBDLEtBQU0sY0FBYztpQkFDWCxLQUFLLEtBQUssT0FBTyxVQUFDLEdBQUcsR0FBSjtZQUFVLElBQUksSUFBSSxJQUFJO0FBQTlDLE1BQWtEO0FBRHBEOztLQUlNO3VCQVVKOztxQkFBWSxPQUFPOzJCQUFBOzs2RkFDWDs7V0F1RlIsV0FBVyxZQUNUO2FBQUssTUFBTSx1QkFDVCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUFoR2tCOztXQW9HbkIsY0FBYyxZQUNaO2FBQUssU0FBUyxFQUFFLE1BQ2pCO0FBdEdrQjs7V0F1R25CLG9CQUFvQixZQUNsQjthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQXpHa0I7O1dBMEduQixhQUFhLFlBQ1g7V0FBTSxRQUFRLG1CQUNkO1dBQUksT0FDRjtlQUFLLFFBQ0w7ZUFBSyxTQUFTLEVBQUUsU0FDaEI7ZUFDRDtBQUpELGNBS0U7ZUFBSyxTQUFTLEVBQUUsTUFBTSxtQkFBUyxVQUFVLFNBQzFDO0FBQ0Y7QUFuSGtCOztXQW9IbkIsZUFBZSxVQUFDLE9BQU8sR0FBRyxLQUFLLE9BQzdCO1dBQUksT0FBTyxNQUFLLDZCQUFZLE9BQzdCO0FBdEhrQjs7V0FnTG5CLGVBQWUsVUFBQyxHQUFHLEdBQUcsZUFDcEI7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Z0JBQ0o7V0FBSSxtQkFDSjtXQUFJLEtBQUssTUFBTSxPQUFPLEtBQUssTUFBTSxLQUMvQjtvQkFBVyxLQUNYO2FBQUksS0FBSyxNQUFNLGVBQ2I7eUJBQWMsS0FDZjtBQUNGO0FBQ0Q7WUFBSyxtQkFFTDs7OEJBQVEsdUJBQUssV0FBVSw4QkFDckI7O3FCQUdJO2tCQUNBO2dCQUNBO21CQUVGO0FBTEU7NEJBS2lCLDBEQUFZLGtEQUMvQjt1QkFBYyxFQUFFLFlBQVksU0FBUyxVQUNyQzt1QkFBYyxFQUFFLFlBQVksU0FBUyxVQUFVO0FBUi9DLFFBREY7c0JBYUk7a0JBQVMsS0FDVDttQkFBVSxLQUFLLE1BQU0sYUFBYSxDQUFDLEtBQUssTUFBTSxjQUFjO0FBRjVELFFBREY7c0JBT0U7a0JBQVMsS0FDVDttQkFBVSxDQUFDLEtBQUssTUFBTSxjQUFjO0FBRnBDLFFBREYsSUFNQSxLQUFLLGdCQUNMLFVBQ0E7ZUFFTSxLQUFLLE1BQ1g7eUJBQWdCLEtBQ2hCO2tCQUFTLEtBQUssU0FDZDsyQkFBa0I7QUFIbEIsUUFERixDQTFCTSxFQWdDSixLQUFLLFdBQ0wsS0FFTDs7Ozs7OztBQTFWRyxVQUNHO1NBQ0MsaUJBQ047U0FBTSxpQkFDTjtpQkFBYyxpQkFDZDtnQkFBYSxpQkFDYjtXQUFRLGlCQUNSO2VBQVksaUJBQ1o7MkJBQXdCLGlCQUFVO0FBTmxDO21CQTRWVyxTIiwiZmlsZSI6IjAuMTc3MzIxZTIxNzAwMjg5MzZhOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9TZWxlY3RGaWVsZFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJtYXRlcmlhbC11aS9NZW51SXRlbVwiO1xuaW1wb3J0IEljb25NZW51IGZyb20gXCJtYXRlcmlhbC11aS9JY29uTWVudVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvblwiO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwibWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbW9yZS12ZXJ0XCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFBhcnRpY2lwYW50R3JvdXAgZnJvbSBcIi4vcGFydGljaXBhbnRHcm91cFwiO1xuaW1wb3J0IGZpbmRTY2hlbWF0YSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9maW5kU2NoZW1hXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVBERiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5cbmNvbnN0IHJhbmdlT2ZQbGF5ZXJzID0gWzMsIDQsIDUsIDYsIDddO1xuXG5jb25zdCBvYmpUb1N0cmluZyA9IG9iaiA9PiAoXG4gIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhLCBiKSA9PiBhICsgYiArIG9ialtiXSwgXCJcIilcbik7XG5cbmNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2F2ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhY2hlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbnVtUGxheWVyczogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY2hlbWF0YTogW1tdXSxcbiAgICAgIG1heDogbnVsbCxcbiAgICAgIG1pbjogbnVsbCxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IFtdLFxuICAgICAgcGRmczogbnVsbCxcbiAgICAgIGdlbmVyYXRlZDogZmFsc2UsXG4gICAgICBzdGVwSW5kZXg6IDAsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGRpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnBMaXN0ZW5lciA9IFBERlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuZmV0Y2hlZFBERik7XG4gICAgdGhpcy5pbnQgPSBzZXRJbnRlcnZhbCh0aGlzLnRlbXBTYXZlLCA2MDAwMCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jYWNoZWQgIT09IG5leHRQcm9wcy5jYWNoZWQpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXRhID0gKGZ1bmN0aW9uIHBhcnNlU2NoZW1hdGEocykge1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbK3NdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzLm1hcChhcnIgPT4gYXJyLm1hcChlbCA9PiArZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbW11dO1xuICAgICAgfSgpKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzY2hlbWF0YSxcbiAgICAgICAgc2VsZWN0ZWRHcm91cDogbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAgPyBuZXh0UHJvcHMuc2VsZWN0ZWRHcm91cC5tYXAoZWwgPT4gK2VsKSA6IFtdLFxuICAgICAgICBwZGZzOiBuZXh0UHJvcHMucGRmcyA9PT0gXCJcIiA/IG51bGwgOiBuZXh0UHJvcHMucGRmcyxcbiAgICAgICAgbWluOiBuZXh0UHJvcHMubWluID8gK25leHRQcm9wcy5taW4gOiBudWxsLFxuICAgICAgICBtYXg6IG5leHRQcm9wcy5tYXggPyArbmV4dFByb3BzLm1heCA6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaWFsb2dPcGVuICE9PSBuZXh0U3RhdGUuZGlhbG9nT3BlbiB8fFxuICAgICAgICAgIHRoaXMuc3RhdGUuZ2VuZXJhdGVkICE9PSBuZXh0U3RhdGUuZ2VuZXJhdGVkIHx8XG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nICE9PSBuZXh0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIHRoaXMuc3RhdGUub3BlbiAhPT0gbmV4dFN0YXRlLm9wZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKCF0aGlzLnN0YXRlLnBkZnMgJiYgbmV4dFN0YXRlLnBkZnMpIHx8XG4gICAgICAgICAgKG5leHRTdGF0ZS5wZGZzICYmIG9ialRvU3RyaW5nKHRoaXMuc3RhdGUucGRmcykgIT09IG9ialRvU3RyaW5nKG5leHRTdGF0ZS5wZGZzKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwICYmIG5leHRTdGF0ZS5zZWxlY3RlZEdyb3VwICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnRvU3RyaW5nKCkgIT09IG5leHRTdGF0ZS5zZWxlY3RlZEdyb3VwLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zY2hlbWF0YSAmJiBuZXh0U3RhdGUuc2NoZW1hdGEgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLnRvU3RyaW5nKCkgIT09IG5leHRTdGF0ZS5zY2hlbWF0YS50b1N0cmluZygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChtYXggIT09IG5leHRTdGF0ZS5tYXggJiYgIW1pbikgcmV0dXJuIHRydWU7XG4gICAgaWYgKChtYXggIT09IG5leHRTdGF0ZS5tYXgpIHx8XG4gICAgICAobWF4ICYmIChtaW4gIT09IG5leHRTdGF0ZS5taW4pKSB8fFxuICAgICAgKHRoaXMucHJvcHMubnVtUGxheWVycyAhPT0gbmV4dFByb3BzLm51bVBsYXllcnMgJiYgbWF4ICYmIG1pbikpIHtcbiAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICBmb3IgKGxldCBpID0gbmV4dFN0YXRlLm1heDsgaSA+PSAobmV4dFN0YXRlLm1pbiB8fCBtaW4pOyBpLS0pIHtcbiAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1QbGF5ZXJzID0gbmV4dFByb3BzLm51bVBsYXllcnM7XG4gICAgICAgIGNvbnN0IHJhbmdlMiA9IHJhbmdlLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IHNjaGVtYXRhID0gZmluZFNjaGVtYXRhKG51bVBsYXllcnMsIHJhbmdlMik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjaGVtYXRhOiBzY2hlbWF0YS5sZW5ndGggPyBzY2hlbWF0YSA6IFtbXV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50KTtcbiAgfVxuICB0ZW1wU2F2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb24oXG4gICAgICB0aGlzLnN0YXRlLm1pbixcbiAgICAgIHRoaXMuc3RhdGUubWF4LFxuICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCxcbiAgICAgIHRoaXMuc3RhdGUucGRmc1xuICAgICk7XG4gIH1cbiAgaGFuZGxlT3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IGZhbHNlIH0pO1xuICB9XG4gIGZldGNoZWRQREYgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBQREZTdG9yZS5nZXRFcnJvcigpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZGZzOiBQREZTdG9yZS5nZXRQREYoKSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCwgZSwgaWR4LCB2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9XG4gIHNjaGVtYXRhKCkge1xuICAgIGNvbnN0IHNjaGVtYXRhID0gdGhpcy5zdGF0ZS5zY2hlbWF0YTtcbiAgICBpZiAoc2NoZW1hdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuam9pbihcIixcIil9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlU2NoZW1hfVxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VsZWN0IGEgc2NoZW1hXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY2hlbWF0YSA/XG4gICAgICAgICAgICAgIHNjaGVtYXRhLm1hcChzY2hlbWEgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtzY2hlbWF9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1hLmpvaW4oXCIsXCIpfVxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9e3NjaGVtYS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtcIm5vdGhcIn0gZGlzYWJsZWQ9e0Jvb2xlYW4odHJ1ZSl9IHByaW1hcnlUZXh0PVwiTm8gQXZhaWxhYmxlIFNjaGVtYXMuLi5cIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG51bU9mUGxheWVycygpIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1pbi1tYXhcIj5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWF4fVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWF4IFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KGUsIGlkeCwgdmFsKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShcIm1heFwiLCBlLCBpZHgsIHZhbCl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA8IG1pbn0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgIHZhbHVlPXttaW59XG4gICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJNaW4gUGxheWVyc1wiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSwgaWR4LCB2YWwpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWluXCIsIGUsIGlkeCwgdmFsKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHJhbmdlT2ZQbGF5ZXJzLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bnVtfSB2YWx1ZT17bnVtfSBwcmltYXJ5VGV4dD17bnVtfSBkaXNhYmxlZD17bnVtID4gbWF4fSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgPC9kaXY+KTtcbiAgfVxuICBjaGFuZ2VTY2hlbWEgPSAoZSwgXywgc2VsZWN0ZWRHcm91cCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwKSB7XG4gICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHNlbGVjdGVkR3JvdXAuc3BsaXQoXCIsXCIpLm1hcChlbCA9PiArZWwpIH0pO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZVBERiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5nZW5lcmF0ZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIldob29vcHMuLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgbWF5IG9ubHkgZ2VuZXJhdGUgb25jZSBldmVyeSAzMHNlY3MuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNjaGVtYXRhWzBdLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiT29vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiVGhlcmUgYXJlIG5vIHBsYXllcnMgeWV0IDooLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdlbmVyYXRlUERGKFxuICAgICAgdGhpcy5wcm9wcy5hZGRlZFBsYXllcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnByb3BzLmNsdWIsXG4gICAgICB0aGlzLnByb3BzLmRhdGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmVyYXRlZDogdHJ1ZSwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IGZhbHNlIH0pO1xuICAgIH0sIDMwMDAwKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXZWxsLi4uLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgaGF2ZSB0byBoYXZlIHNlbGVjdGVkIGEgc2NoZW1hIGJlZm9yZSB5b3UgY2FuIHNhdmUuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICB0aGlzLnByb3BzLnNhdmVTZXNzaW9uKFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLFxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBkb3dubG9hZCA9IChsaW5rKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5vcGVuKGAvYXBpL3BkZnMvZG93bmxvYWQvJHtsaW5rfWApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICBtb3ZlVXAgPSAoZ3JvdXApID0+IHtcbiAgICBpZiAoZ3JvdXAgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cCAtIDFdICs9IDE7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cF0gLT0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cCB9KTtcbiAgfVxuICBtb3ZlRG93biA9IChncm91cCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuc2xpY2UoKTtcbiAgICBpZiAoZ3JvdXAgPT09IHNlbGVjdGVkR3JvdXAubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgKyAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgZ3JvdXBUYWJsZXMoKSB7XG4gICAgY29uc3QgcGRmcyA9IHRoaXMuc3RhdGUucGRmcztcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5tYXAoKG51bVBsYXllcnMsIGksIGFycikgPT4ge1xuICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCArPSArbnVtUGxheWVycztcbiAgICAgICAgICByZXR1cm4gKDxQYXJ0aWNpcGFudEdyb3VwXG4gICAgICAgICAgICBrZXk9e2Ake2l9JHtudW1QbGF5ZXJzfWB9IGdyb3VwSWQ9e2l9XG4gICAgICAgICAgICBwZGZEb3dubG9hZD17IXBkZnMgPyAoKSA9PiB7fSA6IHRoaXMuZG93bmxvYWQuYmluZCh0aGlzLCBwZGZzW2Bncm91cCR7KGkgKyAxKX1gXSl9XG4gICAgICAgICAgICBwZGZzPXshIXBkZnN9XG4gICAgICAgICAgICBudW1QbGF5ZXJzPXtudW1QbGF5ZXJzfVxuICAgICAgICAgICAgcGxheWVycz17dGhpcy5wcm9wcy5hZGRlZFBsYXllcnMuc2xpY2UoXG4gICAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCAtIG51bVBsYXllcnMsIHRoaXMudG90YWxQbGF5ZXJBZGRlZFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgbW92ZVVwPXtpID09PSAwID8gbnVsbCA6IHRoaXMubW92ZVVwfVxuICAgICAgICAgICAgbW92ZURvd249e2kgPT09IGFyci5sZW5ndGggLSAxID8gbnVsbCA6IHRoaXMubW92ZURvd259XG4gICAgICAgICAgLz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbiAgbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz48L2Rpdj48L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGRpYWxvZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaWFsb2dPcGVuKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIF07XG4gICAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e3RoaXMudGl0bGV9XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuZGlhbG9nT3Blbn1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgID5cbiAgICAgICAge3RoaXMuY29udGVudH1cbiAgICAgIDwvRGlhbG9nPik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2NoZW1hdGE7XG4gICAgbGV0IGdyb3VwVGFibGVzO1xuICAgIGlmICh0aGlzLnN0YXRlLm1heCAmJiB0aGlzLnN0YXRlLm1pbikge1xuICAgICAgc2NoZW1hdGEgPSB0aGlzLnNjaGVtYXRhKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwKSB7XG4gICAgICAgIGdyb3VwVGFibGVzID0gdGhpcy5ncm91cFRhYmxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyb3VwaW5nXCI+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogXCItMjBweFwiLFxuICAgICAgICAgIHpJbmRleDogXCI1MFwiXG4gICAgICAgIH19XG4gICAgICAgIGljb25CdXR0b25FbGVtZW50PXs8SWNvbkJ1dHRvbj48TW9yZVZlcnRJY29uIC8+PC9JY29uQnV0dG9uPn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgICAgdGFyZ2V0T3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJHZW5lcmF0ZSBQREZcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQREZ9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZ2VuZXJhdGVkIHx8ICF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBwcmltYXJ5VGV4dD1cIlNhdmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5sZW5ndGh9XG4gICAgICAgIC8+XG4gICAgICA8L0ljb25NZW51PlxuICAgICAgeyB0aGlzLm51bU9mUGxheWVycygpIH1cbiAgICAgIHsgc2NoZW1hdGEgfVxuICAgICAgeyBncm91cFRhYmxlcyB9XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgbWVzc2FnZT17dGhpcy5lcnJvciB8fCBcIlwifVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs4MDAwfVxuICAgICAgLz5cbiAgICAgIHsgdGhpcy5sb2FkaW5nKCkgfVxuICAgICAgeyB0aGlzLmRpYWxvZygpIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2dyb3VwaW5nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==