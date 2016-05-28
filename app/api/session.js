import express from 'express';
import BodyParser from 'body-parser';
import { User } from './user';
import UserModel from '../models/user';

const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});

function sessionRoutes(app){
	return (
		router.post("/new", parseUrlEncoded, (req, res) => {
			let data = req.body;
			UserModel.findByPasswordAndUsername(data.username, data.password, 
						User.logIn.bind(null, res))
		})
		.delete("/", (_, res) => {
			User.logOut(res);
			app.on("loggedOut", () => {
				res.status(200).send("Successfully logged out!");
		    res.end();
			})				
		}
	)
		)
} 


export default sessionRoutes;