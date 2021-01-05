//initialize express router
let router = require('express').Router();
//Import Controllers
var adminController = require('../controllers/adminController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/admins')
    .get(queryController.query)
    .post(adminController.add)
    // Truck routes
router.route('/admins/:_id')
    .put(adminController.update)
    .patch(adminController.update)
    .delete(adminController.delete)

//Export API routes
module.exports = router;