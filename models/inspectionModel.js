var mongoose = require('mongoose');

//schema
var inspectionSchema = mongoose.Schema({
    //Franchise ID
    group_id: {
        type: String,
        required: false
    },
    // Possibly replaced by document ID
    inspection_id: {
        type: String,
        required: false
    },
    // Possibly replaced by document ID
    truck_id: {
        type: String,
        required: false
    },
    // Signed in owner of the inspection
    owner_id: {
        type: String,
        required: false
    },
    // TBD
    type: {
        type: String,
        required: false
    },
    // TBD
    // Inspection Fields
    // fields: {
    //     type: String,
    //     required: true
    // },
    created: {
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

module.exports.get = function(callback, limit) {
    Inspection.find(callback).limit(limit);
}