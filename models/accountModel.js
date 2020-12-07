var mongoose = require('mongoose');

//schema
var accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    status: {
        type: Boolean,
        required: true
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
    group_id: {
        type: String,
        required: false
    },
    account_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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
    sales_rep: {
        type: String,
        required: false
    },
    hauling_contract: {
        type: Date,
        required: false
    },
    hauling_expiration: {
        type: Date,
        required: false
    },
});

// Export Account Model
var Account = module.exports = mongoose.model('account', accountSchema);

module.exports.get = function (callback, limit) {
   Account.find(callback).limit(limit); 
}