//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/accountController'
const router = express.Router()

// Account routes
router.route('/accounts')
    .get(view)
    .post(add)
    .put( update)
    .patch(update)
    .delete( remove )
router.route('/accountsBy')
    .post(view)

//Export API routes
 export default router