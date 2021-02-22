import { Document } from "mongoose";
export default interface ITireVendor extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    contact: string
    location: string
    website: string
    phone: string
    service_hours: string
}
