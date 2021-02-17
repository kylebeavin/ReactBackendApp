//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/driver/biWeeklyController'
import {verifyToken} from '../../../middleware/verifyToken'
import BiWeekly from '../../../models/inspectionModels/driver/biWeeklyModel'
const router = express.Router()
// Inspection routes
router.route('/bi-weekly')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router