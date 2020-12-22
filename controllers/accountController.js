//accountController.js
//Import Account Model
Account = require('../models/accountModel.js')

// Account Fields


//For server
exports.server = function (req, res) {
    Account.get(function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204,
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: "Got Account Successfully!",
            data: account
        });
    });
};

//For creating new account
exports.add = function (req, res) {
    var account = new Account();
    account.group_id = req.body.group_id; // String, required
    account.name = req.body.name; // String, required
    account.owner_id = req.body.owner_id; // String, required
    account.is_active = req.body.is_active; // Bool, default: true
    account.stage = req.body.stage; // String, required
    account.addressStreet = req.body.addressStreet; // String, required
    account.addressCity = req.body.addressCity; // String, required
    account.addressState = req.body.addressState; // String, required
    account.addressZip = req.body.addressZip; // String, required
    account.email = req.body.email; // String, required
    account.demo = req.body.demo; // Date, not required 
    account.conversion = req.body.conversion; // Date, not required 
    account.hauling_contract = req.body.hauling_contract; // Bool, not required 
    account.hauling_expiration = req.body.hauling_expiration; // Date, not required 
    account.notes = req.body.notes; // String, not required

    //Save and check error
    account.save(function (err) {
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

// View Account by mongo object id
exports.viewAccountById = function (req, res) {
    Account.findById(req.params._id, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Account Details by Object Id',
            data: account
        });
    });
};

// View Accounts by group
exports.viewAccountByGroup = function (req, res) {
    Account.find({ group_id: req.params.group_id }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by group',
            data: account
        });
    });
};

// View Account by name
exports.viewAccountByName = function (req, res) {
    Account.find({ name: req.params.name }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by name',
            data: account
        });
    });
};

// View Accounts by owner Id
exports.viewAccountByOwnerId = function (req, res) {
    Account.find({ owner_id: req.params.owner_id }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts associated with owner id',
            data: account
        });
    });
};

// View Accounts by is_activate status
exports.viewAccountByIsActive = function (req, res) {
    Account.find({ is_active: req.params.is_active }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by active status',
            data: account
        });
    });
};

// View Accounts by sales stage
exports.viewAccountByStage = function (req, res) {
    Account.find({ stage: req.params.stage }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by sales stage',
            data: account
        });
    });
};

// View Accounts by street
exports.viewAccountByStreet = function (req, res) {
    Account.find({ addressStreet: req.params.addressStreet }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Street',
            data: account
        });
    });
};

// View Accounts by City
exports.viewAccountByCity = function (req, res) {
    Account.find({ addressCity: req.params.addressCity }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by City',
            data: account
        });
    });
};

// View Accounts by State
exports.viewAccountByState = function (req, res) {
    Account.find({ addressState: req.params.addressState }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by State',
            data: account
        });
    });
};

// View Accounts by Zip
exports.viewAccountByZip = function (req, res) {
    Account.find({ addressZip: req.params.addressZip }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Zip',
            data: account
        });
    });
};

// View Accounts by Email
exports.viewAccountByEmail = function (req, res) {
    Account.find({ email: req.params.email }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Email',
            data: account
        });
    });
};

// View Accounts by Creation Date
exports.viewAccountByCreation = function (req, res) {
    Account.find({ created: req.params.created }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Creation Date',
            data: account
        });
    });
};


// View Accounts by Demo Date
exports.viewAccountByDemoDate = function (req, res) {
    Account.find({ demo: req.params.demo }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Demo Date',
            data: account
        });
    });
};

// View Accounts by Conversion Date
exports.viewAccountByConversionDate = function (req, res) {
    Account.find({ conversion: req.params.conversion }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Conversion Date',
            data: account
        });
    });
};

// View Accounts by Hauling Contract Status
exports.viewAccountByHaulingContract = function (req, res) {
    Account.find({ hauling_contract: req.params.hauling_contract }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Hauling Status',
            data: account
        });
    });
};

// View Accounts by Hauling Contract Expiration Date
exports.viewAccountByHaulingExpiration = function (req, res) {
    Account.find({ hauling_expiration: req.params.hauling_expiration }, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got accounts by Hauling Contract Expiration Date',
            data: account
        });
    });
};

// Update Account by Object Id
exports.updateAccountById = function (req, res) {
    Account.findById(req.params._id, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
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

// Update Account
exports.updateAccountByGroup = function (req, res) {
    Account.find(req.params.group_id, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in Group Updated Successfully",
                data: account
            });
        });
    });
};
// Update Account by name
exports.updateAccountByName = function (req, res) {
    Account.find(req.params.name, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
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
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "Accounts Updated Successfully by Name",
                data: account
            });
        });
    });
};

