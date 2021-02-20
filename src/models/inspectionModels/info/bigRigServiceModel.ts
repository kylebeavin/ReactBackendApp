import IBigRigService from "../../../interfaces/inspectionInterfaces/info/bigRigServiceInterface"
import mongoose, { Schema } from "mongoose";

const BigRigServiceSchema: Schema = new Schema(
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
		// BigRigService status active/inactive
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
        location: {
			type: String,
			required: true,
			trim: true,
		},
        service_hours: {
			type: String,
			required: true,
			trim: true,
		},
		
	},
	{ timestamps: true }
);

export default mongoose.model<IBigRigService>("BigRigService", BigRigServiceSchema);