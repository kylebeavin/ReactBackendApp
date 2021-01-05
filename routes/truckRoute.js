//initialize express router
let router = require('express').Router();
//Import Controllers
var truckController = require('../controllers/truckController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/trucks')
    .get(queryController.query)
    .post(truckController.add)
    // Truck routes
router.route('/trucks/:_id')
    .put(truckController.update)
    .patch(truckController.update)
    .delete(truckController.delete)

//Export API routes
module.exports = router;