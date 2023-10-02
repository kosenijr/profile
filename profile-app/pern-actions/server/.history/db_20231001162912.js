// configure how we connect to the database
const Pool = require("pg").Pool; // library for db connection
require("dotenv").config();

const pool = new Pool({
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432
});

module.exports = pool;