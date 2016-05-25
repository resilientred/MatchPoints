import Express from 'express';
const router = express.Router();
import Mongoose from 'mongoose';
import Player from '../models/player.js';


router.get('/', (req, res) => {
	Player.find( (err, players) => {
		res.json(players);
	});
});

export default router;
