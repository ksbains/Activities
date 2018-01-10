let router = require("express").Router();
let usersController = require('../../controllers/usersController');


router.get("", usersController.findAll)
		.post('', usersController.create)
		.get('/:id', usersController.findById)
		.put('/:id', usersController.update)
		.delete('/:id', userController.delete)

module.exports = router; 

