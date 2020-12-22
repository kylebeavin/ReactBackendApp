var mongoose = require('mongoose');

//schema
var invoiceSchema = mongoose.Schema({
    // Will be replaced by document ID
    invoice_id: {
        type: String,
        required: true
    },
    // Franchise ID
    group_id: {
        type: String,
        required: true
    },
    // Customer ID
    account_id: {
        type: String,
        required: true
    },
    // Contact for the invoice
    contact_id: {
        type: String,
        required: true
    },
    // Work order ID
    smash_id: {
        type: String,
        required: true
    },
    invoice_date: {
        type: Date,
        default: Date.now
    },
    // Recurring / On-Demand
    type: {
        type: String,
        required: true
    },
    charges: {
        type: String,
        required: true
    },
    subtotal: {
        type: String,
        required: true
    },
    tax: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    created_at: {
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
        required: true
    },
});

// Export Invoice Model
var Invoice = module.exports = mongoose.model('invoice', invoiceSchema);

module.exports.get = function (callback, limit) {
   Invoice.find(callback).limit(limit); 
}