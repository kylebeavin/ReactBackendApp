var mongoose = require('mongoose');

//schema
var locationSchema = mongoose.Schema({
    // Customer ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    // Address City
    address_city: {
        type: String,
        required: true,
        trim: true
    },
    // Address State
    address_state: {
        type: String,
        required: true,
        trim: true
    },
    // Address Street
    address_street: {
        type: String,
        required: true,
        trim: true
    },
    // Address Zip
    address_zip: {
        type: String,
        required: true,
        trim: true
    },
    // Date the document was created in the database

    // Document ID of the franchise
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Marks location active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Location name for service order
    location_name: {
        type: String,
        required: true,
        trim: true
    },
},
{ timestamps: true })

// Export Location Model
var Location = module.exports = mongoose.model('location', locationSchema);

module.exports.get = function (callback, limit) {
    Location.find(callback).limit(limit);
}