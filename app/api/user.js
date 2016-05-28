import express from 'express';
import UserModel from "../models/user";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
const router = express.Router();
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

const saltRounds = 10;
class User {
  constructor = () => {
    this._currentUser = null;
  }

  currentUser = (req) => {
    if (this._currentUser) return this._currentUser;

    this._currentUser = UserModel.findBySessionToken(req.cookies.matchpoint_seesion);
    if (this._currentUser) return this._currentUser;

    return null;
  }

  _saveUser = (user, hash, res) => {
    user.passwordDigest = hash;
    user.sessionToken = URLSafeBase64.encode(crypto.randomBytes(32)); 
    user.save( (err, user) => {
      if (err){
        res.status(422).send(err);
      } else {
        logIn(res, user);
      }
    })
  }
  logOut = (res) => {
    let user = this._currentUser; 
    this._currentUser = null;
    UserModel.resetSessionToken(user, _loggedOut.bind(null, res));    
  }
  _loggedOut = (res) => {
    res.status(200).send("Successfully logged out!");
    res.end();
  }
  logIn = (res, user) => {
    if (!user) res.status(404).send("User not found");
    res.cookie("matchpoint_session", user.sessionToken, 
          { maxAge: 14 * 24 * 60 * 60 * 1000 });
    res.status(200).send(user);
    res.end();
  }

  _findUser = (res) => {
    UserModel.findByPasswordAndUsername(username, password, logIn, res)
  }
  _success = (res, user) => {
    //user is 2nd because that's what's passed back from update
    res.status(200).send(user);
  }
  _isPassword = (password, hash, cb) => {
    brcypt.compare(password, hash, (err, bool) => {
      if (err){
        throw err;
        return;
      } else {
        cb(bool);
      }
    })
  }
  _passwordDigest = (user, password, res) => {
    bcrypt.hash(password, saltRounds, (err, hash)=>{
      if (err) {
        res.status(422).send(err);
      } else {
        _saveUser(user, hash, res);
      }
    })
  };
}


router.route("user")
  .post(parseUrlencoded, (req, res) => {
    let data = req.body;
    let newUser = new UserModel({
      organization: data.organization,
      username: data.organization
    })
    _passwordDigest(newUser, data.password, _saveUser, res);
  })

export { router as userRoutes, User as userClass};

