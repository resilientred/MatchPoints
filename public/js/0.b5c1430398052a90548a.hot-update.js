webpackHotUpdate(0,{

/***/ 687:
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
	
	var _reactRouter = __webpack_require__(168);
	
	var _List = __webpack_require__(688);
	
	var _Avatar = __webpack_require__(690);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _Subheader = __webpack_require__(464);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Divider = __webpack_require__(652);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _edit = __webpack_require__(692);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _pageview = __webpack_require__(693);
	
	var _pageview2 = _interopRequireDefault(_pageview);
	
	var _event = __webpack_require__(694);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _warning = __webpack_require__(695);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _moment = __webpack_require__(541);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _rrSessionStore = __webpack_require__(645);
	
	var _rrSessionStore2 = _interopRequireDefault(_rrSessionStore);
	
	var _rrSessionActions = __webpack_require__(644);
	
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
	
	var RoundRobinSessions = function (_Component) {
	  _inherits(RoundRobinSessions, _Component);
	
	  function RoundRobinSessions(props) {
	    _classCallCheck(this, RoundRobinSessions);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoundRobinSessions).call(this, props));
	
	    _this.fetchedRRSessions = function () {
	      _this.setState({
	        results: _rrSessionStore2.default.all()
	      });
	    };
	
	    _this.state = {
	      results: null
	    };
	    return _this;
	  }
	
	  _createClass(RoundRobinSessions, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.rrsListener = _rrSessionStore2.default.addListener(this.fetchedRRSessions);
	      var results = _rrSessionStore2.default.all();
	      if (results) {
	        this.setState({ results: results });
	      } else {
	        (0, _rrSessionActions.fetchRRSessions)(this.props.club._id);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.rrsListener) this.rrsListener.remove();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!this.props.club) {
	        return _react2.default.createElement("div", null, "Loading....");
	      }
	      return _react2.default.createElement("div", { className: "sessions-list" }, _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, {
	        style: {
	          fontSize: "24px",
	          textAlign: "center",
	          marginBottom: "10px"
	        }
	      }, "Previous Sessions"), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_Subheader2.default, { inset: Boolean(true) }, "Pending Sessions"), !this.state.results && _react2.default.createElement(_List.ListItem, {
	        key: "noth",
	        primaryText: "There have not been any sessions...",
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_warning2.default, null) }),
	        disabled: true
	      }), this.state.results && this.state.results.filter(function (r) {
	        return !r.finalized;
	      }).map(function (result) {
	        return _react2.default.createElement(_List.ListItem, {
	          key: result.id,
	          onClick: function onClick() {
	            return _reactRouter.browserHistory.push("/club/sessions/" + result.id);
	          },
	          leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_event2.default, null) }),
	          primaryText: (0, _moment2.default)(result.date).format("MMMM DD, YYYY"),
	          rightIcon: _react2.default.createElement(_edit2.default, null)
	        });
	      })), _react2.default.createElement(_Divider2.default, { inset: Boolean(true) }), _react2.default.createElement(_List.List, null, _react2.default.createElement(_Subheader2.default, { inset: Boolean(true) }, "Saved Sessions"), !this.state.results && _react2.default.createElement(_List.ListItem, {
	        key: "noth",
	        primaryText: "There have not been any sessions...",
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_warning2.default, null) }),
	        disabled: true
	      }), this.state.results && this.state.results.filter(function (r) {
	        return r.finalized;
	      }).map(function (result) {
	        return _react2.default.createElement(_List.ListItem, {
	          key: result.id,
	          onClick: function onClick() {
	            return _reactRouter.browserHistory.push("/club/sessions/" + result.id);
	          },
	          leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_event2.default, null) }),
	          primaryText: (0, _moment2.default)(result.date).format("MMMM DD, YYYY"),
	          rightIcon: _react2.default.createElement(_pageview2.default, null)
	        });
	      })));
	    }
	  }]);
	
	  return RoundRobinSessions;
	}(_react.Component);
	
	RoundRobinSessions.propTypes = {
	  club: _react.PropTypes.object
	};
	exports.default = RoundRobinSessions;

/***/ },

