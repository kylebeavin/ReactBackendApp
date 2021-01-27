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
        invoice.account_id = req.body.account_id;
        invoice.charges = req.body.charges;
        invoice.contact_id = contact_id;
        invoice.group_id = req.body.group_id;
        invoice.invoice_date = req.body.invoice_date;
        invoice.is_active = req.body.is_active;
        invoice.purchase_order = req.body.purchase_order;
        invoice.smash_id = req.body.smash_id;
        invoice.subtotal = req.body.subtotal;
        invoice.tax = req.body.tax;
        invoice.total = req.body.total;
        invoice.type = req.body.type;


        //Save and check error
        let newInvoice = await invoice.save()
        if (newInvoice) {
            res.json({
                status: "success",
                status: 201,
                message: "New invoice created!",
            })
        } else {
            res.json({ status: err.message })
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
            invoice.account_id = req.body.account_id;
            invoice.charges = req.body.charges;
            invoice.contact_id = contact_id;
            invoice.group_id = req.body.group_id;
            invoice.invoice_date = req.body.invoice_date;
            invoice.is_active = req.body.is_active;
            invoice.purchase_order = req.body.purchase_order;
            invoice.smash_id = req.body.smash_id;
            invoice.subtotal = req.body.subtotal;
            invoice.tax = req.body.tax;
            invoice.total = req.body.total;
            invoice.type = req.body.type;
            let updatedInvoice = await invoice.save()
            if (updatedInvoice) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Invoice Updated Successfully",
                    data: updatedInvoice
                })
            } else {
                res.json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.json({ message: 'Invoice not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Invoice by _id
exports.delete = async function (req, res) {
    try {
        let invoice = await Invoice.findOne({ _id: req.body._id }).exec()
        if (invoice) {
            invoice.account_id = invoice.account_id;
            invoice.charges = invoice.charges;
            invoice.contact_id = invoice.contact_id;
            invoice.group_id = invoice.group_id;
            invoice.invoice_date = invoice.invoice_date;
            invoice.is_active = false;
            invoice.purchase_order = invoice.purchase_order;
            invoice.smash_id = invoice.smash_id;
            invoice.subtotal = invoice.subtotal;
            invoice.tax = invoice.tax;
            invoice.total = invoice.total;
            invoice.type = invoice.type;
            if (invoice) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Invoice deactivated Successfully",
                    data: invoice
                })
            }
        } else {
            res.json({ message: 'Invoice not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};