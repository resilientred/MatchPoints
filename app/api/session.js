import express from 'express';
import BodyParser from 'body-parser';
import { User } from './user';
import UserModel from '../models/user';

const router = express.Router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});


router.post("/new", parseUrlEncoded, (req, res) => {
	let data = req.body;
	UserModel.findByPasswordAndUsername(data.username, data.password, 
				User.logIn.bind(null, res))
})

router.delete("/", (_, res) => {
	User.logOut(res);
})

export { router as sessionRoutes };