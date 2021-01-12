var mongoose = require('mongoose');

//schema
var prospectSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: true
    },
    account_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    // Signed in user's document ID
    owner_id: {
        type: String,
        required: true
    },
    // Marks lead active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Lead status
    stage: {
        type: String,
        required: true
    },
    // Dumpster location coordinates
    geo_location: {
        type: String,
        required: true
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