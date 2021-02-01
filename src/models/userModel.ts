import IUser from '../interfaces/userInterface'
import mongoose, { Schema} from 'mongoose'

const UserSchema: Schema = new Schema({

    // Timestamp from when the document was created

    // Display name created from given first and last name
    display_name: {
        type: String,
        required: false,
        trim: true
    },
    // Email address of the user
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // First name of the user
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Profile image URL
    image: {
        type: String,
        required: false,
        trim: true
    },
    // Mark user active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // Last name given by the user
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // User's password
    password: {
        type: String,
        required: true,
        trim: true
    },
    // Corporate, Admin, Partner, Driver, Mechanic, Sales, GM
    role: {
        type: [String],
        enum: ['corporate', 'admin', 'partner', 'gm', 'sales', 'driver', 'mechanic'],
        required: true
    },
    // Authentication token assigned to the user
    token: {
        type: String,
        required: false,
        trim: true
    },
},
{ timestamps: true })

// Export User Model
export default mongoose.model('user', UserSchema);

