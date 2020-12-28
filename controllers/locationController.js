//Import Location Model
Location = require('../models/locationModel.js')

//For server
exports.viewAll = function (req, res) {
    Location.get(function (err, location) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Location Successfully!",
            data: location       
        });
    });
};

//For creating new location
exports.add = function (req, res) {
    var location = new Location();
    location.location_id = req.body.location_id? req.body.location_id: location.location_id;
    location.account_id = req.body.account_id;
    location.location_name = location_name;
    location.address_street = req.body.address_street;
    location.address_city = req.body.address_city;
    location.address_state = req.body.address_state;
    location.address_zip = req.body.address_zip;
    location.is_valid = req.body.is_valid;

    //Save and check error
    location.save(function (err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Location Added!",
            data: location
        });
    });
};

// View Location by mongo object id
exports.view = function (req, res) {
    Location.findById(req.params.location_id, function (err, location) {
        if (err)
            console.log('Cannot return location');
            res.send(err);
        res.json({
            message: 'Location Details',
            data: location
        });
    });
};

// Update Location
exports.update = function (req, res) {
    Location.findById(req.params.location_id, function (err, location) {
        if (err)
            res.send(err);
        location.location_id = req.body.location_id? req.body.location_id: location.location_id;
        location.account_id = req.body.account_id;
        location.location_name = location_name;
        location.address_street = req.body.address_street;
        location.address_city = req.body.address_city;
        location.address_state = req.body.address_state;
        location.address_zip = req.body.address_zip;
        location.is_valid = req.body.is_valid;

        //save and check errors
        location.save(function (err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Location Updated Successfully",
                data: location
            });
        });
    });
};

// Delete Location
exports.delete = function (req, res) {
    Location.deleteOne({
        _id: req.params.location_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Location Deleted'
        });
    });
};

