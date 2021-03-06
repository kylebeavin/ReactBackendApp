//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/driver/pretripController'
import {verifyToken} from '../../../middleware/verifyToken'
import PreTrip from '../../../models/inspectionModels/driver/pretripModel'
const router = express.Router()
// Inspection routes
router.route('/pre-trip')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

router.route('/pre-tripBy')
    .post(verifyToken, view)

//Export API routes
export default router