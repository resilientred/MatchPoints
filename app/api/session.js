import express from 'express'
import ClubModel from '../models/club';
import { clubMethods, parseUrlEncoded, csrfProtection } from "../app_modules"

const router = express.Router();

router.post("/new", parseUrlEncoded, csrfProtection, (req, res) => {
  let data = req.body.user;
  console.log(data);
  clubMethods._findClub(...data)
    .then((club) => {
      clubMethods.logIn(res, club);
    }).catch((err)=>{
      res.status(404).send("Username or password error.");
      res.end();
    });
}).delete("/", (_, res) => {
  clubMethods.logOut().then(() => {
    res.clearCookie("matchpoint_session").send("");
    res.end();
  }).catch((err)=>{
    res.status(404).send(err);
  });  
})



export default router;