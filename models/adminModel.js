var mongoose = require('mongoose');

//schema
var adminSchema = mongoose.Schema({
    // admin username
    user: {
        type: String,
        required: true
    },
    // admin password TODO: Store as MD5
    pass: {
        type: String,
        required: true
    },
    // authentication token
    token: {
        type: String,
        required: true
    }
});

// Export Admin Model
var Admin = module.exports = mongoose.model('admin', adminSchema);

module.exports.get = function(callback, limit) {
    Admin.find(callback).limit(limit);
}