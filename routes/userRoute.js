//initialize express router
let router = require('express').Router();
//Import Controllers
var userController = require('../controllers/userController.js');

// User routes
router.route('/usersAll')
    .post(userController.viewAll)
router.route('/usersAdd')
    .post(userController.add);

router.route('/usersById/:_id')
    .post(userController.viewUserById)
    .post(userController.updateUserById)
    .post(userController.updateUserById)
    .post(userController.deleteUserById);

// router.route('/usersByQuery/:role') // Get all users by role
//     .post(userController.viewByQuery)
// .post(userController.update)
// .post(userController.update)
// .post(userController.delete);

router.route('/usersByGroup/:group_id') // Get all users in group
    .post(userController.viewUserByGroup)
    .post(userController.updateUserByGroup)
    .post(userController.updateUserByGroup)
    .post(userController.deleteUserByGroup);

router.route('/usersByRole/:role') // Get all users by role
    .post(userController.viewUserByRole)
    .post(userController.updateUserByRole)
    .post(userController.updateUserByRole)
    .post(userController.deleteUserByRole);

router.route('/usersByEmail/:email') // Gets user by email
    .post(userController.viewUserByEmail)
    .post(userController.updateUserByEmail)
    .post(userController.updateUserByEmail)
    .post(userController.deleteUserByEmail);

router.route('/usersByFirst/:first_name') // Gets user by email
    .post(userController.viewUserByFirst)
    // .post(userController.updateUserByEmail)
    // .post(userController.updateUserByEmail)
    // .post(userController.deleteUserByEmail);

router.route('/usersByLast/:last_name') // Gets user by email
    .post(userController.viewUserByLast)
    // .post(userController.updateUserByEmail)
    // .post(userController.updateUserByEmail)
    // .post(userController.deleteUserByEmail);

router.route('/usersByStatus/:status') // Gets users by status
    .post(userController.viewUserByStatus)
    .post(userController.updateUserByStatus)
    .post(userController.updateUserByStatus)
    .post(userController.deleteUserByStatus);

router.route('/usersByCreation/:created') // Gets users by status
    .post(userController.viewUserByCreation)
    .post(userController.updateUserByCreation)
    .post(userController.updateUserByCreation)
    .post(userController.deleteUserByCreation);
//Export API routes
module.exports = router;