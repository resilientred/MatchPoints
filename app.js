import express from 'express';
import path from 'path';
import pg from 'pg';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js'
const app = express();
const compiler = webpack(config);

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



