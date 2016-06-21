import express from 'express';
import BodyParser from 'body-parser';
import UserModel from '../models/user';

const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});

function sessionRoutes(app, userMethods) {
  return (
    router.post("/new", parseUrlEncoded, (req, res) => {
      let data = req.body;

      userMethods._findUser(data.username, data.password)
        .then((user) => {
          userMethods.logIn(res, user);
        }).catch((err)=>{
          console.log("at root catching err");
          res.status(404).send("Username or password error.");
          res.end();
        });
    })
    .delete("/", (_, res) => {
      userMethods.logOut().then(() => {
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