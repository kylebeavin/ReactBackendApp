//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, remove} from '../controllers/groupController'
const router = express.Router()

// Account routes
router.route('/groups')
    .get(view)
    .post(add)
    .put( update)
    .patch(update)
    .delete( remove )
router.route('/groupsBy')
    .post(view)

//Export API routes
 export default router