//initialize express router
let router = require('express').Router();

//Import Controllers
var userController = require('../controllers/userController.js');
var queryController = require('../functions/query.js');
// User routes
router.route('/users')
    .get(queryController.query)
    .post(userController.add)
router.route('/users/:_id')
    .put(userController.update)
    .patch(userController.update)
    .delete(userController.delete)

//Export API routes
module.exports = router;