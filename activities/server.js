var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var activitySeeder = require("./scripts/activity.js")
var commentSeeder = require("./scripts/comment.js")
var userSeeder = require("./scripts/user.js")
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
//var cheerio = require("cheerio");

// Require all models
var db = require("./models");
var routes = require('./routes');

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("build"));

app.use("/fake", function(req, res){
	res.send({
		message: "WE got here!"
	});
});

console.log('Loading the API Routes');
app.use(routes);

// Use passport to set up authentication
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/activitiesdb", {
  useMongoClient: true
	}).then(function() {
	app.listen(PORT, function() {
		activitySeeder;
		commentSeeder;
		userSeeder;
		console.log("API Server Started on port:" + PORT);
	});

}).catch(function (err){
	console.log("error connecting to mongo", err);
});

var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

