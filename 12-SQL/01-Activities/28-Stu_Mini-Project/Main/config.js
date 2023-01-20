const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: 'module12',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

module.exports = db;