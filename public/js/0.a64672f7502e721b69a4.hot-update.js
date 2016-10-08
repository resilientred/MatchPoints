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
	
	var _restoreDialog = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./restoreDialog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjsyQkFVbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQTRCUixxQkFBcUIsWUFDbkI7V0FBTSxRQUFRLHlCQUVkOztXQUFJLE9BQ0Y7ZUFBSyxTQUFTLEVBQUUsT0FDaEI7b0JBQVcsWUFDVDtpQkFBSyxTQUFTLEVBQUUsT0FDakI7QUFGRCxZQUdEO0FBTEQsY0FNRTtxQ0FBZSxLQUNoQjtBQUNGO0FBeENrQjs7V0F5Q25CLGVBQWUsVUFBQyxLQUNkO2NBQU8sTUFBSyxNQUFNLGFBQ2xCO3dDQUFhLE1BQUssTUFBTSxLQUFLLEtBRTdCOztXQUFNLFVBQVUsTUFBSyxNQUFNLEtBQzNCO1lBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FDbEM7YUFBSSxRQUFRLEdBQUcsUUFBUSxLQUNyQjttQkFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRDthQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUssTUFDcEM7QUFwRGtCOztXQXNEbkIscUJBQXFCLFlBQ25CO1dBQU0sVUFBVSwyQkFFaEI7O1dBQUksU0FDRjtlQUFLLFVBQ0w7ZUFBSyxXQUNOO0FBQ0Y7QUE3RGtCOztXQThEbkIsaUJBQWlCLFlBQ2Y7YUFBSyxpQkFBaUIsTUFBSyxRQUMzQjthQUFLLFdBQVcsTUFBSyxRQUNyQjthQUFLLE9BQU8sTUFB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YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJtYXRlcmlhbC11aS9EYXRlUGlja2VyXCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IGRlbGV0ZVBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCB7IHNhdmVTZXNzaW9uLCB0ZW1wb3JhcnlTZXNzaW9uLCBkZXN0cm95VGVtcFNlc3Npb24sIGZldGNoVGVtcFNlc3Npb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yclNlc3Npb25BY3Rpb25zXCI7XG5pbXBvcnQgUlJTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9yclNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFRlbXBTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuaW1wb3J0IFBsYXllckZvcm0gZnJvbSBcIi4vcGxheWVyRm9ybVwiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuaW1wb3J0IFBhcnRpY2lwYW50cyBmcm9tIFwiLi9wYXJ0aWNpcGFudHNcIjtcbmltcG9ydCBHcm91cGluZyBmcm9tIFwiLi9ncm91cGluZ1wiO1xuaW1wb3J0IFJlc3RvcmVEaWFsb2cgZnJvbSBcIi4vcmVzdG9yZURpYWxvZ1wiO1xuaW1wb3J0IFVwbG9hZERpYWxvZyBmcm9tIFwiLi91cGxvYWREaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UlJTZXNzaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgX2lkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLlN0cmluZ1xuICAgICAgXSksXG4gICAgICBwbGF5ZXJzOiBQcm9wVHlwZXMuQXJyYXlcbiAgICB9KVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2UsXG4gICAgICBncm91cFRhYkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdGFiOiAwLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIG51bVBsYXllcnM6IDAsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHNuYWNrQmFyT3BlbjogZmFsc2UsXG4gICAgICByZXN0b3JlRGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICB1cGxvYWREaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGFkZGVkUGxheWVyczoge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3NMaXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgICB0aGlzLnJyTGlzdGVuZXIgPSBSUlNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnJyUmVzcG9uc2VSZWNlaXZlZCk7XG4gICAgdGhpcy50c2xpc3RlbmVyID0gVGVtcFNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnRlbXBTZXNzaW9uRmV0Y2hlZCk7XG4gICAgZmV0Y2hUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmNzTGlzdGVuZXIpIHRoaXMuY3NMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy5yckxpc3RlbmVyKSB0aGlzLnJyTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMudHNsaXN0ZW5lcikgdGhpcy50c2xpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgcnJSZXNwb25zZVJlY2VpdmVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUlJTZXNzaW9uU3RvcmUuZ2V0RXJyb3IoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogbnVsbCB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKFwiL2NsdWIvc2Vzc2lvbnNcIik7XG4gICAgfVxuICB9XG4gIGRlbGV0ZVBsYXllciA9IChfaWQpID0+IHtcbiAgICBkZWxldGUgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXTtcbiAgICBkZWxldGVQbGF5ZXIodGhpcy5wcm9wcy5jbHViLl9pZCwgX2lkKTtcblxuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzW2ldLl9pZCA9PT0gX2lkKSB7XG4gICAgICAgIHBsYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkZWRQbGF5ZXJzOiB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyB9KTtcbiAgfVxuXG4gIHRlbXBTZXNzaW9uRmV0Y2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gVGVtcFNlc3Npb25TdG9yZS5maW5kQ2FjaGVkU2Vzc2lvbigpO1xuXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oXCJkaWFsb2dPcGVuXCIpO1xuICAgIH1cbiAgfVxuICByZXN0b3JlU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkU2NoZW1hID0gdGhpcy5zZXNzaW9uLnNlbGVjdGVkU2NoZW1hO1xuICAgIHRoaXMuc2NoZW1hdGEgPSB0aGlzLnNlc3Npb24uc2NoZW1hdGE7XG4gICAgdGhpcy5wZGZzID0gdGhpcy5zZXNzaW9uLnBkZnM7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNlc3Npb24ubWF4O1xuICAgIHRoaXMubWluID0gdGhpcy5zZXNzaW9uLm1pbjtcbiAgICB0aGlzLmNhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6ICt0aGlzLnNlc3Npb24udGFiLFxuICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5zZXNzaW9uLmRhdGUpLFxuICAgICAgbnVtUGxheWVyczogK3RoaXMuc2Vzc2lvbi5udW1QbGF5ZXJzLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzID8gdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA6IHt9XG4gICAgfSk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogdHJ1ZSB9KTtcbiAgfVxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogZmFsc2UgfSk7XG4gIH1cbiAgY2x1YkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbHViOiBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKSxcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZU9wZW4gPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiBmYWxzZSB9KTtcbiAgfVxuICBoYW5kbGVUb2dnbGUgPSAoX2lkLCBlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgIT09IFwiY2hlY2tib3hcIiAmJiBlLnRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpIHJldHVybjtcbiAgICBjb25zdCBhZGRlZFBsYXllcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQbGF5ZXIgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycy5maW5kKChwbGF5ZXIgPT5cbiAgICAgIHBsYXllci5faWQgPT09IF9pZFxuICAgICkpO1xuXG4gICAgaWYgKGFkZGVkUGxheWVyc1tfaWRdKSB7XG4gICAgICBkZWxldGUgYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZGVkUGxheWVyc1tfaWRdID0gc2VsZWN0ZWRQbGF5ZXI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRkZWRQbGF5ZXJzLFxuICAgICAgbnVtUGxheWVyczogKyt0aGlzLnN0YXRlLm51bVBsYXllcnNcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgaWYgKHRhYi50YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWIgfSk7XG4gIH1cblxuICBjb252ZXJ0UGxheWVyc1RvQXJyKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFkZGVkUGxheWVycykubWFwKChfaWQgPT5cbiAgICAgIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF1cbiAgICApKTtcbiAgfVxuXG4gIHNhdmVTZXNzaW9uID0gKHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGxheWVycykgPT4ge1xuICAgIHNhdmVTZXNzaW9uKHtcbiAgICAgIGRhdGU6IHRoaXMuc3RhdGUuZGF0ZSxcbiAgICAgIG51bU9mUGxheWVyczogdGhpcy5zdGF0ZS5udW1QbGF5ZXJzLFxuICAgICAgcGxheWVycyxcbiAgICAgIHNlbGVjdGVkU2NoZW1hLFxuICAgICAgc2NoZW1hdGEsXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb24gPSAobWluLCBtYXgsIHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGRmcykgPT4ge1xuICAgIHRoaXMuaGFuZGxlT3BlbihcInNuYWNrQmFyT3BlblwiKTtcbiAgICB0ZW1wb3JhcnlTZXNzaW9uKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsIG1pbiwgbWF4LCBzZWxlY3RlZFNjaGVtYSwgc2NoZW1hdGEsIHBkZnNcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICBkZXN0cm95VGVtcFNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXNzaW9uID0gbnVsbDtcbiAgICBQREZTdG9yZS5jbGVhclBERigpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPjtcbiAgICB9XG4gICAgY29uc3QgYWxsUGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IHRoaXMuY29udmVydFBsYXllcnNUb0FycigpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpO1xuICAgIGNvbnN0IHsgbnVtUGxheWVycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHBsYXllckNvbnRlbnQgPSAoPGRpdj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiTmV3IFBsYXllclwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiVXBsb2FkIFBsYXllcnNcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3Blbn1cbiAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICBkZXN0cm95VGVtcFNlc3Npb249e3RoaXMuZGVzdHJveVRlbXBTZXNzaW9ufVxuICAgICAgLz5cbiAgICAgIDxVcGxvYWREaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgICA8UGxheWVyRm9ybVxuICAgICAgICBtb2RhbE9wZW49e3RoaXMuc3RhdGUubmV3UGxheWVyTW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9