var mongoose = require('mongoose');

//schema
var orderSchema = mongoose.Schema({
    account_id: {
        type: String,
        required: true
    },
    group_id: {
        type: String,
        required: true
    },

    is_recurring: {
        type: Boolean,
        required: true
    },

    service_date: {
        type: Date,
        default: Date.now
    },

    created: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_demo:{
        type: Boolean,
        default:false
    }
});

// Export Agreement Model
const  Order = module.exports = mongoose.model('order', orderSchema);

module.exports.get = function(callback, limit) {
    Order.find(callback).limit(limit);
}