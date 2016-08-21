'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _club2 = require('../models/club');

var _club3 = _interopRequireDefault(_club2);

var _urlsafeBase = require('urlsafe-base64');

var _urlsafeBase2 = _interopRequireDefault(_urlsafeBase);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClubMethods = function () {
  function ClubMethods() {
    var _this = this;

    _classCallCheck(this, ClubMethods);

    this.currentClub = function (req) {
      if (_this._currentClub) {
        return new Promise(function (resolve, reject) {
          resolve(_this._currentClub);
        });
      } else {
        return _club3.default.findBySessionToken.call(_club3.default, req.cookies.matchpoint_session);
      }
    };

    this.logOut = function () {
      var club = _this._currentClub;
      if (!club) return new Promise(function (resolve, _) {
        resolve();
      });
      _this._currentClub = null;
      return _club3.default.resetSessionToken.call(_club3.default, club);
    };

    this.logIn = function (res, club) {
      if (!club) {
        throw new Error("log In error");
      } else {
        _this._currentClub = Object.assign({}, club.toObject());
        delete _this._currentClub.sessionToken;
        delete _this._currentClub.passwordDigest;
        res.cookie("matchpoint_session", club.sessionToken, { maxAge: 14 * 24 * 60 * 60 * 1000 }).send(_this._currentClub);
      }
    };

    this._currentClub = null;
  }

  _createClass(ClubMethods, [{
    key: '_findClub',
    value: function _findClub(username, password) {
      console.log(username + " " + password);
      var _club;
      return _club3.default.findByUsernameAndPassword.call(_club3.default, username).then(function (club) {
        _club = club;
        return club.isPassword(password);
      }).then(function () {
        return new Promise(function (resolve, reject) {
          resolve(_club);
        });
      }, function (err) {
        return new Promise(function (_, reject) {
          reject(err);
        });
      });
    }
  }]);

  return ClubMethods;
}();

exports.default = ClubMethods;