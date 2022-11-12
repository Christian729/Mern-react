const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => { // here we can see the GET request in action so that we can pass this information below.
  res.json({ message: "hey world" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) ); // so this is the code that actually runs our server on a port.

//im not quite sure how to run the nodemon server.js command. it doesnt really do anything. I might have something missing