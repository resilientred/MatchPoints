import express from 'express';
import { router } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
import mongoose from 'mongoose';
import Player from "./app/models/player";

const app = express();
const compiler = webpack(config);

mongoose.connect('mongodb://localhost/roundrobindb');
app.use(express.static(__dirname + "/public"));
app.use(webpackMiddleware(compiler));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.route("/api/players")
  .get((req, res)=>{
	Player.find(function(err, players){
		if (err) {
			console.log(err);
		} else {
			res.json(players);
		}
	})
})
	.post((req, res)=>{

})
	.delete((req, res)=>{

})
	.patch((req, res)=>{

});

app.listen(3000, () => {
	console.log('listening on port 3000...');
});



