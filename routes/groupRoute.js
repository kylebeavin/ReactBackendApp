//initialize express router
let router = require('express').Router();
//Import Controllers
var groupController = require('../controllers/groupController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/groups')
    .get(queryController.query)
    .post(groupController.add)
    // Truck routes
router.route('/groups/:_id')
    .put(groupController.update)
    .patch(groupController.update)
    .delete(groupController.delete)

//Export API routes
module.exports = router;