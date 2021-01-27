var mongoose = require('mongoose');

//schema
var orderSchema = mongoose.Schema({
    // Customer account the order belongs to
    agreement_id: {
        type: String,
        required: false
    },
    account_id: {
        type: String,
        required: true
    },
    // Date created
    created: {
        type: Date,
        default: Date.now
    },
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
        type: String,
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
});

// Export Order Model
var Order = module.exports = mongoose.model('order', orderSchema);

module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}