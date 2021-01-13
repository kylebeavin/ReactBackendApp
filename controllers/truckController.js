//Import Truck Model
Truck = require('../models/truckModel.js');

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
        truck.group_id = req.body.group_id;
        truck.vin = req.body.vin;
        truck.name = req.body.name;
        truck.odo = req.body.odo;
        truck.hours = req.body.hours;
        truck.machine_id = req.body.machine_id;
        truck.created = req.body.created;
        truck.is_active = req.body.is_active;


        //Save and check error
        let newTruck = await truck.save()
        if (newTruck) {
            res.json({
                status: "success",
                status: 201,
                message: "New truck created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
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
            truck.group_id = req.body.group_id;
            truck.vin = req.body.vin;
            truck.name = req.body.name;
            truck.odo = req.body.odo;
            truck.hours = req.body.hours;
            truck.machine_id = req.body.machine_id;
            truck.created = req.body.created;
            truck.is_active = req.body.is_active;
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
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Truck by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteTruck = await Truck.deleteOne({ _id: req.params._id }).exec()
        if (deleteTruck) {
            res.status(204).json({
                status: "success",
                message: 'Truck successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};