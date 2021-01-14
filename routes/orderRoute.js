const  verifyToken = require('../middleware/verifyToken.js');
const  orderController = require('../controllers/orderController.js')
//initialize express router
const router = require('express').Router();

//Import Controllers
router.route('/orders')
    .get( verifyToken.verifyToken, orderController.view)
    .post(verifyToken.verifyToken, orderController.add)
router.route('/ordersBy')
    .post(verifyToken.verifyToken, orderController.view)
router.route('/orders/:_id')
    .put(verifyToken.verifyToken, orderController.update)
    .patch(verifyToken.verifyToken, orderController.update)
    .delete(verifyToken.verifyToken,orderController.delete)

//Export API routes
module.exports = router;

