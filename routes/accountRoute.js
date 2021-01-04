//initialize express router
let router = require('express').Router();
//Import Controllers
var accountController = require('../controllers/accountController.js');

// Account routes
router.route('/accountsAll')
    .post(accountController.viewAll)
router.route('/accountsAdd')
    .post(accountController.add);

router.route('/accountsById/:_id')
    .post(accountController.viewAccountById)
    .post(accountController.updateAccountById)
    .post(accountController.updateAccountById)
    .post(accountController.deleteAccountById);

router.route('/accountsByGroup/:group_id')
    .post(accountController.viewAccountByGroup)
    .post(accountController.updateAccountByGroup)
    .post(accountController.updateAccountByGroup)
    .post(accountController.deleteAccountByGroup);

router.route('/accountsByName/:name')
    .post(accountController.viewAccountByName)
    .post(accountController.updateAccountByName)
    .post(accountController.updateAccountByName)
    .post(accountController.deleteAccountByName);

router.route('/accountsByOwnerId/:owner_id')
    .post(accountController.viewAccountByOwnerId)
    .post(accountController.updateAccountByOwnerId)
    .post(accountController.updateAccountByOwnerId)
    .post(accountController.deleteAccountByOwnerId);

router.route('/accountsByIsActive/:is_active')
    .post(accountController.viewAccountByIsActive)
    .post(accountController.updateAccountByIsActive)
    .post(accountController.updateAccountByIsActive)
    .post(accountController.deleteAccountByIsActive);

router.route('/accountsByStage/:stage')
    .post(accountController.viewAccountByStage)
    .post(accountController.updateAccountByStage)
    .post(accountController.updateAccountByStage)
    .post(accountController.deleteAccountByStage);

router.route('/accountsByStreet/:address_street')
    .post(accountController.viewAccountByStreet)
    .post(accountController.updateAccountByStreet)
    .post(accountController.updateAccountByStreet)
    .post(accountController.deleteAccountByStreet);

router.route('/accountsByCity/:address_city')
    .post(accountController.viewAccountByCity)
    .post(accountController.updateAccountByCity)
    .post(accountController.updateAccountByCity)
    .post(accountController.deleteAccountByCity);

router.route('/accountsByState/:address_state')
    .post(accountController.viewAccountByState)
    .post(accountController.updateAccountByState)
    .post(accountController.updateAccountByState)
    .post(accountController.deleteAccountByState);

router.route('/accountsByZip/:address_zip')
    .post(accountController.viewAccountByZip)
    .post(accountController.updateAccountByZip)
    .post(accountController.updateAccountByZip)
    .post(accountController.deleteAccountByZip);

router.route('/accountsByEmail/:email')
    .post(accountController.viewAccountByEmail)
    .post(accountController.updateAccountByEmail)
    .post(accountController.updateAccountByEmail)
    .post(accountController.deleteAccountByEmail);

router.route('/accountsByCreation/:created')
    .post(accountController.viewAccountByCreation)
    .post(accountController.updateAccountByCreation)
    .post(accountController.updateAccountByCreation)
    .post(accountController.deleteAccountByCreation);

router.route('/accountsByDemoDate/:demo')
    .post(accountController.viewAccountByDemoDate)
    .post(accountController.updateAccountByDemoDate)
    .post(accountController.updateAccountByDemoDate)
    .post(accountController.deleteAccountByDemoDate);

router.route('/accountsByConversionDate/:conversion')
    .post(accountController.viewAccountByConversionDate)
    .post(accountController.updateAccountByConversionDate)
    .post(accountController.updateAccountByConversionDate)
    .post(accountController.deleteAccountByConversionDate);

router.route('/accountsByHaulingContract/:hauling_contract')
    .post(accountController.viewAccountByHaulingContract)
    .post(accountController.updateAccountByHaulingContract)
    .post(accountController.updateAccountByHaulingContract)
    .post(accountController.deleteAccountByContractStatus);

router.route('/accountsByHaulingExpiration/:hauling_expiration')
    .post(accountController.viewAccountByHaulingExpiration)
    .post(accountController.updateAccountByHaulingExpiration)
    .post(accountController.updateAccountByHaulingExpiration)
    .post(accountController.deleteAccountByHaulingExpiration);

//Export API routes
module.exports = router;