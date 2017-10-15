var mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 50,
  host: process.env.DB_HOST || 'localhost',
  user: 'root',
  password: 'Lalala4321.',
  port: process.env.PORT || 3306,
  database: 'matchpoints' || 'matchpoints_test',
});

module.exports = pool;
