import express from 'express';
import BodyParser from 'body-parser';
import ClubModel from '../models/club';
const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});

function sessionRoutes(clubMethods) {
  return (
    router.post("/new", parseUrlEncoded, (req, res) => {
      let data = req.body;

      clubMethods._findClub(data.username, data.password)
        .then((club) => {
          clubMethods.logIn(res, club);
        }).catch((err)=>{
          console.log("at root catching err");
          res.status(404).send("Username or password error.");
          res.end();
        });
    })
    .delete("/", (_, res) => {
      clubMethods.logOut().then(() => {
        res.clearCookie("matchpoint_session").send("");
        res.end();
      }).catch((err)=>{
        res.status(404).send(err);
      });  
    }
  )
    )
} 


export default sessionRoutes;