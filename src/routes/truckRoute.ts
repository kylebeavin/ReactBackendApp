//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update} from '../controllers/truckController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()

// Account routes
router.route('/trucks')
    .get(verifyToken, view)
    .post(verifyToken, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    
router.route('/truckBy')
    .post(verifyToken, view)

//Export API routes
 export default router