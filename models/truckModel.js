var mongoose = require('mongoose');

//schema
var truckSchema = mongoose.Schema({
  
    group_id: {
        type: String,
        required: true
    },
    truck_id: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    odo: {
        type: String,
        required: true
    },
    hours: {
        type: Date,
        default: Date.now
    },
    machine_id: {
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
    },
});

// Export Truck Model
var Truck = module.exports = mongoose.model('truck', truckSchema);

module.exports.get = function (callback, limit) {
   Truck.find(callback).limit(limit); 
}