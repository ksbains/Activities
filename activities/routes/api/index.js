const router = require("express").Router();

const activitiesRoutes = require("./activity");
const userRoutes = require('./user');
const commentRoutes = require('./comments')

router.use ("/activities", activitiesRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
