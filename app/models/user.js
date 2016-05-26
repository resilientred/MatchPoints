import mongoose from 'mongoose';
import crypto from 'crypto';
const Schema = mongoose.Schema;

let userSchema = new Schema({
	organization: {type: String, required: true},
	username: {type: String, required: true},
	passwordDigest: {type: String, required: true},
	sessionToken: {type: String, default}
});

let User = mongoose.model("User", userSchema);
userSchema.methods.createSessionToken = () => {
	//what is "this" within this function
}
export default User;