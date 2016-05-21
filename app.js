import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
import mongoose from 'mongoose';
const db = mongoose.connection;
const app = express();
const compiler = webpack(config);

db.on('error', ()=> {
	console.log("Cannot access db.")
});

app.use(express.static(__dirname + "/public"));
app.use(webpackMiddleware(compiler));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/api/users", (req, res)=>{

})
app.listen(3000, () => {
	console.log('listening on port 3000...');
});



