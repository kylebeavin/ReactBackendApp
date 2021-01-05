//Import Truck Model
Truck = require('../models/truckModel.js');

// For queries
exports.view = function(req, res) {
    Truck.find(req.body,
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
exports.add = function(req, res) {
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
    truck.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Truck Added!",
            data: truck
        });
    });
};

// Update Truck
exports.update = function(req, res) {
    Truck.findById(req.params._id, function(err, truck) {
        if (err)
            res.send(err);
        truck.group_id = req.body.group_id;
        truck.vin = req.body.vin;
        truck.name = req.body.name;
        truck.odo = req.body.odo;
        truck.hours = req.body.hours;
        truck.machine_id = req.body.machine_id;
        truck.created = req.body.created;
        truck.is_active = req.body.is_active;

        //save and check errors
        truck.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Truck Updated Successfully",
                data: truck
            });
        });
    });
};

// Delete Truck
exports.delete = function(req, res) {
    Truck.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Truck Deleted'
        });
    });
};