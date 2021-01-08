const db = require("../models");

// Defining methods for the reportController
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
    findOne: (req, res) => {
        db.Report
            .findOne({ reportId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Report
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Well.findOne({ apiNum: req.params.id }, function (err, well) {
            if (err) {
                console.log(err);
            } else {
                db.Report.create(req.body, function (err, report) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(report)
                        well.reportId.push(report);
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
    updateOne: (req, res) => {
        console.log(req.body)
        db.Report
            .findByIdAndUpdate(req.params.id, req.body)
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