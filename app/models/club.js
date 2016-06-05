import mongoose from 'mongoose';
const schema = mongoose.Schema;

let Roundrobins = new Schema({
  date: { type: Date, default: Date.now },
  players: { type: Object },
  schema: { type: Object },
  results: { type: Object },
  finalized: { type: Boolean, default: false }
});
//has id property that filters out embedded documents

let ClubSchema = new Schema({
  clubName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  roundrobins: [Roundrobins]
});
//also add location...
let Club = mongoose.Model('Club', ClubSchema);

ClubSchema.statics.findClub(id, callback){
  return this.find({"_id": id}, callback);
};

ClubSchema.statics.findRoundRobins(id, callback){
  return this.find({"_id": id}, {"roundrobins": true}, callback)
};
ClubSchema.statics.finalizeResult(clubId, roundrobinId, callback){
  return this.update({"_id": clubId, "roundrobinId": roundrobinId}, callback)
}
ClubSchema.methods.deleteRoundRobin(clubId, roundrobinId, callback){
  this.roundrobins.id(roundrobinId).remove();
  this.save(callback);
};
export default Club; 