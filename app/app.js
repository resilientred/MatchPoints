import path from 'path'
import minify from 'express-minify'
import mongoose from 'mongoose'
import sassMiddleware from 'node-sass-middleware'
import cookieParser from 'cookie-parser'
import express from "express"
import { app, csrfProtection, clubMethods } from "./helpers/app_modules"
import routes from './api/players'
import clubRoutes from "./api/club"
import sessionRoutes from "./api/session"
import pdfRoutes from "./api/pdf"
const port = 3000;
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config.js'
const compiler = webpack(config);

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "..", "public", "views"));
mongoose.connect('mongodb://localhost/roundrobindb');
app.use(cookieParser());

// app.use(function (err, req, res, next) {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err);

//   res.status(403).send("Invalid session token");
// })

app.use('/favicon.ico', (req, res, next) => {
  res.end();
})
app.use(
  sassMiddleware({
    src: path.join(__dirname, "assets", "sass"),
    dest: path.join(__dirname, "..", "public", "styles"),
    prefix: '/styles',
    debug: true
  })
);

app.use(express.static(path.join(__dirname, "..", "public"), { maxAge: 20000000 }));
app.use(webpackMiddleware(compiler));
app.use('/api/clubs', clubRoutes);
app.use('/api/clubs', routes);
app.use('/api/pdfs', pdfRoutes)
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
  res.render("index", { csrfToken: req.csrfToken() });
});  

app.listen(port, () => {
  console.log('listening on port 80...');
});



