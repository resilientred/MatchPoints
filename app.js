import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import minify from 'express-minify'
import mongoose from 'mongoose'
import sassMiddleware from 'node-sass-middleware'
import cookieParser from 'cookie-parser'
import express from "express"
import config from './webpack.config.js'
import routes from './app/api/players'
import clubRoutes from "./app/api/club"
import sessionRoutes from "./app/api/session"
import { app, csrfProtection, clubMethods } from "./app/app_modules"
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/roundrobindb');
app.use(cookieParser());

// app.use((req, res, next) => {
//   let token = req.csrfToken();
//   res.cookie('XSRF-TOKEN', token);
//   res.locals.csrfToken = token;
//   next();
// })
// app.use(function (err, req, res, next) {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err);

//   res.status(403).send("Invalid session token");
// })
app.use('/favicon.ico', (req, res, next) => {
  res.end();
})
app.use(
  sassMiddleware({
    src: __dirname + "/sass",
    dest: __dirname + "/public/styles",
    prefix: '/styles',
    debug: true
  })
);

app.use(express.static(path.join(__dirname + "/public"), { maxAge: 86400000 }));
app.use(webpackMiddleware(compiler));
app.use('/api/clubs', clubRoutes);
app.use('/api/clubs/:clubId', routes);
app.use('/api/*', (req, res, next) => {
  res.status(404).send("Invalid routes");
  res.end();
})
app.use('/session', sessionRoutes);
app.use('/*', (req, res, next) => {
  var origUrl = req.originalUrl;
  console.log(origUrl);
  var redirectURL = origUrl.match(/^(\/$|\/login|\/signup)/);
  var currentClub;

  clubMethods.currentClub(req)
    .then((club) => {
      currentClub = club;
    }).catch((err) => {
      currentClub = null;
    }).then(() => {
      if (currentClub && redirectURL) {
        console.log("redirecting")
        res.redirect("/club");
        res.end();
      } else {
        next();
      }
    })
});

app.get('*', csrfProtection, (req, res) => {
  res.render("pages/index", { csrfToken: req.csrfToken() });
});  

app.listen(port, () => {
  console.log('listening on port 3000...');
});



