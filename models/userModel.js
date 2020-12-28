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
    // Partner, Driver, Mechanic, Sales, GM
    role: {
        type: String,
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