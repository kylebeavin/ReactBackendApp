//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../controllers/routeController'
import {verifyToken} from '../middleware/verifyToken'

import Route from '../models/routeModel'
const router = express.Router()
// Inspection routes
router.route('/routes')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router