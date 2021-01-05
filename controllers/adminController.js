//Import Admin Model
Admin = require('../models/adminModel.js')

// For queries
exports.view = function(req, res) {
    Admin.find(req.body,
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

//For creating new admin
exports.add = function(req, res) {
    var admin = new Admin();
    admin.user = req.body.user ? req.body.user : admin.user;
    admin.pass = req.body.pass;
    admin.token = req.body.token;

    //Save and check error
    admin.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Admin Added!",
            data: admin
        });
    });
};

// Update Admin
exports.update = function(req, res) {
    Admin.findById(req.params.user, function(err, admin) {
        if (err)
            res.send(err);
        admin.user = req.body.user ? req.body.user : admin.user;
        admin.pass = req.body.pass;
        admin.token = req.body.token;

        //save and check errors
        admin.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Admin Updated Successfully",
                data: admin
            });
        });
    });
};

// Delete Admin
exports.delete = function(req, res) {
    Admin.deleteOne({
        _id: req.params.user
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Admin Deleted'
        });
    });
};