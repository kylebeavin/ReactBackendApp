//initialize express router
let router = require('express').Router();
//Import Controllers
var orderController = require('../controllers/orderController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Order routes
router.route('/orders')
    .get(verifyToken.verifyToken, orderController.view)
    .post(verifyToken.verifyToken, orderController.add)
    .put(verifyToken.verifyToken, orderController.update)
    .patch(verifyToken.verifyToken, orderController.update)
    .delete(verifyToken.verifyToken, orderController.delete)
router.route('/ordersBy')
    .post(verifyToken.verifyToken, orderController.view)

//Export API routes
module.exports = router;