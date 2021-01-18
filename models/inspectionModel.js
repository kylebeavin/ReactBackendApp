// inspectionModel.js
// This is unfinished

var mongoose = require('mongoose');

//schema
var inspectionSchema = mongoose.Schema({
    //Franchise ID
    group_id: {
        type: String,
        required: true,
        trim: true
    },
    // Possibly Truck's _id
    truck_id: {
        type: String,
        required: true,
        trim: true
    },
    // Signed in owner of the inspection
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // TBD
    type: {
        type: [String],
        enum: ['inspection_type'], // Inspection types will go here.
        required: true
    },
    // TBD
    // Inspection Fields
    // fields: {
    //     type: String,
    //     required: true
    // },
    created: {
        type: Date,
        default: Date.now,
        trim: true
    },
    // Allows inspection to be void
    is_active: {
        type: Boolean,
        default: true
    },
});

// Export Inspection Model
var Inspection = module.exports = mongoose.model('inspection', inspectionSchema);

module.exports.get = function(callback, limit) {
    Inspection.find(callback).limit(limit);
}