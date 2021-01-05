//initialize express router
let router = require('express').Router();

//Import Controllers
var userController = require('../controllers/userController.js');
// User routes
router.route('/users')
    .get(userController.view)
    .post(userController.add)
router.route('/users/:_id')
    .put(userController.update)
    .patch(userController.update)
    .delete(userController.delete)

//Export API routes
module.exports = router;