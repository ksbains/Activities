const router = require("express").Router();
const activityRoutes = require("./activity");

//Activity Routes
router.use ("./activity", activityRoutes);

module.exports = router;
