import IBiWeekly from "../../../interfaces/inspectionInterfaces/driver/biWeeklyDriverInterface"
import mongoose, { Schema } from "mongoose";

const BiWeeklySchema: Schema = new Schema(
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
		// BiWeekly status active/inactive
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
        hydraulic_pump: {
            type: Boolean,
            required: true,
            trim: true
        },
        hydraulic_cylinder: {
            type: Boolean,
            required: true,
            trim: true
        },
        sprocket_motor: {
            type: Boolean,
            required: true,
            trim: true
        },
        boom_arm: {
            type: Boolean,
            required: true,
            trim: true
        },
        boom_drum: {
            type: Boolean,
            required: true,
            trim: true
        },
        machine_assembly: {
            type: Boolean,
            required: true,
            trim: true
        },
        hook_mount: {
            type: Boolean,
            required: true,
            trim: true
        },
        vehicle_condition: {
            type: Boolean,
            required: true,
            trim: true
        },
        drivers_signature: {
            type: String,
            required: true,
            trim: true
        },
		
	},
	{ timestamps: true }
);

export default mongoose.model<IBiWeekly>("BiWeekly", BiWeeklySchema);