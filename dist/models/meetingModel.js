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
var MeetingSchema = new mongoose_1.Schema({
    // Customer ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
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
    // Document ID of the contact being met
    contact_id: {
        type: String,
        required: true,
        trim: true
    },
    // Date the meeting was created
    // Franchise this belongs to
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Marks meeting active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Meeting date and time
    meeting_time: {
        type: Date,
        required: true
    },
    // Document ID of the signed in user
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // Name of the meeting place Example: Starbucks
    title: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });
// Export Meeting Model
exports.default = mongoose_1.default.model('Meeting', MeetingSchema);
// module.exports.get = function (callback, limit) {
//     Meeting.find(callback).limit(limit);
// }
