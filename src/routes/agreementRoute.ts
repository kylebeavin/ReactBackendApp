//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../controllers/agreementController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()
// Agreement routes
router.route('/agreements')
    .get(verifyToken, view)
    .post(verifyToken , add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    .delete(verifyToken )
router.route('/agreementsBy')
    .post(verifyToken, view)

//Export API routes
export default router