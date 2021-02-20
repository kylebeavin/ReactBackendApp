//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/tech/hydraulicFilterController'
import {verifyToken} from '../../../middleware/verifyToken'
import HydraulicFilter from '../../../models/inspectionModels/tech/hydraulicFilterModel'
const router = express.Router()
// Inspection routes
router.route('/hydraulicFilter')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router