//initialize express router
let router = require('express').Router();
//Import Controllers
var meetingController = require('../controllers/meetingController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/meetings')
    .get(queryController.query)
    .post(meetingController.add)
    // Truck routes
router.route('/meetings/:_id')
    .put(meetingController.update)
    .patch(meetingController.update)
    .delete(meetingController.delete)

//Export API routes
module.exports = router;