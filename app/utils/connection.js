import mysql from 'mysql';

class DB {
  static _instance = null;
  constructor() {
    if (DB._instance) {
      return DB._instance;
    }
    DB._instance = this;
  }

  connect = () => {
    if (this.connection) return Promise.resolve(this.connection);
    const connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER,
      port: process.env.PORT || 3306,
      database: process.env.DB || 'matchpoints_test',
    });
    return new Promise((resolve, reject) => {
      connection.connect(function(err) {
        if (err) {
          console.log("\x1B[91mFailed to connect to the database   ✗\x1B[0m");
          console.error(err);
          process.exit(1);
        }
        DB._instance.connection = connection;
        console.log("\x1B[96mConnected to the database... \x1B[0m");
        resolve(connection);
      });
    });
  }
}

const db = new DB();
export default db;
