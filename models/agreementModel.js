//agreementModel.js
const { Decimal128 } = require('mongodb');
var mongoose = require('mongoose');

//schema
var agreementSchema = mongoose.Schema({
    // Customer account the agreement belongs to
    account_id: {
        type: String,
        required: true
    },
    // Franchise
    group_id: {
        type: String,
        required: true
    },
    // owner id
    owner_id: {
       type: String,
       required:true
    },
    // Recurring services
    is_recurring: {
        type: Boolean,
        required: true
    },
    // Service constraints
    services: {
        type: [String],
        enum: ['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ],
        required: true
    },
    // Service frequency
    service_frequency: {
        type: String,
        required: true
    },
    // Service per
    service_per: {
        type: [String],
        enum: ['day', 'week', 'month'],
        required: true
    },
    // Service days
    service_days: {
        type: [String],
        enum: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        required: true
    },

    // Monthly payment
    monthly_rate: {
        type: String,
        required: true
    },
    // Demand Rate
    demand_rate: {
        type: String,
        required: true
    },
    // Payment Date Example: Net 0 Days
    term_date: {
        type: String,
        required: true
    },
    // Service start date
    start_date: {
        type: Date,
        required: true
    },
    // Service end date
    end_date: {
        type: Date,
        required: true
    },
    // Date created
    created: {
        type: Date,
        default: Date.now
    },
    // Whether or not agreement is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Notes / Additional terms
    notes: {
        type: String,
        default: null
    },
    // Terms and conditions file upload url
    url: {
        type: String,
        default: null
    },
});

// Export Agreement Model
var Agreement = module.exports = mongoose.model('agreement', agreementSchema);

module.exports.get = function(callback, limit) {
    Agreement.find(callback).limit(limit);
}