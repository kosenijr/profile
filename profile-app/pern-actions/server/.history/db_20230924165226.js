// configure how we connect to the database
const Pool = require("pg").Pool;
const env = require("dotenv").config;

const pool = new Pool({
    user: "postgres",
    password: password,
    host: "localhost",
    port: 5432,
    database: "pern_actions"
});