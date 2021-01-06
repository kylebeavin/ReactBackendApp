//Import Location Model
Location = require('../models/locationModel.js')

// For queries
exports.view = function(req, res) {
    Location.find(req.body,
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

//For creating new location
exports.add = function(req, res) {
    var location = new Location();
    location.account_id = req.body.account_id;
    location.group_id = req.body.group_id;
    location.location_name = req.body.location_name;
    location.address_street = req.body.address_street;
    location.address_city = req.body.address_city;
    location.address_state = req.body.address_state;
    location.address_zip = req.body.address_zip;
    location.is_valid = req.body.is_valid;

    //Save and check error
    location.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Location Added!",
            data: location
        });
    });
};

// Update Location
exports.update = function(req, res) {
    Location.findById(req.params._id, function(err, location) {
        if (err)
            res.send(err);
        location.account_id = req.body.account_id;
        location.group_id = req.body.group_id;
        location.location_name = req.body.location_name;
        location.address_street = req.body.address_street;
        location.address_city = req.body.address_city;
        location.address_state = req.body.address_state;
        location.address_zip = req.body.address_zip;
        location.is_valid = req.body.is_valid;

        //save and check errors
        location.save(function(err) {
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
exports.delete = function(req, res) {
    Location.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Location Deleted'
        });
    });
};