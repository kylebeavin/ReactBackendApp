//initialize express router
let router = require('express').Router();
//Import Controllers
var accountController = require('../controllers/accountController.js');
// Account routes
router.route('/accounts')
    .get(accountController.view)
    .post(accountController.add)
router.route('/accountsBy')
    .post(accountController.view)
router.route('/accounts/:_id')
    .put(accountController.update)
    .patch(accountController.update)
    .delete(accountController.delete)

//Export API routes
module.exports = router;