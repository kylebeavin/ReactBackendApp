var mongoose = require('mongoose');

//schema
var meetingSchema = mongoose.Schema({
    // This might not be used // Franchise that the meeting belongs to
    group_id: {
        type: String,
        required: true
    },
    // This might not be used
    account_id: {
        type: String,
        required: true
    },
    // Document ID of the contact being met
    contact_id: {
        type: String,
        required: true
    },
    // Document ID of the signed in user
    owner_id: {
        type: String,
        required: true
    },
    // Name of the meeting place Example: Starbucks
    title: {
        type: String,
        required: true
    },
    // Location fields could be pulled from contact document?
    address_street: {
        type: String,
        required: true
    },
    address_city: {
        type: String,
        required: true
    },
    address_state: {
        type: String,
        required: true
    },
    address_zip: {
        type: String,
        required: true
    },
    // Date the meeting was created
    created: {
        type: Date,
        default: Date.now
    },
    // Meeting date and time
    meeting_time: {
        type: Date,
        required: true
    },
    // Marks meeting active / inactive
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Meeting Model
var Meeting = module.exports = mongoose.model('meeting', meetingSchema);

module.exports.get = function(callback, limit) {
    Meeting.find(callback).limit(limit);
}