//Import User Model
User = require('../models/userModel.js');

// For queries
exports.view = function(req, res) {
    User.find(req.body,
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

// For creating new user
exports.add = async function(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.token = req.body.token;
    user.image = req.body.image;
    user.token = req.body.token;
    user.image = req.body.image;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.role = req.body.role;
    user.group_id = req.body.group_id;
    user.is_active = true;

    //Save and check error
    user.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New User Added!",
            data: user
        });
    });
};

// Update User by Mongo Object ID
exports.update = function(req, res) {
    User.findById(req.params._id, function(err, user) {
        if (err)
            res.send(err);
        user._id = req.body._id ? req.body._id : user._id;
        user.email = req.body.email;
        user.password = req.body.password;
        user.token = req.body.token;
        user.image = req.body.image;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.role = req.body.role;
        user.group_id = req.body.group_id;
        user.is_active = req.body.is_active;

        //save and check errors
        user.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "User Updated Successfully",
                data: user
            });
        });
    });
};

// Delete User by Mongo Object ID
exports.delete = function(req, res) {
    User.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'User Deleted'
        });
    });
};