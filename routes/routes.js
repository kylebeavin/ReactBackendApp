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
router.route('/user/:group_id')
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

router.route('/user/:account_id')
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

router.route('/user/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
//Export API routes
module.exports = router;