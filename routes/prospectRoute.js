//initialize express router
let router = require('express').Router();
//Import Controllers
var prospectController = require('../controllers/prospectController.js');
var verifyToken = require('../middleware/verifyToken.js');
// Prospect routes
router.route('/prospects')
    .get(verifyToken.verifyToken, prospectController.view)
    .post(verifyToken.verifyToken, prospectController.add)
router.route('/prospectsBy')
    .post(verifyToken.verifyToken, prospectController.view)
router.route('/prospects/:_id')
    .put(verifyToken.verifyToken, prospectController.update)
    .patch(verifyToken.verifyToken, prospectController.update)
    .delete(verifyToken.verifyToken, prospectController.delete)

//Export API routes
module.exports = router;