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
var prospectController = require('../controllers/prospectController.js');

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
    .patch(accountController.updateAccountById)
    .put(accountController.updateAccountById)
    .delete(accountController.deleteAccountById);

router.route('/accountsByGroup/:group_id')
    .get(accountController.viewAccountByGroup)
    .patch(accountController.updateAccountByGroup)
    .put(accountController.updateAccountByGroup)
    .delete(accountController.deleteAccountByGroup);

router.route('/accountsByName/:name')
    .get(accountController.viewAccountByName)
    .patch(accountController.updateAccountByName)
    .put(accountController.updateAccountByName)
    .delete(accountController.deleteAccountByName);

router.route('/accountsByOwnerId/:owner_id')
    .get(accountController.viewAccountByOwnerId)
    .patch(accountController.updateAccountByOwnerId)
    .put(accountController.updateAccountByOwnerId)
    .delete(accountController.deleteAccountByOwnerId);

router.route('/accountsByIsActive/:is_active')
    .get(accountController.viewAccountByIsActive)
    .patch(accountController.updateAccountByIsActive)
    .put(accountController.updateAccountByIsActive)
    .delete(accountController.deleteAccountByIsActive);

router.route('/accountsByStage/:stage')
    .get(accountController.viewAccountByStage)
    .patch(accountController.updateAccountByStage)
    .put(accountController.updateAccountByStage)
    .delete(accountController.deleteAccountByStage);

router.route('/accountsByStreet/:addressStreet')
    .get(accountController.viewAccountByStreet)
    .patch(accountController.updateAccountByStreet)
    .put(accountController.updateAccountByStreet)
    .delete(accountController.deleteAccountByStreet);

router.route('/accountsByCity/:addressCity')
    .get(accountController.viewAccountByCity)
    .patch(accountController.updateAccountByCity)
    .put(accountController.updateAccountByCity)
    .delete(accountController.deleteAccountByCity);

router.route('/accountsByState/:addressState')
    .get(accountController.viewAccountByState)
    .patch(accountController.updateAccountByState)
    .put(accountController.updateAccountByState)
    .delete(accountController.deleteAccountByState);

router.route('/accountsByZip/:addressZip')
    .get(accountController.viewAccountByZip)
    .patch(accountController.updateAccountByZip)
    .put(accountController.updateAccountByZip)
    .delete(accountController.deleteAccountByZip);

router.route('/accountsByEmail/:email')
    .get(accountController.viewAccountByEmail)
    .patch(accountController.updateAccountByEmail)
    .put(accountController.updateAccountByEmail)
    .delete(accountController.deleteAccountByEmail);

router.route('/accountsByCreation/:created')
    .get(accountController.viewAccountByCreation)
    .patch(accountController.updateAccountByCreation)
    .put(accountController.updateAccountByCreation)
    .delete(accountController.deleteAccountByCreation);

router.route('/accountsByDemoDate/:demo')
    .get(accountController.viewAccountByDemoDate)
    .patch(accountController.updateAccountByDemoDate)
    .put(accountController.updateAccountByDemoDate)
    .delete(accountController.deleteAccountByDemoDate);

router.route('/accountsByConversionDate/:conversion')
    .get(accountController.viewAccountByConversionDate)
    .patch(accountController.updateAccountByConversionDate)
    .put(accountController.updateAccountByConversionDate)
    .delete(accountController.deleteAccountByConversionDate);

router.route('/accountsByHaulingContract/:hauling_contract')
    .get(accountController.viewAccountByHaulingContract)
    .patch(accountController.updateAccountByHaulingContract)
    .put(accountController.updateAccountByHaulingContract)
    .delete(accountController.deleteAccountByContractStatus);

router.route('/accountsByHaulingExpiration/:hauling_expiration')
    .get(accountController.viewAccountByHaulingExpiration)
    .patch(accountController.updateAccountByHaulingExpiration)
    .put(accountController.updateAccountByHaulingExpiration)
    .delete(accountController.deleteAccountByHaulingExpiration);

// Prospect routes
router.route('/prospects')
    .get(prospectController.server)
    .post(prospectController.add);

router.route('/prospectsById/:_id')
    .get(prospectController.viewProspectById)
    .patch(prospectController.updateProspectById)
    .put(prospectController.updateProspectById)
    .delete(prospectController.deleteProspectById);

router.route('/prospectsByGroup/:group_id')
    .get(prospectController.viewProspectByGroup)
    .patch(prospectController.updateProspectByGroup)
    .put(prospectController.updateProspectByGroup)
    .delete(prospectController.deleteProspectByGroupId);

router.route('/prospectsByName/:name')
    .get(prospectController.viewProspectByName)
    .patch(prospectController.updateProspectByName)
    .put(prospectController.updateProspectByName)
    .delete(prospectController.deleteProspectByName);

router.route('/prospectsByOwnerId/:owner_id')
    .get(prospectController.viewProspectByOwnerId)
    .patch(prospectController.updateProspectByOwnerId)
    .put(prospectController.updateProspectByOwnerId)
    .delete(prospectController.deleteProspectByOwnerId);

router.route('/prospectsByIsActive/:is_active')
    .get(prospectController.viewProspectByIsActive)
    .patch(prospectController.updateProspectByIsActive)
    .put(prospectController.updateProspectByIsActive)
    .delete(prospectController.deleteProspectByIsActiveStatus);

router.route('/prospectsByStage/:stage')
    .get(prospectController.viewProspectByStage)
    .patch(prospectController.updateProspectByStage)
    .put(prospectController.updateProspectByStage)
    .delete(prospectController.deleteProspectByStage);

router.route('/prospectsByGeoLocation/:geo')
    .get(prospectController.viewProspectByGeoLocation)
    .patch(prospectController.updateProspectByGeoLocation)
    .put(prospectController.updateProspectByGeoLocation)
    .delete(prospectController.deleteProspectByGeoLocation);

router.route('/prospectByCreation/:created')
    .get(prospectController.viewProspectByCreation)
    .patch(prospectController.updateProspectByCreation)
    .put(prospectController.updateProspectByCreation)
    .delete(prospectController.deleteProspectByCreation);

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