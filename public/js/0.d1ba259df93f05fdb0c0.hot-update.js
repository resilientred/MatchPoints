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
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
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
	
	var _fileUploader = __webpack_require__(684);
	
	var _fileUploader2 = _interopRequireDefault(_fileUploader);
	
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
	      dialogOpen: false,
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
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Discard",
	        secondary: Boolean(true),
	        onTouchTap: this.destroyTempSession
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: "Retrieve",
	        secondary: Boolean(true),
	        onTouchTap: this.restoreSession
	      })];
	      var playerContent = _react2.default.createElement("div", null, _react2.default.createElement(_RaisedButton2.default, {
	        onClick: this.openModal,
	        label: "New Player",
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
	      })), _react2.default.createElement(_fileUploader2.default, null), _react2.default.createElement(_participants2.default, {
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
	      }), _react2.default.createElement(_Dialog2.default, {
	        title: "Session found",
	        actions: actions,
	        modal: false,
	        open: this.state.dialogOpen,
	        onRequestClose: function onRequestClose() {
	          return _this3.handleClose("dialogOpen");
	        }
	      }, "Would you like to restore your previous session?"), _react2.default.createElement(_playerForm2.default, {
	        modalOpen: this.state.newPlayerModal,
	        closeModal: this.closeModal
	      }));
	    }
	  }]);
	
	  return NewRRSession;
	}(_react.Component);
	
	NewRRSession.propTypes = {
	  club: _react.PropTypes.shape({
	    _id: _react.PropTypes.Number,
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
	
	var _RaisedButton = __webpack_require__(503);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _clientActions = __webpack_require__(643);
	
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
	
	    _this.updateFile = function (e) {
	      console.log(e.target.value);
	      _this.setState(e.target.value);
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      var fd = new FormData();
	      fd.append("file", _this.state.file);
	      (0, _clientActions.uploadFile)(fd);
	    };
	
	    _this.state = {
	      file: null
	    };
	    return _this;
	  }
	
	  _createClass(FileUploader, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement(_RaisedButton2.default, {
	        label: "Choose a file (.csv or .json)",
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
	        containerElement: "label"
	      }, _react2.default.createElement("input", { type: "submit", style: style })));
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjsyQkFPbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQTJCUixxQkFBcUIsWUFDbkI7V0FBTSxRQUFRLHlCQUVkOztXQUFJLE9BQ0Y7ZUFBSyxTQUFTLEVBQUUsT0FDaEI7b0JBQVcsWUFDVDtpQkFBSyxTQUFTLEVBQUUsT0FDakI7QUFGRCxZQUdEO0FBTEQsY0FNRTtxQ0FBZSxLQUNoQjtBQUNGO0FBdkNrQjs7V0F3Q25CLGVBQWUsVUFBQyxLQUNkO2NBQU8sTUFBSyxNQUFNLGFBQ2xCO3dDQUFhLE1BQUssTUFBTSxLQUFLLEtBRTdCOztXQUFNLFVBQVUsTUFBSyxNQUFNLEtBQzNCO1lBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FDbEM7YUFBSSxRQUFRLEdBQUcsUUFBUSxLQUNyQjttQkFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRDthQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUssTUFDcEM7QUFuRGtCOztXQXFEbkIscUJBQXFCLFlBQ25CO1dBQU0sVUFBVSwyQkFFaEI7O1dBQUksU0FDRjtlQUFLLFVBQ0w7ZUFBSyxXQUNOO0FBQ0Y7QUE1RGtCOztXQTZEbkIsaUJB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RG5CLElBREk7QUFBTjttQkFGaUIsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBRUo7YUFDQTtRQUNBO1dBQ0E7VUFDQTtTQUNBO1VBQ0E7WUFBUztBQVBUOztLQVNtQjsyQkFDbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQUtSLGFBQWEsVUFBQyxHQUNaO2VBQVEsSUFBSSxFQUFFLE9BQ2Q7YUFBSyxTQUFTLEVBQUUsT0FDakI7QUFUa0I7O1dBVW5CLGFBQWEsVUFBQyxHQUNaO1NBQ0E7V0FBTSxLQUFLLElBQ1g7VUFBRyxPQUFPLFFBQVEsTUFBSyxNQUN2QjtzQ0FDRDtBQWJDOztXQUFLO2FBQ0c7QUFBTjtZQUVIOzs7Ozs4QkFZQzs4QkFDRTthQUVFO2tCQUNBO21CQUFVLEtBQUs7QUFGZixRQURGLGtCQUtFO2dCQUVFO3dCQUNBOzJCQUFpQjtBQUZqQixRQURGO2VBT0k7Z0JBQU8sS0FBSyxNQUNaO21CQUFVLEtBQ1Y7Z0JBQU87QUFIUCxRQURGLG9CQU9GO2dCQUVFO3dCQUNBOzJCQUFpQjtBQUZqQixRQURGLEVBS0UseUNBQU8sTUFBSyxVQUFTLE9BSTVCOzs7Ozs7O21CQTdDa0IsYSIsImZpbGUiOiIwLmQxYmEyNTlkZjkzZjA1ZmRiMGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgVGFicywgVGFiIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYnNcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGF0ZVBpY2tlclwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IGRlbGV0ZVBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCB7IHNhdmVTZXNzaW9uLCB0ZW1wb3JhcnlTZXNzaW9uLCBkZXN0cm95VGVtcFNlc3Npb24sIGZldGNoVGVtcFNlc3Npb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yclNlc3Npb25BY3Rpb25zXCI7XG5pbXBvcnQgUlJTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9yclNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFRlbXBTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuaW1wb3J0IFBsYXllckZvcm0gZnJvbSBcIi4vcGxheWVyRm9ybVwiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuaW1wb3J0IFBhcnRpY2lwYW50cyBmcm9tIFwiLi9wYXJ0aWNpcGFudHNcIjtcbmltcG9ydCBHcm91cGluZyBmcm9tIFwiLi9ncm91cGluZ1wiO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tIFwiLi9maWxlVXBsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UlJTZXNzaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgX2lkOiBQcm9wVHlwZXMuTnVtYmVyLFxuICAgICAgcGxheWVyczogUHJvcFR5cGVzLkFycmF5XG4gICAgfSlcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlLFxuICAgICAgZ3JvdXBUYWJFbmFibGVkOiBmYWxzZSxcbiAgICAgIHRhYjogMCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICBudW1QbGF5ZXJzOiAwLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBzbmFja0Jhck9wZW46IGZhbHNlLFxuICAgICAgZGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICBhZGRlZFBsYXllcnM6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNzTGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gICAgdGhpcy5yckxpc3RlbmVyID0gUlJTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5yclJlc3BvbnNlUmVjZWl2ZWQpO1xuICAgIHRoaXMudHNsaXN0ZW5lciA9IFRlbXBTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy50ZW1wU2Vzc2lvbkZldGNoZWQpO1xuICAgIGZldGNoVGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5jc0xpc3RlbmVyKSB0aGlzLmNzTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMucnJMaXN0ZW5lcikgdGhpcy5yckxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnRzbGlzdGVuZXIpIHRoaXMudHNsaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIHJyUmVzcG9uc2VSZWNlaXZlZCA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IFJSU2Vzc2lvblN0b3JlLmdldEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IG51bGwgfSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViL3Nlc3Npb25zXCIpO1xuICAgIH1cbiAgfVxuICBkZWxldGVQbGF5ZXIgPSAoX2lkKSA9PiB7XG4gICAgZGVsZXRlIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgZGVsZXRlUGxheWVyKHRoaXMucHJvcHMuY2x1Yi5faWQsIF9pZCk7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGxheWVyc1tpXS5faWQgPT09IF9pZCkge1xuICAgICAgICBwbGF5ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZGVkUGxheWVyczogdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMgfSk7XG4gIH1cblxuICB0ZW1wU2Vzc2lvbkZldGNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IFRlbXBTZXNzaW9uU3RvcmUuZmluZENhY2hlZFNlc3Npb24oKTtcblxuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKFwiZGlhbG9nT3BlblwiKTtcbiAgICB9XG4gIH1cbiAgcmVzdG9yZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZWxlY3RlZFNjaGVtYSA9IHRoaXMuc2Vzc2lvbi5zZWxlY3RlZFNjaGVtYTtcbiAgICB0aGlzLnNjaGVtYXRhID0gdGhpcy5zZXNzaW9uLnNjaGVtYXRhO1xuICAgIHRoaXMucGRmcyA9IHRoaXMuc2Vzc2lvbi5wZGZzO1xuICAgIHRoaXMubWF4ID0gdGhpcy5zZXNzaW9uLm1heDtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2Vzc2lvbi5taW47XG4gICAgdGhpcy5jYWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiOiArdGhpcy5zZXNzaW9uLnRhYixcbiAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuc2Vzc2lvbi5kYXRlKSxcbiAgICAgIG51bVBsYXllcnM6ICt0aGlzLnNlc3Npb24ubnVtUGxheWVycyxcbiAgICAgIGFkZGVkUGxheWVyczogdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA/IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgOiB7fVxuICAgIH0pO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IHRydWUgfSk7XG4gIH1cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IGZhbHNlIH0pO1xuICB9XG4gIGNsdWJDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2x1YjogQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCksXG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVPcGVuID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlVG9nZ2xlID0gKF9pZCwgZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50eXBlICE9PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKSByZXR1cm47XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpO1xuICAgIGNvbnN0IHNlbGVjdGVkUGxheWVyID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnMuZmluZCgocGxheWVyID0+XG4gICAgICBwbGF5ZXIuX2lkID09PSBfaWRcbiAgICApKTtcblxuICAgIGlmIChhZGRlZFBsYXllcnNbX2lkXSkge1xuICAgICAgZGVsZXRlIGFkZGVkUGxheWVyc1tfaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRlZFBsYXllcnNbX2lkXSA9IHNlbGVjdGVkUGxheWVyO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkZGVkUGxheWVycyxcbiAgICAgIG51bVBsYXllcnM6ICsrdGhpcy5zdGF0ZS5udW1QbGF5ZXJzXG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlVGFiID0gKHRhYikgPT4ge1xuICAgIGlmICh0YWIudGFyZ2V0KSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGFiIH0pO1xuICB9XG5cbiAgY29udmVydFBsYXllcnNUb0FycigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpLm1hcCgoX2lkID0+XG4gICAgICB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdXG4gICAgKSk7XG4gIH1cblxuICBzYXZlU2Vzc2lvbiA9IChzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBsYXllcnMpID0+IHtcbiAgICBzYXZlU2Vzc2lvbih7XG4gICAgICBkYXRlOiB0aGlzLnN0YXRlLmRhdGUsXG4gICAgICBudW1PZlBsYXllcnM6IHRoaXMuc3RhdGUubnVtUGxheWVycyxcbiAgICAgIHBsYXllcnMsXG4gICAgICBzZWxlY3RlZFNjaGVtYSxcbiAgICAgIHNjaGVtYXRhLFxuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uID0gKG1pbiwgbWF4LCBzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBkZnMpID0+IHtcbiAgICB0aGlzLmhhbmRsZU9wZW4oXCJzbmFja0Jhck9wZW5cIik7XG4gICAgdGVtcG9yYXJ5U2Vzc2lvbih7XG4gICAgICAuLi50aGlzLnN0YXRlLCBtaW4sIG1heCwgc2VsZWN0ZWRTY2hlbWEsIHNjaGVtYXRhLCBwZGZzXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgZGVzdHJveVRlbXBTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2Vzc2lvbiA9IG51bGw7XG4gICAgUERGU3RvcmUuY2xlYXJQREYoKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jbHViKSB7XG4gICAgICByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz47XG4gICAgfVxuICAgIGNvbnN0IGFsbFBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICBjb25zdCBhZGRlZFBsYXllcnMgPSB0aGlzLmNvbnZlcnRQbGF5ZXJzVG9BcnIoKS5zb3J0KChhLCBiKSA9PiBiLnJhdGluZyAtIGEucmF0aW5nKTtcbiAgICBjb25zdCB7IG51bVBsYXllcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJEaXNjYXJkXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmRlc3Ryb3lUZW1wU2Vzc2lvbn1cbiAgICAgIC8+LFxuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJSZXRyaWV2ZVwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5yZXN0b3JlU2Vzc2lvbn1cbiAgICAgIC8+XG4gICAgXTtcbiAgICBjb25zdCBwbGF5ZXJDb250ZW50ID0gKDxkaXY+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfVxuICAgICAgICBsYWJlbD1cIk5ldyBQbGF5ZXJcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGaWxlVXBsb2FkZXIgLz5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT1cIlNlc3Npb24gZm91bmRcIlxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBtb2RhbD17ZmFsc2V9XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuZGlhbG9nT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpfVxuICAgICAgPlxuICAgICAgICBXb3VsZCB5b3UgbGlrZSB0byByZXN0b3JlIHlvdXIgcHJldmlvdXMgc2Vzc2lvbj9cbiAgICAgIDwvRGlhbG9nPlxuICAgICAgPFBsYXllckZvcm1cbiAgICAgICAgbW9kYWxPcGVuPXt0aGlzLnN0YXRlLm5ld1BsYXllck1vZGFsfVxuICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vbmV3UlJTZXNzaW9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG9wYWNpdHk6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZTogbnVsbFxuICAgIH07XG4gIH1cbiAgdXBkYXRlRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG4gIHVwbG9hZEZpbGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZkLmFwcGVuZChcImZpbGVcIiwgdGhpcy5zdGF0ZS5maWxlKTtcbiAgICB1cGxvYWRGaWxlKGZkKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwidXBsb2FkLWZvcm1cIlxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICA+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIkNob29zZSBhIGZpbGUgKC5jc3Ygb3IgLmpzb24pXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiVXBsb2FkXCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvUmFpc2VkQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vZmlsZVVwbG9hZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==