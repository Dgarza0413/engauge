const db = require("../models");

// Defining methods for the recompletionController
module.exports = {
	findAll: function (req, res) {
		db.Recompletion
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Recompletion
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Well.findById(req.params.id, function (err, well) {
			if (err) {
				console.log(err);
			} else {
				db.Recompletion.create(req.body, function (err, recomp) {
					if (err) {
						console.log(err);
					} else {
						well.recompletion.push(recomp);
						well.save();
					}
				});
			}
		}).then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Recompletion
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Recompletion
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};