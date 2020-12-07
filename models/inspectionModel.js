var mongoose = require('mongoose');

//schema
var inspectionSchema = mongoose.Schema({
  
    group_id: {
        type: String,
        required: true
    },
    inspection_id: {
        type: String,
        required: true
    },
    inspection_id: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    // Inspection Fields
    // fields: {
    //     type: String,
    //     required: true
    // },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    },
});

// Export Inspection Model
var Inspection = module.exports = mongoose.model('inspection', inspectionSchema);

module.exports.get = function (callback, limit) {
   Inspection.find(callback).limit(limit); 
}