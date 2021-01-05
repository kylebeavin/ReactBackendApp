var mongoose = require('mongoose');

//schema
var invoiceSchema = mongoose.Schema({
    // Will be replaced by document ID
    invoice_id: {
        type: String,
        required: false
    },
    // Franchise ID
    group_id: {
        type: String,
        required: false
    },
    // Customer ID
    account_id: {
        type: String,
        required: false
    },
    // Contact for the invoice
    contact_id: {
        type: String,
        required: false
    },
    // Work order ID
    smash_id: {
        type: String,
        required: false
    },
    invoice_date: {
        type: Date,
        default: Date.now
    },
    // Recurring / On-Demand
    type: {
        type: String,
        required: false
    },
    charges: {
        type: String,
        required: false
    },
    subtotal: {
        type: String,
        required: false
    },
    tax: {
        type: String,
        required: false
    },
    total: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    },
    // Purchase order number TBD
    purchase_order: {
        type: String,
        required: false
    },
});

// Export Invoice Model
var Invoice = module.exports = mongoose.model('invoice', invoiceSchema);

module.exports.get = function(callback, limit) {
    Invoice.find(callback).limit(limit);
}