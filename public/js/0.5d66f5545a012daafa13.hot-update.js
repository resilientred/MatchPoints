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
	    players: _react.PropTypes.array
	  })
	};
	exports.default = NewRRSession;

/***/ },

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
	  addedPlayers: _react.PropTypes.array,
	  saveSession: _react.PropTypes.func,
	  cached: _react.PropTypes.bool,
	  numPlayers: _react.PropTypes.number,
	  temporarilySaveSession: _react.PropTypes.func
	};
	exports.default = Grouping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

/***/ 705:
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
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _SelectField = __webpack_require__(669);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _clientActions = __webpack_require__(643);
	
	var _playerResult = __webpack_require__(706);
	
	var _playerResult2 = _interopRequireDefault(_playerResult);
	
	var _playerStore = __webpack_require__(709);
	
	var _playerStore2 = _interopRequireDefault(_playerStore);
	
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
	
	var PlayerResultQuery = function (_Component) {
	  _inherits(PlayerResultQuery, _Component);
	
	  function PlayerResultQuery(props) {
	    _classCallCheck(this, PlayerResultQuery);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerResultQuery).call(this, props));
	
	    _this.selectClub = function (e, idx, club) {
	      _this.setState({ selectedClub: club });
	      _this.checkIfCachedClub(club);
	    };
	
	    _this.selectPlayer = function (e, idx, player) {
	      _this.setState({ selectedPlayer: player });
	    };
	
	    _this.fetchedPlayersRecord = function () {
	      _playerStore2.default.setClub(_this.state.selectedClub);
	      _this.setState({ players: _playerStore2.default.allPlayersInClub() });
	    };
	
	    _this.state = {
	      selectedClub: null,
	      players: null,
	      selectedPlayer: null
	    };
	    return _this;
	  }
	
	  _createClass(PlayerResultQuery, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.qaListener = _playerStore2.default.addListener(this.fetchedPlayersRecord);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.qaListener.remove();
	    }
	  }, {
	    key: "checkIfCachedClub",
	    value: function checkIfCachedClub(id) {
	      var bool = _playerStore2.default.containClub(id);
	      if (bool) {
	        if (_playerStore2.default.currentClub() !== id) {
	          _playerStore2.default.setClub(id);
	        }
	        this.setState({ players: _playerStore2.default.allPlayersInClub() });
	      } else {
	        (0, _clientActions.fetchAllPlayersFromClub)(id);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      if (!this.props.clubs) return _react2.default.createElement(_CircularProgress2.default, { size: 2 });
	
	      return _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "name-select-div" }, _react2.default.createElement(_SelectField2.default, {
	        value: this.state.selectedClub,
	        onChange: this.selectClub,
	        floatingLabelText: "Select a club",
	        floatingLabelFixed: Boolean(true),
	        menuStyle: { textOverflow: "ellipsis" }
	      }, this.props.clubs.map(function (club) {
	        return _react2.default.createElement(_MenuItem2.default, { key: club._id, value: club._id, primaryText: club.clubName });
	      })), _react2.default.createElement(_SelectField2.default, {
	        value: this.state.selectedPlayer,
	        onChange: this.selectPlayer,
	        floatingLabelText: "Select a club",
	        floatingLabelFixed: Boolean(true)
	      }, this.state.players ? Object.keys(this.state.players).map(function (playerId) {
	        var player = _this2.state.players[playerId];
	        return _react2.default.createElement(_MenuItem2.default, { key: player._id, value: player._id, primaryText: player.name });
	      }) : _react2.default.createElement(_MenuItem2.default, {
	        key: "empty",
	        disabled: Boolean(true),
	        value: null,
	        primaryText: "No Players Available"
	      }))), _react2.default.createElement(_playerResult2.default, { player: this.state.selectedPlayer }));
	    }
	  }]);
	
	  return PlayerResultQuery;
	}(_react.Component);
	
	PlayerResultQuery.propTypes = {
	  clubs: _react.PropTypes.array
	};
	exports.default = PlayerResultQuery;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BhcnRpY2lwYW50R3JvdXAuanM/NDQyYSIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3VsdHMvcGxheWVyUmVzdWx0UXVlcnkuanM/NWU3ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0E0QlIscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQXhDa0I7O1dBeUNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFB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ZmlsZSI6IjAuNWQ2NmY1NTQ1YTAxMmRhYWZhMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RhdGVQaWNrZXJcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IHsgc2F2ZVNlc3Npb24sIHRlbXBvcmFyeVNlc3Npb24sIGRlc3Ryb3lUZW1wU2Vzc2lvbiwgZmV0Y2hUZW1wU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgVGVtcFNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3RlbXBTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5pbXBvcnQgUGxheWVyRm9ybSBmcm9tIFwiLi9wbGF5ZXJGb3JtXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuL3BhcnRpY2lwYW50c1wiO1xuaW1wb3J0IEdyb3VwaW5nIGZyb20gXCIuL2dyb3VwaW5nXCI7XG5pbXBvcnQgUmVzdG9yZURpYWxvZyBmcm9tIFwiLi9yZXN0b3JlRGlhbG9nXCI7XG5pbXBvcnQgVXBsb2FkRGlhbG9nIGZyb20gXCIuL3VwbG9hZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSUlNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBfaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuU3RyaW5nXG4gICAgICBdKSxcbiAgICAgIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheVxuICAgIH0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZSxcbiAgICAgIGdyb3VwVGFiRW5hYmxlZDogZmFsc2UsXG4gICAgICB0YWI6IDAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgbnVtUGxheWVyczogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc25hY2tCYXJPcGVuOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHVwbG9hZERpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICAgIHRoaXMucnJMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMucnJSZXNwb25zZVJlY2VpdmVkKTtcbiAgICB0aGlzLnRzbGlzdGVuZXIgPSBUZW1wU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMudGVtcFNlc3Npb25GZXRjaGVkKTtcbiAgICBmZXRjaFRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY3NMaXN0ZW5lcikgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnJyTGlzdGVuZXIpIHRoaXMucnJMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy50c2xpc3RlbmVyKSB0aGlzLnRzbGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICByclJlc3BvbnNlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBSUlNlc3Npb25TdG9yZS5nZXRFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlUGxheWVyID0gKF9pZCkgPT4ge1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdO1xuICAgIGRlbGV0ZVBsYXllcih0aGlzLnByb3BzLmNsdWIuX2lkLCBfaWQpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBfaWQpIHtcbiAgICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRlZFBsYXllcnM6IHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzIH0pO1xuICB9XG5cbiAgdGVtcFNlc3Npb25GZXRjaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBUZW1wU2Vzc2lvblN0b3JlLmZpbmRDYWNoZWRTZXNzaW9uKCk7XG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbihcImRpYWxvZ09wZW5cIik7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRTY2hlbWEgPSB0aGlzLnNlc3Npb24uc2VsZWN0ZWRTY2hlbWE7XG4gICAgdGhpcy5zY2hlbWF0YSA9IHRoaXMuc2Vzc2lvbi5zY2hlbWF0YTtcbiAgICB0aGlzLnBkZnMgPSB0aGlzLnNlc3Npb24ucGRmcztcbiAgICB0aGlzLm1heCA9IHRoaXMuc2Vzc2lvbi5tYXg7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNlc3Npb24ubWluO1xuICAgIHRoaXMuY2FjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogK3RoaXMuc2Vzc2lvbi50YWIsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnNlc3Npb24uZGF0ZSksXG4gICAgICBudW1QbGF5ZXJzOiArdGhpcy5zZXNzaW9uLm51bVBsYXllcnMsXG4gICAgICBhZGRlZFBsYXllcnM6IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgPyB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzIDoge31cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNsdWI6IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLFxuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT3BlbiA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZVRvZ2dsZSA9IChfaWQsIGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYXllciA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzLmZpbmQoKHBsYXllciA9PlxuICAgICAgcGxheWVyLl9pZCA9PT0gX2lkXG4gICAgKSk7XG5cbiAgICBpZiAoYWRkZWRQbGF5ZXJzW19pZF0pIHtcbiAgICAgIGRlbGV0ZSBhZGRlZFBsYXllcnNbX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWRQbGF5ZXJzW19pZF0gPSBzZWxlY3RlZFBsYXllcjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRlZFBsYXllcnMsXG4gICAgICBudW1QbGF5ZXJzOiArK3RoaXMuc3RhdGUubnVtUGxheWVyc1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZVRhYiA9ICh0YWIpID0+IHtcbiAgICBpZiAodGFiLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KTtcbiAgfVxuXG4gIGNvbnZlcnRQbGF5ZXJzVG9BcnIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKS5tYXAoKF9pZCA9PlxuICAgICAgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXVxuICAgICkpO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwbGF5ZXJzKSA9PiB7XG4gICAgc2F2ZVNlc3Npb24oe1xuICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuICAgICAgbnVtT2ZQbGF5ZXJzOiB0aGlzLnN0YXRlLm51bVBsYXllcnMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgc2VsZWN0ZWRTY2hlbWEsXG4gICAgICBzY2hlbWF0YSxcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbiA9IChtaW4sIG1heCwgc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwZGZzKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKFwic25hY2tCYXJPcGVuXCIpO1xuICAgIHRlbXBvcmFyeVNlc3Npb24oe1xuICAgICAgLi4udGhpcy5zdGF0ZSwgbWluLCBtYXgsIHNlbGVjdGVkU2NoZW1hLCBzY2hlbWF0YSwgcGRmc1xuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGRlc3Ryb3lUZW1wU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgIFBERlN0b3JlLmNsZWFyUERGKCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2x1Yikge1xuICAgICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+O1xuICAgIH1cbiAgICBjb25zdCBhbGxQbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gdGhpcy5jb252ZXJ0UGxheWVyc1RvQXJyKCkuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gICAgY29uc3QgeyBudW1QbGF5ZXJzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcGxheWVyQ29udGVudCA9ICg8ZGl2PlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgbGFiZWw9XCJOZXcgUGxheWVyXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU9wZW4oXCJ1cGxvYWREaWFsb2dPcGVuXCIpfVxuICAgICAgICBsYWJlbD1cIlVwbG9hZCBQbGF5ZXJzXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjE1MHB4XCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3Blbn1cbiAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICBkZXN0cm95VGVtcFNlc3Npb249e3RoaXMuZGVzdHJveVRlbXBTZXNzaW9ufVxuICAgICAgLz5cbiAgICAgIDxVcGxvYWREaWFsb2dcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgICA8UGxheWVyRm9ybVxuICAgICAgICBtb2RhbE9wZW49e3RoaXMuc3RhdGUubmV3UGxheWVyTW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcbmltcG9ydCBJY29uTWVudSBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbk1lbnVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uL0ljb25CdXR0b25cIjtcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIm1hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21vcmUtdmVydFwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIm1hdGVyaWFsLXVpL0RpYWxvZ1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBQYXJ0aWNpcGFudEdyb3VwIGZyb20gXCIuL3BhcnRpY2lwYW50R3JvdXBcIjtcbmltcG9ydCBmaW5kU2NoZW1hdGEgZnJvbSBcIi4uLy4uL21ldGhvZHMvZmluZFNjaGVtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQREYgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuXG5jb25zdCByYW5nZU9mUGxheWVycyA9IFszLCA0LCA1LCA2LCA3XTtcblxuY29uc3Qgb2JqVG9TdHJpbmcgPSBvYmogPT4gKFxuICBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYSwgYikgPT4gYSArIGIgKyBvYmpbYl0sIFwiXCIpXG4pO1xuXG5jbGFzcyBHcm91cGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFkZGVkUGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNhdmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYWNoZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG51bVBsYXllcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NoZW1hdGE6IFtbXV0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IG51bGwsXG4gICAgICBzZWxlY3RlZEdyb3VwOiBbXSxcbiAgICAgIHBkZnM6IG51bGwsXG4gICAgICBnZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgc3RlcEluZGV4OiAwLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIgPSBQREZTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRQREYpO1xuICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwodGhpcy50ZW1wU2F2ZSwgNjAwMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGVkICE9PSBuZXh0UHJvcHMuY2FjaGVkKSB7XG4gICAgICBjb25zdCBzY2hlbWF0YSA9IChmdW5jdGlvbiBwYXJzZVNjaGVtYXRhKHMpIHtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWytzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcy5tYXAoYXJyID0+IGFyci5tYXAoZWwgPT4gK2VsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgIH0oKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2NoZW1hdGEsXG4gICAgICAgIHNlbGVjdGVkR3JvdXA6IG5leHRQcm9wcy5zZWxlY3RlZEdyb3VwID8gbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAubWFwKGVsID0+ICtlbCkgOiBbXSxcbiAgICAgICAgcGRmczogbmV4dFByb3BzLnBkZnMgPT09IFwiXCIgPyBudWxsIDogbmV4dFByb3BzLnBkZnMsXG4gICAgICAgIG1pbjogbmV4dFByb3BzLm1pbiA/ICtuZXh0UHJvcHMubWluIDogbnVsbCxcbiAgICAgICAgbWF4OiBuZXh0UHJvcHMubWF4ID8gK25leHRQcm9wcy5tYXggOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3BlbiAhPT0gbmV4dFN0YXRlLmRpYWxvZ09wZW4gfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLmdlbmVyYXRlZCAhPT0gbmV4dFN0YXRlLmdlbmVyYXRlZCB8fFxuICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyAhPT0gbmV4dFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gIT09IG5leHRTdGF0ZS5vcGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCghdGhpcy5zdGF0ZS5wZGZzICYmIG5leHRTdGF0ZS5wZGZzKSB8fFxuICAgICAgICAgIChuZXh0U3RhdGUucGRmcyAmJiBvYmpUb1N0cmluZyh0aGlzLnN0YXRlLnBkZnMpICE9PSBvYmpUb1N0cmluZyhuZXh0U3RhdGUucGRmcykpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCAmJiBuZXh0U3RhdGUuc2VsZWN0ZWRHcm91cCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC50b1N0cmluZygpICE9PSBuZXh0U3RhdGUuc2VsZWN0ZWRHcm91cC50b1N0cmluZygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NoZW1hdGEgJiYgbmV4dFN0YXRlLnNjaGVtYXRhICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YS50b1N0cmluZygpICE9PSBuZXh0U3RhdGUuc2NoZW1hdGEudG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobWF4ICE9PSBuZXh0U3RhdGUubWF4ICYmICFtaW4pIHJldHVybiB0cnVlO1xuICAgIGlmICgobWF4ICE9PSBuZXh0U3RhdGUubWF4KSB8fFxuICAgICAgKG1heCAmJiAobWluICE9PSBuZXh0U3RhdGUubWluKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLm51bVBsYXllcnMgIT09IG5leHRQcm9wcy5udW1QbGF5ZXJzICYmIG1heCAmJiBtaW4pKSB7XG4gICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IG5leHRTdGF0ZS5tYXg7IGkgPj0gKG5leHRTdGF0ZS5taW4gfHwgbWluKTsgaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtUGxheWVycyA9IG5leHRQcm9wcy5udW1QbGF5ZXJzO1xuICAgICAgICBjb25zdCByYW5nZTIgPSByYW5nZS5zbGljZSgpO1xuICAgICAgICBjb25zdCBzY2hlbWF0YSA9IGZpbmRTY2hlbWF0YShudW1QbGF5ZXJzLCByYW5nZTIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY2hlbWF0YTogc2NoZW1hdGEubGVuZ3RoID8gc2NoZW1hdGEgOiBbW11dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludCk7XG4gIH1cbiAgdGVtcFNhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9uKFxuICAgICAgdGhpcy5zdGF0ZS5taW4sXG4gICAgICB0aGlzLnN0YXRlLm1heCxcbiAgICAgIHRoaXMuc3RhdGUuc2NoZW1hdGEsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnN0YXRlLnBkZnNcbiAgICApO1xuICB9XG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiBmYWxzZSB9KTtcbiAgfVxuICBmZXRjaGVkUERGID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUERGU3RvcmUuZ2V0RXJyb3IoKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGRmczogUERGU3RvcmUuZ2V0UERGKCksIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQsIGUsIGlkeCwgdmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfVxuICBzY2hlbWF0YSgpIHtcbiAgICBjb25zdCBzY2hlbWF0YSA9IHRoaXMuc3RhdGUuc2NoZW1hdGE7XG4gICAgaWYgKHNjaGVtYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmpvaW4oXCIsXCIpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVNjaGVtYX1cbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlNlbGVjdCBhIHNjaGVtYVwiXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2NoZW1hdGEgP1xuICAgICAgICAgICAgICBzY2hlbWF0YS5tYXAoc2NoZW1hID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjaGVtYS5qb2luKFwiLFwiKX1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXtzY2hlbWEuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17XCJub3RoXCJ9IGRpc2FibGVkPXtCb29sZWFuKHRydWUpfSBwcmltYXJ5VGV4dD1cIk5vIEF2YWlsYWJsZSBTY2hlbWFzLi4uXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBudW1PZlBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJtaW4tbWF4XCI+XG4gICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgdmFsdWU9e21heH1cbiAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIk1heCBQbGF5ZXJzXCJcbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWF4XCIpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcmFuZ2VPZlBsYXllcnMubWFwKG51bSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtudW19IHZhbHVlPXtudW19IHByaW1hcnlUZXh0PXtudW19IGRpc2FibGVkPXtudW0gPCBtaW59IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWlufVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWluIFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoXCJtaW5cIil9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA+IG1heH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgIDwvZGl2Pik7XG4gIH1cbiAgY2hhbmdlU2NoZW1hID0gKGUsIF8sIHNlbGVjdGVkR3JvdXApID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCkge1xuICAgICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiBzZWxlY3RlZEdyb3VwLnNwbGl0KFwiLFwiKS5tYXAoZWwgPT4gK2VsKSB9KTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVQREYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2VuZXJhdGVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXaG9vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IG1heSBvbmx5IGdlbmVyYXRlIG9uY2UgZXZlcnkgMzBzZWNzLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5zY2hlbWF0YVswXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIk9vb29wcy4uXCI7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBcIlRoZXJlIGFyZSBubyBwbGF5ZXJzIHlldCA6KC5cIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWFsb2dPcGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBERihcbiAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5wcm9wcy5jbHViLFxuICAgICAgdGhpcy5wcm9wcy5kYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IHRydWUsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZXJhdGVkOiBmYWxzZSB9KTtcbiAgICB9LCAzMDAwMCk7XG4gIH1cblxuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiV2VsbC4uLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiWW91IGhhdmUgdG8gaGF2ZSBzZWxlY3RlZCBhIHNjaGVtYSBiZWZvcmUgeW91IGNhbiBzYXZlLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlU2Vzc2lvbihcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWF0YSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgICB0aGlzLnByb3BzLmFkZGVkUGxheWVyc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZG93bmxvYWQgPSAobGluaykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cub3BlbihgL2FwaS9wZGZzL2Rvd25sb2FkLyR7bGlua31gKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbiAgbW92ZVVwID0gKGdyb3VwKSA9PiB7XG4gICAgaWYgKGdyb3VwID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5zbGljZSgpO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgLSAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgbW92ZURvd24gPSAoZ3JvdXApID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgaWYgKGdyb3VwID09PSBzZWxlY3RlZEdyb3VwLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwICsgMV0gKz0gMTtcbiAgICBzZWxlY3RlZEdyb3VwW2dyb3VwXSAtPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwIH0pO1xuICB9XG4gIGdyb3VwVGFibGVzKCkge1xuICAgIGNvbnN0IHBkZnMgPSB0aGlzLnN0YXRlLnBkZnM7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubWFwKChudW1QbGF5ZXJzLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgKz0gK251bVBsYXllcnM7XG4gICAgICAgICAgcmV0dXJuICg8UGFydGljaXBhbnRHcm91cFxuICAgICAgICAgICAga2V5PXtgJHtpfSR7bnVtUGxheWVyc31gfSBncm91cElkPXtpfVxuICAgICAgICAgICAgcGRmRG93bmxvYWQ9eyFwZGZzID8gKCkgPT4ge30gOiB0aGlzLmRvd25sb2FkLmJpbmQodGhpcywgcGRmc1tgZ3JvdXAkeyhpICsgMSl9YF0pfVxuICAgICAgICAgICAgcGRmcz17ISFwZGZzfVxuICAgICAgICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgICAgICAgIHBsYXllcnM9e3RoaXMucHJvcHMuYWRkZWRQbGF5ZXJzLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgLSBudW1QbGF5ZXJzLCB0aGlzLnRvdGFsUGxheWVyQWRkZWRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG1vdmVVcD17aSA9PT0gMCA/IG51bGwgOiB0aGlzLm1vdmVVcH1cbiAgICAgICAgICAgIG1vdmVEb3duPXtpID09PSBhcnIubGVuZ3RoIC0gMSA/IG51bGwgOiB0aGlzLm1vdmVEb3dufVxuICAgICAgICAgIC8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+PC9kaXY+PC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBkaWFsb2coKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlhbG9nT3Blbikge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICBdO1xuICAgICAgcmV0dXJuICg8RGlhbG9nXG4gICAgICAgIHRpdGxlPXt0aGlzLnRpdGxlfVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmRpYWxvZ09wZW59XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmNvbnRlbnR9XG4gICAgICA8L0RpYWxvZz4pO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNjaGVtYXRhO1xuICAgIGxldCBncm91cFRhYmxlcztcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXggJiYgdGhpcy5zdGF0ZS5taW4pIHtcbiAgICAgIHNjaGVtYXRhID0gdGhpcy5zY2hlbWF0YSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cCkge1xuICAgICAgICBncm91cFRhYmxlcyA9IHRoaXMuZ3JvdXBUYWJsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3RhbFBsYXllckFkZGVkID0gMDtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJncm91cGluZ1wiPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB0b3A6IFwiLTIwcHhcIixcbiAgICAgICAgICB6SW5kZXg6IFwiNTBcIlxuICAgICAgICB9fVxuICAgICAgICBpY29uQnV0dG9uRWxlbWVudD17PEljb25CdXR0b24+PE1vcmVWZXJ0SWNvbiAvPjwvSWNvbkJ1dHRvbj59XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICAgIHRhcmdldE9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIHByaW1hcnlUZXh0PVwiR2VuZXJhdGUgUERGXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUERGfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmdlbmVyYXRlZCB8fCAhdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmxlbmd0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJTYXZlXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgPC9JY29uTWVudT5cbiAgICAgIHsgdGhpcy5udW1PZlBsYXllcnMoKSB9XG4gICAgICB7IHNjaGVtYXRhIH1cbiAgICAgIHsgZ3JvdXBUYWJsZXMgfVxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIG1lc3NhZ2U9e3RoaXMuZXJyb3IgfHwgXCJcIn1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgIC8+XG4gICAgICB7IHRoaXMubG9hZGluZygpIH1cbiAgICAgIHsgdGhpcy5kaWFsb2coKSB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlUm93LFxuICBUYWJsZUhlYWRlciwgVGFibGVIZWFkZXJDb2x1bW4sIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uXCI7XG5pbXBvcnQgUGRmSWNvbiBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL3BpY3R1cmUtYXMtcGRmXCI7XG5pbXBvcnQgVXBBcnJvdyBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2tleWJvYXJkLWFycm93LXVwXCI7XG5pbXBvcnQgRG93bkFycm93IGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctZG93blwiO1xuXG5jb25zdCBtb3ZlRG93bkFycm93ID0gKG1vdmVEb3duLCBpKSA9PiAoXG4gIChtb3ZlRG93biAmJiA8SWNvbkJ1dHRvblxuICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgdG9vbHRpcD1cIk1vdmUgb25lIHBsYXllciBkb3duXCJcbiAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlRG93bihpKX1cbiAgICBzdHlsZT17e1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGxlZnQ6IFwiMzBweFwiLFxuICAgICAgYm90dG9tOiBcIjFweFwiLFxuICAgICAgekluZGV4OiAxMFxuICAgIH19XG4gID5cbiAgICA8RG93bkFycm93IC8+XG4gIDwvSWNvbkJ1dHRvbj4pXG4pO1xuXG5jb25zdCBtb3ZlVXBBcnJvdyA9IChtb3ZlVXAsIGkpID0+IChcbiAgKG1vdmVVcCAmJiA8SWNvbkJ1dHRvblxuICAgIGljb25DbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgdG9vbHRpcD1cIk1vdmUgb25lIHBsYXllciB1cFwiXG4gICAgb25DbGljaz17KCkgPT4gbW92ZVVwKGkpfVxuICAgIHN0eWxlPXt7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogXCIzMHB4XCIsXG4gICAgICB0b3A6IFwiNTdweFwiLFxuICAgICAgekluZGV4OiAxMFxuICAgIH19XG4gID5cbiAgICA8VXBBcnJvdyAvPlxuICA8L0ljb25CdXR0b24+KVxuKTtcblxuY29uc3QgUGFydGljaXBhbnRHcm91cCA9IHByb3BzID0+IChcbiAgKDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICA8SWNvbkJ1dHRvblxuICAgICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjBcIiwgdG9wOiBcIjVweFwiLCB6SW5kZXg6IDEwIH19XG4gICAgICBvbkNsaWNrPXtwcm9wcy5wZGZEb3dubG9hZH1cbiAgICAgIGRpc2FibGVkPXshcHJvcHMucGRmc31cbiAgICAgIHRvb2x0aXA9eyFwcm9wcy5wZGZzID8gXCJZb3UgbXVzdCBnZW5lcmF0ZSBmaXJzdFwiIDogXCJEb3dubG9hZCBwZGZcIn1cbiAgICA+XG4gICAgICA8UGRmSWNvbiAvPlxuICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8VGFibGVcbiAgICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgbXVsdGlTZWxlY3RhYmxlPXtmYWxzZX1cbiAgICAgIGZpeGVkSGVhZGVyPXtCb29sZWFuKHRydWUpfVxuICAgID5cbiAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX1cbiAgICAgICAgZW5hYmxlU2VsZWN0QWxsPXtmYWxzZX1cbiAgICAgICAgYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPkdyb3VwIHtwcm9wcy5ncm91cElkICsgMX08L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5OYW1lPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+UmF0aW5nPC9UYWJsZUhlYWRlckNvbHVtbj5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICA8VGFibGVCb2R5XG4gICAgICAgIGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9XG4gICAgICAgIHNob3dSb3dIb3Zlcj17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMucGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGNsYXNzTmFtZT1cInRhYmxlLXJvd1wiIGtleT17cGxheWVyLl9pZH0+XG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj57aSArIDF9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPntwbGF5ZXIubmFtZX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5yYXRpbmd9PC9UYWJsZVJvd0NvbHVtbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgICB7IG1vdmVVcEFycm93KHByb3BzLm1vdmVVcCwgcHJvcHMuZ3JvdXBJZCkgfVxuICAgIHsgbW92ZURvd25BcnJvdyhwcm9wcy5tb3ZlRG93biwgcHJvcHMuZ3JvdXBJZCkgfVxuICA8L2Rpdj4pXG4pO1xuXG5QYXJ0aWNpcGFudEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgcGRmRG93bmxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICBwZGZzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGdyb3VwSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgbW92ZVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW92ZURvd246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNpcGFudEdyb3VwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9wYXJ0aWNpcGFudEdyb3VwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9TZWxlY3RGaWVsZFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJtYXRlcmlhbC11aS9NZW51SXRlbVwiO1xuaW1wb3J0IHsgZmV0Y2hBbGxQbGF5ZXJzRnJvbUNsdWIgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgUGxheWVyUmVzdWx0IGZyb20gXCIuL3BsYXllclJlc3VsdFwiO1xuaW1wb3J0IFBsYXllclN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGxheWVyU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyUmVzdWx0UXVlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWJzOiBQcm9wVHlwZXMuYXJyYXlcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRDbHViOiBudWxsLFxuICAgICAgcGxheWVyczogbnVsbCxcbiAgICAgIHNlbGVjdGVkUGxheWVyOiBudWxsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnFhTGlzdGVuZXIgPSBQbGF5ZXJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRQbGF5ZXJzUmVjb3JkKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnFhTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cbiAgc2VsZWN0Q2x1YiA9IChlLCBpZHgsIGNsdWIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDbHViOiBjbHViIH0pO1xuICAgIHRoaXMuY2hlY2tJZkNhY2hlZENsdWIoY2x1Yik7XG4gIH1cbiAgc2VsZWN0UGxheWVyID0gKGUsIGlkeCwgcGxheWVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUGxheWVyOiBwbGF5ZXIgfSk7XG4gIH1cbiAgY2hlY2tJZkNhY2hlZENsdWIoaWQpIHtcbiAgICBjb25zdCBib29sID0gUGxheWVyU3RvcmUuY29udGFpbkNsdWIoaWQpO1xuICAgIGlmIChib29sKSB7XG4gICAgICBpZiAoUGxheWVyU3RvcmUuY3VycmVudENsdWIoKSAhPT0gaWQpIHtcbiAgICAgICAgUGxheWVyU3RvcmUuc2V0Q2x1YihpZCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGxheWVyczogUGxheWVyU3RvcmUuYWxsUGxheWVyc0luQ2x1YigpIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaEFsbFBsYXllcnNGcm9tQ2x1YihpZCk7XG4gICAgfVxuICB9XG4gIGZldGNoZWRQbGF5ZXJzUmVjb3JkID0gKCkgPT4ge1xuICAgIFBsYXllclN0b3JlLnNldENsdWIodGhpcy5zdGF0ZS5zZWxlY3RlZENsdWIpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5ZXJzOiBQbGF5ZXJTdG9yZS5hbGxQbGF5ZXJzSW5DbHViKCkgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jbHVicykgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+O1xuXG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLXNlbGVjdC1kaXZcIj5cbiAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbHVifVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdENsdWJ9XG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJTZWxlY3QgYSBjbHViXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgbWVudVN0eWxlPXt7IHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsdWJzLm1hcChjbHViID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2x1Yi5faWR9IHZhbHVlPXtjbHViLl9pZH0gcHJpbWFyeVRleHQ9e2NsdWIuY2x1Yk5hbWV9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VsZWN0UGxheWVyfVxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VsZWN0IGEgY2x1YlwiXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wbGF5ZXJzID9cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5wbGF5ZXJzKS5tYXAoKHBsYXllcklkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXJzW3BsYXllcklkXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17cGxheWVyLl9pZH0gdmFsdWU9e3BsYXllci5faWR9IHByaW1hcnlUZXh0PXtwbGF5ZXIubmFtZX0gLz47XG4gICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAga2V5PVwiZW1wdHlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHRydWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtudWxsfVxuICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiTm8gUGxheWVycyBBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBsYXllclJlc3VsdCBwbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGF5ZXJ9IC8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3VsdHMvcGxheWVyUmVzdWx0UXVlcnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9