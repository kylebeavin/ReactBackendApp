//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/info/bigRigServiceController'
import {verifyToken} from '../../../middleware/verifyToken'
import BigRigService from '../../../models/inspectionModels/info/bigRigServiceModel'
const router = express.Router()
// Inspection routes
router.route('/bigRigService')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router