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
// // View Users by query
// exports.viewByUserQuery = function (req, res) {
//     User.find({ role: req.params.role }, function (err, user) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Got users by role',
//             data: user
//         });
//     });
// };

// View Users by group
exports.viewUserByGroup = function (req, res) {
    User.find({ group_id: req.params.group_id }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got users by group',
            data: user
        });
    });
};

// View Users by role
exports.viewUserByRole = function (req, res) {
    User.find({ role: req.params.role }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got users by role',
            data: user
        });
    });
};

// View User by mongo object id
exports.viewUserById = function (req, res) {
    User.findById(req.params._id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got user by Document Object ID',
            data: user
        });
    });
};

// View User by email
exports.viewUserByEmail = function (req, res) {
    User.find({ email: req.params.email }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got user by email',
            data: user
        });
    });
};

// View User by email
exports.viewUserByStatus = function (req, res) {
    User.find({ status: req.params.status }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got users by status',
            data: user
        });
    });
};

// View User by Created
exports.viewUserByCreated = function (req, res) {
    User.find({ created: req.params.created }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got users by created',
            data: user
        });
    });
};

// Update User by Mongo Object ID
exports.updateUserById = function (req, res) {
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

// Update all users in role TODO: Test
exports.updateUserByRole = function (req, res) {
    User.find({ role: req.params.role }, function (err, user) {
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
                message: "Updated all users in role Successfully",
                data: user
            });
        });
    });
};

// Update all users in group TODO: Test
exports.updateUserByGroup = function (req, res) {
    User.find({ group: req.params.group }, function (err, user) {
        if (err)
            res.send(err);
        user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.group = req.body.group;
        user.group_id = req.body.group_id;
        user.status = req.body.status;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Updated all users in group Successfully",
                data: user
            });
        });
    });
};

// Update all users in status TODO: Test
exports.updateUserByStatus = function (req, res) {
    User.find({ status: req.params.status }, function (err, user) {
        if (err)
            res.send(err);
        user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.status = req.body.status;
        user.status_id = req.body.status_id;
        user.status = req.body.status;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Updated all users in status Successfully",
                data: user
            });
        });
    });
};

// Update all users in email TODO: Test
exports.updateUserByEmail = function (req, res) {
    User.find({ email: req.params.email }, function (err, user) {
        if (err)
            res.send(err);
        user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.email_id = req.body.email_id;
        user.email = req.body.email;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Updated all users in email Successfully",
                data: user
            });
        });
    });
};

// Update all users by creation date TODO: Test
exports.updateUserByCreated = function (req, res) {
    User.find({ created: req.params.created }, function (err, user) {
        if (err)
            res.send(err);
        user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.email_id = req.body.email_id;
        user.email = req.body.email;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Updated all users in email Successfully",
                data: user
            });
        });
    });
};

// Delete User by Mongo Object ID
exports.deleteUserById = function (req, res) {
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

// Delete User by email
exports.deleteUserByEmail = function (req, res) {
    User.deleteOne({
        email: req.params.email
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'User Deleted by email'
        });
    });
};

// Delete User by group
exports.deleteUserByGroup = function (req, res) {
    User.deleteOne({
        group: req.params.group
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'All users have been deleted for this group'
        });
    });
};

// Delete User by role
exports.deleteUserByRole = function (req, res) {
    User.deleteOne({
        role: req.params.role
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'All users have been deleted for this role'
        });
    });
};

// Delete User by status
exports.deleteUserByStatus = function (req, res) {
    User.deleteOne({
        status: req.params.status
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'All users have been deleted for this status'
        });
    });
};

// Delete User by created
exports.deleteUserByCreated = function (req, res) {
    User.delete({
        created: req.params.created
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            created: "success",
            message: 'All users have been deleted for this date'
        });
    });
};