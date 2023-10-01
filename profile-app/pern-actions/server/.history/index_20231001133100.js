// express creates the server
// pg connects database to server
// cors allows for two domains (or more) to talk to each other
// using async/await
// $1, $2, $3 ... are variables within the pool.query and are followed by their specific variables in brackets.

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
app.post("/info", async (req, res) => {
  try {
    // log(req.body);
    const { name, contact, message } = req.body;

    // ensure the validity and provision of each parameter.
    if (!name || !contact || !message) {
      return res.status(400).json({ error: "Missing or invalid parameters" });
    }
    // to run new querys, use INSERT INTO command
    const newInfo = await pool.query(
      "INSERT INTO userinfo (name, contact, message) VALUES ($1, $2, $3) RETURNING *",
      [name, contact, message]
    );
    // confirm success
    // res.status(200).json({ success: "Data inserted successfully" });

    res.json(newInfo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
    log("This does not work!");
  }
});

// get all the info: read general
app.get("/info", async (req, res) => {
  try {
    const allInfo = await pool.query("SELECT * FROM userinfo");
    res.json(allInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a piece of info: read specific
// include id #
app.get("/info/:id", async (req, res) => {
  try {
    // console.log(req);
    // console.log(req.params);
    // destructuring assignment: extract id and make it retain its value as a variable;
    const { id } = req.params;
    // console.log(id);
    // use await because the query might take some time.
    const info = await pool.query("SELECT * FROM userinfo WHERE user_id = $1", [
      id,
    ]);
    res.json(info.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a piece of info: update
app.put("/info/:id", async (req, res) => {
  try {
    log(req.params, req.body);
    const { id, description } = [req.params, req.body];
    const updateInfo = await pool.query(
      "UPDATE userinfo SET description = $1 WHERE user_id = $2",
      [description, id]
    );
    res.json("Info was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a piece of info: delete

// set express to listen at Port 5000
app.listen(port, () => {
  console.log(`server has started on port: ${port}.`);
  // use npx nodemon [filename].js, not npm.
});

// log(pool);
