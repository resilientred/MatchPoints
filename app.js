import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import csrf from 'csurf';
import mongoose from 'mongoose';
import sassMiddleware from 'node-sass-middleware';
import cookieParser from 'cookie-parser';

import config from './webpack.config.js';
import routes from './app/api/players';
import { userRoutes, userClass } from './app/api/user';
import { sessionRoutes } from "./app/api/session";
const app = express();
const compiler = webpack(config);
const csrfProtection = csrf({ cookie: true })
const User = new userClass();

mongoose.connect('mongodb://localhost/roundrobindb');
app.use(cookieParser());
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
app.use('/api', routes);
app.use('/session', sessionRoutes);
app.use('/', userRoutes);
app.use('*', (req, res, next) => {
	let origUrl = req.originalUrl;
	let needToRedirect = !/\/|\/login|\/form|\/signup/.test(origUrl);
	if (!needToRedirect && !User.currentUser(req)){
		res.redirect("/login");
	}
	next();
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/login.html'));
})
app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/signup.html'));
})
app.get('/form', (req, res) => {
	res.render('send', { csrfToken: req.csrfToken() })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});  

app.listen(3000, () => {
  console.log('listening on port 3000...');
});



