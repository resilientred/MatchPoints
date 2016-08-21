"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _player = require("./player");

var _history = require("./history");

var _urlsafeBase = require("urlsafe-base64");

var _urlsafeBase2 = _interopRequireDefault(_urlsafeBase);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _bcryptAsPromised = require("bcrypt-as-promised");

var _bcryptAsPromised2 = _interopRequireDefault(_bcryptAsPromised);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = require('bluebird');
var saltRounds = 10;
var Schema = _mongoose2.default.Schema;
var clubSchema = new Schema({
  username: { type: String, required: [true, "username required"], index: { unique: [true, "Username has been taken."] }, min: [8, "has to be 8 characters long"] },
  passwordDigest: { type: String, required: true },
  sessionToken: { type: String, default: _urlsafeBase2.default.encode(_crypto2.default.randomBytes(32)) },
  clubName: { type: String, required: true },
  location: { city: { type: String, required: true },
    state: { type: String, required: true }
  },
  id: { type: String, default: _shortid2.default.generate, index: true },
  players: [_player.playerSchema]
});

clubSchema.statics.resetSessionToken = function (club) {
  var token = _urlsafeBase2.default.encode(_crypto2.default.randomBytes(32));
  return this.update({ "username": club.username }, { sessionToken: token });
};
clubSchema.statics.findPlayers = function (clubId) {
  console.log("finding players...", clubId);
  return this.findOne({ _id: clubId }, { players: true });
};
clubSchema.statics.addPlayer = function (clubId, player) {
  var newPlayer = new _player.Player({ name: player.name, rating: player.rating });
  newPlayer.markModified("player");
  return this.findOneAndUpdate({ "_id": clubId }, {
    $push: { "players": newPlayer }
  }, { new: true });
};
clubSchema.statics.updatePlayer = function (clubId, player) {
  return this.update({ "_id": clubId, "players.id": player.id }, { $set: { "players.$": player } });
};
clubSchema.statics.postPlayersRating = function (clubId, updateList, date) {
  return this.findOne({ "_id": clubId }).then(function (club) {
    var players = club.players;
    for (var i = 0; i < players.length; i++) {
      var curPlayer = players[i];
      if (updateList[curPlayer._id]) {
        var updatedRating = +updateList[curPlayer._id].change + curPlayer.rating;
        var newHistory = new _history.History({
          date: date,
          oldRating: curPlayer.rating,
          newRating: updatedRating,
          ratingChange: +updateList[curPlayer._id].change });
        newHistory.markModified("history");
        curPlayer.ratingHistory.push(newHistory);
        curPlayer.rating = updatedRating; //-history.change
        curPlayer.markModified("player");
      }
    }
    console.log("saving....");
    return club.save();
  });
};

clubSchema.methods.isPassword = function (password) {
  return _bcryptAsPromised2.default.compare(password, this.passwordDigest);
};

clubSchema.statics.findByUsernameAndPassword = function (username) {
  return this.findOne({ "username": username });
};

clubSchema.statics.findBySessionToken = function (sessionToken) {
  return this.findOne({ "sessionToken": sessionToken }, { "passwordDigest": false, "sessionToken": false });
};

clubSchema.statics.generatePasswordDigest = function (password) {
  return _bcryptAsPromised2.default.hash(password, saltRounds);
};
clubSchema.statics.findClub = function (id) {
  return this.find({ "_id": id }, { "passwordDigest": false, "sessionToken": false });
};
clubSchema.statics.findAll = function () {
  return this.find({}, { "passwordDigest": false,
    "sessionToken": false,
    "username": false,
    "players": false
  });
};

var Club = _mongoose2.default.model('Club', clubSchema);

exports.default = Club;