import mongoose from 'mongoose';
import { playerSchema, Player } from "./player"
import { History, historySchema } from "./history"
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
import bcrypt from 'bcrypt-as-promised';
import shortid from 'shortid'

mongoose.Promise = require('bluebird');
const saltRounds = 10;
const Schema = mongoose.Schema;
const clubSchema = new Schema({
  username: {type: String, required: [true, "username required"], index: { unique: [ true, "Username has been taken."] }, min: [8, "has to be 8 characters long"]},
  passwordDigest: {type: String, required: true},
  sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))},
  clubName: { type: String, required: true},
  location: { city: {type: String, required: true},
              state: {type: String, required: true}
            },
  id: { type: String, default: shortid.generate, index: true },
  players: [playerSchema]
});

clubSchema.statics.resetSessionToken = function(club){
  let token = URLSafeBase64.encode(crypto.randomBytes(32));
  return this.update({ "username": club.username}, {sessionToken: token});
}
clubSchema.statics.findPlayers = function(clubId){
  console.log("finding players...", clubId)
  return this.findOne({_id: clubId}, {players: true});
};
clubSchema.statics.addPlayer = function(clubId, player){
  let newPlayer = new Player({name: player.name, rating: player.rating})
  newPlayer.markModified("player");
  return this.findOneAndUpdate({"_id": clubId}, {
    $push: {"players": newPlayer}
  }, {new: true});
}
clubSchema.statics.updatePlayer = function(clubId, player) {
  return this.update({"_id": clubId, "players.id": player.id}, 
    { $set: { "players.$": player }})
}
clubSchema.statics.postPlayersRating = function(clubId, updateList, date) {
  return this.findOne({"_id": clubId}).then((club) => {
      let players = club.players;
      for (let i = 0; i < players.length; i++) {
        let curPlayer = players[i];
        if (updateList[curPlayer._id]){
          let updatedRating = +updateList[curPlayer._id].change + curPlayer.rating;
          let newHistory = new History({
            date: date, 
            oldRating: curPlayer.rating, 
            newRating: updatedRating,
            ratingChange: +updateList[curPlayer._id].change});
          newHistory.markModified("history");
          curPlayer.ratingHistory.push(newHistory);
          curPlayer.rating = updatedRating;//-history.change
          curPlayer.markModified("player");
        }
      }
      console.log("saving....")
      return club.save();
    })
}

clubSchema.statics.updateHistory = function(clubId, playerId, ratingDetail) {
  this.update({ "_id": clubId, "players.id": playerId, "players.history.id": historyId }, {
    $inc: { "players.$.rating": ratingDetail.ratingChange - history.ratingChange },
    $update: { "players.$.history.$": 1 }
  })
  //get logic working
}
clubSchema.methods.isPassword = function(password){
  return bcrypt.compare(password, this.passwordDigest); 
}

clubSchema.statics.findByUsernameAndPassword = function(username){
  return this.findOne({ "username": username });
}

clubSchema.statics.findBySessionToken = function(sessionToken){
    return this.findOne({"sessionToken": sessionToken}, 
                  {"passwordDigest": false, "sessionToken": false});
}

clubSchema.statics.generatePasswordDigest = function(password){
    return bcrypt.hash(password, saltRounds);
}
clubSchema.statics.findClub = function(id){
  return this.find({"_id": id}, {"passwordDigest": false, "sessionToken": false} );
};
clubSchema.statics.findAll = function(){
  return this.find({}, { "clubName": true });
};

const Club = mongoose.model('Club', clubSchema);

export default Club; 