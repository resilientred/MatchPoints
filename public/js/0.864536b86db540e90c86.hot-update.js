webpackHotUpdate(0,{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(168);
	
	var _app = __webpack_require__(245);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _splash = __webpack_require__(495);
	
	var _splash2 = _interopRequireDefault(_splash);
	
	var _club = __webpack_require__(506);
	
	var _club2 = _interopRequireDefault(_club);
	
	var _newRRSession = __webpack_require__(509);
	
	var _newRRSession2 = _interopRequireDefault(_newRRSession);
	
	var _roundrobinSessions = __webpack_require__(687);
	
	var _roundrobinSessions2 = _interopRequireDefault(_roundrobinSessions);
	
	var _roundrobinSession = __webpack_require__(696);
	
	var _roundrobinSession2 = _interopRequireDefault(_roundrobinSession);
	
	var _resultQuery = __webpack_require__(704);
	
	var _resultQuery2 = _interopRequireDefault(_resultQuery);
	
	var _errorPage = __webpack_require__(715);
	
	var _errorPage2 = _interopRequireDefault(_errorPage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Routes = _react2.default.createElement(_reactRouter.Route, { path: "/", component: _app2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _splash2.default }), _react2.default.createElement(_reactRouter.Route, { path: "club", component: _club2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _newRRSession2.default }), _react2.default.createElement(_reactRouter.Route, { path: "sessions", component: _roundrobinSessions2.default }), _react2.default.createElement(_reactRouter.Route, { path: "sessions/:id", component: _roundrobinSession2.default }), _react2.default.createElement(_reactRouter.Route, { path: "newSession", component: _newRRSession2.default })), _react2.default.createElement(_reactRouter.Route, { path: "results", component: _resultQuery2.default }), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _errorPage2.default }));
	
	exports.default = Routes;

