//Import Invoice Model
const Invoice = require('../models/invoiceModel.js')

// For queries
exports.view = function(req, res) {
    Invoice.find(req.body, null, {
            sort: {
                group_id: 1
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

//For creating new invoice
exports.add = async function(req, res) {
    try {
        var invoice = new Invoice();
        invoice.group_id = req.body.group_id;
        invoice.account_id = req.body.account_id;
        invoice.contact_id = contact_id;
        invoice.smash_id = req.body.smash_id;
        invoice.invoice_date = req.body.invoice_date;
        invoice.type = req.body.type;
        invoice.charges = req.body.charges;
        invoice.subtotal = req.body.subtotal;
        invoice.tax = req.body.tax;
        invoice.total = req.body.total;
        invoice.created = req.body.created;
        invoice.is_active = req.body.is_active;
        invoice.purchase_order = req.body.purchase_order;


        //Save and check error
        let newInvoice = await invoice.save()
        if (newInvoice) {
            res.json({
                status: "success",
                status: 201,
                message: "New invoice created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update invoice by Object id
exports.update = async function(req, res) {
    try {
        let invoice = await Invoice.findById(req.params._id).exec()
        if (invoice) {
            invoice._id = req.body._id ? req.body._id : invoice._id;
            invoice.group_id = req.body.group_id;
            invoice.account_id = req.body.account_id;
            invoice.contact_id = contact_id;
            invoice.smash_id = req.body.smash_id;
            invoice.invoice_date = req.body.invoice_date;
            invoice.type = req.body.type;
            invoice.charges = req.body.charges;
            invoice.subtotal = req.body.subtotal;
            invoice.tax = req.body.tax;
            invoice.total = req.body.total;
            invoice.is_active = req.body.is_active;
            invoice.purchase_order = req.body.purchase_order;
            let updatedInvoice = await invoice.save()
            if (updatedInvoice) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Invoice Updated Successfully",
                    data: updatedInvoice
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Invoice not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Invoice by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteInvoice = await Invoice.deleteOne({ _id: req.params._id }).exec()
        if (deleteInvoice) {
            res.status(204).json({
                status: "success",
                message: 'Invoice successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};