//initialize express router
let router = require('express').Router();
//Import Controllers
var invoiceController = require('../controllers/invoiceController.js');
var queryController = require('../functions/query.js');
// Truck routes
router.route('/invoices')
    .get(queryController.query)
    .post(invoiceController.add)
    // Truck routes
router.route('/invoices/:_id')
    .put(invoiceController.update)
    .patch(invoiceController.update)
    .delete(invoiceController.delete)

//Export API routes
module.exports = router;