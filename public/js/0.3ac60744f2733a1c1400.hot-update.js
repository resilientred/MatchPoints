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
	
	var _grouping = __webpack_require__(669);
	
	var _grouping2 = _interopRequireDefault(_grouping);
	
	var _restoreDialog = __webpack_require__(685);
	
	var _restoreDialog2 = _interopRequireDefault(_restoreDialog);
	
	var _uploadDialog = __webpack_require__(686);
	
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
	      debugger;
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
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      (0, _rrSessionActions.fetchTempSession)(this.props.club._id);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      console.log(nextProps);
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
	
	      var allPlayers = [];
	      var addedPlayers = [];
	      if (this.props.club) {
	        allPlayers = this.props.club.players;
	        addedPlayers = this.convertPlayersToArr().sort(function (a, b) {
	          return b.rating - a.rating;
	        });
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0FnQ1IscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQTVDa0I7O1dBNkNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFLLE1BQ3BDO0FBeERrQjs7V0EwRG5CLHFCQUFxQixZQUNuQjtXQUFNLFVBQVUsMkJBRWhCOztXQUFJLFNBQ0Y7ZUFBSyxVQUNMO2VBQUssV0FDTjtBQUNGO0FBakVrQjs7V0FrRW5CLGlCQUFpQixZQUNmO2FBQUssaUJBQWlCLE1BQUssUUFDM0I7YUFBSyxXQUFXLE1BQUssUUFDckI7YUFBSyxPQUFPLE1BQUssUUFDakI7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LHVDQUFLLFdBQVUsYUFDYiw0REFBa0IsTUFLN0I7Ozs7Ozs7QUFsUmtCLGNBQ1o7MEJBQ1c7VUFDVCxpQkFBVSxVQUFVLENBQ3ZCLGlCQUFVLFFBQ1YsaUJBRUY7Y0FBUyxpQkFBVTtBQUpuQixJQURJO0FBQU47bUJBRmlCLGEiLCJmaWxlIjoiMC4zYWM2MDc0NGYyNzMzYTFjMTQwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IFRhYnMsIFRhYiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJzXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGF0ZVBpY2tlclwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBkZWxldGVQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgeyBzYXZlU2Vzc2lvbiwgdGVtcG9yYXJ5U2Vzc2lvbiwgZGVzdHJveVRlbXBTZXNzaW9uLCBmZXRjaFRlbXBTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcnJTZXNzaW9uQWN0aW9uc1wiO1xuaW1wb3J0IFJSU2Vzc2lvblN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcnJTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBUZW1wU2Vzc2lvblN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvdGVtcFNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFBERlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGRmU3RvcmVcIjtcbmltcG9ydCBQbGF5ZXJGb3JtIGZyb20gXCIuL3BsYXllckZvcm1cIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcbmltcG9ydCBQYXJ0aWNpcGFudHMgZnJvbSBcIi4vcGFydGljaXBhbnRzXCI7XG5pbXBvcnQgR3JvdXBpbmcgZnJvbSBcIi4vZ3JvdXBpbmdcIjtcbmltcG9ydCBSZXN0b3JlRGlhbG9nIGZyb20gXCIuL3Jlc3RvcmVEaWFsb2dcIjtcbmltcG9ydCBVcGxvYWREaWFsb2cgZnJvbSBcIi4vdXBsb2FkRGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1JSU2Vzc2lvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIF9pZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5TdHJpbmdcbiAgICAgIF0pLFxuICAgICAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5XG4gICAgfSlcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlLFxuICAgICAgZ3JvdXBUYWJFbmFibGVkOiBmYWxzZSxcbiAgICAgIHRhYjogMCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICBudW1QbGF5ZXJzOiAwLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBzbmFja0Jhck9wZW46IGZhbHNlLFxuICAgICAgcmVzdG9yZURpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgdXBsb2FkRGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICBhZGRlZFBsYXllcnM6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNzTGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gICAgdGhpcy5yckxpc3RlbmVyID0gUlJTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5yclJlc3BvbnNlUmVjZWl2ZWQpO1xuICAgIHRoaXMudHNsaXN0ZW5lciA9IFRlbXBTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy50ZW1wU2Vzc2lvbkZldGNoZWQpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoVGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmNzTGlzdGVuZXIpIHRoaXMuY3NMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy5yckxpc3RlbmVyKSB0aGlzLnJyTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMudHNsaXN0ZW5lcikgdGhpcy50c2xpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgcnJSZXNwb25zZVJlY2VpdmVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gUlJTZXNzaW9uU3RvcmUuZ2V0RXJyb3IoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogbnVsbCB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKFwiL2NsdWIvc2Vzc2lvbnNcIik7XG4gICAgfVxuICB9XG4gIGRlbGV0ZVBsYXllciA9IChfaWQpID0+IHtcbiAgICBkZWxldGUgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXTtcbiAgICBkZWxldGVQbGF5ZXIodGhpcy5wcm9wcy5jbHViLl9pZCwgX2lkKTtcblxuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzW2ldLl9pZCA9PT0gX2lkKSB7XG4gICAgICAgIHBsYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkZWRQbGF5ZXJzOiB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyB9KTtcbiAgfVxuXG4gIHRlbXBTZXNzaW9uRmV0Y2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gVGVtcFNlc3Npb25TdG9yZS5maW5kQ2FjaGVkU2Vzc2lvbigpO1xuXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oXCJkaWFsb2dPcGVuXCIpO1xuICAgIH1cbiAgfVxuICByZXN0b3JlU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkU2NoZW1hID0gdGhpcy5zZXNzaW9uLnNlbGVjdGVkU2NoZW1hO1xuICAgIHRoaXMuc2NoZW1hdGEgPSB0aGlzLnNlc3Npb24uc2NoZW1hdGE7XG4gICAgdGhpcy5wZGZzID0gdGhpcy5zZXNzaW9uLnBkZnM7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNlc3Npb24ubWF4O1xuICAgIHRoaXMubWluID0gdGhpcy5zZXNzaW9uLm1pbjtcbiAgICB0aGlzLmNhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6ICt0aGlzLnNlc3Npb24udGFiLFxuICAgICAgZGF0ZTogbmV3IERhdGUodGhpcy5zZXNzaW9uLmRhdGUpLFxuICAgICAgbnVtUGxheWVyczogK3RoaXMuc2Vzc2lvbi5udW1QbGF5ZXJzLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzID8gdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA6IHt9XG4gICAgfSk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogdHJ1ZSB9KTtcbiAgfVxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdQbGF5ZXJNb2RhbDogZmFsc2UgfSk7XG4gIH1cbiAgY2x1YkNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbHViOiBDbHViU3RvcmUuZ2V0Q3VycmVudENsdWIoKSxcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZU9wZW4gPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDbG9zZSA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiBmYWxzZSB9KTtcbiAgfVxuICBoYW5kbGVUb2dnbGUgPSAoX2lkLCBlKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgIT09IFwiY2hlY2tib3hcIiAmJiBlLnRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpIHJldHVybjtcbiAgICBjb25zdCBhZGRlZFBsYXllcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmFkZGVkUGxheWVycyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQbGF5ZXIgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycy5maW5kKChwbGF5ZXIgPT5cbiAgICAgIHBsYXllci5faWQgPT09IF9pZFxuICAgICkpO1xuXG4gICAgaWYgKGFkZGVkUGxheWVyc1tfaWRdKSB7XG4gICAgICBkZWxldGUgYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZGVkUGxheWVyc1tfaWRdID0gc2VsZWN0ZWRQbGF5ZXI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRkZWRQbGF5ZXJzLFxuICAgICAgbnVtUGxheWVyczogKyt0aGlzLnN0YXRlLm51bVBsYXllcnNcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVUYWIgPSAodGFiKSA9PiB7XG4gICAgaWYgKHRhYi50YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWIgfSk7XG4gIH1cblxuICBjb252ZXJ0UGxheWVyc1RvQXJyKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFkZGVkUGxheWVycykubWFwKChfaWQgPT5cbiAgICAgIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF1cbiAgICApKTtcbiAgfVxuXG4gIHNhdmVTZXNzaW9uID0gKHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGxheWVycykgPT4ge1xuICAgIHNhdmVTZXNzaW9uKHtcbiAgICAgIGRhdGU6IHRoaXMuc3RhdGUuZGF0ZSxcbiAgICAgIG51bU9mUGxheWVyczogdGhpcy5zdGF0ZS5udW1QbGF5ZXJzLFxuICAgICAgcGxheWVycyxcbiAgICAgIHNlbGVjdGVkU2NoZW1hLFxuICAgICAgc2NoZW1hdGEsXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb24gPSAobWluLCBtYXgsIHNjaGVtYXRhLCBzZWxlY3RlZFNjaGVtYSwgcGRmcykgPT4ge1xuICAgIHRoaXMuaGFuZGxlT3BlbihcInNuYWNrQmFyT3BlblwiKTtcbiAgICB0ZW1wb3JhcnlTZXNzaW9uKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsIG1pbiwgbWF4LCBzZWxlY3RlZFNjaGVtYSwgc2NoZW1hdGEsIHBkZnNcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICBkZXN0cm95VGVtcFNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXNzaW9uID0gbnVsbDtcbiAgICBQREZTdG9yZS5jbGVhclBERigpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFsbFBsYXllcnMgPSBbXTtcbiAgICBsZXQgYWRkZWRQbGF5ZXJzID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMuY2x1Yikge1xuICAgICAgYWxsUGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgICAgYWRkZWRQbGF5ZXJzID0gdGhpcy5jb252ZXJ0UGxheWVyc1RvQXJyKCkuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gICAgfVxuICAgIGNvbnN0IHsgbnVtUGxheWVycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHBsYXllckNvbnRlbnQgPSAoPGRpdj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9XG4gICAgICAgIGxhYmVsPVwiTmV3IFBsYXllclwiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVPcGVuKFwidXBsb2FkRGlhbG9nT3BlblwiKX1cbiAgICAgICAgbGFiZWw9XCJVcGxvYWQgUGxheWVyc1wiXG4gICAgICAgIHNlY29uZGFyeT17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxNTBweFwiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEYXRlIG9mIFNlc3Npb25cIlxuICAgICAgICAgIGhpbnRUZXh0PVwiRGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBkYXRlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0ZSB9KX1cbiAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGFydGljaXBhbnRzXG4gICAgICAgIG9iakFkZGVkUGxheWVycz17dGhpcy5zdGF0ZS5hZGRlZFBsYXllcnN9XG4gICAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgICBkZWxldGVQbGF5ZXI9e3RoaXMuZGVsZXRlUGxheWVyfVxuICAgICAgICBhbGxQbGF5ZXJzPXthbGxQbGF5ZXJzfVxuICAgICAgICBoYW5kbGVUb2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgLz5cbiAgICA8L2Rpdj4pO1xuICAgIGNvbnN0IGdyb3VwQ29udGVudCA9ICg8R3JvdXBpbmdcbiAgICAgIG51bVBsYXllcnM9e251bVBsYXllcnN9XG4gICAgICBjYWNoZWQ9e3RoaXMuY2FjaGVkfVxuICAgICAgcGRmcz17dGhpcy5wZGZzfVxuICAgICAgbWluPXt0aGlzLm1pbn1cbiAgICAgIG1heD17dGhpcy5tYXh9XG4gICAgICBzZWxlY3RlZEdyb3VwPXt0aGlzLnNlbGVjdGVkU2NoZW1hfVxuICAgICAgc2NoZW1hdGE9e3RoaXMuc2NoZW1hdGF9XG4gICAgICBhZGRlZFBsYXllcnM9e2FkZGVkUGxheWVyc31cbiAgICAgIHNhdmVTZXNzaW9uPXt0aGlzLnNhdmVTZXNzaW9ufVxuICAgICAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbj17dGhpcy50ZW1wb3JhcmlseVNhdmVTZXNzaW9ufVxuICAgICAgY2x1Yj17dGhpcy5wcm9wcy5jbHVifVxuICAgICAgZGF0ZT17bW9tZW50KHRoaXMuc3RhdGUuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1cbiAgICAvPik7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRhaW5lclwiPlxuICAgICAgPFRhYnNcbiAgICAgICAgdGFiSXRlbUNvbnRhaW5lclN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNjczQUI3XCIgfX1cbiAgICAgICAgY29udGVudENvbnRhaW5lclN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjRTBFMEUwXCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjQwMHB4XCJcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFifVxuICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVUYWJ9XG4gICAgICA+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJSZWdpc3RyYXRpb25cIiB2YWx1ZT17MH0+XG4gICAgICAgICAgeyBwbGF5ZXJDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJHcm91cGluZ1wiIHZhbHVlPXsxfT5cbiAgICAgICAgICB7IGdyb3VwQ29udGVudCB9XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UYWJzPlxuICAgICAgPFNuYWNrQmFyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuc25hY2tCYXJPcGVufVxuICAgICAgICBtZXNzYWdlPVwiU2Vzc2lvbiBoYXMgYmVlbiB0ZW1wb3JhcmlseSBzYXZlZFwiXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezgwMDB9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKFwic25hY2tCYXJPcGVuXCIpfVxuICAgICAgLz5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3BlbiAmJlxuICAgICAgICAgIDxSZXN0b3JlRGlhbG9nXG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnJlc3RvcmVEaWFsb2dPcGVufVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICByZXN0b3JlU2Vzc2lvbj17dGhpcy5yZXN0b3JlU2Vzc2lvbn1cbiAgICAgICAgICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbj17dGhpcy5kZXN0cm95VGVtcFNlc3Npb259XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVuICYmXG4gICAgICAgICAgPFVwbG9hZERpYWxvZ1xuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51cGxvYWREaWFsb2dPcGVufVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbCAmJlxuICAgICAgICAgIDxQbGF5ZXJGb3JtXG4gICAgICAgICAgICBtb2RhbE9wZW49e3RoaXMuc3RhdGUubmV3UGxheWVyTW9kYWx9XG4gICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgIXRoaXMucHJvcHMuY2x1YiAmJlxuICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yclNlc3Npb24vbmV3UlJTZXNzaW9uLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==