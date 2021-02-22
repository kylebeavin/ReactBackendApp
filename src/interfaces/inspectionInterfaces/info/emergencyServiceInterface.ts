import { Document } from "mongoose";
export default interface IEmergencyService extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    provider_one: string
    provider_two: string
    provider_three: string
}
