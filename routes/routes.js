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
router.route('/all_users')
    .get(userController.server)
    .post(userController.add);

router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);


//Import Group Controller
var groupController = require('../controllers/groupController.js');  

// Group routes
router.route('/user/:group_id')
    .get(groupController.view)

//Import Accounts Controller
var accountController = require('../controllers/accountController.js');  

// Account routes
router.route('/user/:account_id')
    .get(accountController.view)

//Export API routes
module.exports = router;