const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Well
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Well
            .findById(req.params.id)
            .populate("productionId")
            .populate("reportId")
            // .populate("recompletion")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByQuery: function (req, res) {
        db.Well
            .findOne({ apiNum: req.params.id })
            .populate("productionId")
            .populate("reportId")
            // .populate("recompletion")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Well
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Well
            .findOneAndUpdate({ apiNum: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Well
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};