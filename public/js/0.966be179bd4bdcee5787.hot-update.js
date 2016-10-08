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
	      }
	    };
	
	    _this.uploadFile = function (e) {
	      e.preventDefault();
	      _this.setState({ processing: true });
	      (0, _clientActions.uploadFile)({
	        data_uri: _this.state.data_uri,
	        filename: _this.state.filename,
	        filetype: _this.state.filetype
	      });
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
	      return _react2.default.createElement("form", {
	        id: "upload-form",
	        encType: "multipart/form-data",
	        onSubmit: this.uploadFile
	      }, _react2.default.createElement("div", null, "File Selected:  " + (this.state.filename || "None")), _react2.default.createElement(_RaisedButton2.default, {
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
	      }, _react2.default.createElement("input", { type: "submit", style: style })), this.loader());
	    }
	  }]);
	
	  return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9maWxlVXBsb2FkZXIuanM/NTg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQjsyQkFVbkI7O3lCQUFZLE9BQU87MkJBQUE7O2lHQUNYOztXQTJCUixxQkFBcUIsWUFDbkI7V0FBTSxRQUFRLHlCQUVkOztXQUFJLE9BQ0Y7ZUFBSyxTQUFTLEVBQUUsT0FDaEI7b0JBQVcsWUFDVDtpQkFBSyxTQUFTLEVBQUUsT0FDakI7QUFGRCxZQUdEO0FBTEQsY0FNRTtxQ0FBZSxLQUNoQjtBQUNGO0FBdkNrQjs7V0F3Q25CLGVBQWUsVUFBQyxLQUNkO2NBQU8sTUFBSyxNQUFNLGFBQ2xCO3dDQUFhLE1BQUssTUFBTSxLQUFLLEtBRTdCOztXQUFNLFVBQVUsTUFBSyxNQUFNLEtBQzNCO1lBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FDbEM7YUFBSSxRQUFRLEdBQUcsUUFBUSxLQUNyQjttQkFBUSxPQUFPLEdBQ2hCO0FBQ0Y7QUFDRDthQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUssTUFDcEM7QUFuRGtCOztXQXFEbkIscUJBQXFCLFlBQ25CO1dBQU0sVUFBVSwyQkFFaEI7O1dBQUksU0FDRjtlQUFLLFVBQ0w7ZUFBSyxXQUNOO0FBQ0Y7QUE1RGtCOztXQTZEbkIsaUJB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LEtBQUs7QUFGZixRQURGLEVBS0UsaUVBQXlCLEtBQUssTUFBTSxZQUFZLDBCQUNoRDtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERjtlQU9JO2dCQUFPLEtBQUssTUFDWjttQkFBVSxLQUNWO2dCQUFPO0FBSFAsUUFERixvQkFPRjtnQkFFRTt3QkFDQTsyQkFBaUI7QUFGakIsUUFERixFQUtFLHlDQUFPLE1BQUssVUFBUyxPQUFPLFdBRTVCLEtBR1A7Ozs7Ozs7bUJBNUZrQixhIiwiZmlsZSI6IjAuOTY2YmUxNzliZDRiZGNlZTU3ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ZsYXRCdXR0b25cIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJtYXRlcmlhbC11aS9EYXRlUGlja2VyXCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJtYXRlcmlhbC11aS9EaWFsb2dcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IHsgc2F2ZVNlc3Npb24sIHRlbXBvcmFyeVNlc3Npb24sIGRlc3Ryb3lUZW1wU2Vzc2lvbiwgZmV0Y2hUZW1wU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgVGVtcFNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3RlbXBTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5pbXBvcnQgUGxheWVyRm9ybSBmcm9tIFwiLi9wbGF5ZXJGb3JtXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuL3BhcnRpY2lwYW50c1wiO1xuaW1wb3J0IEdyb3VwaW5nIGZyb20gXCIuL2dyb3VwaW5nXCI7XG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gXCIuL2ZpbGVVcGxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSUlNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBfaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuU3RyaW5nXG4gICAgICBdKSxcbiAgICAgIHBsYXllcnM6IFByb3BUeXBlcy5BcnJheVxuICAgIH0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZSxcbiAgICAgIGdyb3VwVGFiRW5hYmxlZDogZmFsc2UsXG4gICAgICB0YWI6IDAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgbnVtUGxheWVyczogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc25hY2tCYXJPcGVuOiBmYWxzZSxcbiAgICAgIGRpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICAgIHRoaXMucnJMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMucnJSZXNwb25zZVJlY2VpdmVkKTtcbiAgICB0aGlzLnRzbGlzdGVuZXIgPSBUZW1wU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMudGVtcFNlc3Npb25GZXRjaGVkKTtcbiAgICBmZXRjaFRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY3NMaXN0ZW5lcikgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnJyTGlzdGVuZXIpIHRoaXMucnJMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy50c2xpc3RlbmVyKSB0aGlzLnRzbGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICByclJlc3BvbnNlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBSUlNlc3Npb25TdG9yZS5nZXRFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlUGxheWVyID0gKF9pZCkgPT4ge1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdO1xuICAgIGRlbGV0ZVBsYXllcih0aGlzLnByb3BzLmNsdWIuX2lkLCBfaWQpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBfaWQpIHtcbiAgICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRlZFBsYXllcnM6IHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzIH0pO1xuICB9XG5cbiAgdGVtcFNlc3Npb25GZXRjaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBUZW1wU2Vzc2lvblN0b3JlLmZpbmRDYWNoZWRTZXNzaW9uKCk7XG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbihcImRpYWxvZ09wZW5cIik7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRTY2hlbWEgPSB0aGlzLnNlc3Npb24uc2VsZWN0ZWRTY2hlbWE7XG4gICAgdGhpcy5zY2hlbWF0YSA9IHRoaXMuc2Vzc2lvbi5zY2hlbWF0YTtcbiAgICB0aGlzLnBkZnMgPSB0aGlzLnNlc3Npb24ucGRmcztcbiAgICB0aGlzLm1heCA9IHRoaXMuc2Vzc2lvbi5tYXg7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNlc3Npb24ubWluO1xuICAgIHRoaXMuY2FjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogK3RoaXMuc2Vzc2lvbi50YWIsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnNlc3Npb24uZGF0ZSksXG4gICAgICBudW1QbGF5ZXJzOiArdGhpcy5zZXNzaW9uLm51bVBsYXllcnMsXG4gICAgICBhZGRlZFBsYXllcnM6IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgPyB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzIDoge31cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNsdWI6IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLFxuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT3BlbiA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZVRvZ2dsZSA9IChfaWQsIGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYXllciA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzLmZpbmQoKHBsYXllciA9PlxuICAgICAgcGxheWVyLl9pZCA9PT0gX2lkXG4gICAgKSk7XG5cbiAgICBpZiAoYWRkZWRQbGF5ZXJzW19pZF0pIHtcbiAgICAgIGRlbGV0ZSBhZGRlZFBsYXllcnNbX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWRQbGF5ZXJzW19pZF0gPSBzZWxlY3RlZFBsYXllcjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRlZFBsYXllcnMsXG4gICAgICBudW1QbGF5ZXJzOiArK3RoaXMuc3RhdGUubnVtUGxheWVyc1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZVRhYiA9ICh0YWIpID0+IHtcbiAgICBpZiAodGFiLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KTtcbiAgfVxuXG4gIGNvbnZlcnRQbGF5ZXJzVG9BcnIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKS5tYXAoKF9pZCA9PlxuICAgICAgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXVxuICAgICkpO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwbGF5ZXJzKSA9PiB7XG4gICAgc2F2ZVNlc3Npb24oe1xuICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuICAgICAgbnVtT2ZQbGF5ZXJzOiB0aGlzLnN0YXRlLm51bVBsYXllcnMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgc2VsZWN0ZWRTY2hlbWEsXG4gICAgICBzY2hlbWF0YSxcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbiA9IChtaW4sIG1heCwgc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwZGZzKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKFwic25hY2tCYXJPcGVuXCIpO1xuICAgIHRlbXBvcmFyeVNlc3Npb24oe1xuICAgICAgLi4udGhpcy5zdGF0ZSwgbWluLCBtYXgsIHNlbGVjdGVkU2NoZW1hLCBzY2hlbWF0YSwgcGRmc1xuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGRlc3Ryb3lUZW1wU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgIFBERlN0b3JlLmNsZWFyUERGKCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2x1Yikge1xuICAgICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+O1xuICAgIH1cbiAgICBjb25zdCBhbGxQbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gdGhpcy5jb252ZXJ0UGxheWVyc1RvQXJyKCkuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gICAgY29uc3QgeyBudW1QbGF5ZXJzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiRGlzY2FyZFwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5kZXN0cm95VGVtcFNlc3Npb259XG4gICAgICAvPixcbiAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiUmV0cmlldmVcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMucmVzdG9yZVNlc3Npb259XG4gICAgICAvPlxuICAgIF07XG4gICAgY29uc3QgcGxheWVyQ29udGVudCA9ICg8ZGl2PlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgbGFiZWw9XCJOZXcgUGxheWVyXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEYXRlIG9mIFNlc3Npb25cIlxuICAgICAgICAgIGhpbnRUZXh0PVwiRGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBkYXRlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0ZSB9KX1cbiAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8RmlsZVVwbG9hZGVyIC8+XG4gICAgICA8UGFydGljaXBhbnRzXG4gICAgICAgIG9iakFkZGVkUGxheWVycz17dGhpcy5zdGF0ZS5hZGRlZFBsYXllcnN9XG4gICAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgICBkZWxldGVQbGF5ZXI9e3RoaXMuZGVsZXRlUGxheWVyfVxuICAgICAgICBhbGxQbGF5ZXJzPXthbGxQbGF5ZXJzfVxuICAgICAgICBoYW5kbGVUb2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgLz5cbiAgICA8L2Rpdj4pO1xuICAgIGNvbnN0IGdyb3VwQ29udGVudCA9ICg8R3JvdXBpbmdcbiAgICAgIG51bVBsYXllcnM9e251bVBsYXllcnN9XG4gICAgICBjYWNoZWQ9e3RoaXMuY2FjaGVkfVxuICAgICAgcGRmcz17dGhpcy5wZGZzfVxuICAgICAgbWluPXt0aGlzLm1pbn1cbiAgICAgIG1heD17dGhpcy5tYXh9XG4gICAgICBzZWxlY3RlZEdyb3VwPXt0aGlzLnNlbGVjdGVkU2NoZW1hfVxuICAgICAgc2NoZW1hdGE9e3RoaXMuc2NoZW1hdGF9XG4gICAgICBhZGRlZFBsYXllcnM9e2FkZGVkUGxheWVyc31cbiAgICAgIHNhdmVTZXNzaW9uPXt0aGlzLnNhdmVTZXNzaW9ufVxuICAgICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbj17dGhpcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9ufVxuICAgICAgY2x1Yj17dGhpcy5wcm9wcy5jbHVifVxuICAgICAgZGF0ZT17bW9tZW50KHRoaXMuc3RhdGUuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1cbiAgICAvPik7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRhaW5lclwiPlxuICAgICAgPFRhYnNcbiAgICAgICAgdGFiSXRlbUNvbnRhaW5lclN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNjczQUI3XCIgfX1cbiAgICAgICAgY29udGVudENvbnRhaW5lclN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjRTBFMEUwXCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjQwMHB4XCJcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFifVxuICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVUYWJ9XG4gICAgICA+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJSZWdpc3RyYXRpb25cIiB2YWx1ZT17MH0+XG4gICAgICAgICAgeyBwbGF5ZXJDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJHcm91cGluZ1wiIHZhbHVlPXsxfT5cbiAgICAgICAgICB7IGdyb3VwQ29udGVudCB9XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UYWJzPlxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuc25hY2tCYXJPcGVufVxuICAgICAgICBtZXNzYWdlPVwiU2Vzc2lvbiBoYXMgYmVlbiB0ZW1wb3JhcmlseSBzYXZlZFwiXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezgwMDB9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKFwic25hY2tCYXJPcGVuXCIpfVxuICAgICAgLz5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJTZXNzaW9uIGZvdW5kXCJcbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmRpYWxvZ09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKX1cbiAgICAgID5cbiAgICAgICAgV291bGQgeW91IGxpa2UgdG8gcmVzdG9yZSB5b3VyIHByZXZpb3VzIHNlc3Npb24/XG4gICAgICA8L0RpYWxvZz5cbiAgICAgIDxQbGF5ZXJGb3JtXG4gICAgICAgIG1vZGFsT3Blbj17dGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbH1cbiAgICAgICAgY2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgLz5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL25ld1JSU2Vzc2lvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgcmlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgb3BhY2l0eTogMFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhX3VyaTogbnVsbCxcbiAgICAgIGZpbGVuYW1lOiBudWxsLFxuICAgICAgZmlsZXR5cGU6IG51bGwsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucHJvY2Vzc2luZyAhPT0gbmV4dFN0YXRlLnByb2Nlc3NpbmcgfHxcbiAgICAgIHRoaXMuc3RhdGUuZmlsZW5hbWUgIT09IG5leHRTdGF0ZS5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gIH1cbiAgdXBkYXRlRmlsZSA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmICgvY3N2fGpzb24vLnRlc3QoZmlsZS50eXBlKSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICh1cGxvYWQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YV91cmk6IHVwbG9hZC50YXJnZXQucmVzdWx0LFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZXR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH1cbiAgdXBsb2FkRmlsZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgIHVwbG9hZEZpbGUoe1xuICAgICAgZGF0YV91cmk6IHRoaXMuc3RhdGUuZGF0YV91cmksXG4gICAgICBmaWxlbmFtZTogdGhpcy5zdGF0ZS5maWxlbmFtZSxcbiAgICAgIGZpbGV0eXBlOiB0aGlzLnN0YXRlLmZpbGV0eXBlXG4gICAgfSk7XG4gIH1cbiAgbG9hZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5wcm9jZXNzaW5nICYmICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybVxuICAgICAgICBpZD1cInVwbG9hZC1mb3JtXCJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICBvblN1Ym1pdD17dGhpcy51cGxvYWRGaWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2PntgRmlsZSBTZWxlY3RlZDogICR7dGhpcy5zdGF0ZS5maWxlbmFtZSB8fCBcIk5vbmVcIn1gfTwvZGl2PlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJDaG9vc2UgYSBmaWxlICguY3N2IG9yIC5qc29uKVwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpbGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD1cImxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cbiAgICAgICAgeyB0aGlzLmxvYWRlcigpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL2ZpbGVVcGxvYWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=