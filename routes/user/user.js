const router = require("express").Router();
const userController = require("../controllers/userController");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.route("/")
  .get(userController.findAll);

router.route("/register")
  .post(userController.create, passport.authenticate("local"), function(req, res){
    res.redirect("/");
  });

router.route("/login")
  .post(passport.authenticate("local"), function(req, res){
    res.redirect("/");
  });

router
  .route("/:id", isAuthenticated)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
