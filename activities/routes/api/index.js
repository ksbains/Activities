const router = require("express").Router();

const activitiesRoutes = require("./activity");
const userRoutes = require('./user');

console.log('This is the Router Entry Point');


//Article R)outes
router.use ("/activities", activitiesRoutes);
router.use('/users', userRoutes);


module.exports = router;
