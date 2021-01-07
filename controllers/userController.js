//Import User Model
User = require('../models/userModel.js');
// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var config = require('../config');

// For queries
exports.view = function(req, res) {
    User.find(req.body, null, {
            sort: {
                first_name: 1
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

// For creating new user
exports.add = function(req, res) {
    var user = new User();
    try {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400
        })
    } catch (error) {
        console.log('Error creating new user');
    }
    user.email = req.body.email;
    user.password = hashedPassword;
    user.token = token;
    user.image = req.body.image;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.role = req.body.role;
    user.group_id = req.body.group_id;

    //Save and check error
    user.save(function(err, user) {
        if (err) return res.status(500).send("There was a problem registering the user.")

        else res.json({
            message: "New User Added!",
            data: user,
            status: 200,
        });
    });
};

// For authenticating user by token
exports.auth = function(req, res) {
    User.findById(req.userId, { password: 0 }, function(err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });

};

// For logging in
exports.login = function(req, res) {

    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
    });

};


// For logging out
exports.logout = function(req, res) {
    res.status(200).send({ auth: false, token: null });
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