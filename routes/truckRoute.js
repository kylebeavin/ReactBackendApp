//initialize express router
let router = require('express').Router();
//Import Controllers
var truckController = require('../controllers/truckController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Truck routes
router.route('/trucks')
    .get(verifyToken.verifyToken, truckController.view)
    .post(verifyToken.verifyToken, truckController.add)
router.route('/trucksBy')
    .post(verifyToken.verifyToken, truckController.view)
router.route('/trucks/:_id')
    .put(verifyToken.verifyToken, truckController.update)
    .patch(verifyToken.verifyToken, truckController.update)
    .delete(verifyToken.verifyToken, truckController.delete)

//Export API routes
module.exports = router;