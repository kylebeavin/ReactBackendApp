var mongoose = require('mongoose');

//schema
var adminSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
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