const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // creates its own http connection

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
const server = app.listen(port, () =>
console.log(`Server up and running on port ${port}!`)
);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
