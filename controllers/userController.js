//Import User Model
User = require('../models/userModel.js');

//For server
exports.server = function (req, res) {
    User.get(function (err, user) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Users Successfully!",
            data: user
        });
    });
};

//For creating new user
exports.add = function (req, res) {
    var user = new User();
    user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
    user.email = req.body.email;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
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
// View Users by status
exports.viewByStatus = function (req, res) {
    User.find(req.query.status, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View User by mongo object id
exports.viewById = function (req, res) {
    User.findById(req.params._id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View Users by creation time/date
exports.viewByCreation = function (req, res) {
    User.findOne(req.query.created_at, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View User by email
exports.viewByEmail = function (req, res) {
    User.findOne(req.query.email, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View User by mongo object id
exports.viewByUserId = function (req, res) {
    User.findOne(req.query.User_Id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View Users by role
exports.viewByRole = function (req, res) {
    User.find(req.query.role, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User Details',
            data: user
        });
    });
};

// View User by mongo object id
exports.viewByGroup = function (req, res) {
    User.find(req.query.group_id, function (err, user) {
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
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
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