/***/ },

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
	
	var _DatePicker = __webpack_require__(515);
	
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
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      debugger;
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
	
	      debugger;
	      var allPlayers = [];
	      var addedPlayers = [];
	      if (this.props.club) {
	        allPlayers = this.props.club.players;
	        addedPlayers = this.convertPlayersToArr().sort(function (a, b) {
	          return b.rating - a.rating;
	        });
	        //this may be the bottleneck?
	      }
	      var numPlayers = this.state.numPlayers;
	
	      var playerContent = _react2.default.createElement("div", null, _react2.default.createElement(_RaisedButton2.default, {
	        onClick: this.openModal,
	        label: "New Player",
	        secondary: Boolean(true),
	        style: {
	          position: "absolute", right: 0
	        }
	      }), _react2.default.createElement(_RaisedButton2.default, {
	        onClick: function onClick() {
	          return _this3.handleOpen("uploadDialogOpen");
	        },
	        label: "Upload Players",
	        secondary: Boolean(true),
	        style: {
	          position: "absolute", right: "150px"
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
	      }), this.state.restoreDialogOpen && _react2.default.createElement(_restoreDialog2.default, {
	        open: this.state.restoreDialogOpen,
	        handleClose: this.handleClose,
	        restoreSession: this.restoreSession,
	        destroyTempSession: this.destroyTempSession
	      }), this.state.uploadDialogOpen && _react2.default.createElement(_uploadDialog2.default, {
	        open: this.state.uploadDialogOpen,
	        handleClose: this.handleClose
	      }), this.state.newPlayerModal && _react2.default.createElement(_playerForm2.default, {
	        modalOpen: this.state.newPlayerModal,
	        closeModal: this.closeModal
	      }), !this.props.club && _react2.default.createElement("div", { className: "overlay" }, _react2.default.createElement("div", { className: "loading" }, _react2.default.createElement(_CircularProgress2.default, { size: 2 }))));
	    }
	  }]);
	
	  return NewRRSession;
	}(_react.Component);
	
	NewRRSession.propTypes = {
	  club: _react.PropTypes.shape({
	    _id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.String]),
	    players: _react.PropTypes.array
	  })
	};
	exports.default = NewRRSession;

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _DatePicker = __webpack_require__(516);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _DatePicker2.default;

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dateUtils = __webpack_require__(517);
	
	var _DatePickerDialog = __webpack_require__(518);
	
	var _DatePickerDialog2 = _interopRequireDefault(_DatePickerDialog);
	
	var _TextField = __webpack_require__(497);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _deprecatedPropType = __webpack_require__(454);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DatePicker = function (_Component) {
	  _inherits(DatePicker, _Component);
	
	  function DatePicker() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DatePicker);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DatePicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      date: undefined
	    }, _this.handleAccept = function (date) {
	      if (!_this.isControlled()) {
	        _this.setState({
	          date: date
	        });
	      }
	      if (_this.props.onChange) {
	        _this.props.onChange(null, date);
	      }
	    }, _this.handleFocus = function (event) {
	      event.target.blur();
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      if (_this.props.onTouchTap) {
	        _this.props.onTouchTap(event);
	      }
	
	      if (!_this.props.disabled) {
	        setTimeout(function () {
	          _this.openDialog();
	        }, 0);
	      }
	    }, _this.formatDate = function (date) {
	      if (_this.props.locale) {
	        var DateTimeFormat = _this.props.DateTimeFormat || _dateUtils.dateTimeFormat;
	        return new DateTimeFormat(_this.props.locale, {
	          day: 'numeric',
	          month: 'numeric',
	          year: 'numeric'
	        }).format(date);
	      } else {
	        return (0, _dateUtils.formatIso)(date);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DatePicker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.isControlled()) {
	        var newDate = this.getControlledDate(nextProps);
	        if (!(0, _dateUtils.isEqualDate)(this.state.date, newDate)) {
	          this.setState({
	            date: newDate
	          });
	        }
	      }
	    }
	  }, {
	    key: 'getDate',
	    value: function getDate() {
	      return this.state.date;
	    }
	
	    /**
	     * Open the date-picker dialog programmatically from a parent.
	     */
	
	  }, {
	    key: 'openDialog',
	    value: function openDialog() {
	      /**
	       * if the date is not selected then set it to new date
	       * (get the current system date while doing so)
	       * else set it to the currently selected date
	       */
	      if (this.state.date !== undefined) {
	        this.setState({
	          dialogDate: this.getDate()
	        }, this.refs.dialogWindow.show);
	      } else {
	        this.setState({
	          dialogDate: new Date()
	        }, this.refs.dialogWindow.show);
	      }
	    }
	
	    /**
	     * Alias for `openDialog()` for an api consistent with TextField.
	     */
	
	  }, {
	    key: 'focus',
	    value: function focus() {
	      this.openDialog();
	    }
	  }, {
	    key: 'isControlled',
	    value: function isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'getControlledDate',
	    value: function getControlledDate() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	      if (props.value instanceof Date) {
	        return props.value;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var DateTimeFormat = _props.DateTimeFormat;
	      var autoOk = _props.autoOk;
	      var cancelLabel = _props.cancelLabel;
	      var className = _props.className;
	      var container = _props.container;
	      var defaultDate = _props.defaultDate;
	      var dialogContainerStyle = _props.dialogContainerStyle;
	      var disableYearSelection = _props.disableYearSelection;
	      var firstDayOfWeek = _props.firstDayOfWeek;
	      var formatDateProp = _props.formatDate;
	      var locale = _props.locale;
	      var maxDate = _props.maxDate;
	      var minDate = _props.minDate;
	      var mode = _props.mode;
	      var okLabel = _props.okLabel;
	      var onDismiss = _props.onDismiss;
	      var onFocus = _props.onFocus;
	      var onShow = _props.onShow;
	      var onTouchTap = _props.onTouchTap;
	      var shouldDisableDate = _props.shouldDisableDate;
	      var style = _props.style;
	      var textFieldStyle = _props.textFieldStyle;
	      var wordings = _props.wordings;
	
	      var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'className', 'container', 'defaultDate', 'dialogContainerStyle', 'disableYearSelection', 'firstDayOfWeek', 'formatDate', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onDismiss', 'onFocus', 'onShow', 'onTouchTap', 'shouldDisableDate', 'style', 'textFieldStyle', 'wordings']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var formatDate = formatDateProp || this.formatDate;
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) },
	        _react2.default.createElement(_TextField2.default, _extends({}, other, {
	          onFocus: this.handleFocus,
	          onTouchTap: this.handleTouchTap,
	          ref: 'input',
	          style: textFieldStyle,
	          value: this.state.date ? formatDate(this.state.date) : ''
	        })),
	        _react2.default.createElement(_DatePickerDialog2.default, {
	          DateTimeFormat: DateTimeFormat,
	          autoOk: autoOk,
	          cancelLabel: cancelLabel,
	          container: container,
	          containerStyle: dialogContainerStyle,
	          disableYearSelection: disableYearSelection,
	          firstDayOfWeek: firstDayOfWeek,
	          initialDate: this.state.dialogDate,
	          locale: locale,
	          maxDate: maxDate,
	          minDate: minDate,
	          mode: mode,
	          okLabel: okLabel,
	          onAccept: this.handleAccept,
	          onShow: onShow,
	          onDismiss: onDismiss,
	          ref: 'dialogWindow',
	          shouldDisableDate: shouldDisableDate,
	          wordings: wordings
	        })
	      );
	    }
	  }]);
	
	  return DatePicker;
	}(_react.Component);
	
	DatePicker.propTypes = {
	  /**
	   * Constructor for date formatting for the specified `locale`.
	   * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
	   * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
	   * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
	   *
	   * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
	   */
	  DateTimeFormat: _react.PropTypes.func,
	  /**
	   * If true, automatically accept and close the picker on select a date.
	   */
	  autoOk: _react.PropTypes.bool,
	  /**
	   * Override the default text of the 'Cancel' button.
	   */
	  cancelLabel: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Used to control how the Date Picker will be displayed when the input field is focused.
	   * `dialog` (default) displays the DatePicker as a dialog with a modal.
	   * `inline` displays the DatePicker below the input field (similar to auto complete).
	   */
	  container: _react.PropTypes.oneOf(['dialog', 'inline']),
	  /**
	   * This is the initial date value of the component.
	   * If either `value` or `valueLink` is provided they will override this
	   * prop with `value` taking precedence.
	   */
	  defaultDate: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of DatePickerDialog's Container element.
	   */
	  dialogContainerStyle: _react.PropTypes.object,
	  /**
	   * Disables the year selection in the date picker.
	   */
	  disableYearSelection: _react.PropTypes.bool,
	  /**
	   * Disables the DatePicker.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Used to change the first day of week. It varies from
	   * Saturday to Monday between different locales.
	   * The allowed range is 0 (Sunday) to 6 (Saturday).
	   * The default is `1`, Monday, as per ISO 8601.
	   */
	  firstDayOfWeek: _react.PropTypes.number,
	  /**
	   * This function is called to format the date displayed in the input field, and should return a string.
	   * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
	   *
	   * @param {object} date Date object to be formatted.
	   * @returns {any} The formatted date.
	   */
	  formatDate: _react.PropTypes.func,
	  /**
	   * Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
	   * must provide a `DateTimeFormat` that supports the chosen `locale`.
	   */
	  locale: _react.PropTypes.string,
	  /**
	   * The ending of a range of valid dates. The range includes the endDate.
	   * The default value is current date + 100 years.
	   */
	  maxDate: _react.PropTypes.object,
	  /**
	   * The beginning of a range of valid dates. The range includes the startDate.
	   * The default value is current date - 100 years.
	   */
	  minDate: _react.PropTypes.object,
	  /**
	   * Tells the component to display the picker in portrait or landscape mode.
	   */
	  mode: _react.PropTypes.oneOf(['portrait', 'landscape']),
	  /**
	   * Override the default text of the 'OK' button.
	   */
	  okLabel: _react.PropTypes.node,
	  /**
	   * Callback function that is fired when the date value changes.
	   *
	   * @param {null} null Since there is no particular event associated with the change,
	   * the first argument will always be null.
	   * @param {object} date The new date.
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the Date Picker's dialog is dismissed.
	   */
	  onDismiss: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the Date Picker's `TextField` gains focus.
	   */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the Date Picker's dialog is shown.
	   */
	  onShow: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
	   *
	   * @param {object} event TouchTap event targeting the `TextField`.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function used to determine if a day's entry should be disabled on the calendar.
	   *
	   * @param {object} day Date object of a day.
	   * @returns {boolean} Indicates whether the day should be disabled.
	   */
	  shouldDisableDate: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of DatePicker's TextField element.
	   */
	  textFieldStyle: _react.PropTypes.object,
	  /**
	   * Sets the date for the Date Picker programmatically.
	   */
	  value: _react.PropTypes.object,
	  /**
	   * Wordings used inside the button of the dialog.
	   */
	  wordings: (0, _deprecatedPropType2.default)(_react.PropTypes.object, 'Instead, use `cancelLabel` and `okLabel`.\n      It will be removed with v0.16.0.')
	};
	DatePicker.defaultProps = {
	  autoOk: false,
	  container: 'dialog',
	  disabled: false,
	  disableYearSelection: false,
	  firstDayOfWeek: 1,
	  style: {}
	};
	DatePicker.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = DatePicker;

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dateTimeFormat = dateTimeFormat;
	exports.addDays = addDays;
	exports.addMonths = addMonths;
	exports.addYears = addYears;
	exports.cloneDate = cloneDate;
	exports.cloneAsDate = cloneAsDate;
	exports.getDaysInMonth = getDaysInMonth;
	exports.getFirstDayOfMonth = getFirstDayOfMonth;
	exports.getFirstDayOfWeek = getFirstDayOfWeek;
	exports.getWeekArray = getWeekArray;
	exports.localizedWeekday = localizedWeekday;
	exports.formatIso = formatIso;
	exports.isEqualDate = isEqualDate;
	exports.isBeforeDate = isBeforeDate;
	exports.isAfterDate = isAfterDate;
	exports.isBetweenDates = isBetweenDates;
	exports.monthDiff = monthDiff;
	exports.yearDiff = yearDiff;
	
	var _warning = __webpack_require__(180);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	function dateTimeFormat(locale, options) {
	   true ? (0, _warning2.default)(locale === 'en-US', 'The ' + locale + ' locale is not supported by the built-in DateTimeFormat.\n  Use the `DateTimeFormat` prop to supply an alternative implementation.') : void 0;
	
	  this.format = function (date) {
	    if (options.month === 'short' && options.weekday === 'short' && options.day === '2-digit') {
	      return dayList[date.getDay()] + ', ' + monthList[date.getMonth()] + ' ' + date.getDate();
	    } else if (options.day === 'numeric' && options.month === 'numeric' && options.year === 'numeric') {
	      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
	    } else if (options.month === 'long' && options.year === 'numeric') {
	      return monthLongList[date.getMonth()] + ' ' + date.getFullYear();
	    } else if (options.weekday === 'narrow') {
	      return dayAbbreviation[date.getDay()];
	    } else {
	       true ? (0, _warning2.default)(false, 'Wrong usage of DateTimeFormat') : void 0;
	    }
	  };
	}
	
	function addDays(d, days) {
	  var newDate = cloneDate(d);
	  newDate.setDate(d.getDate() + days);
	  return newDate;
	}
	
	function addMonths(d, months) {
	  var newDate = cloneDate(d);
	  newDate.setMonth(d.getMonth() + months);
	  return newDate;
	}
	
	function addYears(d, years) {
	  var newDate = cloneDate(d);
	  newDate.setFullYear(d.getFullYear() + years);
	  return newDate;
	}
	
	function cloneDate(d) {
	  return new Date(d.getTime());
	}
	
	function cloneAsDate(d) {
	  var clonedDate = cloneDate(d);
	  clonedDate.setHours(0, 0, 0, 0);
	  return clonedDate;
	}
	
	function getDaysInMonth(d) {
	  var resultDate = getFirstDayOfMonth(d);
	
	  resultDate.setMonth(resultDate.getMonth() + 1);
	  resultDate.setDate(resultDate.getDate() - 1);
	
	  return resultDate.getDate();
	}
	
	function getFirstDayOfMonth(d) {
	  return new Date(d.getFullYear(), d.getMonth(), 1);
	}
	
	function getFirstDayOfWeek() {
	  var now = new Date();
	  return new Date(now.setDate(now.getDate() - now.getDay()));
	}
	
	function getWeekArray(d, firstDayOfWeek) {
	  var dayArray = [];
	  var daysInMonth = getDaysInMonth(d);
	  var weekArray = [];
	  var week = [];
	
	  for (var i = 1; i <= daysInMonth; i++) {
	    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
	  }
	
	  var addWeek = function addWeek(week) {
	    var emptyDays = 7 - week.length;
	    for (var _i = 0; _i < emptyDays; ++_i) {
	      week[weekArray.length ? 'push' : 'unshift'](null);
	    }
	    weekArray.push(week);
	  };
	
	  dayArray.forEach(function (day) {
	    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
	      addWeek(week);
	      week = [];
	    }
	    week.push(day);
	    if (dayArray.indexOf(day) === dayArray.length - 1) {
	      addWeek(week);
	    }
	  });
	
	  return weekArray;
	}
	
	function localizedWeekday(DateTimeFormat, locale, day, firstDayOfWeek) {
	  var weekdayFormatter = new DateTimeFormat(locale, { weekday: 'narrow' });
	  var firstDayDate = getFirstDayOfWeek();
	
	  return weekdayFormatter.format(addDays(firstDayDate, day + firstDayOfWeek));
	}
	
	// Convert date to ISO 8601 (YYYY-MM-DD) date string, accounting for current timezone
	function formatIso(date) {
	  return new Date(date.toDateString() + ' 12:00:00 +0000').toISOString().substring(0, 10);
	}
	
	function isEqualDate(d1, d2) {
	  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
	}
	
	function isBeforeDate(d1, d2) {
	  var date1 = cloneAsDate(d1);
	  var date2 = cloneAsDate(d2);
	
	  return date1.getTime() < date2.getTime();
	}
	
	function isAfterDate(d1, d2) {
	  var date1 = cloneAsDate(d1);
	  var date2 = cloneAsDate(d2);
	
	  return date1.getTime() > date2.getTime();
	}
	
	function isBetweenDates(dateToCheck, startDate, endDate) {
	  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
	}
	
	function monthDiff(d1, d2) {
	  var m = void 0;
	  m = (d1.getFullYear() - d2.getFullYear()) * 12;
	  m += d1.getMonth();
	  m -= d2.getMonth();
	  return m;
	}
	
	function yearDiff(d1, d2) {
	  return ~~(monthDiff(d1, d2) / 12);
	}

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactEventListener = __webpack_require__(407);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(408);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _Calendar = __webpack_require__(519);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _Popover = __webpack_require__(419);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _PopoverAnimationVertical = __webpack_require__(536);
	
	var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);
	
	var _dateUtils = __webpack_require__(517);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DatePickerDialog = function (_Component) {
	  _inherits(DatePickerDialog, _Component);
	
	  function DatePickerDialog() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DatePickerDialog);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DatePickerDialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.show = function () {
	      if (_this.props.onShow && !_this.state.open) {
	        _this.props.onShow();
	      }
	
	      _this.setState({
	        open: true
	      });
	    }, _this.dismiss = function () {
	      if (_this.props.onDismiss && _this.state.open) {
	        _this.props.onDismiss();
	      }
	
	      _this.setState({
	        open: false
	      });
	    }, _this.handleTouchTapDay = function () {
	      if (_this.props.autoOk) {
	        setTimeout(_this.handleTouchTapOk, 300);
	      }
	    }, _this.handleTouchTapCancel = function () {
	      _this.dismiss();
	    }, _this.handleRequestClose = function () {
	      _this.dismiss();
	    }, _this.handleTouchTapOk = function () {
	      if (_this.props.onAccept && !_this.refs.calendar.isSelectedDateDisabled()) {
	        _this.props.onAccept(_this.refs.calendar.getSelectedDate());
	      }
	
	      _this.setState({
	        open: false
	      });
	    }, _this.handleWindowKeyUp = function (event) {
	      switch ((0, _keycode2.default)(event)) {
	        case 'enter':
	          _this.handleTouchTapOk();
	          break;
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DatePickerDialog, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var DateTimeFormat = _props.DateTimeFormat;
	      var autoOk = _props.autoOk;
	      var cancelLabel = _props.cancelLabel;
	      var container = _props.container;
	      var containerStyle = _props.containerStyle;
	      var disableYearSelection = _props.disableYearSelection;
	      var initialDate = _props.initialDate;
	      var firstDayOfWeek = _props.firstDayOfWeek;
	      var locale = _props.locale;
	      var maxDate = _props.maxDate;
	      var minDate = _props.minDate;
	      var mode = _props.mode;
	      var okLabel = _props.okLabel;
	      var onAccept = _props.onAccept;
	      var onDismiss = _props.onDismiss;
	      var onShow = _props.onShow;
	      var shouldDisableDate = _props.shouldDisableDate;
	      var style = _props.style;
	      var wordings = _props.wordings;
	      var animation = _props.animation;
	
	      var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'container', 'containerStyle', 'disableYearSelection', 'initialDate', 'firstDayOfWeek', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onAccept', 'onDismiss', 'onShow', 'shouldDisableDate', 'style', 'wordings', 'animation']);
	
	      var open = this.state.open;
	
	
	      var styles = {
	        dialogContent: {
	          width: mode === 'landscape' ? 479 : 310
	        },
	        dialogBodyContent: {
	          padding: 0,
	          minHeight: mode === 'landscape' ? 330 : 434,
	          minWidth: mode === 'landscape' ? 479 : 310
	        }
	      };
	
	      var Container = container === 'inline' ? _Popover2.default : _Dialog2.default;
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { ref: 'root' }),
	        _react2.default.createElement(
	          Container,
	          {
	            anchorEl: this.refs.root // For Popover
	            , animation: animation || _PopoverAnimationVertical2.default // For Popover
	            , bodyStyle: styles.dialogBodyContent,
	            contentStyle: styles.dialogContent,
	            ref: 'dialog',
	            repositionOnUpdate: true,
	            open: open,
	            onRequestClose: this.handleRequestClose,
	            style: (0, _simpleAssign2.default)(styles.dialogBodyContent, containerStyle)
	          },
	          _react2.default.createElement(_reactEventListener2.default, {
	            target: 'window',
	            onKeyUp: this.handleWindowKeyUp
	          }),
	          _react2.default.createElement(_Calendar2.default, {
	            autoOk: autoOk,
	            DateTimeFormat: DateTimeFormat,
	            cancelLabel: cancelLabel,
	            disableYearSelection: disableYearSelection,
	            firstDayOfWeek: firstDayOfWeek,
	            initialDate: initialDate,
	            locale: locale,
	            onTouchTapDay: this.handleTouchTapDay,
	            maxDate: maxDate,
	            minDate: minDate,
	            mode: mode,
	            open: open,
	            ref: 'calendar',
	            onTouchTapCancel: this.handleTouchTapCancel,
	            onTouchTapOk: this.handleTouchTapOk,
	            okLabel: okLabel,
	            shouldDisableDate: shouldDisableDate,
	            wordings: wordings
	          })
	        )
	      );
	    }
	  }]);
	
	  return DatePickerDialog;
	}(_react.Component);
	
	DatePickerDialog.propTypes = {
	  DateTimeFormat: _react.PropTypes.func,
	  animation: _react.PropTypes.func,
	  autoOk: _react.PropTypes.bool,
	  cancelLabel: _react.PropTypes.node,
	  container: _react.PropTypes.oneOf(['dialog', 'inline']),
	  containerStyle: _react.PropTypes.object,
	  disableYearSelection: _react.PropTypes.bool,
	  firstDayOfWeek: _react.PropTypes.number,
	  initialDate: _react.PropTypes.object,
	  locale: _react.PropTypes.string,
	  maxDate: _react.PropTypes.object,
	  minDate: _react.PropTypes.object,
	  mode: _react.PropTypes.oneOf(['portrait', 'landscape']),
	  okLabel: _react.PropTypes.node,
	  onAccept: _react.PropTypes.func,
	  onDismiss: _react.PropTypes.func,
	  onShow: _react.PropTypes.func,
	  open: _react.PropTypes.bool,
	  shouldDisableDate: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  wordings: _react.PropTypes.object
	};
	DatePickerDialog.defaultProps = {
	  DateTimeFormat: _dateUtils.dateTimeFormat,
	  cancelLabel: 'Cancel',
	  container: 'dialog',
	  locale: 'en-US',
	  okLabel: 'OK'
	};
	DatePickerDialog.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = DatePickerDialog;

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactEventListener = __webpack_require__(407);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(408);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _CalendarActionButtons = __webpack_require__(520);
	
	var _CalendarActionButtons2 = _interopRequireDefault(_CalendarActionButtons);
	
	var _CalendarMonth = __webpack_require__(524);
	
	var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);
	
	var _CalendarYear = __webpack_require__(526);
	
	var _CalendarYear2 = _interopRequireDefault(_CalendarYear);
	
	var _CalendarToolbar = __webpack_require__(528);
	
	var _CalendarToolbar2 = _interopRequireDefault(_CalendarToolbar);
	
	var _DateDisplay = __webpack_require__(533);
	
	var _DateDisplay2 = _interopRequireDefault(_DateDisplay);
	
	var _SlideIn = __webpack_require__(531);
	
	var _SlideIn2 = _interopRequireDefault(_SlideIn);
	
	var _dateUtils = __webpack_require__(517);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var daysArray = [].concat(_toConsumableArray(Array(7)));
	
	var Calendar = function (_Component) {
	  _inherits(Calendar, _Component);
	
	  function Calendar() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Calendar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Calendar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      displayDate: undefined,
	      displayMonthDay: true,
	      selectedDate: undefined,
	      transitionDirection: 'left',
	      transitionEnter: true
	    }, _this.handleTouchTapDay = function (event, date) {
	      _this.setSelectedDate(date);
	      if (_this.props.onTouchTapDay) _this.props.onTouchTapDay(event, date);
	    }, _this.handleMonthChange = function (months) {
	      _this.setState({
	        transitionDirection: months >= 0 ? 'left' : 'right',
	        displayDate: (0, _dateUtils.addMonths)(_this.state.displayDate, months)
	      });
	    }, _this.handleTouchTapYear = function (event, year) {
	      var date = (0, _dateUtils.cloneDate)(_this.state.selectedDate);
	      date.setFullYear(year);
	      _this.setSelectedDate(date, event);
	    }, _this.handleTouchTapDateDisplayMonthDay = function () {
	      _this.setState({
	        displayMonthDay: true
	      });
	    }, _this.handleTouchTapDateDisplayYear = function () {
	      _this.setState({
	        displayMonthDay: false
	      });
	    }, _this.handleWindowKeyDown = function (event) {
	      if (_this.props.open) {
	        switch ((0, _keycode2.default)(event)) {
	          case 'up':
	            if (event.altKey && event.shiftKey) {
	              _this.addSelectedYears(-1);
	            } else if (event.shiftKey) {
	              _this.addSelectedMonths(-1);
	            } else {
	              _this.addSelectedDays(-7);
	            }
	            break;
	
	          case 'down':
	            if (event.altKey && event.shiftKey) {
	              _this.addSelectedYears(1);
	            } else if (event.shiftKey) {
	              _this.addSelectedMonths(1);
	            } else {
	              _this.addSelectedDays(7);
	            }
	            break;
	
	          case 'right':
	            if (event.altKey && event.shiftKey) {
	              _this.addSelectedYears(1);
	            } else if (event.shiftKey) {
	              _this.addSelectedMonths(1);
	            } else {
	              _this.addSelectedDays(1);
	            }
	            break;
	
	          case 'left':
	            if (event.altKey && event.shiftKey) {
	              _this.addSelectedYears(-1);
	            } else if (event.shiftKey) {
	              _this.addSelectedMonths(-1);
	            } else {
	              _this.addSelectedDays(-1);
	            }
	            break;
	        }
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        displayDate: (0, _dateUtils.getFirstDayOfMonth)(this.props.initialDate),
	        selectedDate: this.props.initialDate
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.initialDate !== this.props.initialDate) {
	        var date = nextProps.initialDate || new Date();
	        this.setState({
	          displayDate: (0, _dateUtils.getFirstDayOfMonth)(date),
	          selectedDate: date
	        });
	      }
	    }
	  }, {
	    key: 'getSelectedDate',
	    value: function getSelectedDate() {
	      return this.state.selectedDate;
	    }
	  }, {
	    key: 'isSelectedDateDisabled',
	    value: function isSelectedDateDisabled() {
	      if (!this.state.displayMonthDay) {
	        return false;
	      }
	
	      return this.refs.calendar.isSelectedDateDisabled();
	    }
	  }, {
	    key: 'addSelectedDays',
	    value: function addSelectedDays(days) {
	      this.setSelectedDate((0, _dateUtils.addDays)(this.state.selectedDate, days));
	    }
	  }, {
	    key: 'addSelectedMonths',
	    value: function addSelectedMonths(months) {
	      this.setSelectedDate((0, _dateUtils.addMonths)(this.state.selectedDate, months));
	    }
	  }, {
	    key: 'addSelectedYears',
	    value: function addSelectedYears(years) {
	      this.setSelectedDate((0, _dateUtils.addYears)(this.state.selectedDate, years));
	    }
	  }, {
	    key: 'setDisplayDate',
	    value: function setDisplayDate(date, newSelectedDate) {
	      var newDisplayDate = (0, _dateUtils.getFirstDayOfMonth)(date);
	      var direction = newDisplayDate > this.state.displayDate ? 'left' : 'right';
	
	      if (newDisplayDate !== this.state.displayDate) {
	        this.setState({
	          displayDate: newDisplayDate,
	          transitionDirection: direction,
	          selectedDate: newSelectedDate || this.state.selectedDate
	        });
	      }
	    }
	  }, {
	    key: 'setSelectedDate',
	    value: function setSelectedDate(date) {
	      var adjustedDate = date;
	      if ((0, _dateUtils.isBeforeDate)(date, this.props.minDate)) {
	        adjustedDate = this.props.minDate;
	      } else if ((0, _dateUtils.isAfterDate)(date, this.props.maxDate)) {
	        adjustedDate = this.props.maxDate;
	      }
	
	      var newDisplayDate = (0, _dateUtils.getFirstDayOfMonth)(adjustedDate);
	      if (newDisplayDate !== this.state.displayDate) {
	        this.setDisplayDate(newDisplayDate, adjustedDate);
	      } else {
	        this.setState({
	          selectedDate: adjustedDate
	        });
	      }
	    }
	  }, {
	    key: 'getToolbarInteractions',
	    value: function getToolbarInteractions() {
	      return {
	        prevMonth: (0, _dateUtils.monthDiff)(this.state.displayDate, this.props.minDate) > 0,
	        nextMonth: (0, _dateUtils.monthDiff)(this.state.displayDate, this.props.maxDate) < 0
	      };
	    }
	  }, {
	    key: 'yearSelector',
	    value: function yearSelector() {
	      if (!this.props.disableYearSelection) return _react2.default.createElement(_CalendarYear2.default, {
	        key: 'years',
	        displayDate: this.state.displayDate,
	        onTouchTapYear: this.handleTouchTapYear,
	        selectedDate: this.state.selectedDate,
	        minDate: this.props.minDate,
	        maxDate: this.props.maxDate
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var weekCount = (0, _dateUtils.getWeekArray)(this.state.displayDate, this.props.firstDayOfWeek).length;
	      var toolbarInteractions = this.getToolbarInteractions();
	      var isLandscape = this.props.mode === 'landscape';
	      var calendarTextColor = this.context.muiTheme.datePicker.calendarTextColor;
	
	
	      var styles = {
	        root: {
	          color: calendarTextColor,
	          userSelect: 'none',
	          width: isLandscape ? 479 : 310
	        },
	        calendar: {
	          display: 'flex',
	          flexDirection: 'column'
	        },
	        calendarContainer: {
	          display: 'flex',
	          alignContent: 'space-between',
	          justifyContent: 'space-between',
	          flexDirection: 'column',
	          fontSize: 12,
	          fontWeight: 400,
	          padding: '0px 8px',
	          transition: _transitions2.default.easeOut()
	        },
	        yearContainer: {
	          display: 'flex',
	          justifyContent: 'space-between',
	          flexDirection: 'column',
	          height: 272,
	          marginTop: 10,
	          overflow: 'hidden',
	          width: 310
	        },
	        weekTitle: {
	          display: 'flex',
	          flexDirection: 'row',
	          justifyContent: 'space-between',
	          fontWeight: '500',
	          height: 20,
	          lineHeight: '15px',
	          opacity: '0.5',
	          textAlign: 'center'
	        },
	        weekTitleDay: {
	          width: 42
	        },
	        transitionSlide: {
	          height: 214
	        }
	      };
	
	      var weekTitleDayStyle = prepareStyles(styles.weekTitleDay);
	
	      var _props = this.props;
	      var cancelLabel = _props.cancelLabel;
	      var DateTimeFormat = _props.DateTimeFormat;
	      var firstDayOfWeek = _props.firstDayOfWeek;
	      var locale = _props.locale;
	      var okLabel = _props.okLabel;
	      var onTouchTapCancel = _props.onTouchTapCancel;
	      var onTouchTapOk = _props.onTouchTapOk;
	      var wordings = _props.wordings;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(styles.root) },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyDown: this.handleWindowKeyDown
	        }),
	        _react2.default.createElement(_DateDisplay2.default, {
	          DateTimeFormat: DateTimeFormat,
	          disableYearSelection: this.props.disableYearSelection,
	          onTouchTapMonthDay: this.handleTouchTapDateDisplayMonthDay,
	          onTouchTapYear: this.handleTouchTapDateDisplayYear,
	          locale: locale,
	          monthDaySelected: this.state.displayMonthDay,
	          mode: this.props.mode,
	          selectedDate: this.state.selectedDate,
	          weekCount: weekCount
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.calendar) },
	          this.state.displayMonthDay && _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.calendarContainer) },
	            _react2.default.createElement(_CalendarToolbar2.default, {
	              DateTimeFormat: DateTimeFormat,
	              locale: locale,
	              displayDate: this.state.displayDate,
	              onMonthChange: this.handleMonthChange,
	              prevMonth: toolbarInteractions.prevMonth,
	              nextMonth: toolbarInteractions.nextMonth
	            }),
	            _react2.default.createElement(
	              'div',
	              { style: prepareStyles(styles.weekTitle) },
	              daysArray.map(function (event, i) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: i, style: weekTitleDayStyle },
	                  (0, _dateUtils.localizedWeekday)(DateTimeFormat, locale, i, firstDayOfWeek)
	                );
	              })
	            ),
	            _react2.default.createElement(
	              _SlideIn2.default,
	              { direction: this.state.transitionDirection, style: styles.transitionSlide },
	              _react2.default.createElement(_CalendarMonth2.default, {
	                displayDate: this.state.displayDate,
	                firstDayOfWeek: this.props.firstDayOfWeek,
	                key: this.state.displayDate.toDateString(),
	                minDate: this.props.minDate,
	                maxDate: this.props.maxDate,
	                onTouchTapDay: this.handleTouchTapDay,
	                ref: 'calendar',
	                selectedDate: this.state.selectedDate,
	                shouldDisableDate: this.props.shouldDisableDate
	              })
	            )
	          ),
	          !this.state.displayMonthDay && _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.yearContainer) },
	            this.yearSelector()
	          ),
	          okLabel && _react2.default.createElement(_CalendarActionButtons2.default, {
	            autoOk: this.props.autoOk,
	            cancelLabel: cancelLabel,
	            okLabel: okLabel,
	            onTouchTapCancel: onTouchTapCancel,
	            onTouchTapOk: onTouchTapOk,
	            wordings: wordings
	          })
	        )
	      );
	    }
	  }]);
	
	  return Calendar;
	}(_react.Component);
	
	Calendar.propTypes = {
	  DateTimeFormat: _react.PropTypes.func.isRequired,
	  autoOk: _react.PropTypes.bool,
	  cancelLabel: _react.PropTypes.node,
	  disableYearSelection: _react.PropTypes.bool,
	  firstDayOfWeek: _react.PropTypes.number,
	  initialDate: _react.PropTypes.object,
	  locale: _react.PropTypes.string.isRequired,
	  maxDate: _react.PropTypes.object,
	  minDate: _react.PropTypes.object,
	  mode: _react.PropTypes.oneOf(['portrait', 'landscape']),
	  okLabel: _react.PropTypes.node,
	  onTouchTapCancel: _react.PropTypes.func,
	  onTouchTapDay: _react.PropTypes.func,
	  onTouchTapOk: _react.PropTypes.func,
	  open: _react.PropTypes.bool,
	  shouldDisableDate: _react.PropTypes.func,
	  wordings: _react.PropTypes.object
	};
	Calendar.defaultProps = {
	  DateTimeFormat: _dateUtils.dateTimeFormat,
	  disableYearSelection: false,
	  initialDate: new Date(),
	  locale: 'en-US',
	  minDate: (0, _dateUtils.addYears)(new Date(), -100),
	  maxDate: (0, _dateUtils.addYears)(new Date(), 100)
	};
	Calendar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Calendar;

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FlatButton = __webpack_require__(521);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarActionButton = function (_Component) {
	  _inherits(CalendarActionButton, _Component);
	
	  function CalendarActionButton() {
	    _classCallCheck(this, CalendarActionButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CalendarActionButton).apply(this, arguments));
	  }
	
	  _createClass(CalendarActionButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var cancelLabel = _props.cancelLabel;
	      var okLabel = _props.okLabel;
	      var wordings = _props.wordings;
	
	
	      var styles = {
	        root: {
	          display: 'flex',
	          flexDirection: 'row',
	          justifyContent: 'flex-end',
	          margin: 0,
	          maxHeight: 48,
	          padding: 0
	        },
	        flatButtons: {
	          fontsize: 14,
	          margin: '4px 8px 8px 0px',
	          maxHeight: 36,
	          minWidth: 64,
	          padding: 0
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.root },
	        _react2.default.createElement(_FlatButton2.default, {
	          label: wordings ? wordings.cancel : cancelLabel,
	          onTouchTap: this.props.onTouchTapCancel,
	          primary: true,
	          style: styles.flatButtons
	        }),
	        !this.props.autoOk && _react2.default.createElement(_FlatButton2.default, {
	          disabled: this.refs.calendar !== undefined && this.refs.calendar.isSelectedDateDisabled(),
	          label: wordings ? wordings.ok : okLabel,
	          onTouchTap: this.props.onTouchTapOk,
	          primary: true,
	          style: styles.flatButtons
	        })
	      );
	    }
	  }]);
	
	  return CalendarActionButton;
	}(_react.Component);
	
	CalendarActionButton.propTypes = {
	  autoOk: _react.PropTypes.bool,
	  cancelLabel: _react.PropTypes.node,
	  okLabel: _react.PropTypes.node,
	  onTouchTapCancel: _react.PropTypes.func,
	  onTouchTapOk: _react.PropTypes.func,
	  wordings: _react.PropTypes.object
	};
	exports.default = CalendarActionButton;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dateUtils = __webpack_require__(517);
	
	var _DayButton = __webpack_require__(525);
	
	var _DayButton2 = _interopRequireDefault(_DayButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarMonth = function (_Component) {
	  _inherits(CalendarMonth, _Component);
	
	  function CalendarMonth() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CalendarMonth);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CalendarMonth)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapDay = function (event, date) {
	      if (_this.props.onTouchTapDay) _this.props.onTouchTapDay(event, date);
	    }, _this.styles = {
	      root: {
	        display: 'flex',
	        flexDirection: 'column',
	        justifyContent: 'flex-start',
	        fontWeight: 400,
	        height: 228,
	        lineHeight: 2,
	        position: 'relative',
	        textAlign: 'center',
	        MozPaddingStart: 0
	      },
	      week: {
	        display: 'flex',
	        flexDirection: 'row',
	        justifyContent: 'space-around',
	        height: 34,
	        marginBottom: 2
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(CalendarMonth, [{
	    key: 'isSelectedDateDisabled',
	    value: function isSelectedDateDisabled() {
	      return this.selectedDateDisabled;
	    }
	  }, {
	    key: 'shouldDisableDate',
	    value: function shouldDisableDate(day) {
	      if (day === null) return false;
	      var disabled = !(0, _dateUtils.isBetweenDates)(day, this.props.minDate, this.props.maxDate);
	      if (!disabled && this.props.shouldDisableDate) disabled = this.props.shouldDisableDate(day);
	
	      return disabled;
	    }
	  }, {
	    key: 'getWeekElements',
	    value: function getWeekElements() {
	      var _this2 = this;
	
	      var weekArray = (0, _dateUtils.getWeekArray)(this.props.displayDate, this.props.firstDayOfWeek);
	
	      return weekArray.map(function (week, i) {
	        return _react2.default.createElement(
	          'div',
	          { key: i, style: _this2.styles.week },
	          _this2.getDayElements(week, i)
	        );
	      }, this);
	    }
	  }, {
	    key: 'getDayElements',
	    value: function getDayElements(week, i) {
	      var _this3 = this;
	
	      return week.map(function (day, j) {
	        var isSameDate = (0, _dateUtils.isEqualDate)(_this3.props.selectedDate, day);
	        var disabled = _this3.shouldDisableDate(day);
	        var selected = !disabled && isSameDate;
	
	        if (isSameDate) {
	          _this3.selectedDateDisabled = disabled;
	        }
	
	        return _react2.default.createElement(_DayButton2.default, {
	          date: day,
	          disabled: disabled,
	          key: 'db' + (i + j),
	          onTouchTap: _this3.handleTouchTapDay,
	          selected: selected
	        });
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: this.styles.root },
	        this.getWeekElements()
	      );
	    }
	  }]);
	
	  return CalendarMonth;
	}(_react.Component);
	
	CalendarMonth.propTypes = {
	  autoOk: _react.PropTypes.bool,
	  displayDate: _react.PropTypes.object.isRequired,
	  firstDayOfWeek: _react.PropTypes.number,
	  maxDate: _react.PropTypes.object,
	  minDate: _react.PropTypes.object,
	  onTouchTapDay: _react.PropTypes.func,
	  selectedDate: _react.PropTypes.object.isRequired,
	  shouldDisableDate: _react.PropTypes.func
	};
	exports.default = CalendarMonth;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _dateUtils = __webpack_require__(517);
	
	var _EnhancedButton = __webpack_require__(441);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var date = props.date;
	  var disabled = props.disabled;
	  var selected = props.selected;
	  var hover = state.hover;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var datePicker = _context$muiTheme.datePicker;
	
	
	  var labelColor = baseTheme.palette.textColor;
	  var buttonStateOpacity = 0;
	  var buttonStateTransform = 'scale(0)';
	
	  if (hover || selected) {
	    labelColor = datePicker.selectTextColor;
	    buttonStateOpacity = selected ? 1 : 0.6;
	    buttonStateTransform = 'scale(1)';
	  } else if ((0, _dateUtils.isEqualDate)(date, new Date())) {
	    labelColor = datePicker.color;
	  }
	
	  return {
	    root: {
	      boxSizing: 'border-box',
	      fontWeight: '400',
	      opacity: disabled && '0.6',
	      padding: '4px 0px',
	      position: 'relative',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      width: 42
	    },
	    label: {
	      color: labelColor,
	      fontWeight: '400',
	      position: 'relative'
	    },
	    buttonState: {
	      backgroundColor: datePicker.selectColor,
	      borderRadius: '50%',
	      height: 34,
	      left: 4,
	      opacity: buttonStateOpacity,
	      position: 'absolute',
	      top: 0,
	      transform: buttonStateTransform,
	      transition: _transitions2.default.easeOut(),
	      width: 34
	    }
	  };
	}
	
	var DayButton = function (_Component) {
	  _inherits(DayButton, _Component);
	
	  function DayButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DayButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DayButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hover: false
	    }, _this.handleMouseEnter = function () {
	      if (!_this.props.disabled) _this.setState({ hover: true });
	    }, _this.handleMouseLeave = function () {
	      if (!_this.props.disabled) _this.setState({ hover: false });
	    }, _this.handleTouchTap = function (event) {
	      if (!_this.props.disabled && _this.props.onTouchTap) _this.props.onTouchTap(event, _this.props.date);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (!_this.props.disabled && _this.props.onKeyboardFocus) {
	        _this.props.onKeyboardFocus(event, keyboardFocused, _this.props.date);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DayButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var date = _props.date;
	      var onTouchTap = _props.onTouchTap;
	      var selected = _props.selected;
	
	      var other = _objectWithoutProperties(_props, ['date', 'onTouchTap', 'selected']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return this.props.date ? _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          disabled: this.props.disabled,
	          disableFocusRipple: true,
	          disableTouchRipple: true,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchTap: this.handleTouchTap,
	          style: styles.root
	        }),
	        _react2.default.createElement('div', { style: prepareStyles(styles.buttonState) }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          this.props.date.getDate()
	        )
	      ) : _react2.default.createElement('span', { style: prepareStyles(styles.root) });
	    }
	  }]);
	
	  return DayButton;
	}(_react.Component);
	
	DayButton.propTypes = {
	  date: _react.PropTypes.object,
	  disabled: _react.PropTypes.bool,
	  onKeyboardFocus: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  selected: _react.PropTypes.bool
	};
	DayButton.defaultProps = {
	  selected: false,
	  disabled: false
	};
	DayButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = DayButton;

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _YearButton = __webpack_require__(527);
	
	var _YearButton2 = _interopRequireDefault(_YearButton);
	
	var _dateUtils = __webpack_require__(517);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarYear = function (_Component) {
	  _inherits(CalendarYear, _Component);
	
	  function CalendarYear() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CalendarYear);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CalendarYear)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapYear = function (event, year) {
	      if (_this.props.onTouchTapYear) _this.props.onTouchTapYear(event, year);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(CalendarYear, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollToSelectedYear();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollToSelectedYear();
	    }
	  }, {
	    key: 'getYears',
	    value: function getYears() {
	      var minYear = this.props.minDate.getFullYear();
	      var maxYear = this.props.maxDate.getFullYear();
	
	      var years = [];
	      var dateCheck = (0, _dateUtils.cloneDate)(this.props.selectedDate);
	      for (var year = minYear; year <= maxYear; year++) {
	        dateCheck.setFullYear(year);
	        var selected = this.props.selectedDate.getFullYear() === year;
	        var selectedProps = {};
	        if (selected) {
	          selectedProps = { ref: 'selectedYearButton' };
	        }
	
	        var yearButton = _react2.default.createElement(_YearButton2.default, _extends({
	          key: 'yb' + year,
	          onTouchTap: this.handleTouchTapYear,
	          selected: selected,
	          year: year
	        }, selectedProps));
	
	        years.push(yearButton);
	      }
	
	      return years;
	    }
	  }, {
	    key: 'scrollToSelectedYear',
	    value: function scrollToSelectedYear() {
	      if (this.refs.selectedYearButton === undefined) return;
	
	      var container = _reactDom2.default.findDOMNode(this);
	      var yearButtonNode = _reactDom2.default.findDOMNode(this.refs.selectedYearButton);
	
	      var containerHeight = container.clientHeight;
	      var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;
	
	      var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
	      container.scrollTop = scrollYOffset;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var years = this.getYears();
	      var backgroundColor = this.context.muiTheme.datePicker.calendarYearBackgroundColor;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = {
	        root: {
	          backgroundColor: backgroundColor,
	          height: 'inherit',
	          lineHeight: '35px',
	          overflowX: 'hidden',
	          overflowY: 'scroll',
	          position: 'relative'
	        },
	        child: {
	          display: 'flex',
	          flexDirection: 'column',
	          justifyContent: 'center',
	          minHeight: '100%'
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(styles.root) },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.child) },
	          years
	        )
	      );
	    }
	  }]);
	
	  return CalendarYear;
	}(_react.Component);
	
	CalendarYear.propTypes = {
	  displayDate: _react.PropTypes.object.isRequired,
	  maxDate: _react.PropTypes.object,
	  minDate: _react.PropTypes.object,
	  onTouchTapYear: _react.PropTypes.func,
	  selectedDate: _react.PropTypes.object.isRequired,
	  wordings: _react.PropTypes.object
	};
	CalendarYear.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CalendarYear;

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EnhancedButton = __webpack_require__(441);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var selected = props.selected;
	  var year = props.year;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var datePicker = _context$muiTheme.datePicker;
	  var hover = state.hover;
	
	
	  return {
	    root: {
	      boxSizing: 'border-box',
	      color: year === new Date().getFullYear() && datePicker.color,
	      display: 'block',
	      fontSize: 14,
	      margin: '0 auto',
	      position: 'relative',
	      textAlign: 'center',
	      lineHeight: 'inherit',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
	    label: {
	      alignSelf: 'center',
	      color: hover || selected ? datePicker.color : baseTheme.palette.textColor,
	      fontSize: selected ? 26 : 17,
	      fontWeight: hover ? 450 : selected ? 500 : 400,
	      position: 'relative',
	      top: -1
	    }
	  };
	}
	
	var YearButton = function (_Component) {
	  _inherits(YearButton, _Component);
	
	  function YearButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, YearButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(YearButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hover: false
	    }, _this.handleMouseEnter = function () {
	      _this.setState({ hover: true });
	    }, _this.handleMouseLeave = function () {
	      _this.setState({ hover: false });
	    }, _this.handleTouchTap = function (event) {
	      if (_this.props.onTouchTap) _this.props.onTouchTap(event, _this.props.year);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(YearButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var year = _props.year;
	      var onTouchTap = _props.onTouchTap;
	      var selected = _props.selected;
	
	      var other = _objectWithoutProperties(_props, ['className', 'year', 'onTouchTap', 'selected']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          disableFocusRipple: true,
	          disableTouchRipple: true,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchTap: this.handleTouchTap,
	          style: styles.root
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          year
	        )
	      );
	    }
	  }]);
	
	  return YearButton;
	}(_react.Component);
	
	YearButton.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  onTouchTap: _react.PropTypes.func,
	  selected: _react.PropTypes.bool,
	  year: _react.PropTypes.number
	};
	YearButton.defaultProps = {
	  selected: false
	};
	YearButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = YearButton;

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconButton = __webpack_require__(455);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _chevronLeft = __webpack_require__(529);
	
	var _chevronLeft2 = _interopRequireDefault(_chevronLeft);
	
	var _chevronRight = __webpack_require__(530);
	
	var _chevronRight2 = _interopRequireDefault(_chevronRight);
	
	var _SlideIn = __webpack_require__(531);
	
	var _SlideIn2 = _interopRequireDefault(_SlideIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  root: {
	    display: 'flex',
	    justifyContent: 'space-between',
	    backgroundColor: 'inherit',
	    height: 48
	  },
	  titleDiv: {
	    fontSize: 14,
	    fontWeight: '500',
	    textAlign: 'center',
	    width: '100%'
	  },
	  titleText: {
	    height: 'inherit',
	    paddingTop: 12
	  }
	};
	
	var CalendarToolbar = function (_Component) {
	  _inherits(CalendarToolbar, _Component);
	
	  function CalendarToolbar() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CalendarToolbar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CalendarToolbar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      transitionDirection: 'up'
	    }, _this.handleTouchTapPrevMonth = function () {
	      if (_this.props.onMonthChange && _this.props.prevMonth) _this.props.onMonthChange(-1);
	    }, _this.handleTouchTapNextMonth = function () {
	      if (_this.props.onMonthChange && _this.props.nextMonth) _this.props.onMonthChange(1);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(CalendarToolbar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.displayDate !== this.props.displayDate) {
	        var direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right';
	        this.setState({
	          transitionDirection: direction
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var DateTimeFormat = _props.DateTimeFormat;
	      var locale = _props.locale;
	      var displayDate = _props.displayDate;
	
	
	      var dateTimeFormatted = new DateTimeFormat(locale, {
	        month: 'long',
	        year: 'numeric'
	      }).format(displayDate);
	
	      var nextButtonIcon = this.context.muiTheme.isRtl ? _react2.default.createElement(_chevronLeft2.default, null) : _react2.default.createElement(_chevronRight2.default, null);
	      var prevButtonIcon = this.context.muiTheme.isRtl ? _react2.default.createElement(_chevronRight2.default, null) : _react2.default.createElement(_chevronLeft2.default, null);
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.root },
	        _react2.default.createElement(
	          _IconButton2.default,
	          {
	            disabled: !this.props.prevMonth,
	            onTouchTap: this.handleTouchTapPrevMonth
	          },
	          prevButtonIcon
	        ),
	        _react2.default.createElement(
	          _SlideIn2.default,
	          {
	            direction: this.state.transitionDirection,
	            style: styles.titleDiv
	          },
	          _react2.default.createElement(
	            'div',
	            { key: dateTimeFormatted, style: styles.titleText },
	            dateTimeFormatted
	          )
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          {
	            disabled: !this.props.nextMonth,
	            onTouchTap: this.handleTouchTapNextMonth
	          },
	          nextButtonIcon
	        )
	      );
	    }
	  }]);
	
	  return CalendarToolbar;
	}(_react.Component);
	
	CalendarToolbar.propTypes = {
	  DateTimeFormat: _react.PropTypes.func.isRequired,
	  displayDate: _react.PropTypes.object.isRequired,
	  locale: _react.PropTypes.string.isRequired,
	  nextMonth: _react.PropTypes.bool,
	  onMonthChange: _react.PropTypes.func,
	  prevMonth: _react.PropTypes.bool
	};
	CalendarToolbar.defaultProps = {
	  nextMonth: true,
	  prevMonth: true
	};
	CalendarToolbar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CalendarToolbar;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(429);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(438);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationChevronLeft = function NavigationChevronLeft(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
	  );
	};
	NavigationChevronLeft = (0, _pure2.default)(NavigationChevronLeft);
	NavigationChevronLeft.displayName = 'NavigationChevronLeft';
	NavigationChevronLeft.muiName = 'SvgIcon';
	
	exports.default = NavigationChevronLeft;

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(429);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(438);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationChevronRight = function NavigationChevronRight(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
	  );
	};
	NavigationChevronRight = (0, _pure2.default)(NavigationChevronRight);
	NavigationChevronRight.displayName = 'NavigationChevronRight';
	NavigationChevronRight.muiName = 'SvgIcon';
	
	exports.default = NavigationChevronRight;

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(448);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _SlideInChild = __webpack_require__(532);
	
	var _SlideInChild2 = _interopRequireDefault(_SlideInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SlideIn = function (_Component) {
	  _inherits(SlideIn, _Component);
	
	  function SlideIn() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SlideIn);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SlideIn)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getLeaveDirection = function () {
	      return _this.props.direction;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SlideIn, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var enterDelay = _props.enterDelay;
	      var children = _props.children;
	      var childStyle = _props.childStyle;
	      var direction = _props.direction;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['enterDelay', 'children', 'childStyle', 'direction', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _SlideInChild2.default,
	          {
	            key: child.key,
	            direction: direction,
	            enterDelay: enterDelay,
	            getLeaveDirection: _this2.getLeaveDirection,
	            style: childStyle
	          },
	          child
	        );
	      }, this);
	
	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        _extends({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	
	  return SlideIn;
	}(_react.Component);
	
	SlideIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  direction: _react.PropTypes.oneOf(['left', 'right', 'up', 'down']),
	  enterDelay: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	SlideIn.defaultProps = {
	  enterDelay: 0,
	  direction: 'left'
	};
	SlideIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = SlideIn;

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(409);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SlideInChild = function (_Component) {
	  _inherits(SlideInChild, _Component);
	
	  function SlideInChild() {
	    _classCallCheck(this, SlideInChild);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SlideInChild).apply(this, arguments));
	  }
	
	  _createClass(SlideInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var x = this.props.direction === 'left' ? '100%' : this.props.direction === 'right' ? '-100%' : '0';
	      var y = this.props.direction === 'up' ? '100%' : this.props.direction === 'down' ? '-100%' : '0';
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'translate(0,0)');
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var direction = this.props.getLeaveDirection();
	      var x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
	      var y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var enterDelay = _props.enterDelay;
	      var getLeaveDirection = _props.getLeaveDirection;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'getLeaveDirection', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	
	  return SlideInChild;
	}(_react.Component);
	
	SlideInChild.propTypes = {
	  children: _react.PropTypes.node,
	  direction: _react.PropTypes.string,
	  enterDelay: _react.PropTypes.number,
	  // This callback is needed bacause the direction could change when leaving the DOM
	  getLeaveDirection: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	SlideInChild.defaultProps = {
	  enterDelay: 0
	};
	SlideInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = SlideInChild;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _SlideIn = __webpack_require__(531);
	
	var _SlideIn2 = _interopRequireDefault(_SlideIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var datePicker = context.muiTheme.datePicker;
	  var selectedYear = state.selectedYear;
	
	  var isLandscape = props.mode === 'landscape';
	
	  var styles = {
	    root: {
	      width: isLandscape ? 165 : '100%',
	      height: isLandscape ? 330 : 'auto',
	      float: isLandscape ? 'left' : 'none',
	      fontWeight: 700,
	      display: 'inline-block',
	      backgroundColor: datePicker.selectColor,
	      borderTopLeftRadius: 2,
	      borderTopRightRadius: isLandscape ? 0 : 2,
	      borderBottomLeftRadius: isLandscape ? 2 : 0,
	      color: datePicker.textColor,
	      padding: 20,
	      boxSizing: 'border-box'
	    },
	    monthDay: {
	      display: 'block',
	      fontSize: 36,
	      lineHeight: '36px',
	      height: props.mode === 'landscape' ? '100%' : 38,
	      opacity: selectedYear ? 0.7 : 1,
	      transition: _transitions2.default.easeOut(),
	      width: '100%',
	      fontWeight: '500'
	    },
	    monthDayTitle: {
	      cursor: !selectedYear ? 'default' : 'pointer',
	      width: '100%',
	      display: 'block'
	    },
	    year: {
	      margin: 0,
	      fontSize: 16,
	      fontWeight: '500',
	      lineHeight: '16px',
	      height: 16,
	      opacity: selectedYear ? 1 : 0.7,
	      transition: _transitions2.default.easeOut(),
	      marginBottom: 10
	    },
	    yearTitle: {
	      cursor: props.disableYearSelection ? 'not-allowed' : !selectedYear ? 'pointer' : 'default'
	    }
	  };
	
	  return styles;
	}
	
	var DateDisplay = function (_Component) {
	  _inherits(DateDisplay, _Component);
	
	  function DateDisplay() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DateDisplay);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateDisplay)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      selectedYear: false,
	      transitionDirection: 'up'
	    }, _this.handleTouchTapMonthDay = function () {
	      if (_this.props.onTouchTapMonthDay && _this.state.selectedYear) {
	        _this.props.onTouchTapMonthDay();
	      }
	
	      _this.setState({ selectedYear: false });
	    }, _this.handleTouchTapYear = function () {
	      if (_this.props.onTouchTapYear && !_this.props.disableYearSelection && !_this.state.selectedYear) {
	        _this.props.onTouchTapYear();
	      }
	
	      if (!_this.props.disableYearSelection) {
	        _this.setState({ selectedYear: true });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DateDisplay, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (!this.props.monthDaySelected) {
	        this.setState({ selectedYear: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedDate !== this.props.selectedDate) {
	        var direction = nextProps.selectedDate > this.props.selectedDate ? 'up' : 'down';
	        this.setState({
	          transitionDirection: direction
	        });
	      }
	
	      if (nextProps.monthDaySelected !== undefined) {
	        this.setState({
	          selectedYear: !nextProps.monthDaySelected
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var DateTimeFormat = _props.DateTimeFormat;
	      var disableYearSelection = _props.disableYearSelection;
	      var locale = _props.locale;
	      var mode = _props.mode;
	      var monthDaySelected = _props.monthDaySelected;
	      var onTouchTapMonthDay = _props.onTouchTapMonthDay;
	      var onTouchTapYear = _props.onTouchTapYear;
	      var selectedDate = _props.selectedDate;
	      var style = _props.style;
	      var weekCount = _props.weekCount;
	
	      var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'disableYearSelection', 'locale', 'mode', 'monthDaySelected', 'onTouchTapMonthDay', 'onTouchTapYear', 'selectedDate', 'style', 'weekCount']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var year = selectedDate.getFullYear();
	
	      var dateTimeFormatted = new DateTimeFormat(locale, {
	        month: 'short',
	        weekday: 'short',
	        day: '2-digit'
	      }).format(selectedDate);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(styles.root, style) }),
	        _react2.default.createElement(
	          _SlideIn2.default,
	          {
	            style: styles.year,
	            direction: this.state.transitionDirection
	          },
	          _react2.default.createElement(
	            'div',
	            { key: year, style: styles.yearTitle, onTouchTap: this.handleTouchTapYear },
	            year
	          )
	        ),
	        _react2.default.createElement(
	          _SlideIn2.default,
	          {
	            style: styles.monthDay,
	            direction: this.state.transitionDirection
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              key: dateTimeFormatted,
	              onTouchTap: this.handleTouchTapMonthDay,
	              style: styles.monthDayTitle
	            },
	            dateTimeFormatted
	          )
	        )
	      );
	    }
	  }]);
	
	  return DateDisplay;
	}(_react.Component);
	
	DateDisplay.propTypes = {
	  DateTimeFormat: _react.PropTypes.func.isRequired,
	  disableYearSelection: _react.PropTypes.bool,
	  locale: _react.PropTypes.string.isRequired,
	  mode: _react.PropTypes.oneOf(['portrait', 'landscape']),
	  monthDaySelected: _react.PropTypes.bool,
	  onTouchTapMonthDay: _react.PropTypes.func,
	  onTouchTapYear: _react.PropTypes.func,
	  selectedDate: _react.PropTypes.object.isRequired,
	  style: _react.PropTypes.object,
	  weekCount: _react.PropTypes.number
	};
	DateDisplay.defaultProps = {
	  disableYearSelection: false,
	  monthDaySelected: true,
	  weekCount: 4
	};
	DateDisplay.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = DateDisplay;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Snackbar = __webpack_require__(538);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Snackbar2.default;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ClickAwayListener = __webpack_require__(467);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _SnackbarBody = __webpack_require__(539);
	
	var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight;
	  var zIndex = _context$muiTheme.zIndex;
	  var open = state.open;
	
	
	  var styles = {
	    root: {
	      position: 'fixed',
	      left: 0,
	      display: 'flex',
	      right: 0,
	      bottom: 0,
	      zIndex: zIndex.snackbar,
	      visibility: open ? 'visible' : 'hidden',
	      transform: open ? 'translate(0, 0)' : 'translate(0, ' + desktopSubheaderHeight + 'px)',
	      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
	    }
	  };
	
	  return styles;
	}
	
	var Snackbar = function (_Component) {
	  _inherits(Snackbar, _Component);
	
	  function Snackbar() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Snackbar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Snackbar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentClickAway = function () {
	      if (_this.timerTransitionId) {
	        // If transitioning, don't close the snackbar.
	        return;
	      }
	
	      if (_this.props.open !== null && _this.props.onRequestClose) {
	        _this.props.onRequestClose('clickaway');
	      } else {
	        _this.setState({ open: false });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Snackbar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open,
	        message: this.props.message,
	        action: this.props.action
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.open) {
	        this.setAutoHideTimer();
	        this.setTransitionTimer();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
	        this.setState({
	          open: false
	        });
	
	        clearTimeout(this.timerOneAtTheTimeId);
	        this.timerOneAtTheTimeId = setTimeout(function () {
	          _this2.setState({
	            message: nextProps.message,
	            action: nextProps.action,
	            open: true
	          });
	        }, 400);
	      } else {
	        var open = nextProps.open;
	
	        this.setState({
	          open: open !== null ? open : this.state.open,
	          message: nextProps.message,
	          action: nextProps.action
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevState.open !== this.state.open) {
	        if (this.state.open) {
	          this.setAutoHideTimer();
	          this.setTransitionTimer();
	        } else {
	          clearTimeout(this.timerAutoHideId);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerAutoHideId);
	      clearTimeout(this.timerTransitionId);
	      clearTimeout(this.timerOneAtTheTimeId);
	    }
	  }, {
	    key: 'setAutoHideTimer',
	
	
	    // Timer that controls delay before snackbar auto hides
	    value: function setAutoHideTimer() {
	      var _this3 = this;
	
	      var autoHideDuration = this.props.autoHideDuration;
	
	      if (autoHideDuration > 0) {
	        clearTimeout(this.timerAutoHideId);
	        this.timerAutoHideId = setTimeout(function () {
	          if (_this3.props.open !== null && _this3.props.onRequestClose) {
	            _this3.props.onRequestClose('timeout');
	          } else {
	            _this3.setState({ open: false });
	          }
	        }, autoHideDuration);
	      }
	    }
	
	    // Timer that controls delay before click-away events are captured (based on when animation completes)
	
	  }, {
	    key: 'setTransitionTimer',
	    value: function setTransitionTimer() {
	      var _this4 = this;
	
	      this.timerTransitionId = setTimeout(function () {
	        _this4.timerTransitionId = undefined;
	      }, 400);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var autoHideDuration = _props.autoHideDuration;
	      var messageProp = _props.message;
	      var onRequestClose = _props.onRequestClose;
	      var onActionTouchTap = _props.onActionTouchTap;
	      var style = _props.style;
	      var bodyStyle = _props.bodyStyle;
	
	      var other = _objectWithoutProperties(_props, ['autoHideDuration', 'message', 'onRequestClose', 'onActionTouchTap', 'style', 'bodyStyle']);
	
	      var _state = this.state;
	      var action = _state.action;
	      var message = _state.message;
	      var open = _state.open;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: open && this.componentClickAway },
	        _react2.default.createElement(
	          'div',
	          _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	          _react2.default.createElement(_SnackbarBody2.default, {
	            open: open,
	            message: message,
	            action: action,
	            style: bodyStyle,
	            onActionTouchTap: onActionTouchTap
	          })
	        )
	      );
	    }
	  }]);
	
	  return Snackbar;
	}(_react.Component);
	
	Snackbar.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.node,
	  /**
	   * The number of milliseconds to wait before automatically dismissing.
	   * If no value is specified the snackbar will dismiss normally.
	   * If a value is provided the snackbar can still be dismissed normally.
	   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
	   */
	  autoHideDuration: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the body element.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
	   * `autoHideDuration` timer expires.
	   *
	   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
	   * `open` prop.
	   *
	   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
	   * for example ignoring `clickaway`.
	   *
	   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Snackbar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Snackbar;

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SnackbarBody = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(406);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(410);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _withWidth = __webpack_require__(540);
	
	var _withWidth2 = _interopRequireDefault(_withWidth);
	
	var _FlatButton = __webpack_require__(521);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getStyles(props, context) {
	  var open = props.open;
	  var width = props.width;
	  var _context$muiTheme = context.muiTheme;
	  var _context$muiTheme$bas = _context$muiTheme.baseTheme;
	  var _context$muiTheme$bas2 = _context$muiTheme$bas.spacing;
	  var desktopGutter = _context$muiTheme$bas2.desktopGutter;
	  var desktopSubheaderHeight = _context$muiTheme$bas2.desktopSubheaderHeight;
	  var fontFamily = _context$muiTheme$bas.fontFamily;
	  var _context$muiTheme$sna = _context$muiTheme.snackbar;
	  var backgroundColor = _context$muiTheme$sna.backgroundColor;
	  var textColor = _context$muiTheme$sna.textColor;
	  var actionColor = _context$muiTheme$sna.actionColor;
	
	
	  var isSmall = width === _withWidth.SMALL;
	
	  var styles = {
	    root: {
	      fontFamily: fontFamily,
	      backgroundColor: backgroundColor,
	      padding: '0 ' + desktopGutter + 'px',
	      height: desktopSubheaderHeight,
	      lineHeight: desktopSubheaderHeight + 'px',
	      borderRadius: isSmall ? 0 : 2,
	      maxWidth: isSmall ? 'inherit' : 568,
	      minWidth: isSmall ? 'inherit' : 288,
	      flexGrow: isSmall ? 1 : 0,
	      margin: 'auto'
	    },
	    content: {
	      fontSize: 14,
	      color: textColor,
	      opacity: open ? 1 : 0,
	      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
	    },
	    action: {
	      color: actionColor,
	      float: 'right',
	      marginTop: 6,
	      marginRight: -16,
	      marginLeft: desktopGutter,
	      backgroundColor: 'transparent'
	    }
	  };
	
	  return styles;
	}
	
	var SnackbarBody = exports.SnackbarBody = function SnackbarBody(props, context) {
	  var open = props.open;
	  var action = props.action;
	  var message = props.message;
	  var onActionTouchTap = props.onActionTouchTap;
	  var style = props.style;
	
	  var other = _objectWithoutProperties(props, ['open', 'action', 'message', 'onActionTouchTap', 'style']);
	
	  var prepareStyles = context.muiTheme.prepareStyles;
	
	  var styles = getStyles(props, context);
	
	  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
	    style: styles.action,
	    label: action,
	    onTouchTap: onActionTouchTap
	  });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    _react2.default.createElement(
	      'div',
	      { style: prepareStyles(styles.content) },
	      _react2.default.createElement(
	        'span',
	        null,
	        message
	      ),
	      actionButton
	    )
	  );
	};
	
	SnackbarBody.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.node,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * @ignore
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * @ignore
	   * Width of the screen.
	   */
	  width: _react.PropTypes.number.isRequired
	};
	
	SnackbarBody.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	exports.default = (0, _withWidth2.default)()(SnackbarBody);

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = withWidth;
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactEventListener = __webpack_require__(407);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SMALL = exports.SMALL = 1;
	var MEDIUM = exports.MEDIUM = 2;
	var LARGE = exports.LARGE = 3;
	
	function withWidth() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$largeWidth = options.largeWidth;
	  var largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth;
	  var _options$mediumWidth = options.mediumWidth;
	  var mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth;
	  var _options$resizeInterv = options.resizeInterval;
	  var resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;
	
	
	  return function (MyComponent) {
	    return function (_Component) {
	      _inherits(WithWidth, _Component);
	
	      function WithWidth() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, WithWidth);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(WithWidth)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	          /**
	           * For the server side rendering,
	           * let's set the width for the slower environment.
	           */
	          width: SMALL
	        }, _this.handleResize = function () {
	          clearTimeout(_this.deferTimer);
	          _this.deferTimer = setTimeout(function () {
	            _this.updateWidth();
	          }, resizeInterval);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(WithWidth, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.updateWidth();
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          clearTimeout(this.deferTimer);
	        }
	      }, {
	        key: 'updateWidth',
	        value: function updateWidth() {
	          var innerWidth = window.innerWidth;
	          var width = void 0;
	
	          if (innerWidth >= largeWidth) {
	            width = LARGE;
	          } else if (innerWidth >= mediumWidth) {
	            width = MEDIUM;
	          } else {
	            // innerWidth < 768
	            width = SMALL;
	          }
	
	          if (width !== this.state.width) {
	            this.setState({
	              width: width
	            });
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(
	            _reactEventListener2.default,
	            { target: 'window', onResize: this.handleResize },
	            _react2.default.createElement(MyComponent, _extends({}, this.props, {
	              width: this.state.width
	            }))
	          );
	        }
	      }]);
	
	      return WithWidth;
	    }(_react.Component);
	  };
	}

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(478);
	
	var _dispatcher = __webpack_require__(472);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _constants = __webpack_require__(476);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TempSessionStore = new _utils.Store(_dispatcher2.default);
	var cachedSession = null;
	
	var setCachedSession = function setCachedSession(session) {
	  cachedSession = session;
	};
	
	TempSessionStore.findCachedSession = function () {
	  return cachedSession;
	};
	
	TempSessionStore.__onDispatch = function (payload) {
	  switch (payload.actionType) {
	    case _constants.RECEIVED_CACHED_SESSION:
	      setCachedSession(payload.session);
	      TempSessionStore.__emitChange();
	      break;
	    default:
	      break;
	  }
	};
	
	exports.default = TempSessionStore;

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(478);
	
	var _dispatcher = __webpack_require__(472);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _constants = __webpack_require__(476);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var pdfs = null;
	var error = null;
	var PDFStore = new _utils.Store(_dispatcher2.default);
	
	var setPDF = function setPDF(ps) {
	  pdfs = ps;
	};
	var setError = function setError(e) {
	  error = e.responseText;
	};
	PDFStore.getPDF = function () {
	  return pdfs;
	};
	PDFStore.getError = function () {
	  var err = error;
	  error = null;
	  return err;
	};
	
	PDFStore.clearPDF = function () {
	  pdfs = null;
	};
	
	PDFStore.__onDispatch = function (payload) {
	  switch (payload.actionType) {
	    case _constants.GENERATED_PDF:
	      setPDF(payload.pdfs);
	      PDFStore.__emitChange();
	      break;
	    case _constants.PDF_ERROR:
	      setError(payload.error);
	      PDFStore.__emitChange();
	      break;
	    default:
	      break;
	  }
	};
	
	exports.default = PDFStore;

