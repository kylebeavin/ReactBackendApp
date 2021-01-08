//initialize express router
let router = require('express').Router();
//Import Controllers
var contactController = require('../controllers/contactController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Contacts routes
router.route('/contacts')
    .get(verifyToken.verifyToken, contactController.view)
    .post(verifyToken.verifyToken, contactController.add);
router.route('/contactsBy')
    .post(verifyToken.verifyToken, contactController.view);
router.route('/contacts/:_id')
    .put(verifyToken.verifyToken, contactController.update)
    .patch(verifyToken.verifyToken, contactController.update)
    .delete(verifyToken.verifyToken, contactController.delete);

//Export API routes
module.exports = router;