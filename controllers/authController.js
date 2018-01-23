var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var authController = {};

// Restrict access to root page
authController.home = function(req, res) {
    res.render('index', { user : req.user });
};

// Go to registration page
authController.register = function(req, res) {
    res.redirect('/login');
};

// Post registration

authController.doRegister = function (req, res) {
    User.register(new User({
        username: req.body.username,
        first: req.body.first,
        last: req.body.last,
        bio: req.body.bio,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.json({user: user, success: false});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
            console.log("made it this far in doRegister");
        });
    });
};

// Go to login page
authController.login = function(req, res) {
    res.redirect('/login');
};

// Post login
authController.doLogin = function(req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
        console.log("logged in");
    });
};

// logout
authController.logout = function(req, res) {
    req.logout();
    res.redirect('/');
    console.logt("logged out");
};

module.exports = authController;