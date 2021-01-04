//initialize express router
let router = require('express').Router();
//Import Controllers
var prospectController = require('../controllers/prospectController.js');

// Prospect routes
router.route('/prospectsAll')
    .post(prospectController.viewAll)
router.route('/prospectsAdd')
    .post(prospectController.add);

router.route('/prospectsById/:_id')
    .post(prospectController.viewProspectById)
    .post(prospectController.updateProspectById)
    .post(prospectController.updateProspectById)
    .post(prospectController.deleteProspectById);

router.route('/prospectsByGroup/:group_id')
    .post(prospectController.viewProspectByGroup)
    .post(prospectController.updateProspectByGroup)
    .post(prospectController.updateProspectByGroup)
    .post(prospectController.deleteProspectByGroupId);

router.route('/prospectsByName/:name')
    .post(prospectController.viewProspectByName)
    .post(prospectController.updateProspectByName)
    .post(prospectController.updateProspectByName)
    .post(prospectController.deleteProspectByName);

router.route('/prospectsByOwnerId/:owner_id')
    .post(prospectController.viewProspectByOwnerId)
    .post(prospectController.updateProspectByOwnerId)
    .post(prospectController.updateProspectByOwnerId)
    .post(prospectController.deleteProspectByOwnerId);

router.route('/prospectsByIsActive/:is_active')
    .post(prospectController.viewProspectByIsActive)
    .post(prospectController.updateProspectByIsActive)
    .post(prospectController.updateProspectByIsActive)
    .post(prospectController.deleteProspectByIsActiveStatus);

router.route('/prospectsByStage/:stage')
    .post(prospectController.viewProspectByStage)
    .post(prospectController.updateProspectByStage)
    .post(prospectController.updateProspectByStage)
    .post(prospectController.deleteProspectByStage);

router.route('/prospectsByGeoLocation/:geo')
    .post(prospectController.viewProspectByGeoLocation)
    .post(prospectController.updateProspectByGeoLocation)
    .post(prospectController.updateProspectByGeoLocation)
    .post(prospectController.deleteProspectByGeoLocation);

router.route('/prospectByCreation/:created')
    .post(prospectController.viewProspectByCreation)
    .post(prospectController.updateProspectByCreation)
    .post(prospectController.updateProspectByCreation)
    .post(prospectController.deleteProspectByCreation);

//Export API routes
module.exports = router;