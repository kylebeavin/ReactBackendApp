var mongoose = require('mongoose');

//schema
var accountSchema = mongoose.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true
    },
    // Account Name
    account_name: {
        type: String,
        required: true
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true
    },
    // Document ID's of contacts associated with the account
    contacts: {
        type: [String],
        default: null
    },
    // Account status active/inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Account stage
    stage: {
        type: String,
        enum: ['prospect', 'lead', 'account'],
        required: true
    },
    // Dumpster location coordinates
    geo_location: {
        type: String,
        default: null
    },
    address_street: {
        type: String,
        default: null
    },
    address_city: {
        type: String,
        default: null
    },
    address_state: {
        type: String,
        default: null
    },
    address_zip: {
        type: String,
        default: null
    },
    // Generic account domain
    email: {
        type: String,
        default: null
    },
    // When the document was created
    created: {
        type: Date,
        default: Date.now
    },
    // Date for the demo smash
    demo: {
        type: Date,
        default: null
    },
    // When lead becomes account
    conversion: {
        type: Date,
        default: null
    },
    // Hauling contract status
    hauling_contract: {
        type: Boolean,
        default: false
    },
    // Hauling contract expiration date
    hauling_expiration: {
        type: Date,
        default: null
    },
    national: {
        type: Boolean,
        default: false
    },
    referral: {
        type: Boolean,
        default: false
    },
    referral_group_id: {
        type: String,
        default: null
    },
    notes: {
        type: String,
        default: null
    },
});

// Export Account Model
var Account = module.exports = mongoose.model('account', accountSchema);

module.exports.get = function(callback, limit) {
    Account.find(callback).limit(limit);
}