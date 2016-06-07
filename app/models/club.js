import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let roundrobinSchema = new Schema({
  date: { type: Date, default: Date.now },
  players: { type: Object },
  schemata: { type: Object },
  results: { type: Object },
  finalized: { type: Boolean, default: false }
});
//has id property that filters out embedded documents

let clubSchema = new Schema({
  adminId: { type: Number, required: true },
  clubName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  roundrobins: [roundrobinSchema ]
});
//also add location...

clubSchema.statics.findClub = function(id, callback){
  return this.find({"_id": id}, callback);
};

clubSchema.statics.findRoundRobins = function(id, callback){
  return this.find({"_id": id}, {"roundrobins": true}, callback)
};
clubSchema.statics.finalizeResult = function(clubId, roundrobinId, callback){
  return this.update({"_id": clubId, "roundrobinId": roundrobinId}, callback)
}
clubSchema.methods.deleteRoundRobin = function(clubId, roundrobinId, callback){
  this.roundrobins.id(roundrobinId).remove();
  this.save(callback);
};
let Club = mongoose.model('Club', clubSchema);

export default Club; 