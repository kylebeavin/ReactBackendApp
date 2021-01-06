//initialize express router
let router = require('express').Router();
//Import Controllers
var locationController = require('../controllers/locationController.js');
// Location routes
router.route('/locations')
    .get(locationController.view)
    .post(locationController.add)
router.route('/locationsBy')
    .post(locationController.view)
router.route('/locations/:_id')
    .put(locationController.update)
    .patch(locationController.update)
    .delete(locationController.delete)

//Export API routes
module.exports = router;