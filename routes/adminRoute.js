//initialize express router
let router = require('express').Router();
//Import Controllers
var adminController = require('../controllers/adminController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Admin routes
router.route('/admins')
    .get(verifyToken.verifyToken, adminController.view)
    .post(verifyToken.verifyToken, adminController.add)
router.route('/adminsBy')
    .post(verifyToken.verifyToken, adminController.view)
router.route('/admins/:_id')
    .put(verifyToken.verifyToken, adminController.update)
    .patch(verifyToken.verifyToken, adminController.update)
    .delete(verifyToken.verifyToken, adminController.delete)

//Export API routes
module.exports = router;