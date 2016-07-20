import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let playerSchema = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
  ratingHistory: { type: Array, default: []},
	updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});


playerSchema.statics.updateRating = function(player) {
  return this.update({ _id: player.id}, { 
    rating: player.newRating,
    $push: { ratingHistory: player.newRating } 
  })
};

playerSchema.methods.findClubs = function(cb){
  return this.model.find({_id: this.id}, {_id: false, associated_clubs: true }, cb);
};

const Player = mongoose.model('Player', playerSchema);



export default Player;