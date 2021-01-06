//initialize express router
let router = require('express').Router();
//Import Controllers
var inspectionController = require('../controllers/inspectionController.js');
// Inspection routes
router.route('/inspections')
    .get(inspectionController.view)
    .post(inspectionController.add)
router.route('/inspectionsBy')
    .post(inspectionController.view)
router.route('/inspections/:_id')
    .put(inspectionController.update)
    .patch(inspectionController.update)
    .delete(inspectionController.delete)

//Export API routes
module.exports = router;