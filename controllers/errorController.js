//errorController.js
//Import Error Model
Error = require('../models/errorModel.js');

// For queries
exports.view = function(req, res) {
    Error.find(req.body, null, {
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
        const error = new Error();
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        error.email = req.body.email;
        error.password = hashedPassword;
        error.token = req.body.token != null ? req.body.token : null;
        error.image = req.body.image != null ? req.body.image : null;
        error.first_name = req.body.first_name;
        error.last_name = req.body.last_name;
        error.role = req.body.role;
        error.group_id = req.body.group_id;


        //Save and check error
        let newError = await error.save()
        if (newError) {
            res.json({
                status: "success",
                status: 201,
                message: "New error created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};



// Update error by Object id
exports.update = async function(req, res) {
    try {
        let error = await Error.findById(req.params._id).exec()
        if (error) {
            error._id = req.body._id ? req.body._id : error._id;
            error.email = req.body.email;
            error.password = req.body.password;
            error.token = req.body.token;
            error.image = req.body.image;
            error.first_name = req.body.first_name;
            error.last_name = req.body.last_name;
            error.role = req.body.role;
            error.group_id = req.body.group_id;
            error.is_active = req.body.is_active;
            let updatedError = await error.save()
            if (updatedError) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Error Updated Successfully",
                    data: updatedError
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Error not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};

// Delete Error by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteError = await Error.deleteOne({ _id: req.params._id }).exec()
        if (deleteError) {
            res.status(204).json({ message: 'Error successfully deleted' })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};