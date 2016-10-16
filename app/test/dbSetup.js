import mongoose from "mongoose";
import { Player } from "../models/player";
import Club from "../models/club";
import History from "../models/history";
import Roundrobin from "../models/roundrobin";
import { players, club } from "./seeds";
import bcrypt from "bcrypt";

mongoose.connect("mongodb://127.0.0.1:27017/match_point_test");

const allPlayers = players.map((player) => {
  const newPlayer = new Player({ name: player.name, rating: player.rating });
  newPlayer.markModified("player");
  return newPlayer;
});

const newClub = new Club({
  _id: mongoose.Types.ObjectId("abcdefghijkl"),
  username: "guest1234",
  password: "password",
  clubName: "TestClub",
  location: {
    city: "San Francisco",
    state: "CA",
  },
  players: allPlayers,
  passwordDigest: bcrypt.hashSync("password", 10)
});
console.log("- - - - - saving - - - - -");
newClub.save();
console.log("- - - - - saved - - - - -");
console.log("- - - - - terminating - - - - -");
process.exit(0);


