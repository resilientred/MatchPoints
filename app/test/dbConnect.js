var mysql = require("mysql");
module.exports = function() {
  var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: 'test',
    port: process.env.PORT || 3306,
    database: 'matchpoints_test',
  });
  return new Promise((resolve) => {
    connection.connect(function(err) {
      if (err) throw err;
      console.log("\x1B[96mConnected to the database... \x1B[0m");
      console.log("\x1B[96mRunning tests now... \x1B[0m");
      resolve(connection);
    });
  });
};
