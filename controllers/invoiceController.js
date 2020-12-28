//Import Invoice Model
Invoice = require('../models/invoiceModel.js')

//For server
exports.viewAll = function (req, res) {
    Invoice.get(function (err, invoice) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Invoice Successfully!",
            data: invoice       
        });
    });
};

//For creating new invoice
exports.add = function (req, res) {
    var invoice = new Invoice();
    invoice.invoice_id = req.body.invoice_id? req.body.invoice_id: invoice.invoice_id;
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
    invoice.save(function (err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Invoice Added!",
            data: invoice
        });
    });
};

// View Invoice by mongo object id
exports.view = function (req, res) {
    Invoice.findById(req.params.invoice_id, function (err, invoice) {
        if (err)
            console.log('Cannot return invoice');
            res.send(err);
        res.json({
            message: 'Invoice Details',
            data: invoice
        });
    });
};

// Update Invoice
exports.update = function (req, res) {
    Invoice.findById(req.params.invoice_id, function (err, invoice) {
        if (err)
            res.send(err);
        invoice.invoice_id = req.body.invoice_id? req.body.invoice_id: invoice.invoice_id;
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

        //save and check errors
        invoice.save(function (err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Invoice Updated Successfully",
                data: invoice
            });
        });
    });
};

// Delete Invoice
exports.delete = function (req, res) {
    Invoice.deleteOne({
        _id: req.params.invoice_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Invoice Deleted'
        });
    });
};

