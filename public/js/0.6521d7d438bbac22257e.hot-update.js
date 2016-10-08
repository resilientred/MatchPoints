webpackHotUpdate(0,{

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
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
	
	var _reactRouter = __webpack_require__(168);
	
	var _Tabs = __webpack_require__(510);
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _DatePicker = __webpack_require__(518);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Snackbar = __webpack_require__(537);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _moment = __webpack_require__(541);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _clientActions = __webpack_require__(643);
	
	var _rrSessionActions = __webpack_require__(644);
	
	var _rrSessionStore = __webpack_require__(645);
	
	var _rrSessionStore2 = _interopRequireDefault(_rrSessionStore);
	
	var _tempSessionStore = __webpack_require__(646);
	
	var _tempSessionStore2 = _interopRequireDefault(_tempSessionStore);
	
	var _pdfStore = __webpack_require__(647);
	
	var _pdfStore2 = _interopRequireDefault(_pdfStore);
	
	var _playerForm = __webpack_require__(648);
	
	var _playerForm2 = _interopRequireDefault(_playerForm);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
	var _participants = __webpack_require__(651);
	
	var _participants2 = _interopRequireDefault(_participants);
	
	var _grouping = __webpack_require__(668);
	
	var _grouping2 = _interopRequireDefault(_grouping);
	
	var _restoreDialog = __webpack_require__(684);
	
	var _restoreDialog2 = _interopRequireDefault(_restoreDialog);
	
	var _uploadDialog = __webpack_require__(685);
	
	var _uploadDialog2 = _interopRequireDefault(_uploadDialog);
	
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
	
	var NewRRSession = function (_Component) {
	  _inherits(NewRRSession, _Component);
	
	  function NewRRSession(props) {
	    _classCallCheck(this, NewRRSession);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewRRSession).call(this, props));
	
	    _this.rrResponseReceived = function () {
	      var error = _rrSessionStore2.default.getError();
	
	      if (error) {
	        _this.setState({ error: error });
	        setTimeout(function () {
	          _this.setState({ error: null });
	        }, 2000);
	      } else {
	        _reactRouter.browserHistory.push("/club/sessions");
	      }
	    };
	
	    _this.deletePlayer = function (_id) {
	      delete _this.state.addedPlayers[_id];
	      (0, _clientActions.deletePlayer)(_this.props.club._id, _id);
	
	      var players = _this.props.club.players;
	      for (var i = 0; i < players.length; i++) {
	        if (players[i]._id === _id) {
	          players.splice(i, 1);
	        }
	      }
	      _this.setState({ addedPlayers: _this.state.addedPlayers });
	    };
	
	    _this.tempSessionFetched = function () {
	      var session = _tempSessionStore2.default.findCachedSession();
	
	      if (session) {
	        _this.session = session;
	        _this.handleOpen("dialogOpen");
	      }
	    };
	
	    _this.restoreSession = function () {
	      _this.selectedSchema = _this.session.selectedSchema;
	      _this.schemata = _this.session.schemata;
	      _this.pdfs = _this.session.pdfs;
	      _this.max = _this.session.max;
	      _this.min = _this.session.min;
	      _this.cached = true;
	      _this.setState({
	        tab: +_this.session.tab,
	        date: new Date(_this.session.date),
	        numPlayers: +_this.session.numPlayers,
	        addedPlayers: _this.session.addedPlayers ? _this.session.addedPlayers : {}
	      });
	      _this.handleClose("dialogOpen");
	    };
	
	    _this.openModal = function () {
	      _this.setState({ newPlayerModal: true });
	    };
	
	    _this.closeModal = function () {
	      _this.setState({ newPlayerModal: false });
	    };
	
	    _this.clubChanged = function () {
	      _this.setState({
	        club: _clubStore2.default.getCurrentClub(),
	        newPlayerModal: false
	      });
	    };
	
	    _this.handleOpen = function (field) {
	      _this.setState(_defineProperty({}, field, true));
	    };
	
	    _this.handleClose = function (field) {
	      _this.setState(_defineProperty({}, field, false));
	    };
	
	    _this.handleToggle = function (_id, e) {
	      if (e.target.type !== "checkbox" && e.target.tagName !== "TD") return;
	      var addedPlayers = Object.assign({}, _this.state.addedPlayers);
	      var selectedPlayer = _this.props.club.players.find(function (player) {
	        return player._id === _id;
	      });
	
	      if (addedPlayers[_id]) {
	        delete addedPlayers[_id];
	      } else {
	        addedPlayers[_id] = selectedPlayer;
	      }
	      _this.setState({
	        addedPlayers: addedPlayers,
	        numPlayers: ++_this.state.numPlayers
	      });
	    };
	
	    _this.toggleTab = function (tab) {
	      if (tab.target) return;
	
	      _this.setState({ tab: tab });
	    };
	
	    _this.saveSession = function (schemata, selectedSchema, players) {
	      (0, _rrSessionActions.saveSession)({
	        date: _this.state.date,
	        numOfPlayers: _this.state.numPlayers,
	        players: players,
	        selectedSchema: selectedSchema,
	        schemata: schemata
	      }, _this.props.club._id);
	      (0, _rrSessionActions.destroyTempSession)(_this.props.club._id);
	    };
	
	    _this.temporarilySaveSession = function (min, max, schemata, selectedSchema, pdfs) {
	      _this.handleOpen("snackBarOpen");
	      (0, _rrSessionActions.temporarySession)(_extends({}, _this.state, { min: min, max: max, selectedSchema: selectedSchema, schemata: schemata, pdfs: pdfs
	      }), _this.props.club._id);
	    };
	
	    _this.destroyTempSession = function () {
	      _this.session = null;
	      _pdfStore2.default.clearPDF();
	      (0, _rrSessionActions.destroyTempSession)(_this.props.club._id);
	      _this.handleClose("dialogOpen");
	    };
	
	    _this.state = {
	      newPlayerModal: false,
	      groupTabEnabled: false,
	      tab: 0,
	      date: new Date(),
	      numPlayers: 0,
	      error: null,
	      snackBarOpen: false,
	      restoreDialogOpen: false,
	      uploadDialogOpen: false,
	      addedPlayers: {}
	    };
	    return _this;
	  }
	
	  _createClass(NewRRSession, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.cached = false;
	      this.csListener = _clubStore2.default.addListener(this.clubChanged);
	      this.rrListener = _rrSessionStore2.default.addListener(this.rrResponseReceived);
	      this.tslistener = _tempSessionStore2.default.addListener(this.tempSessionFetched);
	      (0, _rrSessionActions.fetchTempSession)(this.props.club._id);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.csListener) this.csListener.remove();
	      if (this.rrListener) this.rrListener.remove();
	      if (this.tslistener) this.tslistener.remove();
	    }
	  }, {
	    key: "convertPlayersToArr",
	    value: function convertPlayersToArr() {
	      var _this2 = this;
	
	      return Object.keys(this.state.addedPlayers).map(function (_id) {
	        return _this2.state.addedPlayers[_id];
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      if (!this.props.club) {
	        return _react2.default.createElement(_CircularProgress2.default, { size: 2 });
	      }
	      var allPlayers = this.props.club.players;
	      var addedPlayers = this.convertPlayersToArr().sort(function (a, b) {
	        return b.rating - a.rating;
	      });
	      var numPlayers = this.state.numPlayers;
	
	      var playerContent = _react2.default.createElement("div", null, _react2.default.createElement(_RaisedButton2.default, {
	        onClick: this.openModal,
	        label: "New Player",
	        secondary: Boolean(true),
	        style: {
	          position: "absolute", right: 0
	        }
	      }), _react2.default.createElement(_RaisedButton2.default, {
	        onClick: this.openModal,
	        label: "Upload Players",
	        secondary: Boolean(true),
	        style: {
	          position: "absolute", right: 0
	        }
	      }), _react2.default.createElement("div", { className: "date" }, _react2.default.createElement(_DatePicker2.default, {
	        floatingLabelText: "Date of Session",
	        hintText: "Date", value: this.state.date,
	        onChange: function onChange(e, date) {
	          return _this3.setState({ date: date });
	        },
	        minDate: new Date()
	      })), _react2.default.createElement(_participants2.default, {
	        objAddedPlayers: this.state.addedPlayers,
	        addedPlayers: addedPlayers,
	        deletePlayer: this.deletePlayer,
	        allPlayers: allPlayers,
	        handleToggle: this.handleToggle
	      }));
	      var groupContent = _react2.default.createElement(_grouping2.default, {
	        numPlayers: numPlayers,
	        cached: this.cached,
	        pdfs: this.pdfs,
	        min: this.min,
	        max: this.max,
	        selectedGroup: this.selectedSchema,
	        schemata: this.schemata,
	        addedPlayers: addedPlayers,
	        saveSession: this.saveSession,
	        temporarilySaveSession: this.temporarilySaveSession,
	        club: this.props.club,
	        date: (0, _moment2.default)(this.state.date).format("YYYY-MM-DD")
	      });
	
	      return _react2.default.createElement("div", { className: "tab-container" }, _react2.default.createElement(_Tabs.Tabs, {
	        tabItemContainerStyle: { backgroundColor: "#673AB7" },
	        contentContainerStyle: {
	          padding: "20px",
	          border: "1px solid #E0E0E0",
	          minHeight: "400px"
	        },
	        value: this.state.tab,
	        onChange: this.toggleTab
	      }, _react2.default.createElement(_Tabs.Tab, { label: "Registration", value: 0 }, playerContent), _react2.default.createElement(_Tabs.Tab, { label: "Grouping", value: 1 }, groupContent)), _react2.default.createElement(_Snackbar2.default, {
	        open: this.state.snackBarOpen,
	        message: "Session has been temporarily saved",
	        autoHideDuration: 8000,
	        onRequestClose: function onRequestClose() {
	          return _this3.handleClose("snackBarOpen");
	        }
	      }), _react2.default.createElement(_restoreDialog2.default, {
	        open: this.state.restoreDialogOpen,
	        handleClose: this.handleClose,
	        restoreSession: this.restoreSession,
	        destroyTempSession: this.destroyTempSession
	      }), _react2.default.createElement(_uploadDialog2.default, {
	        open: this.state.uploadDialogOpen,
	        handleClose: this.handleClose
	      }), _react2.default.createElement(_playerForm2.default, {
	        modalOpen: this.state.newPlayerModal,
	        closeModal: this.closeModal
	      }));
	    }
	  }]);
	
	  return NewRRSession;
	}(_react.Component);
	
	NewRRSession.propTypes = {
	  club: _react.PropTypes.shape({
	    _id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.String]),
	    players: _react.PropTypes.Array
	  })
	};
	exports.default = NewRRSession;

