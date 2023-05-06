// get the client
const mysql = require('mysql2')
// create the connection to database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'green_car_6466'
});

// simple query
// db.query(
//   'SELECT * FROM `customers` ',
//   function(err, results, fields) {
//     console.log('>>>DataBase')
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

module.exports = db.promise();