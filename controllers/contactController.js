//Import Contact Model
Contact = require('../models/contactModel.js')

// For queries
exports.view = function(req, res) {
    Contact.find(req.body,
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

//For creating new contact
exports.add = async function(req, res) {
    try {
        var contact = new Contact();
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
        let newContact = await contact.save()
        if (newContact) {
            res.json({
                status: "success",
                status: 201,
                message: "New contact created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update contact by Object id
exports.update = async function(req, res) {
    try {
        let contact = await Contact.findById(req.params._id).exec()
        if (contact) {
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
            let updatedContact = await contact.save()
            if (updatedContact) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Contact Updated Successfully",
                    data: updatedContact
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Contact not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Contact by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteContact = await Contact.deleteOne({ _id: req.params._id }).exec()
        if (deleteContact) {
            res.status(204).json({
                status: "success",
                message: 'Contact successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};