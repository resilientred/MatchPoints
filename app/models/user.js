import mongoose from 'mongoose';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
import bcrypt from 'bcrypt-as-promised';
const saltRounds = 10;
const Schema = mongoose.Schema;

let userSchema = new Schema({
    organization: {type: String, required: true},
    username: {type: String, required: true, index: { unique: true }},
    passwordDigest: {type: String, required: true},
    sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))}
});


userSchema.statics.resetSessionToken = function(user){
    let token = URLSafeBase64.encode(crypto.randomBytes(32));
    return this.update({ "username": user.username}, {sessionToken: token});
        
}

userSchema.methods.isPassword = function(password){
	return bcrypt.compare(password, this.passwordDigest); 
}
userSchema.statics.findByUsernameAndPassword = function(username){
    return this.findOne({ "username": username });
}

userSchema.statics.findBySessionToken = function(sessionToken){
    return this.findOne({"sessionToken": sessionToken}, 
                  {"organization": true, "username": true});
}

userSchema.statics.generatePasswordDigest = function(password){
    return bcrypt.hash(password, saltRounds);
}
let User = mongoose.model("User", userSchema);
export default User;