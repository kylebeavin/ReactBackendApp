//accountController.js
//Import Account Model
Account = require('../models/accountModel.js')

// For queries
exports.view = function(req, res) {
    Account.find(req.body,
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

//For creating new account
exports.add = function(req, res) {
    var account = new Account();
    account.group_id = req.body.group_id; // String, required
    account.name = req.body.name; // String, required
    account.owner_id = req.body.owner_id; // String, required
    account.is_active = req.body.is_active; // Bool, default: true
    account.stage = req.body.stage; // String, required
    account.address_street = req.body.address_street; // String, required
    account.address_city = req.body.address_city; // String, required
    account.address_state = req.body.address_state; // String, required
    account.address_zip = req.body.address_zip; // String, required
    account.email = req.body.email; // String, required
    account.demo = req.body.demo; // Date, not required 
    account.conversion = req.body.conversion; // Date, not required 
    account.hauling_contract = req.body.hauling_contract; // Bool, not required 
    account.hauling_expiration = req.body.hauling_expiration; // Date, not required 
    account.notes = req.body.notes; // String, not required

    //Save and check error
    account.save(function(err) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });

        else res.json({
            status: "success",
            status: 201,
            message: "New Account Added!",
            data: account
        });
    });
};

// Update Account by Object Id
exports.update = function(req, res) {
    Account.findById(req.params._id, function(err, account) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        account.group_id = req.body.group_id;
        account.name = req.body.name;
        account.owner_id = req.body.owner_id;
        account.is_active = req.body.is_active;
        account.stage = req.body.stage;
        account.address_street = req.body.address_street;
        account.address_city = req.body.address_city;
        account.address_state = req.body.address_state;
        account.address_zip = req.body.address_zip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function(err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "Account Updated Successfully",
                data: account
            });
        });
    });
};

// Delete Account by Object Id
exports.delete = function(req, res) {
    Account.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Object Id'
        });
    });
};