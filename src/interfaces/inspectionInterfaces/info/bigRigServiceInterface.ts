import { Document } from "mongoose";
export default interface IBigRigService extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    location: string
    service_hours: string
}
