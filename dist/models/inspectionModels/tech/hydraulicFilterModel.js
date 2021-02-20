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
var HydraulicFilterSchema = new mongoose_1.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true,
        trim: true,
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true,
        trim: true,
    },
    // HydraulicFilter status active/inactive
    is_active: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    truck_id: {
        type: String,
        required: true,
        trim: true,
    },
    hydraulics: {
        type: Boolean,
        required: true,
        trim: true,
    },
    tech_signature: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("HydraulicFilter", HydraulicFilterSchema);
