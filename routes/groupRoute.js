//initialize express router
let router = require('express').Router();
//Import Controllers
var groupController = require('../controllers/groupController.js');

// Group routes

router.route('/groupsAll')
    .post(groupController.viewAll)
router.route('/groupsAdd')
    .post(groupController.add);

router.route('/groupsByObjectId/:_id')
    .post(groupController.viewGroupById)
    .post(groupController.update)
    .post(groupController.update)
    .post(groupController.delete);

// router.route('/groupsByEmail/:email')
//     .post(groupController.viewGroupByEmail)
// //     // .post(groupController.update)
// //     // .post(groupController.update)
// //     // .delete(groupController.delete);
//Export API routes
module.exports = router;