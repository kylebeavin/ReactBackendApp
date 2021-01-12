//accountController.js
//Import Account Model
Account = require('../models/accountModel.js')

// For queries
exports.view = function(req, res) {
    Order.find(req.body, null, {
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

//For creating new order
exports.add = async function(req, res) {
    try{
    const order = new Order();
    order.account_id = req.body.account_id; // String, required
    order.group_id = req.body.group_id; // String, required
    order.is_recurring = req.body.is_recurring; // String, required
    order.service_date = req.body.service_date; // Bool, default: true
    order.created = req.body.created; // String, required
    order.is_active = req.body.is_active; // String, required
    

    //Save and check error
    let newOrder = await order.save()
    if(newOrder){
        res.json({status: "success",
        status: 201,
        message: "New order created!",
         })
    }
    else{
        res.status(304).json({status:'something went wrong'})
    }

    }
    catch(err){
        res.json({message:err.message})
    }
    
};

// Update order by Object id
exports.update = async function(req, res) {
    try{
        let orderToUpdate = await Order.findById(req.params._id).exec()
        if(orderToUpdate){
            orderToUpdate.account_id = req.body.account_id
            orderToUpdate.group_id = req.body.group_id
            orderToUpdate.is_recurring = req.body.is_recurring
        }
    }
    Order.findById(req.params._id, function(err, account) {
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
        account.national = req.body.national;
        account.referral = req.body.referral;
        account.referral_group_id = req.body.referral_group_id;
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