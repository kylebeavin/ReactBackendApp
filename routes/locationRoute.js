//initialize express router
let router = require('express').Router();
//Import Controllers
var locationController = require('../controllers/locationController.js');

// Location routes
router.route('/locations')
    .post(locationController.viewAll)
router.route('/locations')
    .post(locationController.add);

router.route('/locations/:location_id')
    .post(locationController.view)
    .post(locationController.update)
    .post(locationController.update)
    .post(locationController.delete);
//Export API routes
module.exports = router;