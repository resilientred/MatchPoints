import ClubModel from "../models/club";
import URLSafeBase64 from 'urlsafe-base64';
import crypto from 'crypto';

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
      let sessionToken = club.sessionToken; 
      this._currentClub = club;
      
      delete this._currentClub.sessionToken;
      delete this._currentClub.passwordDigest;

      console.log("sending cookie");
      res.cookie("matchpoint_session", sessionToken, 
            { maxAge: 14 * 24 * 60 * 60 * 1000 }).send(this._currentClub);
      return new Promise((resolve, reject) => {
		resolve("ok");
	});
    }
  }

  _findClub(username, password){
    console.log(username + " " + password)
    var _club;
    return ClubModel.findByUsernameAndPassword.call(ClubModel, username)
      .then((club) => {
        _club = club;
        return club.isPassword(password);
      }).then(() => {
	console.log("password correct");
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

