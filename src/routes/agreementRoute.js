"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var agreementController_1 = require("../controllers/agreementController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// Agreement routes
router.route('/agreements')
    .get(verifyToken_1.verifyToken, agreementController_1.view)
    .post(verifyToken_1.verifyToken, agreementController_1.add)
    .put(verifyToken_1.verifyToken, agreementController_1.update)
    .patch(verifyToken_1.verifyToken, agreementController_1.update)
    .delete(verifyToken_1.verifyToken);
router.route('/agreementsBy')
    .post(verifyToken_1.verifyToken, agreementController_1.view);
//Export API routes
exports.default = router;
