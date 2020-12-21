var mongoose = require('mongoose');

//schema
var agreementSchema = mongoose.Schema({
    account_id: {
        type: String,
        required: true
    },
    group_id: {
        type: String,
        required: true
    },

    is_recurring: {
        type: Boolean,
        required: true
    },

    service_date: {
        type: Date,
        default: Date.now
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Agreement Model
var Agreement = module.exports = mongoose.model('agreement', agreementSchema);

module.exports.get = function (callback, limit) {
    Agreement.find(callback).limit(limit);
}