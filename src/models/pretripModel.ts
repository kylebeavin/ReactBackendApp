import IPreTrip from "../interfaces/pretripInterface";
import mongoose, { Schema } from "mongoose";

const PreTripSchema: Schema = new Schema(
	{
		// Document ID of Franchise
		group_id: {
			type: String,
			required: false,
			trim: true,
			// type:Schema.Types.ObjectId,
			// ref:'groups',
			// required:true
		},
		// Document ID of User that created the account
		owner_id: {
			type: String,
			required: false,
			trim: true,
		},
		// PreTrip status active/inactive
		is_active: {
			type: Boolean,
			default: true,
		},
		type: {
			type: String,
			required: false,
			trim: true,
		},
		truck_id: {
			type: String,
			required: false,
			trim: true,
		},
		odometer_reading: {
			type: String,
			required: false,
			trim: true,
		},
		fuel_level: {
			type: String,
			required: false,
			trim: true,
		},
		seat_belts: {
			type: Boolean,
			required: false,
		},
		pto_switch: {
			type: Boolean,
			required: false,
		},
		engine_fluids: {
			type: Boolean,
			required: false,
		},
		transmission: {
			type: Boolean,
			required: false,
		},
		steering_mechanism: {
			type: Boolean,
			required: false,
		},
		horn: {
			type: Boolean,
			required: false,
		},
		windshield_wipers: {
			type: Boolean,
			required: false,
		},
		mirrors: {
			type: Boolean,
			required: false,
		},
		truck_lights: {
			type: Boolean,
			required: false,
		},
		parking_brake: {
			type: Boolean,
			required: false,
		},
		service_brake: {
			type: Boolean,
			required: false,
		},
		tires: {
			type: Boolean,
			required: false,
		},
		rims: {
			type: Boolean,
			required: false,
		},
		emergency_equipment: {
			type: Boolean,
			required: false,
		},
		tools_gear: {
			type: Boolean,
			required: false,
		},
		chocks_chains: {
			type: Boolean,
			required: false,
		},
		drum_cap: {
			type: Boolean,
			required: false,
		},
		grease_distribution: {
			type: Boolean,
			required: false,
		},
		chain_tension: {
			type: Boolean,
			required: false,
		},
		machine_lights: {
			type: Boolean,
			required: false,
		},
		machine_hours: {
			type: Boolean,
			required: false,
		},
		vehicle_condition: {
			type: Boolean,
			required: false,
		},
		required_documents: {
			type: String,
			required: false,
		},
		engine_warning: {
			type: Boolean,
			required: false,
		},
		drivers_signature: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IPreTrip>("PreTrip", PreTripSchema);
