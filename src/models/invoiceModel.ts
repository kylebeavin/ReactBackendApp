import IInvoice from '../interfaces/invoiceInterface'
import mongoose, {Schema} from 'mongoose'

//schema
<<<<<<< HEAD:models/invoiceModel.js
var invoiceSchema = mongoose.Schema({
=======
const  invoiceSchema = new Schema({
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/invoiceModel.ts
    // Customer Document ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    // List of charges
    charges: {
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
    // When document was created in database

    // Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Date the invoice is due
    invoice_date: {
        type: Date,
        required: true,
        trim: true
    },
    // Whether or not the invoice is active
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
    // Work order ID
    smash_id: {
        type: String,
        required: true,
        trim: true
    },
    // Total before tax
    subtotal: {
        type: String,
        required: true,
        trim: true
    },
    // Tax rate for invoice
    tax: {
        type: String,
        required: true,
        trim: true
    },
    // Total cost of invoice
    total: {
        type: String,
        required: true,
        trim: true
    },
    // Recurring / On-Demand
    type: {
        type: [String],
        enum: ['recurring', 'on-demand'],
        required: true
    },
},
{ timestamps: true })
// Export Invoice Model

<<<<<<< HEAD:models/invoiceModel.js
module.exports.get = function (callback, limit) {
    Invoice.find(callback).limit(limit);
}
=======
export default mongoose.model<IInvoice>('Invoice', invoiceSchema)
// module.exports.get = function (callback, limit) {
//     Invoice.find(callback).limit(limit);
// }
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/invoiceModel.ts
