//initialize express router
let router = require('express').Router();
//Import Controllers
var meetingController = require('../controllers/meetingController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Meeting routes
router.route('/meetings')
    .get(verifyToken.verifyToken, meetingController.view)
    .post(verifyToken.verifyToken, meetingController.add)
router.route('/meetingsBy')
    .post(verifyToken.verifyToken, meetingController.view)
router.route('/meetings/:_id')
    .put(verifyToken.verifyToken, meetingController.update)
    .patch(verifyToken.verifyToken, meetingController.update)
    .delete(verifyToken.verifyToken, meetingController.delete)

//Export API routes
module.exports = router;