var mongoose = require('mongoose');

//schema
var contactSchema = mongoose.Schema({
    // Customer account id
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    // Whether or not the contact is active
    is_active: {
        type: Boolean,
        default: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // Communication method (email/sms)
    method: {
        type: [String],
        enum: ['email', 'sms'],
        required: true
    },
    // User who created the contact
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Role of the contact (billing,smashing,hauling,all)
    type: {
        type: [String],
        enum: ['bill', 'smash', 'haul'],
        required: true
    },
});

// Export Contact Model
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}