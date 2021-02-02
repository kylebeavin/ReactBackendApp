//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update , remove} from '../controllers/contactController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()
// Contacts routes
router.route('/inspections')
    .get(verifyToken, view)
    .post(verifyToken, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    .delete(verifyToken, remove)

router.route('/inspectionsBy')
    .post(verifyToken, view)

//Export API routes
export default router