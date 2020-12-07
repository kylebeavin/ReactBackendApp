//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to SMT API'
    });
});

//Import User Controller
var userController = require('../controllers/userController.js');

// User routes
router.route('/users')
    .get(userController.server)
    .post(userController.add);

router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

//Import Group Controller
var groupController = require('../controllers/groupController.js');

router.route('/groups')
    .get(groupController.server)
    .post(groupController.add);

// Group routes
router.route('/groups/:group_id')
    .get(groupController.view)
    .patch(groupController.update)
    .put(groupController.update)
    .delete(groupController.delete);

//Import Accounts Controller
var accountController = require('../controllers/accountController.js');  

// Account routes
router.route('/accounts')
    .get(accountController.server)
    .post(accountController.add);

router.route('/accounts/:account_id')
    .get(accountController.view)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);

//Import Contact Controller
var contactController = require('../controllers/contactController.js');  

// Account routes
router.route('/contacts')
    .get(contactController.server)
    .post(contactController.add);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

//Import Truck Controller
var truckController = require('../controllers/truckController.js');  

// Truck routes
router.route('/truck')
    .get(truckController.server)
    .post(truckController.add);

router.route('/truck/:truck_id')
    .get(truckController.view)
    .patch(truckController.update)
    .put(truckController.update)
    .delete(truckController.delete);

//Import Inspection Controller
var inspectionController = require('../controllers/inspectionController.js');  

// Inspection routes
router.route('/inspection')
    .get(inspectionController.server)
    .post(inspectionController.add);

router.route('/inspection/:inspection_id')
    .get(inspectionController.view)
    .patch(inspectionController.update)
    .put(inspectionController.update)
    .delete(inspectionController.delete);

//Import Invoice Controller
var invoiceController = require('../controllers/invoiceController.js');  

// Inspection routes
router.route('/invoice')
    .get(invoiceController.server)
    .post(invoiceController.add);

router.route('/invoice/:invoice_id')
    .get(invoiceController.view)
    .patch(invoiceController.update)
    .put(invoiceController.update)
    .delete(invoiceController.delete);

//Import Location Controller
var locationController = require('../controllers/locationController.js');  

// Inspection routes
router.route('/location')
    .get(locationController.server)
    .post(locationController.add);

router.route('/location/:location_id')
    .get(locationController.view)
    .patch(locationController.update)
    .put(locationController.update)
    .delete(locationController.delete);

//Export API routes
module.exports = router;