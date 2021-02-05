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
var UserSchema = new mongoose_1.Schema({
    // Timestamp from when the document was created
    // Display name created from given first and last name
    display_name: {
        type: String,
        required: false,
        trim: true
    },
    // Email address of the user
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // First name of the user
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Profile image URL
    image: {
        type: String,
        required: false,
        trim: true
    },
    // Mark user active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Last name given by the user
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // User's password
    password: {
        type: String,
        required: true,
        trim: true
    },
    // Corporate, Admin, Partner, Driver, Mechanic, Sales, GM
    role: {
        type: [String],
        enum: ['corporate', 'admin', 'partner', 'gm', 'sales', 'driver', 'mechanic'],
        required: true
    },
    // Authentication token assigned to the user
    token: {
        type: String,
        required: false,
        trim: true
    },
}, { timestamps: true });
// Export User Model
exports.default = mongoose_1.default.model('User', UserSchema);
