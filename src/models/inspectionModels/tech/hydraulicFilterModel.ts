import IHydraulicFilter from "../../../interfaces/inspectionInterfaces/tech/hydraulicFilterInterface"
import mongoose, { Schema } from "mongoose";

const HydraulicFilterSchema: Schema = new Schema(
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
		// HydraulicFilter status active/inactive
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
		hydraulics: {
			type: Boolean,
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

export default mongoose.model<IHydraulicFilter>("HydraulicFilter", HydraulicFilterSchema);
