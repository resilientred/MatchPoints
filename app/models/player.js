import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let playerSchema = new Schema({
	name: {type: String, required: true },
	rating: {type: Number, required: true },
	updated_at: {type: Date, default: Date.now}
});

let Player = mongoose.model('Player', playerSchema);

export default Player;