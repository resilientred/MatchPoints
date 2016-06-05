import express from 'express';
import BodyParser from 'body-parser';
import UserModel from '../models/user';

const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});

function sessionRoutes(app, userMethods){
  return (
    router.post("/new", parseUrlEncoded, (req, res) => {
      let data = req.body;

      app.once('passwordChecked', (bool, user) => {
        if (!bool){
          console.log("password error");
          res.status(404).send("Username or password error.");
          res.end();
        } else {
          userMethods.logIn(res, user);
        }
      })

      userMethods._findUser(data.username, data.password, 
            userMethods.logIn.bind(null, res));
    })
    .delete("/", (_, res) => {
      userMethods.logOut();
      app.once("loggedOut", () => {
        console.log("clearing cookie at logout")
        res.clearCookie("matchpoint_session").send("");
        res.end();
      })        
    }
  )
    )
} 


export default sessionRoutes;