var mongoose = require('mongoose');

//schema
var inspectionSchema = mongoose.Schema({
    //Franchise ID
    group_id: {
        type: String,
        required: true
    },
    // Possibly replaced by document ID
    inspection_id: {
        type: String,
        required: true
    },
    // Possibly replaced by document ID
    truck_id: {
        type: String,
        required: true
    },
    // Signed in owner of the inspection
    owner_id: {
        type: String,
        required: true
    },
    // TBD
    type: {
        type: String,
        required: true
    },
    // TBD
    // Inspection Fields
    // fields: {
    //     type: String,
    //     required: true
    // },
    created_at: {
        type: Date,
        default: Date.now
    },
    // Allows inspection to be void
    is_active: {
        type: Boolean,
        default: true
    },
});

// Export Inspection Model
var Inspection = module.exports = mongoose.model('inspection', inspectionSchema);

module.exports.get = function (callback, limit) {
    Inspection.find(callback).limit(limit);
}