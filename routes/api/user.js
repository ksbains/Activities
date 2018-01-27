let router = require("express").Router();
let usersController = require('../../controllers/usersController');


router.route("/")
	.get(usersController.findAll)
	.post(usersController.create)

router.route("/:id")
	  .get(usersController.findById)
	  .put(usersController.update)
	  .delete(usersController.remove)

module.exports = router; 

