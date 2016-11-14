import express from "express";
import { clubMethods, jsonParser, csrfProtection } from "../helpers/appModules";

const router = express.Router();

router.post("/new", jsonParser, csrfProtection, (req, res) => {
  const data = req.body.user;
  clubMethods.findClub(data.username, data.password)
    .then((club) => {
      clubMethods.logIn(res, club);
    }).catch(() => {
      res.status(404).send("Username or password error.");
      res.end();
    });
}).delete("/", (req, res) => {
  clubMethods.logOut(req.cookies.matchpoint_session).then(() => {
    res.clearCookie("matchpoint_session").send("");
    res.end();
  }).catch((err) => {
    res.status(404).send(err);
  });
});

export default router;
