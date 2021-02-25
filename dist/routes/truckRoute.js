"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var truckController_1 = require("../controllers/truckController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// Account routes
router.route('/trucks')
    .get(verifyToken_1.verifyToken, truckController_1.view)
    .post(verifyToken_1.verifyToken, truckController_1.add)
    .put(verifyToken_1.verifyToken, truckController_1.update)
    .patch(verifyToken_1.verifyToken, truckController_1.update);
router.route('/truckBy')
    .post(verifyToken_1.verifyToken, truckController_1.view);
//Export API routes
exports.default = router;
