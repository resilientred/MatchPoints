import UserModel from "../models/user";
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';


class UserMethods {
  constructor(app){
    this.app = app;
    this._currentUser = null;
  }

  currentUser = (req) => {
    if (this._currentUser) {
      return new Promise((resolve, reject)=>{
        resolve(this._currentUser);
      });
    } else {
      return UserModel.findBySessionToken.call(UserModel, req.cookies.matchpoint_session);
    }
  }
  
  foundUser = (err, user) => {
    if (err) console.log("not found");
    this._currentUser = user;
    console.log(this._currentUser);
    this.app.emit('foundUser', this._currentUser);
  }
  
  logOut = () => {
    let user = this._currentUser; 
    this._currentUser = null;
    return UserModel.resetSessionToken.call(UserModel, user);
  }


  logIn = (res, user) => {
    if (!user) {
      res.status(404).send("User not found");
      res.end();
    } else {
      this._currentUser = Object.assign({}, user.toObject());
      delete this._currentUser.sessionToken;
      delete this._currentUser.passwordDigest;
      console.log("At logIn...setting cookie");
      res.cookie("matchpoint_session", user.sessionToken, 
            { maxAge: 14 * 24 * 60 * 60 * 1000 }).send(this._currentUser);
    }
  }

  _findUser(username, password){
    var _user;
    return UserModel.findByUsernameAndPassword.call(UserModel, username)
      .then((user) => {
        _user = user;
        return user.isPassword(password);
      }).catch((err)=>{
      }).then(() => {
        return new Promise((resolve, reject) => {
          resolve(_user);
        })
      }, err => {
        return new Promise((_, reject) => {
          reject(err);
        })
      });
  }



}




export default UserMethods;

