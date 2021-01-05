//initialize express router
let router = require('express').Router();
//Import Controllers
var inspectionController = require('../controllers/inspectionController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/inspections')
    .get(queryController.query)
    .post(inspectionController.add)
    // Truck routes
router.route('/inspections/:_id')
    .put(inspectionController.update)
    .patch(inspectionController.update)
    .delete(inspectionController.delete)

//Export API routes
module.exports = router;