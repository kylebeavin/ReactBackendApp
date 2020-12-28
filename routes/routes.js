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
var meetingController = require('../controllers/meetingController.js');

//set default API response
router
    .post('/', function (req, res) {
        res.json({
            status: 'API Works',
            message: 'Welcome to SMT API'
        });
    });

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

// Account routes
router.route('/accountsAll')
    .post(accountController.viewAll)
router.route('/accountsAdd')
    .post(accountController.add);

router.route('/accountsById/:_id')
    .post(accountController.viewAccountById)
    .post(accountController.updateAccountById)
    .post(accountController.updateAccountById)
    .post(accountController.deleteAccountById);

router.route('/accountsByGroup/:group_id')
    .post(accountController.viewAccountByGroup)
    .post(accountController.updateAccountByGroup)
    .post(accountController.updateAccountByGroup)
    .post(accountController.deleteAccountByGroup);

router.route('/accountsByName/:name')
    .post(accountController.viewAccountByName)
    .post(accountController.updateAccountByName)
    .post(accountController.updateAccountByName)
    .post(accountController.deleteAccountByName);

router.route('/accountsByOwnerId/:owner_id')
    .post(accountController.viewAccountByOwnerId)
    .post(accountController.updateAccountByOwnerId)
    .post(accountController.updateAccountByOwnerId)
    .post(accountController.deleteAccountByOwnerId);

router.route('/accountsByIsActive/:is_active')
    .post(accountController.viewAccountByIsActive)
    .post(accountController.updateAccountByIsActive)
    .post(accountController.updateAccountByIsActive)
    .post(accountController.deleteAccountByIsActive);

router.route('/accountsByStage/:stage')
    .post(accountController.viewAccountByStage)
    .post(accountController.updateAccountByStage)
    .post(accountController.updateAccountByStage)
    .post(accountController.deleteAccountByStage);

router.route('/accountsByStreet/:address_street')
    .post(accountController.viewAccountByStreet)
    .post(accountController.updateAccountByStreet)
    .post(accountController.updateAccountByStreet)
    .post(accountController.deleteAccountByStreet);

router.route('/accountsByCity/:address_city')
    .post(accountController.viewAccountByCity)
    .post(accountController.updateAccountByCity)
    .post(accountController.updateAccountByCity)
    .post(accountController.deleteAccountByCity);

router.route('/accountsByState/:address_state')
    .post(accountController.viewAccountByState)
    .post(accountController.updateAccountByState)
    .post(accountController.updateAccountByState)
    .post(accountController.deleteAccountByState);

router.route('/accountsByZip/:address_zip')
    .post(accountController.viewAccountByZip)
    .post(accountController.updateAccountByZip)
    .post(accountController.updateAccountByZip)
    .post(accountController.deleteAccountByZip);

router.route('/accountsByEmail/:email')
    .post(accountController.viewAccountByEmail)
    .post(accountController.updateAccountByEmail)
    .post(accountController.updateAccountByEmail)
    .post(accountController.deleteAccountByEmail);

router.route('/accountsByCreation/:created')
    .post(accountController.viewAccountByCreation)
    .post(accountController.updateAccountByCreation)
    .post(accountController.updateAccountByCreation)
    .post(accountController.deleteAccountByCreation);

router.route('/accountsByDemoDate/:demo')
    .post(accountController.viewAccountByDemoDate)
    .post(accountController.updateAccountByDemoDate)
    .post(accountController.updateAccountByDemoDate)
    .post(accountController.deleteAccountByDemoDate);

router.route('/accountsByConversionDate/:conversion')
    .post(accountController.viewAccountByConversionDate)
    .post(accountController.updateAccountByConversionDate)
    .post(accountController.updateAccountByConversionDate)
    .post(accountController.deleteAccountByConversionDate);

router.route('/accountsByHaulingContract/:hauling_contract')
    .post(accountController.viewAccountByHaulingContract)
    .post(accountController.updateAccountByHaulingContract)
    .post(accountController.updateAccountByHaulingContract)
    .post(accountController.deleteAccountByContractStatus);

router.route('/accountsByHaulingExpiration/:hauling_expiration')
    .post(accountController.viewAccountByHaulingExpiration)
    .post(accountController.updateAccountByHaulingExpiration)
    .post(accountController.updateAccountByHaulingExpiration)
    .post(accountController.deleteAccountByHaulingExpiration);

