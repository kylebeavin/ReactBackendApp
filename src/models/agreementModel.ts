//agreementModel.js

import IAgreement from '../interfaces/agreementInterface'
import mongoose, {Schema} from 'mongoose'

//schema
<<<<<<< HEAD:models/agreementModel.js
var agreementSchema = mongoose.Schema({
=======
const  agreementSchema:Schema = new Schema({
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/agreementModel.ts

    // Customer account the agreement belongs to
    account_id: {
        type: String,
        required: true,
        trim: true
       
    },
    // Date created

    // Demand Rate
    demand_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Service end date
    end_date: {
        type: Date,
        required: true
    },
    // Franchise
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Whether or not agreement is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Recurring services
    is_recurring: {
        type: Boolean,
        required: true
    },
    // Monthly payment
    monthly_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Notes / Additional terms
    notes: {
        type: [String],
        default: null,
        trim: true
    },
    // owner id
    owner_id: {
        type: String,
        required: true,
        trim: true
    },

    // Service constraints
    services: {
        type: [String],
        enum: ['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ],
        required: true
    },
    // Service days
    service_days: {
        type: [String],
        enum: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        required: true,
        trim: true
    },
    // Service frequency
    service_frequency: {
        type: String,
        required: true,
        trim: true
    },
    // Service per
    service_per: {
        type: [String],
        enum: ['day', 'week', 'month'],
        required: true
    },
    // Service start date
    start_date: {
        type: Date,
        required: true
    },
    // Payment Date Example: Net 0 Days
    term_date: {
        type: String,
        required: true,
        trim: true
    },
    // Terms and conditions file upload url
    url: {
        type: String,
        default: null,
        trim: true
    },
},
{ timestamps: true })

// Export Agreement Model
export default  mongoose.model<IAgreement>('agreement', agreementSchema);

<<<<<<< HEAD:models/agreementModel.js
module.exports.get = function (callback, limit) {
    Agreement.find(callback).limit(limit);
}
=======
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/agreementModel.ts
