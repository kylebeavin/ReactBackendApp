var mongoose = require('mongoose');

//schema
var groupSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: true
    },
    // Franchise Name
    name: {
        type: String,
        required: true
    },
    // Franchise group email
    email: {
        type: String,
        required: true
    },
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
    },
    address_street: {
        type: String,
        required: true
    },
    address_city: {
        type: String,
        required: true
    },
    address_state: {
        type: String,
        required: true
    },
    address_zip: {
        type: String,
        required: true
    },
    // Federal Tax ID
    ein: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    time_zone: {
        type: String,
        required: true
    },
    signing_date: {
        type: Date,
        required: true
    },
    launch_date: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    webpage: {
        type: String,
        required: true
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: true
    },
    // Doing Business As Name
    dba: {
        type: String,
        required: true
    },
    // State tax percentage for pricing
    tax_rate: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Export Group Model
var Group = module.exports = mongoose.model('group', groupSchema);

module.exports.get = function(callback, limit) {
    Group.find(callback).limit(limit);
}