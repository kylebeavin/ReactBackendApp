//userController.js
//Import User Model
const User = require('../models/userModel.js');
// Import user validator
const validateUserInput = require('../validation/userValidator')
console.log(validateUserInput);
// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;

// For queries - Sorts by first name
exports.view = function (req, res) {
	User.find(req.body, null, {
		sort: {
			first_name: 1  // Sort field goes here
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

//For creating new user
exports.add = async function (req, res) {
	try {
		const user = new User();
		var hashedPassword = bcrypt.hashSync(req.body.password, 8);			// Hashed - String - Required
		var displayName = req.body.first_name + ' ' + req.body.last_name; 	// Concationation of first and last name
		user.email = req.body.email;                                      	// String Required
		user.display_name = displayName;									// String Required - input from displayName
		user.first_name = req.body.first_name;								// String Required
		user.group_id = req.body.group_id;									// String Group Document ID
		user.image = req.body.image != null ? req.body.image : null;	  	// Assigned Null
		user.last_name = req.body.last_name;								// String required
		user.password = hashedPassword;                                   	// String Required - input from hashedPassword
		user.role = req.body.role;											// String Required
		user.token = req.body.token != null ? req.body.token : null;	  	// Assigned Null


		//Save and check error
		let newUser = await user.save()
		if (newUser) {
			res.json({
				status: "success",
				status: 201,
				message: "New user created!",
			})
		} else {
			res.json({ message: err })
		}

	} catch (err) {
		res.json({ message: err })
	}

};

// For authenticating user by token
exports.auth = async function (req, res) {
	try {
		User.findOne({ token: req.body.token }, function (err, user) {
			if (err) return res.send('Error on the server.');
			if (!user) return res.send('No token found.');
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
exports.login = async function (req, res) {
	User.findOne({ email: req.body.email }, function (err, user) {
		if (err) return res.send('Error on the server.');
		if (!user) return res.send('No user found.');

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) return res.send({ auth: false, token: null });

		var token = jwt.sign({ id: user._id }, secret, {
			expiresIn: 50400 // expires in 14 hour(s)
		});
		user._id = user._id;
		user.display_name = user.display_name;
		user.email = user.email;
		user.first_name = user.first_name;
		user.group_id = user.group_id;
		user.image = user.image;
		user.is_active = user.is_active;
		user.last_name = user.last_name;
		user.password = user.password;
		user.role = user.role;
		user.token = token;

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
exports.logout = async function (req, res) {
	try {
		let user = await User.findOne({ token: req.body.token }).exec()
		if (user) {
			user._id = user._id;
			user.display_name = user.display_name;
			user.email = user.email;
			user.first_name = user.first_name;
			user.group_id = user.group_id;
			user.image = user.image;
			user.is_active = user.is_active;
			user.last_name = user.last_name;
			user.password = user.password;
			user.role = user.role;
			user.token = null;
			if (user) {
				res.json({
					status: "success",
					status: 204,
					message: "User logged out Successfully",
					data: user
				})
			} else {
				res.json({ message: 'Failed to logout', status: 400 })
			}
		} else {
			res.json({ message: 'User not found' })
		}
	} catch (err) {
		res.json({ message: err })
	}
};

// Update user by user _id
exports.update = async function (req, res) {
	try {
		let user = await User.findOne({ _id: req.body._id }).exec()
		var hashedPassword = bcrypt.hashSync(req.body.password, 8);
		if (user) {
			user._id = req.body._id ? req.body._id : user._id;
			user.display_name = req.body.display_name ? req.body.display_name : user.display_name;
			user.email = req.body.email ? req.body.email : user.email;
			user.first_name = req.body.first_name ? req.body.first_name : user.first_name;
			user.group_id = req.body.group_id ? req.body.group_id : user.group_id;
			user.image = req.body.image ? req.body.image : user.image;
			user.is_active = req.body.is_active ? req.body.is_active : user.is_active;
			user.last_name = req.body.last_name ? req.body.last_name : user.last_name;
			user.password = hashedPassword ? hashedPassword : user._id;
			user.role = req.body.role ? req.body.role : user.role;
			user.token = req.body.token ? req.body.token : user.token;
			let updatedUser = await user.save()
			if (updatedUser) {
				res.json({
					status: 204,
					message: "User Updated Successfully",
					data: updatedUser
				})
			} else {
				res.json({ message: 'Failed to update', status: 400 })
			}
		} else {
			res.json({ message: 'User not found' })
		}
	} catch (err) {
		res.json({ status: '400', message: err.message })
	}

};

// Delete User by email
exports.delete = async function (req, res) {
	try {
		let user = await User.findOne({ email: req.body.email }).exec()
		if (user) {
			user._id = user._id;
			user.display_name = user.display_name;
			user.email = user.email;
			user.first_name = user.first_name;
			user.group_id = user.group_id;
			user.image = user.image;
			user.is_active = false
			user.last_name = user.last_name;
			user.password = user.password;
			user.role = user.role;
			user.token = null;
			if (user) {
				res.json({
					status: "success",
					status: 204,
					message: "User deactivated Successfully",
					data: user
				})
			}
		} else {
			res.json({ message: 'User not found' })
		}
	} catch (err) {
		res.json({ message: err.message })
	}
};