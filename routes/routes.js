//initialize express router
let router = require('express').Router();
//Import Controllers
var userController = require('../controllers/userController.js');
var groupController = require('../controllers/groupController.js');
var accountController = require('../controllers/accountController.js');
var contactController = require('../controllers/contactController.js');
var truckController = require('../controllers/truckController.js');
var inspectionController = require('../controllers/inspectionController.js');
var invoiceController = require('../controllers/invoiceController.js');
var locationController = require('../controllers/locationController.js');
var adminController = require('../controllers/adminController.js');

//set default API response
router
    .get('/', function(req, res) {
        res.json({
            status: 'API Works',
            message: 'Welcome to SMT API'
        });
    });




// User routes
router.route('/users')
    .get(userController.server)
    .post(userController.add);

router.route('/usersById/:_id')
    .get(userController.viewUserById)
    .patch(userController.updateUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById);

// router.route('/usersByQuery/:role') // Get all users by role
//     .get(userController.viewByQuery)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);

router.route('/usersByGroup/:group_id') // Get all users in group
    .get(userController.viewUserByGroup)
    .patch(userController.updateUserByGroup)
    .put(userController.updateUserByGroup)
    .delete(userController.deleteUserByGroup);

router.route('/usersByRole/:role') // Get all users by role
    .get(userController.viewUserByRole)
    .patch(userController.updateUserByRole)
    .put(userController.updateUserByRole)
    .delete(userController.deleteUserByRole);

router.route('/usersByEmail/:email') // Gets user by email
    .get(userController.viewUserByEmail)
    .patch(userController.updateUserByEmail)
    .put(userController.updateUserByEmail)
    .delete(userController.deleteUserByEmail);

router.route('/usersByStatus/:status') // Gets users by status
    .get(userController.viewUserByStatus)
    .patch(userController.updateUserByStatus)
    .put(userController.updateUserByStatus)
    .delete(userController.deleteUserByStatus);

router.route('/usersByCreated/:created') // Gets users by status
    .get(userController.viewUserByCreated)
    .patch(userController.updateUserByCreated)
    .put(userController.updateUserByCreated)
    .delete(userController.deleteUserByCreated);



// Group routes

router.route('/groups')
    .get(groupController.server)
    .post(groupController.add);


router.route('/groupsByObjectId/:_id')
    .get(groupController.viewGroupById)
    .patch(groupController.update)
    .put(groupController.update)
    .delete(groupController.delete);

// router.route('/groupsByEmail/:email')
//     .get(groupController.viewGroupByEmail)
// //     // .patch(groupController.update)
// //     // .put(groupController.update)
// //     // .delete(groupController.delete);

// Account routes
router.route('/accounts')
    .get(accountController.server)
    .post(accountController.add);

router.route('/accountsById/:_id')
    .get(accountController.viewAccountById)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);


router.route('/accountsByGroup/:group_id')
    .get(accountController.viewAccountByGroup)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByName/:name')
    .get(accountController.viewAccountByName)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByOwnerId/:owner_id')
    .get(accountController.viewAccountByOwnerId)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByIsActive/:is_active')
    .get(accountController.viewAccountByIsActive)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByStage/:stage')
    .get(accountController.viewAccountByStage)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByStreet/:addressStreet')
    .get(accountController.viewAccountByStreet)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);
router.route('/accountsByCity/:addressCity')
    .get(accountController.viewAccountByCity)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByState/:addressState')
    .get(accountController.viewAccountByState)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByZip/:addressZip')
    .get(accountController.viewAccountByZip)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByEmail/:email')
    .get(accountController.viewAccountByEmail)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByCreation/:created')
    .get(accountController.viewAccountByCreation)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByDemoDate/:demo')
    .get(accountController.viewAccountByDemoDate)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByConversionDate/:conversion')
    .get(accountController.viewAccountByConversionDate)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByHaulingContract/:hauling_contract')
    .get(accountController.viewAccountByHaulingContract)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

router.route('/accountsByHaulingExpiration/:hauling_expiration')
    .get(accountController.viewAccountByHaulingExpiration)
    // .patch(accountController.update)
    // .put(accountController.update)
    // .delete(accountController.delete);

// Contact routes
router.route('/contacts')
    .get(contactController.server)
    .post(contactController.add);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);



// Truck routes
router.route('/trucks')
    .get(truckController.server)
    .post(truckController.add);

router.route('/trucks/:truck_id')
    .get(truckController.view)
    .patch(truckController.update)
    .put(truckController.update)
    .delete(truckController.delete);



// Inspection routes
router.route('/inspections')
    .get(inspectionController.server)
    .post(inspectionController.add);

router.route('/inspections/:inspection_id')
    .get(inspectionController.view)
    .patch(inspectionController.update)
    .put(inspectionController.update)
    .delete(inspectionController.delete);



// Invoice routes
router.route('/invoices')
    .get(invoiceController.server)
    .post(invoiceController.add);

router.route('/invoices/:invoice_id')
    .get(invoiceController.view)
    .patch(invoiceController.update)
    .put(invoiceController.update)
    .delete(invoiceController.delete);



// Location routes
router.route('/locations')
    .get(locationController.server)
    .post(locationController.add);

router.route('/locations/:location_id')
    .get(locationController.view)
    .patch(locationController.update)
    .put(locationController.update)
    .delete(locationController.delete);



// Admin routes
router.route('/admins')
    .get(adminController.server)
    .post(adminController.add);

router.route('/admins/:admin_id')
    .get(adminController.view)
    .patch(adminController.update)
    .put(adminController.update)
    .delete(adminController.delete);

//Export API routes
module.exports = router;