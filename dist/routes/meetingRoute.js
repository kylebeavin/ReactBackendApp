"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var meetingController_1 = require("../controllers/meetingController");
var verifyToken_1 = require("../middleware/verifyToken");
var validators_1 = require("../validators");
var router = express_1.default.Router();
// Account routes
router.route('/meetings')
    .get(verifyToken_1.verifyToken, meetingController_1.view)
    .post(verifyToken_1.verifyToken, validators_1.meetingValidatorPost(), meetingController_1.add)
    .put(verifyToken_1.verifyToken, validators_1.meetingValidatorUpdate(), meetingController_1.update)
    .patch(verifyToken_1.verifyToken, validators_1.meetingValidatorUpdate(), meetingController_1.update)
    .delete(verifyToken_1.verifyToken);
router.route('/meetingsBy')
    .post(verifyToken_1.verifyToken, meetingController_1.view);
//Export API routes
exports.default = router;
