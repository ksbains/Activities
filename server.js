var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var activitySeeder = require("./scripts/activity.js")
var commentSeeder = require("./scripts/comment.js")
var userSeeder = require("./scripts/user.js")
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var path = require("path");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/activitiesdb").then(function() {
    app.listen(PORT, function() {
        activitySeeder;
        commentSeeder;
        userSeeder;
        console.log("API Server Started on port:" + PORT);
    });  
}).catch(function (err){
    console.log("error connecting to mongo", err);
});

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

console.log('Loading the API Routes');

// Use passport to set up authentication
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// Use express.static to serve the public folder as a static directory
app.use(express.static("build"));

app.use(routes);

var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
