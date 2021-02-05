"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var orderController_1 = require("../controllers/orderController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// Order routes
router.route('/orders')
    .get(verifyToken_1.verifyToken, orderController_1.view)
    .post(verifyToken_1.verifyToken, orderController_1.add)
    .put(verifyToken_1.verifyToken, orderController_1.update)
    .patch(verifyToken_1.verifyToken, orderController_1.update)
    .delete(verifyToken_1.verifyToken);
router.route('/ordersBy')
    .post(verifyToken_1.verifyToken, orderController_1.view);
//Export API routes
exports.default = router;
