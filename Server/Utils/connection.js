const mysql2 = require("mysql2");

let pool = mysql2.createPool({
    host : "localhost",
    user : "root",
    password : "12345678",
    database : "BookStore_Schema"
});

module.exports = pool.promise();