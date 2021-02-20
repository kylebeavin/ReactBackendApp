//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../controllers/routeController'
import {verifyToken} from '../middleware/verifyToken'

const router = express.Router()
// Route routes
router.route('/routes')
    .get(verifyToken, view)
    .post(verifyToken, add)
    .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

router.route('/routesBy')
    .post(verifyToken, view)

//Export API routes
export default router