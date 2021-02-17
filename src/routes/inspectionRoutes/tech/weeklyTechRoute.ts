//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/tech/weeklyController'
import {verifyToken} from '../../../middleware/verifyToken'
import Weekly from '../../../models/inspectionModels/tech/weeklyTechModel'
const router = express.Router()
// Inspection routes
router.route('/weeklyTech')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router