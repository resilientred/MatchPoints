import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let playerSchema = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});
//should add an array of associated clubs.
//so when querying all the clubs..you can limited to all those


playerSchema.methods.findClubs = function(cb){
  return this.model.find({_id: this.id}, {_id: false, associated_clubs: true }, cb);
};
const Player = mongoose.model('Player', playerSchema);



export default Player;