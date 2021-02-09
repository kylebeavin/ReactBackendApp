//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/accountController'
import {verifyToken} from '../middleware/verifyToken'
import {accountValidator} from '../validators/accountValidator'
const router = express.Router()

// Account routes
router.route('/accounts')
    .get(verifyToken, view)
    .post(verifyToken,accountValidator, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    .delete( verifyToken,remove )
router.route('/accountsBy')
    .post(verifyToken, view)

//Export API routes
 export default router