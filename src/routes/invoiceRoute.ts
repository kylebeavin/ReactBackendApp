//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/invoiceController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()

//invoice routes
router.route('/invoices')
    .get(verifyToken,view)
    .post(verifyToken,add)
router.route('/invoicesBy')
    .post(verifyToken,view)
router.route('/invoices/:_id')
    .put(verifyToken,update)
    .patch(verifyToken,update)
    .delete(verifyToken,remove)

//Export API routes
 export default router