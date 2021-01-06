//initialize express router
let router = require('express').Router();
//Import Controllers
var groupController = require('../controllers/groupController.js');
// Group routes
router.route('/groups')
    .get(groupController.view)
    .post(groupController.add)
router.route('/groupsBy')
    .post(groupController.view)
router.route('/groups/:_id')
    .put(groupController.update)
    .patch(groupController.update)
    .delete(groupController.delete)

//Export API routes
module.exports = router;