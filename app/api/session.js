import express from 'express';
import BodyParser from 'body-parser';
import UserModel from '../models/user';

const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});

function sessionRoutes(app, userMethods){
	return (
		router.post("/new", parseUrlEncoded, (req, res) => {
			let data = req.body;
			UserModel.findByPasswordAndUsername(data.username, data.password, 
						UserMethods.logIn.bind(null, res))
		})
		.delete("/", (_, res) => {
			UserMethods.logOut(res);
			app.on("loggedOut", () => {
				res.status(200).send("Successfully logged out!");
		    res.end();
			})				
		}
	)
		)
} 


export default sessionRoutes;