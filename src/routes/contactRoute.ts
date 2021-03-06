//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update , remove} from '../controllers/contactController'
import {verifyToken} from '../middleware/verifyToken'
import {contactValidatorPost,contactValidatorUpdate } from '../validators'
const router = express.Router() 
// Contacts routes
router.route('/contacts')
    .get(verifyToken, view)
    .post(verifyToken, contactValidatorPost(),add)
    .put(verifyToken,contactValidatorUpdate(), update)
    .patch(verifyToken,contactValidatorUpdate(), update)
    .delete(verifyToken, remove)

router.route('/contactsBy')
    .post(verifyToken, view)

//Export API routes
export default router