/***/ },

/***/ 648:
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
	
	var _TextField = __webpack_require__(497);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _IconButton = __webpack_require__(456);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _close = __webpack_require__(649);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _clientActions = __webpack_require__(643);
	
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
	
	var PlayerForm = function (_React$Component) {
	  _inherits(PlayerForm, _React$Component);
	
	  function PlayerForm(props) {
	    _classCallCheck(this, PlayerForm);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerForm).call(this, props));
	
	    _this.handleSubmit = function () {
	      (0, _clientActions.addPlayer)(_clubStore2.default.getCurrentClub()._id, _this.state);
	      _this.setState({ name: "", rating: "0" });
	      _this.props.closeModal();
	    };
	
	    _this.state = {
	      name: "",
	      rating: "0"
	    };
	    return _this;
	  }
	
	  _createClass(PlayerForm, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      if (!prevProps.modalOpen && this.props.modalOpen) {
	        document.getElementById("name").focus();
	      }
	    }
	  }, {
	    key: "updateField",
	    value: function updateField(name, e) {
	      this.setState(_defineProperty({}, name, e.target.value));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement("div", {
	        className: "player-form",
	        style: { display: this.props.modalOpen ? "block" : "none" }
	      }, _react2.default.createElement("form", null, _react2.default.createElement(_IconButton2.default, {
	        style: { position: "absolute", right: "10px", top: "10px" },
	        iconClassName: "material-icons",
	        onClick: this.props.closeModal,
	        tooltip: "Close Form", touch: Boolean(true)
	      }, _react2.default.createElement(_close2.default, null)), _react2.default.createElement("h3", null, "Player Form"), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        floatingLabelText: "Name",
	        id: "name",
	        hintText: "Name",
	        onChange: function onChange(e) {
	          return _this2.updateField("name", e);
	        },
	        value: this.state.name,
	        required: true
	      })), _react2.default.createElement("div", null, _react2.default.createElement(_TextField2.default, {
	        type: "text",
	        floatingLabelText: "Rating",
	        hintText: "Rating",
	        onChange: function onChange(e) {
	          return _this2.updateField("rating", e);
	        },
	        value: this.state.rating, pattern: "^\\d{2,4}$",
	        required: true
	      })), _react2.default.createElement(_RaisedButton2.default, {
	        fullWidth: Boolean(true),
	        label: "Register Player",
	        style: { marginTop: "20px" },
	        onTouchTap: this.handleSubmit
	      })));
	    }
	  }]);
	
	  return PlayerForm;
	}(_react2.default.Component);
	
	PlayerForm.propTypes = {
	  modalOpen: _react.PropTypes.bool,
	  closeModal: _react.PropTypes.func
	};
	exports.default = PlayerForm;

/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(170);
	var IconBase = __webpack_require__(650);
	
	var MdClose = function (_React$Component) {
	    _inherits(MdClose, _React$Component);
	
	    function MdClose() {
	        _classCallCheck(this, MdClose);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdClose).apply(this, arguments));
	    }
	
	    _createClass(MdClose, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z' })
	                )
	            );
	        }
	    }]);
	
	    return MdClose;
	}(React.Component);
	
	exports.default = MdClose;
	module.exports = exports['default'];

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Divider = __webpack_require__(652);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _playerList = __webpack_require__(654);
	
	var _playerList2 = _interopRequireDefault(_playerList);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var style = { position: "relative" };
	
	var PlayerGroup = function PlayerGroup(props) {
	  return _react2.default.createElement("div", { className: "player-lists" }, _react2.default.createElement(_Divider2.default, { style: style }), _react2.default.createElement(_playerList2.default, {
	    players: props.allPlayers,
	    handleToggle: props.handleToggle,
	    title: "All Players",
	    selectable: Boolean(true),
	    addedPlayers: props.objAddedPlayers,
	    deletePlayer: props.deletePlayer
	  }), _react2.default.createElement(_Divider2.default, { style: style }), _react2.default.createElement(_playerList2.default, {
	    players: props.addedPlayers,
	    handleToggle: props.handleToggle,
	    title: "Selected Players",
	    selectable: false,
	    addedPlayers: props.objAddedPlayers
	  }), _react2.default.createElement(_Divider2.default, { style: style }));
	};
	
	PlayerGroup.propTypes = {
	  allPlayers: _react.PropTypes.array,
	  handleToggle: _react.PropTypes.func,
	  objAddedPlayers: _react.PropTypes.object,
	  deletePlayer: _react.PropTypes.func,
	  addedPlayers: _react.PropTypes.array
	};
	
	exports.default = PlayerGroup;

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _IconButton = __webpack_require__(455);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _close = __webpack_require__(649);
	
	var _close2 = _interopRequireDefault(_close);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var PlayerList = function PlayerList(props) {
	  var players = props.players;
	  var idRef = {};
	  var playerList = players.map(function (player, i) {
	    idRef[i] = player._id;
	    return _react2.default.createElement(_Table.TableRow, { key: player._id, selected: !!props.addedPlayers[player._id] }, _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating), !props.deletePlayer ? "" : _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_IconButton2.default, {
	      onClick: function onClick() {
	        return props.deletePlayer(player._id);
	      },
	      iconClassName: "material-icons",
	      tooltip: "Remove Player"
	    }, _react2.default.createElement(_close2.default, null))));
	  });
	
	  return _react2.default.createElement("div", null, _react2.default.createElement("h3", { className: "table-title" }, props.title), _react2.default.createElement(_Table.Table, {
	    height: "400px",
	    fixedHeader: Boolean(true),
	    selectable: Boolean(true),
	    multiSelectable: Boolean(true),
	    onCellClick: function onCellClick(i, col, e) {
	      return props.handleToggle(idRef[i], e);
	    }
	  }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"), props.deletePlayer && _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, {
	    displayRowCheckBox: props.selectable,
	    showRowHover: Boolean(true),
	    deselectOnClickaway: Boolean(false)
	  }, playerList)));
	};
	
	PlayerList.propTypes = {
	  players: _react.PropTypes.array,
	  deletePlayer: _react.PropTypes.func,
	  selectable: _react.PropTypes.bool,
	  handleToggle: _react.PropTypes.func,
	  title: _react.PropTypes.string
	};
	
	exports.default = PlayerList;

/***/ },

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
	            var numPlayers = _this.props.numPlayers;
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

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _IconButton = __webpack_require__(456);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _pictureAsPdf = __webpack_require__(680);
	
	var _pictureAsPdf2 = _interopRequireDefault(_pictureAsPdf);
	
	var _keyboardArrowUp = __webpack_require__(681);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(682);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var moveDownArrow = function moveDownArrow(moveDown, i) {
	  return moveDown && _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    tooltip: "Move one player down",
	    onClick: function onClick() {
	      return moveDown(i);
	    },
	    style: {
	      position: "absolute",
	      left: "30px",
	      bottom: "1px",
	      zIndex: 10
	    }
	  }, _react2.default.createElement(_keyboardArrowDown2.default, null));
	};
	
	var moveUpArrow = function moveUpArrow(moveUp, i) {
	  return moveUp && _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    tooltip: "Move one player up",
	    onClick: function onClick() {
	      return moveUp(i);
	    },
	    style: {
	      position: "absolute",
	      left: "30px",
	      top: "57px",
	      zIndex: 10
	    }
	  }, _react2.default.createElement(_keyboardArrowUp2.default, null));
	};
	
	var ParticipantGroup = function ParticipantGroup(props) {
	  return _react2.default.createElement("div", { style: { position: "relative" } }, _react2.default.createElement(_IconButton2.default, {
	    iconClassName: "material-icons",
	    style: { position: "absolute", right: "0", top: "5px", zIndex: 10 },
	    onClick: props.pdfDownload,
	    disabled: !props.pdfs,
	    tooltip: !props.pdfs ? "You must generate first" : "Download pdf"
	  }, _react2.default.createElement(_pictureAsPdf2.default, null)), _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    fixedHeader: Boolean(true)
	  }, _react2.default.createElement(_Table.TableHeader, {
	    displaySelectAll: false,
	    enableSelectAll: false,
	    adjustForCheckbox: false
	  }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, "Group ", props.groupId + 1), _react2.default.createElement(_Table.TableHeaderColumn, null, "Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Rating"))), _react2.default.createElement(_Table.TableBody, {
	    displayRowCheckbox: false,
	    showRowHover: Boolean(true),
	    style: { position: "relative" }
	  }, props.players.map(function (player, i) {
	    return _react2.default.createElement(_Table.TableRow, { className: "table-row", key: player._id }, _react2.default.createElement(_Table.TableRowColumn, null, i + 1), _react2.default.createElement(_Table.TableRowColumn, null, player.name), _react2.default.createElement(_Table.TableRowColumn, null, player.rating));
	  }))), moveUpArrow(props.moveUp, props.groupId), moveDownArrow(props.moveDown, props.groupId));
	};
	
	ParticipantGroup.propTypes = {
	  pdfDownload: _react.PropTypes.func,
	  pdfs: _react.PropTypes.array,
	  groupId: _react.PropTypes.number,
	  players: _react.PropTypes.array,
	  moveUp: _react.PropTypes.func,
	  moveDown: _react.PropTypes.func
	};
	
	exports.default = ParticipantGroup;

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(170);
	var IconBase = __webpack_require__(650);
	
	var MdPictureAsPdf = function (_React$Component) {
	    _inherits(MdPictureAsPdf, _React$Component);
	
	    function MdPictureAsPdf() {
	        _classCallCheck(this, MdPictureAsPdf);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPictureAsPdf).apply(this, arguments));
	    }
	
	    _createClass(MdPictureAsPdf, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm23.4 19.1v-5h1.6v5h-1.6z m-16.8-9.1v23.4h23.4v3.2h-23.4q-1.3 0-2.3-0.9t-0.9-2.3v-23.4h3.2z m8.4 5.9v-1.8h1.6v1.8h-1.6z m19.1-1.8v-2.5h-5v10h2.5v-3.2h2.5v-2.5h-2.5v-1.8h2.5z m-6.6 5v-5q0-1-0.7-1.7t-1.8-0.8h-4.1v10h4.1q1.1 0 1.8-0.7t0.7-1.8z m-8.4-3.2v-1.8q0-1-0.7-1.7t-1.8-0.8h-4.1v10h2.5v-3.2h1.6q1.1 0 1.8-0.8t0.7-1.7z m14.3-12.5q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-20q-1.4 0-2.4-1t-1-2.4v-20q0-1.3 1-2.3t2.4-0.9h20z' })
	                )
	            );
	        }
	    }]);
	
	    return MdPictureAsPdf;
	}(React.Component);
	
	exports.default = MdPictureAsPdf;
	module.exports = exports['default'];

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(170);
	var IconBase = __webpack_require__(650);
	
	var MdKeyboardArrowUp = function (_React$Component) {
	    _inherits(MdKeyboardArrowUp, _React$Component);
	
	    function MdKeyboardArrowUp() {
	        _classCallCheck(this, MdKeyboardArrowUp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdKeyboardArrowUp).apply(this, arguments));
	    }
	
	    _createClass(MdKeyboardArrowUp, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm12.3 25.7l-2.3-2.3 10-10 10 10-2.3 2.3-7.7-7.7z' })
	                )
	            );
	        }
	    }]);
	
	    return MdKeyboardArrowUp;
	}(React.Component);
	
	exports.default = MdKeyboardArrowUp;
	module.exports = exports['default'];

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(170);
	var IconBase = __webpack_require__(650);
	
	var MdKeyboardArrowDown = function (_React$Component) {
	    _inherits(MdKeyboardArrowDown, _React$Component);
	
	    function MdKeyboardArrowDown() {
	        _classCallCheck(this, MdKeyboardArrowDown);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdKeyboardArrowDown).apply(this, arguments));
	    }
	
	    _createClass(MdKeyboardArrowDown, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                IconBase,
	                _extends({ viewBox: '0 0 40 40' }, this.props),
	                React.createElement(
	                    'g',
	                    null,
	                    React.createElement('path', { d: 'm12.3 13l7.7 7.7 7.7-7.7 2.3 2.4-10 10-10-10z' })
	                )
	            );
	        }
	    }]);
	
	    return MdKeyboardArrowDown;
	}(React.Component);
	
	exports.default = MdKeyboardArrowDown;
	module.exports = exports['default'];

/***/ },

/***/ 683:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var schema = {};
	var findSchemata = function findSchemata(numPlayers) {
	  var rangeOfPlayers = arguments.length <= 1 || arguments[1] === undefined ? [6, 5, 4] : arguments[1];
	
	  if (numPlayers < 0) return null;
	  if (numPlayers === 0) return [[]];
	  var possibilities = [];
	  var recursions = [];
	
	  if (!schema[numPlayers]) {
	    schema[numPlayers] = {};
	  }
	  if (!schema[numPlayers][rangeOfPlayers[0]]) {
	    rangeOfPlayers.forEach(function (range, i) {
	      recursions.push([range, findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
	    });
	
	    if (recursions.every(function (result) {
	      return result[1] === false;
	    })) return null;
	
	    recursions.forEach(function (test) {
	      if (test[1]) {
	        possibilities = possibilities.concat(test[1].map(function (result) {
	          return [test[0]].concat(result);
	        }));
	      }
	    });
	    schema[numPlayers][rangeOfPlayers] = possibilities;
	  }
	
	  return schema[numPlayers][rangeOfPlayers];
	};
	
	exports.default = findSchemata;

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
	
	var _FlatButton = __webpack_require__(521);
	
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

/***/ },

/***/ 685:
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
	
	var _FlatButton = __webpack_require__(521);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _fileUploader = __webpack_require__(686);
	
	var _fileUploader2 = _interopRequireDefault(_fileUploader);
	
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
	
	var UploadDialog = function (_Component) {
	  _inherits(UploadDialog, _Component);
	
	  function UploadDialog() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, UploadDialog);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UploadDialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClose = function () {
	      _this.props.handleClose("uploadDialogOpen");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(UploadDialog, [{
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
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Close",
	        secondary: Boolean(true),
	        onTouchTap: this.handleClose
	      })];
	
	      return _react2.default.createElement(_Dialog2.default, {
	        title: "Upload Players",
	        actions: actions,
	        modal: false,
	        open: this.props.open,
	        onRequestClose: this.handleClose
	      }, _react2.default.createElement(_fileUploader2.default, {
	        handleClose: this.handleClose
	      }));
	    }
	  }]);
	
	  return UploadDialog;
	}(_react.Component);
	
	UploadDialog.propTypes = {
	  open: _react.PropTypes.bool,
	  handleClose: _react.PropTypes.func
	};
	exports.default = UploadDialog;

/***/ },

