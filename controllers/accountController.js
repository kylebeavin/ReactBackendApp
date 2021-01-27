//accountController.js
//Import Account Model
const Account = require('../models/accountModel.js');

// For queries
exports.view = async function (req, res) {
    Account.find(req.body, null, {
        sort: {
            account_name: 1
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

//For creating new account
exports.add = async function (req, res) {
    try {
        var account = new Account();
        account.account_name = req.body.account_name;
        account.address_city = req.body.address_city != null ? req.body.address_city : null;
        account.address_state = req.body.address_state != null ? req.body.address_state : null;
        account.address_street = req.body.address_street != null ? req.body.address_street : null;
        account.address_zip = req.body.address_zip != null ? req.body.address_zip : null;
        account.contacts = req.body.contacts != null ? req.body.contacts : null;
        account.conversion = req.body.conversion != null ? req.body.conversion : null;
        account.demo = req.body.demo != null ? req.body.demo : null;
        account.email = req.body.email != null ? req.body.email : null;
        account.group_id = req.body.group_id;
        account.hauling_contract = req.body.hauling_contract;
        account.hauling_expiration = req.body.hauling_expiration;
        account.geo_location = req.body.geo_location;
        account.industry = req.body.industry;
        account.is_active = req.body.is_active;
        account.national = req.body.national;
        account.notes = req.body.notes != null ? req.body.notes : null;
        account.owner_id = req.body.owner_id;
        account.owner_name = req.body.owner_name;
        account.referral = req.body.referral;
        account.referral_group_id = req.body.referral_group_id != null ? req.body.referral_group_id : null;
        account.stage = req.body.stage;

        //Save and check error
        let newAccount = await account.save()
        if (newAccount) {
            res.json({
                status: "success",
                status: 201,
                message: "New Account Added!",

            })
        } else {
            res.json({ status: 304, message: 'Failed to create account' })
        }

    } catch (err) {
        res.json({ message: err })
    }

};

// Update Account by Object Id
exports.update = async function (req, res) {
    try {
        let account = await Account.findById(req.params._id).exec()
        if (account) {
            account._id = req.body._id ? req.body._id : account._id;
            account.account_name = req.body.account_name ? req.body.account_name : account.account_name;
            account.address_city = req.body.address_city ? req.body.address_city : account.address_city;
            account.address_state = req.body.address_state ? req.body.address_state : account.address_state;
            account.address_street = req.body.address_street ? req.body.address_street : account.address_street;
            account.address_zip = req.body.address_zip ? req.body.address_zip : account.address_zip;
            account.contacts = req.body.contacts ? req.body.contacts : account.contacts;
            account.conversion = req.body.conversion ? req.body.conversion : account.conversion;
            account.demo = req.body.demo ? req.body.demo : account.demo;
            account.email = req.body.email ? req.body.email : account.email;
            account.geo_location = req.body.geo_location ? req.body.geo_location : account.geo_location;
            account.group_id = req.body.group_id ? req.body.group_id : account.group_id;
            account.hauling_contract = req.body.hauling_contract ? req.body.hauling_contract : account.hauling_contract;
            account.hauling_expiration = req.body.hauling_expiration ? req.body.hauling_expiration : account.hauling_expiration;
            account.industry = req.body.industry ? req.body.industry : account.industry;
            account.is_active = req.body.is_active ? req.body.is_active : account.is_active;
            account.national = req.body.national ? req.body.national : account.national;
            account.notes = req.body.notes ? req.body.notes : account.notes;
            account.owner_id = req.body.owner_id ? req.body.owner_id : account.owner_id;
            account.owner_name = req.body.owner_name ? req.body.owner_name : account.owner_name;
            account.referral = req.body.referral ? req.body.referral : account.referral;
            account.referral_group_id = req.body.referral_group_id ? req.body.referral_group_id : account.referral_group_id;
            account.stage = req.body.stage ? req.body.stage : account.stage;

            let updatedAccount = await account.save()
            if (updatedAccount) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Account Updated Successfully",
                    data: updatedAccount
                })
            } else {
                res.json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.json({ message: 'Account not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Account by _id
exports.delete = async function (req, res) {
    try {
        let account = await Account.findOne({ _id: req.body._id }).exec()
        if (account) {
            account.account_name = account.account_name;
            account.address_city = account.address_city;
            account.address_state = account.address_state;
            account.address_street = account.address_street;
            account.address_zip = account.address_zip;
            account.contacts = account.contacts;
            account.conversion = account.conversion;
            account.demo = account.demo;
            account.email = account.email;
            account.geo_location = account.geo_location;
            account.group_id = account.group_id;
            account.hauling_contract = account.hauling_contract;
            account.hauling_expiration = account.hauling_expiration;
            account.industry = account.industry;
            account.is_active = false;
            account.owner_id = account.owner_id;
            account.owner_name = account.owner_name;
            account.national = account.national;
            account.notes = account.notes;
            account.referral = account.referral;
            account.referral_group_id = account.referral_group_id;
            account.stage = account.stage;

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