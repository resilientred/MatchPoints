import express from 'express';
import UserModel from "../models/user";
import UserMethods from "./userMethods";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const router = express.Router();
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

function userRoutes(userMethods){
	return (
		router.post("/new", parseUrlencoded, (req, res) => {
	    var data = req.body;
	    var newUser = new UserModel({
	      organization: data.organization,
	      username: data.username
	    })

	    UserModel.generatePasswordDigest(data.password)
	    	.then((digest) => {
	    		newUser.passwordDigest = digest;
	    		return newUser.save();//do I need to call it?
	    	}).catch((err)=>{
	    		res.status(500).send(err);
	    		res.end();
	    	}).then((user)=> {
	    		userMethods.logIn(res, user);
	    	}).catch((err)=>{
	    		res.status(422).send(err);
	    		res.end();
	    	})
	    	// , userMethods._saveUser);
	  }).get("", (req, res) => {
	  	userMethods.currentUser(req)
	  		.then((currentUser) => {
	  			res.status(200).send(currentUser);
		  		res.end();
	  		});
	  })
	)
};

export default userRoutes;

