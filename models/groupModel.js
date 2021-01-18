var mongoose = require('mongoose');

//schema
var groupSchema = mongoose.Schema({
    // Franchise Name
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise group email
    email: {
        type: String,
        required: true,
        trim: true
    },
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
    },
    address_street: {
        type: String,
        required: true,
        trim: true
    },
    address_city: {
        type: String,
        required: true,
        trim: true
    },
    address_state: {
        type: String,
        required: true,
        trim: true
    },
    address_zip: {
        type: String,
        required: true,
        trim: true
    },
    // Federal Tax ID
    ein: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    time_zone: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },
    webpage: {
        type: String,
        required: true,
        trim: true
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: true,
        trim: true
    },
    // Actual LLC
    territory_zips: {
        type: Array,
        required: true,
        trim: true
    },
    // Doing Business As Name
    dba: {
        type: String,
        required: true,
        trim: true
    },
    // State tax percentage for pricing
    tax_rate: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
        trim: true
    }
});

// Export Group Model
var Group = module.exports = mongoose.model('group', groupSchema);

module.exports.get = function(callback, limit) {
    Group.find(callback).limit(limit);
}