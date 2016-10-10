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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9ncm91cGluZy5qcz9mNjJkIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BhcnRpY2lwYW50R3JvdXAuanM/NDQyYSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9waWN0dXJlLWFzLXBkZi5qcz9lY2U0Iiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2tleWJvYXJkLWFycm93LXVwLmpzPzA4MzEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctZG93bi5qcz9lZTRlIiwid2VicGFjazovLy8uL2Zyb250ZW5kL21ldGhvZHMvZmluZFNjaGVtYS5qcz9kYzNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjsyQkFVbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQTRCUixxQkFBcUIsWUFDbkI7V0FBTSxRQUFRLHlCQUVkOztXQUFJLE9BQ0Y7ZUFBSyxTQUFTLEVBQUUsT0FDaEI7b0JBQVcsWUFDVDtpQkFBSyxTQUFTLEVBQUUsT0FDakI7QUFGRCxZQUdEO0FBTEQsY0FNRTtxQ0FBZSxLQUNoQjtBQUNGO0FBeENrQjs7V0F5Q25CLGVBQWUsVUFBQyxLQUNkO2NBQU8s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RUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELHFEQUFxRDtBQUN0RztBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7Ozs7Ozs7QUMvQ0EsS0FBTSxTQUFTO0FBQ2YsS0FBTSxlQUFlLHNCQUFDLFlBQTJDO09BQUEsdUVBQWQsQ0FBQyxHQUFHLEdBQVUsZUFDL0Q7O09BQUksYUFBYSxHQUFHLE9BQ3BCO09BQUksZUFBZSxHQUFHLE9BQU8sQ0FDN0I7T0FBSSxnQkFDSjtPQUFNLGFBRU47O09BQUksQ0FBQyxPQUFPLGFBQ1Y7WUFBTyxjQUNSO0FBQ0Q7T0FBSSxDQUFDLE9BQU8sWUFBWSxlQUFlLEtBQ3JDO29CQUFlLFFBQVEsVUFBQyxPQUFPLEdBQzdCO2tCQUFXLEtBQUssQ0FBQyxPQUFPLGFBQWEsYUFBYSxPQUFPLGVBQWUsTUFDekU7QUFFRDs7b0JBQWUsTUFBTTtjQUFXLE9BQU8sT0FBTztBQUExQyxTQUFtRCxPQUV2RDs7Z0JBQVcsUUFBUSxVQUFDLE1BQ2xCO1dBQUksS0FBSyxJQUNQO3VDQUE4QixZQUFZLEdBQUcsSUFDM0M7a0JBQVUsQ0FBQyxLQUFLLElBQUksT0FBTztBQUU5QixVQUhzQyxDQUFyQjtBQUluQjtBQUNEO1lBQU8sWUFBWSxrQkFDcEI7QUFFRDs7VUFBTyxPQUFPLFlBQ2Y7QUEzQkQ7O21CQTZCZSxhIiwiZmlsZSI6IjAuMGQ0MGQ0YWQ1OGQyMDI1Nzg3YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RhdGVQaWNrZXJcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IHsgc2F2ZVNlc3Npb24sIHRlbXBvcmFyeVNlc3Npb24sIGRlc3Ryb3lUZW1wU2Vzc2lvbiwgZmV0Y2hUZW1wU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgVGVtcFNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3RlbXBTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5pbXBvcnQgUGxheWVyRm9ybSBmcm9tIFwiLi9wbGF5ZXJGb3JtXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuL3BhcnRpY2lwYW50c1wiO1xuaW1wb3J0IEdyb3VwaW5nIGZyb20gXCIuL2dyb3VwaW5nXCI7XG5pbXBvcnQgUmVzdG9yZURpYWxvZyBmcm9tIFwiLi9yZXN0b3JlRGlhbG9nXCI7XG5pbXBvcnQgVXBsb2FkRGlhbG9nIGZyb20gXCIuL3VwbG9hZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSUlNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBfaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuU3RyaW5nXG4gICAgICBdKSxcbiAgICAgIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheVxuICAgIH0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZSxcbiAgICAgIGdyb3VwVGFiRW5hYmxlZDogZmFsc2UsXG4gICAgICB0YWI6IDAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgbnVtUGxheWVyczogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc25hY2tCYXJPcGVuOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHVwbG9hZERpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICAgIHRoaXMucnJMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMucnJSZXNwb25zZVJlY2VpdmVkKTtcbiAgICB0aGlzLnRzbGlzdGVuZXIgPSBUZW1wU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMudGVtcFNlc3Npb25GZXRjaGVkKTtcbiAgICBmZXRjaFRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY3NMaXN0ZW5lcikgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnJyTGlzdGVuZXIpIHRoaXMucnJMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy50c2xpc3RlbmVyKSB0aGlzLnRzbGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICByclJlc3BvbnNlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBSUlNlc3Npb25TdG9yZS5nZXRFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlUGxheWVyID0gKF9pZCkgPT4ge1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdO1xuICAgIGRlbGV0ZVBsYXllcih0aGlzLnByb3BzLmNsdWIuX2lkLCBfaWQpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBfaWQpIHtcbiAgICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRlZFBsYXllcnM6IHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzIH0pO1xuICB9XG5cbiAgdGVtcFNlc3Npb25GZXRjaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBUZW1wU2Vzc2lvblN0b3JlLmZpbmRDYWNoZWRTZXNzaW9uKCk7XG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbihcImRpYWxvZ09wZW5cIik7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRTY2hlbWEgPSB0aGlzLnNlc3Npb24uc2VsZWN0ZWRTY2hlbWE7XG4gICAgdGhpcy5zY2hlbWF0YSA9IHRoaXMuc2Vzc2lvbi5zY2hlbWF0YTtcbiAgICB0aGlzLnBkZnMgPSB0aGlzLnNlc3Npb24ucGRmcztcbiAgICB0aGlzLm1heCA9IHRoaXMuc2Vzc2lvbi5tYXg7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNlc3Npb24ubWluO1xuICAgIHRoaXMuY2FjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogK3RoaXMuc2Vzc2lvbi50YWIsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnNlc3Npb24uZGF0ZSksXG4gICAgICBudW1QbGF5ZXJzOiArdGhpcy5zZXNzaW9uLm51bVBsYXllcnMsXG4gICAgICBhZGRlZFBsYXllcnM6IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgPyB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzIDoge31cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNsdWI6IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLFxuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT3BlbiA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZVRvZ2dsZSA9IChfaWQsIGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYXllciA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzLmZpbmQoKHBsYXllciA9PlxuICAgICAgcGxheWVyLl9pZCA9PT0gX2lkXG4gICAgKSk7XG5cbiAgICBpZiAoYWRkZWRQbGF5ZXJzW19pZF0pIHtcbiAgICAgIGRlbGV0ZSBhZGRlZFBsYXllcnNbX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWRQbGF5ZXJzW19pZF0gPSBzZWxlY3RlZFBsYXllcjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRlZFBsYXllcnMsXG4gICAgICBudW1QbGF5ZXJzOiArK3RoaXMuc3RhdGUubnVtUGxheWVyc1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZVRhYiA9ICh0YWIpID0+IHtcbiAgICBpZiAodGFiLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KTtcbiAgfVxuXG4gIGNvbnZlcnRQbGF5ZXJzVG9BcnIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKS5tYXAoKF9pZCA9PlxuICAgICAgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXVxuICAgICkpO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwbGF5ZXJzKSA9PiB7XG4gICAgc2F2ZVNlc3Npb24oe1xuICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuICAgICAgbnVtT2ZQbGF5ZXJzOiB0aGlzLnN0YXRlLm51bVBsYXllcnMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgc2VsZWN0ZWRTY2hlbWEsXG4gICAgICBzY2hlbWF0YSxcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbiA9IChtaW4sIG1heCwgc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwZGZzKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKFwic25hY2tCYXJPcGVuXCIpO1xuICAgIHRlbXBvcmFyeVNlc3Npb24oe1xuICAgICAgLi4udGhpcy5zdGF0ZSwgbWluLCBtYXgsIHNlbGVjdGVkU2NoZW1hLCBzY2hlbWF0YSwgcGRmc1xuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGRlc3Ryb3lUZW1wU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgIFBERlN0b3JlLmNsZWFyUERGKCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2x1Yikge1xuICAgICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+O1xuICAgIH1cbiAgICBjb25zdCBhbGxQbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gdGhpcy5jb252ZXJ0UGxheWVyc1RvQXJyKCkuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gICAgY29uc3QgeyBudW1QbGF5ZXJzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcGxheWVyQ29udGVudCA9ICg8ZGl2PlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgbGFiZWw9XCJOZXcgUGxheWVyXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU9wZW4oXCJ1cGxvYWREaWFsb2dPcGVuXCIpfVxuICAgICAgICBsYWJlbD1cIlVwbG9hZCBQbGF5ZXJzXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjE1MHB4XCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3RvcmVEaWFsb2dPcGVuICYmXG4gICAgICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUucmVzdG9yZURpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICAgICAgZGVzdHJveVRlbXBTZXNzaW9uPXt0aGlzLmRlc3Ryb3lUZW1wU2Vzc2lvbn1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW4gJiZcbiAgICAgICAgICA8VXBsb2FkRGlhbG9nXG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLm5ld1BsYXllck1vZGFsICYmXG4gICAgICAgICAgPFBsYXllckZvcm1cbiAgICAgICAgICAgIG1vZGFsT3Blbj17dGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbH1cbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vbmV3UlJTZXNzaW9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1NlbGVjdEZpZWxkXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIm1hdGVyaWFsLXVpL01lbnVJdGVtXCI7XG5pbXBvcnQgSWNvbk1lbnUgZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25NZW51XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnRcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgUGFydGljaXBhbnRHcm91cCBmcm9tIFwiLi9wYXJ0aWNpcGFudEdyb3VwXCI7XG5pbXBvcnQgZmluZFNjaGVtYXRhIGZyb20gXCIuLi8uLi9tZXRob2RzL2ZpbmRTY2hlbWFcIjtcbmltcG9ydCB7IGdlbmVyYXRlUERGIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IFBERlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGRmU3RvcmVcIjtcblxuY29uc3QgcmFuZ2VPZlBsYXllcnMgPSBbMywgNCwgNSwgNiwgN107XG5cbmNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWRkZWRQbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2F2ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhY2hlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbnVtUGxheWVyczogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uOiBQcm9wVHlwZXMuZnVuY1xuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY2hlbWF0YTogW1tdXSxcbiAgICAgIG1heDogbnVsbCxcbiAgICAgIG1pbjogbnVsbCxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IFtdLFxuICAgICAgcGRmczogbnVsbCxcbiAgICAgIGdlbmVyYXRlZDogZmFsc2UsXG4gICAgICBzdGVwSW5kZXg6IDAsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGRpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnBMaXN0ZW5lciA9IFBERlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuZmV0Y2hlZFBERik7XG4gICAgdGhpcy5pbnQgPSBzZXRJbnRlcnZhbCh0aGlzLnRlbXBTYXZlLCA2MDAwMCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jYWNoZWQgIT09IG5leHRQcm9wcy5jYWNoZWQpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXRhID0gKGZ1bmN0aW9uIHBhcnNlU2NoZW1hdGEocykge1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbK3NdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzLm1hcChhcnIgPT4gYXJyLm1hcChlbCA9PiArZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbW11dO1xuICAgICAgfSgpKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzY2hlbWF0YSxcbiAgICAgICAgc2VsZWN0ZWRHcm91cDogbmV4dFByb3BzLnNlbGVjdGVkR3JvdXAgPyBuZXh0UHJvcHMuc2VsZWN0ZWRHcm91cC5tYXAoZWwgPT4gK2VsKSA6IFtdLFxuICAgICAgICBwZGZzOiBuZXh0UHJvcHMucGRmcyA9PT0gXCJcIiA/IG51bGwgOiBuZXh0UHJvcHMucGRmcyxcbiAgICAgICAgbWluOiBuZXh0UHJvcHMubWluID8gK25leHRQcm9wcy5taW4gOiBudWxsLFxuICAgICAgICBtYXg6IG5leHRQcm9wcy5tYXggPyArbmV4dFByb3BzLm1heCA6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnQpO1xuICB9XG4gIHRlbXBTYXZlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudGVtcG9yYXJpbHlTYXZlU2Vzc2lvbihcbiAgICAgIHRoaXMuc3RhdGUubWluLFxuICAgICAgdGhpcy5zdGF0ZS5tYXgsXG4gICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLFxuICAgICAgdGhpcy5zdGF0ZS5wZGZzXG4gICAgKTtcbiAgfVxuICBoYW5kbGVPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfVxuICBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgZmV0Y2hlZFBERiA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IFBERlN0b3JlLmdldEVycm9yKCk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBkZnM6IFBERlN0b3JlLmdldFBERigpLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCBlLCBpZHgsIHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgeyBtaW4sIG1heCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgICAgIGlmIChmaWVsZCA9PT0gXCJtaW5cIikge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtUGxheWVycyA9IHRoaXMucHJvcHMubnVtUGxheWVycztcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1heDsgaSA+PSBtaW47IGktLSkge1xuICAgICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NoZW1hdGEgPSBmaW5kU2NoZW1hdGEobnVtUGxheWVycywgcmFuZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY2hlbWF0YTogc2NoZW1hdGEubGVuZ3RoID8gc2NoZW1hdGEgOiBbW11dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNjaGVtYXRhKCkge1xuICAgIGNvbnN0IHNjaGVtYXRhID0gdGhpcy5zdGF0ZS5zY2hlbWF0YTtcbiAgICBpZiAoc2NoZW1hdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuam9pbihcIixcIil9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlU2NoZW1hfVxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiU2VsZWN0IGEgc2NoZW1hXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY2hlbWF0YSA/XG4gICAgICAgICAgICAgIHNjaGVtYXRhLm1hcChzY2hlbWEgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtzY2hlbWF9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1hLmpvaW4oXCIsXCIpfVxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9e3NjaGVtYS5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtcIm5vdGhcIn0gZGlzYWJsZWQ9e0Jvb2xlYW4odHJ1ZSl9IHByaW1hcnlUZXh0PVwiTm8gQXZhaWxhYmxlIFNjaGVtYXMuLi5cIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG51bU9mUGxheWVycygpIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1pbi1tYXhcIj5cbiAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICB2YWx1ZT17bWF4fVxuICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiTWF4IFBsYXllcnNcIlxuICAgICAgICBvbkNoYW5nZT17KGUsIGlkeCwgdmFsKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShcIm1heFwiLCBlLCBpZHgsIHZhbCl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZU9mUGxheWVycy5tYXAobnVtID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0gcHJpbWFyeVRleHQ9e251bX0gZGlzYWJsZWQ9e251bSA8IG1pbn0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgIHZhbHVlPXttaW59XG4gICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJNaW4gUGxheWVyc1wiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSwgaWR4LCB2YWwpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKFwibWluXCIsIGUsIGlkeCwgdmFsKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHJhbmdlT2ZQbGF5ZXJzLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bnVtfSB2YWx1ZT17bnVtfSBwcmltYXJ5VGV4dD17bnVtfSBkaXNhYmxlZD17bnVtID4gbWF4fSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgPC9kaXY+KTtcbiAgfVxuICBjaGFuZ2VTY2hlbWEgPSAoZSwgXywgc2VsZWN0ZWRHcm91cCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwKSB7XG4gICAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHNlbGVjdGVkR3JvdXAuc3BsaXQoXCIsXCIpLm1hcChlbCA9PiArZWwpIH0pO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZVBERiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5nZW5lcmF0ZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBcIldob29vcHMuLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgbWF5IG9ubHkgZ2VuZXJhdGUgb25jZSBldmVyeSAzMHNlY3MuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNjaGVtYXRhWzBdLmxlbmd0aCkge1xuICAgICAgdGhpcy50aXRsZSA9IFwiT29vb3BzLi5cIjtcbiAgICAgIHRoaXMuY29udGVudCA9IFwiVGhlcmUgYXJlIG5vIHBsYXllcnMgeWV0IDooLlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpYWxvZ09wZW46IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdlbmVyYXRlUERGKFxuICAgICAgdGhpcy5wcm9wcy5hZGRlZFBsYXllcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICB0aGlzLnByb3BzLmNsdWIsXG4gICAgICB0aGlzLnByb3BzLmRhdGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmVyYXRlZDogdHJ1ZSwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWQ6IGZhbHNlIH0pO1xuICAgIH0sIDMwMDAwKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRpdGxlID0gXCJXZWxsLi4uLlwiO1xuICAgICAgdGhpcy5jb250ZW50ID0gXCJZb3UgaGF2ZSB0byBoYXZlIHNlbGVjdGVkIGEgc2NoZW1hIGJlZm9yZSB5b3UgY2FuIHNhdmUuXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICB0aGlzLnByb3BzLnNhdmVTZXNzaW9uKFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYXRhLFxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAsXG4gICAgICAgIHRoaXMucHJvcHMuYWRkZWRQbGF5ZXJzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBkb3dubG9hZCA9IChsaW5rKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5vcGVuKGAvYXBpL3BkZnMvZG93bmxvYWQvJHtsaW5rfWApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICBtb3ZlVXAgPSAoZ3JvdXApID0+IHtcbiAgICBpZiAoZ3JvdXAgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLnNsaWNlKCk7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cCAtIDFdICs9IDE7XG4gICAgc2VsZWN0ZWRHcm91cFtncm91cF0gLT0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cCB9KTtcbiAgfVxuICBtb3ZlRG93biA9IChncm91cCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuc2xpY2UoKTtcbiAgICBpZiAoZ3JvdXAgPT09IHNlbGVjdGVkR3JvdXAubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXAgKyAxXSArPSAxO1xuICAgIHNlbGVjdGVkR3JvdXBbZ3JvdXBdIC09IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXAgfSk7XG4gIH1cbiAgZ3JvdXBUYWJsZXMoKSB7XG4gICAgY29uc3QgcGRmcyA9IHRoaXMuc3RhdGUucGRmcztcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5tYXAoKG51bVBsYXllcnMsIGksIGFycikgPT4ge1xuICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCArPSArbnVtUGxheWVycztcbiAgICAgICAgICByZXR1cm4gKDxQYXJ0aWNpcGFudEdyb3VwXG4gICAgICAgICAgICBrZXk9e2Ake2l9JHtudW1QbGF5ZXJzfWB9IGdyb3VwSWQ9e2l9XG4gICAgICAgICAgICBwZGZEb3dubG9hZD17IXBkZnMgPyAoKSA9PiB7fSA6IHRoaXMuZG93bmxvYWQuYmluZCh0aGlzLCBwZGZzW2Bncm91cCR7KGkgKyAxKX1gXSl9XG4gICAgICAgICAgICBwZGZzPXshIXBkZnN9XG4gICAgICAgICAgICBudW1QbGF5ZXJzPXtudW1QbGF5ZXJzfVxuICAgICAgICAgICAgcGxheWVycz17dGhpcy5wcm9wcy5hZGRlZFBsYXllcnMuc2xpY2UoXG4gICAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXJBZGRlZCAtIG51bVBsYXllcnMsIHRoaXMudG90YWxQbGF5ZXJBZGRlZFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgbW92ZVVwPXtpID09PSAwID8gbnVsbCA6IHRoaXMubW92ZVVwfVxuICAgICAgICAgICAgbW92ZURvd249e2kgPT09IGFyci5sZW5ndGggLSAxID8gbnVsbCA6IHRoaXMubW92ZURvd259XG4gICAgICAgICAgLz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbiAgbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz48L2Rpdj48L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGRpYWxvZygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaWFsb2dPcGVuKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIF07XG4gICAgICByZXR1cm4gKDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e3RoaXMudGl0bGV9XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuZGlhbG9nT3Blbn1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgID5cbiAgICAgICAge3RoaXMuY29udGVudH1cbiAgICAgIDwvRGlhbG9nPik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2NoZW1hdGE7XG4gICAgbGV0IGdyb3VwVGFibGVzO1xuICAgIGlmICh0aGlzLnN0YXRlLm1heCAmJiB0aGlzLnN0YXRlLm1pbikge1xuICAgICAgc2NoZW1hdGEgPSB0aGlzLnNjaGVtYXRhKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwKSB7XG4gICAgICAgIGdyb3VwVGFibGVzID0gdGhpcy5ncm91cFRhYmxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvdGFsUGxheWVyQWRkZWQgPSAwO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyb3VwaW5nXCI+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogXCItMjBweFwiLFxuICAgICAgICAgIHpJbmRleDogXCI1MFwiXG4gICAgICAgIH19XG4gICAgICAgIGljb25CdXR0b25FbGVtZW50PXs8SWNvbkJ1dHRvbj48TW9yZVZlcnRJY29uIC8+PC9JY29uQnV0dG9uPn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgICAgdGFyZ2V0T3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgcHJpbWFyeVRleHQ9XCJHZW5lcmF0ZSBQREZcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQREZ9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZ2VuZXJhdGVkIHx8ICF0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubGVuZ3RofVxuICAgICAgICAvPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBwcmltYXJ5VGV4dD1cIlNhdmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5sZW5ndGh9XG4gICAgICAgIC8+XG4gICAgICA8L0ljb25NZW51PlxuICAgICAgeyB0aGlzLm51bU9mUGxheWVycygpIH1cbiAgICAgIHsgc2NoZW1hdGEgfVxuICAgICAgeyBncm91cFRhYmxlcyB9XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgbWVzc2FnZT17dGhpcy5lcnJvciB8fCBcIlwifVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs4MDAwfVxuICAgICAgLz5cbiAgICAgIHsgdGhpcy5sb2FkaW5nKCkgfVxuICAgICAgeyB0aGlzLmRpYWxvZygpIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2dyb3VwaW5nLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVSb3csXG4gIFRhYmxlSGVhZGVyLCBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uL0ljb25CdXR0b25cIjtcbmltcG9ydCBQZGZJY29uIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvcGljdHVyZS1hcy1wZGZcIjtcbmltcG9ydCBVcEFycm93IGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQva2V5Ym9hcmQtYXJyb3ctdXBcIjtcbmltcG9ydCBEb3duQXJyb3cgZnJvbSBcInJlYWN0LWljb25zL2xpYi9tZC9rZXlib2FyZC1hcnJvdy1kb3duXCI7XG5cbmNvbnN0IG1vdmVEb3duQXJyb3cgPSAobW92ZURvd24sIGkpID0+IChcbiAgKG1vdmVEb3duICYmIDxJY29uQnV0dG9uXG4gICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICB0b29sdGlwPVwiTW92ZSBvbmUgcGxheWVyIGRvd25cIlxuICAgIG9uQ2xpY2s9eygpID0+IG1vdmVEb3duKGkpfVxuICAgIHN0eWxlPXt7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogXCIzMHB4XCIsXG4gICAgICBib3R0b206IFwiMXB4XCIsXG4gICAgICB6SW5kZXg6IDEwXG4gICAgfX1cbiAgPlxuICAgIDxEb3duQXJyb3cgLz5cbiAgPC9JY29uQnV0dG9uPilcbik7XG5cbmNvbnN0IG1vdmVVcEFycm93ID0gKG1vdmVVcCwgaSkgPT4gKFxuICAobW92ZVVwICYmIDxJY29uQnV0dG9uXG4gICAgaWNvbkNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcbiAgICB0b29sdGlwPVwiTW92ZSBvbmUgcGxheWVyIHVwXCJcbiAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlVXAoaSl9XG4gICAgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBcIjMwcHhcIixcbiAgICAgIHRvcDogXCI1N3B4XCIsXG4gICAgICB6SW5kZXg6IDEwXG4gICAgfX1cbiAgPlxuICAgIDxVcEFycm93IC8+XG4gIDwvSWNvbkJ1dHRvbj4pXG4pO1xuXG5jb25zdCBQYXJ0aWNpcGFudEdyb3VwID0gcHJvcHMgPT4gKFxuICAoPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgIDxJY29uQnV0dG9uXG4gICAgICBpY29uQ2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMFwiLCB0b3A6IFwiNXB4XCIsIHpJbmRleDogMTAgfX1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLnBkZkRvd25sb2FkfVxuICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5wZGZzfVxuICAgICAgdG9vbHRpcD17IXByb3BzLnBkZnMgPyBcIllvdSBtdXN0IGdlbmVyYXRlIGZpcnN0XCIgOiBcIkRvd25sb2FkIHBkZlwifVxuICAgID5cbiAgICAgIDxQZGZJY29uIC8+XG4gICAgPC9JY29uQnV0dG9uPlxuICAgIDxUYWJsZVxuICAgICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgICBtdWx0aVNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgZml4ZWRIZWFkZXI9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgPlxuICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgICBlbmFibGVTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgICBhZGp1c3RGb3JDaGVja2JveD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4+R3JvdXAge3Byb3BzLmdyb3VwSWQgKyAxfTwvVGFibGVIZWFkZXJDb2x1bW4+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPk5hbWU8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbj5SYXRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX1cbiAgICAgICAgc2hvd1Jvd0hvdmVyPXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5wbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgY2xhc3NOYW1lPVwidGFibGUtcm93XCIga2V5PXtwbGF5ZXIuX2lkfT5cbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPntpICsgMX08L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3BsYXllci5uYW1lfTwvVGFibGVSb3dDb2x1bW4+XG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj57cGxheWVyLnJhdGluZ308L1RhYmxlUm93Q29sdW1uPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1RhYmxlQm9keT5cbiAgICA8L1RhYmxlPlxuICAgIHsgbW92ZVVwQXJyb3cocHJvcHMubW92ZVVwLCBwcm9wcy5ncm91cElkKSB9XG4gICAgeyBtb3ZlRG93bkFycm93KHByb3BzLm1vdmVEb3duLCBwcm9wcy5ncm91cElkKSB9XG4gIDwvZGl2Pilcbik7XG5cblBhcnRpY2lwYW50R3JvdXAucHJvcFR5cGVzID0ge1xuICBwZGZEb3dubG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHBkZnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZ3JvdXBJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5LFxuICBtb3ZlVXA6IFByb3BUeXBlcy5mdW5jLFxuICBtb3ZlRG93bjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2lwYW50R3JvdXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL3BhcnRpY2lwYW50R3JvdXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBNZFBpY3R1cmVBc1BkZiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1kUGljdHVyZUFzUGRmLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1kUGljdHVyZUFzUGRmKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWRQaWN0dXJlQXNQZGYpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWRQaWN0dXJlQXNQZGYpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZFBpY3R1cmVBc1BkZiwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEljb25CYXNlLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgdGhpcy5wcm9wcyksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIzLjQgMTkuMXYtNWgxLjZ2NWgtMS42eiBtLTE2LjgtOS4xdjIzLjRoMjMuNHYzLjJoLTIzLjRxLTEuMyAwLTIuMy0wLjl0LTAuOS0yLjN2LTIzLjRoMy4yeiBtOC40IDUuOXYtMS44aDEuNnYxLjhoLTEuNnogbTE5LjEtMS44di0yLjVoLTV2MTBoMi41di0zLjJoMi41di0yLjVoLTIuNXYtMS44aDIuNXogbS02LjYgNXYtNXEwLTEtMC43LTEuN3QtMS44LTAuOGgtNC4xdjEwaDQuMXExLjEgMCAxLjgtMC43dDAuNy0xLjh6IG0tOC40LTMuMnYtMS44cTAtMS0wLjctMS43dC0xLjgtMC44aC00LjF2MTBoMi41di0zLjJoMS42cTEuMSAwIDEuOC0wLjh0MC43LTEuN3ogbTE0LjMtMTIuNXExLjMgMCAyLjMgMC45dDAuOSAyLjN2MjBxMCAxLjQtMC45IDIuNHQtMi4zIDFoLTIwcS0xLjQgMC0yLjQtMXQtMS0yLjR2LTIwcTAtMS4zIDEtMi4zdDIuNC0wLjloMjB6JyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWRQaWN0dXJlQXNQZGY7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kUGljdHVyZUFzUGRmO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtaWNvbnMvbGliL21kL3BpY3R1cmUtYXMtcGRmLmpzXG4gKiogbW9kdWxlIGlkID0gNjgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBNZEtleWJvYXJkQXJyb3dVcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1kS2V5Ym9hcmRBcnJvd1VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1kS2V5Ym9hcmRBcnJvd1VwKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWRLZXlib2FyZEFycm93VXApO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWRLZXlib2FyZEFycm93VXApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNZEtleWJvYXJkQXJyb3dVcCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEljb25CYXNlLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgdGhpcy5wcm9wcyksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTEyLjMgMjUuN2wtMi4zLTIuMyAxMC0xMCAxMCAxMC0yLjMgMi4zLTcuNy03Ljd6JyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWRLZXlib2FyZEFycm93VXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kS2V5Ym9hcmRBcnJvd1VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtaWNvbnMvbGliL21kL2tleWJvYXJkLWFycm93LXVwLmpzXG4gKiogbW9kdWxlIGlkID0gNjgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBNZEtleWJvYXJkQXJyb3dEb3duID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWRLZXlib2FyZEFycm93RG93biwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNZEtleWJvYXJkQXJyb3dEb3duKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWRLZXlib2FyZEFycm93RG93bik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihNZEtleWJvYXJkQXJyb3dEb3duKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWRLZXlib2FyZEFycm93RG93biwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEljb25CYXNlLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgdGhpcy5wcm9wcyksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTEyLjMgMTNsNy43IDcuNyA3LjctNy43IDIuMyAyLjQtMTAgMTAtMTAtMTB6JyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWRLZXlib2FyZEFycm93RG93bjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRLZXlib2FyZEFycm93RG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWljb25zL2xpYi9tZC9rZXlib2FyZC1hcnJvdy1kb3duLmpzXG4gKiogbW9kdWxlIGlkID0gNjgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjb25zdCBzY2hlbWEgPSB7fTtcbmNvbnN0IGZpbmRTY2hlbWF0YSA9IChudW1QbGF5ZXJzLCByYW5nZU9mUGxheWVycyA9IFs2LCA1LCA0XSkgPT4ge1xuICBpZiAobnVtUGxheWVycyA8IDApIHJldHVybiBudWxsO1xuICBpZiAobnVtUGxheWVycyA9PT0gMCkgcmV0dXJuIFtbXV07XG4gIGxldCBwb3NzaWJpbGl0aWVzID0gW107XG4gIGNvbnN0IHJlY3Vyc2lvbnMgPSBbXTtcblxuICBpZiAoIXNjaGVtYVtudW1QbGF5ZXJzXSkge1xuICAgIHNjaGVtYVtudW1QbGF5ZXJzXSA9IHt9O1xuICB9XG4gIGlmICghc2NoZW1hW251bVBsYXllcnNdW3JhbmdlT2ZQbGF5ZXJzWzBdXSkge1xuICAgIHJhbmdlT2ZQbGF5ZXJzLmZvckVhY2goKHJhbmdlLCBpKSA9PiB7XG4gICAgICByZWN1cnNpb25zLnB1c2goW3JhbmdlLCBmaW5kU2NoZW1hdGEobnVtUGxheWVycyAtIHJhbmdlLCByYW5nZU9mUGxheWVycy5zbGljZShpKSldKTtcbiAgICB9KTtcblxuICAgIGlmIChyZWN1cnNpb25zLmV2ZXJ5KHJlc3VsdCA9PiAocmVzdWx0WzFdID09PSBmYWxzZSkpKSByZXR1cm4gbnVsbDtcblxuICAgIHJlY3Vyc2lvbnMuZm9yRWFjaCgodGVzdCkgPT4ge1xuICAgICAgaWYgKHRlc3RbMV0pIHtcbiAgICAgICAgcG9zc2liaWxpdGllcyA9IHBvc3NpYmlsaXRpZXMuY29uY2F0KHRlc3RbMV0ubWFwKFxuICAgICAgICAgIHJlc3VsdCA9PiBbdGVzdFswXV0uY29uY2F0KHJlc3VsdClcbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2NoZW1hW251bVBsYXllcnNdW3JhbmdlT2ZQbGF5ZXJzXSA9IHBvc3NpYmlsaXRpZXM7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hW251bVBsYXllcnNdW3JhbmdlT2ZQbGF5ZXJzXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRTY2hlbWF0YTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvbWV0aG9kcy9maW5kU2NoZW1hLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==