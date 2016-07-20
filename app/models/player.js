import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let playerSchema = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
  ratingHistory: { type: Array, default: []},
	updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});


playerSchema.statics.updateRating = function(id, newRating) {
  //need to find the old rating and increment it...
  return this.findOneAndUpdate({ _id: id}, { 
    $inc: { rating: newRating },
    $push: { ratingHistory: newRating } 
  })
};


playerSchema.methods.findClubs = function(cb){
  return this.model.find({_id: this.id}, {_id: false, associated_clubs: true }, cb);
};

const Player = mongoose.model('Player', playerSchema);



export default Player;