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
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(420).json(err));
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
