import IMeeting from '../interfaces/meetingInterface'
import mongoose, {Schema} from 'mongoose'

//schema
var meetingSchema = new mongoose.Schema({

    // Customer ID
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    // Address City
    address_city: {
        type: String,
        required: true,
        trim: true
    },
    // Address State
    address_state: {
        type: String,
        required: true,
        trim: true
    },
    // Address Street
    address_street: {
        type: String,
        required: true,
        trim: true
    },
    // Address Zip
    address_zip: {
        type: String,
        required: true,
        trim: true
    },
    // Document ID of the contact being met
    contact_id: {
        type: String,
        required: true,
        trim: true
    },
    // Date the meeting was created

    // Franchise this belongs to
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Marks meeting active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Meeting date and time
    meeting_time: {
        type: Date,
        required: true
    },
    // Document ID of the signed in user
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // Name of the meeting place Example: Starbucks
    title: {
        type: String,
        required: true,
        trim: true
    },
},
{ timestamps: true })

// Export Meeting Model
export default mongoose.model<IMeeting>('Meeting', meetingSchema)
