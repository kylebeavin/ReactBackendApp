import IMeeting from '../interfaces/meetingInterface'
import mongoose, {Schema} from 'mongoose'

//schema
<<<<<<< HEAD:models/meetingModel.js
var meetingSchema = mongoose.Schema({
=======
const MeetingSchema: Schema = new Schema({
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/meetingModel.ts

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
export default mongoose.model<IMeeting>('Meeting', MeetingSchema)

<<<<<<< HEAD:models/meetingModel.js
module.exports.get = function (callback, limit) {
    Meeting.find(callback).limit(limit);
}
=======
// module.exports.get = function (callback, limit) {
//     Meeting.find(callback).limit(limit);
// }
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/meetingModel.ts
