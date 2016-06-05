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
  roundrobins: [Roundrobins]
});
//also add location...
let Club = mongoose.Model('Club', ClubSchema);

ClubSchema.statics.findClub(id, callback){
  return this.find({"_id": id}, callback);
};

ClubSchema.statics.finalizeResult(clubId, roundrobinId, callback){
  return this.update({"clubId": clubId, "roundrobinId": roundrobinId}, callback)
}
export default Club; 