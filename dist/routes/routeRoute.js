"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var routeController_1 = require("../controllers/routeController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// Route routes
router.route('/routes')
    .get(verifyToken_1.verifyToken, routeController_1.view)
    .post(verifyToken_1.verifyToken, routeController_1.add)
    .put(verifyToken_1.verifyToken, routeController_1.update);
// .patch(verifyToken, update)
// .delete(verifyToken)
router.route('/routesBy')
    .post(verifyToken_1.verifyToken, routeController_1.view);
//Export API routes
exports.default = router;
