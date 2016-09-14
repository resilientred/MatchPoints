import express from 'express'
import ClubModel from '../models/club';
import { clubMethods, parseUrlEncoded, csrfProtection } from "../helpers/app_modules"

const router = express.Router();

router.post("/new", parseUrlEncoded, csrfProtection, (req, res) => {
  let data = req.body.user;
  clubMethods._findClub(data.username, data.password)
    .then((club) => {
      clubMethods.logIn(res, club);
    }).catch((err)=>{
      res.status(404).send("Username or password error.");
      res.end();
    });
}).delete("/", (req, res) => {
  clubMethods.logOut(req.cookies.matchpoint_session).then(() => {
    res.clearCookie("matchpoint_session").send("");
    res.end();
  }).catch((err)=>{
    res.status(404).send(err);
  });  
})



export default router;
