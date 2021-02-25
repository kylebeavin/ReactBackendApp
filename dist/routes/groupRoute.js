"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var groupController_1 = require("../controllers/groupController");
var router = express_1.default.Router();
var verifyToken_1 = require("../middleware/verifyToken");
var validators_1 = require("../validators");
// Account routes
router.route('/groups')
    .get(verifyToken_1.verifyToken, groupController_1.view)
    .post(verifyToken_1.verifyToken, validators_1.groupValidatorPost(), groupController_1.add)
    .put(verifyToken_1.verifyToken, validators_1.groupValidatorUpdate(), groupController_1.update)
    .patch(verifyToken_1.verifyToken, validators_1.groupValidatorUpdate(), groupController_1.update)
    .delete(groupController_1.remove);
router.route('/groupsBy')
    .post(groupController_1.view);
//Export API routes
exports.default = router;
