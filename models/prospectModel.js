var mongoose = require('mongoose');

//schema
var prospectSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: false
    },
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    // Signed in user's document ID
    owner_id: {
        type: String,
        required: false
    },
    // Marks lead active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Lead status
    stage: {
        type: String,
        required: false
    },
    // Dumpster location coordinates
    geo_location: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now

    },
});
// Export Prospect Model
var Prospect = module.exports = mongoose.model('prospect', prospectSchema);

module.exports.get = function(callback, limit) {
    Prospect.find(callback).limit(limit);
}