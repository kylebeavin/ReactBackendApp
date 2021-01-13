//initialize express router
let router = require('express').Router();
//Import Controllers
var prospectController = require('../controllers/prospectsGeoJsonController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Prospect routes
router.route('/geojson')
    .get(verifyToken.verifyToken, prospectController.view)
    .post(verifyToken.verifyToken, prospectController.add)


//Export API routes
module.exports = router;