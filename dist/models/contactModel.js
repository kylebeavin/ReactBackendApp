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
var contactSchema = new mongoose_1.Schema({
    // Customer account id
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    // Whether or not the contact is active
    is_active: {
        type: Boolean,
        default: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // Communication method (email/sms)
    method: {
        type: [String],
        enum: ['email', 'sms'],
        required: true
    },
    // User who created the contact
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Role of the contact (billing,smashing,hauling,all)
    type: {
        type: [String],
        enum: ['bill', 'smash', 'haul'],
        required: true
    },
}, { timestamps: true });
// Export Contact Model
exports.default = mongoose_1.default.model('Contact', contactSchema);
