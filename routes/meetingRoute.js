//initialize express router
let router = require('express').Router();
//Import Controllers
var meetingController = require('../controllers/meetingController.js');

// Meeting routes
router.route('/meetingsAll') // Get all meetings
    .post(meetingController.viewAll)
router.route('/meetingsAdd') // Add a meeting
    .post(meetingController.add);

router.route('/meetingsById/:_id')
    .post(meetingController.viewMeetingById)
    .post(meetingController.updateMeetingById)
    .post(meetingController.updateMeetingById)
    .post(meetingController.deleteMeetingById);

router.route('/meetingsByGroup/:group_id') // Get all meetings in group
    .post(meetingController.viewMeetingByGroup)
    .post(meetingController.updateMeetingByGroup)
    .post(meetingController.updateMeetingByGroup)
    .post(meetingController.deleteMeetingByGroup);

router.route('/meetingsByStatus/:is_active') // Gets meetings by status
    .post(meetingController.viewMeetingByIsActive)
    .post(meetingController.updateMeetingByIsActive)
    .post(meetingController.updateMeetingByIsActive)
    .post(meetingController.deleteMeetingByIsActive);

router.route('/meetingsByCreation/:created') // Gets meetings by status
    .post(meetingController.viewMeetingByCreation)
    .post(meetingController.updateMeetingByCreation)
    .post(meetingController.updateMeetingByCreation)
    .post(meetingController.deleteMeetingByCreation);

//Export API routes
module.exports = router;