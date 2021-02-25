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
var groupSchema = new mongoose_1.Schema({
    // Address City
    address_city: {
        type: String,
        required: true,
        trim: true
    },
    // Address State
    address_state: {
        type: String,
        required: true,
        trim: true
    },
    // Address Street
    address_street: {
        type: String,
        required: true,
        trim: true
    },
    // Address Zip
    address_zip: {
        type: String,
        required: true,
        trim: true
    },
    // Doing Business As Name
    dba: {
        type: String,
        required: true,
        trim: true
    },
    // Federal Tax ID
    ein: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise group email
    email: {
        type: String,
        required: true,
        trim: true
    },
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Franchise Launch Date
    launch_date: {
        type: Date,
        required: true
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Name
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Phone Number
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Region
    region: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Signing Date
    signing_date: {
        type: Date,
        required: true
    },
    // State tax percentage for pricing
    tax_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Zip Codes
    territory_zips: {
        type: [String],
        required: true,
        trim: true
    },
    // Franchise Time Zone
    time_zone: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Website
    webpage: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });
// Export Contact Model
exports.default = mongoose_1.default.model('Group', groupSchema);
// module.exports.get = function (callback, limit) {
//     Group.find(callback).limit(limit);
// }
