import IGearbox from "../../../interfaces/inspectionInterfaces/tech/gearboxInterface"
import mongoose, { Schema } from "mongoose";

const GearboxSchema: Schema = new Schema(
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
		// Gearbox status active/inactive
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
		gearbox: {
			type: String,
			required: true,
			trim: true,
		},
		tech_signature: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IGearbox>("Gearbox", GearboxSchema);