/***/ 686:
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
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _clientActions = __webpack_require__(643);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
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
	
	var style = {
	  cursor: "pointer",
	  position: "absolute",
	  top: 0,
	  bottom: 0,
	  right: 0,
	  left: 0,
	  width: "100%",
	  opacity: 0
	};
	
	var FileUploader = function (_Component) {
	  _inherits(FileUploader, _Component);
	
	  function FileUploader(props) {
	    _classCallCheck(this, FileUploader);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileUploader).call(this, props));
	
	    _this.clubChanged = function () {
	      _this.setState({ processing: false });
	      if (_this.playerLen !== _clubStore2.default.getCurrentClub().players.length) {
	        _this.props.handleClose();
	      }
	    };
	
	    _this.updateFile = function (e) {
	      var file = e.target.files[0];
	      if (/csv|json/.test(file.type)) {
	        var reader = new FileReader();
	        _this.setState({ processing: true });
	        reader.onload = function (upload) {
	          _this.setState({
	            data_uri: upload.target.result,
	            filename: file.name,
	            filetype: file.type,
	            processing: false
	          });
	        };
	        reader.readAsDataURL(file);
	      } else {
	        _this.setState({
	          filename: "Unrecognized file type: ." + file.type
	        });
	      }
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      if (_this.state.data_uri && _this.state.filetype && _this.state.filename) {
	        _this.setState({ processing: true });
	        _this.playerLen = _clubStore2.default.getCurrentClub().players.length;
	        (0, _clientActions.uploadFile)({
	          data_uri: _this.state.data_uri,
	          filename: _this.state.filename,
	          filetype: _this.state.filetype
	        });
	      }
	    };
	
	    _this.state = {
	      data_uri: null,
	      filename: null,
	      filetype: null,
	      processing: false
	    };
	    return _this;
	  }
	
	  _createClass(FileUploader, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.listener = _clubStore2.default.addListener(this.clubChanged);
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.processing !== nextState.processing || this.state.filename !== nextState.filename) {
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.listener.remove();
	    }
	  }, {
	    key: "loader",
	    value: function loader() {
	      return this.state.processing && _react2.default.createElement("div", { className: "overlay" }, _react2.default.createElement("div", { className: "loading" }, _react2.default.createElement(_CircularProgress2.default, { size: 2 })));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var buttonLabel = this.state.filename ? "File:  " + this.state.filename : "Choose a file (.csv or .json)";
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement(_RaisedButton2.default, {
	        style: { midWidth: "150px", marginRight: "10px" },
	        label: buttonLabel,
	        labelPosition: "before",
	        containerElement: "label"
	      }, _react2.default.createElement("input", {
	        type: "file",
	        value: this.state.file,
	        onChange: this.updateFile,
	        style: style
	      })), _react2.default.createElement(_RaisedButton2.default, {
	        label: "Upload",
	        labelPosition: "before",
	        containerElement: "label",
	        primary: Boolean(true),
	        disabled: !this.state.data_uri
	      }, _react2.default.createElement("input", { type: "submit", style: style })), this.loader());
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	FileUploader.propTypes = {
	  handleClose: _react.PropTypes.func
	};
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yb3V0ZXMuanM/MzcyNiIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvaW5kZXguanM/OTMzMiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5qcz83OTljIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9kYXRlVXRpbHMuanM/MDRkNSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvRGF0ZVBpY2tlckRpYWxvZy5qcz85ZjkxIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9DYWxlbmRhci5qcz85MGQwIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9DYWxlbmRhckFjdGlvbkJ1dHRvbnMuanM/NWFjOCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXJNb250aC5qcz9hZmUxIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9EYXlCdXR0b24uanM/YTM2ZCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXJZZWFyLmpzPzQxOTYiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL1llYXJCdXR0b24uanM/ZjVkNSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXJUb29sYmFyLmpzP2IyNjgiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jaGV2cm9uLWxlZnQuanM/MDcxYyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZXZyb24tcmlnaHQuanM/YTM3YyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1NsaWRlSW4uanM/OTA2MyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1NsaWRlSW5DaGlsZC5qcz80N2NiIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9EYXRlRGlzcGxheS5qcz9kY2YzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvU25hY2tiYXIvaW5kZXguanM/MTM5MSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1NuYWNrYmFyL1NuYWNrYmFyLmpzPzQyMjEiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9TbmFja2Jhci9TbmFja2JhckJvZHkuanM/OWFjNiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3V0aWxzL3dpdGhXaWR0aC5qcz9kNTA4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlLmpzPzAxYjciLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3RvcmVzL3BkZlN0b3JlLmpzPzgxZWIiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyRm9ybS5qcz9kMThiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2Nsb3NlLmpzP2RiZWIiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGFydGljaXBhbnRzLmpzP2MzYmUiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyTGlzdC5qcz84YjhhIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2dyb3VwaW5nLmpzP2Y2MmQiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGFydGljaXBhbnRHcm91cC5qcz80NDJhIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3BpY3R1cmUtYXMtcGRmLmpzP2VjZTQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctdXAuanM/MDgzMSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9rZXlib2FyZC1hcnJvdy1kb3duLmpzP2VlNGUiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbWV0aG9kcy9maW5kU2NoZW1hLmpzP2RjM2UiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcmVzdG9yZURpYWxvZy5qcz8xODdjIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3VwbG9hZERpYWxvZy5qcz9kOTYxIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qcz81ODlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQU0sU0FDSixvREFBTyxNQUFLLEtBQUksaUJBQWhCLFdBQ0UseURBQVksb0JBQVosWUFDQSxvREFBTyxNQUFLLFFBQU8sa0JBQW5CLFdBQ0UseURBQVksMEJBQVosWUFDQSxvREFBTyxNQUFLLFlBQVcsZ0NBQXZCLFlBQ0Esb0RBQU8sTUFBSyxnQkFBZSwrQkFBM0IsWUFDQSxvREFBTyxNQUFLLGNBQWEsMEJBQXpCLGFBRUYsb0RBQU8sTUFBSyxXQUFVLHlCQUF0QixZQUNBLG9EQUFPLE1BQUssS0FBSSx1QkFBaEI7O21CQUlXLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFTLDBFQUEwRSxXQUFXO0FBQzlGLHVFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7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QTlHa0IsY0FDWjtnQkFDUSxpQkFBVTtBQUF2QjttQkFGaUIsYSIsImZpbGUiOiIwLjg2NDUzNmI4NmRiNTQwZTkwYzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgU3BsYXNoIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsYXNoXCI7XG5pbXBvcnQgQ2x1YiBmcm9tIFwiLi9jb21wb25lbnRzL2NsdWJcIjtcbmltcG9ydCBOZXdSUlNlc3Npb24gZnJvbSBcIi4vY29tcG9uZW50cy9yclNlc3Npb24vbmV3UlJTZXNzaW9uXCI7XG5pbXBvcnQgUm91bmRSb2JpblNlc3Npb25zIGZyb20gXCIuL2NvbXBvbmVudHMvcmVjb3JkL3JvdW5kcm9iaW5TZXNzaW9uc1wiO1xuaW1wb3J0IFJvdW5kUm9iaW5TZXNzaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVjb3JkL3JvdW5kcm9iaW5TZXNzaW9uXCI7XG5pbXBvcnQgUmVzdWx0UXVlcnkgZnJvbSBcIi4vY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdFF1ZXJ5XCI7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCIuL2Vycm9yUGFnZVwiO1xuXG5jb25zdCBSb3V0ZXMgPSAoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e1NwbGFzaH0gLz5cbiAgICA8Um91dGUgcGF0aD1cImNsdWJcIiBjb21wb25lbnQ9e0NsdWJ9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtOZXdSUlNlc3Npb259IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNlc3Npb25zXCIgY29tcG9uZW50PXtSb3VuZFJvYmluU2Vzc2lvbnN9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNlc3Npb25zLzppZFwiIGNvbXBvbmVudD17Um91bmRSb2JpblNlc3Npb259IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIm5ld1Nlc3Npb25cIiBjb21wb25lbnQ9e05ld1JSU2Vzc2lvbn0gLz5cbiAgICA8L1JvdXRlPlxuICAgIDxSb3V0ZSBwYXRoPVwicmVzdWx0c1wiIGNvbXBvbmVudD17UmVzdWx0UXVlcnl9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtFcnJvclBhZ2V9IC8+XG4gIDwvUm91dGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL3JvdXRlcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RhdGVQaWNrZXJcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IHsgc2F2ZVNlc3Npb24sIHRlbXBvcmFyeVNlc3Npb24sIGRlc3Ryb3lUZW1wU2Vzc2lvbiwgZmV0Y2hUZW1wU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgVGVtcFNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3RlbXBTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5pbXBvcnQgUGxheWVyRm9ybSBmcm9tIFwiLi9wbGF5ZXJGb3JtXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuL3BhcnRpY2lwYW50c1wiO1xuaW1wb3J0IEdyb3VwaW5nIGZyb20gXCIuL2dyb3VwaW5nXCI7XG5pbXBvcnQgUmVzdG9yZURpYWxvZyBmcm9tIFwiLi9yZXN0b3JlRGlhbG9nXCI7XG5pbXBvcnQgVXBsb2FkRGlhbG9nIGZyb20gXCIuL3VwbG9hZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSUlNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBfaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuU3RyaW5nXG4gICAgICBdKSxcbiAgICAgIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheVxuICAgIH0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZSxcbiAgICAgIGdyb3VwVGFiRW5hYmxlZDogZmFsc2UsXG4gICAgICB0YWI6IDAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgbnVtUGxheWVyczogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc25hY2tCYXJPcGVuOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHVwbG9hZERpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICAgIHRoaXMucnJMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMucnJSZXNwb25zZVJlY2VpdmVkKTtcbiAgICB0aGlzLnRzbGlzdGVuZXIgPSBUZW1wU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMudGVtcFNlc3Npb25GZXRjaGVkKTtcbiAgICBmZXRjaFRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgZGVidWdnZXI7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY3NMaXN0ZW5lcikgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnJyTGlzdGVuZXIpIHRoaXMucnJMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy50c2xpc3RlbmVyKSB0aGlzLnRzbGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICByclJlc3BvbnNlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBSUlNlc3Npb25TdG9yZS5nZXRFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlUGxheWVyID0gKF9pZCkgPT4ge1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdO1xuICAgIGRlbGV0ZVBsYXllcih0aGlzLnByb3BzLmNsdWIuX2lkLCBfaWQpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBfaWQpIHtcbiAgICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRlZFBsYXllcnM6IHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzIH0pO1xuICB9XG5cbiAgdGVtcFNlc3Npb25GZXRjaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBUZW1wU2Vzc2lvblN0b3JlLmZpbmRDYWNoZWRTZXNzaW9uKCk7XG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbihcImRpYWxvZ09wZW5cIik7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRTY2hlbWEgPSB0aGlzLnNlc3Npb24uc2VsZWN0ZWRTY2hlbWE7XG4gICAgdGhpcy5zY2hlbWF0YSA9IHRoaXMuc2Vzc2lvbi5zY2hlbWF0YTtcbiAgICB0aGlzLnBkZnMgPSB0aGlzLnNlc3Npb24ucGRmcztcbiAgICB0aGlzLm1heCA9IHRoaXMuc2Vzc2lvbi5tYXg7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNlc3Npb24ubWluO1xuICAgIHRoaXMuY2FjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogK3RoaXMuc2Vzc2lvbi50YWIsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnNlc3Npb24uZGF0ZSksXG4gICAgICBudW1QbGF5ZXJzOiArdGhpcy5zZXNzaW9uLm51bVBsYXllcnMsXG4gICAgICBhZGRlZFBsYXllcnM6IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgPyB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzIDoge31cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNsdWI6IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLFxuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT3BlbiA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZVRvZ2dsZSA9IChfaWQsIGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYXllciA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzLmZpbmQoKHBsYXllciA9PlxuICAgICAgcGxheWVyLl9pZCA9PT0gX2lkXG4gICAgKSk7XG5cbiAgICBpZiAoYWRkZWRQbGF5ZXJzW19pZF0pIHtcbiAgICAgIGRlbGV0ZSBhZGRlZFBsYXllcnNbX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWRQbGF5ZXJzW19pZF0gPSBzZWxlY3RlZFBsYXllcjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRlZFBsYXllcnMsXG4gICAgICBudW1QbGF5ZXJzOiArK3RoaXMuc3RhdGUubnVtUGxheWVyc1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZVRhYiA9ICh0YWIpID0+IHtcbiAgICBpZiAodGFiLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KTtcbiAgfVxuXG4gIGNvbnZlcnRQbGF5ZXJzVG9BcnIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKS5tYXAoKF9pZCA9PlxuICAgICAgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXVxuICAgICkpO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwbGF5ZXJzKSA9PiB7XG4gICAgc2F2ZVNlc3Npb24oe1xuICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuICAgICAgbnVtT2ZQbGF5ZXJzOiB0aGlzLnN0YXRlLm51bVBsYXllcnMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgc2VsZWN0ZWRTY2hlbWEsXG4gICAgICBzY2hlbWF0YSxcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbiA9IChtaW4sIG1heCwgc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwZGZzKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKFwic25hY2tCYXJPcGVuXCIpO1xuICAgIHRlbXBvcmFyeVNlc3Npb24oe1xuICAgICAgLi4udGhpcy5zdGF0ZSwgbWluLCBtYXgsIHNlbGVjdGVkU2NoZW1hLCBzY2hlbWF0YSwgcGRmc1xuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGRlc3Ryb3lUZW1wU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgIFBERlN0b3JlLmNsZWFyUERGKCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBsZXQgYWxsUGxheWVycyA9IFtdO1xuICAgIGxldCBhZGRlZFBsYXllcnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy5jbHViKSB7XG4gICAgICBhbGxQbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgICBhZGRlZFBsYXllcnMgPSB0aGlzLmNvbnZlcnRQbGF5ZXJzVG9BcnIoKS5zb3J0KChhLCBiKSA9PiBiLnJhdGluZyAtIGEucmF0aW5nKTtcbiAgICAgIC8vdGhpcyBtYXkgYmUgdGhlIGJvdHRsZW5lY2s/XG4gICAgfVxuICAgIGNvbnN0IHsgbnVtUGxheWVycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHBsYXllckNvbnRlbnQgPSAoPGRpdj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiTmV3IFBsYXllclwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVPcGVuKFwidXBsb2FkRGlhbG9nT3BlblwiKX1cbiAgICAgICAgbGFiZWw9XCJVcGxvYWQgUGxheWVyc1wiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxNTBweFwiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEYXRlIG9mIFNlc3Npb25cIlxuICAgICAgICAgIGhpbnRUZXh0PVwiRGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBkYXRlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0ZSB9KX1cbiAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGFydGljaXBhbnRzXG4gICAgICAgIG9iakFkZGVkUGxheWVycz17dGhpcy5zdGF0ZS5hZGRlZFBsYXllcnN9XG4gICAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgICBkZWxldGVQbGF5ZXI9e3RoaXMuZGVsZXRlUGxheWVyfVxuICAgICAgICBhbGxQbGF5ZXJzPXthbGxQbGF5ZXJzfVxuICAgICAgICBoYW5kbGVUb2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgLz5cbiAgICA8L2Rpdj4pO1xuICAgIGNvbnN0IGdyb3VwQ29udGVudCA9ICg8R3JvdXBpbmdcbiAgICAgIG51bVBsYXllcnM9e251bVBsYXllcnN9XG4gICAgICBjYWNoZWQ9e3RoaXMuY2FjaGVkfVxuICAgICAgcGRmcz17dGhpcy5wZGZzfVxuICAgICAgbWluPXt0aGlzLm1pbn1cbiAgICAgIG1heD17dGhpcy5tYXh9XG4gICAgICBzZWxlY3RlZEdyb3VwPXt0aGlzLnNlbGVjdGVkU2NoZW1hfVxuICAgICAgc2NoZW1hdGE9e3RoaXMuc2NoZW1hdGF9XG4gICAgICBhZGRlZFBsYXllcnM9e2FkZGVkUGxheWVyc31cbiAgICAgIHNhdmVTZXNzaW9uPXt0aGlzLnNhdmVTZXNzaW9ufVxuICAgICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbj17dGhpcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9ufVxuICAgICAgY2x1Yj17dGhpcy5wcm9wcy5jbHVifVxuICAgICAgZGF0ZT17bW9tZW50KHRoaXMuc3RhdGUuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1cbiAgICAvPik7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRhaW5lclwiPlxuICAgICAgPFRhYnNcbiAgICAgICAgdGFiSXRlbUNvbnRhaW5lclN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNjczQUI3XCIgfX1cbiAgICAgICAgY29udGVudENvbnRhaW5lclN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjRTBFMEUwXCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjQwMHB4XCJcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFifVxuICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVUYWJ9XG4gICAgICA+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJSZWdpc3RyYXRpb25cIiB2YWx1ZT17MH0+XG4gICAgICAgICAgeyBwbGF5ZXJDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJHcm91cGluZ1wiIHZhbHVlPXsxfT5cbiAgICAgICAgICB7IGdyb3VwQ29udGVudCB9XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UYWJzPlxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuc25hY2tCYXJPcGVufVxuICAgICAgICBtZXNzYWdlPVwiU2Vzc2lvbiBoYXMgYmVlbiB0ZW1wb3JhcmlseSBzYXZlZFwiXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezgwMDB9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKFwic25hY2tCYXJPcGVuXCIpfVxuICAgICAgLz5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3BlbiAmJlxuICAgICAgICAgIDxSZXN0b3JlRGlhbG9nXG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnJlc3RvcmVEaWFsb2dPcGVufVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICByZXN0b3JlU2Vzc2lvbj17dGhpcy5yZXN0b3JlU2Vzc2lvbn1cbiAgICAgICAgICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbj17dGhpcy5kZXN0cm95VGVtcFNlc3Npb259XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVuICYmXG4gICAgICAgICAgPFVwbG9hZERpYWxvZ1xuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVufVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbCAmJlxuICAgICAgICAgIDxQbGF5ZXJGb3JtXG4gICAgICAgICAgICBtb2RhbE9wZW49e3RoaXMuc3RhdGUubmV3UGxheWVyTW9kYWx9XG4gICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgIXRoaXMucHJvcHMuY2x1YiAmJlxuICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vbmV3UlJTZXNzaW9uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX0RhdGVQaWNrZXIgPSByZXF1aXJlKCcuL0RhdGVQaWNrZXInKTtcblxudmFyIF9EYXRlUGlja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RhdGVQaWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRGF0ZVBpY2tlcjIuZGVmYXVsdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi9kYXRlVXRpbHMnKTtcblxudmFyIF9EYXRlUGlja2VyRGlhbG9nID0gcmVxdWlyZSgnLi9EYXRlUGlja2VyRGlhbG9nJyk7XG5cbnZhciBfRGF0ZVBpY2tlckRpYWxvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EYXRlUGlja2VyRGlhbG9nKTtcblxudmFyIF9UZXh0RmllbGQgPSByZXF1aXJlKCcuLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxudmFyIF9kZXByZWNhdGVkUHJvcFR5cGUgPSByZXF1aXJlKCcuLi91dGlscy9kZXByZWNhdGVkUHJvcFR5cGUnKTtcblxudmFyIF9kZXByZWNhdGVkUHJvcFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlZFByb3BUeXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEYXRlUGlja2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERhdGVQaWNrZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERhdGVQaWNrZXIoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVBpY2tlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGF0ZVBpY2tlcikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRlOiB1bmRlZmluZWRcbiAgICB9LCBfdGhpcy5oYW5kbGVBY2NlcHQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgaWYgKCFfdGhpcy5pc0NvbnRyb2xsZWQoKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsLCBkYXRlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFRhcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoVGFwKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmxvY2FsZSkge1xuICAgICAgICB2YXIgRGF0ZVRpbWVGb3JtYXQgPSBfdGhpcy5wcm9wcy5EYXRlVGltZUZvcm1hdCB8fCBfZGF0ZVV0aWxzLmRhdGVUaW1lRm9ybWF0O1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lRm9ybWF0KF90aGlzLnByb3BzLmxvY2FsZSwge1xuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoMCwgX2RhdGVVdGlscy5mb3JtYXRJc28pKGRhdGUpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVQaWNrZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGU6IHRoaXMuaXNDb250cm9sbGVkKCkgPyB0aGlzLmdldENvbnRyb2xsZWREYXRlKCkgOiB0aGlzLnByb3BzLmRlZmF1bHREYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29udHJvbGxlZCgpKSB7XG4gICAgICAgIHZhciBuZXdEYXRlID0gdGhpcy5nZXRDb250cm9sbGVkRGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZiAoISgwLCBfZGF0ZVV0aWxzLmlzRXF1YWxEYXRlKSh0aGlzLnN0YXRlLmRhdGUsIG5ld0RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRlOiBuZXdEYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgZGF0ZS1waWNrZXIgZGlhbG9nIHByb2dyYW1tYXRpY2FsbHkgZnJvbSBhIHBhcmVudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb3BlbkRpYWxvZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5EaWFsb2coKSB7XG4gICAgICAvKipcbiAgICAgICAqIGlmIHRoZSBkYXRlIGlzIG5vdCBzZWxlY3RlZCB0aGVuIHNldCBpdCB0byBuZXcgZGF0ZVxuICAgICAgICogKGdldCB0aGUgY3VycmVudCBzeXN0ZW0gZGF0ZSB3aGlsZSBkb2luZyBzbylcbiAgICAgICAqIGVsc2Ugc2V0IGl0IHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZVxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlhbG9nRGF0ZTogdGhpcy5nZXREYXRlKClcbiAgICAgICAgfSwgdGhpcy5yZWZzLmRpYWxvZ1dpbmRvdy5zaG93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpYWxvZ0RhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSwgdGhpcy5yZWZzLmRpYWxvZ1dpbmRvdy5zaG93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYG9wZW5EaWFsb2coKWAgZm9yIGFuIGFwaSBjb25zaXN0ZW50IHdpdGggVGV4dEZpZWxkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNDb250cm9sbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb250cm9sbGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJvbGxlZERhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cm9sbGVkRGF0ZSgpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIGlmIChwcm9wcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIERhdGVUaW1lRm9ybWF0ID0gX3Byb3BzLkRhdGVUaW1lRm9ybWF0O1xuICAgICAgdmFyIGF1dG9PayA9IF9wcm9wcy5hdXRvT2s7XG4gICAgICB2YXIgY2FuY2VsTGFiZWwgPSBfcHJvcHMuY2FuY2VsTGFiZWw7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcHJvcHMuY29udGFpbmVyO1xuICAgICAgdmFyIGRlZmF1bHREYXRlID0gX3Byb3BzLmRlZmF1bHREYXRlO1xuICAgICAgdmFyIGRpYWxvZ0NvbnRhaW5lclN0eWxlID0gX3Byb3BzLmRpYWxvZ0NvbnRhaW5lclN0eWxlO1xuICAgICAgdmFyIGRpc2FibGVZZWFyU2VsZWN0aW9uID0gX3Byb3BzLmRpc2FibGVZZWFyU2VsZWN0aW9uO1xuICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gX3Byb3BzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgdmFyIGZvcm1hdERhdGVQcm9wID0gX3Byb3BzLmZvcm1hdERhdGU7XG4gICAgICB2YXIgbG9jYWxlID0gX3Byb3BzLmxvY2FsZTtcbiAgICAgIHZhciBtYXhEYXRlID0gX3Byb3BzLm1heERhdGU7XG4gICAgICB2YXIgbWluRGF0ZSA9IF9wcm9wcy5taW5EYXRlO1xuICAgICAgdmFyIG1vZGUgPSBfcHJvcHMubW9kZTtcbiAgICAgIHZhciBva0xhYmVsID0gX3Byb3BzLm9rTGFiZWw7XG4gICAgICB2YXIgb25EaXNtaXNzID0gX3Byb3BzLm9uRGlzbWlzcztcbiAgICAgIHZhciBvbkZvY3VzID0gX3Byb3BzLm9uRm9jdXM7XG4gICAgICB2YXIgb25TaG93ID0gX3Byb3BzLm9uU2hvdztcbiAgICAgIHZhciBvblRvdWNoVGFwID0gX3Byb3BzLm9uVG91Y2hUYXA7XG4gICAgICB2YXIgc2hvdWxkRGlzYWJsZURhdGUgPSBfcHJvcHMuc2hvdWxkRGlzYWJsZURhdGU7XG4gICAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgdGV4dEZpZWxkU3R5bGUgPSBfcHJvcHMudGV4dEZpZWxkU3R5bGU7XG4gICAgICB2YXIgd29yZGluZ3MgPSBfcHJvcHMud29yZGluZ3M7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnRGF0ZVRpbWVGb3JtYXQnLCAnYXV0b09rJywgJ2NhbmNlbExhYmVsJywgJ2NsYXNzTmFtZScsICdjb250YWluZXInLCAnZGVmYXVsdERhdGUnLCAnZGlhbG9nQ29udGFpbmVyU3R5bGUnLCAnZGlzYWJsZVllYXJTZWxlY3Rpb24nLCAnZmlyc3REYXlPZldlZWsnLCAnZm9ybWF0RGF0ZScsICdsb2NhbGUnLCAnbWF4RGF0ZScsICdtaW5EYXRlJywgJ21vZGUnLCAnb2tMYWJlbCcsICdvbkRpc21pc3MnLCAnb25Gb2N1cycsICdvblNob3cnLCAnb25Ub3VjaFRhcCcsICdzaG91bGREaXNhYmxlRGF0ZScsICdzdHlsZScsICd0ZXh0RmllbGRTdHlsZScsICd3b3JkaW5ncyddKTtcblxuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIGZvcm1hdERhdGUgPSBmb3JtYXREYXRlUHJvcCB8fCB0aGlzLmZvcm1hdERhdGU7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGUpKSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgICAgIHN0eWxlOiB0ZXh0RmllbGRTdHlsZSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5kYXRlID8gZm9ybWF0RGF0ZSh0aGlzLnN0YXRlLmRhdGUpIDogJydcbiAgICAgICAgfSkpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGF0ZVBpY2tlckRpYWxvZzIuZGVmYXVsdCwge1xuICAgICAgICAgIERhdGVUaW1lRm9ybWF0OiBEYXRlVGltZUZvcm1hdCxcbiAgICAgICAgICBhdXRvT2s6IGF1dG9PayxcbiAgICAgICAgICBjYW5jZWxMYWJlbDogY2FuY2VsTGFiZWwsXG4gICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgY29udGFpbmVyU3R5bGU6IGRpYWxvZ0NvbnRhaW5lclN0eWxlLFxuICAgICAgICAgIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBkaXNhYmxlWWVhclNlbGVjdGlvbixcbiAgICAgICAgICBmaXJzdERheU9mV2VlazogZmlyc3REYXlPZldlZWssXG4gICAgICAgICAgaW5pdGlhbERhdGU6IHRoaXMuc3RhdGUuZGlhbG9nRGF0ZSxcbiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICBva0xhYmVsOiBva0xhYmVsLFxuICAgICAgICAgIG9uQWNjZXB0OiB0aGlzLmhhbmRsZUFjY2VwdCxcbiAgICAgICAgICBvblNob3c6IG9uU2hvdyxcbiAgICAgICAgICBvbkRpc21pc3M6IG9uRGlzbWlzcyxcbiAgICAgICAgICByZWY6ICdkaWFsb2dXaW5kb3cnLFxuICAgICAgICAgIHNob3VsZERpc2FibGVEYXRlOiBzaG91bGREaXNhYmxlRGF0ZSxcbiAgICAgICAgICB3b3JkaW5nczogd29yZGluZ3NcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVQaWNrZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5EYXRlUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBkYXRlIGZvcm1hdHRpbmcgZm9yIHRoZSBzcGVjaWZpZWQgYGxvY2FsZWAuXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBtdXN0IGZvbGxvdyB0aGlzIHNwZWNpZmljYXRpb246IEVDTUFTY3JpcHQgSW50ZXJuYXRpb25hbGl6YXRpb24gQVBJIDEuMCAoRUNNQS00MDIpLlxuICAgKiBgSW50bC5EYXRlVGltZUZvcm1hdGAgaXMgc3VwcG9ydGVkIGJ5IG1vc3QgbW9kZXJuIGJyb3dzZXJzLCBzZWUgaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9aW50bCxcbiAgICogb3RoZXJ3aXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5ZWFybnNoYXcvSW50bC5qcyBpcyBhIGdvb2QgcG9seWZpbGwuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGEgYnVpbHQtaW4gYERhdGVUaW1lRm9ybWF0YCBpcyB1c2VkIHdoaWNoIHN1cHBvcnRzIHRoZSAnZW4tVVMnIGBsb2NhbGVgLlxuICAgKi9cbiAgRGF0ZVRpbWVGb3JtYXQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIGF1dG9tYXRpY2FsbHkgYWNjZXB0IGFuZCBjbG9zZSB0aGUgcGlja2VyIG9uIHNlbGVjdCBhIGRhdGUuXG4gICAqL1xuICBhdXRvT2s6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgb2YgdGhlICdDYW5jZWwnIGJ1dHRvbi5cbiAgICovXG4gIGNhbmNlbExhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNvbnRyb2wgaG93IHRoZSBEYXRlIFBpY2tlciB3aWxsIGJlIGRpc3BsYXllZCB3aGVuIHRoZSBpbnB1dCBmaWVsZCBpcyBmb2N1c2VkLlxuICAgKiBgZGlhbG9nYCAoZGVmYXVsdCkgZGlzcGxheXMgdGhlIERhdGVQaWNrZXIgYXMgYSBkaWFsb2cgd2l0aCBhIG1vZGFsLlxuICAgKiBgaW5saW5lYCBkaXNwbGF5cyB0aGUgRGF0ZVBpY2tlciBiZWxvdyB0aGUgaW5wdXQgZmllbGQgKHNpbWlsYXIgdG8gYXV0byBjb21wbGV0ZSkuXG4gICAqL1xuICBjb250YWluZXI6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydkaWFsb2cnLCAnaW5saW5lJ10pLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgaW5pdGlhbCBkYXRlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIElmIGVpdGhlciBgdmFsdWVgIG9yIGB2YWx1ZUxpbmtgIGlzIHByb3ZpZGVkIHRoZXkgd2lsbCBvdmVycmlkZSB0aGlzXG4gICAqIHByb3Agd2l0aCBgdmFsdWVgIHRha2luZyBwcmVjZWRlbmNlLlxuICAgKi9cbiAgZGVmYXVsdERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgRGF0ZVBpY2tlckRpYWxvZydzIENvbnRhaW5lciBlbGVtZW50LlxuICAgKi9cbiAgZGlhbG9nQ29udGFpbmVyU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHllYXIgc2VsZWN0aW9uIGluIHRoZSBkYXRlIHBpY2tlci5cbiAgICovXG4gIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgRGF0ZVBpY2tlci5cbiAgICovXG4gIGRpc2FibGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNoYW5nZSB0aGUgZmlyc3QgZGF5IG9mIHdlZWsuIEl0IHZhcmllcyBmcm9tXG4gICAqIFNhdHVyZGF5IHRvIE1vbmRheSBiZXR3ZWVuIGRpZmZlcmVudCBsb2NhbGVzLlxuICAgKiBUaGUgYWxsb3dlZCByYW5nZSBpcyAwIChTdW5kYXkpIHRvIDYgKFNhdHVyZGF5KS5cbiAgICogVGhlIGRlZmF1bHQgaXMgYDFgLCBNb25kYXksIGFzIHBlciBJU08gODYwMS5cbiAgICovXG4gIGZpcnN0RGF5T2ZXZWVrOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGZvcm1hdCB0aGUgZGF0ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGZpZWxkLCBhbmQgc2hvdWxkIHJldHVybiBhIHN0cmluZy5cbiAgICogQnkgZGVmYXVsdCBpZiBubyBgbG9jYWxlYCBhbmQgYERhdGVUaW1lRm9ybWF0YCBpcyBwcm92aWRlZCBkYXRlIG9iamVjdHMgYXJlIGZvcm1hdHRlZCB0byBJU08gODYwMSBZWVlZLU1NLURELlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0ZSBEYXRlIG9iamVjdCB0byBiZSBmb3JtYXR0ZWQuXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBmb3JtYXR0ZWQgZGF0ZS5cbiAgICovXG4gIGZvcm1hdERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIExvY2FsZSB1c2VkIGZvciBmb3JtYXR0aW5nIHRoZSBgRGF0ZVBpY2tlcmAgZGF0ZSBzdHJpbmdzLiBPdGhlciB0aGFuIGZvciAnZW4tVVMnLCB5b3VcbiAgICogbXVzdCBwcm92aWRlIGEgYERhdGVUaW1lRm9ybWF0YCB0aGF0IHN1cHBvcnRzIHRoZSBjaG9zZW4gYGxvY2FsZWAuXG4gICAqL1xuICBsb2NhbGU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGVuZGluZyBvZiBhIHJhbmdlIG9mIHZhbGlkIGRhdGVzLiBUaGUgcmFuZ2UgaW5jbHVkZXMgdGhlIGVuZERhdGUuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGN1cnJlbnQgZGF0ZSArIDEwMCB5ZWFycy5cbiAgICovXG4gIG1heERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGJlZ2lubmluZyBvZiBhIHJhbmdlIG9mIHZhbGlkIGRhdGVzLiBUaGUgcmFuZ2UgaW5jbHVkZXMgdGhlIHN0YXJ0RGF0ZS5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgY3VycmVudCBkYXRlIC0gMTAwIHllYXJzLlxuICAgKi9cbiAgbWluRGF0ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBUZWxscyB0aGUgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHBpY2tlciBpbiBwb3J0cmFpdCBvciBsYW5kc2NhcGUgbW9kZS5cbiAgICovXG4gIG1vZGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydwb3J0cmFpdCcsICdsYW5kc2NhcGUnXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IG9mIHRoZSAnT0snIGJ1dHRvbi5cbiAgICovXG4gIG9rTGFiZWw6IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgZGF0ZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bGx9IG51bGwgU2luY2UgdGhlcmUgaXMgbm8gcGFydGljdWxhciBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGNoYW5nZSxcbiAgICogdGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgYWx3YXlzIGJlIG51bGwuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRlIFRoZSBuZXcgZGF0ZS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIERhdGUgUGlja2VyJ3MgZGlhbG9nIGlzIGRpc21pc3NlZC5cbiAgICovXG4gIG9uRGlzbWlzczogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSBEYXRlIFBpY2tlcidzIGBUZXh0RmllbGRgIGdhaW5zIGZvY3VzLlxuICAgKi9cbiAgb25Gb2N1czogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSBEYXRlIFBpY2tlcidzIGRpYWxvZyBpcyBzaG93bi5cbiAgICovXG4gIG9uU2hvdzogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBmaXJlZCB3aGVuIGEgdG91Y2ggdGFwIGV2ZW50IG9jY3VycyBvbiB0aGUgRGF0ZSBQaWNrZXIncyBgVGV4dEZpZWxkYC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYFRleHRGaWVsZGAuXG4gICAqL1xuICBvblRvdWNoVGFwOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiBhIGRheSdzIGVudHJ5IHNob3VsZCBiZSBkaXNhYmxlZCBvbiB0aGUgY2FsZW5kYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXkgRGF0ZSBvYmplY3Qgb2YgYSBkYXkuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGF5IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIHNob3VsZERpc2FibGVEYXRlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgRGF0ZVBpY2tlcidzIFRleHRGaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgdGV4dEZpZWxkU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogU2V0cyB0aGUgZGF0ZSBmb3IgdGhlIERhdGUgUGlja2VyIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICB2YWx1ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBXb3JkaW5ncyB1c2VkIGluc2lkZSB0aGUgYnV0dG9uIG9mIHRoZSBkaWFsb2cuXG4gICAqL1xuICB3b3JkaW5nczogKDAsIF9kZXByZWNhdGVkUHJvcFR5cGUyLmRlZmF1bHQpKF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAnSW5zdGVhZCwgdXNlIGBjYW5jZWxMYWJlbGAgYW5kIGBva0xhYmVsYC5cXG4gICAgICBJdCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB2MC4xNi4wLicpXG59O1xuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9PazogZmFsc2UsXG4gIGNvbnRhaW5lcjogJ2RpYWxvZycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZVllYXJTZWxlY3Rpb246IGZhbHNlLFxuICBmaXJzdERheU9mV2VlazogMSxcbiAgc3R5bGU6IHt9XG59O1xuRGF0ZVBpY2tlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGF0ZVBpY2tlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGF0ZVRpbWVGb3JtYXQgPSBkYXRlVGltZUZvcm1hdDtcbmV4cG9ydHMuYWRkRGF5cyA9IGFkZERheXM7XG5leHBvcnRzLmFkZE1vbnRocyA9IGFkZE1vbnRocztcbmV4cG9ydHMuYWRkWWVhcnMgPSBhZGRZZWFycztcbmV4cG9ydHMuY2xvbmVEYXRlID0gY2xvbmVEYXRlO1xuZXhwb3J0cy5jbG9uZUFzRGF0ZSA9IGNsb25lQXNEYXRlO1xuZXhwb3J0cy5nZXREYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuZXhwb3J0cy5nZXRGaXJzdERheU9mTW9udGggPSBnZXRGaXJzdERheU9mTW9udGg7XG5leHBvcnRzLmdldEZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3REYXlPZldlZWs7XG5leHBvcnRzLmdldFdlZWtBcnJheSA9IGdldFdlZWtBcnJheTtcbmV4cG9ydHMubG9jYWxpemVkV2Vla2RheSA9IGxvY2FsaXplZFdlZWtkYXk7XG5leHBvcnRzLmZvcm1hdElzbyA9IGZvcm1hdElzbztcbmV4cG9ydHMuaXNFcXVhbERhdGUgPSBpc0VxdWFsRGF0ZTtcbmV4cG9ydHMuaXNCZWZvcmVEYXRlID0gaXNCZWZvcmVEYXRlO1xuZXhwb3J0cy5pc0FmdGVyRGF0ZSA9IGlzQWZ0ZXJEYXRlO1xuZXhwb3J0cy5pc0JldHdlZW5EYXRlcyA9IGlzQmV0d2VlbkRhdGVzO1xuZXhwb3J0cy5tb250aERpZmYgPSBtb250aERpZmY7XG5leHBvcnRzLnllYXJEaWZmID0geWVhckRpZmY7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGF5QWJicmV2aWF0aW9uID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XG52YXIgZGF5TGlzdCA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG52YXIgbW9udGhMaXN0ID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xudmFyIG1vbnRoTG9uZ0xpc3QgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuZnVuY3Rpb24gZGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobG9jYWxlID09PSAnZW4tVVMnLCAnVGhlICcgKyBsb2NhbGUgKyAnIGxvY2FsZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBidWlsdC1pbiBEYXRlVGltZUZvcm1hdC5cXG4gIFVzZSB0aGUgYERhdGVUaW1lRm9ybWF0YCBwcm9wIHRvIHN1cHBseSBhbiBhbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbi4nKSA6IHZvaWQgMDtcblxuICB0aGlzLmZvcm1hdCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgaWYgKG9wdGlvbnMubW9udGggPT09ICdzaG9ydCcgJiYgb3B0aW9ucy53ZWVrZGF5ID09PSAnc2hvcnQnICYmIG9wdGlvbnMuZGF5ID09PSAnMi1kaWdpdCcpIHtcbiAgICAgIHJldHVybiBkYXlMaXN0W2RhdGUuZ2V0RGF5KCldICsgJywgJyArIG1vbnRoTGlzdFtkYXRlLmdldE1vbnRoKCldICsgJyAnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRheSA9PT0gJ251bWVyaWMnICYmIG9wdGlvbnMubW9udGggPT09ICdudW1lcmljJyAmJiBvcHRpb25zLnllYXIgPT09ICdudW1lcmljJykge1xuICAgICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDEgKyAnLycgKyBkYXRlLmdldERhdGUoKSArICcvJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubW9udGggPT09ICdsb25nJyAmJiBvcHRpb25zLnllYXIgPT09ICdudW1lcmljJykge1xuICAgICAgcmV0dXJuIG1vbnRoTG9uZ0xpc3RbZGF0ZS5nZXRNb250aCgpXSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMud2Vla2RheSA9PT0gJ25hcnJvdycpIHtcbiAgICAgIHJldHVybiBkYXlBYmJyZXZpYXRpb25bZGF0ZS5nZXREYXkoKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdXcm9uZyB1c2FnZSBvZiBEYXRlVGltZUZvcm1hdCcpIDogdm9pZCAwO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkRGF5cyhkLCBkYXlzKSB7XG4gIHZhciBuZXdEYXRlID0gY2xvbmVEYXRlKGQpO1xuICBuZXdEYXRlLnNldERhdGUoZC5nZXREYXRlKCkgKyBkYXlzKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZE1vbnRocyhkLCBtb250aHMpIHtcbiAgdmFyIG5ld0RhdGUgPSBjbG9uZURhdGUoZCk7XG4gIG5ld0RhdGUuc2V0TW9udGgoZC5nZXRNb250aCgpICsgbW9udGhzKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFllYXJzKGQsIHllYXJzKSB7XG4gIHZhciBuZXdEYXRlID0gY2xvbmVEYXRlKGQpO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKGQuZ2V0RnVsbFllYXIoKSArIHllYXJzKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5cbmZ1bmN0aW9uIGNsb25lRGF0ZShkKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkLmdldFRpbWUoKSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lQXNEYXRlKGQpIHtcbiAgdmFyIGNsb25lZERhdGUgPSBjbG9uZURhdGUoZCk7XG4gIGNsb25lZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBjbG9uZWREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aChkKSB7XG4gIHZhciByZXN1bHREYXRlID0gZ2V0Rmlyc3REYXlPZk1vbnRoKGQpO1xuXG4gIHJlc3VsdERhdGUuc2V0TW9udGgocmVzdWx0RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIHJlc3VsdERhdGUuc2V0RGF0ZShyZXN1bHREYXRlLmdldERhdGUoKSAtIDEpO1xuXG4gIHJldHVybiByZXN1bHREYXRlLmdldERhdGUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZk1vbnRoKGQpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZldlZWsoKSB7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKSAtIG5vdy5nZXREYXkoKSkpO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrQXJyYXkoZCwgZmlyc3REYXlPZldlZWspIHtcbiAgdmFyIGRheUFycmF5ID0gW107XG4gIHZhciBkYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoKGQpO1xuICB2YXIgd2Vla0FycmF5ID0gW107XG4gIHZhciB3ZWVrID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xuICAgIGRheUFycmF5LnB1c2gobmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGkpKTtcbiAgfVxuXG4gIHZhciBhZGRXZWVrID0gZnVuY3Rpb24gYWRkV2Vlayh3ZWVrKSB7XG4gICAgdmFyIGVtcHR5RGF5cyA9IDcgLSB3ZWVrLmxlbmd0aDtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZW1wdHlEYXlzOyArK19pKSB7XG4gICAgICB3ZWVrW3dlZWtBcnJheS5sZW5ndGggPyAncHVzaCcgOiAndW5zaGlmdCddKG51bGwpO1xuICAgIH1cbiAgICB3ZWVrQXJyYXkucHVzaCh3ZWVrKTtcbiAgfTtcblxuICBkYXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChkYXkpIHtcbiAgICBpZiAod2Vlay5sZW5ndGggPiAwICYmIGRheS5nZXREYXkoKSA9PT0gZmlyc3REYXlPZldlZWspIHtcbiAgICAgIGFkZFdlZWsod2Vlayk7XG4gICAgICB3ZWVrID0gW107XG4gICAgfVxuICAgIHdlZWsucHVzaChkYXkpO1xuICAgIGlmIChkYXlBcnJheS5pbmRleE9mKGRheSkgPT09IGRheUFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIGFkZFdlZWsod2Vlayk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gd2Vla0FycmF5O1xufVxuXG5mdW5jdGlvbiBsb2NhbGl6ZWRXZWVrZGF5KERhdGVUaW1lRm9ybWF0LCBsb2NhbGUsIGRheSwgZmlyc3REYXlPZldlZWspIHtcbiAgdmFyIHdlZWtkYXlGb3JtYXR0ZXIgPSBuZXcgRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICduYXJyb3cnIH0pO1xuICB2YXIgZmlyc3REYXlEYXRlID0gZ2V0Rmlyc3REYXlPZldlZWsoKTtcblxuICByZXR1cm4gd2Vla2RheUZvcm1hdHRlci5mb3JtYXQoYWRkRGF5cyhmaXJzdERheURhdGUsIGRheSArIGZpcnN0RGF5T2ZXZWVrKSk7XG59XG5cbi8vIENvbnZlcnQgZGF0ZSB0byBJU08gODYwMSAoWVlZWS1NTS1ERCkgZGF0ZSBzdHJpbmcsIGFjY291bnRpbmcgZm9yIGN1cnJlbnQgdGltZXpvbmVcbmZ1bmN0aW9uIGZvcm1hdElzbyhkYXRlKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLnRvRGF0ZVN0cmluZygpICsgJyAxMjowMDowMCArMDAwMCcpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbERhdGUoZDEsIGQyKSB7XG4gIHJldHVybiBkMSAmJiBkMiAmJiBkMS5nZXRGdWxsWWVhcigpID09PSBkMi5nZXRGdWxsWWVhcigpICYmIGQxLmdldE1vbnRoKCkgPT09IGQyLmdldE1vbnRoKCkgJiYgZDEuZ2V0RGF0ZSgpID09PSBkMi5nZXREYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGlzQmVmb3JlRGF0ZShkMSwgZDIpIHtcbiAgdmFyIGRhdGUxID0gY2xvbmVBc0RhdGUoZDEpO1xuICB2YXIgZGF0ZTIgPSBjbG9uZUFzRGF0ZShkMik7XG5cbiAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSA8IGRhdGUyLmdldFRpbWUoKTtcbn1cblxuZnVuY3Rpb24gaXNBZnRlckRhdGUoZDEsIGQyKSB7XG4gIHZhciBkYXRlMSA9IGNsb25lQXNEYXRlKGQxKTtcbiAgdmFyIGRhdGUyID0gY2xvbmVBc0RhdGUoZDIpO1xuXG4gIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgPiBkYXRlMi5nZXRUaW1lKCk7XG59XG5cbmZ1bmN0aW9uIGlzQmV0d2VlbkRhdGVzKGRhdGVUb0NoZWNrLCBzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgcmV0dXJuICFpc0JlZm9yZURhdGUoZGF0ZVRvQ2hlY2ssIHN0YXJ0RGF0ZSkgJiYgIWlzQWZ0ZXJEYXRlKGRhdGVUb0NoZWNrLCBlbmREYXRlKTtcbn1cblxuZnVuY3Rpb24gbW9udGhEaWZmKGQxLCBkMikge1xuICB2YXIgbSA9IHZvaWQgMDtcbiAgbSA9IChkMS5nZXRGdWxsWWVhcigpIC0gZDIuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbiAgbSArPSBkMS5nZXRNb250aCgpO1xuICBtIC09IGQyLmdldE1vbnRoKCk7XG4gIHJldHVybiBtO1xufVxuXG5mdW5jdGlvbiB5ZWFyRGlmZihkMSwgZDIpIHtcbiAgcmV0dXJuIH5+KG1vbnRoRGlmZihkMSwgZDIpIC8gMTIpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvZGF0ZVV0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmVhY3QtZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RFdmVudExpc3RlbmVyKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfQ2FsZW5kYXIgPSByZXF1aXJlKCcuL0NhbGVuZGFyJyk7XG5cbnZhciBfQ2FsZW5kYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FsZW5kYXIpO1xuXG52YXIgX0RpYWxvZyA9IHJlcXVpcmUoJy4uL0RpYWxvZycpO1xuXG52YXIgX0RpYWxvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaWFsb2cpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuLi9Qb3BvdmVyL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsJyk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi9kYXRlVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEYXRlUGlja2VyRGlhbG9nID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERhdGVQaWNrZXJEaWFsb2csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERhdGVQaWNrZXJEaWFsb2coKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVBpY2tlckRpYWxvZyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGF0ZVBpY2tlckRpYWxvZykpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90aGlzLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25TaG93ICYmICFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uU2hvdygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH0pO1xuICAgIH0sIF90aGlzLmRpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25EaXNtaXNzICYmIF90aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwRGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmF1dG9Paykge1xuICAgICAgICBzZXRUaW1lb3V0KF90aGlzLmhhbmRsZVRvdWNoVGFwT2ssIDMwMCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBDYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kaXNtaXNzKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZGlzbWlzcygpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwT2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25BY2NlcHQgJiYgIV90aGlzLnJlZnMuY2FsZW5kYXIuaXNTZWxlY3RlZERhdGVEaXNhYmxlZCgpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWNjZXB0KF90aGlzLnJlZnMuY2FsZW5kYXIuZ2V0U2VsZWN0ZWREYXRlKCkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVXaW5kb3dLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoICgoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSkge1xuICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgX3RoaXMuaGFuZGxlVG91Y2hUYXBPaygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVQaWNrZXJEaWFsb2csIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgRGF0ZVRpbWVGb3JtYXQgPSBfcHJvcHMuRGF0ZVRpbWVGb3JtYXQ7XG4gICAgICB2YXIgYXV0b09rID0gX3Byb3BzLmF1dG9PaztcbiAgICAgIHZhciBjYW5jZWxMYWJlbCA9IF9wcm9wcy5jYW5jZWxMYWJlbDtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcHJvcHMuY29udGFpbmVyO1xuICAgICAgdmFyIGNvbnRhaW5lclN0eWxlID0gX3Byb3BzLmNvbnRhaW5lclN0eWxlO1xuICAgICAgdmFyIGRpc2FibGVZZWFyU2VsZWN0aW9uID0gX3Byb3BzLmRpc2FibGVZZWFyU2VsZWN0aW9uO1xuICAgICAgdmFyIGluaXRpYWxEYXRlID0gX3Byb3BzLmluaXRpYWxEYXRlO1xuICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gX3Byb3BzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgdmFyIGxvY2FsZSA9IF9wcm9wcy5sb2NhbGU7XG4gICAgICB2YXIgbWF4RGF0ZSA9IF9wcm9wcy5tYXhEYXRlO1xuICAgICAgdmFyIG1pbkRhdGUgPSBfcHJvcHMubWluRGF0ZTtcbiAgICAgIHZhciBtb2RlID0gX3Byb3BzLm1vZGU7XG4gICAgICB2YXIgb2tMYWJlbCA9IF9wcm9wcy5va0xhYmVsO1xuICAgICAgdmFyIG9uQWNjZXB0ID0gX3Byb3BzLm9uQWNjZXB0O1xuICAgICAgdmFyIG9uRGlzbWlzcyA9IF9wcm9wcy5vbkRpc21pc3M7XG4gICAgICB2YXIgb25TaG93ID0gX3Byb3BzLm9uU2hvdztcbiAgICAgIHZhciBzaG91bGREaXNhYmxlRGF0ZSA9IF9wcm9wcy5zaG91bGREaXNhYmxlRGF0ZTtcbiAgICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICAgIHZhciB3b3JkaW5ncyA9IF9wcm9wcy53b3JkaW5ncztcbiAgICAgIHZhciBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ0RhdGVUaW1lRm9ybWF0JywgJ2F1dG9PaycsICdjYW5jZWxMYWJlbCcsICdjb250YWluZXInLCAnY29udGFpbmVyU3R5bGUnLCAnZGlzYWJsZVllYXJTZWxlY3Rpb24nLCAnaW5pdGlhbERhdGUnLCAnZmlyc3REYXlPZldlZWsnLCAnbG9jYWxlJywgJ21heERhdGUnLCAnbWluRGF0ZScsICdtb2RlJywgJ29rTGFiZWwnLCAnb25BY2NlcHQnLCAnb25EaXNtaXNzJywgJ29uU2hvdycsICdzaG91bGREaXNhYmxlRGF0ZScsICdzdHlsZScsICd3b3JkaW5ncycsICdhbmltYXRpb24nXSk7XG5cbiAgICAgIHZhciBvcGVuID0gdGhpcy5zdGF0ZS5vcGVuO1xuXG5cbiAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgIGRpYWxvZ0NvbnRlbnQ6IHtcbiAgICAgICAgICB3aWR0aDogbW9kZSA9PT0gJ2xhbmRzY2FwZScgPyA0NzkgOiAzMTBcbiAgICAgICAgfSxcbiAgICAgICAgZGlhbG9nQm9keUNvbnRlbnQ6IHtcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIG1pbkhlaWdodDogbW9kZSA9PT0gJ2xhbmRzY2FwZScgPyAzMzAgOiA0MzQsXG4gICAgICAgICAgbWluV2lkdGg6IG1vZGUgPT09ICdsYW5kc2NhcGUnID8gNDc5IDogMzEwXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBDb250YWluZXIgPSBjb250YWluZXIgPT09ICdpbmxpbmUnID8gX1BvcG92ZXIyLmRlZmF1bHQgOiBfRGlhbG9nMi5kZWZhdWx0O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXIsIHsgcmVmOiAncm9vdCcgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENvbnRhaW5lcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmNob3JFbDogdGhpcy5yZWZzLnJvb3QgLy8gRm9yIFBvcG92ZXJcbiAgICAgICAgICAgICwgYW5pbWF0aW9uOiBhbmltYXRpb24gfHwgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDIuZGVmYXVsdCAvLyBGb3IgUG9wb3ZlclxuICAgICAgICAgICAgLCBib2R5U3R5bGU6IHN0eWxlcy5kaWFsb2dCb2R5Q29udGVudCxcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZTogc3R5bGVzLmRpYWxvZ0NvbnRlbnQsXG4gICAgICAgICAgICByZWY6ICdkaWFsb2cnLFxuICAgICAgICAgICAgcmVwb3NpdGlvbk9uVXBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmRpYWxvZ0JvZHlDb250ZW50LCBjb250YWluZXJTdHlsZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEV2ZW50TGlzdGVuZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgIHRhcmdldDogJ3dpbmRvdycsXG4gICAgICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZVdpbmRvd0tleVVwXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NhbGVuZGFyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgICBhdXRvT2s6IGF1dG9PayxcbiAgICAgICAgICAgIERhdGVUaW1lRm9ybWF0OiBEYXRlVGltZUZvcm1hdCxcbiAgICAgICAgICAgIGNhbmNlbExhYmVsOiBjYW5jZWxMYWJlbCxcbiAgICAgICAgICAgIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBkaXNhYmxlWWVhclNlbGVjdGlvbixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBmaXJzdERheU9mV2VlayxcbiAgICAgICAgICAgIGluaXRpYWxEYXRlOiBpbml0aWFsRGF0ZSxcbiAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICAgICAgb25Ub3VjaFRhcERheTogdGhpcy5oYW5kbGVUb3VjaFRhcERheSxcbiAgICAgICAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICAgICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgICAgICByZWY6ICdjYWxlbmRhcicsXG4gICAgICAgICAgICBvblRvdWNoVGFwQ2FuY2VsOiB0aGlzLmhhbmRsZVRvdWNoVGFwQ2FuY2VsLFxuICAgICAgICAgICAgb25Ub3VjaFRhcE9rOiB0aGlzLmhhbmRsZVRvdWNoVGFwT2ssXG4gICAgICAgICAgICBva0xhYmVsOiBva0xhYmVsLFxuICAgICAgICAgICAgc2hvdWxkRGlzYWJsZURhdGU6IHNob3VsZERpc2FibGVEYXRlLFxuICAgICAgICAgICAgd29yZGluZ3M6IHdvcmRpbmdzXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVBpY2tlckRpYWxvZztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRhdGVQaWNrZXJEaWFsb2cucHJvcFR5cGVzID0ge1xuICBEYXRlVGltZUZvcm1hdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBhbmltYXRpb246IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgYXV0b09rOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNhbmNlbExhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIGNvbnRhaW5lcjogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2RpYWxvZycsICdpbmxpbmUnXSksXG4gIGNvbnRhaW5lclN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgZGlzYWJsZVllYXJTZWxlY3Rpb246IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZmlyc3REYXlPZldlZWs6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsRGF0ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGxvY2FsZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBtaW5EYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbW9kZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZSddKSxcbiAgb2tMYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICBvbkFjY2VwdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkRpc21pc3M6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TaG93OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9wZW46IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkRGlzYWJsZURhdGU6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB3b3JkaW5nczogX3JlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5EYXRlUGlja2VyRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgRGF0ZVRpbWVGb3JtYXQ6IF9kYXRlVXRpbHMuZGF0ZVRpbWVGb3JtYXQsXG4gIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgY29udGFpbmVyOiAnZGlhbG9nJyxcbiAgbG9jYWxlOiAnZW4tVVMnLFxuICBva0xhYmVsOiAnT0snXG59O1xuRGF0ZVBpY2tlckRpYWxvZy5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGF0ZVBpY2tlckRpYWxvZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL0RhdGVQaWNrZXJEaWFsb2cuanNcbiAqKiBtb2R1bGUgaWQgPSA1MThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JlYWN0LWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0NhbGVuZGFyQWN0aW9uQnV0dG9ucyA9IHJlcXVpcmUoJy4vQ2FsZW5kYXJBY3Rpb25CdXR0b25zJyk7XG5cbnZhciBfQ2FsZW5kYXJBY3Rpb25CdXR0b25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NhbGVuZGFyQWN0aW9uQnV0dG9ucyk7XG5cbnZhciBfQ2FsZW5kYXJNb250aCA9IHJlcXVpcmUoJy4vQ2FsZW5kYXJNb250aCcpO1xuXG52YXIgX0NhbGVuZGFyTW9udGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FsZW5kYXJNb250aCk7XG5cbnZhciBfQ2FsZW5kYXJZZWFyID0gcmVxdWlyZSgnLi9DYWxlbmRhclllYXInKTtcblxudmFyIF9DYWxlbmRhclllYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FsZW5kYXJZZWFyKTtcblxudmFyIF9DYWxlbmRhclRvb2xiYXIgPSByZXF1aXJlKCcuL0NhbGVuZGFyVG9vbGJhcicpO1xuXG52YXIgX0NhbGVuZGFyVG9vbGJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYWxlbmRhclRvb2xiYXIpO1xuXG52YXIgX0RhdGVEaXNwbGF5ID0gcmVxdWlyZSgnLi9EYXRlRGlzcGxheScpO1xuXG52YXIgX0RhdGVEaXNwbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RhdGVEaXNwbGF5KTtcblxudmFyIF9TbGlkZUluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvU2xpZGVJbicpO1xuXG52YXIgX1NsaWRlSW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGVJbik7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi9kYXRlVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIGRheXNBcnJheSA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkoNykpKTtcblxudmFyIENhbGVuZGFyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbGVuZGFyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYWxlbmRhcigpIHtcbiAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxlbmRhcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXIpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheURhdGU6IHVuZGVmaW5lZCxcbiAgICAgIGRpc3BsYXlNb250aERheTogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkRGF0ZTogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNpdGlvbkRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgdHJhbnNpdGlvbkVudGVyOiB0cnVlXG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBEYXkgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGUpIHtcbiAgICAgIF90aGlzLnNldFNlbGVjdGVkRGF0ZShkYXRlKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoVGFwRGF5KSBfdGhpcy5wcm9wcy5vblRvdWNoVGFwRGF5KGV2ZW50LCBkYXRlKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb250aENoYW5nZSA9IGZ1bmN0aW9uIChtb250aHMpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJhbnNpdGlvbkRpcmVjdGlvbjogbW9udGhzID49IDAgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgICBkaXNwbGF5RGF0ZTogKDAsIF9kYXRlVXRpbHMuYWRkTW9udGhzKShfdGhpcy5zdGF0ZS5kaXNwbGF5RGF0ZSwgbW9udGhzKVxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBZZWFyID0gZnVuY3Rpb24gKGV2ZW50LCB5ZWFyKSB7XG4gICAgICB2YXIgZGF0ZSA9ICgwLCBfZGF0ZVV0aWxzLmNsb25lRGF0ZSkoX3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRlKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZERhdGUoZGF0ZSwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwRGF0ZURpc3BsYXlNb250aERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheU1vbnRoRGF5OiB0cnVlXG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFRhcERhdGVEaXNwbGF5WWVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheU1vbnRoRGF5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlV2luZG93S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgc3dpdGNoICgoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSkge1xuICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIGlmIChldmVudC5hbHRLZXkgJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgX3RoaXMuYWRkU2VsZWN0ZWRZZWFycygtMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkZFNlbGVjdGVkTW9udGhzKC0xKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkZFNlbGVjdGVkRGF5cygtNyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZFllYXJzKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZE1vbnRocygxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkZFNlbGVjdGVkRGF5cyg3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZFllYXJzKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZE1vbnRocygxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkZFNlbGVjdGVkRGF5cygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICBpZiAoZXZlbnQuYWx0S2V5ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkZFNlbGVjdGVkWWVhcnMoLTEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZE1vbnRocygtMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5hZGRTZWxlY3RlZERheXMoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxlbmRhciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheURhdGU6ICgwLCBfZGF0ZVV0aWxzLmdldEZpcnN0RGF5T2ZNb250aCkodGhpcy5wcm9wcy5pbml0aWFsRGF0ZSksXG4gICAgICAgIHNlbGVjdGVkRGF0ZTogdGhpcy5wcm9wcy5pbml0aWFsRGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmluaXRpYWxEYXRlICE9PSB0aGlzLnByb3BzLmluaXRpYWxEYXRlKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV4dFByb3BzLmluaXRpYWxEYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXlEYXRlOiAoMCwgX2RhdGVVdGlscy5nZXRGaXJzdERheU9mTW9udGgpKGRhdGUpLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogZGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZERhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZERhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNTZWxlY3RlZERhdGVEaXNhYmxlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2VsZWN0ZWREYXRlRGlzYWJsZWQoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzcGxheU1vbnRoRGF5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVmcy5jYWxlbmRhci5pc1NlbGVjdGVkRGF0ZURpc2FibGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkU2VsZWN0ZWREYXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU2VsZWN0ZWREYXlzKGRheXMpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWREYXRlKCgwLCBfZGF0ZVV0aWxzLmFkZERheXMpKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlLCBkYXlzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkU2VsZWN0ZWRNb250aHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTZWxlY3RlZE1vbnRocyhtb250aHMpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWREYXRlKCgwLCBfZGF0ZVV0aWxzLmFkZE1vbnRocykodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUsIG1vbnRocykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZFNlbGVjdGVkWWVhcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTZWxlY3RlZFllYXJzKHllYXJzKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkRGF0ZSgoMCwgX2RhdGVVdGlscy5hZGRZZWFycykodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUsIHllYXJzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0RGlzcGxheURhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREaXNwbGF5RGF0ZShkYXRlLCBuZXdTZWxlY3RlZERhdGUpIHtcbiAgICAgIHZhciBuZXdEaXNwbGF5RGF0ZSA9ICgwLCBfZGF0ZVV0aWxzLmdldEZpcnN0RGF5T2ZNb250aCkoZGF0ZSk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gbmV3RGlzcGxheURhdGUgPiB0aGlzLnN0YXRlLmRpc3BsYXlEYXRlID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAgICAgaWYgKG5ld0Rpc3BsYXlEYXRlICE9PSB0aGlzLnN0YXRlLmRpc3BsYXlEYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXlEYXRlOiBuZXdEaXNwbGF5RGF0ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBuZXdTZWxlY3RlZERhdGUgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0U2VsZWN0ZWREYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2VsZWN0ZWREYXRlKGRhdGUpIHtcbiAgICAgIHZhciBhZGp1c3RlZERhdGUgPSBkYXRlO1xuICAgICAgaWYgKCgwLCBfZGF0ZVV0aWxzLmlzQmVmb3JlRGF0ZSkoZGF0ZSwgdGhpcy5wcm9wcy5taW5EYXRlKSkge1xuICAgICAgICBhZGp1c3RlZERhdGUgPSB0aGlzLnByb3BzLm1pbkRhdGU7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfZGF0ZVV0aWxzLmlzQWZ0ZXJEYXRlKShkYXRlLCB0aGlzLnByb3BzLm1heERhdGUpKSB7XG4gICAgICAgIGFkanVzdGVkRGF0ZSA9IHRoaXMucHJvcHMubWF4RGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0Rpc3BsYXlEYXRlID0gKDAsIF9kYXRlVXRpbHMuZ2V0Rmlyc3REYXlPZk1vbnRoKShhZGp1c3RlZERhdGUpO1xuICAgICAgaWYgKG5ld0Rpc3BsYXlEYXRlICE9PSB0aGlzLnN0YXRlLmRpc3BsYXlEYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0RGlzcGxheURhdGUobmV3RGlzcGxheURhdGUsIGFkanVzdGVkRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZERhdGU6IGFkanVzdGVkRGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUb29sYmFySW50ZXJhY3Rpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VG9vbGJhckludGVyYWN0aW9ucygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZXZNb250aDogKDAsIF9kYXRlVXRpbHMubW9udGhEaWZmKSh0aGlzLnN0YXRlLmRpc3BsYXlEYXRlLCB0aGlzLnByb3BzLm1pbkRhdGUpID4gMCxcbiAgICAgICAgbmV4dE1vbnRoOiAoMCwgX2RhdGVVdGlscy5tb250aERpZmYpKHRoaXMuc3RhdGUuZGlzcGxheURhdGUsIHRoaXMucHJvcHMubWF4RGF0ZSkgPCAwXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3llYXJTZWxlY3RvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHllYXJTZWxlY3RvcigpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlWWVhclNlbGVjdGlvbikgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DYWxlbmRhclllYXIyLmRlZmF1bHQsIHtcbiAgICAgICAga2V5OiAneWVhcnMnLFxuICAgICAgICBkaXNwbGF5RGF0ZTogdGhpcy5zdGF0ZS5kaXNwbGF5RGF0ZSxcbiAgICAgICAgb25Ub3VjaFRhcFllYXI6IHRoaXMuaGFuZGxlVG91Y2hUYXBZZWFyLFxuICAgICAgICBzZWxlY3RlZERhdGU6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlLFxuICAgICAgICBtaW5EYXRlOiB0aGlzLnByb3BzLm1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IHRoaXMucHJvcHMubWF4RGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHdlZWtDb3VudCA9ICgwLCBfZGF0ZVV0aWxzLmdldFdlZWtBcnJheSkodGhpcy5zdGF0ZS5kaXNwbGF5RGF0ZSwgdGhpcy5wcm9wcy5maXJzdERheU9mV2VlaykubGVuZ3RoO1xuICAgICAgdmFyIHRvb2xiYXJJbnRlcmFjdGlvbnMgPSB0aGlzLmdldFRvb2xiYXJJbnRlcmFjdGlvbnMoKTtcbiAgICAgIHZhciBpc0xhbmRzY2FwZSA9IHRoaXMucHJvcHMubW9kZSA9PT0gJ2xhbmRzY2FwZSc7XG4gICAgICB2YXIgY2FsZW5kYXJUZXh0Q29sb3IgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuZGF0ZVBpY2tlci5jYWxlbmRhclRleHRDb2xvcjtcblxuXG4gICAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgY29sb3I6IGNhbGVuZGFyVGV4dENvbG9yLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICB3aWR0aDogaXNMYW5kc2NhcGUgPyA0NzkgOiAzMTBcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXJDb250YWluZXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25Db250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHBhZGRpbmc6ICcwcHggOHB4JyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgICAgIH0sXG4gICAgICAgIHllYXJDb250YWluZXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBoZWlnaHQ6IDI3MixcbiAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICB3aWR0aDogMzEwXG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtUaXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgbGluZUhlaWdodDogJzE1cHgnLFxuICAgICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSxcbiAgICAgICAgd2Vla1RpdGxlRGF5OiB7XG4gICAgICAgICAgd2lkdGg6IDQyXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25TbGlkZToge1xuICAgICAgICAgIGhlaWdodDogMjE0XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciB3ZWVrVGl0bGVEYXlTdHlsZSA9IHByZXBhcmVTdHlsZXMoc3R5bGVzLndlZWtUaXRsZURheSk7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNhbmNlbExhYmVsID0gX3Byb3BzLmNhbmNlbExhYmVsO1xuICAgICAgdmFyIERhdGVUaW1lRm9ybWF0ID0gX3Byb3BzLkRhdGVUaW1lRm9ybWF0O1xuICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gX3Byb3BzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgdmFyIGxvY2FsZSA9IF9wcm9wcy5sb2NhbGU7XG4gICAgICB2YXIgb2tMYWJlbCA9IF9wcm9wcy5va0xhYmVsO1xuICAgICAgdmFyIG9uVG91Y2hUYXBDYW5jZWwgPSBfcHJvcHMub25Ub3VjaFRhcENhbmNlbDtcbiAgICAgIHZhciBvblRvdWNoVGFwT2sgPSBfcHJvcHMub25Ub3VjaFRhcE9rO1xuICAgICAgdmFyIHdvcmRpbmdzID0gX3Byb3BzLndvcmRpbmdzO1xuXG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEV2ZW50TGlzdGVuZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICB0YXJnZXQ6ICd3aW5kb3cnLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVXaW5kb3dLZXlEb3duXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGF0ZURpc3BsYXkyLmRlZmF1bHQsIHtcbiAgICAgICAgICBEYXRlVGltZUZvcm1hdDogRGF0ZVRpbWVGb3JtYXQsXG4gICAgICAgICAgZGlzYWJsZVllYXJTZWxlY3Rpb246IHRoaXMucHJvcHMuZGlzYWJsZVllYXJTZWxlY3Rpb24sXG4gICAgICAgICAgb25Ub3VjaFRhcE1vbnRoRGF5OiB0aGlzLmhhbmRsZVRvdWNoVGFwRGF0ZURpc3BsYXlNb250aERheSxcbiAgICAgICAgICBvblRvdWNoVGFwWWVhcjogdGhpcy5oYW5kbGVUb3VjaFRhcERhdGVEaXNwbGF5WWVhcixcbiAgICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICBtb250aERheVNlbGVjdGVkOiB0aGlzLnN0YXRlLmRpc3BsYXlNb250aERheSxcbiAgICAgICAgICBtb2RlOiB0aGlzLnByb3BzLm1vZGUsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSxcbiAgICAgICAgICB3ZWVrQ291bnQ6IHdlZWtDb3VudFxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuY2FsZW5kYXIpIH0sXG4gICAgICAgICAgdGhpcy5zdGF0ZS5kaXNwbGF5TW9udGhEYXkgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLmNhbGVuZGFyQ29udGFpbmVyKSB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NhbGVuZGFyVG9vbGJhcjIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICBEYXRlVGltZUZvcm1hdDogRGF0ZVRpbWVGb3JtYXQsXG4gICAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICAgICAgICBkaXNwbGF5RGF0ZTogdGhpcy5zdGF0ZS5kaXNwbGF5RGF0ZSxcbiAgICAgICAgICAgICAgb25Nb250aENoYW5nZTogdGhpcy5oYW5kbGVNb250aENoYW5nZSxcbiAgICAgICAgICAgICAgcHJldk1vbnRoOiB0b29sYmFySW50ZXJhY3Rpb25zLnByZXZNb250aCxcbiAgICAgICAgICAgICAgbmV4dE1vbnRoOiB0b29sYmFySW50ZXJhY3Rpb25zLm5leHRNb250aFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLndlZWtUaXRsZSkgfSxcbiAgICAgICAgICAgICAgZGF5c0FycmF5Lm1hcChmdW5jdGlvbiAoZXZlbnQsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3R5bGU6IHdlZWtUaXRsZURheVN0eWxlIH0sXG4gICAgICAgICAgICAgICAgICAoMCwgX2RhdGVVdGlscy5sb2NhbGl6ZWRXZWVrZGF5KShEYXRlVGltZUZvcm1hdCwgbG9jYWxlLCBpLCBmaXJzdERheU9mV2VlaylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfU2xpZGVJbjIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgeyBkaXJlY3Rpb246IHRoaXMuc3RhdGUudHJhbnNpdGlvbkRpcmVjdGlvbiwgc3R5bGU6IHN0eWxlcy50cmFuc2l0aW9uU2xpZGUgfSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NhbGVuZGFyTW9udGgyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0ZTogdGhpcy5zdGF0ZS5kaXNwbGF5RGF0ZSxcbiAgICAgICAgICAgICAgICBmaXJzdERheU9mV2VlazogdGhpcy5wcm9wcy5maXJzdERheU9mV2VlayxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc3RhdGUuZGlzcGxheURhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgbWluRGF0ZTogdGhpcy5wcm9wcy5taW5EYXRlLFxuICAgICAgICAgICAgICAgIG1heERhdGU6IHRoaXMucHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICBvblRvdWNoVGFwRGF5OiB0aGlzLmhhbmRsZVRvdWNoVGFwRGF5LFxuICAgICAgICAgICAgICAgIHJlZjogJ2NhbGVuZGFyJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlLFxuICAgICAgICAgICAgICAgIHNob3VsZERpc2FibGVEYXRlOiB0aGlzLnByb3BzLnNob3VsZERpc2FibGVEYXRlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9udGhEYXkgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnllYXJDb250YWluZXIpIH0sXG4gICAgICAgICAgICB0aGlzLnllYXJTZWxlY3RvcigpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBva0xhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DYWxlbmRhckFjdGlvbkJ1dHRvbnMyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgIGF1dG9PazogdGhpcy5wcm9wcy5hdXRvT2ssXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogY2FuY2VsTGFiZWwsXG4gICAgICAgICAgICBva0xhYmVsOiBva0xhYmVsLFxuICAgICAgICAgICAgb25Ub3VjaFRhcENhbmNlbDogb25Ub3VjaFRhcENhbmNlbCxcbiAgICAgICAgICAgIG9uVG91Y2hUYXBPazogb25Ub3VjaFRhcE9rLFxuICAgICAgICAgICAgd29yZGluZ3M6IHdvcmRpbmdzXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsZW5kYXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIERhdGVUaW1lRm9ybWF0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYXV0b09rOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNhbmNlbExhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGZpcnN0RGF5T2ZXZWVrOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBsb2NhbGU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1heERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBtaW5EYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbW9kZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZSddKSxcbiAgb2tMYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICBvblRvdWNoVGFwQ2FuY2VsOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVG91Y2hUYXBEYXk6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Ub3VjaFRhcE9rOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9wZW46IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkRGlzYWJsZURhdGU6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgd29yZGluZ3M6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBEYXRlVGltZUZvcm1hdDogX2RhdGVVdGlscy5kYXRlVGltZUZvcm1hdCxcbiAgZGlzYWJsZVllYXJTZWxlY3Rpb246IGZhbHNlLFxuICBpbml0aWFsRGF0ZTogbmV3IERhdGUoKSxcbiAgbG9jYWxlOiAnZW4tVVMnLFxuICBtaW5EYXRlOiAoMCwgX2RhdGVVdGlscy5hZGRZZWFycykobmV3IERhdGUoKSwgLTEwMCksXG4gIG1heERhdGU6ICgwLCBfZGF0ZVV0aWxzLmFkZFllYXJzKShuZXcgRGF0ZSgpLCAxMDApXG59O1xuQ2FsZW5kYXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENhbGVuZGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ZsYXRCdXR0b24gPSByZXF1aXJlKCcuLi9GbGF0QnV0dG9uJyk7XG5cbnZhciBfRmxhdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbGF0QnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2FsZW5kYXJBY3Rpb25CdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FsZW5kYXJBY3Rpb25CdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbGVuZGFyQWN0aW9uQnV0dG9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxlbmRhckFjdGlvbkJ1dHRvbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhbGVuZGFyQWN0aW9uQnV0dG9uKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxlbmRhckFjdGlvbkJ1dHRvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjYW5jZWxMYWJlbCA9IF9wcm9wcy5jYW5jZWxMYWJlbDtcbiAgICAgIHZhciBva0xhYmVsID0gX3Byb3BzLm9rTGFiZWw7XG4gICAgICB2YXIgd29yZGluZ3MgPSBfcHJvcHMud29yZGluZ3M7XG5cblxuICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgbWF4SGVpZ2h0OiA0OCxcbiAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGZsYXRCdXR0b25zOiB7XG4gICAgICAgICAgZm9udHNpemU6IDE0LFxuICAgICAgICAgIG1hcmdpbjogJzRweCA4cHggOHB4IDBweCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiAzNixcbiAgICAgICAgICBtaW5XaWR0aDogNjQsXG4gICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBzdHlsZXMucm9vdCB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmxhdEJ1dHRvbjIuZGVmYXVsdCwge1xuICAgICAgICAgIGxhYmVsOiB3b3JkaW5ncyA/IHdvcmRpbmdzLmNhbmNlbCA6IGNhbmNlbExhYmVsLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMucHJvcHMub25Ub3VjaFRhcENhbmNlbCxcbiAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZmxhdEJ1dHRvbnNcbiAgICAgICAgfSksXG4gICAgICAgICF0aGlzLnByb3BzLmF1dG9PayAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmxhdEJ1dHRvbjIuZGVmYXVsdCwge1xuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnJlZnMuY2FsZW5kYXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlZnMuY2FsZW5kYXIuaXNTZWxlY3RlZERhdGVEaXNhYmxlZCgpLFxuICAgICAgICAgIGxhYmVsOiB3b3JkaW5ncyA/IHdvcmRpbmdzLm9rIDogb2tMYWJlbCxcbiAgICAgICAgICBvblRvdWNoVGFwOiB0aGlzLnByb3BzLm9uVG91Y2hUYXBPayxcbiAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZmxhdEJ1dHRvbnNcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyQWN0aW9uQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ2FsZW5kYXJBY3Rpb25CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhdXRvT2s6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2FuY2VsTGFiZWw6IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgb2tMYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICBvblRvdWNoVGFwQ2FuY2VsOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVG91Y2hUYXBPazogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICB3b3JkaW5nczogX3JlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDYWxlbmRhckFjdGlvbkJ1dHRvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL0NhbGVuZGFyQWN0aW9uQnV0dG9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDUyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi9kYXRlVXRpbHMnKTtcblxudmFyIF9EYXlCdXR0b24gPSByZXF1aXJlKCcuL0RheUJ1dHRvbicpO1xuXG52YXIgX0RheUJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EYXlCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDYWxlbmRhck1vbnRoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbGVuZGFyTW9udGgsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbGVuZGFyTW9udGgoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXJNb250aCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXJNb250aCkpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBEYXkgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoVGFwRGF5KSBfdGhpcy5wcm9wcy5vblRvdWNoVGFwRGF5KGV2ZW50LCBkYXRlKTtcbiAgICB9LCBfdGhpcy5zdHlsZXMgPSB7XG4gICAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgaGVpZ2h0OiAyMjgsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBNb3pQYWRkaW5nU3RhcnQ6IDBcbiAgICAgIH0sXG4gICAgICB3ZWVrOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICAgICAgaGVpZ2h0OiAzNCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsZW5kYXJNb250aCwgW3tcbiAgICBrZXk6ICdpc1NlbGVjdGVkRGF0ZURpc2FibGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTZWxlY3RlZERhdGVEaXNhYmxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZURpc2FibGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZERpc2FibGVEYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkRGlzYWJsZURhdGUoZGF5KSB7XG4gICAgICBpZiAoZGF5ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgZGlzYWJsZWQgPSAhKDAsIF9kYXRlVXRpbHMuaXNCZXR3ZWVuRGF0ZXMpKGRheSwgdGhpcy5wcm9wcy5taW5EYXRlLCB0aGlzLnByb3BzLm1heERhdGUpO1xuICAgICAgaWYgKCFkaXNhYmxlZCAmJiB0aGlzLnByb3BzLnNob3VsZERpc2FibGVEYXRlKSBkaXNhYmxlZCA9IHRoaXMucHJvcHMuc2hvdWxkRGlzYWJsZURhdGUoZGF5KTtcblxuICAgICAgcmV0dXJuIGRpc2FibGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdlZWtFbGVtZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdlZWtFbGVtZW50cygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgd2Vla0FycmF5ID0gKDAsIF9kYXRlVXRpbHMuZ2V0V2Vla0FycmF5KSh0aGlzLnByb3BzLmRpc3BsYXlEYXRlLCB0aGlzLnByb3BzLmZpcnN0RGF5T2ZXZWVrKTtcblxuICAgICAgcmV0dXJuIHdlZWtBcnJheS5tYXAoZnVuY3Rpb24gKHdlZWssIGkpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsga2V5OiBpLCBzdHlsZTogX3RoaXMyLnN0eWxlcy53ZWVrIH0sXG4gICAgICAgICAgX3RoaXMyLmdldERheUVsZW1lbnRzKHdlZWssIGkpXG4gICAgICAgICk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREYXlFbGVtZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERheUVsZW1lbnRzKHdlZWssIGkpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gd2Vlay5tYXAoZnVuY3Rpb24gKGRheSwgaikge1xuICAgICAgICB2YXIgaXNTYW1lRGF0ZSA9ICgwLCBfZGF0ZVV0aWxzLmlzRXF1YWxEYXRlKShfdGhpczMucHJvcHMuc2VsZWN0ZWREYXRlLCBkYXkpO1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpczMuc2hvdWxkRGlzYWJsZURhdGUoZGF5KTtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gIWRpc2FibGVkICYmIGlzU2FtZURhdGU7XG5cbiAgICAgICAgaWYgKGlzU2FtZURhdGUpIHtcbiAgICAgICAgICBfdGhpczMuc2VsZWN0ZWREYXRlRGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGF5QnV0dG9uMi5kZWZhdWx0LCB7XG4gICAgICAgICAgZGF0ZTogZGF5LFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBrZXk6ICdkYicgKyAoaSArIGopLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IF90aGlzMy5oYW5kbGVUb3VjaFRhcERheSxcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiB0aGlzLnN0eWxlcy5yb290IH0sXG4gICAgICAgIHRoaXMuZ2V0V2Vla0VsZW1lbnRzKClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyTW9udGg7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DYWxlbmRhck1vbnRoLnByb3BUeXBlcyA9IHtcbiAgYXV0b09rOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGRpc3BsYXlEYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaXJzdERheU9mV2VlazogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG1heERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBtaW5EYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgb25Ub3VjaFRhcERheTogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZERhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNob3VsZERpc2FibGVEYXRlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDYWxlbmRhck1vbnRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXJNb250aC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi9kYXRlVXRpbHMnKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgZGF0ZSA9IHByb3BzLmRhdGU7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkO1xuICB2YXIgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZDtcbiAgdmFyIGhvdmVyID0gc3RhdGUuaG92ZXI7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG4gIHZhciBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWU7XG4gIHZhciBkYXRlUGlja2VyID0gX2NvbnRleHQkbXVpVGhlbWUuZGF0ZVBpY2tlcjtcblxuXG4gIHZhciBsYWJlbENvbG9yID0gYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICB2YXIgYnV0dG9uU3RhdGVPcGFjaXR5ID0gMDtcbiAgdmFyIGJ1dHRvblN0YXRlVHJhbnNmb3JtID0gJ3NjYWxlKDApJztcblxuICBpZiAoaG92ZXIgfHwgc2VsZWN0ZWQpIHtcbiAgICBsYWJlbENvbG9yID0gZGF0ZVBpY2tlci5zZWxlY3RUZXh0Q29sb3I7XG4gICAgYnV0dG9uU3RhdGVPcGFjaXR5ID0gc2VsZWN0ZWQgPyAxIDogMC42O1xuICAgIGJ1dHRvblN0YXRlVHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgfSBlbHNlIGlmICgoMCwgX2RhdGVVdGlscy5pc0VxdWFsRGF0ZSkoZGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICBsYWJlbENvbG9yID0gZGF0ZVBpY2tlci5jb2xvcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIG9wYWNpdHk6IGRpc2FibGVkICYmICcwLjYnLFxuICAgICAgcGFkZGluZzogJzRweCAwcHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgd2lkdGg6IDQyXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfSxcbiAgICBidXR0b25TdGF0ZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRlUGlja2VyLnNlbGVjdENvbG9yLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGhlaWdodDogMzQsXG4gICAgICBsZWZ0OiA0LFxuICAgICAgb3BhY2l0eTogYnV0dG9uU3RhdGVPcGFjaXR5LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICB0cmFuc2Zvcm06IGJ1dHRvblN0YXRlVHJhbnNmb3JtLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHdpZHRoOiAzNFxuICAgIH1cbiAgfTtcbn1cblxudmFyIERheUJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXlCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERheUJ1dHRvbigpIHtcbiAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXlCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX09iamVjdCRnZXRQcm90b3R5cGVPID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKERheUJ1dHRvbikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcjogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcjogdHJ1ZSB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcjogZmFsc2UgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQgJiYgX3RoaXMucHJvcHMub25Ub3VjaFRhcCkgX3RoaXMucHJvcHMub25Ub3VjaFRhcChldmVudCwgX3RoaXMucHJvcHMuZGF0ZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwga2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmIF90aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbktleWJvYXJkRm9jdXMoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCwgX3RoaXMucHJvcHMuZGF0ZSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF5QnV0dG9uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGRhdGUgPSBfcHJvcHMuZGF0ZTtcbiAgICAgIHZhciBvblRvdWNoVGFwID0gX3Byb3BzLm9uVG91Y2hUYXA7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBfcHJvcHMuc2VsZWN0ZWQ7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnZGF0ZScsICdvblRvdWNoVGFwJywgJ3NlbGVjdGVkJ10pO1xuXG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGU6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlOiB0cnVlLFxuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlcy5yb290XG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuYnV0dG9uU3RhdGUpIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMubGFiZWwpIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5kYXRlLmdldERhdGUoKVxuICAgICAgICApXG4gICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5yb290KSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5QnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGF5QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGRpc2FibGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5Ym9hcmRGb2N1czogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoVGFwOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5EYXlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcbkRheUJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGF5QnV0dG9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvRGF5QnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gNTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9ZZWFyQnV0dG9uID0gcmVxdWlyZSgnLi9ZZWFyQnV0dG9uJyk7XG5cbnZhciBfWWVhckJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ZZWFyQnV0dG9uKTtcblxudmFyIF9kYXRlVXRpbHMgPSByZXF1aXJlKCcuL2RhdGVVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDYWxlbmRhclllYXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FsZW5kYXJZZWFyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYWxlbmRhclllYXIoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXJZZWFyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYWxlbmRhclllYXIpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZVRvdWNoVGFwWWVhciA9IGZ1bmN0aW9uIChldmVudCwgeWVhcikge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hUYXBZZWFyKSBfdGhpcy5wcm9wcy5vblRvdWNoVGFwWWVhcihldmVudCwgeWVhcik7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsZW5kYXJZZWFyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWRZZWFyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkWWVhcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFllYXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0WWVhcnMoKSB7XG4gICAgICB2YXIgbWluWWVhciA9IHRoaXMucHJvcHMubWluRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgdmFyIG1heFllYXIgPSB0aGlzLnByb3BzLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgdmFyIHllYXJzID0gW107XG4gICAgICB2YXIgZGF0ZUNoZWNrID0gKDAsIF9kYXRlVXRpbHMuY2xvbmVEYXRlKSh0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICBmb3IgKHZhciB5ZWFyID0gbWluWWVhcjsgeWVhciA8PSBtYXhZZWFyOyB5ZWFyKyspIHtcbiAgICAgICAgZGF0ZUNoZWNrLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuICAgICAgICB2YXIgc2VsZWN0ZWRQcm9wcyA9IHt9O1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFByb3BzID0geyByZWY6ICdzZWxlY3RlZFllYXJCdXR0b24nIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeWVhckJ1dHRvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9ZZWFyQnV0dG9uMi5kZWZhdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5OiAneWInICsgeWVhcixcbiAgICAgICAgICBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwWWVhcixcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgeWVhcjogeWVhclxuICAgICAgICB9LCBzZWxlY3RlZFByb3BzKSk7XG5cbiAgICAgICAgeWVhcnMucHVzaCh5ZWFyQnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHllYXJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Njcm9sbFRvU2VsZWN0ZWRZZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG9TZWxlY3RlZFllYXIoKSB7XG4gICAgICBpZiAodGhpcy5yZWZzLnNlbGVjdGVkWWVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgeWVhckJ1dHRvbk5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLnNlbGVjdGVkWWVhckJ1dHRvbik7XG5cbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgdmFyIHllYXJCdXR0b25Ob2RlSGVpZ2h0ID0geWVhckJ1dHRvbk5vZGUuY2xpZW50SGVpZ2h0IHx8IDMyO1xuXG4gICAgICB2YXIgc2Nyb2xsWU9mZnNldCA9IHllYXJCdXR0b25Ob2RlLm9mZnNldFRvcCArIHllYXJCdXR0b25Ob2RlSGVpZ2h0IC8gMiAtIGNvbnRhaW5lckhlaWdodCAvIDI7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsWU9mZnNldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgeWVhcnMgPSB0aGlzLmdldFllYXJzKCk7XG4gICAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLmRhdGVQaWNrZXIuY2FsZW5kYXJZZWFyQmFja2dyb3VuZENvbG9yO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcbiAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLmNoaWxkKSB9LFxuICAgICAgICAgIHllYXJzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyWWVhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNhbGVuZGFyWWVhci5wcm9wVHlwZXMgPSB7XG4gIGRpc3BsYXlEYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBtYXhEYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbWluRGF0ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIG9uVG91Y2hUYXBZZWFyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkRGF0ZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgd29yZGluZ3M6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuQ2FsZW5kYXJZZWFyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDYWxlbmRhclllYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlci9DYWxlbmRhclllYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkO1xuICB2YXIgeWVhciA9IHByb3BzLnllYXI7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG4gIHZhciBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWU7XG4gIHZhciBkYXRlUGlja2VyID0gX2NvbnRleHQkbXVpVGhlbWUuZGF0ZVBpY2tlcjtcbiAgdmFyIGhvdmVyID0gc3RhdGUuaG92ZXI7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgY29sb3I6IHllYXIgPT09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAmJiBkYXRlUGlja2VyLmNvbG9yLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogaG92ZXIgfHwgc2VsZWN0ZWQgPyBkYXRlUGlja2VyLmNvbG9yIDogYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgZm9udFNpemU6IHNlbGVjdGVkID8gMjYgOiAxNyxcbiAgICAgIGZvbnRXZWlnaHQ6IGhvdmVyID8gNDUwIDogc2VsZWN0ZWQgPyA1MDAgOiA0MDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvcDogLTFcbiAgICB9XG4gIH07XG59XG5cbnZhciBZZWFyQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFllYXJCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFllYXJCdXR0b24oKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWWVhckJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoWWVhckJ1dHRvbikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcjogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcjogdHJ1ZSB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcjogZmFsc2UgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoVGFwKSBfdGhpcy5wcm9wcy5vblRvdWNoVGFwKGV2ZW50LCBfdGhpcy5wcm9wcy55ZWFyKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhZZWFyQnV0dG9uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgICB2YXIgeWVhciA9IF9wcm9wcy55ZWFyO1xuICAgICAgdmFyIG9uVG91Y2hUYXAgPSBfcHJvcHMub25Ub3VjaFRhcDtcbiAgICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wcy5zZWxlY3RlZDtcblxuICAgICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAneWVhcicsICdvblRvdWNoVGFwJywgJ3NlbGVjdGVkJ10pO1xuXG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGU6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlOiB0cnVlLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlcy5yb290XG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMubGFiZWwpIH0sXG4gICAgICAgICAgeWVhclxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBZZWFyQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuWWVhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uVG91Y2hUYXA6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgeWVhcjogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5ZZWFyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0ZWQ6IGZhbHNlXG59O1xuWWVhckJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gWWVhckJ1dHRvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9EYXRlUGlja2VyL1llYXJCdXR0b24uanNcbiAqKiBtb2R1bGUgaWQgPSA1MjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ljb25CdXR0b24gPSByZXF1aXJlKCcuLi9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxudmFyIF9jaGV2cm9uTGVmdCA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZXZyb24tbGVmdCcpO1xuXG52YXIgX2NoZXZyb25MZWZ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZXZyb25MZWZ0KTtcblxudmFyIF9jaGV2cm9uUmlnaHQgPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9jaGV2cm9uLXJpZ2h0Jyk7XG5cbnZhciBfY2hldnJvblJpZ2h0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZXZyb25SaWdodCk7XG5cbnZhciBfU2xpZGVJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL1NsaWRlSW4nKTtcblxudmFyIF9TbGlkZUluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRlSW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6IDQ4XG4gIH0sXG4gIHRpdGxlRGl2OiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICB0aXRsZVRleHQ6IHtcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nVG9wOiAxMlxuICB9XG59O1xuXG52YXIgQ2FsZW5kYXJUb29sYmFyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbGVuZGFyVG9vbGJhciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2FsZW5kYXJUb29sYmFyKCkge1xuICAgIHZhciBfT2JqZWN0JGdldFByb3RvdHlwZU87XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGVuZGFyVG9vbGJhcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXJUb29sYmFyKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYW5zaXRpb25EaXJlY3Rpb246ICd1cCdcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFRhcFByZXZNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlICYmIF90aGlzLnByb3BzLnByZXZNb250aCkgX3RoaXMucHJvcHMub25Nb250aENoYW5nZSgtMSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBOZXh0TW9udGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb250aENoYW5nZSAmJiBfdGhpcy5wcm9wcy5uZXh0TW9udGgpIF90aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UoMSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsZW5kYXJUb29sYmFyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5kaXNwbGF5RGF0ZSAhPT0gdGhpcy5wcm9wcy5kaXNwbGF5RGF0ZSkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gbmV4dFByb3BzLmRpc3BsYXlEYXRlID4gdGhpcy5wcm9wcy5kaXNwbGF5RGF0ZSA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYW5zaXRpb25EaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBEYXRlVGltZUZvcm1hdCA9IF9wcm9wcy5EYXRlVGltZUZvcm1hdDtcbiAgICAgIHZhciBsb2NhbGUgPSBfcHJvcHMubG9jYWxlO1xuICAgICAgdmFyIGRpc3BsYXlEYXRlID0gX3Byb3BzLmRpc3BsYXlEYXRlO1xuXG5cbiAgICAgIHZhciBkYXRlVGltZUZvcm1hdHRlZCA9IG5ldyBEYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgICB9KS5mb3JtYXQoZGlzcGxheURhdGUpO1xuXG4gICAgICB2YXIgbmV4dEJ1dHRvbkljb24gPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuaXNSdGwgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY2hldnJvbkxlZnQyLmRlZmF1bHQsIG51bGwpIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NoZXZyb25SaWdodDIuZGVmYXVsdCwgbnVsbCk7XG4gICAgICB2YXIgcHJldkJ1dHRvbkljb24gPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuaXNSdGwgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY2hldnJvblJpZ2h0Mi5kZWZhdWx0LCBudWxsKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9jaGV2cm9uTGVmdDIuZGVmYXVsdCwgbnVsbCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlcy5yb290IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9JY29uQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5wcm9wcy5wcmV2TW9udGgsXG4gICAgICAgICAgICBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwUHJldk1vbnRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2QnV0dG9uSWNvblxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfU2xpZGVJbjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuc3RhdGUudHJhbnNpdGlvbkRpcmVjdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMudGl0bGVEaXZcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGtleTogZGF0ZVRpbWVGb3JtYXR0ZWQsIHN0eWxlOiBzdHlsZXMudGl0bGVUZXh0IH0sXG4gICAgICAgICAgICBkYXRlVGltZUZvcm1hdHRlZFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLnByb3BzLm5leHRNb250aCxcbiAgICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXBOZXh0TW9udGhcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5leHRCdXR0b25JY29uXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyVG9vbGJhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNhbGVuZGFyVG9vbGJhci5wcm9wVHlwZXMgPSB7XG4gIERhdGVUaW1lRm9ybWF0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzcGxheURhdGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2FsZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmV4dE1vbnRoOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uTW9udGhDaGFuZ2U6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcHJldk1vbnRoOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5DYWxlbmRhclRvb2xiYXIuZGVmYXVsdFByb3BzID0ge1xuICBuZXh0TW9udGg6IHRydWUsXG4gIHByZXZNb250aDogdHJ1ZVxufTtcbkNhbGVuZGFyVG9vbGJhci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2FsZW5kYXJUb29sYmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvQ2FsZW5kYXJUb29sYmFyLmpzXG4gKiogbW9kdWxlIGlkID0gNTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5hdmlnYXRpb25DaGV2cm9uTGVmdCA9IGZ1bmN0aW9uIE5hdmlnYXRpb25DaGV2cm9uTGVmdChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbkNoZXZyb25MZWZ0ID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uQ2hldnJvbkxlZnQpO1xuTmF2aWdhdGlvbkNoZXZyb25MZWZ0LmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25DaGV2cm9uTGVmdCc7XG5OYXZpZ2F0aW9uQ2hldnJvbkxlZnQubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkNoZXZyb25MZWZ0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZXZyb24tbGVmdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOYXZpZ2F0aW9uQ2hldnJvblJpZ2h0ID0gZnVuY3Rpb24gTmF2aWdhdGlvbkNoZXZyb25SaWdodChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6JyB9KVxuICApO1xufTtcbk5hdmlnYXRpb25DaGV2cm9uUmlnaHQgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKE5hdmlnYXRpb25DaGV2cm9uUmlnaHQpO1xuTmF2aWdhdGlvbkNoZXZyb25SaWdodC5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uQ2hldnJvblJpZ2h0Jztcbk5hdmlnYXRpb25DaGV2cm9uUmlnaHQubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkNoZXZyb25SaWdodDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jaGV2cm9uLXJpZ2h0LmpzXG4gKiogbW9kdWxlIGlkID0gNTMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RBZGRvbnNUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG52YXIgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9TbGlkZUluQ2hpbGQgPSByZXF1aXJlKCcuL1NsaWRlSW5DaGlsZCcpO1xuXG52YXIgX1NsaWRlSW5DaGlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkZUluQ2hpbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNsaWRlSW4gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVJbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2xpZGVJbigpIHtcbiAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZUluKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihTbGlkZUluKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5nZXRMZWF2ZURpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5kaXJlY3Rpb247XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVJbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgZW50ZXJEZWxheSA9IF9wcm9wcy5lbnRlckRlbGF5O1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoaWxkU3R5bGUgPSBfcHJvcHMuY2hpbGRTdHlsZTtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBfcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2VudGVyRGVsYXknLCAnY2hpbGRyZW4nLCAnY2hpbGRTdHlsZScsICdkaXJlY3Rpb24nLCAnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfU2xpZGVJbkNoaWxkMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBlbnRlckRlbGF5OiBlbnRlckRlbGF5LFxuICAgICAgICAgICAgZ2V0TGVhdmVEaXJlY3Rpb246IF90aGlzMi5nZXRMZWF2ZURpcmVjdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiBjaGlsZFN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZFxuICAgICAgICApO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0QWRkb25zVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSxcbiAgICAgICAgICBjb21wb25lbnQ6ICdkaXYnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXdDaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVJbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNsaWRlSW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZFN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgZGlyZWN0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICd1cCcsICdkb3duJ10pLFxuICBlbnRlckRlbGF5OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuU2xpZGVJbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGVudGVyRGVsYXk6IDAsXG4gIGRpcmVjdGlvbjogJ2xlZnQnXG59O1xuU2xpZGVJbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2xpZGVJbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9TbGlkZUluLmpzXG4gKiogbW9kdWxlIGlkID0gNTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNsaWRlSW5DaGlsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZUluQ2hpbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNsaWRlSW5DaGlsZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVJbkNoaWxkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVJbkNoaWxkKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZUluQ2hpbGQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmVudGVyVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubGVhdmVUaW1lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICB2YXIgeCA9IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnMTAwJScgOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICctMTAwJScgOiAnMCc7XG4gICAgICB2YXIgeSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAndXAnID8gJzEwMCUnIDogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdkb3duJyA/ICctMTAwJScgOiAnMCc7XG5cbiAgICAgIHN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoc3R5bGUsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKScpO1xuXG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLnByb3BzLmVudGVyRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkRW50ZXIoKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICBzdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbExlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5wcm9wcy5nZXRMZWF2ZURpcmVjdGlvbigpO1xuICAgICAgdmFyIHggPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICctMTAwJScgOiBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnMTAwJScgOiAnMCc7XG4gICAgICB2YXIgeSA9IGRpcmVjdGlvbiA9PT0gJ3VwJyA/ICctMTAwJScgOiBkaXJlY3Rpb24gPT09ICdkb3duJyA/ICcxMDAlJyA6ICcwJztcblxuICAgICAgc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJyk7XG5cbiAgICAgIHRoaXMubGVhdmVUaW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDQ1MCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgZW50ZXJEZWxheSA9IF9wcm9wcy5lbnRlckRlbGF5O1xuICAgICAgdmFyIGdldExlYXZlRGlyZWN0aW9uID0gX3Byb3BzLmdldExlYXZlRGlyZWN0aW9uO1xuICAgICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2VudGVyRGVsYXknLCAnZ2V0TGVhdmVEaXJlY3Rpb24nLCAnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KG51bGwsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSlcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFJvb3RTdHlsZXMpIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVJbkNoaWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU2xpZGVJbkNoaWxkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgZGlyZWN0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJEZWxheTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8vIFRoaXMgY2FsbGJhY2sgaXMgbmVlZGVkIGJhY2F1c2UgdGhlIGRpcmVjdGlvbiBjb3VsZCBjaGFuZ2Ugd2hlbiBsZWF2aW5nIHRoZSBET01cbiAgZ2V0TGVhdmVEaXJlY3Rpb246IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5TbGlkZUluQ2hpbGQuZGVmYXVsdFByb3BzID0ge1xuICBlbnRlckRlbGF5OiAwXG59O1xuU2xpZGVJbkNoaWxkLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTbGlkZUluQ2hpbGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvU2xpZGVJbkNoaWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9TbGlkZUluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvU2xpZGVJbicpO1xuXG52YXIgX1NsaWRlSW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGVJbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBkYXRlUGlja2VyID0gY29udGV4dC5tdWlUaGVtZS5kYXRlUGlja2VyO1xuICB2YXIgc2VsZWN0ZWRZZWFyID0gc3RhdGUuc2VsZWN0ZWRZZWFyO1xuXG4gIHZhciBpc0xhbmRzY2FwZSA9IHByb3BzLm1vZGUgPT09ICdsYW5kc2NhcGUnO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgd2lkdGg6IGlzTGFuZHNjYXBlID8gMTY1IDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiBpc0xhbmRzY2FwZSA/IDMzMCA6ICdhdXRvJyxcbiAgICAgIGZsb2F0OiBpc0xhbmRzY2FwZSA/ICdsZWZ0JyA6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRlUGlja2VyLnNlbGVjdENvbG9yLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMixcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBpc0xhbmRzY2FwZSA/IDAgOiAyLFxuICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogaXNMYW5kc2NhcGUgPyAyIDogMCxcbiAgICAgIGNvbG9yOiBkYXRlUGlja2VyLnRleHRDb2xvcixcbiAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgIG1vbnRoRGF5OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZm9udFNpemU6IDM2LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5tb2RlID09PSAnbGFuZHNjYXBlJyA/ICcxMDAlJyA6IDM4LFxuICAgICAgb3BhY2l0eTogc2VsZWN0ZWRZZWFyID8gMC43IDogMSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCdcbiAgICB9LFxuICAgIG1vbnRoRGF5VGl0bGU6IHtcbiAgICAgIGN1cnNvcjogIXNlbGVjdGVkWWVhciA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICB5ZWFyOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICAgIGhlaWdodDogMTYsXG4gICAgICBvcGFjaXR5OiBzZWxlY3RlZFllYXIgPyAxIDogMC43LFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIG1hcmdpbkJvdHRvbTogMTBcbiAgICB9LFxuICAgIHllYXJUaXRsZToge1xuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlWWVhclNlbGVjdGlvbiA/ICdub3QtYWxsb3dlZCcgOiAhc2VsZWN0ZWRZZWFyID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBEYXRlRGlzcGxheSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRlRGlzcGxheSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGF0ZURpc3BsYXkoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZURpc3BsYXkpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX09iamVjdCRnZXRQcm90b3R5cGVPID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKERhdGVEaXNwbGF5KSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkWWVhcjogZmFsc2UsXG4gICAgICB0cmFuc2l0aW9uRGlyZWN0aW9uOiAndXAnXG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBNb250aERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoVGFwTW9udGhEYXkgJiYgX3RoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hUYXBNb250aERheSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkWWVhcjogZmFsc2UgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBZZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hUYXBZZWFyICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlWWVhclNlbGVjdGlvbiAmJiAhX3RoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hUYXBZZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZVllYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFllYXI6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0ZURpc3BsYXksIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm1vbnRoRGF5U2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkWWVhcjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWREYXRlICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gbmV4dFByb3BzLnNlbGVjdGVkRGF0ZSA+IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhbnNpdGlvbkRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLm1vbnRoRGF5U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZFllYXI6ICFuZXh0UHJvcHMubW9udGhEYXlTZWxlY3RlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBEYXRlVGltZUZvcm1hdCA9IF9wcm9wcy5EYXRlVGltZUZvcm1hdDtcbiAgICAgIHZhciBkaXNhYmxlWWVhclNlbGVjdGlvbiA9IF9wcm9wcy5kaXNhYmxlWWVhclNlbGVjdGlvbjtcbiAgICAgIHZhciBsb2NhbGUgPSBfcHJvcHMubG9jYWxlO1xuICAgICAgdmFyIG1vZGUgPSBfcHJvcHMubW9kZTtcbiAgICAgIHZhciBtb250aERheVNlbGVjdGVkID0gX3Byb3BzLm1vbnRoRGF5U2VsZWN0ZWQ7XG4gICAgICB2YXIgb25Ub3VjaFRhcE1vbnRoRGF5ID0gX3Byb3BzLm9uVG91Y2hUYXBNb250aERheTtcbiAgICAgIHZhciBvblRvdWNoVGFwWWVhciA9IF9wcm9wcy5vblRvdWNoVGFwWWVhcjtcbiAgICAgIHZhciBzZWxlY3RlZERhdGUgPSBfcHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuICAgICAgdmFyIHdlZWtDb3VudCA9IF9wcm9wcy53ZWVrQ291bnQ7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnRGF0ZVRpbWVGb3JtYXQnLCAnZGlzYWJsZVllYXJTZWxlY3Rpb24nLCAnbG9jYWxlJywgJ21vZGUnLCAnbW9udGhEYXlTZWxlY3RlZCcsICdvblRvdWNoVGFwTW9udGhEYXknLCAnb25Ub3VjaFRhcFllYXInLCAnc2VsZWN0ZWREYXRlJywgJ3N0eWxlJywgJ3dlZWtDb3VudCddKTtcblxuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgdmFyIGRhdGVUaW1lRm9ybWF0dGVkID0gbmV3IERhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgZGF5OiAnMi1kaWdpdCdcbiAgICAgIH0pLmZvcm1hdChzZWxlY3RlZERhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXIsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QsIHN0eWxlKSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1NsaWRlSW4yLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy55ZWFyLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLnRyYW5zaXRpb25EaXJlY3Rpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGtleTogeWVhciwgc3R5bGU6IHN0eWxlcy55ZWFyVGl0bGUsIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXBZZWFyIH0sXG4gICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfU2xpZGVJbjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLm1vbnRoRGF5LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLnRyYW5zaXRpb25EaXJlY3Rpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogZGF0ZVRpbWVGb3JtYXR0ZWQsXG4gICAgICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXBNb250aERheSxcbiAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5tb250aERheVRpdGxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZVRpbWVGb3JtYXR0ZWRcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVEaXNwbGF5O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGF0ZURpc3BsYXkucHJvcFR5cGVzID0ge1xuICBEYXRlVGltZUZvcm1hdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGxvY2FsZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbW9kZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZSddKSxcbiAgbW9udGhEYXlTZWxlY3RlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblRvdWNoVGFwTW9udGhEYXk6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Ub3VjaFRhcFllYXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWREYXRlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIHdlZWtDb3VudDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5EYXRlRGlzcGxheS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVZZWFyU2VsZWN0aW9uOiBmYWxzZSxcbiAgbW9udGhEYXlTZWxlY3RlZDogdHJ1ZSxcbiAgd2Vla0NvdW50OiA0XG59O1xuRGF0ZURpc3BsYXkuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERhdGVEaXNwbGF5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hdGVyaWFsLXVpL0RhdGVQaWNrZXIvRGF0ZURpc3BsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9TbmFja2JhciA9IHJlcXVpcmUoJy4vU25hY2tiYXInKTtcblxudmFyIF9TbmFja2JhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbmFja2Jhcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TbmFja2JhcjIuZGVmYXVsdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXRlcmlhbC11aS9TbmFja2Jhci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0NsaWNrQXdheUxpc3RlbmVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvQ2xpY2tBd2F5TGlzdGVuZXInKTtcblxudmFyIF9DbGlja0F3YXlMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DbGlja0F3YXlMaXN0ZW5lcik7XG5cbnZhciBfU25hY2tiYXJCb2R5ID0gcmVxdWlyZSgnLi9TbmFja2JhckJvZHknKTtcblxudmFyIF9TbmFja2JhckJvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU25hY2tiYXJCb2R5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZTtcbiAgdmFyIGRlc2t0b3BTdWJoZWFkZXJIZWlnaHQgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wU3ViaGVhZGVySGVpZ2h0O1xuICB2YXIgekluZGV4ID0gX2NvbnRleHQkbXVpVGhlbWUuekluZGV4O1xuICB2YXIgb3BlbiA9IHN0YXRlLm9wZW47XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgekluZGV4OiB6SW5kZXguc25hY2tiYXIsXG4gICAgICB2aXNpYmlsaXR5OiBvcGVuID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKDAsIDApJyA6ICd0cmFuc2xhdGUoMCwgJyArIGRlc2t0b3BTdWJoZWFkZXJIZWlnaHQgKyAncHgpJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0MDBtcycsICd0cmFuc2Zvcm0nKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDAwbXMnLCAndmlzaWJpbGl0eScpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBTbmFja2JhciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbmFja2JhciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU25hY2tiYXIoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU25hY2tiYXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX09iamVjdCRnZXRQcm90b3R5cGVPID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFNuYWNrYmFyKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jb21wb25lbnRDbGlja0F3YXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMudGltZXJUcmFuc2l0aW9uSWQpIHtcbiAgICAgICAgLy8gSWYgdHJhbnNpdGlvbmluZywgZG9uJ3QgY2xvc2UgdGhlIHNuYWNrYmFyLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vcGVuICE9PSBudWxsICYmIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdjbGlja2F3YXknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU25hY2tiYXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IHRoaXMucHJvcHMub3BlbixcbiAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy5tZXNzYWdlLFxuICAgICAgICBhY3Rpb246IHRoaXMucHJvcHMuYWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB0aGlzLnNldEF1dG9IaWRlVGltZXIoKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuICYmIG5leHRQcm9wcy5vcGVuICYmIChuZXh0UHJvcHMubWVzc2FnZSAhPT0gdGhpcy5wcm9wcy5tZXNzYWdlIHx8IG5leHRQcm9wcy5hY3Rpb24gIT09IHRoaXMucHJvcHMuYWN0aW9uKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lck9uZUF0VGhlVGltZUlkKTtcbiAgICAgICAgdGhpcy50aW1lck9uZUF0VGhlVGltZUlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5leHRQcm9wcy5tZXNzYWdlLFxuICAgICAgICAgICAgYWN0aW9uOiBuZXh0UHJvcHMuYWN0aW9uLFxuICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9wZW4gPSBuZXh0UHJvcHMub3BlbjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiBvcGVuICE9PSBudWxsID8gb3BlbiA6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICAgICBtZXNzYWdlOiBuZXh0UHJvcHMubWVzc2FnZSxcbiAgICAgICAgICBhY3Rpb246IG5leHRQcm9wcy5hY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAocHJldlN0YXRlLm9wZW4gIT09IHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdXRvSGlkZVRpbWVyKCk7XG4gICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uVGltZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckF1dG9IaWRlSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyQXV0b0hpZGVJZCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclRyYW5zaXRpb25JZCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lck9uZUF0VGhlVGltZUlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRBdXRvSGlkZVRpbWVyJyxcblxuXG4gICAgLy8gVGltZXIgdGhhdCBjb250cm9scyBkZWxheSBiZWZvcmUgc25hY2tiYXIgYXV0byBoaWRlc1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdXRvSGlkZVRpbWVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBhdXRvSGlkZUR1cmF0aW9uID0gdGhpcy5wcm9wcy5hdXRvSGlkZUR1cmF0aW9uO1xuXG4gICAgICBpZiAoYXV0b0hpZGVEdXJhdGlvbiA+IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJBdXRvSGlkZUlkKTtcbiAgICAgICAgdGhpcy50aW1lckF1dG9IaWRlSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLnByb3BzLm9wZW4gIT09IG51bGwgJiYgX3RoaXMzLnByb3BzLm9uUmVxdWVzdENsb3NlKSB7XG4gICAgICAgICAgICBfdGhpczMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ3RpbWVvdXQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBhdXRvSGlkZUR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaW1lciB0aGF0IGNvbnRyb2xzIGRlbGF5IGJlZm9yZSBjbGljay1hd2F5IGV2ZW50cyBhcmUgY2FwdHVyZWQgKGJhc2VkIG9uIHdoZW4gYW5pbWF0aW9uIGNvbXBsZXRlcylcblxuICB9LCB7XG4gICAga2V5OiAnc2V0VHJhbnNpdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VHJhbnNpdGlvblRpbWVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHRoaXMudGltZXJUcmFuc2l0aW9uSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM0LnRpbWVyVHJhbnNpdGlvbklkID0gdW5kZWZpbmVkO1xuICAgICAgfSwgNDAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBhdXRvSGlkZUR1cmF0aW9uID0gX3Byb3BzLmF1dG9IaWRlRHVyYXRpb247XG4gICAgICB2YXIgbWVzc2FnZVByb3AgPSBfcHJvcHMubWVzc2FnZTtcbiAgICAgIHZhciBvblJlcXVlc3RDbG9zZSA9IF9wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgICAgIHZhciBvbkFjdGlvblRvdWNoVGFwID0gX3Byb3BzLm9uQWN0aW9uVG91Y2hUYXA7XG4gICAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgYm9keVN0eWxlID0gX3Byb3BzLmJvZHlTdHlsZTtcblxuICAgICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhdXRvSGlkZUR1cmF0aW9uJywgJ21lc3NhZ2UnLCAnb25SZXF1ZXN0Q2xvc2UnLCAnb25BY3Rpb25Ub3VjaFRhcCcsICdzdHlsZScsICdib2R5U3R5bGUnXSk7XG5cbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGFjdGlvbiA9IF9zdGF0ZS5hY3Rpb247XG4gICAgICB2YXIgbWVzc2FnZSA9IF9zdGF0ZS5tZXNzYWdlO1xuICAgICAgdmFyIG9wZW4gPSBfc3RhdGUub3BlbjtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQ2xpY2tBd2F5TGlzdGVuZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgb25DbGlja0F3YXk6IG9wZW4gJiYgdGhpcy5jb21wb25lbnRDbGlja0F3YXkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU25hY2tiYXJCb2R5Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgc3R5bGU6IGJvZHlTdHlsZSxcbiAgICAgICAgICAgIG9uQWN0aW9uVG91Y2hUYXA6IG9uQWN0aW9uVG91Y2hUYXBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbmFja2Jhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNuYWNrYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBmb3IgdGhlIGFjdGlvbiBvbiB0aGUgc25hY2tiYXIuXG4gICAqL1xuICBhY3Rpb246IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2luZy5cbiAgICogSWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkIHRoZSBzbmFja2JhciB3aWxsIGRpc21pc3Mgbm9ybWFsbHkuXG4gICAqIElmIGEgdmFsdWUgaXMgcHJvdmlkZWQgdGhlIHNuYWNrYmFyIGNhbiBzdGlsbCBiZSBkaXNtaXNzZWQgbm9ybWFsbHkuXG4gICAqIElmIGEgc25hY2tiYXIgaXMgZGlzbWlzc2VkIGJlZm9yZSB0aGUgdGltZXIgZXhwaXJlcywgdGhlIHRpbWVyIHdpbGwgYmUgY2xlYXJlZC5cbiAgICovXG4gIGF1dG9IaWRlRHVyYXRpb246IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJvZHkgZWxlbWVudC5cbiAgICovXG4gIGJvZHlTdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQuXG4gICAqXG4gICAqIChOb3RlOiBJZiB0aGUgbWVzc2FnZSBpcyBhbiBlbGVtZW50IG9yIGFycmF5LCBhbmQgdGhlIGBTbmFja2JhcmAgbWF5IHJlLXJlbmRlciB3aGlsZSBpdCBpcyBzdGlsbCBvcGVuLFxuICAgKiBlbnN1cmUgdGhhdCB0aGUgc2FtZSBvYmplY3QgcmVtYWlucyBhcyB0aGUgYG1lc3NhZ2VgIHByb3BlcnR5IGlmIHlvdSB3YW50IHRvIGF2b2lkIHRoZSBgU25hY2tiYXJgIGhpZGluZyBhbmRcbiAgICogc2hvd2luZyBhZ2FpbilcbiAgICovXG4gIG1lc3NhZ2U6IF9yZWFjdC5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgYWN0aW9uIGJ1dHRvbiBpcyB0b3VjaHRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFjdGlvbiBidXR0b24gZXZlbnQuXG4gICAqL1xuICBvbkFjdGlvblRvdWNoVGFwOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBgU25hY2tiYXJgIGlzIHJlcXVlc3RlZCB0byBiZSBjbG9zZWQgYnkgYSBjbGljayBvdXRzaWRlIHRoZSBgU25hY2tiYXJgLCBvciBhZnRlciB0aGVcbiAgICogYGF1dG9IaWRlRHVyYXRpb25gIHRpbWVyIGV4cGlyZXMuXG4gICAqXG4gICAqIFR5cGljYWxseSBgb25SZXF1ZXN0Q2xvc2VgIGlzIHVzZWQgdG8gc2V0IHN0YXRlIGluIHRoZSBwYXJlbnQgY29tcG9uZW50LCB3aGljaCBpcyB1c2VkIHRvIGNvbnRyb2wgdGhlIGBTbmFja2JhcmBcbiAgICogYG9wZW5gIHByb3AuXG4gICAqXG4gICAqIFRoZSBgcmVhc29uYCBwYXJhbWV0ZXIgY2FuIG9wdGlvbmFsbHkgYmUgdXNlZCB0byBjb250cm9sIHRoZSByZXNwb25zZSB0byBgb25SZXF1ZXN0Q2xvc2VgLFxuICAgKiBmb3IgZXhhbXBsZSBpZ25vcmluZyBgY2xpY2thd2F5YC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6YFwidGltZW91dFwiYCAoYGF1dG9IaWRlRHVyYXRpb25gIGV4cGlyZWQpIG9yOiBgXCJjbGlja2F3YXlcImBcbiAgICovXG4gIG9uUmVxdWVzdENsb3NlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBgU25hY2tiYXJgIGlzIG9wZW5lZCBvciBub3QuXG4gICAqL1xuICBvcGVuOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5TbmFja2Jhci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU25hY2tiYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWF0ZXJpYWwtdWkvU25hY2tiYXIvU25hY2tiYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU25hY2tiYXJCb2R5ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3dpdGhXaWR0aCA9IHJlcXVpcmUoJy4uL3V0aWxzL3dpdGhXaWR0aCcpO1xuXG52YXIgX3dpdGhXaWR0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoV2lkdGgpO1xuXG52YXIgX0ZsYXRCdXR0b24gPSByZXF1aXJlKCcuLi9GbGF0QnV0dG9uJyk7XG5cbnZhciBfRmxhdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbGF0QnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIG9wZW4gPSBwcm9wcy5vcGVuO1xuICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZTtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lJGJhcyA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZTtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lJGJhczIgPSBfY29udGV4dCRtdWlUaGVtZSRiYXMuc3BhY2luZztcbiAgdmFyIGRlc2t0b3BHdXR0ZXIgPSBfY29udGV4dCRtdWlUaGVtZSRiYXMyLmRlc2t0b3BHdXR0ZXI7XG4gIHZhciBkZXNrdG9wU3ViaGVhZGVySGVpZ2h0ID0gX2NvbnRleHQkbXVpVGhlbWUkYmFzMi5kZXNrdG9wU3ViaGVhZGVySGVpZ2h0O1xuICB2YXIgZm9udEZhbWlseSA9IF9jb250ZXh0JG11aVRoZW1lJGJhcy5mb250RmFtaWx5O1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUkc25hID0gX2NvbnRleHQkbXVpVGhlbWUuc25hY2tiYXI7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRzbmEuYmFja2dyb3VuZENvbG9yO1xuICB2YXIgdGV4dENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkc25hLnRleHRDb2xvcjtcbiAgdmFyIGFjdGlvbkNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkc25hLmFjdGlvbkNvbG9yO1xuXG5cbiAgdmFyIGlzU21hbGwgPSB3aWR0aCA9PT0gX3dpdGhXaWR0aC5TTUFMTDtcblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIHBhZGRpbmc6ICcwICcgKyBkZXNrdG9wR3V0dGVyICsgJ3B4JyxcbiAgICAgIGhlaWdodDogZGVza3RvcFN1YmhlYWRlckhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGRlc2t0b3BTdWJoZWFkZXJIZWlnaHQgKyAncHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiBpc1NtYWxsID8gMCA6IDIsXG4gICAgICBtYXhXaWR0aDogaXNTbWFsbCA/ICdpbmhlcml0JyA6IDU2OCxcbiAgICAgIG1pbldpZHRoOiBpc1NtYWxsID8gJ2luaGVyaXQnIDogMjg4LFxuICAgICAgZmxleEdyb3c6IGlzU21hbGwgPyAxIDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBjb2xvcjogdGV4dENvbG9yLFxuICAgICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgICAgdHJhbnNpdGlvbjogb3BlbiA/IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc1MDBtcycsICdvcGFjaXR5JywgJzEwMG1zJykgOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDAwbXMnLCAnb3BhY2l0eScpXG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgIGNvbG9yOiBhY3Rpb25Db2xvcixcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgbWFyZ2luVG9wOiA2LFxuICAgICAgbWFyZ2luUmlnaHQ6IC0xNixcbiAgICAgIG1hcmdpbkxlZnQ6IGRlc2t0b3BHdXR0ZXIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIFNuYWNrYmFyQm9keSA9IGV4cG9ydHMuU25hY2tiYXJCb2R5ID0gZnVuY3Rpb24gU25hY2tiYXJCb2R5KHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBvcGVuID0gcHJvcHMub3BlbjtcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbjtcbiAgdmFyIG1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuICB2YXIgb25BY3Rpb25Ub3VjaFRhcCA9IHByb3BzLm9uQWN0aW9uVG91Y2hUYXA7XG4gIHZhciBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG4gIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydvcGVuJywgJ2FjdGlvbicsICdtZXNzYWdlJywgJ29uQWN0aW9uVG91Y2hUYXAnLCAnc3R5bGUnXSk7XG5cbiAgdmFyIHByZXBhcmVTdHlsZXMgPSBjb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcywgY29udGV4dCk7XG5cbiAgdmFyIGFjdGlvbkJ1dHRvbiA9IGFjdGlvbiAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmxhdEJ1dHRvbjIuZGVmYXVsdCwge1xuICAgIHN0eWxlOiBzdHlsZXMuYWN0aW9uLFxuICAgIGxhYmVsOiBhY3Rpb24sXG4gICAgb25Ub3VjaFRhcDogb25BY3Rpb25Ub3VjaFRhcFxuICB9KTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuY29udGVudCkgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgICksXG4gICAgICBhY3Rpb25CdXR0b25cbiAgICApXG4gICk7XG59O1xuXG5TbmFja2JhckJvZHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgYWN0aW9uIG9uIHRoZSBzbmFja2Jhci5cbiAgICovXG4gIGFjdGlvbjogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGhlIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLlxuICAgKlxuICAgKiAoTm90ZTogSWYgdGhlIG1lc3NhZ2UgaXMgYW4gZWxlbWVudCBvciBhcnJheSwgYW5kIHRoZSBgU25hY2tiYXJgIG1heSByZS1yZW5kZXIgd2hpbGUgaXQgaXMgc3RpbGwgb3BlbixcbiAgICogZW5zdXJlIHRoYXQgdGhlIHNhbWUgb2JqZWN0IHJlbWFpbnMgYXMgdGhlIGBtZXNzYWdlYCBwcm9wZXJ0eSBpZiB5b3Ugd2FudCB0byBhdm9pZCB0aGUgYFNuYWNrYmFyYCBoaWRpbmcgYW5kXG4gICAqIHNob3dpbmcgYWdhaW4pXG4gICAqL1xuICBtZXNzYWdlOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIGFjdGlvbiBidXR0b24gaXMgdG91Y2h0YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBY3Rpb24gYnV0dG9uIGV2ZW50LlxuICAgKi9cbiAgb25BY3Rpb25Ub3VjaFRhcDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBgU25hY2tiYXJgIGlzIG9wZW5lZCBvciBub3QuXG4gICAqL1xuICBvcGVuOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAqL1xuICB3aWR0aDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuU25hY2tiYXJCb2R5LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfd2l0aFdpZHRoMi5kZWZhdWx0KSgpKFNuYWNrYmFyQm9keSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWF0ZXJpYWwtdWkvU25hY2tiYXIvU25hY2tiYXJCb2R5LmpzXG4gKiogbW9kdWxlIGlkID0gNTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxBUkdFID0gZXhwb3J0cy5NRURJVU0gPSBleHBvcnRzLlNNQUxMID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoV2lkdGg7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTTUFMTCA9IGV4cG9ydHMuU01BTEwgPSAxO1xudmFyIE1FRElVTSA9IGV4cG9ydHMuTUVESVVNID0gMjtcbnZhciBMQVJHRSA9IGV4cG9ydHMuTEFSR0UgPSAzO1xuXG5mdW5jdGlvbiB3aXRoV2lkdGgoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBfb3B0aW9ucyRsYXJnZVdpZHRoID0gb3B0aW9ucy5sYXJnZVdpZHRoO1xuICB2YXIgbGFyZ2VXaWR0aCA9IF9vcHRpb25zJGxhcmdlV2lkdGggPT09IHVuZGVmaW5lZCA/IDk5MiA6IF9vcHRpb25zJGxhcmdlV2lkdGg7XG4gIHZhciBfb3B0aW9ucyRtZWRpdW1XaWR0aCA9IG9wdGlvbnMubWVkaXVtV2lkdGg7XG4gIHZhciBtZWRpdW1XaWR0aCA9IF9vcHRpb25zJG1lZGl1bVdpZHRoID09PSB1bmRlZmluZWQgPyA3NjggOiBfb3B0aW9ucyRtZWRpdW1XaWR0aDtcbiAgdmFyIF9vcHRpb25zJHJlc2l6ZUludGVydiA9IG9wdGlvbnMucmVzaXplSW50ZXJ2YWw7XG4gIHZhciByZXNpemVJbnRlcnZhbCA9IF9vcHRpb25zJHJlc2l6ZUludGVydiA9PT0gdW5kZWZpbmVkID8gMTY2IDogX29wdGlvbnMkcmVzaXplSW50ZXJ2O1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChNeUNvbXBvbmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFdpdGhXaWR0aCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhXaWR0aCgpIHtcbiAgICAgICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaXRoV2lkdGgpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihXaXRoV2lkdGgpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZvciB0aGUgc2VydmVyIHNpZGUgcmVuZGVyaW5nLFxuICAgICAgICAgICAqIGxldCdzIHNldCB0aGUgd2lkdGggZm9yIHRoZSBzbG93ZXIgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgd2lkdGg6IFNNQUxMXG4gICAgICAgIH0sIF90aGlzLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuZGVmZXJUaW1lcik7XG4gICAgICAgICAgX3RoaXMuZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgICAgICB9LCByZXNpemVJbnRlcnZhbCk7XG4gICAgICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoV2l0aFdpZHRoLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVmZXJUaW1lcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlV2lkdGgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgICAgdmFyIGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICB2YXIgd2lkdGggPSB2b2lkIDA7XG5cbiAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA+PSBsYXJnZVdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IExBUkdFO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+PSBtZWRpdW1XaWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBNRURJVU07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlubmVyV2lkdGggPCA3NjhcbiAgICAgICAgICAgIHdpZHRoID0gU01BTEw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVhY3RFdmVudExpc3RlbmVyMi5kZWZhdWx0LFxuICAgICAgICAgICAgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE15Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gV2l0aFdpZHRoO1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWF0ZXJpYWwtdWkvdXRpbHMvd2l0aFdpZHRoLmpzXG4gKiogbW9kdWxlIGlkID0gNTQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJmbHV4L3V0aWxzXCI7XG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlci9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBSRUNFSVZFRF9DQUNIRURfU0VTU0lPTiB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRlbXBTZXNzaW9uU3RvcmUgPSBuZXcgU3RvcmUoQXBwRGlzcGF0Y2hlcik7XG5sZXQgY2FjaGVkU2Vzc2lvbiA9IG51bGw7XG5cbmNvbnN0IHNldENhY2hlZFNlc3Npb24gPSAoc2Vzc2lvbikgPT4ge1xuICBjYWNoZWRTZXNzaW9uID0gc2Vzc2lvbjtcbn07XG5cblRlbXBTZXNzaW9uU3RvcmUuZmluZENhY2hlZFNlc3Npb24gPSAoKSA9PiBjYWNoZWRTZXNzaW9uO1xuXG5UZW1wU2Vzc2lvblN0b3JlLl9fb25EaXNwYXRjaCA9IChwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFRF9DQUNIRURfU0VTU0lPTjpcbiAgICAgIHNldENhY2hlZFNlc3Npb24ocGF5bG9hZC5zZXNzaW9uKTtcbiAgICAgIFRlbXBTZXNzaW9uU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBTZXNzaW9uU3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiZmx1eC91dGlsc1wiO1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXIvZGlzcGF0Y2hlclwiO1xuaW1wb3J0IHsgR0VORVJBVEVEX1BERiwgUERGX0VSUk9SIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxubGV0IHBkZnMgPSBudWxsO1xubGV0IGVycm9yID0gbnVsbDtcbmNvbnN0IFBERlN0b3JlID0gbmV3IFN0b3JlKEFwcERpc3BhdGNoZXIpO1xuXG5jb25zdCBzZXRQREYgPSAocHMpID0+IHtcbiAgcGRmcyA9IHBzO1xufTtcbmNvbnN0IHNldEVycm9yID0gKGUpID0+IHtcbiAgZXJyb3IgPSBlLnJlc3BvbnNlVGV4dDtcbn07XG5QREZTdG9yZS5nZXRQREYgPSAoKSA9PiBwZGZzO1xuUERGU3RvcmUuZ2V0RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVyciA9IGVycm9yO1xuICBlcnJvciA9IG51bGw7XG4gIHJldHVybiBlcnI7XG59O1xuXG5QREZTdG9yZS5jbGVhclBERiA9ICgpID0+IHtcbiAgcGRmcyA9IG51bGw7XG59O1xuXG5QREZTdG9yZS5fX29uRGlzcGF0Y2ggPSAocGF5bG9hZCkgPT4ge1xuICBzd2l0Y2ggKHBheWxvYWQuYWN0aW9uVHlwZSkge1xuICAgIGNhc2UgR0VORVJBVEVEX1BERjpcbiAgICAgIHNldFBERihwYXlsb2FkLnBkZnMpO1xuICAgICAgUERGU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBERl9FUlJPUjpcbiAgICAgIHNldEVycm9yKHBheWxvYWQuZXJyb3IpO1xuICAgICAgUERGU3RvcmUuX19lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBERlN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9zdG9yZXMvcGRmU3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvY2xvc2VcIjtcbmltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcblxuY2xhc3MgUGxheWVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kYWxPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcmF0aW5nOiBcIjBcIlxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLm1vZGFsT3BlbiAmJiB0aGlzLnByb3BzLm1vZGFsT3Blbikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUZpZWxkKG5hbWUsIGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgYWRkUGxheWVyKENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLl9pZCwgdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIHJhdGluZzogXCIwXCIgfSk7XG4gICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicGxheWVyLWZvcm1cIlxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5wcm9wcy5tb2RhbE9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgID5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIjEwcHhcIiB9fVxuICAgICAgICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIHRvb2x0aXA9XCJDbG9zZSBGb3JtXCIgdG91Y2g9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8aDM+UGxheWVyIEZvcm08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJOYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlRmllbGQoXCJuYW1lXCIsIGUpfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJSYXRpbmdcIlxuICAgICAgICAgICAgaGludFRleHQ9XCJSYXRpbmdcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVGaWVsZChcInJhdGluZ1wiLCBlKX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJhdGluZ30gcGF0dGVybj1cIl5cXGR7Miw0fSRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBsYWJlbD1cIlJlZ2lzdGVyIFBsYXllclwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxuICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyRm9ybS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIE1kQ2xvc2UgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZENsb3NlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1kQ2xvc2UoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZENsb3NlKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1kQ2xvc2UpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZENsb3NlLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSWNvbkJhc2UsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCB0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZycsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzEuNiAxMC43bC05LjMgOS4zIDkuMyA5LjMtMi4zIDIuMy05LjMtOS4zLTkuMyA5LjMtMi4zLTIuMyA5LjMtOS4zLTkuMy05LjMgMi4zLTIuMyA5LjMgOS4zIDkuMy05LjN6JyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWRDbG9zZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRDbG9zZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jbG9zZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RpdmlkZXJcIjtcbmltcG9ydCBQbGF5ZXJMaXN0IGZyb20gXCIuL3BsYXllckxpc3RcIjtcblxuY29uc3Qgc3R5bGUgPSB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfTtcblxuY29uc3QgUGxheWVyR3JvdXAgPSBwcm9wcyA9PiAoXG4gICg8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1saXN0c1wiPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWxsUGxheWVyc31cbiAgICAgIGhhbmRsZVRvZ2dsZT17cHJvcHMuaGFuZGxlVG9nZ2xlfVxuICAgICAgdGl0bGU9XCJBbGwgUGxheWVyc1wiXG4gICAgICBzZWxlY3RhYmxlPXtCb29sZWFuKHRydWUpfVxuICAgICAgYWRkZWRQbGF5ZXJzPXtwcm9wcy5vYmpBZGRlZFBsYXllcnN9XG4gICAgICBkZWxldGVQbGF5ZXI9e3Byb3BzLmRlbGV0ZVBsYXllcn1cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgcGxheWVycz17cHJvcHMuYWRkZWRQbGF5ZXJzfVxuICAgICAgaGFuZGxlVG9nZ2xlPXtwcm9wcy5oYW5kbGVUb2dnbGV9XG4gICAgICB0aXRsZT1cIlNlbGVjdGVkIFBsYXllcnNcIlxuICAgICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgICBhZGRlZFBsYXllcnM9e3Byb3BzLm9iakFkZGVkUGxheWVyc31cbiAgICAvPlxuICAgIDxEaXZpZGVyIHN0eWxlPXtzdHlsZX0gLz5cbiAgPC9kaXY+KVxuKTtcblxuUGxheWVyR3JvdXAucHJvcFR5cGVzID0ge1xuICBhbGxQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhhbmRsZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9iakFkZGVkUGxheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsZXRlUGxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWRlcixcbiAgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93LCBUYWJsZVJvd0NvbHVtbiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJsZVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2Nsb3NlXCI7XG5cbmNvbnN0IFBsYXllckxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcGxheWVycyA9IHByb3BzLnBsYXllcnM7XG4gIGNvbnN0IGlkUmVmID0ge307XG4gIGNvbnN0IHBsYXllckxpc3QgPSBwbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiB7XG4gICAgaWRSZWZbaV0gPSBwbGF5ZXIuX2lkO1xuICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17cGxheWVyLl9pZH0gc2VsZWN0ZWQ9eyEhcHJvcHMuYWRkZWRQbGF5ZXJzW3BsYXllci5faWRdfT5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLm5hbWV9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAge1xuICAgICAgICAhcHJvcHMuZGVsZXRlUGxheWVyID8gXCJcIiA6XG4gICAgICAgICAgPFRhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlUGxheWVyKHBsYXllci5faWQpfVxuICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiUmVtb3ZlIFBsYXllclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+XG4gICAgICB9XG4gICAgPC9UYWJsZVJvdz4pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGFibGUtdGl0bGVcIj57IHByb3BzLnRpdGxlIH08L2gzPlxuICAgICAgPFRhYmxlXG4gICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHNlbGVjdGFibGU9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG11bHRpU2VsZWN0YWJsZT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25DZWxsQ2xpY2s9eyhpLCBjb2wsIGUpID0+IHByb3BzLmhhbmRsZVRvZ2dsZShpZFJlZltpXSwgZSl9XG4gICAgICA+XG4gICAgICAgIDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPlJhdGluZzwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3BzLmRlbGV0ZVBsYXllciAmJiA8VGFibGVIZWFkZXJDb2x1bW4gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICA8VGFibGVCb2R5XG4gICAgICAgICAgZGlzcGxheVJvd0NoZWNrQm94PXtwcm9wcy5zZWxlY3RhYmxlfVxuICAgICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgICBkZXNlbGVjdE9uQ2xpY2thd2F5PXtCb29sZWFuKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHsgcGxheWVyTGlzdCB9XG4gICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBsYXllckxpc3QucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlbGV0ZVBsYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcGxheWVyTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9TZWxlY3RGaWVsZFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJtYXRlcmlhbC11aS9NZW51SXRlbVwiO1xuaW1wb3J0IEljb25NZW51IGZyb20gXCJtYXRlcmlhbC11aS9JY29uTWVudVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvblwiO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwibWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbW9yZS12ZXJ0XCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFBhcnRpY2lwYW50R3JvdXAgZnJvbSBcIi4vcGFydGljaXBhbnRHcm91cFwiO1xuaW1wb3J0IGZpbmRTY2hlbWF0YSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9maW5kU2NoZW1hXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVBERiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5cbmNvbnN0IHJhbmdlT2ZQbGF5ZXJzID0gWzMsIDQsIDUsIDYsIDddO1xuXG5jbGFzcyBHcm91cGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFkZGVkUGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNhdmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYWNoZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG51bVBsYXllcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NoZW1hdGE6IFtbXV0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IG51bGwsXG4gICAgICBzZWxlY3RlZEdyb3VwOiBbXSxcbiAgICAgIHBkZnM6IG51bGwsXG4gICAgICBnZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgc3RlcEluZGV4OiAwLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIgPSBQREZTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRQREYpO1xuICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwodGhpcy50ZW1wU2F2ZSwgNjAwMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGVkICE9PSBuZXh0UHJvcHMuY2FjaGVkKSB7XG4gICAgICBjb25zdCBzY2hlbWF0YSA9IChmdW5jdGlvbiBwYXJzZVNjaGVtYXRhKHMpIHtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWytzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcy5tYXAoYXJyID0+IGFyci5tYXAoZWwgPT4gK2VsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgIH0oKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2NoZW1hdGEsXG4gICAgICAgIHNlbGVjdGVkR3JvdXA6IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwID8gbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAubWFwKGVsID0+ICtlbCkgOiBbXSxcbiAgICAgICAgcGRmczogbmV4dFByb3BzLnBkZnMgPT09IFwiXCIgPyBudWxsIDogbmV4dFByb3BzLnBkZnMsXG4gICAgICAgIG1pbjogbmV4dFByb3BzLm1pbiA/ICtuZXh0UHJvcHMubWluIDogbnVsbCxcbiAgICAgICAgbWF4OiBuZXh0UHJvcHMubWF4ID8gK25leHRQcm9wcy5tYXggOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50KTtcbiAgfVxuICB0ZW1wU2F2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb24oXG4gICAgICB0aGlzLnN0YXRlLm1pbixcbiAgICAgIHRoaXMuc3RhdGUubWF4LFxuICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCxcbiAgICAgIHRoaXMuc3RhdGUucGRmc1xuICAgICk7XG4gIH1cbiAgaGFuZGxlT3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IGZhbHNlIH0pO1xuICB9XG4gIGZldGNoZWRQREYgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBQREZTdG9yZS5nZXRFcnJvcigpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZGZzOiBQREZTdG9yZS5nZXRQREYoKSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCwgZSwgaWR4LCB2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHsgbWluLCBtYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgICBpZiAoZmllbGQgPT09IFwibWluXCIpIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bVBsYXllcnMgPSB0aGlzLnByb3BzLm51bVBsYXllcnM7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLS0pIHtcbiAgICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjaGVtYXRhID0gZmluZFNjaGVtYXRhKG51bVBsYXllcnMsIHJhbmdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2NoZW1hdGE6IHNjaGVtYXRhLmxlbmd0aCA/IHNjaGVtYXRhIDogW1tdXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzY2hlbWF0YSgpIHtcbiAgICBjb25zdCBzY2hlbWF0YSA9IHRoaXMuc3RhdGUuc2NoZW1hdGE7XG4gICAgaWYgKHNjaGVtYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmpvaW4oXCIsXCIpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVNjaGVtYX1cbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbGVjdCBhIHNjaGVtYVwiXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2NoZW1hdGEgP1xuICAgICAgICAgICAgICBzY2hlbWF0YS5tYXAoc2NoZW1hID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjaGVtYS5qb2luKFwiLFwiKX1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXtzY2hlbWEuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17XCJub3RoXCJ9IGRpc2FibGVkPXtCb29sZWFuKHRydWUpfSBwcmltYXJ5VGV4dD1cIk5vIEF2YWlsYWJsZSBTY2hlbWFzLi4uXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBudW1PZlBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJtaW4tbWF4XCI+XG4gICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgdmFsdWU9e21heH1cbiAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIk1heCBQbGF5ZXJzXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlLCBpZHgsIHZhbCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoXCJtYXhcIiwgZSwgaWR4LCB2YWwpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcmFuZ2VPZlBsYXllcnMubWFwKG51bSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtudW19IHZhbHVlPXtudW19IHByaW1hcnlUZXh0PXtudW19IGRpc2FibGVkPXtudW0gPCBtaW59IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWlufVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWluIFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KGUsIGlkeCwgdmFsKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShcIm1pblwiLCBlLCBpZHgsIHZhbCl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA+IG1heH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgIDwvZGl2Pik7XG4gIH1cbiAgY2hhbmdlU2NoZW1hID0gKGUsIF8sIHNlbGVjdGVkR3JvdXApID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCkge1xuICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiBzZWxlY3RlZEdyb3VwLnNwbGl0KFwiLFwiKS5tYXAoZWwgPT4gK2VsKSB9KTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVQREYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2VuZXJhdGVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXaG9vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IG1heSBvbmx5IGdlbmVyYXRlIG9uY2UgZXZlcnkgMzBzZWNzLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5zY2hlbWF0YVswXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIk9vb29wcy4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIlRoZXJlIGFyZSBubyBwbGF5ZXJzIHlldCA6KC5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBERihcbiAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5wcm9wcy5jbHViLFxuICAgICAgdGhpcy5wcm9wcy5kYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IHRydWUsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZXJhdGVkOiBmYWxzZSB9KTtcbiAgICB9LCAzMDAwMCk7XG4gIH1cblxuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiV2VsbC4uLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IGhhdmUgdG8gaGF2ZSBzZWxlY3RlZCBhIHNjaGVtYSBiZWZvcmUgeW91IGNhbiBzYXZlLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlU2Vzc2lvbihcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgICB0aGlzLnByb3BzLmFkZGVkUGxheWVyc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZG93bmxvYWQgPSAobGluaykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cub3BlbihgL2FwaS9wZGZzL2Rvd25sb2FkLyR7bGlua31gKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbiAgbW92ZVVwID0gKGdyb3VwKSA9PiB7XG4gICAgaWYgKGdyb3VwID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5zbGljZSgpO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgLSAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgbW92ZURvd24gPSAoZ3JvdXApID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgaWYgKGdyb3VwID09PSBzZWxlY3RlZEdyb3VwLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwICsgMV0gKz0gMTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwXSAtPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwIH0pO1xuICB9XG4gIGdyb3VwVGFibGVzKCkge1xuICAgIGNvbnN0IHBkZnMgPSB0aGlzLnN0YXRlLnBkZnM7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubWFwKChudW1QbGF5ZXJzLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgKz0gK251bVBsYXllcnM7XG4gICAgICAgICAgcmV0dXJuICg8UGFydGljaXBhbnRHcm91cFxuICAgICAgICAgICAga2V5PXtgJHtpfSR7bnVtUGxheWVyc31gfSBncm91cElkPXtpfVxuICAgICAgICAgICAgcGRmRG93bmxvYWQ9eyFwZGZzID8gKCkgPT4ge30gOiB0aGlzLmRvd25sb2FkLmJpbmQodGhpcywgcGRmc1tgZ3JvdXAkeyhpICsgMSl9YF0pfVxuICAgICAgICAgICAgcGRmcz17ISFwZGZzfVxuICAgICAgICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgICAgICAgIHBsYXllcnM9e3RoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgLSBudW1QbGF5ZXJzLCB0aGlzLnRvdGFsUGxheWVyQWRkZWRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG1vdmVVcD17aSA9PT0gMCA/IG51bGwgOiB0aGlzLm1vdmVVcH1cbiAgICAgICAgICAgIG1vdmVEb3duPXtpID09PSBhcnIubGVuZ3RoIC0gMSA/IG51bGwgOiB0aGlzLm1vdmVEb3dufVxuICAgICAgICAgIC8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+PC9kaXY+PC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBkaWFsb2coKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3Blbikge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICBdO1xuICAgICAgcmV0dXJuICg8RGlhbG9nXG4gICAgICAgIHRpdGxlPXt0aGlzLnRpdGxlfVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmRpYWxvZ09wZW59XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmNvbnRlbnR9XG4gICAgICA8L0RpYWxvZz4pO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNjaGVtYXRhO1xuICAgIGxldCBncm91cFRhYmxlcztcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXggJiYgdGhpcy5zdGF0ZS5taW4pIHtcbiAgICAgIHNjaGVtYXRhID0gdGhpcy5zY2hlbWF0YSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCkge1xuICAgICAgICBncm91cFRhYmxlcyA9IHRoaXMuZ3JvdXBUYWJsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJncm91cGluZ1wiPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB0b3A6IFwiLTIwcHhcIixcbiAgICAgICAgICB6SW5kZXg6IFwiNTBcIlxuICAgICAgICB9fVxuICAgICAgICBpY29uQnV0dG9uRWxlbWVudD17PEljb25CdXR0b24+PE1vcmVWZXJ0SWNvbiAvPjwvSWNvbkJ1dHRvbj59XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICAgIHRhcmdldE9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIHByaW1hcnlUZXh0PVwiR2VuZXJhdGUgUERGXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUERGfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmdlbmVyYXRlZCB8fCAhdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJTYXZlXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgPC9JY29uTWVudT5cbiAgICAgIHsgdGhpcy5udW1PZlBsYXllcnMoKSB9XG4gICAgICB7IHNjaGVtYXRhIH1cbiAgICAgIHsgZ3JvdXBUYWJsZXMgfVxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIG1lc3NhZ2U9e3RoaXMuZXJyb3IgfHwgXCJcIn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgIC8+XG4gICAgICB7IHRoaXMubG9hZGluZygpIH1cbiAgICAgIHsgdGhpcy5kaWFsb2coKSB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlUm93LFxuICBUYWJsZUhlYWRlciwgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uXCI7XG5pbXBvcnQgUGRmSWNvbiBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL3BpY3R1cmUtYXMtcGRmXCI7XG5pbXBvcnQgVXBBcnJvdyBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2tleWJvYXJkLWFycm93LXVwXCI7XG5pbXBvcnQgRG93bkFycm93IGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctZG93blwiO1xuXG5jb25zdCBtb3ZlRG93bkFycm93ID0gKG1vdmVEb3duLCBpKSA9PiAoXG4gIChtb3ZlRG93biAmJiA8SWNvbkJ1dHRvblxuICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgdG9vbHRpcD1cIk1vdmUgb25lIHBsYXllciBkb3duXCJcbiAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlRG93bihpKX1cbiAgICBzdHlsZT17e1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGxlZnQ6IFwiMzBweFwiLFxuICAgICAgYm90dG9tOiBcIjFweFwiLFxuICAgICAgekluZGV4OiAxMFxuICAgIH19XG4gID5cbiAgICA8RG93bkFycm93IC8+XG4gIDwvSWNvbkJ1dHRvbj4pXG4pO1xuXG5jb25zdCBtb3ZlVXBBcnJvdyA9IChtb3ZlVXAsIGkpID0+IChcbiAgKG1vdmVVcCAmJiA8SWNvbkJ1dHRvblxuICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgdG9vbHRpcD1cIk1vdmUgb25lIHBsYXllciB1cFwiXG4gICAgb25DbGljaz17KCkgPT4gbW92ZVVwKGkpfVxuICAgIHN0eWxlPXt7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogXCIzMHB4XCIsXG4gICAgICB0b3A6IFwiNTdweFwiLFxuICAgICAgekluZGV4OiAxMFxuICAgIH19XG4gID5cbiAgICA8VXBBcnJvdyAvPlxuICA8L0ljb25CdXR0b24+KVxuKTtcblxuY29uc3QgUGFydGljaXBhbnRHcm91cCA9IHByb3BzID0+IChcbiAgKDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICA8SWNvbkJ1dHRvblxuICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjBcIiwgdG9wOiBcIjVweFwiLCB6SW5kZXg6IDEwIH19XG4gICAgICBvbkNsaWNrPXtwcm9wcy5wZGZEb3dubG9hZH1cbiAgICAgIGRpc2FibGVkPXshcHJvcHMucGRmc31cbiAgICAgIHRvb2x0aXA9eyFwcm9wcy5wZGZzID8gXCJZb3UgbXVzdCBnZW5lcmF0ZSBmaXJzdFwiIDogXCJEb3dubG9hZCBwZGZcIn1cbiAgICA+XG4gICAgICA8UGRmSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8VGFibGVcbiAgICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgbXVsdGlTZWxlY3RhYmxlPXtmYWxzZX1cbiAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgID5cbiAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX1cbiAgICAgICAgZW5hYmxlU2VsZWN0QWxsPXtmYWxzZX1cbiAgICAgICAgYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPkdyb3VwIHtwcm9wcy5ncm91cElkICsgMX08L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5OYW1lPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+UmF0aW5nPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICA8VGFibGVCb2R5XG4gICAgICAgIGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9XG4gICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMucGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGNsYXNzTmFtZT1cInRhYmxlLXJvd1wiIGtleT17cGxheWVyLl9pZH0+XG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj57aSArIDF9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIubmFtZX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgICB7IG1vdmVVcEFycm93KHByb3BzLm1vdmVVcCwgcHJvcHMuZ3JvdXBJZCkgfVxuICAgIHsgbW92ZURvd25BcnJvdyhwcm9wcy5tb3ZlRG93biwgcHJvcHMuZ3JvdXBJZCkgfVxuICA8L2Rpdj4pXG4pO1xuXG5QYXJ0aWNpcGFudEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgcGRmRG93bmxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICBwZGZzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGdyb3VwSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgbW92ZVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW92ZURvd246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNpcGFudEdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudEdyb3VwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgTWRQaWN0dXJlQXNQZGYgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZFBpY3R1cmVBc1BkZiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNZFBpY3R1cmVBc1BkZigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1kUGljdHVyZUFzUGRmKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1kUGljdHVyZUFzUGRmKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWRQaWN0dXJlQXNQZGYsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJY29uQmFzZSxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMy40IDE5LjF2LTVoMS42djVoLTEuNnogbS0xNi44LTkuMXYyMy40aDIzLjR2My4yaC0yMy40cS0xLjMgMC0yLjMtMC45dC0wLjktMi4zdi0yMy40aDMuMnogbTguNCA1Ljl2LTEuOGgxLjZ2MS44aC0xLjZ6IG0xOS4xLTEuOHYtMi41aC01djEwaDIuNXYtMy4yaDIuNXYtMi41aC0yLjV2LTEuOGgyLjV6IG0tNi42IDV2LTVxMC0xLTAuNy0xLjd0LTEuOC0wLjhoLTQuMXYxMGg0LjFxMS4xIDAgMS44LTAuN3QwLjctMS44eiBtLTguNC0zLjJ2LTEuOHEwLTEtMC43LTEuN3QtMS44LTAuOGgtNC4xdjEwaDIuNXYtMy4yaDEuNnExLjEgMCAxLjgtMC44dDAuNy0xLjd6IG0xNC4zLTEyLjVxMS4zIDAgMi4zIDAuOXQwLjkgMi4zdjIwcTAgMS40LTAuOSAyLjR0LTIuMyAxaC0yMHEtMS40IDAtMi40LTF0LTEtMi40di0yMHEwLTEuMyAxLTIuM3QyLjQtMC45aDIweicgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1kUGljdHVyZUFzUGRmO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFBpY3R1cmVBc1BkZjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWljb25zL2xpYi9tZC9waWN0dXJlLWFzLXBkZi5qc1xuICoqIG1vZHVsZSBpZCA9IDY4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgTWRLZXlib2FyZEFycm93VXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZEtleWJvYXJkQXJyb3dVcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNZEtleWJvYXJkQXJyb3dVcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1kS2V5Ym9hcmRBcnJvd1VwKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1kS2V5Ym9hcmRBcnJvd1VwKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWRLZXlib2FyZEFycm93VXAsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJY29uQmFzZSxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xMi4zIDI1LjdsLTIuMy0yLjMgMTAtMTAgMTAgMTAtMi4zIDIuMy03LjctNy43eicgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1kS2V5Ym9hcmRBcnJvd1VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEtleWJvYXJkQXJyb3dVcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWljb25zL2xpYi9tZC9rZXlib2FyZC1hcnJvdy11cC5qc1xuICoqIG1vZHVsZSBpZCA9IDY4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgTWRLZXlib2FyZEFycm93RG93biA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1kS2V5Ym9hcmRBcnJvd0Rvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTWRLZXlib2FyZEFycm93RG93bigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1kS2V5Ym9hcmRBcnJvd0Rvd24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWRLZXlib2FyZEFycm93RG93bikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1kS2V5Ym9hcmRBcnJvd0Rvd24sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJY29uQmFzZSxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xMi4zIDEzbDcuNyA3LjcgNy43LTcuNyAyLjMgMi40LTEwIDEwLTEwLTEweicgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1kS2V5Ym9hcmRBcnJvd0Rvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kS2V5Ym9hcmRBcnJvd0Rvd247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctZG93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDY4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY29uc3Qgc2NoZW1hID0ge307XG5jb25zdCBmaW5kU2NoZW1hdGEgPSAobnVtUGxheWVycywgcmFuZ2VPZlBsYXllcnMgPSBbNiwgNSwgNF0pID0+IHtcbiAgaWYgKG51bVBsYXllcnMgPCAwKSByZXR1cm4gbnVsbDtcbiAgaWYgKG51bVBsYXllcnMgPT09IDApIHJldHVybiBbW11dO1xuICBsZXQgcG9zc2liaWxpdGllcyA9IFtdO1xuICBjb25zdCByZWN1cnNpb25zID0gW107XG5cbiAgaWYgKCFzY2hlbWFbbnVtUGxheWVyc10pIHtcbiAgICBzY2hlbWFbbnVtUGxheWVyc10gPSB7fTtcbiAgfVxuICBpZiAoIXNjaGVtYVtudW1QbGF5ZXJzXVtyYW5nZU9mUGxheWVyc1swXV0pIHtcbiAgICByYW5nZU9mUGxheWVycy5mb3JFYWNoKChyYW5nZSwgaSkgPT4ge1xuICAgICAgcmVjdXJzaW9ucy5wdXNoKFtyYW5nZSwgZmluZFNjaGVtYXRhKG51bVBsYXllcnMgLSByYW5nZSwgcmFuZ2VPZlBsYXllcnMuc2xpY2UoaSkpXSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVjdXJzaW9ucy5ldmVyeShyZXN1bHQgPT4gKHJlc3VsdFsxXSA9PT0gZmFsc2UpKSkgcmV0dXJuIG51bGw7XG5cbiAgICByZWN1cnNpb25zLmZvckVhY2goKHRlc3QpID0+IHtcbiAgICAgIGlmICh0ZXN0WzFdKSB7XG4gICAgICAgIHBvc3NpYmlsaXRpZXMgPSBwb3NzaWJpbGl0aWVzLmNvbmNhdCh0ZXN0WzFdLm1hcChcbiAgICAgICAgICByZXN1bHQgPT4gW3Rlc3RbMF1dLmNvbmNhdChyZXN1bHQpXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNjaGVtYVtudW1QbGF5ZXJzXVtyYW5nZU9mUGxheWVyc10gPSBwb3NzaWJpbGl0aWVzO1xuICB9XG5cbiAgcmV0dXJuIHNjaGVtYVtudW1QbGF5ZXJzXVtyYW5nZU9mUGxheWVyc107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kU2NoZW1hdGE7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL21ldGhvZHMvZmluZFNjaGVtYS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZXN0cm95VGVtcFNlc3Npb246IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlc3RvcmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3BlbiAhPT0gbmV4dFByb3BzLm9wZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiRGlzY2FyZFwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5wcm9wcy5kZXN0cm95VGVtcFNlc3Npb259XG4gICAgICAvPixcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiUmV0cmlldmVcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMucHJvcHMucmVzdG9yZVNlc3Npb259XG4gICAgICAvPlxuICAgIF07XG5cbiAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiU2Vzc2lvbiBmb3VuZFwiXG4gICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpfVxuICAgID5cbiAgICAgIFdvdWxkIHlvdSBsaWtlIHRvIHJlc3RvcmUgeW91ciBwcmV2aW91cyBzZXNzaW9uP1xuICAgIDwvRGlhbG9nPik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vcmVzdG9yZURpYWxvZy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tIFwiLi9maWxlVXBsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3BlbiAhPT0gbmV4dFByb3BzLm9wZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKFwidXBsb2FkRGlhbG9nT3BlblwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAvPlxuICAgIF07XG5cbiAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiVXBsb2FkIFBsYXllcnNcIlxuICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgIG9wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgID5cbiAgICAgIDxGaWxlVXBsb2FkZXJcbiAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAvPlxuICAgIDwvRGlhbG9nPik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vdXBsb2FkRGlhbG9nLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhX3VyaTogbnVsbCxcbiAgICAgIGZpbGVuYW1lOiBudWxsLFxuICAgICAgZmlsZXR5cGU6IG51bGwsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucHJvY2Vzc2luZyAhPT0gbmV4dFN0YXRlLnByb2Nlc3NpbmcgfHxcbiAgICAgIHRoaXMuc3RhdGUuZmlsZW5hbWUgIT09IG5leHRTdGF0ZS5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucGxheWVyTGVuICE9PSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKC9jc3Z8anNvbi8udGVzdChmaWxlLnR5cGUpKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKHVwbG9hZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhX3VyaTogdXBsb2FkLnRhcmdldC5yZXN1bHQsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxldHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsZW5hbWU6IGBVbnJlY29nbml6ZWQgZmlsZSB0eXBlOiAuJHtmaWxlLnR5cGV9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3VyaSAmJiB0aGlzLnN0YXRlLmZpbGV0eXBlICYmIHRoaXMuc3RhdGUuZmlsZW5hbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wbGF5ZXJMZW4gPSBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgIHVwbG9hZEZpbGUoe1xuICAgICAgICBkYXRhX3VyaTogdGhpcy5zdGF0ZS5kYXRhX3VyaSxcbiAgICAgICAgZmlsZW5hbWU6IHRoaXMuc3RhdGUuZmlsZW5hbWUsXG4gICAgICAgIGZpbGV0eXBlOiB0aGlzLnN0YXRlLmZpbGV0eXBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbG9hZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICYmICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbkxhYmVsID0gdGhpcy5zdGF0ZS5maWxlbmFtZSA/XG4gICAgICBgRmlsZTogICR7dGhpcy5zdGF0ZS5maWxlbmFtZX1gIDpcbiAgICAgIFwiQ2hvb3NlIGEgZmlsZSAoLmNzdiBvciAuanNvbilcIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgaWQ9XCJ1cGxvYWQtZm9ybVwiXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBsb2FkRmlsZX1cbiAgICAgID5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IG1pZFdpZHRoOiBcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgIGxhYmVsPXtidXR0b25MYWJlbH1cbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiVXBsb2FkXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmRhdGFfdXJpfVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgICB7IHRoaXMubG9hZGVyKCkgfVxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==