// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require API and html routes
require('./routes/API.js')(app);
require('./routes/html.js')(app);

// Server listening
app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
}); 

