"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var invoiceController_1 = require("../controllers/invoiceController");
var verifyToken_1 = require("../middleware/verifyToken");
var router = express_1.default.Router();
//invoice routes
router.route('/invoices')
    .get(verifyToken_1.verifyToken, invoiceController_1.view)
    .post(verifyToken_1.verifyToken, invoiceController_1.add);
router.route('/invoicesBy')
    .post(verifyToken_1.verifyToken, invoiceController_1.view);
router.route('/invoices/:_id')
    .put(verifyToken_1.verifyToken, invoiceController_1.update)
    .patch(verifyToken_1.verifyToken, invoiceController_1.update)
    .delete(verifyToken_1.verifyToken, invoiceController_1.remove);
//Export API routes
exports.default = router;
