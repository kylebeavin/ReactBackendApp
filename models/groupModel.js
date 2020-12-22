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
    // Federal Tax ID
    ein: {
        type: String,
        required: false
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
        required: false
    },
    launch_date: {
        type: Date,
        required: false
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
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Export Group Model
var Group = module.exports = mongoose.model('group', groupSchema);

module.exports.get = function (callback, limit) {
   Group.find(callback).limit(limit); 
}