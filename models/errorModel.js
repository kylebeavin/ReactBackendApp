var mongoose = require('mongoose');

//schema
var errorSchema = mongoose.Schema({
    error_message: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: null,
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
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    // Mark error active / inactive
    is_active: {
        type: Boolean,
        default: true
    }
});

// Export Error Model
var Error = module.exports = mongoose.model('errors', errorSchema);

module.exports.get = function(callback, limit) {
    Error.find(callback).limit(limit);
}