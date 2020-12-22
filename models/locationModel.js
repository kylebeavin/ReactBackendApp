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
    created_at: {
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