const router = require("express").Router();
const userController = require("../../controllers/userController");
const wellController = require("../../controllers/wellController");
const prodController = require("../../controllers/prodController");

// /api/addUser
router.route("/addUser")
  .get(userController.findAll)
  .post(userController.create);

// /api/user/:id
router.route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// list all wells       // remove for production
// /api/wells
router.route("/wells")
  .get(wellController.findAll);
// /api/addWell
router.route("/addWell")
  .post(wellController.create);


router.route("/welltable/:id/prod")
  .get(prodController.findById)


router.route("/welltable/:id/prod/new")
  .post(prodController.create);
// select specific well
// /api/well/:id
router.route("/well/:id")
  .get(wellController.findById)
  .put(wellController.update)
  .delete(wellController.remove);

// /api/well/:tankid
// change to tankController
router.route("/well/:tankid")
  .get(wellController.findById)
  .put(wellController.update)
  .delete(wellController.remove);


// router.route("/well/prod")
//   .get(wellController.findById)
//   .put(wellController.update)
//   .delete(wellController.remove);

module.exports = router;
