//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update} from '../controllers/meetingController'
import {verifyToken} from '../middleware/verifyToken'
import {meetingValidatorPost, meetingValidatorUpdate} from '../validators'
const router = express.Router()
import {check} from 'express-validator'
// Account routes
router.route('/meetings')
    .get(verifyToken, view)
    .post(verifyToken,meetingValidatorPost(), add)
    .put(verifyToken, meetingValidatorUpdate(),update)
    .patch(verifyToken, meetingValidatorUpdate(),update)
    .delete( verifyToken )
router.route('/meetingsBy')
    .post(verifyToken, view)

//Export API routes
 export default router