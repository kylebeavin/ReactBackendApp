//Import User Model
User = require('../models/userModel.js');
// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;

// For queries
exports.view = function (req, res) {
    User.find(req.body, null, {
        sort: {
            first_name: 1
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

// For creating new user
exports.add = function (req, res) {
    var user = new User();
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    user.email = req.body.email;
    user.password = hashedPassword;
    user.token = req.body.token != null ? req.body.token : null;
    user.image = req.body.image != null ? req.body.image : null;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.role = req.body.role;
    user.group_id = req.body.group_id;

    //Save and check error
    user.save(function (err, user) {
        if (err) return res.status(500).send("There was a problem registering the user.")

        else res.json({
            message: "New User Added!",
            data: user,
            status: 200,
        });
    });
};

// For authenticating user by token
exports.auth = function (req, res) {
    User.findOne({ token: req.body.token }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No token found.');
        var token = req.body.token;
        if (user.token == token) {
            res.json({
                message: 'Token Valid',
                auth: true
            })
        } else {
            res.json({
                message: 'BAD',
                auth: false
            })
        }
    });
};

// For logging in
exports.login = function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, secret, {
            expiresIn: 3600 // expires in 1 hour(s)
        });
        user._id = user._id;
        user.email = user.email;
        user.password = user.password;
        user.token = token;
        user.image = user.image;
        user.first_name = user.first_name;
        user.last_name = user.last_name;
        user.role = user.role;
        user.group_id = user.group_id;
        user.is_active = user.is_active;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            else res.json({
                status: 200,
                message: "User logged in successfully",
                data: user,
                auth: true,
                token: token
            });
        });
    });

};


// For logging out
exports.logout = function (req, res) {
    User.findOne({ token: req.body.token }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No token found.');

        user._id = user._id;
        user.email = user.email;
        user.password = user.password;
        user.token = null;
        user.image = user.image;
        user.first_name = user.first_name;
        user.last_name = user.last_name;
        user.role = user.role;
        user.group_id = user.group_id;
        user.is_active = user.is_active;

        //save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            else res.json({
                status: 200,
                message: "User logged out Successfully",
                auth: false,
            });
        });
    });
};

// Update User by Mongo Object ID
exports.update = function (req, res) {
    User.findById(req.params._id, function (err, user) {
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
        user.save(function (err) {
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
exports.delete = function (req, res) {
    User.deleteOne({
        _id: req.params._id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'User Deleted'
        });
    });
};