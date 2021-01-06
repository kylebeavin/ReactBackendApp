//initialize express router
let router = require('express').Router();
//Import Controllers

//set default API response
router
    .get('/', function(req, res) {
        res.json({
            status: 'API Works',
            message: 'Welcome to SMT API'
        });
    });

//Export API routes
module.exports = router;