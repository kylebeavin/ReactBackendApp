//initialize express router
let router = require('express').Router();
//Import Controllers
var contactController = require('../controllers/contactController.js');

// Contact routes
router.route('/contactsAll')
    .post(contactController.viewAll)
router.route('/contactsAdd')
    .post(contactController.add);

router.route('/contacts/:contact_id')
    .post(contactController.view)
    .post(contactController.update)
    .post(contactController.update)
    .post(contactController.delete);

router.route('/viewContactsByAccountId/:account_id')
    .post(contactController.viewContactsByAccountId)

//Export API routes
module.exports = router;