const db = require("../models");
// const bcrypt = require("bcrypt");
const passport = require("passport");
// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find()
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(420).json(err));
  },
  findById: function(req, res) {
    console.log('findbyid', req.params.id);
    db.User
      .find({id: req.params.id})
      .then(dbModel =>{
       res.json(dbModel)
    })
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
