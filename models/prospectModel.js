var mongoose = require('mongoose');

//schema
var prospectSchema = mongoose.Schema({
    group_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    stage: {
        type: String,
        required: true
    },
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