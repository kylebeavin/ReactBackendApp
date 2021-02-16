//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update } from '../../controllers/pretripController'
import {verifyToken} from '../../middleware/verifyToken'
import PreTrip from '../../models/pretripModel'
const router = express.Router()
// Inspection routes
router.route('/pre-trip')
    .get(verifyToken, view)
    .post(verifyToken, add)
    // .put(verifyToken, update)
    // .patch(verifyToken, update)
    // .delete(verifyToken)

// router.route('/inspectionsBy')
//     .post(verifyToken, view)

//Export API routes
export default router