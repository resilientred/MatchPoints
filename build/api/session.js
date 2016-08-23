'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _club = require('../models/club');

var _club2 = _interopRequireDefault(_club);

var _app_modules = require('../helpers/app_modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post("/new", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var data = req.body.user;
  _app_modules.clubMethods._findClub(data.username, data.password).then(function (club) {
    console.log("logging in...club: " + club);
    _app_modules.clubMethods.logIn(res, club);
  }).catch(function (err) {
    res.status(404).send("Username or password error.");
    res.end();
  });
}).delete("/", function (_, res) {
  _app_modules.clubMethods.logOut().then(function () {
    console.log("clearing cookie");
    res.clearCookie("matchpoint_session").send("");
    res.end();
  }).catch(function (err) {
    res.status(404).send(err);
  });
});

exports.default = router;