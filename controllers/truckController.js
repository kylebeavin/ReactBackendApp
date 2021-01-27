// truckController.js
// Import Truck Model
const Truck = require('../models/truckModel.js');

// For queries
exports.view = function(req, res) {
    Truck.find(req.body, null, {
            sort: {
                name: 1
            }
        },
        function(err, query) {

            if (err) {
                res.json({
                    status: "error",
                    message: err,
                })
            } else {
                res.json({
                    status: "success",
                    message: "Working",
                    data: query
                })
            }
        })
};

//For creating new truck
exports.add = async function(req, res) {
    try {
        var truck = new Truck();
        truck.body_subtype = req.body.body_subtype;
        truck.body_type = req.body.body_type;
        truck.color = req.body.color;
        truck.documents = req.body.documents;
        truck.group_id = req.body.group_id;
        truck.hours = req.body.hours != null ? req.body.hours : null;
        truck.is_active = req.body.is_active;
        truck.license_number = req.body.license_number;
        truck.msrp = req.body.msrp;
        truck.name = req.body.name;
        truck.odo = req.body.odo != null ? req.body.odo : null;
        truck.operator = req.body.operator;
        truck.ownership = req.body.ownership;
        truck.pictures = req.body.pictures;
        truck.service_history = req.body.service_history;
        truck.service_status = req.body.service_status;
        truck.trim = req.body.trim;
        truck.registration = req.body.registration;
        truck.vehicle_make = req.body.vehicle_make;
        truck.vehicle_model = req.body.vehicle_model;
        truck.vehicle_type = req.body.vehicle_type;
        truck.vin = req.body.vin;
        truck.year = req.body.year;

        //Save and check error
        let newTruck = await truck.save()
        if (newTruck) {
            res.json({
                status: "success",
                status: 201,
                message: "New truck created!",
            })
        } else {
            res.json({ status: err.message })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// Update truck by Object id
exports.update = async function(req, res) {
    try {
        let truckToUpdate = await Truck.findById(req.params._id).exec()
        if (truckToUpdate) {
            truck._id = req.body._id ? req.body._id : truck._id;
            truck.body_subtype = req.body.body_subtype ? req.body.body_subtype : truck.body_subtype;
            truck.body_type = req.body.body_type ? req.body.body_type : truck.body_type;
            truck.color = req.body.color ? req.body.color : truck.color;
            truck.documents = req.body.documents ? req.body.documents : truck.documents;
            truck.group_id = req.body.group_id ? req.body.group_id : truck.group_id;
            truck.hours = req.body.hours ? req.body.hours : truck.hours;
            truck.is_active = req.body.is_active ? req.body.is_active : truck.is_active;
            truck.license_number = req.body.license_number ? req.body.license_number : truck.license_number;
            truck.msrp = req.body.msrp ? req.body.msrp : truck.msrp;
            truck.name = req.body.name ? req.body.name : truck.name;
            truck.odo = req.body.odo ? req.body.odo : truck.odo;
            truck.operator = req.body.operator ? req.body.operator : truck.operator;
            truck.ownership = req.body.ownership ? req.body.ownership : truck.ownership;
            truck.pictures = req.body.pictures ? req.body.pictures : truck.pictures;
            truck.service_history = req.body.service_history ? req.body.service_history : truck.service_history;
            truck.service_status = req.body.service_status ? req.body.service_status : truck.service_status;
            truck.trim = req.body.trim ? req.body.trim : truck.trim;
            truck.registration = req.body.registration ? req.body.registration : truck.registration;
            truck.vehicle_make = req.body.vehicle_make ? req.body.vehicle_make : truck.vehicle_make;
            truck.vehicle_model = req.body.vehicle_model ? req.body.vehicle_model : truck.vehicle_model;
            truck.vehicle_type = req.body.vehicle_type ? req.body.vehicle_type : truck.vehicle_type;
            truck.vin = req.body.vin ? req.body.vin : truck.vin;
            truck.year = req.body.year ? req.body.year : truck.year;
            let updatedTruck = await truckToUpdate.save()
            if (updatedTruck) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Truck Updated Successfully",
                    data: updatedTruck
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Truck not found' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Delete Truck by _id
exports.delete = async function (req, res) {
    try {
        let truck = await Truck.findOne({ _id: req.body._id }).exec()
        if (truck) {
            truck.body_subtype = truck.body_subtype;
            truck.body_type = truck.body_type;
            truck.color = truck.color;
            truck.documents = truck.documents;
            truck.group_id = truck.group_id;
            truck.hours = truck.hours;
            truck.is_active = false;
            truck.license_number = truck.license_number;
            truck.msrp = truck.msrp;
            truck.name = truck.name;
            truck.odo = truck.odo;
            truck.operator = truck.operator;
            truck.ownership = truck.ownership;
            truck.pictures = truck.pictures;
            truck.service_history = truck.service_history;
            truck.service_status = truck.service_status;
            truck.trim = truck.trim;
            truck.registration = truck.registration;
            truck.vehicle_make = truck.vehicle_make;
            truck.vehicle_model = truck.vehicle_model;
            truck.vehicle_type = truck.vehicle_type;
            truck.vin = truck.vin;
            truck.year = truck.year;
            if (truck) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Truck deactivated Successfully",
                    data: truck
                })
            }
        } else {
            res.json({ message: 'Truck not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};