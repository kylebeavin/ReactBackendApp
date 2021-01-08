//initialize express router
let router = require('express').Router();
//Import Controllers
var groupController = require('../controllers/groupController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Group routes
router.route('/groups')
    .get(verifyToken.verifyToken, groupController.view)
    .post(verifyToken.verifyToken, groupController.add)
router.route('/groupsBy')
    .post(verifyToken.verifyToken, groupController.view)
router.route('/groups/:_id')
    .put(verifyToken.verifyToken, groupController.update)
    .patch(verifyToken.verifyToken, groupController.update)
    .delete(verifyToken.verifyToken, groupController.delete)

//Export API routes
module.exports = router;