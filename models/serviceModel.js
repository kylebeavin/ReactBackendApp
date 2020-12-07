var mongoose = require('mongoose');

//schema
var serviceSchema = mongoose.Schema({
  
    group_id: {
        type: String,
        required: true
    },
    service_id: {
        type: String,
        required: true
    },
    inspection_id: {
        type: String,
        required: true
    },
    service_order: {
        type: String,
        required: true
    },
    // Additional
    // fields: {
    //     type: String,
    //     required: true
    // },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    },
});

// Export Service Model
var Service = module.exports = mongoose.model('service', serviceSchema);

module.exports.get = function (callback, limit) {
   Service.find(callback).limit(limit); 
}