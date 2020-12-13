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
    .get('/', function (req, res) {
        res.json({
            status: 'API Works',
            message: 'Welcome to SMT API'
        });
    });




// User routes
router.route('/users')
    .get(userController.server)
    .post(userController.add);

router.route('/userByStatus/:status')
    .get(userController.viewByStatus)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);

router.route('/userById/:_id')
    .get(userController.viewById)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

router.route('/userByCreation/:created_at')
    .get(userController.viewByCreation)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);

router.route('/userByEmail/:email')
    .get(userController.viewByEmail)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);

router.route('/userById/:user_id')
    .get(userController.viewByUserId)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);

router.route('/userByRole/:role') // TODO: Fix this.
    .get(userController.viewByRole)
// .patch(userController.update)
// .put(userController.update)
// .delete(userController.delete);


router.route('/groups')
    .get(groupController.server)
    .post(groupController.add);

// Group routes
router.route('/groups/:group_id')
    .get(groupController.view)
    .patch(groupController.update)
    .put(groupController.update)
    .delete(groupController.delete);



// Account routes
router.route('/accounts')
    .get(accountController.server)
    .post(accountController.add);

router.route('/accounts/:account_id')
    .get(accountController.view)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);


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