const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    console.log("this is the start of the findAll Controller function");
    db.User
      .find()
      .sort({ date: -1 })
      .then(dbModel => {
        console.log('Data', dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(420).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(420).json(err));
  },
  create: function(req, res, next) {
    // db.User
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(420).json(err));
      db.User.findOne({ email: req.body.email }, (err, user) => {
          // is email address already in use?
          if (user) {
              res.json({ success: false, message: "Email already in use" })
              return
          }
          // go ahead and create the new user
          else {
              bcrypt.genSalt(10, function(err, salt) {
                  if (err) return next(err);
                  bcrypt.hash(req.body.password, salt, function(err, hash) {
                      if (err) return next(err);
                      req.body.password = hash; // Or however suits your setup
                      // Store the user to the database, then send the response
                      db.User.create(req.body, (err) => {
                          if (err) {
                              console.error(err)
                              res.json({ success: false })
                          }
                          res.json({ success: true })
                      });
                      // passport.authenticate('local')(req, res, function() {
                      //     res.redirect('/user');
                      // })
                  });
              });
          }
      })
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(420).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(420).json(err));

  }
};
