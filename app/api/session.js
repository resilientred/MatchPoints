import express from 'express'
import ClubModel from '../models/club';
import { clubMethods, parseUrlEncoded, csrfProtection } from "../app_modules"

const router = express.Router();

router.post("/new", parseUrlEncoded, csrfProtection, (req, res) => {
  let data = req.body.user;
  clubMethods._findClub(data.username, data.password)
    .then((club) => {
      console.log("logging in...")
      clubMethods.logIn(res, club);
    }).catch((err)=>{
      res.status(404).send("Username or password error.");
      res.end();
    });
}).delete("/", (_, res) => {
  clubMethods.logOut().then(() => {
    console.log("clearing cookie")
    res.clearCookie("matchpoint_session").send("");
    res.end();
  }).catch((err)=>{
    res.status(404).send(err);
  });  
})



export default router;