var mongoose = require('mongoose');

//schema
var locationSchema = mongoose.Schema({
    // To be replaced by unique document ID
    location_id: {
        type: String,
        required: true
    },
    // Customer ID
    account_id: {
        type: String,
        required: true
    },
    location_name: {
        type: String,
        required: true
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
    created: {
        type: Date,
        default: Date.now
    },
    // Marks location active / inactive
    is_valid: {
        type: Boolean,
        default: true
    }
});

// Export Location Model
var Location = module.exports = mongoose.model('location', locationSchema);

module.exports.get = function (callback, limit) {
   Location.find(callback).limit(limit); 
}