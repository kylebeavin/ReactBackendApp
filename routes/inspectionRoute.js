//initialize express router
let router = require('express').Router();
//Import Controllers
var inspectionController = require('../controllers/inspectionController.js');

// Inspection routes
router.route('/inspectionsAll')
    .post(inspectionController.viewAll)
router.route('/inspectionsAdd')
    .post(inspectionController.add);

router.route('/inspections/:inspection_id')
    .post(inspectionController.view)
    .post(inspectionController.update)
    .post(inspectionController.update)
    .post(inspectionController.delete);
//Export API routes
module.exports = router;