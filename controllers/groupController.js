//Import Group Model
const Group = require('../models/groupModel.js')

// For queries
exports.view = function (req, res) {
    Group.find(req.body, null, {
        sort: {
            region: 1
        }
    },
        function (err, query) {

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
exports.add = async function (req, res) {
    try {
        var group = new Group();
        group.address_city = req.body.address_city;
        group.address_state = req.body.address_state;
        group.address_street = req.body.address_street;
        group.address_zip = req.body.address_zip;
        group.dba = req.body.dba;
        group.ein = req.body.ein;
        group.email = req.body.email;
        group.is_active = req.body.is_active;
        group.launch_date = req.body.launch_date;
        group.legal_company = req.body.legal_company;
        group.name = req.body.name;
        group.phone = req.body.phone;
        group.region = req.body.region;
        group.signing_date = req.body.signing_date;
        group.tax_rate = req.body.tax_rate;
        group.territory_zips = req.body.territory_zips;
        group.time_zone = req.body.time_zone;
        group.webpage = req.body.webpage != null ? req.body.image : null;
        
        //Save and check error
        let newGroup = await group.save()
        if (newGroup) {
            res.json({
                status: "success",
                status: 201,
                message: "New group created!",
            })
        } else {
            res.json({ status: 'Failed to create group ' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update group by Object id
exports.update = async function (req, res) {
    try {
        let group = await Group.findById(req.params._id).exec()
        if (group) {
            group._id = req.body._id ? req.body._id : group._id;
            group.address_city = group.address_city = req.body.address_city ? req.body.address_city : group.address_city;
            group.address_state = group.address_state = req.body.address_state ? req.body.address_state : group.address_state;
            group.address_street = group.address_street = req.body.address_street ? req.body.address_street : group.address_street;
            group.address_zip = group.address_zip = req.body.address_zip ? req.body.address_zip : group.address_zip;
            group.dba = group.dba = req.body.dba ? req.body.dba : group.dba;
            group.ein = group.ein = req.body.ein ? req.body.ein : group.ein;
            group.email = group.email = req.body.email ? req.body.email : group.email;
            group.is_active = group.is_active = req.body.is_active ? req.body.is_active : group.is_active;
            group.launch_date = group.launch_date = req.body.launch_date ? req.body.launch_date : group.launch_date;
            group.legal_company = group.legal_company = req.body.legal_company ? req.body.legal_company : group.legal_company;
            group.name = group.name = req.body.name ? req.body.name : group.name;
            group.phone = group.phone = req.body.phone ? req.body.phone : group.phone;
            group.region = group.region = req.body.region ? req.body.region : group.region;
            group.signing_date = group.signing_date = req.body.signing_date ? req.body.signing_date : group.signing_date;
            group.tax_rate = group.tax_rate = req.body.tax_rate ? req.body.tax_rate : group.tax_rate;
            group.territory_zips = group.territory_zips = req.body.territory_zips ? req.body.territory_zips : group.territory_zips;
            group.time_zone = group.time_zone = req.body.time_zone ? req.body.time_zone : group.time_zone;
            group.webpage = group.webpage = req.body.webpage ? req.body.webpage : group.webpage;
            let updatedGroup = await group.save()
            if (updatedGroup) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Group Updated Successfully",
                    data: updatedGroup
                })
            } else {
                res.json({ message: 'Failed to update group', status: 400 })
            }
        } else {
            res.json({ message: 'Group not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Group by _id
exports.delete = async function (req, res) {
    try {
        let account = await Group.findOne({ _id: req.body._id }).exec()
        if (account) {
            group._id = group._id
            group.address_city = group.address_city;
            group.address_state = group.address_state;
            group.address_street = group.address_street;
            group.address_zip = group.address_zip;
            group.dba = group.dba;
            group.ein = group.ein;
            group.email = group.email;
            group.is_active = false;
            group.launch_date = group.launch_date;
            group.legal_company = group.legal_company;
            group.name = group.name;
            group.phone = group.phone;
            group.region = group.region;
            group.signing_date = group.signing_date
            group.tax_rate = group.tax_rate;
            group.territory_zips = group.territory_zips;
            group.time_zone = group.time_zone;
            group.webpage = group.webpage;
            if (account) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Group deactivated Successfully",
                    data: account
                })
            }
        } else {
            res.json({ message: 'Group not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};