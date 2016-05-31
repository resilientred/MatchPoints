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
    UserModel.findBySessionToken.call(UserModel, req.cookies.matchpoint_seesion, this.foundUser);
  }
  foundUser = (user) => {
    this._currentUser = user;
    this.app.emit('foundUser', this._currentUser);
  }
  _saveUser = (user, hash) => {
    user.passwordDigest = hash;
    user.save( (err, user) => {
      if (err){
        this.app.emit("userError");
      } else {
        this.app.emit("savedUser", user);
      }
    })
  }
  logOut = () => {
    let user = this._currentUser; 
    this._currentUser = null;
    UserModel.resetSessionToken.call(UserModel, user, this._loggedOut);    
  }
  _loggedOut = () => {
    this.app.emit("loggedOut");
  }
  
  logIn = (res, user) => {
    if (!user) {
      res.status(404).send("User not found");
      res.end();
    } else {
      this._currentUser = Object.assign({}, user.toObject());
      delete this._currentUser.sessionToken;
      delete this._currentUser.passwordDigest;
      
      res.cookie("matchpoint_session", user.sessionToken, 
            { maxAge: 14 * 24 * 60 * 60 * 1000 });
      res.redirect("/players");
    }
  }

  _findUser(username, password){
    UserModel.findByUsernameAndPassword.call(UserModel, username, this._isPassword.bind(null, password));
  }
  _foundUser(user){
    this.app.emit("foundDigest", user);
  }
  _success = (res, user) => {
    res.status(200).send(user);
  }
  _isPassword = (password, err, user) => {
    user.isPassword(password, this.passwordChecked.bind(this, user))
  }
  passwordChecked = (user, err, bool) => {
    if (err){
      this.app.emit('logInError', err);
    } else {
      this.app.emit('passwordChecked', bool, user);    
    }
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

