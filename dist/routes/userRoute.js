"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var userController_1 = require("../controllers/userController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
// User routes
router.route('/auth')
    .post(userController_1.auth);
router.route('/login')
    .post(userController_1.login);
router.route('/logout')
    .post(userController_1.logout);
router.route('/users')
    .get(verifyToken_1.verifyToken, userController_1.view)
    .post(verifyToken_1.verifyToken, userController_1.add)
    .put(verifyToken_1.verifyToken, userController_1.update)
    .patch(verifyToken_1.verifyToken, userController_1.update);
router.route('/usersBy')
    .post(verifyToken_1.verifyToken, userController_1.view);
//Export API routes
exports.default = router;
