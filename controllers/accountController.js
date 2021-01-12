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
        account.name = req.body.name; // String, required
        account.owner_id = req.body.owner_id; // String, required
        account.is_active = req.body.is_active; // Bool, default: true
        account.stage = req.body.stage; // String, required
        account.address_street = req.body.address_street; // String, required
        account.address_city = req.body.address_city; // String, required
        account.address_state = req.body.address_state; // String, required
        account.address_zip = req.body.address_zip; // String, required
        account.email = req.body.email; // String, required
        account.demo = req.body.demo != null ? req.body.demo : null;
        account.conversion = req.body.conversion != null ? req.body.conversion : null;
        account.hauling_contract = req.body.hauling_contract != null ? req.body.hauling_contract : null;
        account.hauling_expiration = req.body.hauling_expiration != null ? req.body.hauling_expiration : null;
        account.notes = req.body.notes != null ? req.body.notes : null;
        account.national = req.body.national != null ? req.body.national : null;
        account.referral = req.body.referral != null ? req.body.referral : null;
        account.referral_group_id = req.body.referral_group_id != null ? req.body.referral_group_id : null;

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
        let accountToUpdate = await Account.findById(req.params._id).exec()

        if (orderToUpdate) {
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
            account.national = req.body.national;
            account.referral = req.body.referral;
            account.referral_group_id = req.body.referral_group_id;
            let updatedAccount = await accountToUpdate.save()
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