// Update all Accounts by Owner Id
exports.updateAccountByOwnerId = function (req, res) {
    Account.find(req.params.owner_id, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts for User Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Is Active Status
exports.updateAccountByIsActive = function (req, res) {
    Account.find(req.params.is_active, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts for Status Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Stage
exports.updateAccountByStage = function (req, res) {
    Account.find(req.params.stage, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in Stage Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Street
exports.updateAccountByStreet = function (req, res) {
    Account.find(req.params.addressStreet, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts on Street Address Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by City
exports.updateAccountByCity = function (req, res) {
    Account.find(req.params.addressCity, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in City Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by City
exports.updateAccountByCity = function (req, res) {
    Account.find(req.params.addressCity, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in City Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by State
exports.updateAccountByState = function (req, res) {
    Account.find(req.params.addressState, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in State Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Zip
exports.updateAccountByZip = function (req, res) {
    Account.find(req.params.addressZip, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts in Zip Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Email
exports.updateAccountByEmail = function (req, res) {
    Account.find(req.params.addressEmail, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts by Email Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Creation
exports.updateAccountByCreation = function (req, res) {
    Account.find(req.params.created, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts by Creation Date Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Demo Date
exports.updateAccountByDemoDate = function (req, res) {
    Account.find(req.params.demo, function (err, account) {
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
        account.addressStreet = req.body.addressStreet;
        account.addressCity = req.body.addressCity;
        account.addressState = req.body.addressState;
        account.addressZip = req.body.addressZip;
        account.email = req.body.email;
        account.demo = req.body.demo;
        account.conversion = req.body.conversion;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "All Accounts by Demo Date Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Conversion Date
exports.updateAccountByConversionDate = function (req, res) {
    Account.find(req.params.conversion, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
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
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 204, // 
                    message: err
                });
            else res.json({
                message: "All Accounts by Conversion Date Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Hauling Contract Status
exports.updateAccountByHaulingContract = function (req, res) {
    Account.find(req.params.hauling_contract, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
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
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 204, // 
                    message: err
                });
            else res.json({
                message: "All Accounts with Hauling Contract Updated Successfully",
                data: account
            });
        });
    });
};

// Update all Accounts by Hauling Expiration Status
exports.updateAccountByHaulingExpiration = function (req, res) {
    Account.find(req.params.hauling_expiration, function (err, account) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
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
        account.notes = req.body.hauling_expiration;
        //save and check errors
        account.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 204, // 
                    message: err
                });
            else res.json({
                message: "All Accounts by Hauling Expiration Updated Successfully",
                data: account
            });
        });
    });
};

// Delete Account by Object Id
exports.deleteAccountById = function (req, res) {
    Account.deleteOne({
        _id: req.params._id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Object Id'
        });
    });
};

// Delete Account by Group Id
exports.deleteAccountByGroup = function (req, res) {
    Account.delete({
        group_id: req.params.group_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Group Id'
        });
    });
};

// Delete Account by Name
exports.deleteAccountByName = function (req, res) {
    Account.delete({
        name: req.params.name
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Account Name'
        });
    });
};

// Delete Account by Owner_Id
exports.deleteAccountByOwnerId = function (req, res) {
    Account.delete({
        owner_id: req.params.owner_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Owner Id'
        });
    });
};

// Delete Account by Is Active Status
exports.deleteAccountByIsActive = function (req, res) {
    Account.delete({
        is_active: req.params.is_active
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Status'
        });
    });
};

// Delete Account by Stage
exports.deleteAccountByStage = function (req, res) {
    Account.delete({
        stage: req.params.stage
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Stage'
        });
    });
};

// Delete Account by Street
exports.deleteAccountByStreet = function (req, res) {
    Account.delete({
        addressStreet: req.params.addressStreet
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Street Address'
        });
    });
};

// Delete Account by City
exports.deleteAccountByCity = function (req, res) {
    Account.delete({
        addressCity: req.params.addressCity
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by City'
        });
    });
};

// Delete Account by State
exports.deleteAccountByState = function (req, res) {
    Account.delete({
        addressState: req.params.addressState
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by State'
        });
    });
};

// Delete Account by Zip
exports.deleteAccountByZip = function (req, res) {
    Account.delete({
        addressZip: req.params.addressZip
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Zip'
        });
    });
};

// Delete Account by Email
exports.deleteAccountByEmail = function (req, res) {
    Account.delete({
        email: req.params.email
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Email'
        });
    });
};

// Delete Account by Creation Date
exports.deleteAccountByCreation = function (req, res) {
    Account.delete({
        created: req.params.created
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Creation'
        });
    });
};

// Delete Account by Demo Date
exports.deleteAccountByDemoDate = function (req, res) {
    Account.delete({
        demo: req.params.demo
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Demo Date'
        });
    });
};

// Delete Account by Conversion Date
exports.deleteAccountByConversionDate = function (req, res) {
    Account.delete({
        conversion: req.params.conversion
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Conversion Date'
        });
    });
};

// Delete Account by Hauling Contract Status
exports.deleteAccountByContractStatus = function (req, res) {
    Account.delete({
        hauling_contract: req.params.hauling_contract
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Contract Status'
        });
    });
};

// Delete Account by Hauling Expiration Status
exports.deleteAccountByHaulingExpiration = function (req, res) {
    Account.delete({
        hauling_expiration: req.params.hauling_expiration
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Account Deleted by Hauling Expiration Status'
        });
    });
};