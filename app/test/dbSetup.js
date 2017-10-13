// require("babel-polyfill");
import mysql from "mysql";
// import History from "../sqlmodel/history";
// import Roundrobin from "../sqlmodel/roundrobin";
// import { players, club } from "./seeds";
// import bcrypt from "bcrypt";

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: 'test',
  port: process.env.PORT || 3306,
  database: 'matchpoints_test',
});

connection.connect(function(err) {
  if (err) {
    console.log("\x1B[91mFailed to connect to the database   ✗\x1B[0m");
    console.error(err);
    process.exit(1);
  }
  const Player = require("../sqlmodel/player")(connection);
  const Club = require("../sqlmodel/club")(connection);
  console.log("\x1B[32mConnected   ✓\x1B[0m");
  console.log("\x1B[96mCreating Mock data   \x1B[0m");
  const user = {
    username: 'testuser',
    password: 'password',
    email: 'testuser@test.com',
    clubName: 'test club',
    city: 'San Francisco',
    state: 'CA',
  };
  Club.newUser(user).then((res) => {
    console.log(res);
    process.exit(0);
  }).catch((err) => {
    console.log("\x1B[91mFailed to create mock data   ✗\x1B[0m");
    console.log(err);
    process.exit(1);
  });
});
// const allPlayers = players.map((player) => {
//   const newPlayer = new Player({ name: player.name, rating: player.rating });
//   newPlayer.markModified("player");
//   return newPlayer;
// });

// process.exit(0);


