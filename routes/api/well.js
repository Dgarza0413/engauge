const router = require("express").Router();
const wellController = require("../../controllers/wellController");

// list all wells
router.route("/wells")
  .get(wellController.findAll);
  // .post(wellController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wellController.findById)
  .put(wellController.update)
  .delete(wellController.remove);

module.exports = router;
