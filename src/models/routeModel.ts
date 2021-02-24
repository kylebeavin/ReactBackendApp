import IRoute from "../interfaces/routesInterface";
import mongoose, { Schema } from "mongoose";

const RouteSchema: Schema = new Schema(
	{
		group_id: {
			type: String,
			required: true,
			trim: true,
		},
		inspection_id: {
			type:String,
			required:false,
			default:null
		},

		truck_id: {
			type: String,
			required: false,
			trim: true,
		},
		is_active: {
			type: Boolean,
			default: true,
		},
		// Account stage
		route_stage: {
			type: String,
			enum: ["Empty", "Built", "Routed", "Assigned", "Inspected", "Finalized", "Completed"],
			default: "Empty",
			lower: true,
		},
		start_location: {
			type: String,
			required: true,
			trim: true,
		},
		driver: {
			type: String,
			required: false,
			trim: true,
		},
		truck_vin: {
			type: String,
			required: true,
			trim: true,
		},
		service_stop: {
			type: [String],
			required: true,
			trim: true,
		},
		time: {
			type: Date,
			required: true,
			trim: true,
		},
		notes: {
			type: [String],
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IRoute>("Route", RouteSchema);
