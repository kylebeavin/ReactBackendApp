//initialize express router
let router = require('express').Router();
//Import Controllers
var accountController = require('../controllers/accountController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Account routes
router.route('/accounts')
    .get(verifyToken.verifyToken, accountController.view)
    .post(verifyToken.verifyToken, accountController.add)
    .put(verifyToken.verifyToken, accountController.update)
    .patch(verifyToken.verifyToken, accountController.update)
    .delete(verifyToken.verifyToken, accountController.delete)
router.route('/accountsBy')
    .post(verifyToken.verifyToken, accountController.view)

//Export API routes
module.exports = router;