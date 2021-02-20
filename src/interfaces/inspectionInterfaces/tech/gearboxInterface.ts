import { Document } from "mongoose";
export default interface IGearbox extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    gearbox: boolean
    tech_signature: string // will point to url of driver signature image.
}
