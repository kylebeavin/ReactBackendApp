var mongoose = require('mongoose');

//schema
var locationSchema = mongoose.Schema({
    // Customer ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    group_id: {
        type: String,
        required: true,
        trim: true
    },
    location_name: {
        type: String,
        required: true,
        trim: true
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
    created: {
        type: Date,
        default: Date.now
    },
    // Marks location active / inactive
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Location Model
var Location = module.exports = mongoose.model('location', locationSchema);

module.exports.get = function(callback, limit) {
    Location.find(callback).limit(limit);
}