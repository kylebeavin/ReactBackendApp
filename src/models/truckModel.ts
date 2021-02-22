import mongoose, {Schema} from 'mongoose'
import ITruck from '../interfaces/truckInterface'

//schema
const  truckSchema: Schema = new Schema({

    // Vehicle Body Subtype
    body_subtype: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Body Type
    body_type: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Color
    color: {
        type: String,
        required: true,
        trim: true
    },

    // Truck related documents
    documents: {
        type: [String],
        required: true,
        trim: true
    },
    // Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Truck hours operated
    hours: {
        type: String,
        required: true,
        trim: true
    },
    // Allows for truck mark active / inactive
    is_active: {
        type: Boolean,
        default: true
    },
    // License Plate
    license_number: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle MSRP
    msrp: {
        type: String,
        required: true,
        trim: true
    },
    // Truck display name
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Odometer reading history goes here
    odo: {
        type: [String],
        required: true,
        trim: true
    },
    // User ID of user assigned to this vehicle
    operator: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Ownership Status
    ownership: {
        type: String,
        required: true,
        trim: true
    },
    // Truck related pictures
    pictures: {
        type: [String],
        required: true,
        trim: true
    },
    // Corrosponding truck inspection forms
    service_history: {
        type: [String],
        required: true,
        trim: true
    },
    // Whether or not the truck is overdue for service
    service_status: {
        type: [String],
        enum: ['Good', 'Service Required'],
        required: true,
        trim: true
    },
    // Vehicle Trim
    trim: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Registration
    registration: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Make
    vehicle_make: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Model
    vehicle_model: {
        type: String,
        required: true,
        trim: true
    },
    // Type of vehicle
    vehicle_type: {
        type: [String],
        enum: ['Smash Truck', 'Super Hauler 9001', 'Super Mega Smash Machine 9002'],
        required: true,
        trim: true
    },
    // Truck VIN number
    vin: {
        type: String,
        required: true,
        trim: true
    },
    // Vehicle Year
    year: {
        type: String,
        required: true,
        trim: true
    },
},
{ timestamps: true })

// Export Truck Model
export default mongoose.model<ITruck>('Truck', truckSchema)


