'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _club = require('../models/club');

var _club2 = _interopRequireDefault(_club);

var _roundrobin = require('../models/roundrobin');

var _roundrobin2 = _interopRequireDefault(_roundrobin);

var _player2 = require('../models/player');

var _app_modules = require('../helpers/app_modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express2.default.Router();

router.get("", function (req, res) {
  _app_modules.clubMethods.currentClub(req).then(function (currentClub) {
    res.status(200).send(currentClub);
    res.end();
  }).catch(function (err) {
    console.log(err);
  });
}).get("/all", function (req, res) {
  _club2.default.findAll().then(function (roundrobins) {
    res.status(200).send(roundrobins);
  }).catch(function (err) {
    res.status(404);
    res.end();
  });
}).get("/:clubId/sessions", function (req, res) {
  var clubId = req.params.clubId;
  _roundrobin2.default.findRoundRobinsByClub(clubId).then(function (roundrobins) {
    res.status(200).send(roundrobins);
    res.end();
  }).catch(function (err) {
    res.status(500);
    res.end();
  });
}).get("/:clubId/roundrobins", function (req, res) {
  var clubId = req.params.clubId;
  _roundrobin2.default.findRoundRobinsByClub(clubId).then(function (roundrobins) {
    res.status(200).send({ clubId: clubId, roundrobins: roundrobins });
    res.end();
  }).catch(function (err) {
    res.status(500);
    res.end();
  });
}).post("/:clubId/session/new", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var _clubId = req.params.clubId,
      data = req.body.session;

  var newRR = new _roundrobin2.default(_extends({
    _clubId: _clubId }, data));

  newRR.save().then(function (rr) {
    console.log(rr);
    res.status(200).send(rr);
  }).catch(function (err) {
    res.status(422).send(err);
  });
}).post("/:clubId/temp", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  console.log("saving temp");
  var _clubId = req.params.clubId,
      data = JSON.stringify(req.body.session);
  _app_modules.client.setex("tempsess#" + _clubId, 300, data, function (err) {
    if (err) console.log(err);
  });
  res.status(202);
  res.end();
}).get("/:clubId/temp", function (req, res) {
  var _clubId = req.params.clubId;
  _app_modules.client.get("tempsess#" + _clubId, function (err, data) {
    if (data) {
      _app_modules.client.setex("tempsess#" + _clubId, 300, data, function (err) {
        if (err) console.log(err);
      });
      res.status(200).send(JSON.parse(data));
    } else {
      res.status(200).send("no data cached");
      res.end();
    }
  });
}).delete("/:clubId/temp", function (req, res) {
  var _clubId = req.params.clubId;
  _app_modules.client.del(_clubId, function () {
    _app_modules.client.del("tempsess#" + _clubId, function () {
      res.status(202);
    });
  });
}).post("/:clubId/players/new", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var clubId = req.params.clubId,
      data = req.body.player;
  _club2.default.addPlayer(clubId, data).then(function (club) {
    res.status(200).send(club);
  }).catch(function (err) {
    if (_player) {
      _player2.Player.remove({ "_id": _player._id });
    }
    res.status(422).send(err);
  }).catch(function (err) {
    res.status(500).send(err);
  });
}).delete("/sessions/:id", function (req, res) {
  var id = req.params.id;
  _roundrobin2.default.deleteRoundRobin(clubId, id).then(function (session) {
    res.status(200).send(id);
    res.end();
  }).catch(function (err) {
    res.status(500);
    res.end();
  });
}).post("/:clubId/sessions/:id", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var id = req.params.id;
  var clubId = req.params.clubId;
  var _req$body$result = req.body.result;
  var date = _req$body$result.date;
  var data = _req$body$result.data;
  var ratingUpdateList = _req$body$result.ratingUpdateList;


  var promiseResults = [];
  _club2.default.postPlayersRating(clubId, ratingUpdateList, date).then(function (club) {
    return _roundrobin2.default.saveResult(id, data);
  }).then(function (session) {
    res.status(200).send(session);
  }).catch(function (err) {
    console.log(err);
    res.status(422).send(err);
  });
}).patch("/:clubId/sessions/:id", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var id = req.params.id,
      data = req.body.data,
      ratingUpdateList = req.body.ratingUpdateList;

  var promiseResults = [];
  for (var player in ratingUpdateList) {
    promiseResults.push(_player2.Player.updateHistory(player, ratingUpdateList[player]));
  }
}).post('/new', _app_modules.parseUrlEncoded, function (req, res) {
  var data = req.body.user;
  if (data.password <= 8) {
    res.status(422).send("Password must be 8 characters long\n" + "Must consist of at least:\n\t1) One special character (*!@$.^)\n\t" + "2) One Capital Letter\n\t3) One Lowercase Letter\n\t4) One Number");
  }
  var newClub = new _club2.default(_defineProperty({
    username: data.username,
    clubName: data.club,
    location: { city: data.city,
      state: data.stateName
    }
  }, 'clubName', data.clubName));

  _club2.default.generatePasswordDigest(data.password).then(function (digest) {
    newClub.passwordDigest = digest;
    return newClub.save();
  }).then(function (club) {
    _app_modules.clubMethods.logIn(res, club);
  }).catch(function (err) {
    res.status(422).send(err);
    res.end();
  });
});

exports.default = router;