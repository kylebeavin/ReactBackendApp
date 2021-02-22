//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/groupController'
const router = express.Router()
import {verifyToken } from '../middleware/verifyToken'
import {groupValidatorPost, groupValidatorUpdate} from '../validators'

// Account routes
router.route('/groups')
    .get(verifyToken, view)
    .post(verifyToken, groupValidatorPost(),add)
    .put(verifyToken, groupValidatorUpdate(),update)
    .patch(verifyToken,groupValidatorUpdate(),update)
    .delete( remove )
router.route('/groupsBy')
    .post(view)

//Export API routes
 export default router