/***/ 696:
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
	
	var _reactRouter = __webpack_require__(168);
	
	var _moment = __webpack_require__(541);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _AppBar = __webpack_require__(697);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _moreVert = __webpack_require__(678);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _close = __webpack_require__(700);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _IconButton = __webpack_require__(455);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(676);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Dialog = __webpack_require__(534);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _CircularProgress = __webpack_require__(507);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _rrSessionStore = __webpack_require__(645);
	
	var _rrSessionStore2 = _interopRequireDefault(_rrSessionStore);
	
	var _clubStore = __webpack_require__(477);
	
	var _clubStore2 = _interopRequireDefault(_clubStore);
	
	var _rrSessionActions = __webpack_require__(644);
	
	var _recordTable = __webpack_require__(701);
	
	var _recordTable2 = _interopRequireDefault(_recordTable);
	
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
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	var setUpChangeArray = function setUpChangeArray(selectedSchema) {
	  return [].concat(_toConsumableArray(Array(selectedSchema.length)));
	};
	
	var RoundRobinSession = function (_Component) {
	  _inherits(RoundRobinSession, _Component);
	
	  function RoundRobinSession(props) {
	    _classCallCheck(this, RoundRobinSession);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoundRobinSession).call(this, props));
	
	    _this.setRRSession = function () {
	      var newObj = {};
	      var session = _this.state.session || _rrSessionStore2.default.find(_this.props.params.id);
	      newObj.session = session;
	      if (session) {
	        var err = _rrSessionStore2.default.getError();
	        if (_this.state.updating && !err) {
	          _reactRouter.browserHistory.push("/club/sessions");
	        } else if (err) {
	          _this.setState({ updating: false, loading: false });
	        } else {
	          var scoreChange = session.results && session.results.length ? session.results : setUpChangeArray(session.selectedSchema);
	          newObj.scoreChange = scoreChange;
	          _this.setState(newObj);
	        }
	      } else {
	        (0, _rrSessionActions.fetchRRSessions)(_this.props.club._id);
	      }
	    };
	
	    _this.setTab = function (currentTab) {
	      _this.setState({ currentTab: currentTab });
	    };
	
	    _this.updateScore = function (scoreChangeInGroup, i) {
	      var scoreChange = _this.state.scoreChange;
	      var scoreUpdate = Object.assign({}, _this.state.scoreUpdate);
	      var scoreUpdateInGroup = scoreChangeInGroup[1];
	      scoreChange[i] = scoreChangeInGroup[0];
	
	      Object.keys(scoreUpdateInGroup).forEach(function (playerId) {
	        scoreUpdate[playerId] = scoreUpdateInGroup[playerId];
	      });
	      _this.setState({ scoreChange: scoreChange, scoreUpdate: scoreUpdate });
	    };
	
	    _this.saveSession = function () {
	      var session = _this.state.session;
	      if (!session) {
	        _reactRouter.browserHistory.push("/");
	        return;
	      }
	      if (!session.finalized) {
	        (0, _rrSessionActions.postResult)(_this.props.club._id, _this.state.scoreChange, _this.state.scoreUpdate, session._id, session.date);
	        _this.setState({ updating: true, loading: true });
	      }
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ open: false });
	    };
	
	    _this.handleDelete = function () {
	      _this.props.deleteSession(_this.props.params.id);
	    };
	
	    _this.handleBack = function () {
	      history.back();
	    };
	
	    _this.displayName = "RoundRobinSession";
	    _this.state = {
	      session: null,
	      scoreChange: [],
	      scoreUpdate: {},
	      currentTab: 0,
	      open: false,
	      saved: false,
	      updating: false,
	      loading: false
	    };
	    return _this;
	  }
	
	  _createClass(RoundRobinSession, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.rrsListener = _rrSessionStore2.default.addListener(this.setRRSession);
	
	      if (this.props.club) {
	        this.setRRSession();
	      } else {
	        this.csListener = _clubStore2.default.addListener(this.setRRSession);
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      _rrSessionStore2.default.fetchSsession(nextProps.params.id);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.rrsListener) this.rrsListener.remove();
	      if (this.csListener) this.csListener.remove();
	    }
	  }, {
	    key: "iconMenu",
	    value: function iconMenu() {
	      var _this2 = this;
	
	      return _react2.default.createElement(_IconMenu2.default, {
	        iconButtonElement: _react2.default.createElement(_IconButton2.default, null, _react2.default.createElement(_moreVert2.default, null))
	      }, _react2.default.createElement(_MenuItem2.default, { primaryText: "Save", onClick: this.saveSession }), _react2.default.createElement(_MenuItem2.default, { primaryText: "Delete", onClick: function onClick() {
	          return _this2.setState({ open: true });
	        } }));
	    }
	  }, {
	    key: "loading",
	    value: function loading() {
	      if (this.state.loading || !this.state.session) {
	        return _react2.default.createElement("div", { className: "overlay" }, _react2.default.createElement("div", { className: "loading" }, _react2.default.createElement(_CircularProgress2.default, { size: 2 })));
	      }
	      return "";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: "Cancel",
	        primary: Boolean(true),
	        onTouchTap: this.handleClose
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: "Delete",
	        primary: Boolean(true),
	        keyboardFocused: Boolean(true),
	        onTouchTap: this.handleDelete
	      })];
	      var _state = this.state;
	      var session = _state.session;
	      var scoreChange = _state.scoreChange;
	
	      if (!session) return this.loading();
	      var selectedSchema = session.selectedSchema;
	      var players = session.players;
	      var finalized = session.finalized;
	
	      var countedPlayers = 0;
	      return _react2.default.createElement("div", { className: "session-container" }, _react2.default.createElement(_AppBar2.default, {
	        title: "Date: " + (0, _moment2.default)(session.date).format("MMMM DD, YYYY"),
	        iconElementLeft: _react2.default.createElement(_IconButton2.default, { onClick: this.handleBack }, _react2.default.createElement(_close2.default, null)),
	        iconElementRight: this.iconMenu()
	      }), _react2.default.createElement("div", { className: "session-container-body" }, selectedSchema.map(function (sizeOfGroup, i) {
	        countedPlayers += +sizeOfGroup;
	        return _react2.default.createElement(_recordTable2.default, {
	          key: i,
	          groupNum: i + 1,
	          start: countedPlayers - sizeOfGroup,
	          finalized: finalized,
	          joinedPlayers: players,
	          sizeOfGroup: +sizeOfGroup,
	          updateScore: _this3.updateScore,
	          scoreChange: scoreChange.length ? scoreChange[i] : []
	        });
	      })), _react2.default.createElement(_Dialog2.default, {
	        title: "Delete Session",
	        actions: actions,
	        modal: false,
	        open: this.state.open,
	        onRequestClose: this.handleClose
	      }, "Are you sure you want to delete the session?"), this.loading());
	    }
	  }]);
	
	  return RoundRobinSession;
	}(_react.Component);
	
	RoundRobinSession.propTypes = {
	  club: _react.PropTypes.object,
	  params: _react.PropTypes.object,
	  deleteSession: _react.PropTypes.func
	};
	exports.default = RoundRobinSession;

