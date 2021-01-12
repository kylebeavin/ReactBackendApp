const  verifyToken = require('../middleware/verifyToken.js');

//initialize express router
const router = require('express').Router();
//use the middleware for any requests passed to this route
router.use((req,res,next)=>{
    verifyToken()
    next()
})
//Import Controllers
router.get('/orders', 
)

//Export API routes
module.exports = router;