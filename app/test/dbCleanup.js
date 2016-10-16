var mongoose = require("mongoose");

var conn = mongoose.connect("mongodb://127.0.0.1:27017/match_point_test");
conn.connection.db.dropDatabase();


console.log("\n- - - - - dropped - - - - -\n");
console.log("- - - - - terminating - - - - -\n");
process.exit(0);