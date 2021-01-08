//initialize express router
let router = require('express').Router();
//Import Controllers
var accountController = require('../controllers/accountController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Account routes
router.route('/accounts')
    .get(verifyToken.verifyToken, accountController.view)
    .post(verifyToken.verifyToken, accountController.add)
router.route('/accountsBy')
    .post(verifyToken.verifyToken, accountController.view)
router.route('/accounts/:_id')
    .put(verifyToken.verifyToken, accountController.update)
    .patch(verifyToken.verifyToken, accountController.update)
    .delete(verifyToken.verifyToken, accountController.delete)

//Export API routes
module.exports = router;