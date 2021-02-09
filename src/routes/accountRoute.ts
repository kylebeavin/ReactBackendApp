//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/accountController'
import {verifyToken} from '../middleware/verifyToken'
import {accountValidatorPost, accountValidatorUpdate} from '../validators/accountValidator'
const router = express.Router()
import {check} from 'express-validator'
// Account routes
router.route('/accounts')
    .get(verifyToken, view)
    .post(verifyToken, accountValidatorPost(),add)
    .put(verifyToken, accountValidatorUpdate(),update)
    .patch(verifyToken, accountValidatorUpdate(),update)
    .delete( verifyToken,remove )
router.route('/accountsBy')
    .post(verifyToken, view)

//Export API routes
 export default router