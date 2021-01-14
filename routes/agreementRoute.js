//initialize express router
let router = require('express').Router();
//Import Controllers
var agreementController = require('../controllers/agreementController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Agreement routes
router.route('/agreements')
    .get(verifyToken.verifyToken, agreementController.view)
    .post(verifyToken.verifyToken, agreementController.add)
router.route('/agreementsBy')
    .post(verifyToken.verifyToken, agreementController.view)
router.route('/agreements/:_id')
    .put(verifyToken.verifyToken, agreementController.update)
    .patch(verifyToken.verifyToken, agreementController.update)
    .delete(verifyToken.verifyToken, agreementController.delete)

//Export API routes
module.exports = router;