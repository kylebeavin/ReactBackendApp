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
    // Monthly payment
    dollar_amount: {
        type: String,
        required: true
    },
    // Service start date
    start_date: {
        type: Date,
        default: Date.now
    },
    // Service end date
    end_date: {
        type: Date,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Agreement Model
var Agreement = module.exports = mongoose.model('agreement', agreementSchema);

module.exports.get = function(callback, limit) {
    Agreement.find(callback).limit(limit);
}