/***/ },

/***/ 684:
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
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
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
	
	var RestoreDialog = function (_Component) {
	  _inherits(RestoreDialog, _Component);
	
	  function RestoreDialog() {
	    _classCallCheck(this, RestoreDialog);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RestoreDialog).apply(this, arguments));
	  }
	
	  _createClass(RestoreDialog, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      if (this.props.open !== nextProps.open) {
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Discard",
	        secondary: Boolean(true),
	        onTouchTap: this.props.destroyTempSession
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: "Retrieve",
	        secondary: Boolean(true),
	        onTouchTap: this.props.restoreSession
	      })];
	
	      return _react2.default.createElement(_Dialog2.default, {
	        title: "Session found",
	        actions: actions,
	        modal: false,
	        open: this.props.open,
	        onRequestClose: function onRequestClose() {
	          return _this2.props.handleClose("dialogOpen");
	        }
	      }, "Would you like to restore your previous session?");
	    }
	  }]);
	
	  return RestoreDialog;
	}(_react.Component);
	
	RestoreDialog.propTypes = {
	  destroyTempSession: _react.PropTypes.func,
	  restoreSession: _react.PropTypes.func,
	  open: _react.PropTypes.bool,
	  handleClose: _react.PropTypes.func
	};
	exports.default = RestoreDialog;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9yZXN0b3JlRGlhbG9nLmpzPzE4N2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0E0QlIscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQXhDa0I7O1dBeUNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFLLE1BQ3BDO0FBcERrQjs7V0FzRG5CLHFCQUFxQixZQUNuQjtXQUFNLFVBQVUsMkJBRWhCOztXQUFJLFNBQ0Y7ZUFBSyxVQUNMO2VBQUssV0FDTjtBQUNGO0FBN0RrQjs7V0E4RG5CLGlC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RjtjQUFTLGlCQUFVO0FBSm5CLElBREk7QUFBTjttQkFGaUIsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjs7Ozs7Ozs7Ozs7MkNBT0csV0FDcEI7V0FBSSxLQUFLLE1BQU0sU0FBUyxVQUFVLE1BQ2hDO2dCQUNEO0FBRUQ7O2NBQ0Q7Ozs7OEJBQ1E7b0JBQ1A7O1dBQU07Z0JBR0Y7b0JBQVcsUUFDWDtxQkFBWSxLQUFLLE1BQU07QUFGdkIsUUFERixDQURjO2dCQVFaO29CQUFXLFFBQ1g7cUJBQVksS0FBSyxNQUlyQjtBQU5JLFFBREY7OzhCQU9NO2dCQUVOO2tCQUNBO2dCQUNBO2VBQU0sS0FBSyxNQUNYO3lCQUFnQjtrQkFBTSxPQUFLLE1BQU0sWUFBWTtBQUx2QztBQUNOLFFBRE0sRUFTVDs7Ozs7OztBQXJDa0IsZUFDWjt1QkFDZSxpQkFDcEI7bUJBQWdCLGlCQUNoQjtTQUFNLGlCQUNOO2dCQUFhLGlCQUFVO0FBSHZCO21CQUZpQixjIiwiZmlsZSI6IjAuNjUyMWQ3ZDQzOGJiYWMyMjI1N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJtYXRlcmlhbC11aS9EYXRlUGlja2VyXCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IGRlbGV0ZVBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCB7IHNhdmVTZXNzaW9uLCB0ZW1wb3JhcnlTZXNzaW9uLCBkZXN0cm95VGVtcFNlc3Npb24sIGZldGNoVGVtcFNlc3Npb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yclNlc3Npb25BY3Rpb25zXCI7XG5pbXBvcnQgUlJTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9yclNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFRlbXBTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuaW1wb3J0IFBsYXllckZvcm0gZnJvbSBcIi4vcGxheWVyRm9ybVwiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuaW1wb3J0IFBhcnRpY2lwYW50cyBmcm9tIFwiLi9wYXJ0aWNpcGFudHNcIjtcbmltcG9ydCBHcm91cGluZyBmcm9tIFwiLi9ncm91cGluZ1wiO1xuaW1wb3J0IFJlc3RvcmVEaWFsb2cgZnJvbSBcIi4vcmVzdG9yZURpYWxvZ1wiO1xuaW1wb3J0IFVwbG9hZERpYWxvZyBmcm9tIFwiLi91cGxvYWREaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UlJTZXNzaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgX2lkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLlN0cmluZ1xuICAgICAgXSksXG4gICAgICBwbGF5ZXJzOiBQcm9wVHlwZXMuQXJyYXlcbiAgICB9KVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2UsXG4gICAgICBncm91cFRhYkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdGFiOiAwLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIG51bVBsYXllcnM6IDAsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHNuYWNrQmFyT3BlbjogZmFsc2UsXG4gICAgICByZXN0b3JlRGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICB1cGxvYWREaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGFkZGVkUGxheWVyczoge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3NMaXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgICB0aGlzLnJyTGlzdGVuZXIgPSBSUlNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnJyUmVzcG9uc2VSZWNlaXZlZCk7XG4gICAgdGhpcy50c2xpc3RlbmVyID0gVGVtcFNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnRlbXBTZXNzaW9uRmV0Y2hlZCk7XG4gICAgZmV0Y2hUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmNzTGlzdGVuZXIpIHRoaXMuY3NMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy5yckxpc3RlbmVyKSB0aGlzLnJyTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMudHNsaXN0ZW5lcikgdGhpcy50c2xpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgcnJSZXNwb25zZVJlY2VpdmVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUlJTZXNzaW9uU3RvcmUuZ2V0RXJyb3IoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogbnVsbCB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKFwiL2NsdWIvc2Vzc2lvbnNcIik7XG4gICAgfVxuICB9XG4gIGRlbGV0ZVBsYXllciA9IChfaWQpID0+IHtcbiAgICBkZWxldGUgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXTtcbiAgICBkZWxldGVQbGF5ZXIodGhpcy5wcm9wcy5jbHViLl9pZCwgX2lkKTtcblxuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzW2ldLl9pZCA9PT0gX2lkKSB7XG4gICAgICAgIHBsYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkZWRQbGF5ZXJzOiB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyB9KTtcbiAgfVxuXG4gIHRlbXBTZXNzaW9uRmV0Y2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gVGVtcFNlc3Npb25TdG9yZS5maW5kQ2FjaGVkU2Vzc2lvbigpO1xuXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oXCJkaWFsb2dPcGVuXCIpO1xuICAgIH1cbiAgfVxuICByZXN0b3JlU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkU2NoZW1hID0gdGhpcy5zZXNzaW9uLnNlbGVjdGVkU2NoZW1hO1xuICAgIHRoaXMuc2NoZW1hdGEgPSB0aGlzLnNlc3Npb24uc2NoZW1hdGE7XG4gICAgdGhpcy5wZGZzID0gdGhpcy5zZXNzaW9uLnBkZnM7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNlc3Npb24ubWF4O1xuICAgIHRoaXMubWluID0gdGhpcy5zZXNzaW9uLm1pbjtcbiAgICB0aGlzLmNhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6ICt0aGlzLnNlc3Npb24udGFiLFxuICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5zZXNzaW9uLmRhdGUpLFxuICAgICAgbnVtUGxheWVyczogK3RoaXMuc2Vzc2lvbi5udW1QbGF5ZXJzLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzID8gdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA6IHt9XG4gICAgfSk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogdHJ1ZSB9KTtcbiAgfVxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogZmFsc2UgfSk7XG4gIH1cbiAgY2x1YkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbHViOiBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKSxcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZU9wZW4gPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiBmYWxzZSB9KTtcbiAgfVxuICBoYW5kbGVUb2dnbGUgPSAoX2lkLCBlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgIT09IFwiY2hlY2tib3hcIiAmJiBlLnRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpIHJldHVybjtcbiAgICBjb25zdCBhZGRlZFBsYXllcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQbGF5ZXIgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycy5maW5kKChwbGF5ZXIgPT5cbiAgICAgIHBsYXllci5faWQgPT09IF9pZFxuICAgICkpO1xuXG4gICAgaWYgKGFkZGVkUGxheWVyc1tfaWRdKSB7XG4gICAgICBkZWxldGUgYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZGVkUGxheWVyc1tfaWRdID0gc2VsZWN0ZWRQbGF5ZXI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRkZWRQbGF5ZXJzLFxuICAgICAgbnVtUGxheWVyczogKyt0aGlzLnN0YXRlLm51bVBsYXllcnNcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgaWYgKHRhYi50YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWIgfSk7XG4gIH1cblxuICBjb252ZXJ0UGxheWVyc1RvQXJyKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFkZGVkUGxheWVycykubWFwKChfaWQgPT5cbiAgICAgIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF1cbiAgICApKTtcbiAgfVxuXG4gIHNhdmVTZXNzaW9uID0gKHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGxheWVycykgPT4ge1xuICAgIHNhdmVTZXNzaW9uKHtcbiAgICAgIGRhdGU6IHRoaXMuc3RhdGUuZGF0ZSxcbiAgICAgIG51bU9mUGxheWVyczogdGhpcy5zdGF0ZS5udW1QbGF5ZXJzLFxuICAgICAgcGxheWVycyxcbiAgICAgIHNlbGVjdGVkU2NoZW1hLFxuICAgICAgc2NoZW1hdGEsXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb24gPSAobWluLCBtYXgsIHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGRmcykgPT4ge1xuICAgIHRoaXMuaGFuZGxlT3BlbihcInNuYWNrQmFyT3BlblwiKTtcbiAgICB0ZW1wb3JhcnlTZXNzaW9uKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsIG1pbiwgbWF4LCBzZWxlY3RlZFNjaGVtYSwgc2NoZW1hdGEsIHBkZnNcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICBkZXN0cm95VGVtcFNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXNzaW9uID0gbnVsbDtcbiAgICBQREZTdG9yZS5jbGVhclBERigpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPjtcbiAgICB9XG4gICAgY29uc3QgYWxsUGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IHRoaXMuY29udmVydFBsYXllcnNUb0FycigpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpO1xuICAgIGNvbnN0IHsgbnVtUGxheWVycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHBsYXllckNvbnRlbnQgPSAoPGRpdj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiTmV3IFBsYXllclwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiVXBsb2FkIFBsYXllcnNcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3Blbn1cbiAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICBkZXN0cm95VGVtcFNlc3Npb249e3RoaXMuZGVzdHJveVRlbXBTZXNzaW9ufVxuICAgICAgLz5cbiAgICAgIDxVcGxvYWREaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgICA8UGxheWVyRm9ybVxuICAgICAgICBtb2RhbE9wZW49e3RoaXMuc3RhdGUubmV3UGxheWVyTW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIm1hdGVyaWFsLXVpL0RpYWxvZ1wiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdG9yZURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXN0b3JlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4gIT09IG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBsYWJlbD1cIkRpc2NhcmRcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMucHJvcHMuZGVzdHJveVRlbXBTZXNzaW9ufVxuICAgICAgLz4sXG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBsYWJlbD1cIlJldHJpZXZlXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBvblRvdWNoVGFwPXt0aGlzLnByb3BzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgLz5cbiAgICBdO1xuXG4gICAgcmV0dXJuICg8RGlhbG9nXG4gICAgICB0aXRsZT1cIlNlc3Npb24gZm91bmRcIlxuICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgIG9wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKX1cbiAgICA+XG4gICAgICBXb3VsZCB5b3UgbGlrZSB0byByZXN0b3JlIHlvdXIgcHJldmlvdXMgc2Vzc2lvbj9cbiAgICA8L0RpYWxvZz4pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3Jlc3RvcmVEaWFsb2cuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9