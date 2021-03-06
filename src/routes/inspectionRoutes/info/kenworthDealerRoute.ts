//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/info/kenworthDealerController'
import {verifyToken} from '../../../middleware/verifyToken'
import KenworthDealer from '../../../models/inspectionModels/info/kenworthDealerModel'
const router = express.Router()
// Inspection routes
router.route('/kenworthDealer')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router