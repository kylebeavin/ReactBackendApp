//initialize express router
let router = require('express').Router();
//Import Controllers
var invoiceController = require('../controllers/invoiceController.js');

// Invoice routes
router.route('/invoices')
    .post(invoiceController.viewAll)
router.route('/invoices')
    .post(invoiceController.add);

router.route('/invoices/:invoice_id')
    .post(invoiceController.view)
    .post(invoiceController.update)
    .post(invoiceController.update)
    .post(invoiceController.delete);
//Export API routes
module.exports = router;