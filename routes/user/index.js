const router = require("express").Router();
const userRoutes = require("./user");

router.use("/accounts", userRoutes);

module.exports = router;