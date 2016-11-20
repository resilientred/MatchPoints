import express from "express";
import { jsonParser, csrfProtection } from "../helpers/appModules";
import ClubHelper from "../helpers/clubHelper";
import Club from "../models/club";

const router = express.Router();

router.post("/new", jsonParser, csrfProtection, (req, res) => {
  const data = req.body.user;
  Club.findByUsernameAndPassword(data.username, data.password)
    .then((club) => {
      console.log(club)
      ClubHelper.logIn(club, res);
    })
    .catch((error) => {
      res.status(404).send("Username or password error.");
      res.end();
    });
}).delete("/", (req, res) => {
  Club.resetSessionTokenWithOldToken(req.cookies.matchpoint_session)
    .then(() => {
      res.clearCookie("matchpoint_session").send("");
      res.end();
    }).catch((err) => {
      res.clearCookie("matchpoint_session");
      res.status(404).send(err);
    });
});

export default router;
