//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/weeklyDriverController'
import {verifyToken} from '../../../middleware/verifyToken'
import Weekly from '../../../models/inspectionModels/weeklyDriverModel'
const router = express.Router()
// Inspection routes
router.route('/weekly')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router