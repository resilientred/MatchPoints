import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
import mongoose from 'mongoose';
import sassMiddleware from 'node-sass-middleware';
import routes from './app/api/players.js';
import cookieParser from 'cookie-parser';
const app = express();
const compiler = webpack(config);
app.use(cookieParser());

mongoose.connect('mongodb://localhost/roundrobindb');
app.use(
  sassMiddleware({
    src: __dirname + "/sass",
    dest: __dirname + "/public/styles",
    prefix: '/styles',
    debug: true
  })
);

app.use(express.static(__dirname + "/public"));
app.use(webpackMiddleware(compiler));
app.use('/api', routes)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});  

app.listen(3000, () => {
  console.log('listening on port 3000...');
});



