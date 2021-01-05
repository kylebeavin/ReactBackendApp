var mongoose = require('mongoose');

//schema
var contactSchema = mongoose.Schema({
    // Customer account id
    account_id: {
        type: String,
        required: false
    },
    // User who created the contact
    owner_id: {
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
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    // Role of the contact (billing,smashing,hauling,all)
    type: {
        type: String,
        required: false
    },
    // Communication method (email/sms)
    method: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    // Whether or not the contact is active
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Contact Model
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}