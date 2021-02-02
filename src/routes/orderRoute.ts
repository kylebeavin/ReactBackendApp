//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update} from '../controllers/orderController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()
// Order routes
router.route('/orders')
    .get(verifyToken, view)
    .post(verifyToken, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    .delete(verifyToken, )
router.route('/ordersBy')
    .post(verifyToken, view)

//Export API routes
export default router