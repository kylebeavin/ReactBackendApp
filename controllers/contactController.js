//Import Contact Model
Contact = require('../models/contactModel.js')

exports.server = function(req, res) {
    Contact.get(function(err, contact) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Contacts Successfully!",
            data: contact
        });
    });
};

//For creating new contact
exports.add = function(req, res) {
    var contact = new Contact();
    contact.contact_id = req.body.contact_id ? req.body.contact_id : contact.contact_id;
    contact.account_id = req.body.account_id;
    contact.owner_id = req.body.owner_id;
    contact.first_name = req.body.first_name;
    contact.last_name = req.body.last_name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.type = req.body.type;
    contact.method = req.body.method;
    contact.status = true;

    //Save and check error
    contact.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Contact Added!",
            data: contact
        });
    });
};

// View Contact by mongo object id
exports.view = function(req, res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
            res.send(err);
        else res.json({
            message: 'Contact Details',
            data: contact
        });
    });
};

// View Contacts by account id
exports.viewContactsByAccountId = function(req, res) {
    Contact.find({ account_id: req.params.account_id }, function(err, contact) {
        if (err)
            res.send(err);
        else res.json({
            message: 'All contacts by associated account',
            data: contact
        });
    });
};

// Update Contact
exports.update = function(req, res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
            res.send(err);
        contact.contact_id = req.body.contact_id ? req.body.contact_id : contact.contact_id;
        contact.account_id = req.body.account_id;
        contact.account_id = req.body.account_id;
        contact.first_name = req.body.first_name;
        contact.last_name = req.body.last_name;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.type = req.body.type;
        contact.method = req.body.method;
        contact.status = true;

        //save and check errors
        contact.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Contact Updated Successfully",
                data: contact
            });
        });
    });
};

// Delete Contact
exports.delete = function(req, res) {
    Contact.deleteOne({
        _id: req.params.contact_id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Contact Deleted'
        });
    });
};