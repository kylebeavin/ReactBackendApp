"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var accountController_1 = require("../controllers/accountController");
var router = express_1.default.Router();
// Account routes
router.route('/accounts')
    .get(accountController_1.view)
    .post(accountController_1.add)
    .put(accountController_1.update)
    .patch(accountController_1.update)
    .delete(accountController_1.remove);
router.route('/accountsBy')
    .post(accountController_1.view);
//Export API routes
exports.default = router;
