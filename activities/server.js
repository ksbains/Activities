var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
//var cheerio = require("cheerio");

// Require all models
var db = require("./models");
var routes = require('./routes');

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("build"));

app.use("/fake", function(req, res){
	res.send({
		message: "WE got here!"
	});
});

console.log('Loading the API Routes');
app.use(routes);


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/activities", {
  useMongoClient: true
}).then(function(){
	console.log("connected to mongo");
	app.listen(PORT, function() {
		console.log("API Server Started on port:" + PORT);
	});
}).catch(function (err){
	console.log("error connecting to mongo", err);
}); 