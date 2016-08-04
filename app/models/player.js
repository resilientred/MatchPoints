import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let playerSchema = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
  ratingHistory: { type: Array, default: []},
	updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});


playerSchema.statics.updateRating = function(id, ratingDetail) {
  return this.findOneAndUpdate({ _id: id}, { 
    $inc: { rating: ratingDetail.ratingChange },
    $push: { ratingHistory: ratingDetail.ratingBefore } 
  })
  ///issue: a new entry will be create every time we submit.
  //solution: make two separate api calls
  //one for the first time we submit the reuslt, and if we update it
  //it will make a patch reqruest instead.
  //but a problem is that we have to keep track of the old ratings


  //also.. rating History should include date
  //then it can use that and calculate the difference and update the rating accordingly
  //and also store the rating Change

  /*{ 
    ratingHistory: {
      date: ____,
      ratingBefore: ___,
      ratingChange: ___,
      ratingAfter: ___
    }
  } */
};


playerSchema.methods.findClubs = function(cb){
  return this.model.find({_id: this.id}, {_id: false, associated_clubs: true }, cb);
};

const Player = mongoose.model('Player', playerSchema);



export default Player;