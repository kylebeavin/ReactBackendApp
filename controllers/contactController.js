//Import Contact Model
Contact = require('../models/contactModel.js')

//For creating new contact
exports.add = function(req, res) {
    var contact = new Contact();
    contact._id = req.body._id ? req.body._id : contact._id;
    contact.account_id = req.body.account_id;
    contact.owner_id = req.body.owner_id;
    contact.first_name = req.body.first_name;
    contact.last_name = req.body.last_name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.type = req.body.type;
    contact.method = req.body.method;
    contact.is_active = req.body.is_active;

    //Save and check error
    contact.save(function(err) {
        if (err)
            res.json({
                status: "error",
                status: 304,
                message: err
            });

        else res.json({
            status: "success",
            status: 201,
            message: "New Contact Added!",
            data: contact
        });
    });
};

// Update Contact
exports.update = function(req, res) {
    Contact.findById(req.params._id, function(err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        contact._id = req.body._id ? req.body._id : contact._id;
        contact.account_id = req.body.account_id;
        contact.owner_id = req.body.owner_id;
        contact.first_name = req.body.first_name;
        contact.last_name = req.body.last_name;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.type = req.body.type;
        contact.method = req.body.method;
        contact.is_active = req.body.is_active;

        //save and check errors
        contact.save(function(err) {
            if (err)
                res.json({
                    status: "error",
                    status: 204, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "Contact Updated Successfully",
                data: contact
            });
        });
    });
};

// Delete Contact
exports.delete = function(req, res) {
    Contact.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            status: "success",
            message: 'Contact Deleted'
        });
    });
};