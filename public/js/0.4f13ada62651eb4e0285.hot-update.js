webpackHotUpdate(0,{

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	var _SelectField = __webpack_require__(669);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
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
	
	var style = { paddingLeft: "0" };
	
	var RecordTableDetail = function RecordTableDetail(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var result = props.result;
	
	  return _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    wrapperStyle: { minWidth: "650px" }
	  }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false }, _react2.default.createElement(_Table.TableRow, null, [].concat(_toConsumableArray(Array(sizeOfGroup + 2))).map(function (_, i) {
	    return _react2.default.createElement(_Table.TableHeaderColumn, { key: "head" + (i - 1), style: i === 1 ? style : {} }, function mapHeader(x) {
	      switch (x) {
	        case 0:
	          return "Group " + props.groupNum;
	        case 1:
	          return "Name";
	        default:
	          return "vs. " + (i - 1);
	      }
	    }(i));
	  }))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, [].concat(_toConsumableArray(Array(sizeOfGroup))).map(function (_, m) {
	    var curPlayer = joinedPlayers[m + start];
	    return _react2.default.createElement(_Table.TableRow, { key: "row" + m }, [].concat(_toConsumableArray(Array(sizeOfGroup + 2))).map(function (__, n) {
	      var content = void 0;
	      var cellStyle = void 0;
	      var disabled = false;
	      (function mapContent(i, j) {
	        switch (i) {
	          case 0:
	            content = j + 1;
	            break;
	          case j + 2:
	            content = null;
	            disabled = true;
	            break;
	          case 1:
	            content = _react2.default.createElement("h3", null, curPlayer.name, _react2.default.createElement("br", null), "Rating: " + curPlayer.rating);
	            cellStyle = style;
	            break;
	          default:
	            if (i - 2 > j) {
	              content = _react2.default.createElement("div", { className: "score-div" }, _react2.default.createElement(_SelectField2.default, {
	                style: { marginRight: "5px", width: "50%" },
	                key: "row" + j + ":" + i + "-1",
	                onChange: function onChange() {
	                  return props.updateResult(j, i - 2, 0);
	                },
	                value: result[j][i - 2][0]
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, {
	                value: 3,
	                primaryText: "3",
	                disabled: result[j][i - 2][1] === 3
	              })), _react2.default.createElement(_SelectField2.default, {
	                style: { width: "50%" },
	                key: "row" + j + ":" + i + "-2",
	                onChange: function onChange() {
	                  return props.updateResult(j, i - 2, 1);
	                },
	                value: result[j][i - 2][1]
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, {
	                value: 3,
	                primaryText: "3",
	                disabled: result[j][i - 2][0] === 3
	              })));
	            } else {
	              content = _react2.default.createElement("div", null, _react2.default.createElement(_SelectField2.default, {
	                style: { marginRight: "5px", width: "50%" },
	                key: "row" + j + ":" + i + "-1",
	                value: result[i - 2][j][1],
	                disabled: true
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: "3" })), _react2.default.createElement(_SelectField2.default, {
	                style: { width: "50%" },
	                key: "row" + j + ":" + i + "-2",
	                value: result[i - 2][j][0],
	                disabled: true
	              }, _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: "0" }), _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: "1" }), _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: "2" }), _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: "3" })));
	            }
	            break;
	        }
	      })(n, m);
	      return _react2.default.createElement(_Table.TableRowColumn, {
	        style: cellStyle,
	        key: "row" + m + ":" + n,
	        disabled: disabled
	      }, content);
	    }));
	  })));
	};
	
	RecordTableDetail.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.array,
	  result: _react.PropTypes.array
	};
	
	exports.default = RecordTableDetail;

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
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
	
	var RecordTableDetail = function RecordTableDetail(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var scoreChange = props.scoreChange;
	  var groupNum = props.groupNum;
	
	  return _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    wrapperStyle: { minWidth: "1000px" }
	  }, _react2.default.createElement(_Table.TableHeader, {
	    displaySelectAll: false,
	    adjustForCheckbox: false,
	    enableSelectAll: false
	  }, _react2.default.createElement(_Table.TableRow, null, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, i) {
	    var content = void 0;
	    var style = {};
	    switch (i) {
	      case 0:
	        content = "Group " + groupNum;
	        style = { paddingLeft: "5px", paddingRight: "5px" };
	        break;
	      case 1:
	        content = "Name";
	        style = { paddingLeft: "0" };
	        break;
	      case 2:
	        content = "Before";
	        break;
	      case sizeOfGroup + 3:
	        content = "Change";
	        break;
	      case sizeOfGroup + 4:
	        content = "After";
	        break;
	      default:
	        content = i - 2;
	        break;
	    }
	    return _react2.default.createElement(_Table.TableHeaderColumn, { key: "head" + (i - 1), style: style }, content);
	  }))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, [].concat(_toConsumableArray(Array(sizeOfGroup))).map(function (__, m) {
	    var curPlayer = joinedPlayers[m + start];
	    var ratingChangeSum = 0;
	
	    return _react2.default.createElement(_Table.TableRow, { key: "row" + m }, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, n) {
	      if (n === 0) {
	        return _react2.default.createElement(_Table.TableRowColumn, {
	          key: "row" + m + ":" + n,
	          style: { paddingLeft: "5px", paddingRight: "5px" }
	        }, m + 1);
	      }
	      if (n === m + 3) return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      var cellContent = void 0;
	      var style = void 0;
	      switch (n) {
	        case 1:
	          style = { whiteSpace: "initial", paddingLeft: "0" };
	          cellContent = curPlayer.name;
	          break;
	        case 2:
	          cellContent = curPlayer.rating;
	          break;
	        case sizeOfGroup + 3:
	          cellContent = ratingChangeSum;
	          break;
	        case sizeOfGroup + 4:
	          cellContent = ratingChangeSum + +curPlayer.rating;
	          break;
	        default:
	          break;
	      }
	      if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 1 || n === 2) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n, style: style }, cellContent);
	      }
	
	      if (!scoreChange) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      }
	      ratingChangeSum += +scoreChange[m][n - 3];
	      return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, scoreChange[m][n - 3]);
	    }));
	  })));
	};
	
	RecordTableDetail.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  groupNum: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.array,
	  scoreChange: _react.PropTypes.array
	};
	
	exports.default = RecordTableDetail;

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSparklines = __webpack_require__(708);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Graph = function Graph(props) {
	  return _react2.default.createElement(_reactSparklines.Sparklines, {
	    data: props.data,
	    style: {
	      borderLeft: "1px solid #E0E0E0",
	      borderBottom: "1px solid #E0E0E0",
	      width: "50%",
	      margin: "0 auto"
	    }
	  }, _react2.default.createElement(_reactSparklines.SparklinesLine, { color: "blue", style: { fill: "grey" } }));
	};
	
	Graph.propTypes = {
	  data: _react.PropTypes.array
	};
	
	exports.default = Graph;

