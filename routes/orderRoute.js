const  verifyToken = require('../middleware/verifyToken.js');
const  orderController = require('../controllers/orderController.js')
//initialize express router
const router = require('express').Router();
//use the middleware for any requests passed to this route
router.use((req,res,next)=>{
    verifyToken.verifyToken()
    next()
})
//Import Controllers
router.route('/orders')
    .get( orderController.view)
    .post( orderController.add)
router.route('/ordersBy')
    .post(orderController.view)
router.route('/orders/:_id')
    .put(orderController.update)
    .patch(orderController.update)
    .delete(orderController.delete)

//Export API routes
module.exports = router;

