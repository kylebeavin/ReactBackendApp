var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    // Partner, Driver, Mechanic, Sales, GM
    role: {
        type: String,
        enum: ['Corporate', 'Admin', 'Partner', 'GM', 'Sales', 'Driver', 'Mechanic'],
        required: true
    },
    // Franchise ID
    group_id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    // Mark user active / inactive
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export User Model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}