//initialize express router
let router = require('express').Router();
//Import Controllers
var accountController = require('../controllers/accountController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/accounts')
    .get(queryController.query)
    .post(accountController.add)
    // Truck routes
router.route('/accounts/:_id')
    .put(accountController.update)
    .patch(accountController.update)
    .delete(accountController.delete)

//Export API routes
module.exports = router;