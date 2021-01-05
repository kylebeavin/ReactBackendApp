var mongoose = require('mongoose');

//schema
var locationSchema = mongoose.Schema({
    // Customer ID
    account_id: {
        type: String,
        required: false
    },
    location_name: {
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

module.exports.get = function(callback, limit) {
    Location.find(callback).limit(limit);
}