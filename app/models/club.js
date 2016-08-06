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

let clubSchema = new Schema({
  username: {type: String, required: true, index: { unique: true }},
  passwordDigest: {type: String, required: true},
  sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))},
  clubName: { type: String, required: true },
  location: { city: String, state: String },
  id: { type: String, default: shortid.generate, index: true },
  players: [playerSchema]
});

clubSchema.statics.resetSessionToken = function(club){
  let token = URLSafeBase64.encode(crypto.randomBytes(32));
  return this.update({ "username": club.username}, {sessionToken: token});
}
clubSchema.statics.findPlayers = function(clubId){
  return this.find({"_id": clubId}, {"players": true });
};
clubSchema.statics.addPlayer = function(clubId, player){
  return this.update({"_id": clubId}, {
    "$push": {"players": player}
  });
}
clubSchema.statics.updatePlayer = function(clubId, player) {
  return this.update({"_id": clubId, "players.id": player.id}, 
    { $set: { "players.$": player }})
}

clubSchema.statics.addHistory = function(clubId, playerId, ratingDetail) {
  let newHistory = new History({
    date: ratingDetail.date, 
    ratingChange: ratingDetail.ratingChange,
    newRating: ratingDetail.ratingBefore + ratingDetail.ratingChange
  });

  return newHistory.save()
    .then( () => {
      this.update({ "_id": clubId, "players.id": playerId }, { 
        $inc: { "players.$.rating": ratingDetail.ratingChange },
        $push: { "players.$.ratingHistory": newHistory } 
      });
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


const Club = mongoose.model('Club', clubSchema);

export default Club; 