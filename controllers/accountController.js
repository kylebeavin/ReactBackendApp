//Import Account Model
Account = require('../models/accountModel.js')

//For server
exports.server = function(req, res) {
    Account.get(function(err, account) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Account Successfully!",
            data: account
        });
    });
};

//For creating new account
exports.add = function(req, res) {
    var account = new Account();
    account.group_id = req.body.group_id;
    account.name = req.body.name;
    account.owner_id = req.body.owner_id;
    account.is_active = req.body.is_active;
    account.stage = req.body.stage;
    account.addressStreet = req.body.addressStreet;
    account.addressCity = req.body.addressCity;
    account.addressState = req.body.addressState;
    account.addressZip = req.body.addressZip;
    account.email = req.body.email;
    account.demo = req.body.demo;
    account.conversion = req.body.conversion;
    account.hauling_contract = req.body.hauling_contract;
    account.hauling_expiration = req.body.hauling_expiration;

    //Save and check error
    account.save(function(err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Account Added!",
            data: account
        });
    });
};

// View Account by mongo object id
exports.viewAccountById = function(req, res) {
    Account.findById(req.params._id, function(err, account) {
        if (err)
            console.log('Cannot return account');
        res.send(err);
        res.json({
            message: 'Account Details',
            data: account
        });
    });
};

// Update Account
exports.update = function(req, res) {
    Account.findById(req.params._id, function(err, account) {
        if (err)
            res.send(err);
        account._id = req.body._id ? req.body._id : account._id;
        account.group_id = req.body.group_id;
        account.name = req.body.name;
        account.owner_id = req.body.owner_id;
        account.is_active = req.body.is_active;
        account.stage = req.body.stage;
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        //save and check errors
        account.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "Account Updated Successfully",
                data: account
            });
        });
    });
};

// Delete Account
exports.delete = function(req, res) {
    Account.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Account Deleted'
        });
    });
};