var mongoose = require('mongoose');

//schema
var authSchema = mongoose.Schema({
    // auth username
    user: {
        type: String,
        required: false
    },
    // auth password TODO: Store as MD5
    pass: {
        type: String,
        required: false
    },
    // authentication token
    token: {
        type: String,
        required: false
    }
});

// Export Auth Model
var Auth = module.exports = mongoose.model('auth', authSchema);

module.exports.get = function(callback, limit) {
    Auth.find(callback).limit(limit);
}