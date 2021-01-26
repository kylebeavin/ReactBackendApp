//errorController.js
//Import _Error_ Model 
// Will probably be replaced with "Bugs" because it's more easily read and understood.
const _Error_ = require('../models/errorModel.js');

// For queries
exports.view = function(req, res) {
    _Error_.find(req.body, null, {
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

//For creating new error
exports.add = async function(req, res) {
    try {
        const error = new _Error_();
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        error.email = req.body.email;
        error.password = hashedPassword;
        error.image = req.body.image;
        error.first_name = req.body.first_name;
        error.last_name = req.body.last_name;
        error.role = req.body.role;
        error.group_id = req.body.group_id;


        //Save and check error
        let new_Error_ = await error.save()
        if (new_Error_) {
            res.json({
                status: "success",
                status: 201,
                message: "New error created!",
            })
        } else {
            res.json({ status: 'Error message not saved as record' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};



// Update error by Object id
exports.update = async function(req, res) {
    try {
        let error = await _Error_.findById(req.params._id).exec()
        if (error) {
            error._id = req.body._id ? req.body._id : error._id;
            error.email = req.body.email ? req.body.email : error.email;
            error.password = req.body.password ? req.body.password : error.password;
            error.image = req.body.image ? req.body.image : error.image;
            error.first_name = req.body.first_name ? req.body.first_name : error.first_name;
            error.last_name = req.body.last_name ? req.body.last_name : error.last_name;
            error.role = req.body.role ? req.body.role : error.role;
            error.group_id = req.body.group_id ? req.body.group_id : error.group_id;
            error.is_active = req.body.is_active ? req.body.is_active : error.is_active;
            let updatedError = await error.save()
            if (updatedError) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Error record Updated Successfully",
                    data: updatedError
                })
            } else {
                res.json({ message: 'Failed to update error record', status: 400 })
            }
        } else {
            res.json({ message: 'Error record not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }

};

// Delete Error by _id
exports.delete = async function (req, res) {
	try {
		let account = await _Error_.findOne({ _id: req.body._id }).exec()
		if (account) {
            error._id = error._id;
            error.email = req.body.email;
            error.password = hashedPassword;
            error.image = req.body.image;
            error.first_name = req.body.first_name;
            error.last_name = req.body.last_name;
            error.role = req.body.role;
            error.group_id = req.body.group_id;
            error.is_active = false;
			if (account) {
				res.json({
					status: "success",
					status: 204,
					message: "account deactivated Successfully",
					data: account
				})
			}
		} else {
			res.json({ message: 'Account not found' })
		}
	} catch (err) {
		res.json({ message: err.message })
	}
};