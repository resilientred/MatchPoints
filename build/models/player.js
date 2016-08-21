'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = exports.playerSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _history = require('./history');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

// playerSchema.statics.addHistory = function(id, ratingDetail) {
//   let newHistory = new History({
//     date: ratingDetail.date,
//     ratingChange: ratingDetail.ratingChange,
//     newRating: ratingDetail.ratingBefore + ratingDetail.ratingChange
//   });
//   return newHistory.save()
//     .then( () => {
//       this.update({ _id: id}, {
//         $inc: { rating: ratingDetail.ratingChange },
//         $push: { ratingHistory: newHistory }
//       });
//     })
// };

// playerSchema.statics.updateHistory = function(id, ratingDetail){
//   let player;

//   return this.findOne({ _id: id})
//     .then( (player) => {
//       player = player;
//       return player.ratingHistory.find({date: ratingDetail.date })
//     }).then( (history) => {
//       return player.update({ //this might have to be another query
//         $inc: {
//           rating: ratingDetail.ratingChange - history.ratingChange
//         }
//       })
//     })

//     //couple of doubts.
//     //does findOne return a promise or do I need to call exec
//     //is find another one?
//     //not sure if I need findoneandupdate or is there an update on the instance
// }

// playerSchema.methods.findClubs = function(cb){
//   return this.model.find({_id: this.id}, {_id: false, associated_clubs: true }, cb);
// };

var playerSchema = exports.playerSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, max: 3000, min: 0 },
  ratingHistory: [_history.historySchema],
  updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});
var Player = exports.Player = _mongoose2.default.model('Player', playerSchema);