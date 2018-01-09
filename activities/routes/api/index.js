const router = require("express").Router();
const activitiesRoutes = require("./activity");

//Article Routes
router.use ("./activities", activitiesRoutes);

module.exports = router;
