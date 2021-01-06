//initialize express router
let router = require('express').Router();
//Import Controllers
var contactController = require('../controllers/contactController.js');
// Contacts routes
router.route('/contacts')
    .get(contactController.view)
    .post(contactController.add);
// Contacts routes
router.route('/contactsBy')
    .post(contactController.view);
// Contacts routes
router.route('/contacts/:_id')
    .put(contactController.update)
    .patch(contactController.update)
    .delete(contactController.delete);

//Export API routes
module.exports = router;