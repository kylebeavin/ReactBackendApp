var mongoose = require('mongoose');

//schema
var meetingSchema = mongoose.Schema({
    // This might not be used
    account_id: {
        type: String,
        required: false
    },
    // Document ID of the contact being met
    contact_id: {
        type: String,
        required: false
    },
    // Document ID of the signed in user
    owner_id: {
        type: String,
        required: false
    },
    // Name of the meeting place Example: Starbucks
    location_name: {
        type: String,
        required: false
    },
    // Location fields could be pulled from contact document?
    address_street: {
        type: String,
        required: false
    },
    address_city: {
        type: String,
        required: false
    },
    address_state: {
        type: String,
        required: false
    },
    address_zip: {
        type: String,
        required: false
    },
    // Date the meeting was created
    created_at: {
        type: Date,
        default: Date.now
    },
    // Meeting date and time
    meeting_at: {
        type: Date,
        required: false
    },
    // Marks meeting active / inactive
    is_valid: {
        type: Boolean,
        default: true
    }
});

// Export Meeting Model
var Meeting = module.exports = mongoose.model('meeting', meetingSchema);

module.exports.get = function (callback, limit) {
    Meeting.find(callback).limit(limit);
}