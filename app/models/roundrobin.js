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
  results: { type: Array, default: [] },
  finalized: { type: Boolean, default: false },
  id: { type: String, default: shortid.generate, required: true, index: true }
});


roundRobinSchema.statics.findRoundRobinsByClub = function(clubId){
  return this.find({"_clubId": clubId});
};

roundRobinSchema.statics.findRoundRobin = function(id){
  return this.findOne({"_id": id})
};

roundRobinSchema.statics.finalizeResult = function(clubId, id){
  return this.update({"_clubId": clubId, "id": id}, {$set: {"finalized": true}})
};

roundRobinSchema.statics.deleteRoundRobin = function(id){
  return this.remove({"id": id}); 
};
roundRobinSchema.statics.updateResult = function(id, result){
  return this.update({"_id": id}, {$set: {"results": result}});
}
const RoundRobin = mongoose.model('RoundRobin', roundRobinSchema);

export default RoundRobin; 