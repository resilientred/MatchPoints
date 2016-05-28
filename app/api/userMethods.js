import UserModel from "../models/user";
import bcrypt from 'bcrypt';
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
const saltRounds = 10;
class UserMethods {
  constructor(app){
    this.app = app;
    this._currentUser = null;
  }
  currentUser(req){
    if (this._currentUser) {
      this.app.emit('foundUser', this._currentUser);
      return;
    }
    UserModel.findBySessionToken(req.cookies.matchpoint_seesion, this.foundUser);
  }
  foundUser = (user) => {
    this._currentUser = user;
    this.app.emit('foundUser', this._currentUser);
  }
  _saveUser = (user, hash) => {
    user.passwordDigest = hash;
    user.sessionToken = URLSafeBase64.encode(crypto.randomBytes(32)); 
    user.save( (err, user) => {
      if (err){
        this.app.emit("userError");
      } else {
        this.app.emit("savedUser", user);
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
    this._currentUser = user;
    res.cookie("matchpoint_session", user.sessionToken, 
          { maxAge: 14 * 24 * 60 * 60 * 1000 });
    res.status(200).send(user);
    res.end();
  }

  _findUser = (res) => {
    UserModel.findByPasswordAndUsername(username, password, logIn, res)
  }
  _success = (res, user) => {
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
  _passwordDigest = (user, password, cb) => {
    bcrypt.hash(password, saltRounds, (err, hash)=>{
      if (err) {
        res.status(422).send(err);
      } else {
        this._saveUser(user, hash);
      }
    })
  };
}




export default UserMethods;

