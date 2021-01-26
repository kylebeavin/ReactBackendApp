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
        location.group_id = req.body.group_id;
        location.location_name = req.body.location_name;
        location.address_street = req.body.address_street;
        location.address_city = req.body.address_city;
        location.address_state = req.body.address_state;
        location.address_zip = req.body.address_zip;
        location.is_active = req.body.is_active;

        //Save and check error
        let newLocation = await location.save()
        if (newLocation) {
            res.json({
                status: "success",
                status: 201,
                message: "New location created!",
            })
        } else {
            res.status(304).json({ status: err.message })
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
            location.group_id = req.body.group_id;
            location.location_name = req.body.location_name;
            location.address_street = req.body.address_street;
            location.address_city = req.body.address_city;
            location.address_state = req.body.address_state;
            location.address_zip = req.body.address_zip;
            location.is_active = req.body.is_active;
            let updatedLocation = await location.save()
            if (updatedLocation) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Location Updated Successfully",
                    data: updatedLocation
                })
            } else {
                res.status(400).json({ message: 'Failed to update location', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Location not found' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Delete Location by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteLocation = await Location.deleteOne({ _id: req.params._id }).exec()
        if (deleteLocation) {
            res.status(204).json({
                status: "success",
                message: 'Location successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};