/***/ },

/***/ 710:
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
	
	var _SelectField = __webpack_require__(669);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(416);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _moment = __webpack_require__(541);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _clubQueryStore = __webpack_require__(711);
	
	var _clubQueryStore2 = _interopRequireDefault(_clubQueryStore);
	
	var _clientActions = __webpack_require__(643);
	
	var _clubResultDetails = __webpack_require__(712);
	
	var _clubResultDetails2 = _interopRequireDefault(_clubResultDetails);
	
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
	
	var ClubQuery = function (_Component) {
	  _inherits(ClubQuery, _Component);
	
	  function ClubQuery(props) {
	    _classCallCheck(this, ClubQuery);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClubQuery).call(this, props));
	
	    _this.setDate = function (e, i, selectedDate) {
	      _this.setState({
	        selectedDate: _clubQueryStore2.default.findRoundrobin(_this.state.currentClub._id, selectedDate)
	      });
	    };
	
	    _this.fetchedClubRoundrobins = function () {
	      _this.setState({
	        roundrobins: _clubQueryStore2.default.find(_this.state.currentClub._id)
	      });
	    };
	
	    _this.changeClub = function (e, idx, currentClubId) {
	      var currentClub = _this.props.clubs.find(function (club) {
	        return club._id === currentClubId;
	      });
	      _this.setState({ currentClub: currentClub });
	    };
	
	    _this.clubInfo = function () {
	      var currentClub = _this.state.currentClub;
	      if (currentClub) {
	        return _react2.default.createElement("div", { className: "club-info-container" }, _react2.default.createElement("h1", null, "Club: ", currentClub.clubName), _react2.default.createElement("div", null, "Location: ", currentClub.location.city + ", " + currentClub.location.state));
	      }
	      return null;
	    };
	
	    _this.state = {
	      currentClub: null,
	      roundrobins: null,
	      selectedDate: null
	    };
	    return _this;
	  }
	
	  _createClass(ClubQuery, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.listenerOne = _clubQueryStore2.default.addListener(this.fetchedClubRoundrobins);
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.currentClub && (this.state.currentClub && !prevState.currentClub || this.state.currentClub._id !== prevState.currentClub._id)) {
	        this.checkIfCachedClub(this.state.currentClub._id);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.listenerOne.remove();
	    }
	  }, {
	    key: "checkIfCachedClub",
	    value: function checkIfCachedClub(id) {
	      var roundrobins = _clubQueryStore2.default.find(id);
	      if (roundrobins) {
	        this.setState({ roundrobins: roundrobins });
	      } else {
	        (0, _clientActions.fetchClubRoundrobins)(id);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var clubs = this.props.clubs;
	      if (!clubs) return _react2.default.createElement("div", { className: "club-info-container" }, "Select a club..");
	
	      return _react2.default.createElement("div", { className: "club-result-container" }, _react2.default.createElement("div", { className: "name-select-div" }, _react2.default.createElement(_SelectField2.default, {
	        value: this.state.currentClub ? this.state.currentClub._id : null,
	        onChange: this.changeClub,
	        floatingLabelText: "Select a Club",
	        floatingLabelFixed: Boolean(true)
	      }, clubs.map(function (club, i) {
	        return _react2.default.createElement(_MenuItem2.default, { key: i, value: club._id, primaryText: club.clubName });
	      })), _react2.default.createElement(_SelectField2.default, {
	        value: this.state.selectedDate ? this.state.selectedDate._id : null,
	        onChange: this.setDate,
	        floatingLabelText: "Select a Date",
	        floatingLabelFixed: Boolean(true)
	      }, this.state.roundrobins ? this.state.roundrobins.map(function (roundrobin, i) {
	        return _react2.default.createElement(_MenuItem2.default, { key: i, value: roundrobin._id, primaryText: (0, _moment2.default)(roundrobin.date).format("MMMM DD, YYYY") });
	      }) : _react2.default.createElement(_MenuItem2.default, { key: "empty", value: null, primaryText: "No dates available" }))), this.clubInfo(), _react2.default.createElement(_clubResultDetails2.default, this.state.selectedDate));
	    }
	  }]);
	
	  return ClubQuery;
	}(_react.Component);
	
	ClubQuery.propTypes = {
	  clubs: _react.PropTypes.array
	};
	exports.default = ClubQuery;

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _clubResultView = __webpack_require__(713);
	
	var _clubResultView2 = _interopRequireDefault(_clubResultView);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var ClubResultDetails = function ClubResultDetails(props) {
	  if (!props._id) {
	    return _react2.default.createElement("div", { style: { marginTop: "5%" } }, "Please select a date...");
	  }
	  if (!props.finalized) {
	    return _react2.default.createElement("div", { style: { marginTop: "5%" } }, "The results have not been posted yet...");
	  }
	  var countedPlayers = 0;
	  return _react2.default.createElement("div", { style: { overflow: "scroll", marginTop: "5%" } }, props.selectedSchema.map(function (sizeOfGroup, i) {
	    countedPlayers += +sizeOfGroup;
	    return _react2.default.createElement(_clubResultView2.default, {
	      key: i,
	      groupNum: i + 1,
	      start: countedPlayers - sizeOfGroup,
	      finalized: props.finalized,
	      result: props.results[i],
	      joinedPlayers: props.players, sizeOfGroup: +sizeOfGroup
	    });
	  }));
	};
	
	ClubResultDetails.propTypes = {
	  players: _react.PropTypes.array,
	  finalized: _react.PropTypes.bool,
	  selectedSchema: _react.PropTypes.array,
	  _id: _react.PropTypes.number
	};
	
	exports.default = ClubResultDetails;

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(170);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(655);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
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
	
	var ClubResultView = function ClubResultView(props) {
	  var sizeOfGroup = props.sizeOfGroup;
	  var start = props.start;
	  var joinedPlayers = props.joinedPlayers;
	  var result = props.result;
	
	  return _react2.default.createElement(_Table.Table, {
	    selectable: false,
	    multiSelectable: false,
	    wrapperStyle: { minWidth: "1000px" }
	  }, _react2.default.createElement(_Table.TableHeader, {
	    displaySelectAll: false,
	    adjustForCheckbox: false,
	    enableSelectAll: false
	  }, _react2.default.createElement(_Table.TableRow, null, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, i) {
	    var content = void 0;
	    var style = {};
	    switch (i) {
	      case 0:
	        content = "Group " + props.groupNum;
	        style = { paddingLeft: "5px", paddingRight: "5px" };
	        break;
	      case 1:
	        content = "Name";
	        style = { paddingLeft: "0" };
	        break;
	      case 2:
	        content = "Before";
	        break;
	      case sizeOfGroup + 3:
	        content = "Change";
	        break;
	      case sizeOfGroup + 4:
	        content = "After";
	        break;
	      default:
	        content = i - 2;
	        break;
	
	    }
	    return _react2.default.createElement(_Table.TableHeaderColumn, { key: "head" + (i - 1), style: style }, content);
	  }))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, [].concat(_toConsumableArray(Array(sizeOfGroup))).map(function (__, m) {
	    var curPlayer = joinedPlayers[m + start];
	    var ratingChangeSum = 0;
	
	    return _react2.default.createElement(_Table.TableRow, { key: "row" + m }, [].concat(_toConsumableArray(Array(sizeOfGroup + 5))).map(function (_, n) {
	      if (n === 0) {
	        return _react2.default.createElement(_Table.TableRowColumn, {
	          key: "row" + m + ":" + n,
	          style: { paddingLeft: "5px", paddingRight: "5px" }
	        }, m + 1);
	      }
	      if (n === m + 3) return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      var cellContent = void 0;
	      var style = void 0;
	      switch (n) {
	        case 1:
	          style = { whiteSpace: "initial", paddingLeft: "0" };
	          cellContent = curPlayer.name;
	          break;
	        case 2:
	          cellContent = curPlayer.rating;
	          break;
	        case sizeOfGroup + 3:
	          cellContent = ratingChangeSum;
	          break;
	        case sizeOfGroup + 4:
	          cellContent = ratingChangeSum + +curPlayer.rating;
	          break;
	        default:
	          break;
	      }
	      if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 1 || n === 2) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n, style: style }, cellContent);
	      }
	      if (!result[m]) {
	        return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, "0");
	      }
	      ratingChangeSum += +result[m][n - 3];
	      return _react2.default.createElement(_Table.TableRowColumn, { key: "row" + m + ":" + n }, result[m][n - 3]);
	    }));
	  })));
	};
	
	ClubResultView.propTypes = {
	  sizeOfGroup: _react.PropTypes.number,
	  start: _react.PropTypes.number,
	  joinedPlayers: _react.PropTypes.Object,
	  result: _react.PropTypes.array
	};
	exports.default = ClubResultView;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZUVudGVyLmpzPzI4ZTIiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZWNvcmQvcmVjb3JkVGFibGVWaWV3LmpzPzk5NzciLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXN1bHRzL2dyYXBoLmpzPzg5ZDMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9yZXN1bHRzL2NsdWJSZXN1bHRRdWVyeS5qcz9mM2NmIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzdWx0cy9jbHViUmVzdWx0RGV0YWlscy5qcz82YTE5Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzdWx0cy9jbHViUmVzdWx0Vmlldy5qcz82MmY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNLFFBQVEsRUFBRSxhQUFhOztBQUU3QixLQUFNLG9CQUFvQiwyQkFBQyxPQUFVO09BQzNCLGNBQThDLE1BQTlDO09BQWEsUUFBaUMsTUFBakM7T0FBTyxnQkFBMEIsTUFBMUI7T0FBZSxTQUFXLE1BQ3REOzswQkFBUTtpQkFFTjtzQkFDQTttQkFBYyxFQUFFLFVBQVU7QUFGMUIsSUFETSxFQUtOLG9EQUFhLGtCQUFrQixPQUFPLG1CQUFtQix5QkFDdkQsa0VBRVEsTUFBTSxjQUFjLEtBQUksSUFBSSxVQUFDLEdBQUcsR0FBSjs0QkFDOUIsMENBQW1CLGVBQVksSUFBSSxJQUFLLE9BQU8sTUFBTSxJQUFJLFFBQVEsZUFFbkQsVUFBVSxHQUNsQjtlQUNFO2NBQ0U7NkJBQWdCLE1BQ2xCO2NBQ0U7a0JBQ0Y7QUFDRTs0QkFBZSxJQUVwQjs7QUFUQSxPQVNDLEVBWE47QUFERixLQUZKLG9CQXFCRixrQ0FBVyxv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Q0FBVyxvQkFBb0Isc0NBRXJCLE1BQU0sZUFBYyxJQUFJLFVBQUMsSUFBSSxHQUMvQjtTQUFNLFlBQVksY0FBYyxJQUNoQztTQUFJLGtCQUVKOzs0QkFBUSxpQ0FBVSxhQUFXLGtDQUFVLE1BQU0sY0FBYyxLQUFJLElBQUksVUFBQyxHQUFHLEdBQ3JFO1dBQUksTUFBTSxHQUNSO2dDQUFRO3dCQUNLLFVBQ1g7a0JBQU8sRUFBRSxhQUFhLE9BQU8sY0FBYztBQUQzQyxVQURNLEVBSUosSUFFTDtBQUNEO1dBQUksTUFBTSxJQUFJLEdBQUcsT0FBTyx1REFBZ0IsYUFBVyxVQUFLLEtBQ3hEO1dBQUksbUJBQ0o7V0FBSSxhQUNKO2VBQ0U7Y0FDRTttQkFBUSxFQUFFLFlBQVksV0FBVyxhQUNqQzt5QkFBYyxVQUNkO0FBQ0Y7Y0FDRTt5QkFBYyxVQUNkO0FBQ0Y7Y0FBSyxjQUNIO3lCQUNBO0FBQ0Y7Y0FBSyxjQUNIO3lCQUFjLGtCQUFrQixDQUFDLFVBQ2pDO0FBQ0Y7QUFDRTtBQUVKOztXQUFJLE1BQU0sY0FBYyxLQUFLLE1BQU0sY0FBYyxLQUFLLE1BQU0sS0FBSyxNQUFNLEdBQ3JFO2dCQUFPLHVEQUFnQixhQUFXLFVBQUssR0FBSyxPQUFPLFNBQ3BEO0FBQ0Q7V0FBSSxDQUFDLE9BQU8sSUFDVjtnQkFBTyx1REFBZ0IsYUFBVyxVQUFLLEtBQ3hDO0FBQ0Q7MEJBQW1CLENBQUMsT0FBTyxHQUFHLElBQzlCO2NBQVEsdURBQWdCLGFBQVcsVUFBSyxLQUNwQyxPQUFPLEdBQUcsSUFFZjtBQUNGLE1BeENvQyxDQUEzQjtBQTRDbkIsSUFoRFMsQ0FGTjtBQS9DSjs7QUFtR0EsZ0JBQWU7Z0JBQ0EsaUJBQ2I7VUFBTyxpQkFDUDtrQkFBZSxpQkFDZjtXQUFRLGlCQUFVO0FBSGxCO21CQUthLGUiLCJmaWxlIjoiMC40ZjEzYWRhNjI2NTFlYjRlMDI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcblxuY29uc3Qgc3R5bGUgPSB7IHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuXG5jb25zdCBSZWNvcmRUYWJsZURldGFpbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNpemVPZkdyb3VwLCBzdGFydCwgam9pbmVkUGxheWVycywgcmVzdWx0IH0gPSBwcm9wcztcbiAgcmV0dXJuICg8VGFibGVcbiAgICBzZWxlY3RhYmxlPXtmYWxzZX1cbiAgICBtdWx0aVNlbGVjdGFibGU9e2ZhbHNlfVxuICAgIHdyYXBwZXJTdHlsZT17eyBtaW5XaWR0aDogXCI2NTBweFwiIH19XG4gID5cbiAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9IGFkanVzdEZvckNoZWNrYm94PXtmYWxzZX0+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIHtcbiAgICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyAyKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4ga2V5PXtgaGVhZCR7aSAtIDF9YH0gc3R5bGU9e2kgPT09IDEgPyBzdHlsZSA6IHt9fT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiBtYXBIZWFkZXIoeCkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYEdyb3VwICR7cHJvcHMuZ3JvdXBOdW19YDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHZzLiAkeyhpIC0gMSl9YDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KGkpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWRlcj5cbiAgICA8VGFibGVCb2R5IGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9PlxuICAgICAge1xuICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXApXS5tYXAoKF8sIG0pID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJQbGF5ZXIgPSBqb2luZWRQbGF5ZXJzW20gKyBzdGFydF07XG4gICAgICAgICAgcmV0dXJuICg8VGFibGVSb3cga2V5PXtgcm93JHttfWB9PntbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyAyKV0ubWFwKChfXywgbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgY2VsbFN0eWxlO1xuICAgICAgICAgICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAoZnVuY3Rpb24gbWFwQ29udGVudChpLCBqKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgaiArIDI6XG4gICAgICAgICAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoPGgzPlxuICAgICAgICAgICAgICAgICAgICB7IGN1clBsYXllci5uYW1lIH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgeyBgUmF0aW5nOiAke2N1clBsYXllci5yYXRpbmd9YCB9XG4gICAgICAgICAgICAgICAgICA8L2gzPik7XG4gICAgICAgICAgICAgICAgICBjZWxsU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoKGkgLSAyKSA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICg8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke2p9OiR7aX0tMWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gcHJvcHMudXBkYXRlUmVzdWx0KGosIGkgLSAyLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXN1bHRbal1baSAtIDJdWzBdfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Jlc3VsdFtqXVtpIC0gMl1bMV0gPT09IDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcm93JHtqfToke2l9LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHByb3BzLnVwZGF0ZVJlc3VsdChqLCBpIC0gMiwgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzdWx0W2pdW2kgLSAyXVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHByaW1hcnlUZXh0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9IHByaW1hcnlUZXh0PVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZXN1bHRbal1baSAtIDJdWzBdID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke2p9OiR7aX0tMWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzdWx0W2kgLSAyXVtqXVsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfSBwcmltYXJ5VGV4dD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfSBwcmltYXJ5VGV4dD1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcm93JHtqfToke2l9LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3VsdFtpIC0gMl1bal1bMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0obiwgbSkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uXG4gICAgICAgICAgICAgICAgc3R5bGU9e2NlbGxTdHlsZX1cbiAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTwvVGFibGVSb3c+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L1RhYmxlQm9keT5cbiAgPC9UYWJsZT4pO1xufTtcblxuUmVjb3JkVGFibGVEZXRhaWwucHJvcFR5cGVzID0ge1xuICBzaXplT2ZHcm91cDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgcmVzdWx0OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFRhYmxlRGV0YWlsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZUVudGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkZXIsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLCBUYWJsZVJvdywgVGFibGVSb3dDb2x1bW4gfSBmcm9tIFwibWF0ZXJpYWwtdWkvVGFibGVcIjtcblxuY29uc3QgUmVjb3JkVGFibGVEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaXplT2ZHcm91cCwgc3RhcnQsIGpvaW5lZFBsYXllcnMsIHNjb3JlQ2hhbmdlLCBncm91cE51bSB9ID0gcHJvcHM7XG4gIHJldHVybiAoPFRhYmxlXG4gICAgc2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgbXVsdGlTZWxlY3RhYmxlPXtmYWxzZX1cbiAgICB3cmFwcGVyU3R5bGU9e3sgbWluV2lkdGg6IFwiMTAwMHB4XCIgfX1cbiAgPlxuICAgIDxUYWJsZUhlYWRlclxuICAgICAgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9XG4gICAgICBhZGp1c3RGb3JDaGVja2JveD17ZmFsc2V9XG4gICAgICBlbmFibGVTZWxlY3RBbGw9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAge1xuICAgICAgICAgIFsuLi5BcnJheShzaXplT2ZHcm91cCArIDUpXS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBgR3JvdXAgJHtncm91cE51bX1gO1xuICAgICAgICAgICAgICAgIHN0eWxlID0geyBwYWRkaW5nTGVmdDogXCI1cHhcIiwgcGFkZGluZ1JpZ2h0OiBcIjVweFwiIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7IHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiQmVmb3JlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2Ugc2l6ZU9mR3JvdXAgKyAzOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIkNoYW5nZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgNDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJBZnRlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBpIC0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlSGVhZGVyQ29sdW1uIGtleT17YGhlYWQkeyhpIC0gMSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgeyBjb250ZW50IH1cbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkZXI+XG4gICAgPFRhYmxlQm9keSBkaXNwbGF5Um93Q2hlY2tib3g9e2ZhbHNlfT5cbiAgICAgIHtcbiAgICAgICAgWy4uLkFycmF5KHNpemVPZkdyb3VwKV0ubWFwKChfXywgbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1clBsYXllciA9IGpvaW5lZFBsYXllcnNbbSArIHN0YXJ0XTtcbiAgICAgICAgICBsZXQgcmF0aW5nQ2hhbmdlU3VtID0gMDtcblxuICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17YHJvdyR7bX1gfT57Wy4uLkFycmF5KHNpemVPZkdyb3VwICsgNSldLm1hcCgoXywgbikgPT4ge1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFibGVSb3dDb2x1bW5cbiAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjVweFwiLCBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsobSArIDEpfVxuICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobiA9PT0gbSArIDMpIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgbGV0IGNlbGxDb250ZW50O1xuICAgICAgICAgICAgbGV0IHN0eWxlO1xuICAgICAgICAgICAgc3dpdGNoIChuKSB7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHsgd2hpdGVTcGFjZTogXCJpbml0aWFsXCIsIHBhZGRpbmdMZWZ0OiBcIjBcIiB9O1xuICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gY3VyUGxheWVyLm5hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IGN1clBsYXllci5yYXRpbmc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2Ugc2l6ZU9mR3JvdXAgKyAzOlxuICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gcmF0aW5nQ2hhbmdlU3VtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgNDpcbiAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IHJhdGluZ0NoYW5nZVN1bSArICtjdXJQbGF5ZXIucmF0aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPT09IHNpemVPZkdyb3VwICsgMyB8fCBuID09PSBzaXplT2ZHcm91cCArIDQgfHwgbiA9PT0gMSB8fCBuID09PSAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0gc3R5bGU9e3N0eWxlfT57Y2VsbENvbnRlbnR9PC9UYWJsZVJvd0NvbHVtbj47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2NvcmVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZVJvd0NvbHVtbiBrZXk9e2Byb3cke219OiR7bn1gfT4wPC9UYWJsZVJvd0NvbHVtbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYXRpbmdDaGFuZ2VTdW0gKz0gK3Njb3JlQ2hhbmdlW21dW24gLSAzXTtcbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93Q29sdW1uIGtleT17YHJvdyR7bX06JHtufWB9PlxuICAgICAgICAgICAgICB7IHNjb3JlQ2hhbmdlW21dW24gLSAzXSB9XG4gICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPik7XG4gICAgICAgICAgfSl9PC9UYWJsZVJvdz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvVGFibGVCb2R5PlxuICA8L1RhYmxlPik7XG59O1xuXG5SZWNvcmRUYWJsZURldGFpbC5wcm9wVHlwZXMgPSB7XG4gIHNpemVPZkdyb3VwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGFydDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JvdXBOdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2NvcmVDaGFuZ2U6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFRhYmxlRGV0YWlsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3JlY29yZC9yZWNvcmRUYWJsZVZpZXcuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcGFya2xpbmVzLCBTcGFya2xpbmVzTGluZSB9IGZyb20gXCJyZWFjdC1zcGFya2xpbmVzXCI7XG5cbmNvbnN0IEdyYXBoID0gKHByb3BzID0+XG4gIDxTcGFya2xpbmVzXG4gICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICBzdHlsZT17e1xuICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI0UwRTBFMFwiLFxuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjRTBFMEUwXCIsXG4gICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICAgIH19XG4gID5cbiAgICA8U3BhcmtsaW5lc0xpbmUgY29sb3I9XCJibHVlXCIgc3R5bGU9e3sgZmlsbDogXCJncmV5XCIgfX0gLz5cbiAgPC9TcGFya2xpbmVzPlxuKTtcblxuR3JhcGgucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3VsdHMvZ3JhcGguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvU2VsZWN0RmllbGRcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwibWF0ZXJpYWwtdWkvTWVudUl0ZW1cIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IENsdWJRdWVyeVN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvY2x1YlF1ZXJ5U3RvcmVcIjtcbmltcG9ydCB7IGZldGNoQ2x1YlJvdW5kcm9iaW5zIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9uc1wiO1xuaW1wb3J0IENsdWJSZXN1bHREZXRhaWxzIGZyb20gXCIuL2NsdWJSZXN1bHREZXRhaWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsdWJRdWVyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2x1YnM6IFByb3BUeXBlcy5hcnJheVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50Q2x1YjogbnVsbCxcbiAgICAgIHJvdW5kcm9iaW5zOiBudWxsLFxuICAgICAgc2VsZWN0ZWREYXRlOiBudWxsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5saXN0ZW5lck9uZSA9IENsdWJRdWVyeVN0b3JlLmFkZExpc3RlbmVyKHRoaXMuZmV0Y2hlZENsdWJSb3VuZHJvYmlucyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudENsdWIgJiZcbiAgICAgICgodGhpcy5zdGF0ZS5jdXJyZW50Q2x1YiAmJiAhcHJldlN0YXRlLmN1cnJlbnRDbHViKSB8fFxuICAgICAgKHRoaXMuc3RhdGUuY3VycmVudENsdWIuX2lkICE9PSBwcmV2U3RhdGUuY3VycmVudENsdWIuX2lkKSkpIHtcbiAgICAgIHRoaXMuY2hlY2tJZkNhY2hlZENsdWIodGhpcy5zdGF0ZS5jdXJyZW50Q2x1Yi5faWQpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyT25lLnJlbW92ZSgpO1xuICB9XG4gIHNldERhdGUgPSAoZSwgaSwgc2VsZWN0ZWREYXRlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERhdGU6IENsdWJRdWVyeVN0b3JlLmZpbmRSb3VuZHJvYmluKHRoaXMuc3RhdGUuY3VycmVudENsdWIuX2lkLCBzZWxlY3RlZERhdGUpXG4gICAgfSk7XG4gIH1cbiAgZmV0Y2hlZENsdWJSb3VuZHJvYmlucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJvdW5kcm9iaW5zOiBDbHViUXVlcnlTdG9yZS5maW5kKHRoaXMuc3RhdGUuY3VycmVudENsdWIuX2lkKVxuICAgIH0pO1xuICB9XG4gIGNoZWNrSWZDYWNoZWRDbHViKGlkKSB7XG4gICAgY29uc3Qgcm91bmRyb2JpbnMgPSBDbHViUXVlcnlTdG9yZS5maW5kKGlkKTtcbiAgICBpZiAocm91bmRyb2JpbnMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3VuZHJvYmlucyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hDbHViUm91bmRyb2JpbnMoaWQpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUNsdWIgPSAoZSwgaWR4LCBjdXJyZW50Q2x1YklkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudENsdWIgPSB0aGlzLnByb3BzLmNsdWJzLmZpbmQoY2x1YiA9PiBjbHViLl9pZCA9PT0gY3VycmVudENsdWJJZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRDbHViIH0pO1xuICB9XG5cbiAgY2x1YkluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudENsdWIgPSB0aGlzLnN0YXRlLmN1cnJlbnRDbHViO1xuICAgIGlmIChjdXJyZW50Q2x1Yikge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNsdWItaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPkNsdWI6IHsgY3VycmVudENsdWIuY2x1Yk5hbWUgfTwvaDE+XG4gICAgICAgIDxkaXY+TG9jYXRpb246IHsgYCR7Y3VycmVudENsdWIubG9jYXRpb24uY2l0eX0sICR7Y3VycmVudENsdWIubG9jYXRpb24uc3RhdGV9YH08L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbHVicyA9IHRoaXMucHJvcHMuY2x1YnM7XG4gICAgaWYgKCFjbHVicykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2x1Yi1pbmZvLWNvbnRhaW5lclwiPlNlbGVjdCBhIGNsdWIuLjwvZGl2PjtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjbHViLXJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1zZWxlY3QtZGl2XCI+XG4gICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRDbHViID8gdGhpcy5zdGF0ZS5jdXJyZW50Q2x1Yi5faWQgOiBudWxsfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUNsdWJ9XG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJTZWxlY3QgYSBDbHViXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbHVicy5tYXAoKGNsdWIsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aX0gdmFsdWU9e2NsdWIuX2lkfSBwcmltYXJ5VGV4dD17Y2x1Yi5jbHViTmFtZX0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZS5faWQgOiBudWxsfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldERhdGV9XG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJTZWxlY3QgYSBEYXRlXCJcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e0Jvb2xlYW4odHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvdW5kcm9iaW5zID9cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3VuZHJvYmlucy5tYXAoKHJvdW5kcm9iaW4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpfSB2YWx1ZT17cm91bmRyb2Jpbi5faWR9IHByaW1hcnlUZXh0PXttb21lbnQocm91bmRyb2Jpbi5kYXRlKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZXCIpfSAvPlxuICAgICAgICAgICAgICkpIDpcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT1cImVtcHR5XCIgdmFsdWU9e251bGx9IHByaW1hcnlUZXh0PVwiTm8gZGF0ZXMgYXZhaWxhYmxlXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgdGhpcy5jbHViSW5mbygpIH1cbiAgICAgIDxDbHViUmVzdWx0RGV0YWlscyB7Li4udGhpcy5zdGF0ZS5zZWxlY3RlZERhdGV9IC8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mcm9udGVuZC9jb21wb25lbnRzL3Jlc3VsdHMvY2x1YlJlc3VsdFF1ZXJ5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsdWJSZXN1bHRWaWV3IGZyb20gXCIuL2NsdWJSZXN1bHRWaWV3XCI7XG5cbmNvbnN0IENsdWJSZXN1bHREZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuX2lkKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1JVwiIH19PlxuICAgICAgUGxlYXNlIHNlbGVjdCBhIGRhdGUuLi5cbiAgICA8L2Rpdj4pO1xuICB9XG4gIGlmICghcHJvcHMuZmluYWxpemVkKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1JVwiIH19PlxuICAgICAgVGhlIHJlc3VsdHMgaGF2ZSBub3QgYmVlbiBwb3N0ZWQgeWV0Li4uXG4gICAgPC9kaXY+KTtcbiAgfVxuICBsZXQgY291bnRlZFBsYXllcnMgPSAwO1xuICByZXR1cm4gKDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsIG1hcmdpblRvcDogXCI1JVwiIH19PlxuICAgIHtcbiAgICAgIHByb3BzLnNlbGVjdGVkU2NoZW1hLm1hcCgoc2l6ZU9mR3JvdXAsIGkpID0+IHtcbiAgICAgICAgY291bnRlZFBsYXllcnMgKz0gK3NpemVPZkdyb3VwO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDbHViUmVzdWx0Vmlld1xuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgZ3JvdXBOdW09e2kgKyAxfVxuICAgICAgICAgICAgc3RhcnQ9e2NvdW50ZWRQbGF5ZXJzIC0gc2l6ZU9mR3JvdXB9XG4gICAgICAgICAgICBmaW5hbGl6ZWQ9e3Byb3BzLmZpbmFsaXplZH1cbiAgICAgICAgICAgIHJlc3VsdD17cHJvcHMucmVzdWx0c1tpXX1cbiAgICAgICAgICAgIGpvaW5lZFBsYXllcnM9e3Byb3BzLnBsYXllcnN9IHNpemVPZkdyb3VwPXsrc2l6ZU9mR3JvdXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgfVxuICA8L2Rpdj4pO1xufTtcblxuQ2x1YlJlc3VsdERldGFpbHMucHJvcFR5cGVzID0ge1xuICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGZpbmFsaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkU2NoZW1hOiBQcm9wVHlwZXMuYXJyYXksXG4gIF9pZDogUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1YlJlc3VsdERldGFpbHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzdWx0cy9jbHViUmVzdWx0RGV0YWlscy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZGVyLCBUYWJsZUhlYWRlckNvbHVtbiwgVGFibGVSb3csIFRhYmxlUm93Q29sdW1uIH0gZnJvbSBcIm1hdGVyaWFsLXVpL1RhYmxlXCI7XG5cbmNvbnN0IENsdWJSZXN1bHRWaWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2l6ZU9mR3JvdXAsIHN0YXJ0LCBqb2luZWRQbGF5ZXJzLCByZXN1bHQgfSA9IHByb3BzO1xuICByZXR1cm4gKDxUYWJsZVxuICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgIG11bHRpU2VsZWN0YWJsZT17ZmFsc2V9XG4gICAgd3JhcHBlclN0eWxlPXt7IG1pbldpZHRoOiBcIjEwMDBweFwiIH19XG4gID5cbiAgICA8VGFibGVIZWFkZXJcbiAgICAgIGRpc3BsYXlTZWxlY3RBbGw9e2ZhbHNlfVxuICAgICAgYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfVxuICAgICAgZW5hYmxlU2VsZWN0QWxsPXtmYWxzZX1cbiAgICA+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIHtcbiAgICAgICAgICBbLi4uQXJyYXkoc2l6ZU9mR3JvdXAgKyA1KV0ubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gYEdyb3VwICR7cHJvcHMuZ3JvdXBOdW19YDtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHsgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsIHBhZGRpbmdSaWdodDogXCI1cHhcIiB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlID0geyBwYWRkaW5nTGVmdDogXCIwXCIgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIkJlZm9yZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgMzpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJDaGFuZ2VcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBzaXplT2ZHcm91cCArIDQ6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiQWZ0ZXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gaSAtIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlSGVhZGVyQ29sdW1uIGtleT17YGhlYWQke2kgLSAxfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZGVyPlxuICAgIDxUYWJsZUJvZHkgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX0+XG4gICAgICB7XG4gICAgICAgICAgWy4uLkFycmF5KHNpemVPZkdyb3VwKV0ubWFwKChfXywgbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VyUGxheWVyID0gam9pbmVkUGxheWVyc1ttICsgc3RhcnRdO1xuICAgICAgICAgICAgbGV0IHJhdGluZ0NoYW5nZVN1bSA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93IGtleT17YHJvdyR7bX1gfT57Wy4uLkFycmF5KHNpemVPZkdyb3VwICsgNSldLm1hcCgoXywgbikgPT4ge1xuICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFRhYmxlUm93Q29sdW1uXG4gICAgICAgICAgICAgICAgICBrZXk9e2Byb3cke219OiR7bn1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsIHBhZGRpbmdSaWdodDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsgbSArIDEgfVxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobiA9PT0gbSArIDMpIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgICBsZXQgY2VsbENvbnRlbnQ7XG4gICAgICAgICAgICAgIGxldCBzdHlsZTtcbiAgICAgICAgICAgICAgc3dpdGNoIChuKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7IHdoaXRlU3BhY2U6IFwiaW5pdGlhbFwiLCBwYWRkaW5nTGVmdDogXCIwXCIgfTtcbiAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gY3VyUGxheWVyLm5hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IGN1clBsYXllci5yYXRpbmc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNpemVPZkdyb3VwICsgMzpcbiAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50ID0gcmF0aW5nQ2hhbmdlU3VtO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzaXplT2ZHcm91cCArIDQ6XG4gICAgICAgICAgICAgICAgICBjZWxsQ29udGVudCA9IHJhdGluZ0NoYW5nZVN1bSArICtjdXJQbGF5ZXIucmF0aW5nO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuID09PSBzaXplT2ZHcm91cCArIDMgfHwgbiA9PT0gc2l6ZU9mR3JvdXAgKyA0IHx8IG4gPT09IDEgfHwgbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0gc3R5bGU9e3N0eWxlfT57IGNlbGxDb250ZW50IH08L1RhYmxlUm93Q29sdW1uPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXJlc3VsdFttXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+MDwvVGFibGVSb3dDb2x1bW4+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJhdGluZ0NoYW5nZVN1bSArPSArcmVzdWx0W21dW24gLSAzXTtcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFibGVSb3dDb2x1bW4ga2V5PXtgcm93JHttfToke259YH0+XG4gICAgICAgICAgICAgICAgeyByZXN1bHRbbV1bbiAtIDNdIH1cbiAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj4pO1xuICAgICAgICAgICAgfSl9PC9UYWJsZVJvdz4pO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L1RhYmxlQm9keT5cbiAgPC9UYWJsZT4pO1xufTtcblxuQ2x1YlJlc3VsdFZpZXcucHJvcFR5cGVzID0ge1xuICBzaXplT2ZHcm91cDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGpvaW5lZFBsYXllcnM6IFByb3BUeXBlcy5PYmplY3QsXG4gIHJlc3VsdDogUHJvcFR5cGVzLmFycmF5XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2x1YlJlc3VsdFZpZXc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Zyb250ZW5kL2NvbXBvbmVudHMvcmVzdWx0cy9jbHViUmVzdWx0Vmlldy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=