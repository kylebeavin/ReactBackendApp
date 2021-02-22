import IGroup from '../interfaces/groupInterface'
import mongoose, {Schema} from 'mongoose'

//schema
<<<<<<< HEAD:models/groupModel.js
var groupSchema = mongoose.Schema({
=======
const  groupSchema = new Schema({
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts

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
<<<<<<< HEAD:models/groupModel.js
    // Document Creation Date
    created: {
        type: Date,
        default: Date.now,
        trim: true
    },
    // Doing Business As Name
    dba: {
=======
  
    // Doing Business As Name
    dba: {
        type: String,
        required: true,
        trim: true
    },
    // Federal Tax ID
    ein: {
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts
        type: String,
        required: true,
        trim: true
    },
    // Franchise group email
    email: {
        type: String,
        required: true,
        trim: true
    },
<<<<<<< HEAD:models/groupModel.js
    // Franchise group email
    email: {
=======
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Franchise Launch Date
    launch_date: {
        type: Date,
        required: true
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Name
    name: {
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts
        type: String,
        required: true,
        trim: true
    },
<<<<<<< HEAD:models/groupModel.js
    // Whether or not franchise is active
    is_active: {
        type: Boolean,
        default: true
    },
    // Franchise Launch Date
    launch_date: {
        type: Date,
        required: true
    },
    // Actual LLC
    legal_company: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Name
    name: {
        type: String,
        required: true,
        trim: true
    },
=======
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts
    // Franchise Phone Number
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Region
    region: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Signing Date
    signing_date: {
        type: Date,
        required: true
    },
    // State tax percentage for pricing
    tax_rate: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Zip Codes
    territory_zips: {
        type: [String],
        required: true,
        trim: true
    },
    // Franchise Time Zone
    time_zone: {
        type: String,
        required: true,
        trim: true
    },
    // Franchise Website
    webpage: {
        type: String,
        required: true,
        trim: true
    },
<<<<<<< HEAD:models/groupModel.js

},
{ timestamps: true })
=======
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts

},
{ timestamps: true })

// Export Contact Model
export default mongoose.model<IGroup>('Group', groupSchema)


<<<<<<< HEAD:models/groupModel.js
module.exports.get = function (callback, limit) {
    Group.find(callback).limit(limit);
}
=======
// module.exports.get = function (callback, limit) {
//     Group.find(callback).limit(limit);
// }
>>>>>>> 7044b547d4c3cc4915e92c2cdb7b954e11f9b573:src/models/groupModel.ts
