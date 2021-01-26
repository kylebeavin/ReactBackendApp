//initialize express router
let router = require('express').Router();

//Import Controllers
var userController = require('../controllers/userController.js');
var verifyToken = require('../middleware/verifyToken.js');

// User routes
router.route('/auth')
    .post(userController.auth)
router.route('/login')
    .post(userController.login)
router.route('/logout')
    .post(userController.logout)
router.route('/users')
    .get(verifyToken.verifyToken, userController.view)
    .post(verifyToken.verifyToken, userController.add)
    .put(verifyToken.verifyToken, userController.update)
    .patch(verifyToken.verifyToken, userController.update)
    .delete(verifyToken.verifyToken, userController.delete)
router.route('/usersBy')
    .post(verifyToken.verifyToken, userController.view)


//Export API routes
module.exports = router;