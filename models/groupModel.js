var mongoose = require('mongoose');

//schema
var groupSchema = mongoose.Schema({
    group_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ein: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: true
    },
    time_zone: {
        type: String,
        required: true
    },
    signing_date: {
        type: Date,
        required: false
    },
    launch_date: {
        type: Date,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    webpage: {
        type: String,
        required: true
    },
    legal_company: {
        type: String,
        required: true
    },
    dba: {
        type: String,
        required: true
    },
    tax_rate: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Export Group Model
var Group = module.exports = mongoose.model('group', groupSchema);

module.exports.get = function (callback, limit) {
   Group.find(callback).limit(limit); 
}