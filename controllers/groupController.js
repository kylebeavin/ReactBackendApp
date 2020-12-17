//Import Group Model
Group = require('../models/groupModel.js')

//For server
exports.server = function(req, res) {
    Group.get(function(err, group) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Groups Successfully!",
            data: group
        });
    });
};

//For creating new group
exports.add = function(req, res) {
    var group = new Group();
    group.group_id = req.body.group_id ? req.body.group_id : group.group_id;
    group.name = req.body.name;
    group.email = req.body.email;
    group.status = true;
    group.address = req.body.address;
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
    group.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Group Added!",
            data: group
        });
    });
};

// View Group by mongo object id
exports.viewGroupById = function(req, res) {
    Group.findById(req.params._id, function(err, group) {
        if (err)
            console.log('Cannot return group');
        res.send(err);
        res.json({
            message: 'Group Details',
            data: group
        });
    });
};

// // View Group by mongo franchise email
// exports.viewGroupByEmail = function(req, res) {
//     Group.find({ email: req.params.email }, function(err, group) {
//         if (err)
//             console.log('Cannot return group');
//         res.send(err);
//         res.json({
//             message: 'Group Details by email',
//             data: group
//         });
//     });
// };


// Update Group
exports.update = function(req, res) {
    Group.findById(req.params.group_id, function(err, group) {
        if (err)
            res.send(err);
        group.group_id = req.body.group_id ? req.body.group_id : group.group_id;
        group.name = req.body.name;
        group.email = req.body.email;
        group.status = true;
        group.address = req.body.address;
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
        group.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Group Updated Successfully",
                data: group
            });
        });
    });
};

// Delete Group
exports.delete = function(req, res) {
    Group.deleteOne({
        _id: req.params.group_id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Group Deleted'
        });
    });
};