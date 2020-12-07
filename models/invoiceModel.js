var mongoose = require('mongoose');

//schema
var invoiceSchema = mongoose.Schema({
  
    invoice_id: {
        type: String,
        required: true
    },
    group_id: {
        type: String,
        required: true
    },
    account_id: {
        type: String,
        required: true
    },
    contact_id: {
        type: String,
        required: true
    },
    smash_id: {
        type: String,
        required: true
    },
    invoice_date: {
        type: Date,
        default: Date.now
    },
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
    status: {
        type: Boolean,
        default: true
    },
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