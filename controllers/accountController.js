//Import Account Model
Account = require('../models/accountModel.js')

//For server
exports.server = function (req, res) {
    Account.get(function (err, account) {
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
exports.add = function (req, res) {
    var account = new Account();
    account.account_id = req.body.account_id? req.body.account_id: account.account_id;
    account.email = req.body.email;
    account.contact = req.body.contact;
    account.addressStreet = req.body.addressStreet;
    account.addressCity = req.body.addressCity;
    account.addressState = req.body.addressState;
    account.addressZip = req.body.addressZip;
    account.group_id = req.body.group_id;
    account.name = req.body.name;
    account.demo = req.body.demo;
    account.conversion = req.body.conversion;
    account.sales_rep = req.body.sales_rep;
    account.hauling_contract = req.body.hauling_contract;
    account.hauling_expiration = req.body.hauling_expiration;
    account.status = true;
    account.stage = req.body.stage;

    //Save and check error
    account.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Account Added!",
            data: account
        });
    });
};

// View Account by mongo object id
exports.view = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
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
exports.update = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
        if (err)
            res.send(err);
        account.account_id = req.body.account_id? req.body.account_id: account.account_id;
        account.email = req.body.email;
        account.contact = req.body.contact;
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.group_id = req.body.group_id;
        account.name = req.body.name;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.sales_rep = req.body.sales_rep;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.status = true;
        account.stage = req.body.stage;

        //save and check errors
        account.save(function (err) {
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
exports.delete = function (req, res) {
    Account.deleteOne({
        _id: req.params.account_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Account Deleted'
        });
    });
};

