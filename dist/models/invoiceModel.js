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
var invoiceSchema = new mongoose_1.Schema({
    // Customer Document ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    // List of charges
    charges: {
        type: String,
        required: true,
        trim: true
    },
    // Contact for the invoice
    contact_id: {
        type: String,
        required: true,
        trim: true
    },
    // When document was created in database
    // Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Date the invoice is due
    invoice_date: {
        type: Date,
        required: true,
        trim: true
    },
    // Whether or not the invoice is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Purchase order number TBD
    purchase_order: {
        type: String,
        required: true,
        trim: true
    },
    // Work order ID
    smash_id: {
        type: String,
        required: true,
        trim: true
    },
    // Total before tax
    subtotal: {
        type: String,
        required: true,
        trim: true
    },
    // Tax rate for invoice
    tax: {
        type: String,
        required: true,
        trim: true
    },
    // Total cost of invoice
    total: {
        type: String,
        required: true,
        trim: true
    },
    // Recurring / On-Demand
    type: {
        type: [String],
        enum: ['recurring', 'on-demand'],
        required: true
    },
}, { timestamps: true });
// Export Invoice Model
exports.default = mongoose_1.default.model('Invoice', invoiceSchema);
// module.exports.get = function (callback, limit) {
//     Invoice.find(callback).limit(limit);
// }
