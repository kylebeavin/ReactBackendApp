//initialize express router
let router = require('express').Router();
//Import Controllers
var invoiceController = require('../controllers/invoiceController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Invoice routes
router.route('/invoices')
    .get(verifyToken.verifyToken, invoiceController.view)
    .post(verifyToken.verifyToken, invoiceController.add)
router.route('/invoicesBy')
    .post(verifyToken.verifyToken, invoiceController.view)
router.route('/invoices/:_id')
    .put(verifyToken.verifyToken, invoiceController.update)
    .patch(verifyToken.verifyToken, invoiceController.update)
    .delete(verifyToken.verifyToken, invoiceController.delete)

//Export API routes
module.exports = router;