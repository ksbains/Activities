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
    res.render('register');
};

// Post registration
authController.doRegister = function(req, res) {
    User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
        if (err) {
            return res.render('register', { user : user });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
};

// Go to login page
authController.login = function(req, res) {
    res.render('login');
};

// Post login
authController.doLogin = function(req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
    });
};

// logout
authController.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = authController;