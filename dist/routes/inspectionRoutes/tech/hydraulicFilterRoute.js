"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var hydraulicFilterController_1 = require("../../../controllers/inspectionControllers/tech/hydraulicFilterController");
var verifyToken_1 = require("../../../middleware/verifyToken");
var router = express_1.default.Router();
// Inspection routes
router.route('/hydraulicFilter')
    .get(verifyToken_1.verifyToken, hydraulicFilterController_1.view)
    .post(verifyToken_1.verifyToken, hydraulicFilterController_1.add);
// .put(verifyToken, update)
// .patch(verifyToken, update)
// .delete(verifyToken)
// router.route('/inspectionsBy')
//     .post(verifyToken, view)
//Export API routes
exports.default = router;
