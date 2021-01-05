var mongoose = require('mongoose');

//schema
var accountSchema = mongoose.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: false
    },
    // Account Name
    name: {
        type: String,
        required: false
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: false
    },
    // Account status active/inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Account Stage: Prospect,Customer
    stage: {
        type: String,
        required: false
    },
    address_street: {
        type: String,
        required: false
    },
    address_city: {
        type: String,
        required: false
    },
    address_state: {
        type: String,
        required: false
    },
    address_zip: {
        type: String,
        required: false
    },
    // Generic account domain
    email: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    // Date for the demo smash
    demo: {
        type: Date,
        required: false
    },
    // When lead becomes account
    conversion: {
        type: Date,
        required: false
    },
    // Hauling contract status
    hauling_contract: {
        type: Boolean,
        required: false
    },
    // Hauling contract expiration date
    hauling_expiration: {
        type: Date,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
});

// Export Account Model
var Account = module.exports = mongoose.model('account', accountSchema);

module.exports.get = function(callback, limit) {
    Account.find(callback).limit(limit);
}