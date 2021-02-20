//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/info/emergencyServiceController'
import {verifyToken} from '../../../middleware/verifyToken'
import EmergencyService from '../../../models/inspectionModels/info/emergencyServiceModel'
const router = express.Router()
// Inspection routes
router.route('/emergencyService')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router