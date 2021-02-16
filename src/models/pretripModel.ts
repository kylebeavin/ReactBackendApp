import IPreTrip from '../interfaces/pretripInterface'
import mongoose, { Schema} from 'mongoose'

const PreTripSchema : Schema = new Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true,
        trim: true
        // type:Schema.Types.ObjectId,
        // ref:'groups',
        // required:true
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // PreTrip status active/inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // PreTrip stage
    stage: {
        type: String,
        enum: ['prospect', 'lead', 'account'],
        default: 'prospect',
        lower: true
    },
    // Dumpster location coordinates
    geo_location: {
        type: String,
        default: null,
        trim: true
    },
    address_street: {
        type: String,
        default: null,
        trim: true
    },
    address_city: {
        type: String,
        default: null,
        trim: true
    },
    address_state: {
        type: String,
        default: null,
        trim: true
    },
    address_zip: {
        type: String,
        default: null,
        trim: true
    },
    // Generic account domain
    email: {
        type: String,
        default: null,
        trim: true
    },
    // // When the document was created
    // created: {
    //     type: Date,
    //     default: Date.now
    // },
    // Date for the demo smash
    demo: {
        type: Date,
        default: null
    },
    // When lead becomes account
    conversion: {
        type: Date,
        default: null
    },
    // Hauling contract status
    hauling_contract: {
        type: Boolean,
        default: false
    },
    // Hauling contract expiration date
    hauling_expiration: {
        type: Date,
        default: null
    },
    national: {
        type: Boolean,
        default: false
    },
    referral: {
        type: Boolean,
        default: false
    },
    referral_group_id: {
        type: String,
        default: null,
        trim: true
    },
    notes: {
        type: String,
        default: null,
        trim: true
    },
}, 
{
    timestamps:true
}
)

export default mongoose.model<IPreTrip>('PreTrip', PreTripSchema)