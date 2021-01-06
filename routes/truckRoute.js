//initialize express router
let router = require('express').Router();
//Import Controllers
var truckController = require('../controllers/truckController.js');
// Truck routes
router.route('/trucks')
    .get(truckController.view)
    .post(truckController.add)
router.route('/trucksBy')
    .post(truckController.view)
router.route('/trucks/:_id')
    .put(truckController.update)
    .patch(truckController.update)
    .delete(truckController.delete)

//Export API routes
module.exports = router;