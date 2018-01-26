const db = require("../models");
//const db = require("../models/Activity");


// Defining methods for the activitiesController
// .Activity refers to the Activity collection within the Activities Database. 
module.exports = {
  findAll: function(req, res) {
    db.Activity
      .find()
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  findActivityTypes: function(req, res) {
    console.log('controller req', req);
    console.log('controller res', res);
    db.Activity
      .find({ activityType: req.params.activityType })
      .then(dbModel => {
        res.json(dbModel);
        console.log('ARRIVE AT findActivityTypes CONTROLLER', dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Activity
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('controller create req', req);
    console.log('controller create res', res);
    db.Activity
      .create(req.body)
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Activity
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Activity
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
