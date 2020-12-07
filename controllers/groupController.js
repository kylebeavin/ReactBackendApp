//Import Group Model
Group = require('../models/groupModel.js')

//For server
exports.server = function (req, res) {
    Group.get(function (err, group) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Group Successfully!",
            data: group       
        });
    });
};

// //For creating new group
// exports.add = function (req, res) {
//     var group = new Group();
//     group.group_id = req.body.group_id? req.body.group_id: group.group_id;
//     group.email = req.body.email;
//     group.role = req.body.role;
//     group.group_id = req.body.group_id;
//     group.status = true;

//     //Save and check error
//     group.save(function (err) {
//         if (err)
//             res.json(err);

//         res.json({
//             message: "New Group Added!",
//             data: group
//         });
//     });
// };

// View Group by mongo object id
exports.view = function (req, res) {
    Group.findById(req.params.group_id, function (err, group) {
        if (err)
            console.log('Cannot return group');
            res.send(err);
        res.json({
            message: 'Group Details',
            data: group
        });
    });
};

// Update Group
exports.update = function (req, res) {
    Group.findById(req.params.group_id, function (err, group) {
        if (err)
            res.send(err);
        group.group_id = req.body.group_id ? req.body.group_id : group.group_id;
        group.email = req.body.email;
        group.role = req.body.role;
        group.group_id = req.body.group_id;
        group.status = req.body.status;

        //save and check errors
        group.save(function (err) {
            if (err)
                res.json(err)
            res.json({
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
            res.send(err)
        res.json({
            status: "success",
            message: 'Group Deleted'
        });
    });
};

