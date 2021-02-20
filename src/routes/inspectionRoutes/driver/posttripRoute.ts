//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/driver/posttripController'
import {verifyToken} from '../../../middleware/verifyToken'
import PostTrip from '../../../models/inspectionModels/driver/posttripModel'
const router = express.Router()
// Inspection routes
router.route('/post-trip')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router