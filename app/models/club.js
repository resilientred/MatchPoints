import mongoose from 'mongoose';
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
  city: { type: String, required: true },
  state: { type: String, required: true },
  id: { type: String, default: shortid.generate }
});

clubSchema.statics.resetSessionToken = function(club){
    let token = URLSafeBase64.encode(crypto.randomBytes(32));
    return this.update({ "username": club.username}, {sessionToken: token});
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
  return this.find({"_id": id});
};


const Club = mongoose.model('Club', clubSchema);

export default Club; 