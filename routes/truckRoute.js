//initialize express router
let router = require('express').Router();
//Import Controllers
var truckController = require('../controllers/truckController.js');

// Truck routes
router.route('/trucksAll')
    .post(truckController.viewAll)
router.route('/trucksAdd')
    .post(truckController.add);

router.route('/trucks/:truck_id')
    .post(truckController.view)
    .post(truckController.update)
    .post(truckController.update)
    .post(truckController.delete);
//Export API routes
module.exports = router;