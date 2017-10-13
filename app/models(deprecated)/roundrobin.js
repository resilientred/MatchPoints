import mongoose from "mongoose";
import shortid from "shortid";

mongoose.Promise = require("bluebird");

const Schema = mongoose.Schema;

const roundRobinSchema = new Schema({
  _clubId: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  numOfPlayers: { type: Number, required: true },
  players: { type: Array, default: [] },
  // schemata: { type: Object },
  selectedSchema: { type: Object },
  finalized: { type: Boolean, default: false },
  // ratingChange: { type: Object, default: {} },
  // ratingChangeDetail: { type: Object, default: {} },
  results: { type: Object, default: {} },
  // scoreChange: { type: Array, default: [] },
  id: { type: String, default: shortid.generate, required: true, index: true }
});

roundRobinSchema.statics.findRoundRobinsByClub = function(clubId) {
  return this.find({ _clubId: clubId }, null, { sort: { date: -1 } });
};

roundRobinSchema.statics.findRoundRobin = function(clubId, id) {
  return this.findOne({ id: id, _clubId: clubId });
};

roundRobinSchema.statics.saveResult = function(id, ratingChangeDetail) {
  return this.findOneAndUpdate(
    { _id: id },
    { $set: { finalized: true, ratingChangeDetail } },
    { new: true });
};

roundRobinSchema.statics.deleteRoundRobin = function(clubId, id) {
  return this.remove({ id: id, _clubId: clubId, finalized: false });
};

roundRobinSchema.statics.updateResult = function(id, result, ratingChangeDetail) {
  return this.update(
    { _id: id },
    { $set: { results: result, ratingChangeDetail } }
  );
};

const RoundRobin = mongoose.model("RoundRobin", roundRobinSchema);

export default RoundRobin;
