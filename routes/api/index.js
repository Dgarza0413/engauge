const router = require("express").Router();
const userRoutes = require("./users");
const wellRoutes = require("./well");

// user routes
router.use("/users", userRoutes);

// well routes
router.use("/well", wellRoutes);

module.exports = router;
