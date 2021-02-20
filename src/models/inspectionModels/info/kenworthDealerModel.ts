import IKenworthDealer from "../../../interfaces/inspectionInterfaces/info/kenworthDealerInterface"
import mongoose, { Schema } from "mongoose";

const KenworthDealerSchema: Schema = new Schema(
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
		// KenworthDealer status active/inactive
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
        contact: {
			type: String,
			required: true,
			trim: true,
		},
        location: {
			type: String,
			required: true,
			trim: true,
		},
        website: {
			type: String,
			required: true,
			trim: true,
		},
        phone: {
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

export default mongoose.model<IKenworthDealer>("KenworthDealer", KenworthDealerSchema);