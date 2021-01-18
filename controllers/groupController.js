//Import Group Model
const Group = require('../models/groupModel.js')

// For queries
exports.view = function(req, res) {
    Group.find(req.body, null, {
            sort: {
                region: 1
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

//For creating new group
exports.add = async function(req, res) {
    try {
        var group = new Group();
        group.name = req.body.name;
        group.email = req.body.email;
        group.is_active = req.body.is_active;
        group.address_street = req.body.address_street;
        group.address_city = req.body.address_city;
        group.address_state = req.body.address_state;
        group.address_zip = req.body.address_zip;
        group.ein = req.body.ein;
        group.region = req.body.region;
        group.time_zone = req.body.time_zone;
        group.signing_date = req.body.signing_date;
        group.launch_date = req.body.launch_date;
        group.phone = req.body.phone;
        group.webpage = req.body.webpage != null ? req.body.image : null;
        group.legal_company = req.body.legal_company;
        group.territory_zips = req.body.territory_zips;
        group.dba = req.body.dba;
        group.tax_rate = req.body.tax_rate;
        group.created = req.body.created;


        //Save and check error
        let newGroup = await group.save()
        if (newGroup) {
            res.json({
                status: "success",
                status: 201,
                message: "New group created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update group by Object id
exports.update = async function(req, res) {
    try {
        let group = await Group.findById(req.params._id).exec()
        if (group) {
            group._id = req.body._id ? req.body._id : group._id;
            group.name = req.body.name;
            group.email = req.body.email;
            group.is_active = req.body.is_active;
            group.address_street = req.body.address_street;
            group.address_city = req.body.address_city;
            group.address_state = req.body.address_state;
            group.address_zip = req.body.address_zip;
            group.ein = req.body.ein;
            group.region = req.body.region;
            group.time_zone = req.body.time_zone;
            group.signing_date = req.body.signing_date;
            group.launch_date = req.body.launch_date;
            group.phone = req.body.phone;
            group.webpage = req.body.webpage;
            group.legal_company = req.body.legal_company;
            group.territory_zips = req.body.territory_zips;
            group.dba = req.body.dba;
            group.tax_rate = req.body.tax_rate;
            group.created = req.body.created;
            let updatedGroup = await group.save()
            if (updatedGroup) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Group Updated Successfully",
                    data: updatedGroup
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Group not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Group by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteGroup = await Group.deleteOne({ _id: req.params._id }).exec()
        if (deleteGroup) {
            res.status(204).json({
                status: "success",
                message: 'Group successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};