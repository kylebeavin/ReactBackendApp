//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update, auth, login, logout} from '../controllers/userController'
import {verifyToken} from '../middleware/verifyToken'
import {paginatedResults} from '../middleware/paginateResults'
import User from '../models/userModel'
const router = express.Router()


// User routes
router.route('/auth')
    .post(auth)
router.route('/login')
    .post(login)
router.route('/logout')
    .post(logout)
router.route('/users')
    .get(verifyToken, paginatedResults(User), (req, res)=>{
        console.log(res)
        const {paginatedResults} = res.locals
        res.status(200).json(paginatedResults)
    })
    .post(verifyToken, add)
    .put(verifyToken, update)
    .patch(verifyToken, update)
    
router.route('/usersBy')
    .post(verifyToken,view)

//Export API routes
 export default router