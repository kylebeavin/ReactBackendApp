//initialize express router
let router = require('express').Router();
//Import Controllers
var adminController = require('../controllers/adminController.js');

// Admin routes
router.route('/admins')
    .post(adminController.viewAll)
router.route('/admins')
    .post(adminController.add);

router.route('/admins/:admin_id')
    .post(adminController.view)
    .post(adminController.update)
    .post(adminController.update)
    .post(adminController.delete);

//Export API routes
module.exports = router;