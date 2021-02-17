//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../../controllers/inspectionControllers/tech/gearboxController'
import {verifyToken} from '../../../middleware/verifyToken'
import Gearbox from '../../../models/inspectionModels/tech/gearboxModel'
const router = express.Router()
// Inspection routes
router.route('/gearbox')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router