let router = require("express").Router();
let commentsController = require('../../controllers/commentsController');


router.get("", commentsController.findAll)
		.post('', commentsController.create)
		.get('/:id', commentsController.findById)
		.put('/:id', commentsController.update)
		.delete('/:id', commentsController.delete)

module.exports = router; 