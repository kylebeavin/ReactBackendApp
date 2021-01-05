var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    // Partner, Driver, Mechanic, Sales, GM
    role: {
        type: String,
        required: false
    },
    // Franchise ID
    group_id: {
        type: String,
        required: false
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