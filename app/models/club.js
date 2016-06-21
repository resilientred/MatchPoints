import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let roundrobinSchema = new Schema({
  date: { type: Date, default: Date.now },
  numOfPlayers: { type: Number },
  players: { type: Object },
  schemata: { type: Object },
  selectedSchema: { type: Object},
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

clubSchema.statics.findClub = function(id){
  return this.find({"_id": id});
};

clubSchema.statics.findRoundRobins = function(id, callback){
  return this.find({"_id": id}, {"roundrobins": true})
};
clubSchema.statics.finalizeResult = function(clubId, roundrobinId){
  return this.update({"_id": clubId, "roundrobinId": roundrobinId})
}
clubSchema.methods.deleteRoundRobin = function(clubId, roundrobinId){
  return this.roundrobins.id(roundrobinId).remove(); //what is being returned from this?
  // this.save(); do we need to save this?
};
let Club = mongoose.model('Club', clubSchema);

export default Club; 