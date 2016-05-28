import mongoose from 'mongoose';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
const Schema = mongoose.Schema;

let userSchema = new Schema({
	organization: {type: String, required: true},
	username: {type: String, required: true},
	passwordDigest: {type: String, required: true},
	sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))}
});

userSchema.statics.resetSessionToken = (user, callback) => {
	let token = URLSafeBase64.encode(crypto.randomBytes(32));
	user.update({sessionToken: token}, callback);
}

userSchema.statics.findByPasswordAndUsername = (username, password, callback) => {
	User.find({"username": username, "password": password}, callback);
}

userSchema.statics.findBySessionToken = (sessionToken, callback) => {
	User.find({"sessionToken": sessionToken}, callback);
}
let User = mongoose.model("User", userSchema);
export default User;