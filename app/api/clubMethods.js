import ClubModel from "../models/club";
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';
// import { app } from "../app_modules"

class ClubMethods {
  constructor(){
    this._currentClub = null;
  }

  currentClub = (req) => {
    if (this._currentClub) {
      return new Promise((resolve, reject)=>{
        resolve(this._currentClub);
      });
    } else {
      return ClubModel.findBySessionToken.call(ClubModel, req.cookies.matchpoint_session);
    }
  }
  
  
  logOut = () => {
    var club = this._currentClub;
    if (!club) return new Promise((resolve, _) => { resolve() });
    this._currentClub = null;
    return ClubModel.resetSessionToken.call(ClubModel, club);
  }


  logIn = (res, club) => {
    if (!club) {
      throw new Error("log In error");
    } else {
      this._currentClub = Object.assign({}, club.toObject());
      delete this._currentClub.sessionToken;
      delete this._currentClub.passwordDigest;
      res.cookie("matchpoint_session", club.sessionToken, 
            { maxAge: 14 * 24 * 60 * 60 * 1000 }).redirect('/club');
    }
  }

  _findClub(username, password){
    var _club;
    return ClubModel.findByUsernameAndPassword.call(ClubModel, username)
      .then((club) => {
        _club = club;
        return club.isPassword(password);
      }).catch((err)=>{
      }).then(() => {
        return new Promise((resolve, reject) => {
          resolve(_club);
        })
      }, err => {
        return new Promise((_, reject) => {
          reject(err);
        })
      });
  }



}




export default ClubMethods;

