//Import Contact Model
const Contact = require('../models/contactModel.js')

// For queries
exports.view = function (req, res) {
    Contact.find(req.body,
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

//For creating new contact
exports.add = async function (req, res) {
    try {
        var contact = new Contact();
        contact.account_id = req.body.account_id;
        contact.email = req.body.email;
        contact.first_name = req.body.first_name;
        contact.is_active = req.body.is_active;
        contact.last_name = req.body.last_name;
        contact.method = req.body.method;
        contact.owner_id = req.body.owner_id;
        contact.phone = req.body.phone;
        contact.type = req.body.type;


        //Save and check error
        let newContact = await contact.save()
        if (newContact) {
            res.json({
                status: "success",
                status: 201,
                message: "New contact created!",
            })
        } else {
            res.json({ status: 'Failed to create contact' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update contact by Object id
exports.update = async function (req, res) {
    try {
        let contact = await Contact.findById(req.params._id).exec()
        if (contact) {
            contact._id = req.body._id ? req.body._id : contact._id;
            contact.account_id = req.body.account_id ? req.body.account_id : contact.account_id;
            contact.email = req.body.email ? req.body.email : contact.email;
            contact.first_name = req.body.first_name ? req.body.first_name : contact.first_name;
            contact.is_active = req.body.is_active ? req.body.is_active : contact.is_active;
            contact.last_name = req.body.last_name ? req.body.last_name : contact.last_name;
            contact.method = req.body.method ? req.body.method : contact.method;
            contact.owner_id = req.body.owner_id ? req.body.owner_id : contact.owner_id;
            contact.phone = req.body.phone ? req.body.phone : contact.phone;
            contact.type = req.body.type ? req.body.type : contact.type;
            let updatedContact = await contact.save()
            if (updatedContact) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Contact Updated Successfully",
                    data: updatedContact
                })
            } else {
                res.json({ message: 'Failed to update contact', status: 400 })
            }
        } else {
            res.json({ message: 'Contact not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};



// Delete Account by _id
exports.delete = async function (req, res) {
    try {
        let contact = await Contact.findOne({ _id: req.body._id }).exec()
        if (contact) {
            contact.account_id = req.body.account_id;
            contact.email = req.body.email;
            contact.first_name = req.body.first_name;
            contact.is_active = false
            contact.group_id = contact.group_id;
            contact.last_name = req.body.last_name;
            contact.method = req.body.method;
            contact.owner_id = req.body.owner_id;
            contact.phone = req.body.phone;
            contact.type = req.body.type;
            if (contact) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Contact deactivated Successfully",
                    data: account
                })
            }
        } else {
            res.json({ message: 'Contact not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};