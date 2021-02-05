"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
//schema
var inspectionSchema = new mongoose_1.Schema({
    //Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Allows inspection to be void
    is_active: {
        type: Boolean,
        default: true
    },
    // Signed in owner of the inspection
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // TBD
    type: {
        type: [String],
        enum: ['inspection_type'],
        required: true
    },
    truck_id: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });
// Export Inspection Model
exports.default = mongoose_1.default.model('Inspection', inspectionSchema);
// module.exports.get = function (callback, limit) {
//     Inspection.find(callback).limit(limit);
// }
