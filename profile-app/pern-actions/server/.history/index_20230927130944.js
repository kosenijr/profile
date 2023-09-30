// express creates the server
// pg connects database to server
// cors allows for two domains (or more) to talk to each other

//require the express package and store the function within the app variable
const express = require("express");
let [app, log, port] = [express(), console.log, 5000];
// require cors
const cors = require("cors");
const pool = require("./db");

// set up middleware: must be placed before routes.
app.use(cors());
app.use(express.json()); // req.body

// routes: async requests

// create a piece of info: create
app.post("/info", async(req, res) => {
    try {
        log(req.body);
        res.send("This works!");
    } catch (err) {
        console.error(err.message);
        log("This does not work!");

    }
});

// get a piece of info: read

// update a piece of info: update

// delete a piece of info: delete


// set express to listen at Port 5000
app.listen(port, () => {
    console.log(`server has started on port: ${port}.`);
    // use npx nodemon [filename].js, not npm.
});

// log(pool);
