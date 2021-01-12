//userController.js
//Import User Model
User = require('../models/userModel.js');
// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;

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

//For creating new user
exports.add = async function(req, res) {
    try {
        const user = new User();
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
        let newUser = await user.save()
        if (newUser) {
            res.json({
                status: "success",
                status: 201,
                message: "New user created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// For authenticating user by token
exports.auth = async function(req, res) {
    try {
        User.findOne({ token: req.body.token }, function(err, user) {
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
                    message: 'Bad Token, Token Invalid',
                    auth: false
                })
            }
        });
    } catch (err) {
        res.json({ message: err.message })
    }
};

// For logging in
exports.login = async function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, secret, {
            expiresIn: 50400 // expires in 14 hour(s)
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
        user.save(function(err) {
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
exports.logout = async function(req, res) {
    try {
        let user = await User.findOne({ token: req.body.token }).exec()
        if (user) {
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
            if (user) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "User logged out Successfully",
                    data: user
                })
            } else {
                res.status(400).json({ message: 'Failed to logout', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'User not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Update order by Object id
exports.update = async function(req, res) {
    try {
        let userToUpdate = await User.findById(req.params._id).exec()
        if (userToUpdate) {
            userToUpdate._id = req.body._id ? req.body._id : userToUpdate._id;
            userToUpdate.email = req.body.email;
            userToUpdate.password = req.body.password;
            userToUpdate.token = req.body.token;
            userToUpdate.image = req.body.image;
            userToUpdate.first_name = req.body.first_name;
            userToUpdate.last_name = req.body.last_name;
            userToUpdate.role = req.body.role;
            userToUpdate.group_id = req.body.group_id;
            userToUpdate.is_active = req.body.is_active;
            let updatedUser = await userToUpdate.save()
            if (updatedUser) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "User Updated Successfully",
                    data: updatedUser
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'User not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};

// Delete User by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteUser = await User.deleteOne({ _id: req.params._id }).exec()
        if (deleteUser) {
            res.status(204).json({ message: 'User successfully deleted' })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};