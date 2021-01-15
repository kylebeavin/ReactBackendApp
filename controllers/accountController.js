//accountController.js

//Import Account Model
Account = require('../models/accountModel.js')

// For queries
exports.view = function(req, res) {
    Account.find(req.body, null, {
            sort: {
                name: 1
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

//For creating new account
exports.add = async function(req, res) {
    try {
        var account = new Account();
        account.group_id = req.body.group_id; // String, required
        account.account_name = req.body.account_name; // String, required
        account.owner_id = req.body.owner_id; // String, required
        account.contacts = req.body.contacts; // Array, required
        account.is_active = req.body.is_active; // Bool, required
        account.stage = req.body.stage; // String, required
        account.address_street = req.body.address_street; // String, required
        account.address_city = req.body.address_city; // String, required
        account.address_state = req.body.address_state; // String, required
        account.address_zip = req.body.address_zip; // String, required
        account.email = req.body.email; // String, required
        account.demo = req.body.demo; // Date, required
        account.conversion = req.body.conversion; // Date, required
        account.hauling_contract = req.body.hauling_contract; // Bool, required
        account.hauling_expiration = req.body.hauling_expiration; // Date, required
        account.notes = req.body.notes; // String, required
        account.national = req.body.national; // Bool, required
        account.referral = req.body.referral; // Bool, required
        account.referral_group_id = req.body.referral_group_id; // String, required

        //Save and check error
        let newAccount = await account.save()
        if (newAccount) {
            res.json({
                status: "success",
                status: 201,
                message: "New Account Added!",

            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// Update Account by Object Id
exports.update = async function(req, res) {
    try {
        let account = await Account.findById(req.params._id).exec()

        if (account) {
            account._id = req.body._id ? req.body._id : account._id;
            account.group_id = req.body.group_id; // String, required
            account.account_name = req.body.account_name; // String, required
            account.owner_id = req.body.owner_id; // String, required
            account.contacts = req.body.contacts; // Array, required
            account.is_active = req.body.is_active; // Bool, required
            account.stage = req.body.stage; // String, required
            account.address_street = req.body.address_street; // String, required
            account.address_city = req.body.address_city; // String, required
            account.address_state = req.body.address_state; // String, required
            account.address_zip = req.body.address_zip; // String, required
            account.email = req.body.email; // String, required
            account.demo = req.body.demo; // Date, required
            account.conversion = req.body.conversion; // Date, required
            account.hauling_contract = req.body.hauling_contract; // Bool, required
            account.hauling_expiration = req.body.hauling_expiration; // Date, required
            account.notes = req.body.notes; // String, required
            account.national = req.body.national; // Bool, required
            account.referral = req.body.referral; // Bool, required
            account.referral_group_id = req.body.referral_group_id; // String, required
            let updatedAccount = await account.save()
            if (updatedAccount) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Account Updated Successfully",
                    data: updatedAccount
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Account not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Account by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteAccount = Account.deleteOne({ _id: req.params._id }).exec()
        if (deleteAccount) {
            res.status(204).json({ message: 'Account successfully deleted' })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};