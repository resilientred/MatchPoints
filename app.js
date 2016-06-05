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
import userMethoding from './app/api/userMethods';
import userRouting from "./app/api/userRoutes";
import sessionRouting from "./app/api/session";
import clubRouting from "./app/api/club";

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);
const csrfProtection = csrf({ cookie: true })
const userMethods = new userMethoding(app);
const sessionRoutes = sessionRouting(app, userMethods);
const userRoutes = userRouting(app, userMethods);
const clubRoutes = clubRouting(app).routes;


mongoose.connect('mongodb://localhost/roundrobindb');
app.use(cookieParser());
app.use(csrf({ cookie: true, ignoreMethods: ['GET', 'DELETE'] }));
// app.use(function (err, req, res, next) {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err);

//   res.status(403).send("Invalid session token");
// })
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
app.use('/api/club', clubRoutes);
app.use('/session', sessionRoutes);
app.use('/user', userRoutes);
app.use('/*', (req, res, next) => {
  let origUrl = req.originalUrl;
  let redirectURL = origUrl.match(/^(\/login|\/signup|\/players)$/);
  if (!redirectURL){
    console.log("path don't match");
    next();
    return;
  }
  let cookie = req.cookies.matchpoint_session;
  if (!cookie && redirectURL[0] === "/players"){
    console.log("redirecing to login");
    res.redirect("/login");
    res.end();
  } else if (cookie && redirectURL[0] !== "/players") {
    console.log("redirecting to players");
    res.redirect("/players");
    res.end()
  } else {
    console.log("route check..sending to next")
    next();
  }
  
});

app.get('/form', (req, res) => {
  console.log("sent csrf");
  res.status(200).send({ csrfToken: req.csrfToken() })
  res.end();
  //everytime when a form mounts...
  //even if an error is flashed...should refetch..
})

app.get('*', (req, res) => {
  console.log("Sending file index.html...");
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  res.end();
});  

app.listen(port, () => {
  console.log('listening on port 3000...');
});



