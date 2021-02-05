"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var contactController_1 = require("../controllers/contactController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// Contacts routes
router.route('/contacts')
    .get(verifyToken_1.verifyToken, contactController_1.view)
    .post(verifyToken_1.verifyToken, contactController_1.add)
    .put(verifyToken_1.verifyToken, contactController_1.update)
    .patch(verifyToken_1.verifyToken, contactController_1.update)
    .delete(verifyToken_1.verifyToken, contactController_1.remove);
router.route('/contactsBy')
    .post(verifyToken_1.verifyToken, contactController_1.view);
//Export API routes
exports.default = router;
