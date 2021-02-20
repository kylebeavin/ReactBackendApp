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
var orderSchema = new mongoose_1.Schema({
    // Customer account the order belongs to
    account_id: {
        type: String,
        required: true
    },
    // Document ID of the corrosponding agreement.
    agreement_id: {
        type: String,
        required: false
    },
    // Date created
    // Demand Rate
    demand_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Service end date
    end_date: {
        type: Date,
        required: true
    },
    // Franchise
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Whether or not order is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Whether or not the order is a demo
    is_demo: {
        type: Boolean,
        default: false
    },
    // Recurring services
    is_recurring: {
        type: Boolean,
        default: false
    },
    // Monthly payment
    monthly_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Notes / Additional terms
    notes: {
        type: [String],
        required: true,
        trim: true
    },
    // Service constraints
    services: {
        type: [String],
        enum: ['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ],
        required: false
    },
    // Service days
    service_days: {
        type: [String],
        enum: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        required: true,
        trim: true
    },
    // Service frequency
    service_frequency: {
        type: String,
        required: true,
        trim: true
    },
    // Service per
    service_per: {
        type: [String],
        enum: ['day', 'week', 'month'],
        required: true,
        trim: true
    },
    // Service start date
    start_date: {
        type: Date,
        required: true
    },
    // Payment Date Example: Net 0 Days
    term_date: {
        type: String,
        required: true
    },
    // Terms and conditions file upload url
    url: {
        type: [String],
        required: true,
        trim: true
    },
}, { timestamps: true });
// Export Order Model
exports.default = mongoose_1.default.model('Order', orderSchema);
