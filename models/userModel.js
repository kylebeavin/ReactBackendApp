var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        required: false,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    // Corporate, Admin, Partner, Driver, Mechanic, Sales, GM
    role: {
        type: [String],
        enum: ['corporate', 'admin', 'partner', 'gm', 'sales', 'driver', 'mechanic'],
        required: true
    },
    // Franchise ID
    group_id: {
        type: [String],
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