import mongoose from "mongoose";
import URLSafeBase64 from "urlsafe-base64";
import crypto from "crypto";
import bcrypt from "bcrypt-as-promised";
import shortid from "shortid";
import { playerSchema, Player } from "./player";
import { History } from "./history";

mongoose.Promise = require("bluebird");

const saltRounds = 10;
const Schema = mongoose.Schema;
const clubSchema = new Schema({
  username: {
    type: String,
    required: [true, "username required"],
    index: { unique: [true, "Username has been taken."] },
    min: [8, "has to be 8 characters long"]
  },
  passwordDigest: { type: String, required: true },
  sessionToken: { type: String, default: URLSafeBase64.encode(crypto.randomBytes(32)) },
  clubName: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true }
  },
  id: { type: String, default: shortid.generate, index: true },
  players: [playerSchema]
});

clubSchema.statics.resetSessionToken = function(club) {
  const token = URLSafeBase64.encode(crypto.randomBytes(32));
  return this.update(
    { username: club.username },
    { sessionToken: token }
  );
};
clubSchema.statics.findPlayers = function(clubId) {
  return this.findOne({ _id: clubId }, { players: true });
};

clubSchema.statics.addPlayer = function(clubId, player) {
  const newPlayer = new Player({ name: player.name, rating: player.rating });
  newPlayer.markModified("player");
  return this.findOneAndUpdate(
    { _id: clubId },
    { $push: { players: newPlayer } },
    { new: true }
  ).then((club) => {
    return new Promise((resolve) => {
      resolve(club, newPlayer);
    });
  });
};

clubSchema.statics.addPlayers = function(clubId, players) {
  return this.findOneAndUpdate(
    { _id: clubId },
    { $push: { players: { $each: players } } },
    { new: true, select: "players" }
  );
};

clubSchema.statics.postPlayersRating = function(clubId, updateList, date) {
  return this.findOne({ _id: clubId }).then((club) => {
    const players = club.players;
    for (let i = 0; i < players.length; i++) {
      const curPlayer = players[i];
      if (updateList[curPlayer._id]) {
        const updatedRating = +updateList[curPlayer._id].change + curPlayer.rating;
        const newHistory = new History({
          date: date,
          oldRating: curPlayer.rating,
          newRating: updatedRating,
          ratingChange: +updateList[curPlayer._id].change
        });
        newHistory.markModified("history");
        curPlayer.ratingHistory.push(newHistory);
        curPlayer.rating = updatedRating;
        curPlayer.markModified("player");
      }
    }
    return club.save();
  });
};
clubSchema.statics.removePlayer = function(clubId, id) {
  return this.findOneAndUpdate(
    { _id: clubId },
    { $pull: { players: { _id: id } } },
    { new: true }
  );
};

clubSchema.statics.updatePlayer = function(clubId, id, player) {
  return this.findOneAndUpdate(
    { _id: clubId, "players._id": id },
    { $set: { "players.$.rating": player.rating, "players.$.name": player.name } },
    { new: true }
  );
};

clubSchema.methods.isPassword = function(password) {
  return bcrypt.compare(password, this.passwordDigest);
};

clubSchema.statics.findByUsernameAndPassword = function(username) {
  return this.findOne({ username: username });
};

clubSchema.statics.findBySessionToken = function(sessionToken) {
  return this.findOne(
    { sessionToken: sessionToken },
    { passwordDigest: false, sessionToken: false }
  );
};

clubSchema.statics.generatePasswordDigest = function(password) {
  return bcrypt.hash(password, saltRounds);
};

clubSchema.statics.findClub = function(id) {
  return this.find({ _id: id }, { passwordDigest: false, sessionToken: false });
};
clubSchema.statics.findAll = function() {
  return this.find({},
    { passwordDigest: false, sessionToken: false, username: false, players: false }
  );
};

const Club = mongoose.model("Club", clubSchema);

export default Club;
