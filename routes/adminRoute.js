//initialize express router
let router = require('express').Router();
//Import Controllers
var adminController = require('../controllers/adminController.js');
// Admin routes
router.route('/admins')
    .get(adminController.view)
    .post(adminController.add)
router.route('/adminsBy')
    .post(adminController.view)
router.route('/admins/:_id')
    .put(adminController.update)
    .patch(adminController.update)
    .delete(adminController.delete)

//Export API routes
module.exports = router;