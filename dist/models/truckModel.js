"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
//schema
var truckSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
// Export Truck Model
exports.default = mongoose_1.default.model('Truck', truckSchema);
