import IInspection from '../interfaces/inspectionInterface'
import mongoose, {Schema} from 'mongoose'

//schema
const inspectionSchema = new Schema({

    //Franchise ID
    group_id: {
        type: [String],
        required: true,
        trim: true
    },
    // Allows inspection to be void
    is_active: {
        type: Boolean,
        default: true
    },
    // Signed in owner of the inspection
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    // TBD
    type: {
        type: [String],
        enum: ['inspection_type'], // Inspection types will go here.
        required: true
    },
    truck_id:{
        type:String,
        required:true,
        trim:true

    }
},
{ timestamps: true })

// Export Inspection Model
export default mongoose.model<IInspection>('Inspection', inspectionSchema)
// module.exports.get = function (callback, limit) {
//     Inspection.find(callback).limit(limit);
// }