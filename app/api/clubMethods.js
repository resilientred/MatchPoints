import ClubModel from "../models/club";
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';

class ClubMethods {
  constructor(){
    this._currentClubs = [];
  }

  currentClub = (req) => {
    let currentClub = this._currentClubs[req.cookies.matchpoint_session];
    if (currentClub) {
      return new Promise((resolve, reject)=>{
        resolve(currentClub);
      });
    } else {
      return ClubModel.findBySessionToken.call(ClubModel, req.cookies.matchpoint_session);
    }
  }
  setCurrentClub(club, token){
    this._currentClubs[token] = club;
    return club;
  }
  
  logOut = (token) => {
    var club = this._currentClubs[token];
    if (!club) return new Promise((resolve, _) => { resolve() });
    delete this._currentClubs[token];
    return ClubModel.resetSessionToken.call(ClubModel, club);
  }


  logIn = (res, club) => {
    if (!club) {
      throw new Error("log In error");
    } else {
      let sessionToken = club.sessionToken; 
      
      delete club.sessionToken;
      delete club.passwordDigest;

      this._currentClubs[sessionToken] = club;
      res.cookie("matchpoint_session", sessionToken, 
            { maxAge: 14 * 24 * 60 * 60 * 1000 }).send(club);
      return new Promise((resolve, reject) => {
    		resolve("ok");
    	});
    }
  }

  _findClub(username, password){
    var _club;
    return ClubModel.findByUsernameAndPassword.call(ClubModel, username)
      .then((club) => {
        _club = club;
        return club.isPassword(password);
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

