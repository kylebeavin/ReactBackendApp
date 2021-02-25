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
var RouteSchema = new mongoose_1.Schema({
    group_id: {
        type: String,
        required: true,
        trim: true
    },
    truck_id: {
        type: String,
        required: true,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    start_location: {
        type: String,
        required: true,
        trim: true,
    },
    driver: {
        type: String,
        required: true,
        trim: true
    },
    truck_vin: {
        type: String,
        required: true,
        trim: true
    },
    service_stop: {
        type: [String],
        required: true,
        trim: true
    },
    time: {
        type: Date,
        required: true,
        trim: true
    },
    notes: {
        type: [String],
        required: true,
        trim: true
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("Route", RouteSchema);