// Prospect routes
router.route('/prospectsAll')
    .post(prospectController.viewAll)
router.route('/prospectsAdd')
    .post(prospectController.add);

router.route('/prospectsById/:_id')
    .post(prospectController.viewProspectById)
    .post(prospectController.updateProspectById)
    .post(prospectController.updateProspectById)
    .post(prospectController.deleteProspectById);

router.route('/prospectsByGroup/:group_id')
    .post(prospectController.viewProspectByGroup)
    .post(prospectController.updateProspectByGroup)
    .post(prospectController.updateProspectByGroup)
    .post(prospectController.deleteProspectByGroupId);

router.route('/prospectsByName/:name')
    .post(prospectController.viewProspectByName)
    .post(prospectController.updateProspectByName)
    .post(prospectController.updateProspectByName)
    .post(prospectController.deleteProspectByName);

router.route('/prospectsByOwnerId/:owner_id')
    .post(prospectController.viewProspectByOwnerId)
    .post(prospectController.updateProspectByOwnerId)
    .post(prospectController.updateProspectByOwnerId)
    .post(prospectController.deleteProspectByOwnerId);

router.route('/prospectsByIsActive/:is_active')
    .post(prospectController.viewProspectByIsActive)
    .post(prospectController.updateProspectByIsActive)
    .post(prospectController.updateProspectByIsActive)
    .post(prospectController.deleteProspectByIsActiveStatus);

router.route('/prospectsByStage/:stage')
    .post(prospectController.viewProspectByStage)
    .post(prospectController.updateProspectByStage)
    .post(prospectController.updateProspectByStage)
    .post(prospectController.deleteProspectByStage);

router.route('/prospectsByGeoLocation/:geo')
    .post(prospectController.viewProspectByGeoLocation)
    .post(prospectController.updateProspectByGeoLocation)
    .post(prospectController.updateProspectByGeoLocation)
    .post(prospectController.deleteProspectByGeoLocation);

router.route('/prospectByCreation/:created')
    .post(prospectController.viewProspectByCreation)
    .post(prospectController.updateProspectByCreation)
    .post(prospectController.updateProspectByCreation)
    .post(prospectController.deleteProspectByCreation);

// Contact routes
router.route('/contactsAll')
    .post(contactController.viewAll)
router.route('/contactsAdd')
    .post(contactController.add);

router.route('/contacts/:contact_id')
    .post(contactController.view)
    .post(contactController.update)
    .post(contactController.update)
    .post(contactController.delete);

router.route('/viewContactsByAccountId/:account_id')
    .post(contactController.viewContactsByAccountId)

// Truck routes
router.route('/trucksAll')
    .post(truckController.viewAll)
router.route('/trucksAdd')
    .post(truckController.add);

router.route('/trucks/:truck_id')
    .post(truckController.view)
    .post(truckController.update)
    .post(truckController.update)
    .post(truckController.delete);

// Inspection routes
router.route('/inspectionsAll')
    .post(inspectionController.viewAll)
router.route('/inspectionsAdd')
    .post(inspectionController.add);

router.route('/inspections/:inspection_id')
    .post(inspectionController.view)
    .post(inspectionController.update)
    .post(inspectionController.update)
    .post(inspectionController.delete);

// Invoice routes
router.route('/invoices')
    .post(invoiceController.viewAll)
router.route('/invoices')
    .post(invoiceController.add);

router.route('/invoices/:invoice_id')
    .post(invoiceController.view)
    .post(invoiceController.update)
    .post(invoiceController.update)
    .post(invoiceController.delete);

// Location routes
router.route('/locations')
    .post(locationController.viewAll)
router.route('/locations')
    .post(locationController.add);

router.route('/locations/:location_id')
    .post(locationController.view)
    .post(locationController.update)
    .post(locationController.update)
    .post(locationController.delete);

// Admin routes
router.route('/admins')
    .post(adminController.viewAll)
router.route('/admins')
    .post(adminController.add);

router.route('/admins/:admin_id')
    .post(adminController.view)
    .post(adminController.update)
    .post(adminController.update)
    .post(adminController.delete);

// Meeting routes
router.route('/meetingsAll')
    .post(meetingController.viewAll)
router.route('/meetingsAdd')
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