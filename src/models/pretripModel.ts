import IPreTrip from "../interfaces/pretripInterface";
import mongoose, { Schema } from "mongoose";

const PreTripSchema: Schema = new Schema(
	{
		// Document ID of Franchise
		group_id: {
			type: String,
			required: true,
			trim: true,
			// type:Schema.Types.ObjectId,
			// ref:'groups',
			// required:true
		},
		// Document ID of User that created the account
		owner_id: {
			type: String,
			required: true,
			trim: true,
		},
		// PreTrip status active/inactive
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
	},
	{ timestamps: true }
);

export default mongoose.model<IPreTrip>("PreTrip", PreTripSchema);
