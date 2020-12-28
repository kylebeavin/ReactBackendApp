//Import Group Model
Group = require('../models/groupModel.js')

//For server
exports.viewAll = function (req, res) {
    Group.get(function (err, group) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });
        else res.json({
            status: "success",
            status: 200,
            message: "Got Groups Successfully!",
            data: group
        });
    });
};

//For creating new group
exports.add = function (req, res) {
    var group = new Group();
    group.group_id = req.body.group_id ? req.body.group_id : group.group_id;
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
    group.dba = req.body.dba;
    group.tax_rate = req.body.tax_rate;
    group.created = req.body.created;

    //Save and check error
    group.save(function (err) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });

        else res.json({
            status: "success",
            status: 201,
            message: "New Group Added!",
            data: group
        });
    });
};

// View Group by mongo object id
exports.viewGroupById = function (req, res) {
    Group.findById(req.params._id, function (err, group) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });
        else res.json({
            status: "success",
            status: 201,
            message: 'Group Details',
            data: group
        });
    });
};

// Update Group
exports.update = function (req, res) {
    Group.findById(req.params.group_id, function (err, group) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });
        res.send(err);
        group.group_id = req.body.group_id ? req.body.group_id : group.group_id;
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
        group.dba = req.body.dba;
        group.tax_rate = req.body.tax_rate;
        group.created = req.body.created;

        //save and check errors
        group.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err,
                });
            else res.json({
                status: "success",
                status: 201,
                message: "Group Updated Successfully",
                data: group
            });
        });
    });
};

// Delete Group
exports.delete = function (req, res) {
    Group.deleteOne({
        _id: req.params.group_id
    }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });
        else res.json({
            status: "success",
            status: 201,
            status: "success",
            status: 200,
            message: 'Group Deleted'
        });
    });
};