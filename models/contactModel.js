var mongoose = require('mongoose');

//schema
var contactSchema = mongoose.Schema({

    account_id: {
        type: String,
        required: true
    },
    owner_id: {
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
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
});

// Export Contact Model
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}