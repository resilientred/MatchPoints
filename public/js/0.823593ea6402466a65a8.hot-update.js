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
	
	var _FlatButton = __webpack_require__(515);
	
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
	        onChange: function onChange() {
	          return _this3.handleChange("max");
	        }
	      }, rangeOfPlayers.map(function (num) {
	        return _react2.default.createElement(_MenuItem2.default, { key: num, value: num, primaryText: num, disabled: num < min });
	      })), _react2.default.createElement(_SelectField2.default, {
	        value: min,
	        floatingLabelFixed: Boolean(true),
	        floatingLabelText: "Min Players",
	        onChange: function onChange() {
	          return _this3.handleChange("min");
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
	  club: _react.PropTypes.string,
	  date: _react.PropTypes.string,
	  addedPlayers: _react.PropTypes.Array,
	  saveSession: _react.PropTypes.func,
	  cached: _react.PropTypes.bool,
	  numPlayers: _react.PropTypes.number,
	  temporarilySaveSession: _react.PropTypes.func
	};
	exports.default = Grouping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7O0FBRXBDLEtBQU0sY0FBYztpQkFDWCxLQUFLLEtBQUssT0FBTyxVQUFDLEdBQUcsR0FBSjtZQUFVLElBQUksSUFBSSxJQUFJO0FBQTlDLE1BQWtEO0FBRHBEOztLQUlNO3VCQVVKOztxQkFBWSxPQUFPOzJCQUFBOzs2RkFDWDs7V0F1RlIsV0FBVyxZQUNUO2FBQUssTUFBTSx1QkFDVCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sS0FDWCxNQUFLLE1BQU0sVUFDWCxNQUFLLE1BQU0sZUFDWCxNQUFLLE1BRVI7QUFoR2tCOztXQW9HbkIsY0FBYyxZQUNaO2FBQUssU0FBUyxFQUFFLE1BQ2pCO0FBdEdrQjs7V0F1R25CLG9CQUFvQixZQUNsQjthQUFLLFNBQVMsRUFBRSxZQUNqQjtBQXpHa0I7O1dBMEduQixhQUFhLFlBQ1g7V0FBTSxRQUFRLG1CQUNkO1dBQUksT0FDRjtlQUFLLFFBQ0w7ZUFBSyxTQUFTLEVBQUUsU0FDaEI7ZUFDRDtBQUpELGNBS0U7ZUFBSyxTQUFTLEVBQUUsTUFBTSxtQkFBUyxVQUFVLFNBQzFDO0FBQ0Y7QUFuSGtCOztXQW9IbkIsZUFBZSxVQUFDLE9BQU8sR0FBRyxLQUFLLE9BQzdCO1dBQUksT0FBTyxNQUFLLDZCQUFZLE9BQzdCO0FBdEhrQjs7V0FnTG5CLGVBQWUsVUFBQyxHQUFHLEdBQUcsZUFDcEI7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TUFBTSxlQUNiO3lCQUFjLEtBQ2Y7QUFDRjtBQUNEO1lBQUssbUJBRUw7OzhCQUFRLHVCQUFLLFdBQVUsOEJBQ3JCOztxQkFHSTtrQkFDQTtnQkFDQTttQkFFRjtBQUxFOzRCQUtpQiwwREFBWSxrREFDL0I7dUJBQWMsRUFBRSxZQUFZLFNBQVMsVUFDckM7dUJBQWMsRUFBRSxZQUFZLFNBQVMsVUFBVTtBQVIvQyxRQURGO3NCQWFJO2tCQUFTLEtBQ1Q7bUJBQVUsS0FBSyxNQUFNLGFBQWEsQ0FBQyxLQUFLLE1BQU0sY0FBYztBQUY1RCxRQURGO3NCQU9FO2tCQUFTLEtBQ1Q7bUJBQVUsQ0FBQyxLQUFLLE1BQU0sY0FBYztBQUZwQyxRQURGLElBTUEsS0FBSyxnQkFDTCxVQUNBO2VBRU0sS0FBSyxNQUNYO3lCQUFnQixLQUNoQjtrQkFBUyxLQUFLLFNBQ2Q7MkJBQWtCO0FBSGxCLFFBREYsQ0ExQk0sRUFnQ0osS0FBSyxXQUNMLEtBRUw7Ozs7Ozs7QUExVkcsVUFDRztTQUNDLGlCQUNOO1NBQU0saUJBQ047aUJBQWMsaUJBQ2Q7Z0JBQWEsaUJBQ2I7V0FBUSxpQkFDUjtlQUFZLGlCQUNaOzJCQUF3QixpQkFBVTtBQU5sQzttQkE0VlcsUyIsImZpbGUiOiIwLjgyMzU5M2VhNjQwMjQ2NmE2NWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcbmltcG9ydCBJY29uTWVudSBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbk1lbnVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uL0ljb25CdXR0b25cIjtcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIm1hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21vcmUtdmVydFwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIm1hdGVyaWFsLXVpL0RpYWxvZ1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBQYXJ0aWNpcGFudEdyb3VwIGZyb20gXCIuL3BhcnRpY2lwYW50R3JvdXBcIjtcbmltcG9ydCBmaW5kU2NoZW1hdGEgZnJvbSBcIi4uLy4uL21ldGhvZHMvZmluZFNjaGVtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQREYgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuXG5jb25zdCByYW5nZU9mUGxheWVycyA9IFszLCA0LCA1LCA2LCA3XTtcblxuY29uc3Qgb2JqVG9TdHJpbmcgPSBvYmogPT4gKFxuICBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYSwgYikgPT4gYSArIGIgKyBvYmpbYl0sIFwiXCIpXG4pO1xuXG5jbGFzcyBHcm91cGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFkZGVkUGxheWVyczogUHJvcFR5cGVzLkFycmF5LFxuICAgIHNhdmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYWNoZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG51bVBsYXllcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NoZW1hdGE6IFtbXV0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IG51bGwsXG4gICAgICBzZWxlY3RlZEdyb3VwOiBbXSxcbiAgICAgIHBkZnM6IG51bGwsXG4gICAgICBnZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgc3RlcEluZGV4OiAwLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIgPSBQREZTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRQREYpO1xuICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwodGhpcy50ZW1wU2F2ZSwgNjAwMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGVkICE9PSBuZXh0UHJvcHMuY2FjaGVkKSB7XG4gICAgICBjb25zdCBzY2hlbWF0YSA9IChmdW5jdGlvbiBwYXJzZVNjaGVtYXRhKHMpIHtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWytzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcy5tYXAoYXJyID0+IGFyci5tYXAoZWwgPT4gK2VsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgIH0oKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2NoZW1hdGEsXG4gICAgICAgIHNlbGVjdGVkR3JvdXA6IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwID8gbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAubWFwKGVsID0+ICtlbCkgOiBbXSxcbiAgICAgICAgcGRmczogbmV4dFByb3BzLnBkZnMgPT09IFwiXCIgPyBudWxsIDogbmV4dFByb3BzLnBkZnMsXG4gICAgICAgIG1pbjogbmV4dFByb3BzLm1pbiA/ICtuZXh0UHJvcHMubWluIDogbnVsbCxcbiAgICAgICAgbWF4OiBuZXh0UHJvcHMubWF4ID8gK25leHRQcm9wcy5tYXggOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3BlbiAhPT0gbmV4dFN0YXRlLmRpYWxvZ09wZW4gfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLmdlbmVyYXRlZCAhPT0gbmV4dFN0YXRlLmdlbmVyYXRlZCB8fFxuICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyAhPT0gbmV4dFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gIT09IG5leHRTdGF0ZS5vcGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCghdGhpcy5zdGF0ZS5wZGZzICYmIG5leHRTdGF0ZS5wZGZzKSB8fFxuICAgICAgICAgIChuZXh0U3RhdGUucGRmcyAmJiBvYmpUb1N0cmluZyh0aGlzLnN0YXRlLnBkZnMpICE9PSBvYmpUb1N0cmluZyhuZXh0U3RhdGUucGRmcykpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCAmJiBuZXh0U3RhdGUuc2VsZWN0ZWRHcm91cCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC50b1N0cmluZygpICE9PSBuZXh0U3RhdGUuc2VsZWN0ZWRHcm91cC50b1N0cmluZygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NoZW1hdGEgJiYgbmV4dFN0YXRlLnNjaGVtYXRhICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YS50b1N0cmluZygpICE9PSBuZXh0U3RhdGUuc2NoZW1hdGEudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobWF4ICE9PSBuZXh0U3RhdGUubWF4ICYmICFtaW4pIHJldHVybiB0cnVlO1xuICAgIGlmICgobWF4ICE9PSBuZXh0U3RhdGUubWF4KSB8fFxuICAgICAgKG1heCAmJiAobWluICE9PSBuZXh0U3RhdGUubWluKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLm51bVBsYXllcnMgIT09IG5leHRQcm9wcy5udW1QbGF5ZXJzICYmIG1heCAmJiBtaW4pKSB7XG4gICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IG5leHRTdGF0ZS5tYXg7IGkgPj0gKG5leHRTdGF0ZS5taW4gfHwgbWluKTsgaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtUGxheWVycyA9IG5leHRQcm9wcy5udW1QbGF5ZXJzO1xuICAgICAgICBjb25zdCByYW5nZTIgPSByYW5nZS5zbGljZSgpO1xuICAgICAgICBjb25zdCBzY2hlbWF0YSA9IGZpbmRTY2hlbWF0YShudW1QbGF5ZXJzLCByYW5nZTIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY2hlbWF0YTogc2NoZW1hdGEubGVuZ3RoID8gc2NoZW1hdGEgOiBbW11dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludCk7XG4gIH1cbiAgdGVtcFNhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9uKFxuICAgICAgdGhpcy5zdGF0ZS5taW4sXG4gICAgICB0aGlzLnN0YXRlLm1heCxcbiAgICAgIHRoaXMuc3RhdGUuc2NoZW1hdGEsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnN0YXRlLnBkZnNcbiAgICApO1xuICB9XG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiBmYWxzZSB9KTtcbiAgfVxuICBmZXRjaGVkUERGID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUERGU3RvcmUuZ2V0RXJyb3IoKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGRmczogUERGU3RvcmUuZ2V0UERGKCksIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQsIGUsIGlkeCwgdmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfVxuICBzY2hlbWF0YSgpIHtcbiAgICBjb25zdCBzY2hlbWF0YSA9IHRoaXMuc3RhdGUuc2NoZW1hdGE7XG4gICAgaWYgKHNjaGVtYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmpvaW4oXCIsXCIpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVNjaGVtYX1cbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbGVjdCBhIHNjaGVtYVwiXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2NoZW1hdGEgP1xuICAgICAgICAgICAgICBzY2hlbWF0YS5tYXAoc2NoZW1hID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjaGVtYS5qb2luKFwiLFwiKX1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXtzY2hlbWEuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17XCJub3RoXCJ9IGRpc2FibGVkPXtCb29sZWFuKHRydWUpfSBwcmltYXJ5VGV4dD1cIk5vIEF2YWlsYWJsZSBTY2hlbWFzLi4uXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBudW1PZlBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJtaW4tbWF4XCI+XG4gICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgdmFsdWU9e21heH1cbiAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIk1heCBQbGF5ZXJzXCJcbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWF4XCIpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcmFuZ2VPZlBsYXllcnMubWFwKG51bSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtudW19IHZhbHVlPXtudW19IHByaW1hcnlUZXh0PXtudW19IGRpc2FibGVkPXtudW0gPCBtaW59IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWlufVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWluIFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoXCJtaW5cIil9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA+IG1heH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgIDwvZGl2Pik7XG4gIH1cbiAgY2hhbmdlU2NoZW1hID0gKGUsIF8sIHNlbGVjdGVkR3JvdXApID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCkge1xuICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiBzZWxlY3RlZEdyb3VwLnNwbGl0KFwiLFwiKS5tYXAoZWwgPT4gK2VsKSB9KTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVQREYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2VuZXJhdGVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXaG9vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IG1heSBvbmx5IGdlbmVyYXRlIG9uY2UgZXZlcnkgMzBzZWNzLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5zY2hlbWF0YVswXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIk9vb29wcy4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIlRoZXJlIGFyZSBubyBwbGF5ZXJzIHlldCA6KC5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBERihcbiAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5wcm9wcy5jbHViLFxuICAgICAgdGhpcy5wcm9wcy5kYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IHRydWUsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZXJhdGVkOiBmYWxzZSB9KTtcbiAgICB9LCAzMDAwMCk7XG4gIH1cblxuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiV2VsbC4uLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IGhhdmUgdG8gaGF2ZSBzZWxlY3RlZCBhIHNjaGVtYSBiZWZvcmUgeW91IGNhbiBzYXZlLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlU2Vzc2lvbihcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgICB0aGlzLnByb3BzLmFkZGVkUGxheWVyc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZG93bmxvYWQgPSAobGluaykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cub3BlbihgL2FwaS9wZGZzL2Rvd25sb2FkLyR7bGlua31gKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbiAgbW92ZVVwID0gKGdyb3VwKSA9PiB7XG4gICAgaWYgKGdyb3VwID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5zbGljZSgpO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgLSAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgbW92ZURvd24gPSAoZ3JvdXApID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgaWYgKGdyb3VwID09PSBzZWxlY3RlZEdyb3VwLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwICsgMV0gKz0gMTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwXSAtPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwIH0pO1xuICB9XG4gIGdyb3VwVGFibGVzKCkge1xuICAgIGNvbnN0IHBkZnMgPSB0aGlzLnN0YXRlLnBkZnM7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubWFwKChudW1QbGF5ZXJzLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgKz0gK251bVBsYXllcnM7XG4gICAgICAgICAgcmV0dXJuICg8UGFydGljaXBhbnRHcm91cFxuICAgICAgICAgICAga2V5PXtgJHtpfSR7bnVtUGxheWVyc31gfSBncm91cElkPXtpfVxuICAgICAgICAgICAgcGRmRG93bmxvYWQ9eyFwZGZzID8gKCkgPT4ge30gOiB0aGlzLmRvd25sb2FkLmJpbmQodGhpcywgcGRmc1tgZ3JvdXAkeyhpICsgMSl9YF0pfVxuICAgICAgICAgICAgcGRmcz17ISFwZGZzfVxuICAgICAgICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgICAgICAgIHBsYXllcnM9e3RoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgLSBudW1QbGF5ZXJzLCB0aGlzLnRvdGFsUGxheWVyQWRkZWRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG1vdmVVcD17aSA9PT0gMCA/IG51bGwgOiB0aGlzLm1vdmVVcH1cbiAgICAgICAgICAgIG1vdmVEb3duPXtpID09PSBhcnIubGVuZ3RoIC0gMSA/IG51bGwgOiB0aGlzLm1vdmVEb3dufVxuICAgICAgICAgIC8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+PC9kaXY+PC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBkaWFsb2coKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3Blbikge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICBdO1xuICAgICAgcmV0dXJuICg8RGlhbG9nXG4gICAgICAgIHRpdGxlPXt0aGlzLnRpdGxlfVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmRpYWxvZ09wZW59XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmNvbnRlbnR9XG4gICAgICA8L0RpYWxvZz4pO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNjaGVtYXRhO1xuICAgIGxldCBncm91cFRhYmxlcztcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXggJiYgdGhpcy5zdGF0ZS5taW4pIHtcbiAgICAgIHNjaGVtYXRhID0gdGhpcy5zY2hlbWF0YSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCkge1xuICAgICAgICBncm91cFRhYmxlcyA9IHRoaXMuZ3JvdXBUYWJsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJncm91cGluZ1wiPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB0b3A6IFwiLTIwcHhcIixcbiAgICAgICAgICB6SW5kZXg6IFwiNTBcIlxuICAgICAgICB9fVxuICAgICAgICBpY29uQnV0dG9uRWxlbWVudD17PEljb25CdXR0b24+PE1vcmVWZXJ0SWNvbiAvPjwvSWNvbkJ1dHRvbj59XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICAgIHRhcmdldE9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIHByaW1hcnlUZXh0PVwiR2VuZXJhdGUgUERGXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUERGfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmdlbmVyYXRlZCB8fCAhdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJTYXZlXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgPC9JY29uTWVudT5cbiAgICAgIHsgdGhpcy5udW1PZlBsYXllcnMoKSB9XG4gICAgICB7IHNjaGVtYXRhIH1cbiAgICAgIHsgZ3JvdXBUYWJsZXMgfVxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIG1lc3NhZ2U9e3RoaXMuZXJyb3IgfHwgXCJcIn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgIC8+XG4gICAgICB7IHRoaXMubG9hZGluZygpIH1cbiAgICAgIHsgdGhpcy5kaWFsb2coKSB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=