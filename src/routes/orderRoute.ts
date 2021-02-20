//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update} from '../controllers/orderController'
import {verifyToken} from '../middleware/verifyToken'
import {orderValidatorPost, orderValidatorUpdate} from '../validators'
const router = express.Router()
// Order routes
router.route('/orders')
    .get(verifyToken, view)
    .post(verifyToken, orderValidatorPost(),add)
    .put(verifyToken, orderValidatorUpdate(),update)
    .patch(verifyToken, orderValidatorUpdate(),update)
    .delete(verifyToken, )
router.route('/ordersBy')
    .post(verifyToken, view)

//Export API routes
export default router