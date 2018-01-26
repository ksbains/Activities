const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

//Matches with "api/activities"
router
	.route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.create);

// Matches with "/api/activites/:id"
router
    .route("/:id")
    .get(activitiesController.findById)
    .put(activitiesController.update)
    .delete(activitiesController.remove);

//Matches with "api/activities/:activityType"
router
	.route("/:activityType")
	.get(activitiesController.findActivityTypes)
	.post(activitiesController.create);

module.exports = router;

