import IEmergencyService from "../../../interfaces/inspectionInterfaces/info/emergencyServiceInterface"
import mongoose, { Schema } from "mongoose";

const EmergencyServiceSchema: Schema = new Schema(
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
		// EmergencyService status active/inactive
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
        provider_one: {
			type: String,
			required: true,
			trim: true,
		},
        provider_two: {
			type: String,
			required: true,
			trim: true,
		},
        provider_three: {
			type: String,
			required: true,
			trim: true,
		},

		
	},
	{ timestamps: true }
);

export default mongoose.model<IEmergencyService>("EmergencyService", EmergencyServiceSchema);