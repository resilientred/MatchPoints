'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _player = require('../models/player.js');

var _club = require('../models/club');

var _club2 = _interopRequireDefault(_club);

var _app_modules = require('../helpers/app_modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route("/:clubId/players").get(function (req, res) {
  var clubId = req.params.clubId;
  console.log("reaced routes");
  _club2.default.findPlayers(clubId).then(function (players) {
    console.log(players);
    res.status(200).send(players);
  }).catch(function (err) {
    res.status(422).send(err);
  });
}).post(_app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var data = req.body.player;
  var player = new _player.Player({
    "name": data.name,
    "rating": +data.rating
  });

  player.save(function (err, player) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(201).send(player);
      res.end();
    }
  });
}).delete(function (req, res) {}).patch(function (req, res) {});

exports.default = router;