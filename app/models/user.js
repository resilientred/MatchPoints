import mongoose from 'mongoose';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    organization: {type: String, required: true},
    username: {type: String, required: true, index: { unique: true }},
    passwordDigest: {type: String, required: true},
    sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))}
});

userSchema.statics.resetSessionToken = function(user, callback){
    let token = URLSafeBase64.encode(crypto.randomBytes(32));
    this.update({ "username": user.username}, {sessionToken: token}, callback);
}

userSchema.methods.isPassword = function(password, cb){
	bcrypt.compare(password, this.passwordDigest, cb);
}
userSchema.statics.findByUsernameAndPassword = function(username, callback){
    this.findOne({ "username": username }, callback);
}

userSchema.statics.findBySessionToken = function(sessionToken, callback){
    this.find({"sessionToken": sessionToken}, callback);
}
let User = mongoose.model("User", userSchema);
export default User;