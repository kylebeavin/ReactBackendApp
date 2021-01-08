//initialize express router
let router = require('express').Router();
//Import Controllers
var locationController = require('../controllers/locationController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Location routes
router.route('/locations')
    .get(verifyToken.verifyToken, locationController.view)
    .post(verifyToken.verifyToken, locationController.add)
router.route('/locationsBy')
    .post(verifyToken.verifyToken, locationController.view)
router.route('/locations/:_id')
    .put(verifyToken.verifyToken, locationController.update)
    .patch(verifyToken.verifyToken, locationController.update)
    .delete(verifyToken.verifyToken, locationController.delete)

//Export API routes
module.exports = router;