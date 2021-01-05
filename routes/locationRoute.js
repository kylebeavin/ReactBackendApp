//initialize express router
let router = require('express').Router();
//Import Controllers
var locationController = require('../controllers/locationController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/locations')
    .get(queryController.query)
    .post(locationController.add)
    // Truck routes
router.route('/locations/:_id')
    .put(locationController.update)
    .patch(locationController.update)
    .delete(locationController.delete)

//Export API routes
module.exports = router;