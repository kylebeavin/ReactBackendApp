var mongoose = require('mongoose');

//schema
var invoiceSchema = mongoose.Schema({
    // Franchise ID
    group_id: {
        type: String,
        required: true,
        trim: true
    },
    // Customer ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    // Contact for the invoice
    contact_id: {
        type: String,
        required: true,
        trim: true
    },
    // Work order ID
    smash_id: {
        type: String,
        required: true,
        trim: true
    },
    invoice_date: {
        type: Date,
        required: true,
        trim: true
    },
    // Recurring / On-Demand
    type: {
        type: [String],
        enum: ['recurring', 'on-demand'],
        required: true
    },
    charges: {
        type: String,
        required: true,
        trim: true
    },
    subtotal: {
        type: String,
        required: true,
        trim: true
    },
    tax: {
        type: String,
        required: true,
        trim: true
    },
    total: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },
});

// Export Invoice Model
var Invoice = module.exports = mongoose.model('invoice', invoiceSchema);

module.exports.get = function(callback, limit) {
    Invoice.find(callback).limit(limit);
}