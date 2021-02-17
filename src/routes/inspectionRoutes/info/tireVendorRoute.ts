//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/info/tireVendorController'
import {verifyToken} from '../../../middleware/verifyToken'
import TireVendor from '../../../models/inspectionModels/info/tireVendorModel'
const router = express.Router()
// Inspection routes
router.route('/tireVendor')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router