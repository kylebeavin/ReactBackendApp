//initialize express router
let router = require('express').Router();
//Import Controllers
var prospectController = require('../controllers/prospectController.js');
// Truck routes
router.route('/prospects')
    .get(prospectController.view)
    .post(prospectController.add)
    // Truck routes
router.route('/prospects/:_id')
    .put(prospectController.update)
    .patch(prospectController.update)
    .delete(prospectController.delete)

//Export API routes
module.exports = router;