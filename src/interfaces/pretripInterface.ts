import { Document } from "mongoose";
export default interface IPreTrip extends Document {

    // Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
	truck_id: string;
    
    // Truck Checklist
	odometer_reading: string;
	fuel_level: string;
	seat_belts: boolean;
	pto_switch: boolean;
	engine_fluids: boolean;
	transmission: boolean;
	steering_mechanism: boolean;
	horn: boolean;
	windshield_wipers: boolean;
	mirrors: boolean;
	truck_lights: boolean;
	parking_brake: boolean;
	service_brake: boolean;
	tires: boolean;
	rims: boolean;
	emergency_equipment: boolean;
	tools_gear: boolean;
    chocks_chains: boolean;
    
    // Smash Unit Checklist
    drum_cap: boolean
    grease_distribution: boolean
    chain_tension: boolean
    machine_lights: boolean
    machine_hours: string

    // Sign-Off Checklist
    vehicle_condition: boolean
    required_documents: string
    engine_warning: boolean
    drivers_signature: string // will point to url of driver signature image.
}