/***/ },

/***/ 701:
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
	
	var _Tabs = __webpack_require__(510);
	
	var _FlatButton = __webpack_require__(515);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _recordTableEnter = __webpack_require__(702);
	
	var _recordTableEnter2 = _interopRequireDefault(_recordTableEnter);
	
	var _recordTableView = __webpack_require__(703);
	
	var _recordTableView2 = _interopRequireDefault(_recordTableView);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
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
	
	var RecordTable = function (_Component) {
	  _inherits(RecordTable, _Component);
	
	  function RecordTable(props) {
	    _classCallCheck(this, RecordTable);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordTable).call(this, props));
	
	    _this.handleCalculate = function () {
	      _this.props.updateScore(_this.calculateScore(), _this.props.groupNum - 1);
	    };
	
	    _this.changeTab = function (tab) {
	      _this.setState({ tab: tab });
	    };
	
	    _this.updateResult = function (i, j, k, e, idx, val) {
	      _this.state.result[i][j][k] = val;
	      _this.setState({
	        result: _this.state.result
	      });
	    };
	
	    _this.state = {
	      result: [].concat(_toConsumableArray(Array(_this.props.sizeOfGroup))).map(function () {
	        return [].concat(_toConsumableArray(Array(_this.props.sizeOfGroup))).map(function () {
	          return [0, 0];
	        });
	      }),
	      tab: 0
	    };
	    return _this;
	  }
	
	  _createClass(RecordTable, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate() {
	      if (this.props.groupNum && this.props.state && this.props.sizeOfGroup) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: "calculateScore",
	    value: function calculateScore() {
	      var joinedPlayers = this.props.joinedPlayers;
	      var playerIds = Object.keys(joinedPlayers);
	      var startIdx = this.props.start;
	      var calculatedScore = [];
	      var rc = {};
	
	      this.state.result.forEach(function (indRecord, i) {
	        var currentRecord = indRecord.map(function (record, j) {
	          if (j < i) return -calculatedScore[j][i];
	          if (i === j) return 0;
	
	          var sign = -1;
	          if (record[0] - record[1] === 0) {
	            sign = 0;
	          } else if (record[0] - record[1] > 0) {
	            sign = 1;
	          }
	
	          if (sign === 0) return 0;
	          var player1Id = playerIds[startIdx + i];
	          var player2Id = playerIds[startIdx + j];
	          var modifier = sign === 1 ? -record[1] * 2 : record[0] * 2;
	
	          var scoreAdjust = parseInt(16 * sign - (joinedPlayers[player1Id].rating - joinedPlayers[player2Id].rating) * sign * 0.04 + modifier, 10);
	
	          rc[player1Id] = {
	            change: rc[player1Id] ? rc[player1Id].change : 0 + scoreAdjust,
	            ratingBefore: +joinedPlayers[player1Id].rating
	          };
	          rc[player2Id] = {
	            change: rc[player2Id] ? rc[player2Id].change : 0 - scoreAdjust,
	            ratingBefore: +joinedPlayers[player2Id].rating
	          };
	          return scoreAdjust;
	        });
	        calculatedScore.push(currentRecord);
	      });
	      return [calculatedScore, rc];
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var finalized = _props.finalized;
	
	      var propsToPass = _objectWithoutProperties(_props, ["finalized"]);
	
	      if (finalized) {
	        return _react2.default.createElement("div", { style: { overflow: "scroll" } }, _react2.default.createElement(_recordTableView2.default, _extends({}, propsToPass, {
	          result: this.state.result
	        })));
	      }
	
	      return _react2.default.createElement("div", null, _react2.default.createElement(_FlatButton2.default, {
	        secondary: Boolean(true),
	        label: "Update",
	        onTouchTap: this.handleCalculate
	      }), _react2.default.createElement(_Tabs.Tabs, {
	        value: this.state.tab,
	        onChange: this.changeTab,
	        contentContainerStyle: {
	          padding: "20px",
	          border: "1px solid #E0E0E0",
	          overflow: "scroll"
	        }
	      }, _react2.default.createElement(_Tabs.Tab, { label: "Enter Result", value: 0 }, _react2.default.createElement(_recordTableEnter2.default, _extends({}, propsToPass, {
	        result: this.state.result,
	        updateResult: this.updateResult
	      }))), _react2.default.createElement(_Tabs.Tab, { label: "View Result", value: 1 }, _react2.default.createElement(_recordTableView2.default, _extends({}, propsToPass, { result: this.state.result })))));
	    }
	  }]);
	
	  return RecordTable;
	}(_react.Component);
	
	RecordTable.propTypes = {
	  updateScore: _react.PropTypes.func,
	  finalized: _react.PropTypes.bool,
	  sizeOfGroup: _react.PropTypes.number,
	  groupNum: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  state: _react.PropTypes.String,
	  joinedPlayers: _react.PropTypes.object
	};
	exports.default = RecordTable;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yb3VuZHJvYmluU2Vzc2lvbnMuanM/ODM5YSIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yb3VuZHJvYmluU2Vzc2lvbi5qcz81N2QyIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVjb3JkL3JlY29yZFRhYmxlLmpzPzljNWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTtpQ0FLSjs7K0JBQVksT0FBTzsyQkFBQTs7dUdBQ1g7O1dBbUJSLG9CQUFvQixZQUNsQjthQUFLO2tCQUNNLHlCQUVaO0FBRkc7QUFwQkY7O1dBQUs7Z0JBQ007QUFBVDtZQUVIOzs7OzswQ0FFQztZQUFLLGNBQWMseUJBQWUsWUFBWSxLQUM5QztXQUFNLFVBQVUseUJBQ2hCO1dBQUksU0FDRjtjQUFLLFNBQVMsRUFBRSxTQUNqQjtBQUZELGNBR0U7Z0RBQWdCLEtBQUssTUFBTSxLQUM1QjtBQUNGOzs7OzRDQUdDO1dBQUksS0FBSyxhQUFhLEtBQUssWUFDNUI7Ozs7OEJBUUM7V0FBSSxDQUFDLEtBQUssTUFBTSxNQUNkO2dCQUFPLDJDQUNSO0FBQ0Q7OEJBQVEsdUJBQUssV0FBVSxtQ0FDckIsZ0RBQ0U7O3FCQUdJO3NCQUNBO3lCQUFjO0FBRmQ7QUFERixRQURGLHdCQU9BLGlEQVJGLE9BU0UscURBQVcsT0FBTyxRQUFRLFNBQTFCLHFCQUVFLENBQUMsS0FBSyxNQUFNO2NBR1I7c0JBQ0E7cUJBQVksa0RBQVEsTUFBTSxpREFDMUI7bUJBSkY7QUFDRSxRQURGLENBWk4sRUFvQkksS0FBSyxNQUFN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QUssT0FBTSxnQkFBZSxPQUFPLDRFQUV6QjtpQkFDSSxLQUFLLE1BQ2I7dUJBQWMsS0FBSztBQURuQixTQUZGLElBTUYsMkNBQUssT0FBTSxlQUFjLE9BQU8sS0FDOUIsc0VBQXFCLGVBQWEsUUFBUSxLQUFLLE1BSXREOzs7Ozs7O0FBdkhHLGFBQ0c7Z0JBQ1EsaUJBQ2I7Y0FBVyxpQkFDWDtnQkFBYSxpQkFDYjthQUFVLGlCQUNWO1VBQU8saUJBQ1A7VUFBTyxpQkFDUDtrQkFBZSxpQkFBVTtBQU56QjttQkF3SFcsWSIsImZpbGUiOiIwLmI1YzE0MzAzOTgwNTJhOTA1NDhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwibWF0ZXJpYWwtdWkvQXZhdGFyXCI7XG5pbXBvcnQgU3ViaGVhZGVyIGZyb20gXCJtYXRlcmlhbC11aS9TdWJoZWFkZXJcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgRWRpdCBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2VkaXRcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvcGFnZXZpZXdcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL2V2ZW50XCI7XG5pbXBvcnQgV2FybmluZyBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL3dhcm5pbmdcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFJSU2Vzc2lvblN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvcnJTZXNzaW9uU3RvcmVcIjtcbmltcG9ydCB7IGZldGNoUlJTZXNzaW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JyU2Vzc2lvbkFjdGlvbnNcIjtcblxuY2xhc3MgUm91bmRSb2JpblNlc3Npb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbHViOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVzdWx0czogbnVsbFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucnJzTGlzdGVuZXIgPSBSUlNlc3Npb25TdG9yZS5hZGRMaXN0ZW5lcih0aGlzLmZldGNoZWRSUlNlc3Npb25zKTtcbiAgICBjb25zdCByZXN1bHRzID0gUlJTZXNzaW9uU3RvcmUuYWxsKCk7XG4gICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFJSU2Vzc2lvbnModGhpcy5wcm9wcy5jbHViLl9pZCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucnJzTGlzdGVuZXIpIHRoaXMucnJzTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBmZXRjaGVkUlJTZXNzaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc3VsdHM6IFJSU2Vzc2lvblN0b3JlLmFsbCgpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jbHViKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25zLWxpc3RcIj5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8U3ViaGVhZGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+UHJldmlvdXMgU2Vzc2lvbnM8L1N1YmhlYWRlcj5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFN1YmhlYWRlciBpbnNldD17Qm9vbGVhbih0cnVlKX0+UGVuZGluZyBTZXNzaW9uczwvU3ViaGVhZGVyPlxuICAgICAgICB7XG4gICAgICAgICAgIXRoaXMuc3RhdGUucmVzdWx0cyAmJlxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17XCJub3RoXCJ9XG4gICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiVGhlcmUgaGF2ZSBub3QgYmVlbiBhbnkgc2Vzc2lvbnMuLi5cIlxuICAgICAgICAgICAgICBsZWZ0QXZhdGFyPXs8QXZhdGFyIGljb249ezxXYXJuaW5nIC8+fSAvPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUucmVzdWx0cyAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHRzLmZpbHRlcihyID0+ICFyLmZpbmFsaXplZCkubWFwKHJlc3VsdCA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGtleT17cmVzdWx0LmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJyb3dzZXJIaXN0b3J5LnB1c2goYC9jbHViL3Nlc3Npb25zLyR7cmVzdWx0LmlkfWApfVxuICAgICAgICAgICAgICAgIGxlZnRBdmF0YXI9ezxBdmF0YXIgaWNvbj17PEV2ZW50IC8+fSAvPn1cbiAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dD17bW9tZW50KHJlc3VsdC5kYXRlKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbj17PEVkaXQgLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0xpc3Q+XG4gICAgICA8RGl2aWRlciBpbnNldD17Qm9vbGVhbih0cnVlKX0gLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8U3ViaGVhZGVyIGluc2V0PXtCb29sZWFuKHRydWUpfT5TYXZlZCBTZXNzaW9uczwvU3ViaGVhZGVyPlxuICAgICAgICB7XG4gICAgICAgICAgIXRoaXMuc3RhdGUucmVzdWx0cyAmJlxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17XCJub3RoXCJ9XG4gICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiVGhlcmUgaGF2ZSBub3QgYmVlbiBhbnkgc2Vzc2lvbnMuLi5cIlxuICAgICAgICAgICAgICBsZWZ0QXZhdGFyPXs8QXZhdGFyIGljb249ezxXYXJuaW5nIC8+fSAvPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUucmVzdWx0cyAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHRzLmZpbHRlcihyID0+IHIuZmluYWxpemVkKS5tYXAocmVzdWx0ID0+IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYnJvd3Nlckhpc3RvcnkucHVzaChgL2NsdWIvc2Vzc2lvbnMvJHtyZXN1bHQuaWR9YCl9XG4gICAgICAgICAgICAgICAgbGVmdEF2YXRhcj17PEF2YXRhciBpY29uPXs8RXZlbnQgLz59IC8+fVxuICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXttb21lbnQocmVzdWx0LmRhdGUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgcmlnaHRJY29uPXs8VmlldyAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdW5kUm9iaW5TZXNzaW9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yZWNvcmQvcm91bmRyb2JpblNlc3Npb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwibWF0ZXJpYWwtdWkvQXBwQmFyXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnRcIjtcbmltcG9ydCBOYXZpZ2F0aW9uQ2xvc2UgZnJvbSBcIm1hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEljb25NZW51IGZyb20gXCJtYXRlcmlhbC11aS9JY29uTWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJtYXRlcmlhbC11aS9NZW51SXRlbVwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwibWF0ZXJpYWwtdWkvRGlhbG9nXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIm1hdGVyaWFsLXVpL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSUlNlc3Npb25TdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL3JyU2Vzc2lvblN0b3JlXCI7XG5pbXBvcnQgQ2x1YlN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlN0b3JlXCI7XG5pbXBvcnQgeyBmZXRjaFJSU2Vzc2lvbnMsIHBvc3RSZXN1bHQgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yclNlc3Npb25BY3Rpb25zXCI7XG5pbXBvcnQgUmVjb3JkVGFibGUgZnJvbSBcIi4vcmVjb3JkVGFibGVcIjtcblxuY29uc3Qgc2V0VXBDaGFuZ2VBcnJheSA9IHNlbGVjdGVkU2NoZW1hID0+IFsuLi5BcnJheShzZWxlY3RlZFNjaGVtYS5sZW5ndGgpXTtcblxuY2xhc3MgUm91bmRSb2JpblNlc3Npb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsdWI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlbGV0ZVNlc3Npb246IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IFwiUm91bmRSb2JpblNlc3Npb25cIjtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Vzc2lvbjogbnVsbCxcbiAgICAgIHNjb3JlQ2hhbmdlOiBbXSxcbiAgICAgIHNjb3JlVXBkYXRlOiB7fSxcbiAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHNhdmVkOiBmYWxzZSxcbiAgICAgIHVwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5ycnNMaXN0ZW5lciA9IFJSU2Vzc2lvblN0b3JlLmFkZExpc3RlbmVyKHRoaXMuc2V0UlJTZXNzaW9uKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNsdWIpIHtcbiAgICAgIHRoaXMuc2V0UlJTZXNzaW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3NMaXN0ZW5lciA9IENsdWJTdG9yZS5hZGRMaXN0ZW5lcih0aGlzLnNldFJSU2Vzc2lvbik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBSUlNlc3Npb25TdG9yZS5mZXRjaFNzZXNzaW9uKG5leHRQcm9wcy5wYXJhbXMuaWQpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJyc0xpc3RlbmVyKSB0aGlzLnJyc0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIGlmICh0aGlzLmNzTGlzdGVuZXIpIHRoaXMuY3NMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuICBzZXRSUlNlc3Npb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3T2JqID0ge307XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuc3RhdGUuc2Vzc2lvbiB8fCBSUlNlc3Npb25TdG9yZS5maW5kKHRoaXMucHJvcHMucGFyYW1zLmlkKTtcbiAgICBuZXdPYmouc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIGNvbnN0IGVyciA9IFJSU2Vzc2lvblN0b3JlLmdldEVycm9yKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS51cGRhdGluZyAmJiAhZXJyKSB7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvY2x1Yi9zZXNzaW9uc1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGluZzogZmFsc2UsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NvcmVDaGFuZ2UgPSBzZXNzaW9uLnJlc3VsdHMgJiZcbiAgICAgICAgICBzZXNzaW9uLnJlc3VsdHMubGVuZ3RoID9cbiAgICAgICAgICAgIHNlc3Npb24ucmVzdWx0cyA6XG4gICAgICAgICAgICAgIHNldFVwQ2hhbmdlQXJyYXkoc2Vzc2lvbi5zZWxlY3RlZFNjaGVtYSk7XG4gICAgICAgIG5ld09iai5zY29yZUNoYW5nZSA9IHNjb3JlQ2hhbmdlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld09iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoUlJTZXNzaW9ucyh0aGlzLnByb3BzLmNsdWIuX2lkKTtcbiAgICB9XG4gIH1cblxuICBzZXRUYWIgPSAoY3VycmVudFRhYikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiIH0pO1xuICB9XG5cbiAgdXBkYXRlU2NvcmUgPSAoc2NvcmVDaGFuZ2VJbkdyb3VwLCBpKSA9PiB7XG4gICAgY29uc3Qgc2NvcmVDaGFuZ2UgPSB0aGlzLnN0YXRlLnNjb3JlQ2hhbmdlO1xuICAgIGNvbnN0IHNjb3JlVXBkYXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zY29yZVVwZGF0ZSk7XG4gICAgY29uc3Qgc2NvcmVVcGRhdGVJbkdyb3VwID0gc2NvcmVDaGFuZ2VJbkdyb3VwWzFdO1xuICAgIHNjb3JlQ2hhbmdlW2ldID0gc2NvcmVDaGFuZ2VJbkdyb3VwWzBdO1xuXG4gICAgT2JqZWN0LmtleXMoc2NvcmVVcGRhdGVJbkdyb3VwKS5mb3JFYWNoKChwbGF5ZXJJZCkgPT4ge1xuICAgICAgc2NvcmVVcGRhdGVbcGxheWVySWRdID0gc2NvcmVVcGRhdGVJbkdyb3VwW3BsYXllcklkXTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2NvcmVDaGFuZ2UsIHNjb3JlVXBkYXRlIH0pO1xuICB9XG5cbiAgc2F2ZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuc3RhdGUuc2Vzc2lvbjtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXNlc3Npb24uZmluYWxpemVkKSB7XG4gICAgICBwb3N0UmVzdWx0KFxuICAgICAgICB0aGlzLnByb3BzLmNsdWIuX2lkLCB0aGlzLnN0YXRlLnNjb3JlQ2hhbmdlLFxuICAgICAgICB0aGlzLnN0YXRlLnNjb3JlVXBkYXRlLCBzZXNzaW9uLl9pZCwgc2Vzc2lvbi5kYXRlXG4gICAgICApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0aW5nOiB0cnVlLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH1cbiAgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlU2Vzc2lvbih0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gIH1cbiAgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuICBpY29uTWVudSgpIHtcbiAgICByZXR1cm4gKDxJY29uTWVudVxuICAgICAgaWNvbkJ1dHRvbkVsZW1lbnQ9ezxJY29uQnV0dG9uPjxNb3JlVmVydEljb24gLz48L0ljb25CdXR0b24+fVxuICAgID5cbiAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNhdmVcIiBvbkNsaWNrPXt0aGlzLnNhdmVTZXNzaW9ufSAvPlxuICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiRGVsZXRlXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSl9IC8+XG4gICAgPC9JY29uTWVudT4pO1xuICB9XG4gIGxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5zZXNzaW9uKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJDYW5jZWxcIlxuICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgLz4sXG4gICAgICA8RmxhdEJ1dHRvblxuICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXG4gICAgICAgIHByaW1hcnk9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgIGtleWJvYXJkRm9jdXNlZD17Qm9vbGVhbih0cnVlKX1cbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVEZWxldGV9XG4gICAgICAvPixcbiAgICBdO1xuICAgIGNvbnN0IHsgc2Vzc2lvbiwgc2NvcmVDaGFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFzZXNzaW9uKSByZXR1cm4gdGhpcy5sb2FkaW5nKCk7XG4gICAgY29uc3QgeyBzZWxlY3RlZFNjaGVtYSwgcGxheWVycywgZmluYWxpemVkIH0gPSBzZXNzaW9uO1xuXG4gICAgbGV0IGNvdW50ZWRQbGF5ZXJzID0gMDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1jb250YWluZXJcIj5cbiAgICAgIDxBcHBCYXJcbiAgICAgICAgdGl0bGU9e2BEYXRlOiAke21vbWVudChzZXNzaW9uLmRhdGUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVlcIil9YH1cbiAgICAgICAgaWNvbkVsZW1lbnRMZWZ0PXs8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9PjxOYXZpZ2F0aW9uQ2xvc2UgLz48L0ljb25CdXR0b24+fVxuICAgICAgICBpY29uRWxlbWVudFJpZ2h0PXt0aGlzLmljb25NZW51KCl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLWNvbnRhaW5lci1ib2R5XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZFNjaGVtYS5tYXAoKHNpemVPZkdyb3VwLCBpKSA9PiB7XG4gICAgICAgICAgICBjb3VudGVkUGxheWVycyArPSArc2l6ZU9mR3JvdXA7XG4gICAgICAgICAgICByZXR1cm4gKDxSZWNvcmRUYWJsZVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGdyb3VwTnVtPXtpICsgMX1cbiAgICAgICAgICAgICAgc3RhcnQ9e2NvdW50ZWRQbGF5ZXJzIC0gc2l6ZU9mR3JvdXB9XG4gICAgICAgICAgICAgIGZpbmFsaXplZD17ZmluYWxpemVkfVxuICAgICAgICAgICAgICBqb2luZWRQbGF5ZXJzPXtwbGF5ZXJzfVxuICAgICAgICAgICAgICBzaXplT2ZHcm91cD17K3NpemVPZkdyb3VwfVxuICAgICAgICAgICAgICB1cGRhdGVTY29yZT17dGhpcy51cGRhdGVTY29yZX1cbiAgICAgICAgICAgICAgc2NvcmVDaGFuZ2U9e3Njb3JlQ2hhbmdlLmxlbmd0aCA/IHNjb3JlQ2hhbmdlW2ldIDogW119XG4gICAgICAgICAgICAvPik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPVwiRGVsZXRlIFNlc3Npb25cIlxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBtb2RhbD17ZmFsc2V9XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHNlc3Npb24/XG4gICAgICA8L0RpYWxvZz5cbiAgICAgIHt0aGlzLmxvYWRpbmcoKX1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSb3VuZFJvYmluU2Vzc2lvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZnJvbnRlbmQvY29tcG9uZW50cy9yZWNvcmQvcm91bmRyb2JpblNlc3Npb24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYnMsIFRhYiB9IGZyb20gXCJtYXRlcmlhbC11aS9UYWJzXCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvRmxhdEJ1dHRvblwiO1xuaW1wb3J0IFJlY29yZFRhYmxlRW50ZXIgZnJvbSBcIi4vcmVjb3JkVGFibGVFbnRlclwiO1xuaW1wb3J0IFJlY29yZFRhYmxlVmlldyBmcm9tIFwiLi9yZWNvcmRUYWJsZVZpZXdcIjtcblxuY2xhc3MgUmVjb3JkVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHVwZGF0ZVNjb3JlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaW5hbGl6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemVPZkdyb3VwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGdyb3VwTnVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0YXRlOiBQcm9wVHlwZXMuU3RyaW5nLFxuICAgIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVzdWx0OiBbLi4uQXJyYXkodGhpcy5wcm9wcy5zaXplT2ZHcm91cCldLm1hcCgoKSA9PlxuICAgICAgICBbLi4uQXJyYXkodGhpcy5wcm9wcy5zaXplT2ZHcm91cCldLm1hcCgoKSA9PiBbMCwgMF0pKSxcbiAgICAgIHRhYjogMFxuICAgIH07XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ3JvdXBOdW0gJiYgdGhpcy5wcm9wcy5zdGF0ZSAmJiB0aGlzLnByb3BzLnNpemVPZkdyb3VwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGhhbmRsZUNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNjb3JlKHRoaXMuY2FsY3VsYXRlU2NvcmUoKSwgdGhpcy5wcm9wcy5ncm91cE51bSAtIDEpO1xuICB9XG4gIGNoYW5nZVRhYiA9ICh0YWIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFiIH0pO1xuICB9XG4gIGNhbGN1bGF0ZVNjb3JlKCkge1xuICAgIGNvbnN0IGpvaW5lZFBsYXllcnMgPSB0aGlzLnByb3BzLmpvaW5lZFBsYXllcnM7XG4gICAgY29uc3QgcGxheWVySWRzID0gT2JqZWN0LmtleXMoam9pbmVkUGxheWVycyk7XG4gICAgY29uc3Qgc3RhcnRJZHggPSB0aGlzLnByb3BzLnN0YXJ0O1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRTY29yZSA9IFtdO1xuICAgIGNvbnN0IHJjID0ge307XG5cbiAgICB0aGlzLnN0YXRlLnJlc3VsdC5mb3JFYWNoKChpbmRSZWNvcmQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSZWNvcmQgPSBpbmRSZWNvcmQubWFwKChyZWNvcmQsIGopID0+IHtcbiAgICAgICAgaWYgKGogPCBpKSByZXR1cm4gLWNhbGN1bGF0ZWRTY29yZVtqXVtpXTtcbiAgICAgICAgaWYgKGkgPT09IGopIHJldHVybiAwO1xuXG4gICAgICAgIGxldCBzaWduID0gLTE7XG4gICAgICAgIGlmIChyZWNvcmRbMF0gLSByZWNvcmRbMV0gPT09IDApIHtcbiAgICAgICAgICBzaWduID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmRbMF0gLSByZWNvcmRbMV0gPiAwKSB7XG4gICAgICAgICAgc2lnbiA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lnbiA9PT0gMCkgcmV0dXJuIDA7XG4gICAgICAgIGNvbnN0IHBsYXllcjFJZCA9IHBsYXllcklkc1tzdGFydElkeCArIGldO1xuICAgICAgICBjb25zdCBwbGF5ZXIySWQgPSBwbGF5ZXJJZHNbc3RhcnRJZHggKyBqXTtcbiAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBzaWduID09PSAxID8gLXJlY29yZFsxXSAqIDIgOiByZWNvcmRbMF0gKiAyO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlQWRqdXN0ID0gcGFyc2VJbnQoKCgxNiAqIHNpZ24pIC1cbiAgICAgICAgICAoKGpvaW5lZFBsYXllcnNbcGxheWVyMUlkXS5yYXRpbmcgLSBqb2luZWRQbGF5ZXJzW3BsYXllcjJJZF0ucmF0aW5nKSAqXG4gICAgICAgICAgICBzaWduICogMC4wNCkpICsgbW9kaWZpZXIsIDEwKTtcblxuICAgICAgICByY1twbGF5ZXIxSWRdID0ge1xuICAgICAgICAgIGNoYW5nZTogcmNbcGxheWVyMUlkXSA/IHJjW3BsYXllcjFJZF0uY2hhbmdlIDogMCArIHNjb3JlQWRqdXN0LFxuICAgICAgICAgIHJhdGluZ0JlZm9yZTogK2pvaW5lZFBsYXllcnNbcGxheWVyMUlkXS5yYXRpbmdcbiAgICAgICAgfTtcbiAgICAgICAgcmNbcGxheWVyMklkXSA9IHtcbiAgICAgICAgICBjaGFuZ2U6IHJjW3BsYXllcjJJZF0gPyByY1twbGF5ZXIySWRdLmNoYW5nZSA6IDAgLSBzY29yZUFkanVzdCxcbiAgICAgICAgICByYXRpbmdCZWZvcmU6ICtqb2luZWRQbGF5ZXJzW3BsYXllcjJJZF0ucmF0aW5nXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzY29yZUFkanVzdDtcbiAgICAgIH0pO1xuICAgICAgY2FsY3VsYXRlZFNjb3JlLnB1c2goY3VycmVudFJlY29yZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjYWxjdWxhdGVkU2NvcmUsIHJjXTtcbiAgfVxuICB1cGRhdGVSZXN1bHQgPSAoaSwgaiwgaywgZSwgaWR4LCB2YWwpID0+IHtcbiAgICB0aGlzLnN0YXRlLnJlc3VsdFtpXVtqXVtrXSA9IHZhbDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc3VsdDogdGhpcy5zdGF0ZS5yZXN1bHRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpbmFsaXplZCwgLi4ucHJvcHNUb1Bhc3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZmluYWxpemVkKSB7XG4gICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX0+XG4gICAgICAgIDxSZWNvcmRUYWJsZVZpZXdcbiAgICAgICAgICB7Li4ucHJvcHNUb1Bhc3N9XG4gICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnJlc3VsdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgc2Vjb25kYXJ5PXtCb29sZWFuKHRydWUpfVxuICAgICAgICBsYWJlbD1cIlVwZGF0ZVwiXG4gICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlQ2FsY3VsYXRlfVxuICAgICAgLz5cbiAgICAgIDxUYWJzXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRhYn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlVGFifVxuICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFMEUwRTBcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGFiIGxhYmVsPVwiRW50ZXIgUmVzdWx0XCIgdmFsdWU9ezB9PlxuICAgICAgICAgIDxSZWNvcmRUYWJsZUVudGVyXG4gICAgICAgICAgICB7Li4ucHJvcHNUb1Bhc3N9XG4gICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUucmVzdWx0fVxuICAgICAgICAgICAgdXBkYXRlUmVzdWx0PXt0aGlzLnVwZGF0ZVJlc3VsdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBsYWJlbD1cIlZpZXcgUmVzdWx0XCIgdmFsdWU9ezF9PlxuICAgICAgICAgIDxSZWNvcmRUYWJsZVZpZXcgey4uLnByb3BzVG9QYXNzfSByZXN1bHQ9e3RoaXMuc3RhdGUucmVzdWx0fSAvPlxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGFicz5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=