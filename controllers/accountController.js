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
            res.send(err);
        res.json({
            message: 'Account Details by Object Id',
            data: account
        });
    });
};

// View Accounts by group
exports.viewAccountByGroup = function(req, res) {
    Account.find({ group_id: req.params.group_id }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by group',
            data: account
        });
    });
};

// View Account by name TODO: Fix this
exports.viewAccountByName = function(req, res) {
    Account.find({ name: req.params.name }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by name',
            data: account
        });
    });
};

// View Accounts by owner Id
exports.viewAccountByOwnerId = function(req, res) {
    Account.find({ owner_id: req.params.owner_id }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts associated with owner id',
            data: account
        });
    });
};

// View Accounts by is_activate status
exports.viewAccountByIsActive = function(req, res) {
    Account.find({ is_active: req.params.is_active }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by active status',
            data: account
        });
    });
};

// View Accounts by sales stage
exports.viewAccountByStage = function(req, res) {
    Account.find({ stage: req.params.stage }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by sales stage',
            data: account
        });
    });
};

// View Accounts by street
exports.viewAccountByStreet = function(req, res) {
    Account.find({ addressStreet: req.params.addressStreet }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Street',
            data: account
        });
    });
};

// View Accounts by City
exports.viewAccountByCity = function(req, res) {
    Account.find({ addressCity: req.params.addressCity }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by City',
            data: account
        });
    });
};

// View Accounts by State
exports.viewAccountByState = function(req, res) {
    Account.find({ addressState: req.params.addressState }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by State',
            data: account
        });
    });
};

// View Accounts by Zip
exports.viewAccountByZip = function(req, res) {
    Account.find({ addressZip: req.params.addressZip }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Zip',
            data: account
        });
    });
};

// View Accounts by Email
exports.viewAccountByEmail = function(req, res) {
    Account.find({ email: req.params.email }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Email',
            data: account
        });
    });
};

// View Accounts by Creation Date
exports.viewAccountByCreation = function(req, res) {
    Account.find({ created: req.params.created }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Creation Date',
            data: account
        });
    });
};


// View Accounts by Demo Date
exports.viewAccountByDemoDate = function(req, res) {
    Account.find({ demo: req.params.demo }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Demo Date',
            data: account
        });
    });
};

// View Accounts by Conversion Date
exports.viewAccountByConversionDate = function(req, res) {
    Account.find({ conversion: req.params.conversion }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Conversion Date',
            data: account
        });
    });
};

// View Accounts by Hauling Contract Status
exports.viewAccountByHaulingContract = function(req, res) {
    Account.find({ hauling_contract: req.params.hauling_contract }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Hauling Status',
            data: account
        });
    });
};

// View Accounts by Hauling Contract Expiration Date
exports.viewAccountByHaulingExpiration = function(req, res) {
    Account.find({ hauling_expiration: req.params.hauling_expiration }, function(err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got accounts by Hauling Contract Expiration Date',
            data: account
        });
    });
};

// Update Account
exports.update = function(req, res) {
    Account.findById(req.params._id, function(err, account) {
        if (err)
            res.send(err);
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