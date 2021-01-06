//initialize express router
let router = require('express').Router();
//Import Controllers
var prospectController = require('../controllers/prospectController.js');
// Prospect routes
router.route('/prospects')
    .get(prospectController.view)
    .post(prospectController.add)
router.route('/prospectsBy')
    .post(prospectController.view)
router.route('/prospects/:_id')
    .put(prospectController.update)
    .patch(prospectController.update)
    .delete(prospectController.delete)

//Export API routes
module.exports = router;