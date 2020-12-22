var mongoose = require('mongoose');

//schema
var accountSchema = mongoose.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true
    },
    // Account Name
    name: {
        type: String,
        required: true
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true
    },
    // Account status active/inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Account Stage: Prospect,Customer
    stage: {
        type: String,
        required: true
    },
    addressStreet: {
        type: String,
        required: true
    },
    addressCity: {
        type: String,
        required: true
    },
    addressState: {
        type: String,
        required: true
    },
    addressZip: {
        type: String,
        required: true
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