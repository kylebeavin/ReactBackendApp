//Import Location Model
const Location = require('../models/locationModel.js')

// For queries
exports.view = function(req, res) {
    Location.find(req.body, null, {
            sort: {
                location_name: 1
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

//For creating new location
exports.add = async function(req, res) {
    try {
        var location = new Location();
        location.account_id = req.body.account_id;
        location.address_city = req.body.address_city;
        location.address_state = req.body.address_state;
        location.address_street = req.body.address_street;
        location.address_zip = req.body.address_zip;
        location.group_id = req.body.group_id;
        location.is_active = req.body.is_active;
        location.location_name = req.body.location_name;

        //Save and check error
        let newLocation = await location.save()
        if (newLocation) {
            res.json({
                status: "success",
                status: 201,
                message: "New location created!",
            })
        } else {
            res.json({ status: err.message })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update location by Object id
exports.update = async function(req, res) {
    try {
        let location = await Location.findById(req.params._id).exec()
        if (location) {
            location._id = req.body._id ? req.body._id : location._id;
            location.account_id = req.body.account_id;
            location.address_city = req.body.address_city;
            location.address_state = req.body.address_state;
            location.address_street = req.body.address_street;
            location.address_zip = req.body.address_zip;
            location.group_id = req.body.group_id;
            location.is_active = req.body.is_active;
            location.location_name = req.body.location_name;
            let updatedLocation = await location.save()
            if (updatedLocation) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Location Updated Successfully",
                    data: updatedLocation
                })
            } else {
                res.json({ message: 'Failed to update location', status: 400 })
            }
        } else {
            res.json({ message: 'Location not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Location by _id
exports.delete = async function (req, res) {
    try {
        let location = await Location.findOne({ _id: req.body._id }).exec()
        if (location) {
            location.account_id = location.account_id;
        location.address_city = location.address_city;
        location.address_state = location.address_state;
        location.address_street = location.address_street;
        location.address_zip = location.address_zip;
        location.group_id = location.group_id;
        location.is_active = false;
        location.location_name = location.location_name;
            if (location) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Location deactivated Successfully",
                    data: location
                })
            }
        } else {
            res.json({ message: 'Location not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};