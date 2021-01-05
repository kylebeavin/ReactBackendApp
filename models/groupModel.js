var mongoose = require('mongoose');

//schema
var groupSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: false
    },
    // Franchise Name
    name: {
        type: String,
        required: false
    },
    // Franchise group email
    email: {
        type: String,
        required: false
    },
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
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
    // Federal Tax ID
    ein: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    time_zone: {
        type: String,
        required: false
    },
    signing_date: {
        type: Date,
        required: false
    },
    launch_date: {
        type: Date,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    webpage: {
        type: String,
        required: false
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: false
    },
    // Doing Business As Name
    dba: {
        type: String,
        required: false
    },
    // State tax percentage for pricing
    tax_rate: {
        type: String,
        required: false
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