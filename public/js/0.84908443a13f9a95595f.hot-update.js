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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0E4QlIscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQTFDa0I7O1dBMkNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFLLE1BQ3BDO0FBdERrQjs7V0F3RG5CLHFCQUFxQixZQUNuQjtXQUFNLFVBQVUsMkJBRWhCOztXQUFJLFNBQ0Y7ZUFBSyxVQUNMO2VBQUssV0FDTjtBQUNGO0FBL0RrQjs7V0FnRW5CLGlCQUFpQixZQUNmO2FBQUssaUJBQWlCLE1BQUssUUFDM0I7YUFBSyxXQUFXLE1BQUssUUFDckI7YUFBSyxPQUFPLE1BQUssUUFDakI7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REFBa0IsTUFLN0I7Ozs7Ozs7QUFoUmtCLGNBQ1o7MEJBQ1c7VUFDVCxpQkFBVSxVQUFVLENBQ3ZCLGlCQUFVLFFBQ1YsaUJBRUY7Y0FBUyxpQkFBVTtBQUpuQixJQURJO0FBQU47bUJBRmlCLGEiLCJmaWxlIjoiMC44NDkwODQ0M2ExM2Y5YTk1NTk1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IFRhYnMsIFRhYiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJzXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwibWF0ZXJpYWwtdWkvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGF0ZVBpY2tlclwiO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gXCJtYXRlcmlhbC11aS9TbmFja2JhclwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBkZWxldGVQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zXCI7XG5pbXBvcnQgeyBzYXZlU2Vzc2lvbiwgdGVtcG9yYXJ5U2Vzc2lvbiwgZGVzdHJveVRlbXBTZXNzaW9uLCBmZXRjaFRlbXBTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcnJTZXNzaW9uQWN0aW9uc1wiO1xuaW1wb3J0IFJSU2Vzc2lvblN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcnJTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBUZW1wU2Vzc2lvblN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvdGVtcFNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFBERlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcGRmU3RvcmVcIjtcbmltcG9ydCBQbGF5ZXJGb3JtIGZyb20gXCIuL3BsYXllckZvcm1cIjtcbmltcG9ydCBDbHViU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9jbHViU3RvcmVcIjtcbmltcG9ydCBQYXJ0aWNpcGFudHMgZnJvbSBcIi4vcGFydGljaXBhbnRzXCI7XG5pbXBvcnQgR3JvdXBpbmcgZnJvbSBcIi4vZ3JvdXBpbmdcIjtcbmltcG9ydCBSZXN0b3JlRGlhbG9nIGZyb20gXCIuL3Jlc3RvcmVEaWFsb2dcIjtcbmltcG9ydCBVcGxvYWREaWFsb2cgZnJvbSBcIi4vdXBsb2FkRGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1JSU2Vzc2lvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIF9pZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5TdHJpbmdcbiAgICAgIF0pLFxuICAgICAgcGxheWVyczogUHJvcFR5cGVzLmFycmF5XG4gICAgfSlcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlLFxuICAgICAgZ3JvdXBUYWJFbmFibGVkOiBmYWxzZSxcbiAgICAgIHRhYjogMCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICBudW1QbGF5ZXJzOiAwLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBzbmFja0Jhck9wZW46IGZhbHNlLFxuICAgICAgcmVzdG9yZURpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgdXBsb2FkRGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICBhZGRlZFBsYXllcnM6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNzTGlzdGVuZXIgPSBDbHViU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5jbHViQ2hhbmdlZCk7XG4gICAgdGhpcy5yckxpc3RlbmVyID0gUlJTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy5yclJlc3BvbnNlUmVjZWl2ZWQpO1xuICAgIHRoaXMudHNsaXN0ZW5lciA9IFRlbXBTZXNzaW9uU3RvcmUuYWRkTGlzdGVuZXIodGhpcy50ZW1wU2Vzc2lvbkZldGNoZWQpO1xuICAgIGZldGNoVGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5jc0xpc3RlbmVyKSB0aGlzLmNzTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMucnJMaXN0ZW5lcikgdGhpcy5yckxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnRzbGlzdGVuZXIpIHRoaXMudHNsaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIHJyUmVzcG9uc2VSZWNlaXZlZCA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IFJSU2Vzc2lvblN0b3JlLmdldEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IG51bGwgfSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViL3Nlc3Npb25zXCIpO1xuICAgIH1cbiAgfVxuICBkZWxldGVQbGF5ZXIgPSAoX2lkKSA9PiB7XG4gICAgZGVsZXRlIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgZGVsZXRlUGxheWVyKHRoaXMucHJvcHMuY2x1Yi5faWQsIF9pZCk7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGxheWVyc1tpXS5faWQgPT09IF9pZCkge1xuICAgICAgICBwbGF5ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZGVkUGxheWVyczogdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMgfSk7XG4gIH1cblxuICB0ZW1wU2Vzc2lvbkZldGNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IFRlbXBTZXNzaW9uU3RvcmUuZmluZENhY2hlZFNlc3Npb24oKTtcblxuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKFwiZGlhbG9nT3BlblwiKTtcbiAgICB9XG4gIH1cbiAgcmVzdG9yZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZWxlY3RlZFNjaGVtYSA9IHRoaXMuc2Vzc2lvbi5zZWxlY3RlZFNjaGVtYTtcbiAgICB0aGlzLnNjaGVtYXRhID0gdGhpcy5zZXNzaW9uLnNjaGVtYXRhO1xuICAgIHRoaXMucGRmcyA9IHRoaXMuc2Vzc2lvbi5wZGZzO1xuICAgIHRoaXMubWF4ID0gdGhpcy5zZXNzaW9uLm1heDtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2Vzc2lvbi5taW47XG4gICAgdGhpcy5jYWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiOiArdGhpcy5zZXNzaW9uLnRhYixcbiAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuc2Vzc2lvbi5kYXRlKSxcbiAgICAgIG51bVBsYXllcnM6ICt0aGlzLnNlc3Npb24ubnVtUGxheWVycyxcbiAgICAgIGFkZGVkUGxheWVyczogdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA/IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgOiB7fVxuICAgIH0pO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IHRydWUgfSk7XG4gIH1cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IGZhbHNlIH0pO1xuICB9XG4gIGNsdWJDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2x1YjogQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCksXG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVPcGVuID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlVG9nZ2xlID0gKF9pZCwgZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50eXBlICE9PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKSByZXR1cm47XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpO1xuICAgIGNvbnN0IHNlbGVjdGVkUGxheWVyID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnMuZmluZCgocGxheWVyID0+XG4gICAgICBwbGF5ZXIuX2lkID09PSBfaWRcbiAgICApKTtcblxuICAgIGlmIChhZGRlZFBsYXllcnNbX2lkXSkge1xuICAgICAgZGVsZXRlIGFkZGVkUGxheWVyc1tfaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRlZFBsYXllcnNbX2lkXSA9IHNlbGVjdGVkUGxheWVyO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkZGVkUGxheWVycyxcbiAgICAgIG51bVBsYXllcnM6ICsrdGhpcy5zdGF0ZS5udW1QbGF5ZXJzXG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlVGFiID0gKHRhYikgPT4ge1xuICAgIGlmICh0YWIudGFyZ2V0KSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGFiIH0pO1xuICB9XG5cbiAgY29udmVydFBsYXllcnNUb0FycigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpLm1hcCgoX2lkID0+XG4gICAgICB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdXG4gICAgKSk7XG4gIH1cblxuICBzYXZlU2Vzc2lvbiA9IChzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBsYXllcnMpID0+IHtcbiAgICBzYXZlU2Vzc2lvbih7XG4gICAgICBkYXRlOiB0aGlzLnN0YXRlLmRhdGUsXG4gICAgICBudW1PZlBsYXllcnM6IHRoaXMuc3RhdGUubnVtUGxheWVycyxcbiAgICAgIHBsYXllcnMsXG4gICAgICBzZWxlY3RlZFNjaGVtYSxcbiAgICAgIHNjaGVtYXRhLFxuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uID0gKG1pbiwgbWF4LCBzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBkZnMpID0+IHtcbiAgICB0aGlzLmhhbmRsZU9wZW4oXCJzbmFja0Jhck9wZW5cIik7XG4gICAgdGVtcG9yYXJ5U2Vzc2lvbih7XG4gICAgICAuLi50aGlzLnN0YXRlLCBtaW4sIG1heCwgc2VsZWN0ZWRTY2hlbWEsIHNjaGVtYXRhLCBwZGZzXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgZGVzdHJveVRlbXBTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2Vzc2lvbiA9IG51bGw7XG4gICAgUERGU3RvcmUuY2xlYXJQREYoKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhbGxQbGF5ZXJzID0gW107XG4gICAgbGV0IGFkZGVkUGxheWVycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIGFsbFBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICAgIGFkZGVkUGxheWVycyA9IHRoaXMuY29udmVydFBsYXllcnNUb0FycigpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpO1xuICAgICAgLy90aGlzIG1heSBiZSB0aGUgYm90dGxlbmVjaz9cbiAgICB9XG4gICAgY29uc3QgeyBudW1QbGF5ZXJzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcGxheWVyQ29udGVudCA9ICg8ZGl2PlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgbGFiZWw9XCJOZXcgUGxheWVyXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU9wZW4oXCJ1cGxvYWREaWFsb2dPcGVuXCIpfVxuICAgICAgICBsYWJlbD1cIlVwbG9hZCBQbGF5ZXJzXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjE1MHB4XCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3RvcmVEaWFsb2dPcGVuICYmXG4gICAgICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUucmVzdG9yZURpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICAgICAgZGVzdHJveVRlbXBTZXNzaW9uPXt0aGlzLmRlc3Ryb3lUZW1wU2Vzc2lvbn1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW4gJiZcbiAgICAgICAgICA8VXBsb2FkRGlhbG9nXG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLm5ld1BsYXllck1vZGFsICYmXG4gICAgICAgICAgPFBsYXllckZvcm1cbiAgICAgICAgICAgIG1vZGFsT3Blbj17dGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbH1cbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICAhdGhpcy5wcm9wcy5jbHViICYmXG4gICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9