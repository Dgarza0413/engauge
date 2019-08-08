const db = require("../models");

// Defining methods for the booksController
module.exports = {
<<<<<<< HEAD
  findAll: function (req, res) {
    db.Users
=======
  findAll: function(req, res) {
    db.User
>>>>>>> 4837ccfddeebf72a0fb2c224bcacc2a470962da8
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD
  findById: function (req, res) {
    db.Users
=======
  findById: function(req, res) {
    db.User
>>>>>>> 4837ccfddeebf72a0fb2c224bcacc2a470962da8
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD
  create: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Users
=======
  create: function(req, res) {
    console.log(req.body);
    db.User
      .create({email: req.body.email, password: req.body.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
>>>>>>> 4837ccfddeebf72a0fb2c224bcacc2a470962da8
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD
  remove: function (req, res) {
    db.Users
=======
  remove: function(req, res) {
    db.User
>>>>>>> 4837ccfddeebf72a0fb2c224bcacc2a470962da8
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// add user