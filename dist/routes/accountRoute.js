"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var accountController_1 = require("../controllers/accountController");
var verifyToken_1 = require("../middleware/verifyToken");
var accountValidator_1 = require("../validators/accountValidator");
var router = express_1.default.Router();
// Account routes
router.route('/accounts')
    .get(verifyToken_1.verifyToken, accountController_1.view)
    .post(verifyToken_1.verifyToken, accountValidator_1.accountValidatorPost(), accountController_1.add)
    .put(verifyToken_1.verifyToken, accountValidator_1.accountValidatorUpdate(), accountController_1.update)
    .patch(verifyToken_1.verifyToken, accountValidator_1.accountValidatorUpdate(), accountController_1.update)
    .delete(verifyToken_1.verifyToken, accountController_1.remove);
router.route('/accountsBy')
    .post(verifyToken_1.verifyToken, accountController_1.view);
//Export API routes
exports.default = router;
