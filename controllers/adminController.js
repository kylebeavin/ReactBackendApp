//Import Admin Model
Admin = require('../models/adminModel.js')

//For server
exports.viewAll = function(req, res) {
    Admin.get(function(err, admin) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Admin Successfully!",
            data: admin
        });
    });
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

// View Admin by mongo object id
exports.view = function(req, res) {
    Admin.findById(req.params.user, function(err, admin) {
        if (err)
            console.log('Cannot return admin');
        res.send(err);
        res.json({
            message: 'Admin Details',
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