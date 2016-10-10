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
	      console.log(this.props.club);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0FnQ1IscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQTVDa0I7O1dBNkNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFLLE1BQ3BDO0FBeERrQjs7V0EwRG5CLHFCQUFxQixZQUNuQjtXQUFNLFVBQVUsMkJBRWhCOztXQUFJLFNBQ0Y7ZUFBSyxVQUNMO2VBQUssV0FDTjtBQUNGO0FBakVrQjs7V0FrRW5CLGlCQUFpQixZQUNmO2FBQUssaUJBQWlCLE1BQUssUUFDM0I7YUFBSyxXQUFXLE1BQUssUUFDckI7YUFBSyxPQUFPLE1BQUssUUFDakI7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VCx1Q0FBSyxXQUFVLGFBQ2QsdUNBQUssV0FBVSxhQUNiLDREQUFrQixNQUs3Qjs7Ozs7OztBQW5Sa0IsY0FDWjswQkFDVztVQUNULGlCQUFVLFVBQVUsQ0FDdkIsaUJBQVUsUUFDVixpQkFFRjtjQUFTLGlCQUFVO0FBSm5CLElBREk7QUFBTjttQkFGaUIsYSIsImZpbGUiOiIwLjNlYzAyN2RlOTliNTkwM2EyNTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgVGFicywgVGFiIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYnNcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9SYWlzZWRCdXR0b25cIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJtYXRlcmlhbC11aS9EYXRlUGlja2VyXCI7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1NuYWNrYmFyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IGRlbGV0ZVBsYXllciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnNcIjtcbmltcG9ydCB7IHNhdmVTZXNzaW9uLCB0ZW1wb3JhcnlTZXNzaW9uLCBkZXN0cm95VGVtcFNlc3Npb24sIGZldGNoVGVtcFNlc3Npb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yclNlc3Npb25BY3Rpb25zXCI7XG5pbXBvcnQgUlJTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9yclNlc3Npb25TdG9yZVwiO1xuaW1wb3J0IFRlbXBTZXNzaW9uU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy90ZW1wU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgUERGU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9wZGZTdG9yZVwiO1xuaW1wb3J0IFBsYXllckZvcm0gZnJvbSBcIi4vcGxheWVyRm9ybVwiO1xuaW1wb3J0IENsdWJTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NsdWJTdG9yZVwiO1xuaW1wb3J0IFBhcnRpY2lwYW50cyBmcm9tIFwiLi9wYXJ0aWNpcGFudHNcIjtcbmltcG9ydCBHcm91cGluZyBmcm9tIFwiLi9ncm91cGluZ1wiO1xuaW1wb3J0IFJlc3RvcmVEaWFsb2cgZnJvbSBcIi4vcmVzdG9yZURpYWxvZ1wiO1xuaW1wb3J0IFVwbG9hZERpYWxvZyBmcm9tIFwiLi91cGxvYWREaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UlJTZXNzaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgX2lkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLlN0cmluZ1xuICAgICAgXSksXG4gICAgICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlcbiAgICB9KVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2UsXG4gICAgICBncm91cFRhYkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdGFiOiAwLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIG51bVBsYXllcnM6IDAsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHNuYWNrQmFyT3BlbjogZmFsc2UsXG4gICAgICByZXN0b3JlRGlhbG9nT3BlbjogZmFsc2UsXG4gICAgICB1cGxvYWREaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIGFkZGVkUGxheWVyczoge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3NMaXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmNsdWJDaGFuZ2VkKTtcbiAgICB0aGlzLnJyTGlzdGVuZXIgPSBSUlNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnJyUmVzcG9uc2VSZWNlaXZlZCk7XG4gICAgdGhpcy50c2xpc3RlbmVyID0gVGVtcFNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnRlbXBTZXNzaW9uRmV0Y2hlZCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2hUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY3NMaXN0ZW5lcikgdGhpcy5jc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnJyTGlzdGVuZXIpIHRoaXMucnJMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy50c2xpc3RlbmVyKSB0aGlzLnRzbGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICByclJlc3BvbnNlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBSUlNlc3Npb25TdG9yZS5nZXRFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlUGxheWVyID0gKF9pZCkgPT4ge1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdO1xuICAgIGRlbGV0ZVBsYXllcih0aGlzLnByb3BzLmNsdWIuX2lkLCBfaWQpO1xuXG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXllcnNbaV0uX2lkID09PSBfaWQpIHtcbiAgICAgICAgcGxheWVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRlZFBsYXllcnM6IHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzIH0pO1xuICB9XG5cbiAgdGVtcFNlc3Npb25GZXRjaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBUZW1wU2Vzc2lvblN0b3JlLmZpbmRDYWNoZWRTZXNzaW9uKCk7XG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbihcImRpYWxvZ09wZW5cIik7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRTY2hlbWEgPSB0aGlzLnNlc3Npb24uc2VsZWN0ZWRTY2hlbWE7XG4gICAgdGhpcy5zY2hlbWF0YSA9IHRoaXMuc2Vzc2lvbi5zY2hlbWF0YTtcbiAgICB0aGlzLnBkZnMgPSB0aGlzLnNlc3Npb24ucGRmcztcbiAgICB0aGlzLm1heCA9IHRoaXMuc2Vzc2lvbi5tYXg7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNlc3Npb24ubWluO1xuICAgIHRoaXMuY2FjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogK3RoaXMuc2Vzc2lvbi50YWIsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aGlzLnNlc3Npb24uZGF0ZSksXG4gICAgICBudW1QbGF5ZXJzOiArdGhpcy5zZXNzaW9uLm51bVBsYXllcnMsXG4gICAgICBhZGRlZFBsYXllcnM6IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgPyB0aGlzLnNlc3Npb24uYWRkZWRQbGF5ZXJzIDoge31cbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlKFwiZGlhbG9nT3BlblwiKTtcbiAgfVxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1BsYXllck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuICBjbHViQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNsdWI6IENsdWJTdG9yZS5nZXRDdXJyZW50Q2x1YigpLFxuICAgICAgbmV3UGxheWVyTW9kYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT3BlbiA9IChmaWVsZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB0cnVlIH0pO1xuICB9XG4gIGhhbmRsZUNsb3NlID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGZhbHNlIH0pO1xuICB9XG4gIGhhbmRsZVRvZ2dsZSA9IChfaWQsIGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFkZGVkUGxheWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYXllciA9IHRoaXMucHJvcHMuY2x1Yi5wbGF5ZXJzLmZpbmQoKHBsYXllciA9PlxuICAgICAgcGxheWVyLl9pZCA9PT0gX2lkXG4gICAgKSk7XG5cbiAgICBpZiAoYWRkZWRQbGF5ZXJzW19pZF0pIHtcbiAgICAgIGRlbGV0ZSBhZGRlZFBsYXllcnNbX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWRQbGF5ZXJzW19pZF0gPSBzZWxlY3RlZFBsYXllcjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRlZFBsYXllcnMsXG4gICAgICBudW1QbGF5ZXJzOiArK3RoaXMuc3RhdGUubnVtUGxheWVyc1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZVRhYiA9ICh0YWIpID0+IHtcbiAgICBpZiAodGFiLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KTtcbiAgfVxuXG4gIGNvbnZlcnRQbGF5ZXJzVG9BcnIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzKS5tYXAoKF9pZCA9PlxuICAgICAgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnNbX2lkXVxuICAgICkpO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwbGF5ZXJzKSA9PiB7XG4gICAgc2F2ZVNlc3Npb24oe1xuICAgICAgZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuICAgICAgbnVtT2ZQbGF5ZXJzOiB0aGlzLnN0YXRlLm51bVBsYXllcnMsXG4gICAgICBwbGF5ZXJzLFxuICAgICAgc2VsZWN0ZWRTY2hlbWEsXG4gICAgICBzY2hlbWF0YSxcbiAgICB9LCB0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgdGVtcG9yYXJpbHlTYXZlU2Vzc2lvbiA9IChtaW4sIG1heCwgc2NoZW1hdGEsIHNlbGVjdGVkU2NoZW1hLCBwZGZzKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKFwic25hY2tCYXJPcGVuXCIpO1xuICAgIHRlbXBvcmFyeVNlc3Npb24oe1xuICAgICAgLi4udGhpcy5zdGF0ZSwgbWluLCBtYXgsIHNlbGVjdGVkU2NoZW1hLCBzY2hlbWF0YSwgcGRmc1xuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGRlc3Ryb3lUZW1wU2Vzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgIFBERlN0b3JlLmNsZWFyUERGKCk7XG4gICAgZGVzdHJveVRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWxsUGxheWVycyA9IFtdO1xuICAgIGxldCBhZGRlZFBsYXllcnMgPSBbXTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNsdWIpO1xuICAgIGlmICh0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIGFsbFBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICAgIGFkZGVkUGxheWVycyA9IHRoaXMuY29udmVydFBsYXllcnNUb0FycigpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpO1xuICAgICAgLy90aGlzIG1heSBiZSB0aGUgYm90dGxlbmVjaz9cbiAgICB9XG4gICAgY29uc3QgeyBudW1QbGF5ZXJzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcGxheWVyQ29udGVudCA9ICg8ZGl2PlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH1cbiAgICAgICAgbGFiZWw9XCJOZXcgUGxheWVyXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU9wZW4oXCJ1cGxvYWREaWFsb2dPcGVuXCIpfVxuICAgICAgICBsYWJlbD1cIlVwbG9hZCBQbGF5ZXJzXCJcbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjE1MHB4XCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGUgb2YgU2Vzc2lvblwiXG4gICAgICAgICAgaGludFRleHQ9XCJEYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0pfVxuICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJ0aWNpcGFudHNcbiAgICAgICAgb2JqQWRkZWRQbGF5ZXJzPXt0aGlzLnN0YXRlLmFkZGVkUGxheWVyc31cbiAgICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICAgIGRlbGV0ZVBsYXllcj17dGhpcy5kZWxldGVQbGF5ZXJ9XG4gICAgICAgIGFsbFBsYXllcnM9e2FsbFBsYXllcnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAvPlxuICAgIDwvZGl2Pik7XG4gICAgY29uc3QgZ3JvdXBDb250ZW50ID0gKDxHcm91cGluZ1xuICAgICAgbnVtUGxheWVycz17bnVtUGxheWVyc31cbiAgICAgIGNhY2hlZD17dGhpcy5jYWNoZWR9XG4gICAgICBwZGZzPXt0aGlzLnBkZnN9XG4gICAgICBtaW49e3RoaXMubWlufVxuICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgIHNlbGVjdGVkR3JvdXA9e3RoaXMuc2VsZWN0ZWRTY2hlbWF9XG4gICAgICBzY2hlbWF0YT17dGhpcy5zY2hlbWF0YX1cbiAgICAgIGFkZGVkUGxheWVycz17YWRkZWRQbGF5ZXJzfVxuICAgICAgc2F2ZVNlc3Npb249e3RoaXMuc2F2ZVNlc3Npb259XG4gICAgICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uPXt0aGlzLnRlbXBvcmFyaWx5U2F2ZVNlc3Npb259XG4gICAgICBjbHViPXt0aGlzLnByb3BzLmNsdWJ9XG4gICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxuICAgIC8+KTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGFpbmVyXCI+XG4gICAgICA8VGFic1xuICAgICAgICB0YWJJdGVtQ29udGFpbmVyU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM2NzNBQjdcIiB9fVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNDAwcHhcIlxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRhYn1cbiAgICAgID5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlJlZ2lzdHJhdGlvblwiIHZhbHVlPXswfT5cbiAgICAgICAgICB7IHBsYXllckNvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIkdyb3VwaW5nXCIgdmFsdWU9ezF9PlxuICAgICAgICAgIHsgZ3JvdXBDb250ZW50IH1cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8U25hY2tCYXJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zbmFja0Jhck9wZW59XG4gICAgICAgIG1lc3NhZ2U9XCJTZXNzaW9uIGhhcyBiZWVuIHRlbXBvcmFyaWx5IHNhdmVkXCJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17ODAwMH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoXCJzbmFja0Jhck9wZW5cIil9XG4gICAgICAvPlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3RvcmVEaWFsb2dPcGVuICYmXG4gICAgICAgICAgPFJlc3RvcmVEaWFsb2dcbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUucmVzdG9yZURpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIHJlc3RvcmVTZXNzaW9uPXt0aGlzLnJlc3RvcmVTZXNzaW9ufVxuICAgICAgICAgICAgZGVzdHJveVRlbXBTZXNzaW9uPXt0aGlzLmRlc3Ryb3lUZW1wU2Vzc2lvbn1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW4gJiZcbiAgICAgICAgICA8VXBsb2FkRGlhbG9nXG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnVwbG9hZERpYWxvZ09wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLm5ld1BsYXllck1vZGFsICYmXG4gICAgICAgICAgPFBsYXllckZvcm1cbiAgICAgICAgICAgIG1vZGFsT3Blbj17dGhpcy5zdGF0ZS5uZXdQbGF5ZXJNb2RhbH1cbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICAhdGhpcy5wcm9wcy5jbHViICYmXG4gICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9