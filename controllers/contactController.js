//Import Contact Model
Contact = require('../models/contactModel.js')

exports.server = function (req, res) {
    Contact.get(function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204,
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            status: "success",
            status: 200,
            message: "Got Contacts Successfully!",
            data: contact
        });
    });
};

//For creating new contact
exports.add = function (req, res) {
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
    contact.is_active = req.body.is_active;

    //Save and check error
    contact.save(function (err) {
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

// View Contact by mongo object id
exports.view = function (req, res) {
    Contact.findOne({ _id: req.params.contact_id }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Contact Details',
            data: contact
        });
    });
};

// View Contacts by account id
exports.viewContactsByAccountId = function (req, res) {
    Contact.find({ account_id: req.params.account_id }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'All contacts by associated account',
            data: contact
        });
    });
};

// View Contacts by Owner id
exports.viewContactsByOwnerId = function (req, res) {
    Contact.find({ owner_id: req.params.owner_id }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'All contacts by associated owner',
            data: contact
        });
    });
};

// View Contacts by First Name
exports.viewContactsByFirstName = function (req, res) {
    Contact.find({ first_name: req.params.first_name }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'All contacts by first name',
            data: contact
        });
    });
};

// View Contacts by First Name
exports.viewContactsByLaseName = function (req, res) {
    Contact.find({ last_name: req.params.last_name }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'All contacts by last name',
            data: contact
        });
    });
};

// View Contacts by First Name
exports.viewContactsByEmail = function (req, res) {
    Contact.find({ email: req.params.email }, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'All contacts by email',
            data: contact
        });
    });
};

// Update Contact
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        contact.contact_id = req.body.contact_id ? req.body.contact_id : contact.contact_id;
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
        contact.save(function (err) {
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
exports.delete = function (req, res) {
    Contact.deleteOne({
        _id: req.params.contact_id
    }, function (err, contact) {
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