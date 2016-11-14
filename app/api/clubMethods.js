import ClubModel from "../models/club";

class ClubMethods {
  constructor() {
    this.currentClubs = [];
  }

  currentClub = (req) => {
    const currentClub = this.currentClubs[req.cookies.matchpoint_session];
    if (currentClub) {
      return Promise.resolve(currentClub);
    }

    return ClubModel.findBySessionToken.call(ClubModel, req.cookies.matchpoint_session);
  }
  setCurrentClub(club, token) {
    this.currentClubs[token] = club;
    return club;
  }

  logOut = (token) => {
    const club = this.currentClubs[token];
    if (!club) {
      return Promise.resolve();
    }
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
      return Promise.resolve("ok");
    }
  }

  findClub(username, password) {
    let club;
    return ClubModel.findByUsernameAndPassword.call(ClubModel, username)
      .then((c) => {
        club = c;
        return club.isPassword(password);
      }).then(
        () => Promise.resolve(club),
        err => Promise.reject(err)
      );
  }
}

export default ClubMethods;
