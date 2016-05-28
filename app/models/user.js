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

let User = mongoose.model("User", userSchema);
userSchema.methods.resetSessionToken = (user, callback) => {
	let token = URLSafeBase64.encode(crypto.randomBytes(32));
	user.update({sessionToken: token}, callback);
}

userSchema.methods.findByPasswordAndUsername = (username, password, callback) => {
	User.find({"username": username, "password": password}, callback);
}

userSchema.method.findBySessionToken = (sessionToken, callback) => {
	User.find({"sessionToken": sessionToken}, callback);
}
export default User;