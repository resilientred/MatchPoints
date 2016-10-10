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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JyU2Vzc2lvbi9uZXdSUlNlc3Npb24uanM/NzMxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcUI7MkJBVW5COzt5QkFBWSxPQUFPOzJCQUFBOztpR0FDWDs7V0FnQ1IscUJBQXFCLFlBQ25CO1dBQU0sUUFBUSx5QkFFZDs7V0FBSSxPQUNGO2VBQUssU0FBUyxFQUFFLE9BQ2hCO29CQUFXLFlBQ1Q7aUJBQUssU0FBUyxFQUFFLE9BQ2pCO0FBRkQsWUFHRDtBQUxELGNBTUU7cUNBQWUsS0FDaEI7QUFDRjtBQTVDa0I7O1dBNkNuQixlQUFlLFVBQUMsS0FDZDtjQUFPLE1BQUssTUFBTSxhQUNsQjt3Q0FBYSxNQUFLLE1BQU0sS0FBSyxLQUU3Qjs7V0FBTSxVQUFVLE1BQUssTUFBTSxLQUMzQjtZQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQ2xDO2FBQUksUUFBUSxHQUFHLFFBQVEsS0FDckI7bUJBQVEsT0FBTyxHQUNoQjtBQUNGO0FBQ0Q7YUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFLLE1BQ3BDO0FBeERrQjs7V0EwRG5CLHFCQUFxQixZQUNuQjtXQUFNLFVBQVUsMkJBRWhCOztXQUFJLFNBQ0Y7ZUFBSyxVQUNMO2VBQUssV0FDTjtBQUNGO0FBakVrQjs7V0FrRW5CLGlCQUFpQixZQUNmO2FBQUssaUJBQWlCLE1BQUssUUFDM0I7YUFBSyxXQUFXLE1BQUssUUFDckI7YUFBSyxPQUFPLE1BQUssUUFDakI7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SyxXQUFVLGFBQ2IsNERBQWtCLE1BSzdCOzs7Ozs7O0FBalJrQixjQUNaOzBCQUNXO1VBQ1QsaUJBQVUsVUFBVSxDQUN2QixpQkFBVSxRQUNWLGlCQUVGO2NBQVMsaUJBQVU7QUFKbkIsSUFESTtBQUFOO21CQUZpQixhIiwiZmlsZSI6IjAuYWZlOWRmM2VhZDcxOTQxZDczZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFic1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvblwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RhdGVQaWNrZXJcIjtcbmltcG9ydCBTbmFja0JhciBmcm9tIFwibWF0ZXJpYWwtdWkvU25hY2tiYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgZGVsZXRlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IHsgc2F2ZVNlc3Npb24sIHRlbXBvcmFyeVNlc3Npb24sIGRlc3Ryb3lUZW1wU2Vzc2lvbiwgZmV0Y2hUZW1wU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgVGVtcFNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3RlbXBTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCBQREZTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3BkZlN0b3JlXCI7XG5pbXBvcnQgUGxheWVyRm9ybSBmcm9tIFwiLi9wbGF5ZXJGb3JtXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuL3BhcnRpY2lwYW50c1wiO1xuaW1wb3J0IEdyb3VwaW5nIGZyb20gXCIuL2dyb3VwaW5nXCI7XG5pbXBvcnQgUmVzdG9yZURpYWxvZyBmcm9tIFwiLi9yZXN0b3JlRGlhbG9nXCI7XG5pbXBvcnQgVXBsb2FkRGlhbG9nIGZyb20gXCIuL3VwbG9hZERpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSUlNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBfaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuU3RyaW5nXG4gICAgICBdKSxcbiAgICAgIHBsYXllcnM6IFByb3BUeXBlcy5hcnJheVxuICAgIH0pXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld1BsYXllck1vZGFsOiBmYWxzZSxcbiAgICAgIGdyb3VwVGFiRW5hYmxlZDogZmFsc2UsXG4gICAgICB0YWI6IDAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgbnVtUGxheWVyczogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc25hY2tCYXJPcGVuOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHVwbG9hZERpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgYWRkZWRQbGF5ZXJzOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5jc0xpc3RlbmVyID0gQ2x1YlN0b3JlLmFkZExpc3RlbmVyKHRoaXMuY2x1YkNoYW5nZWQpO1xuICAgIHRoaXMucnJMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMucnJSZXNwb25zZVJlY2VpdmVkKTtcbiAgICB0aGlzLnRzbGlzdGVuZXIgPSBUZW1wU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMudGVtcFNlc3Npb25GZXRjaGVkKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaFRlbXBTZXNzaW9uKHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc29sZS5sb2cobmV4dFByb3BzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5jc0xpc3RlbmVyKSB0aGlzLmNzTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgaWYgKHRoaXMucnJMaXN0ZW5lcikgdGhpcy5yckxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLnRzbGlzdGVuZXIpIHRoaXMudHNsaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIHJyUmVzcG9uc2VSZWNlaXZlZCA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IFJSU2Vzc2lvblN0b3JlLmdldEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IG51bGwgfSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9jbHViL3Nlc3Npb25zXCIpO1xuICAgIH1cbiAgfVxuICBkZWxldGVQbGF5ZXIgPSAoX2lkKSA9PiB7XG4gICAgZGVsZXRlIHRoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzW19pZF07XG4gICAgZGVsZXRlUGxheWVyKHRoaXMucHJvcHMuY2x1Yi5faWQsIF9pZCk7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGxheWVyc1tpXS5faWQgPT09IF9pZCkge1xuICAgICAgICBwbGF5ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZGVkUGxheWVyczogdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMgfSk7XG4gIH1cblxuICB0ZW1wU2Vzc2lvbkZldGNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IFRlbXBTZXNzaW9uU3RvcmUuZmluZENhY2hlZFNlc3Npb24oKTtcblxuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgdGhpcy5oYW5kbGVPcGVuKFwiZGlhbG9nT3BlblwiKTtcbiAgICB9XG4gIH1cbiAgcmVzdG9yZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZWxlY3RlZFNjaGVtYSA9IHRoaXMuc2Vzc2lvbi5zZWxlY3RlZFNjaGVtYTtcbiAgICB0aGlzLnNjaGVtYXRhID0gdGhpcy5zZXNzaW9uLnNjaGVtYXRhO1xuICAgIHRoaXMucGRmcyA9IHRoaXMuc2Vzc2lvbi5wZGZzO1xuICAgIHRoaXMubWF4ID0gdGhpcy5zZXNzaW9uLm1heDtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2Vzc2lvbi5taW47XG4gICAgdGhpcy5jYWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiOiArdGhpcy5zZXNzaW9uLnRhYixcbiAgICAgIGRhdGU6IG5ldyBEYXRlKHRoaXMuc2Vzc2lvbi5kYXRlKSxcbiAgICAgIG51bVBsYXllcnM6ICt0aGlzLnNlc3Npb24ubnVtUGxheWVycyxcbiAgICAgIGFkZGVkUGxheWVyczogdGhpcy5zZXNzaW9uLmFkZGVkUGxheWVycyA/IHRoaXMuc2Vzc2lvbi5hZGRlZFBsYXllcnMgOiB7fVxuICAgIH0pO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UoXCJkaWFsb2dPcGVuXCIpO1xuICB9XG4gIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IHRydWUgfSk7XG4gIH1cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3UGxheWVyTW9kYWw6IGZhbHNlIH0pO1xuICB9XG4gIGNsdWJDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2x1YjogQ2x1YlN0b3JlLmdldEN1cnJlbnRDbHViKCksXG4gICAgICBuZXdQbGF5ZXJNb2RhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVPcGVuID0gKGZpZWxkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHRydWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xvc2UgPSAoZmllbGQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlVG9nZ2xlID0gKF9pZCwgZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50eXBlICE9PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKSByZXR1cm47XG4gICAgY29uc3QgYWRkZWRQbGF5ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpO1xuICAgIGNvbnN0IHNlbGVjdGVkUGxheWVyID0gdGhpcy5wcm9wcy5jbHViLnBsYXllcnMuZmluZCgocGxheWVyID0+XG4gICAgICBwbGF5ZXIuX2lkID09PSBfaWRcbiAgICApKTtcblxuICAgIGlmIChhZGRlZFBsYXllcnNbX2lkXSkge1xuICAgICAgZGVsZXRlIGFkZGVkUGxheWVyc1tfaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRlZFBsYXllcnNbX2lkXSA9IHNlbGVjdGVkUGxheWVyO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkZGVkUGxheWVycyxcbiAgICAgIG51bVBsYXllcnM6ICsrdGhpcy5zdGF0ZS5udW1QbGF5ZXJzXG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlVGFiID0gKHRhYikgPT4ge1xuICAgIGlmICh0YWIudGFyZ2V0KSByZXR1cm47XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGFiIH0pO1xuICB9XG5cbiAgY29udmVydFBsYXllcnNUb0FycigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5hZGRlZFBsYXllcnMpLm1hcCgoX2lkID0+XG4gICAgICB0aGlzLnN0YXRlLmFkZGVkUGxheWVyc1tfaWRdXG4gICAgKSk7XG4gIH1cblxuICBzYXZlU2Vzc2lvbiA9IChzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBsYXllcnMpID0+IHtcbiAgICBzYXZlU2Vzc2lvbih7XG4gICAgICBkYXRlOiB0aGlzLnN0YXRlLmRhdGUsXG4gICAgICBudW1PZlBsYXllcnM6IHRoaXMuc3RhdGUubnVtUGxheWVycyxcbiAgICAgIHBsYXllcnMsXG4gICAgICBzZWxlY3RlZFNjaGVtYSxcbiAgICAgIHNjaGVtYXRhLFxuICAgIH0sIHRoaXMucHJvcHMuY2x1Yi5faWQpO1xuICAgIGRlc3Ryb3lUZW1wU2Vzc2lvbih0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgfVxuICB0ZW1wb3JhcmlseVNhdmVTZXNzaW9uID0gKG1pbiwgbWF4LCBzY2hlbWF0YSwgc2VsZWN0ZWRTY2hlbWEsIHBkZnMpID0+IHtcbiAgICB0aGlzLmhhbmRsZU9wZW4oXCJzbmFja0Jhck9wZW5cIik7XG4gICAgdGVtcG9yYXJ5U2Vzc2lvbih7XG4gICAgICAuLi50aGlzLnN0YXRlLCBtaW4sIG1heCwgc2VsZWN0ZWRTY2hlbWEsIHNjaGVtYXRhLCBwZGZzXG4gICAgfSwgdGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gIH1cbiAgZGVzdHJveVRlbXBTZXNzaW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2Vzc2lvbiA9IG51bGw7XG4gICAgUERGU3RvcmUuY2xlYXJQREYoKTtcbiAgICBkZXN0cm95VGVtcFNlc3Npb24odGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZShcImRpYWxvZ09wZW5cIik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhbGxQbGF5ZXJzID0gW107XG4gICAgbGV0IGFkZGVkUGxheWVycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIGFsbFBsYXllcnMgPSB0aGlzLnByb3BzLmNsdWIucGxheWVycztcbiAgICAgIGFkZGVkUGxheWVycyA9IHRoaXMuY29udmVydFBsYXllcnNUb0FycigpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpO1xuICAgIH1cbiAgICBjb25zdCB7IG51bVBsYXllcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBwbGF5ZXJDb250ZW50ID0gKDxkaXY+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfVxuICAgICAgICBsYWJlbD1cIk5ldyBQbGF5ZXJcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlT3BlbihcInVwbG9hZERpYWxvZ09wZW5cIil9XG4gICAgICAgIGxhYmVsPVwiVXBsb2FkIFBsYXllcnNcIlxuICAgICAgICBzZWNvbmRhcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTUwcHhcIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRGF0ZSBvZiBTZXNzaW9uXCJcbiAgICAgICAgICBoaW50VGV4dD1cIkRhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgZGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGUgfSl9XG4gICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhcnRpY2lwYW50c1xuICAgICAgICBvYmpBZGRlZFBsYXllcnM9e3RoaXMuc3RhdGUuYWRkZWRQbGF5ZXJzfVxuICAgICAgICBhZGRlZFBsYXllcnM9e2FkZGVkUGxheWVyc31cbiAgICAgICAgZGVsZXRlUGxheWVyPXt0aGlzLmRlbGV0ZVBsYXllcn1cbiAgICAgICAgYWxsUGxheWVycz17YWxsUGxheWVyc31cbiAgICAgICAgaGFuZGxlVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+KTtcbiAgICBjb25zdCBncm91cENvbnRlbnQgPSAoPEdyb3VwaW5nXG4gICAgICBudW1QbGF5ZXJzPXtudW1QbGF5ZXJzfVxuICAgICAgY2FjaGVkPXt0aGlzLmNhY2hlZH1cbiAgICAgIHBkZnM9e3RoaXMucGRmc31cbiAgICAgIG1pbj17dGhpcy5taW59XG4gICAgICBtYXg9e3RoaXMubWF4fVxuICAgICAgc2VsZWN0ZWRHcm91cD17dGhpcy5zZWxlY3RlZFNjaGVtYX1cbiAgICAgIHNjaGVtYXRhPXt0aGlzLnNjaGVtYXRhfVxuICAgICAgYWRkZWRQbGF5ZXJzPXthZGRlZFBsYXllcnN9XG4gICAgICBzYXZlU2Vzc2lvbj17dGhpcy5zYXZlU2Vzc2lvbn1cbiAgICAgIHRlbXBvcmFyaWx5U2F2ZVNlc3Npb249e3RoaXMudGVtcG9yYXJpbHlTYXZlU2Vzc2lvbn1cbiAgICAgIGNsdWI9e3RoaXMucHJvcHMuY2x1Yn1cbiAgICAgIGRhdGU9e21vbWVudCh0aGlzLnN0YXRlLmRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIil9XG4gICAgLz4pO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250YWluZXJcIj5cbiAgICAgIDxUYWJzXG4gICAgICAgIHRhYkl0ZW1Db250YWluZXJTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzY3M0FCN1wiIH19XG4gICAgICAgIGNvbnRlbnRDb250YWluZXJTdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0UwRTBFMFwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCI0MDBweFwiXG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRhYn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGFifVxuICAgICAgPlxuICAgICAgICA8VGFiIGxhYmVsPVwiUmVnaXN0cmF0aW9uXCIgdmFsdWU9ezB9PlxuICAgICAgICAgIHsgcGxheWVyQ29udGVudCB9XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGxhYmVsPVwiR3JvdXBpbmdcIiB2YWx1ZT17MX0+XG4gICAgICAgICAgeyBncm91cENvbnRlbnQgfVxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGFicz5cbiAgICAgIDxTbmFja0JhclxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnNuYWNrQmFyT3Blbn1cbiAgICAgICAgbWVzc2FnZT1cIlNlc3Npb24gaGFzIGJlZW4gdGVtcG9yYXJpbHkgc2F2ZWRcIlxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs4MDAwfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZShcInNuYWNrQmFyT3BlblwiKX1cbiAgICAgIC8+XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUucmVzdG9yZURpYWxvZ09wZW4gJiZcbiAgICAgICAgICA8UmVzdG9yZURpYWxvZ1xuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN0b3JlRGlhbG9nT3Blbn1cbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgcmVzdG9yZVNlc3Npb249e3RoaXMucmVzdG9yZVNlc3Npb259XG4gICAgICAgICAgICBkZXN0cm95VGVtcFNlc3Npb249e3RoaXMuZGVzdHJveVRlbXBTZXNzaW9ufVxuICAgICAgICAgIC8+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUudXBsb2FkRGlhbG9nT3BlbiAmJlxuICAgICAgICAgIDxVcGxvYWREaWFsb2dcbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUudXBsb2FkRGlhbG9nT3Blbn1cbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUubmV3UGxheWVyTW9kYWwgJiZcbiAgICAgICAgICA8UGxheWVyRm9ybVxuICAgICAgICAgICAgbW9kYWxPcGVuPXt0aGlzLnN0YXRlLm5ld1BsYXllck1vZGFsfVxuICAgICAgICAgICAgY2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIC8+XG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICF0aGlzLnByb3BzLmNsdWIgJiZcbiAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17Mn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcnJTZXNzaW9uL25ld1JSU2Vzc2lvbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=