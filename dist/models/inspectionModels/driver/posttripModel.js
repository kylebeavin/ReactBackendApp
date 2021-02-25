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
var PostTripSchema = new mongoose_1.Schema({
    // Document ID of Franchise
    group_id: {
        type: String,
        required: true,
        trim: true,
    },
    // Document ID of User that created the account
    owner_id: {
        type: String,
        required: true,
        trim: true,
    },
    // PostTrip status active/inactive
    is_active: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    truck_id: {
        type: String,
        required: true,
        trim: true,
    },
    odometer_reading: {
        type: String,
        required: true,
        trim: true,
    },
    fuel_level: {
        type: String,
        required: true,
        trim: true,
    },
    seat_belts: {
        type: Boolean,
        required: true,
    },
    pto_switch: {
        type: Boolean,
        required: true,
    },
    engine_fluids: {
        type: Boolean,
        required: true,
    },
    transmission: {
        type: Boolean,
        required: true,
    },
    steering_mechanism: {
        type: Boolean,
        required: true,
    },
    horn: {
        type: Boolean,
        required: true,
    },
    windshield_wipers: {
        type: Boolean,
        required: true,
    },
    mirrors: {
        type: Boolean,
        required: true,
    },
    truck_lights: {
        type: Boolean,
        required: true,
    },
    parking_brake: {
        type: Boolean,
        required: true,
    },
    service_brake: {
        type: Boolean,
        required: true,
    },
    tires: {
        type: Boolean,
        required: true,
    },
    rims: {
        type: Boolean,
        required: true,
    },
    emergency_equipment: {
        type: Boolean,
        required: true,
    },
    tools_gear: {
        type: Boolean,
        required: true,
    },
    chocks_chains: {
        type: Boolean,
        required: true,
    },
    drum_cap: {
        type: Boolean,
        required: true,
    },
    grease_distribution: {
        type: Boolean,
        required: true,
    },
    chain_tension: {
        type: Boolean,
        required: true,
    },
    machine_lights: {
        type: Boolean,
        required: true,
    },
    machine_hours: {
        type: String,
        required: true,
    },
    vehicle_condition: {
        type: Boolean,
        required: true,
    },
    required_documents: {
        type: [String],
        required: true,
    },
    engine_warning: {
        type: Boolean,
        required: true,
    },
    drivers_signature: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("PostTrip", PostTripSchema);
