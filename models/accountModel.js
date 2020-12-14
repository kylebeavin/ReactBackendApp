var mongoose = require('mongoose');

//schema
var accountSchema = mongoose.Schema({
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
    email: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    demo: {
        type: Date,
        required: false
    },
    conversion: {
        type: Date,
        required: false
    },
    hauling_contract: {
        type: Boolean,
        required: false
    },
    hauling_expiration: {
        type: Date,
        required: false
    },
});

// Export Account Model
var Account = module.exports = mongoose.model('account', accountSchema);

module.exports.get = function(callback, limit) {
    Account.find(callback).limit(limit);
}