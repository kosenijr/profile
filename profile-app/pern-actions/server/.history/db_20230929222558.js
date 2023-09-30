// configure how we connect to the database
require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432
});

module.exports = pool;