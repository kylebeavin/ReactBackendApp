//initialize express router
let router = require('express').Router();
//Import Controllers
var orderController = require('../controllers/orderController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Order routes
router.route('/orders')
    .get(verifyToken.verifyToken, orderController.view)
    .post(verifyToken.verifyToken, orderController.add)
router.route('/ordersBy')
    .post(verifyToken.verifyToken, orderController.view)
router.route('/orders/:_id')
    .put(verifyToken.verifyToken, orderController.update)
    .patch(verifyToken.verifyToken, orderController.update)
    .delete(verifyToken.verifyToken, orderController.delete)
router.route('/orderbydate')
    .get(verifyToken.verifyToken, orderController.getCalendarDates)
//Export API routes
module.exports = router;