import ClubModel from "../models/club";
import URLSafeBase64 from "urlsafe-base64";
import crypto from "crypto";

class ClubMethods {
  constructor() {
    this.currentClubs = [];
  }

  currentClub = (req) => {
    let currentClub = this.currentClubs[req.cookies.matchpoint_session];
    if (currentClub) {
      return new Promise((resolve, reject) => {
        resolve(currentClub);
      });
    } else {
      return ClubModel.findBySessionToken.call(ClubModel, req.cookies.matchpoint_session);
    }
  }
  setCurrentClub(club, token) {
    this.currentClubs[token] = club;
    return club;
  }

  logOut = (token) => {
    const club = this.currentClubs[token];
    if (!club) return new Promise((resolve, _) => {resolve()});
    delete this.currentClubs[token];
    return ClubModel.resetSessionToken.call(ClubModel, club);
  }

  logIn = (res, club) => {
    if (!club) {
      throw new Error("log In error");
    } else {
      const sessionToken = club.sessionToken;

      delete club.sessionToken;
      delete club.passwordDigest;

      this.currentClubs[sessionToken] = club;
      res.cookie("matchpoint_session", sessionToken,
            { maxAge: 14 * 24 * 60 * 60 * 1000 }).send(club);
      return new Promise((resolve, reject) => {
    		resolve("ok");
    	});
    }
  }

  _findClub(username, password) {
    let club;
    return ClubModel.findByUsernameAndPassword.call(ClubModel, username)
      .then((c) => {
        club = c;
        return club.isPassword(password);
      }).then(() => {
        return new Promise((resolve, reject) => {
          resolve(club);
        })
      }, (err) => {
        return new Promise((_, reject) => {
          reject(err);
        })
      });
  }
}

export default ClubMethods;
