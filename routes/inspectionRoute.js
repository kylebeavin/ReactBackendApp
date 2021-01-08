//initialize express router
let router = require('express').Router();
//Import Controllers
var inspectionController = require('../controllers/inspectionController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Inspection routes
router.route('/inspections')
    .get(verifyToken.verifyToken, inspectionController.view)
    .post(verifyToken.verifyToken, inspectionController.add)
router.route('/inspectionsBy')
    .post(verifyToken.verifyToken, inspectionController.view)
router.route('/inspections/:_id')
    .put(verifyToken.verifyToken, inspectionController.update)
    .patch(verifyToken.verifyToken, inspectionController.update)
    .delete(verifyToken.verifyToken, inspectionController.delete)

//Export API routes
module.exports = router;