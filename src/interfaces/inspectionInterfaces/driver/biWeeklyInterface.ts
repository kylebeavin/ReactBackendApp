import { Document } from "mongoose";
export default interface IBiWeekly extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    odometer_reading: string;
    hydraulic_pump: boolean;
    hydraudic_cylinder: boolean;
    sprocket_motor: boolean;
    boom_arm: boolean;
    boom_drum: boolean;
    machine_assemby: boolean;
    hook_mount: boolean;

    // Sign-Off
    vehicle_condition: boolean
    drivers_signature: string // will point to url of driver signature image.
}
