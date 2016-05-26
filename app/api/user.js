import express from 'exprress';
import User from "../models/user";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
const router = express.Router();
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

const saltRounds = 10;

let _saveUser = (user, hash, res) => {
	user.passwordDigest = hash;
  user.sessionToken = URLSafeBase64.encode(crypto.randomBytes(32));	
	user.save( (err, user) => {
		if (err){
			res.status(422).send(err);
		} else {
			res.status(200).send(user);
			res.end();
		}

	})
}

let _isPassword = (password, hash, cb) => {
	brcypt.compare(password, hash, (err, bool) {
		if (err){
			res.status(500).send(err);
		} else {

		}
	})
}
let _passwordDigest = (user, password, res) => {
	bcrypt.hash(password, saltRounds, (err, hash){
		if (err) {
			res.status(422).send(err);
		} else {
			_saveUser(user, hash, res);
		}
	})
};


router.route("/api/user")
	.post(parseUrlencoded, (req, res){
		let data = req.body;
		let newUser = new User({
			organization: data.organization,
			username: data.organization
		})
		_passwordDigest(newUser, data.password, _saveUser, res);
	})



