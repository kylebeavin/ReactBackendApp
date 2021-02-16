import IWeekly from "../../interfaces/inspectionInterfaces/driver/weeklyDriverInterface"
import mongoose, { Schema } from "mongoose";

const WeeklySchema: Schema = new Schema(
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
		// Weekly status active/inactive
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
		def_unit: {
			type: Boolean,
			required: true,
			trim: true,
        },
        boom_arm: {
			type: Boolean,
			required: true,
			trim: true,
        },
        boom_drum: {
			type: Boolean,
			required: true,
			trim: true,
        },
        clean_cab: {
			type: Boolean,
			required: true,
			trim: true,
        },
        hydraulics: {
			type: Boolean,
			required: true,
			trim: true,
        },
        tools: {
			type: Boolean,
			required: true,
			trim: true,
        },
        greased_rails: {
			type: Boolean,
			required: true,
			trim: true,
        },
        zirc_fittings: {
			type: Boolean,
			required: true,
			trim: true,
        },
        grease_system: {
			type: Boolean,
			required: true,
			trim: true,
        },
        compressor: {
			type: Boolean,
			required: true,
			trim: true,
        },
        air_lines: {
			type: Boolean,
			required: true,
			trim: true,
        },
        battery: {
			type: Boolean,
			required: true,
			trim: true,
        },
        belts_hoses: {
			type: Boolean,
			required: true,
			trim: true,
        },
        truck_body: {
			type: Boolean,
			required: true,
			trim: true,
        },
        parking_brake: {
			type: Boolean,
			required: true,
			trim: true,
        },
        service_brake: {
			type: Boolean,
			required: true,
			trim: true,
        },
        couplings: {
			type: Boolean,
			required: true,
			trim: true,
        },
        heater: {
			type: Boolean,
			required: true,
			trim: true,
        },
        drive_line: {
			type: Boolean,
			required: true,
			trim: true,
        },
        engine: {
			type: Boolean,
			required: true,
			trim: true,
        },
        exhaust: {
			type: Boolean,
			required: true,
			trim: true,
        },
        fluid_levels: {
			type: Boolean,
			required: true,
			trim: true,
        },
        frame_assembly: {
			type: Boolean,
			required: true,
			trim: true,
        },
        front_axle: {
			type: Boolean,
			required: true,
			trim: true,
        },
        fuel_tank: {
			type: Boolean,
			required: true,
			trim: true,
        },
        horn: {
			type: Boolean,
			required: true,
			trim: true,
        },
        lights_head: {
			type: Boolean,
			required: true,
			trim: true,
        },
        lights_tail: {
			type: Boolean,
			required: true,
			trim: true,
        },
        lights_turn: {
			type: Boolean,
			required: true,
			trim: true,
        },
        lights_clearance: {
			type: Boolean,
			required: true,
			trim: true,
        },
        mirrors: {
			type: Boolean,
			required: true,
			trim: true,
        },
        muffler: {
			type: Boolean,
			required: true,
			trim: true,
        },
        oil_pressure: {
			type: Boolean,
			required: true,
			trim: true,
        },
        radiator: {
			type: Boolean,
			required: true,
			trim: true,
        },
        rear_end: {
			type: Boolean,
			required: true,
			trim: true,
        },
        reflectors: {
			type: Boolean,
			required: true,
			trim: true,
        },
        starter: {
			type: Boolean,
			required: true,
			trim: true,
        },
        steering: {
			type: Boolean,
			required: true,
			trim: true,
        },
        suspension: {
			type: Boolean,
			required: true,
			trim: true,
        },
        tires: {
			type: Boolean,
			required: true,
			trim: true,
        },
        transmission: {
			type: Boolean,
			required: true,
			trim: true,
        },
        trip_recorder: {
			type: Boolean,
			required: true,
			trim: true,
        },
        rims: {
			type: Boolean,
			required: true,
			trim: true,
        },
        windows: {
			type: Boolean,
			required: true,
			trim: true,
        },
        windshield_wipers: {
			type: Boolean,
			required: true,
			trim: true,
        },
        extinguisher: {
			type: Boolean,
			required: true,
			trim: true,
        },
        flags: {
			type: Boolean,
			required: true,
			trim: true,
        },
        reflectives: {
			type: Boolean,
			required: true,
			trim: true,
        },
        spare_bulbs: {
			type: Boolean,
			required: true,
			trim: true,
        },
        remarks: {
			type: String,
			required: true,
			trim: true,
        },
        vehicle_condition: {
			type: Boolean,
			required: true,
			trim: true,
        },
        defects_corrected: {
			type: Boolean,
			required: true,
			trim: true,
        },
        drivers_signature: {
			type: String,
			required: true,
			trim: true,
		},
		
	},
	{ timestamps: true }
);

export default mongoose.model<IWeekly>("Weekly", WeeklySchema);