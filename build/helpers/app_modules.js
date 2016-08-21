'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csrfProtection = exports.clubMethods = exports.app = exports.parseUrlEncoded = exports.client = undefined;

var _csurf = require('csurf');

var _csurf2 = _interopRequireDefault(_csurf);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _clubMethods = require('../api/clubMethods');

var _clubMethods2 = _interopRequireDefault(_clubMethods);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import RedisNotifier from 'redis-notifier'

// export const eventNotifier = new RedisNotifier(redis, {
//   redis : { host : '127.0.0.1', port : 6379 },
//   expired : true,
//   logLevel : 'DEBUG' //Defaults To INFO
// });
var client = _redis2.default.createClient();
client.config("SET", "notify-keyspace-events", "KA");
exports.client = client;
var parseUrlEncoded = exports.parseUrlEncoded = _bodyParser2.default.urlencoded({ extended: true });
var app = exports.app = (0, _express2.default)();
var clubMethods = exports.clubMethods = new _clubMethods2.default(app);
var csrfProtection = exports.csrfProtection = (0, _csurf2.default)({ cookie: true });