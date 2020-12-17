//Import Truck Model
Truck = require('../models/truckModel.js');

//For server
exports.server = function (req, res) {
    Truck.get(function (err, truck) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Truck Successfully!",
            data: truck       
        });
    });
};

//For creating new truck
exports.add = function (req, res) {
    var truck = new Truck();
    truck.truck_id = req.body.truck_id? req.body.truck_id: truck.truck_id;
    truck.group_id = req.body.group_id;
    truck.vin = req.body.vin;
    truck.name = req.body.name;
    truck.odo = req.body.odo;
    truck.hours = req.body.hours;
    truck.machine_id = req.body.machine_id;
    truck.created_at = req.body.created_at;

    //Save and check error
    truck.save(function (err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Truck Added!",
            data: truck
        });
    });
};

// View Truck by mongo object id
exports.view = function (req, res) {
    Truck.findById(req.params.truck_id, function (err, truck) {
        if (err)
            res.send(err);
        else res.json({
            message: 'Truck Details',
            data: truck
        });
    });
};

// Update Truck
exports.update = function (req, res) {
    Truck.findById(req.params.truck_id, function (err, truck) {
        if (err)
            res.send(err);
        truck.truck_id = req.body.truck_id? req.body.truck_id: truck.truck_id;
        truck.group_id = req.body.group_id;
        truck.vin = req.body.vin;
        truck.name = req.body.name;
        truck.odo = req.body.odo;
        truck.hours = req.body.hours;
        truck.machine_id = req.body.machine_id;
        truck.created_at = req.body.created_at;
        truck.status = true;

        //save and check errors
        truck.save(function (err) {
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
exports.delete = function (req, res) {
    Truck.deleteOne({
        _id: req.params.truck_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Truck Deleted'
        });
    });
};

