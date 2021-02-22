import IContact from '../interfaces/contactInterface'
import mongoose, { Schema} from 'mongoose'

//schema
var contactSchema = new Schema({
    // Customer account id
    account_id: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    // Whether or not the contact is active
    is_active: {
        type: Boolean,
        default: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // Communication method (email/sms)
    method: {
        type: [String],
        enum: ['email', 'sms'],
        required: true
    },
    // User who created the contact
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Role of the contact (billing,smashing,hauling,all)
    type: {
        type: [String],
        enum: ['bill', 'smash', 'haul'],
        required: true
    },
},
{ timestamps: true })

// Export Contact Model
export default mongoose.model<IContact>('Contact', contactSchema)

<<<<<<< HEAD:models/contactModel.js
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
=======
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/contactModel.ts
