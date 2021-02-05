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
var AccountSchema = new mongoose_1.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true,
        trim: true
    },
    // Account Name
    account_name: {
        type: String,
        required: true,
        trim: true
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // Display name that is cached during initial sign in from user
    owner_name: {
        type: String,
        required: true,
        trim: true
    },
    // Document ID's of contacts associated with the account
    contacts: {
        type: [String],
        default: null,
        trim: true
    },
    // Account status active/inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Account stage
    stage: {
        type: String,
        enum: ['prospect', 'lead', 'account'],
        default: 'prospect',
        lowercase: true
    },
    // Dumpster location coordinates
    geo_location: {
        type: String,
        default: null,
        trim: true
    },
    address_street: {
        type: String,
        default: null,
        trim: true
    },
    address_city: {
        type: String,
        default: null,
        trim: true
    },
    address_state: {
        type: String,
        default: null,
        trim: true
    },
    address_zip: {
        type: String,
        default: null,
        trim: true
    },
    // Generic account domain
    email: {
        type: String,
        default: null,
        trim: true
    },
    // // When the document was created
    // created: {
    //     type: Date,
    //     default: Date.now
    // },
    // Date for the demo smash
    demo: {
        type: Date,
        default: null
    },
    // When lead becomes account
    conversion: {
        type: Date,
        default: null
    },
    // Hauling contract status
    hauling_contract: {
        type: Boolean,
        default: false
    },
    // Hauling contract expiration date
    hauling_expiration: {
        type: Date,
        default: null
    },
    national: {
        type: Boolean,
        default: false
    },
    referral: {
        type: Boolean,
        default: false
    },
    referral_group_id: {
        type: String,
        default: null,
        trim: true
    },
    notes: {
        type: String,
        default: null,
        trim: true
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Account', AccountSchema);
