import mongoose from 'mongoose'
import shortid from 'shortid'
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const roundRobinSchema = new Schema({
  _clubId: { type: String, required: true},
  date: { type: Date, default: Date.now, required: true },
  numOfPlayers: { type: Number, required: true },
  players: { type: Object },
  schemata: { type: Object },
  selectedSchema: { type: Object},
  results: { type: Object, default: {} },
  finalized: { type: Boolean, default: false },
  id: { type: String, default: shortid.generate, required: true }
});


roundRobinSchema.statics.findRoundRobinsByClub = function(clubId){
  return this.find({"_clubId": clubId});
};

roundRobinSchema.statics.findRoundRobins = function(id){
  return this.find({"id": id})
};

roundRobinSchema.statics.finalizeResult = function(clubId, roundrobinId){
  return this.update({"_clubId": clubId, "id": roundrobinId})
};

roundRobinSchema.methods.deleteRoundRobin = function(clubId, roundrobinId){
  return this.find({"_clubId": clubId, "roundrobinId": roundrobinId}).remove(); 
};

const RoundRobin = mongoose.model('RoundRobin', roundRobinSchema);

export default RoundRobin; 