'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressMinify = require('express-minify');

var _expressMinify2 = _interopRequireDefault(_expressMinify);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _nodeSassMiddleware = require('node-sass-middleware');

var _nodeSassMiddleware2 = _interopRequireDefault(_nodeSassMiddleware);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _app_modules = require('./helpers/app_modules');

var _players = require('./api/players');

var _players2 = _interopRequireDefault(_players);

var _club = require('./api/club');

var _club2 = _interopRequireDefault(_club);

var _session = require('./api/session');

var _session2 = _interopRequireDefault(_session);

var _pdf = require('./api/pdf');

var _pdf2 = _interopRequireDefault(_pdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from '../webpack.config.js'

// import webpack from 'webpack'
// import webpackMiddleware from 'webpack-dev-middleware'

var port = process.env.PORT || 3000;

// const compiler = webpack(config);

_app_modules.app.set('view engine', 'ejs');
_app_modules.app.set("views", _path2.default.join(__dirname, "..", "public", "views"));
_mongoose2.default.connect('mongodb://localhost/roundrobindb');
_app_modules.app.use((0, _cookieParser2.default)());

// app.use(function (err, req, res, next) {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err);

//   res.status(403).send("Invalid session token");
// })

_app_modules.app.use('/favicon.ico', function (req, res, next) {
  res.end();
});
_app_modules.app.use((0, _nodeSassMiddleware2.default)({
  src: _path2.default.join(__dirname, "assets", "sass"),
  dest: _path2.default.join(__dirname, "..", "public", "styles"),
  prefix: '/styles',
  debug: true
}));

_app_modules.app.use(_express2.default.static(_path2.default.join(__dirname, "..", "public")));
// { maxAge: 86400000 }
// app.use(webpackMiddleware(compiler));
_app_modules.app.use('/api/clubs', _club2.default);
_app_modules.app.use('/api/clubs', _players2.default);
_app_modules.app.use('/api/pdfs', _pdf2.default);
_app_modules.app.use('/api/*', function (req, res, next) {
  res.status(404).send("Invalid routes");
  res.end();
});
_app_modules.app.use('/session', _session2.default);
_app_modules.app.use('/*', function (req, res, next) {
  var origUrl = req.originalUrl;
  console.log(origUrl);
  var redirectURL = origUrl.match(/^(\/$|\/login|\/signup)/);
  var currentClub;

  _app_modules.clubMethods.currentClub(req).then(function (club) {
    currentClub = club;
  }).catch(function (err) {
    currentClub = null;
  }).then(function () {
    if (currentClub && redirectURL) {
      console.log("redirecting");
      res.redirect("/club");
      res.end();
    } else {
      next();
    }
  });
});

_app_modules.app.get('*', _app_modules.csrfProtection, function (req, res) {
  res.render("index", { csrfToken: req.csrfToken() });
});

_app_modules.app.listen(port, function () {
  console.log('listening on port 3000...');
});