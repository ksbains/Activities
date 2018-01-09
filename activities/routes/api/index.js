const router = require("express").Router();


const activitiesRoutes = require("./activity");
const userRoutes = require('./user');

//Article Routes
router.use ("/activities", activitiesRoutes);
router.use('/users', userRoutes);


module.exports = router;
