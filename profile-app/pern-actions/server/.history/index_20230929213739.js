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
        // log(req.body);
        const {name, contact, message} = req.body;

        // ensure the validity and provision of each parameter.
        if (!name || !contact || !message) {
            return res.status(400).json({error: "Missing or invalid parameters"})    
        };
        // to run new querys, use INSERT INTO command
        const newInfo = await pool.query("INSERT INTO userinfo (name, contact, message) VALUES ($1, $2, $3)", [name, contact, message]);
        // confirm success
        res.status(200).json({success: "Data inserted successfully"});

        res.json(newInfo);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: "Internal server error"});
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

log(pool);
