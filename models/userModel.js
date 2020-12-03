var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    group_id: {
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

// Export User Model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
   User.find(callback).limit(limit); 
}