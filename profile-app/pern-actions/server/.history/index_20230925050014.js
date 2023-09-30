// express creates the server
// pg connects database to server
// cors allows for two domains (or more) to talk to each other

//require the express package and store the function within the app variable
const express = require("express");
const [app, log, port] = [express(), console.log, 5000];
// require cors
const cors = require("cors");
const pool = require("./db");
const env = require("dotenv").config;



// set up middleware
app.use(cors());
app.use(express.json());


// set express to listen at Port 500
app.listen(port, () => {
    console.log(`server has started on port: ${port}.`);
    // use npx nodemon [filename].js, not npm.
});

// log(pool);
try {
    if (env.error) {
        throw env.error;
    }
} catch (error) {
    console.log(`error loading .env file: ${error}`)
}