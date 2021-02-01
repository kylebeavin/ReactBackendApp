//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, auth, login, logout} from '../controllers/userController'
import {verifyToken} from '../middleware/verifyToken'
const router = express.Router()


// User routes
router.route('/auth')
    .post(auth)
router.route('/login')
    .post(login)
router.route('/logout')
    .post(logout)
router.route('/users')
    .get(verifyToken, view)
    .post(verifyToken, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    
router.route('/usersBy')
    .post(verifyToken.verifyToken,view)

//Export API routes
 export default router