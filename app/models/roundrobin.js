import mongoose from 'mongoose'
import shortid from 'shortid'
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

let roundRobinSchema = new Schema({
  _clubId: { type: String, required: true},
  date: { type: Date, default: Date.now },
  numOfPlayers: { type: Number },
  players: { type: Object },
  schemata: { type: Object },
  selectedSchema: { type: Object},
  results: { type: Object },
  finalized: { type: Boolean, default: false },
  id: { type: String, default: shortid.generate, required: true }
});


clubSchema.statics.findRoundRobinsByClub = function(clubId){
  return this.find({"_clubId": clubId});
};

clubSchema.statics.findRoundRobins = function(id){
  return this.find({"id": id})
};

clubSchema.statics.finalizeResult = function(clubId, roundrobinId){
  return this.update({"_clubId": clubId, "id": roundrobinId})
};

clubSchema.methods.deleteRoundRobin = function(clubId, roundrobinId){
  return this.find({"_clubId": clubId, "roundrobinId": roundrobinId}).remove(); 
};

let RoundRobin = mongoose.model('RoundRobin', roundRobinSchema);

export default RoundRobin; 