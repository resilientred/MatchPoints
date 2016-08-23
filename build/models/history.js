"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.History = exports.historySchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var historySchema = exports.historySchema = new Schema({
  date: Date,
  oldRating: Number,
  newRating: Number,
  ratingChange: Number
});

var History = exports.History = _mongoose2.default.model("History", historySchema);