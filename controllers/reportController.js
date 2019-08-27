const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the prodController
module.exports = {
    findAll: function (req, res) {
        db.Report
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Report
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Well.findById(req.params.id, function (err, well) {
            if (err) {
                console.log(err);
            } else {
                db.Report.create(req.body, function (err, prod) {
                    if (err) {
                        console.log(err);
                    } else {
                        well.reportId.push(prod);
                        well.save();
                    }
                });
            }
        }).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Report
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Report
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};