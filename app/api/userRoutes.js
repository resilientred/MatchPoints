import express from 'express';
import UserModel from "../models/user";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const router = express.Router();
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

function userRoutes(app, userMethods){
	return (
		router.post("/new", parseUrlencoded, (req, res) => {
	    let data = req.body;
	    let newUser = new UserModel({
	      organization: data.organization,
	      username: data.username
	    })
	    userMethods._passwordDigest(newUser, data.password, userMethods._saveUser);
	    app.once("savedUser", (user) => {
	    	userMethods.logIn(res, user);
	    })
	    app.once("userError", (err)=>{
	    	res.status(422).send(err);
	    	res.end();
	    })
	  })
	)
};

export default userRoutes;

