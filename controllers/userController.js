//Import User Model
User = require('../models/userModel');

//For smt_server
exports.smt_server = function (req, res) {
    User.get(function (err, user) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got User Successfully!",
            data: user       
        });
    });
};

//For creating new user
exports.add = function (req, res) {
    var user = new User();
    user.user_id = req.body.user_id? req.body.user_id: user.user_id;
    user.email = req.body.email;
    user.role = req.body.role;
    user.group_id = req.body.group_id;
    user.status = true;

    //Save and check error
    user.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New User Added!",
            data: user
        });
    });
};

// View User by mongo object id
exports.view = function (req, res) {
    User.findById(req.params.useruser_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// Update User
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
        user.email = req.body.email;
        user.role = req.body.role;
        user.group_id = req.body.group_id;
        user.status = req.body.status;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "User Updated Successfully",
                data: user
            });
        });
    });
};

// Delete User
exports.delete = function (req, res) {
    User.deleteOne({
        _id: req.params.user_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'User Deleted'
        });
    });
};