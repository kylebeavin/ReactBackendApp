var mongoose = require('mongoose');

//schema
var truckSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: true
    },
    // Replaced with Document ID
    truck_id: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true
    },
    // Truck display name
    name: {
        type: String,
        required: true
    },
    // Odometer reading
    odo: {
        type: String,
        required: true
    },
    // Truck hours operated
    hours: {
        type: Date,
        default: Date.now
    },
    // TBD
    machine_id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    // Allows for truck mark active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
});

// Export Truck Model
var Truck = module.exports = mongoose.model('truck', truckSchema);

module.exports.get = function (callback, limit) {
   Truck.find(callback).limit(limit); 
}