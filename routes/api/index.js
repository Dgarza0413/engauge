const router = require("express").Router();
const userController = require("../../controllers/userController");
const wellController = require("../../controllers/wellController");
const passport = require('../../config/passport.js')

// /api/addUser
router.route("/addUser")
  .get(userController.findAll)
  .post(userController.create);

// /api/login
router.post("/login",passport.authenticate("local"),(req,res)=>{
  res.json(req.user);
})

// /api/logout
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

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

module.exports = router;