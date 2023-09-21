// express creates the server
// pg connects database to server
// cors allows for two domains (or more) to talk to each other

//require the express package and store the function within the app variable
const express = require("express");
const [app, port] = [express(), 3000];

// set express to listen at Port 500

app.listen(port, () => {
    console.log(`server has started on port: ${port}.`);
    // use npx nodemon, not npm.
})
