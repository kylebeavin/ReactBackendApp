import { Document } from "mongoose";
export default interface IWeekly extends Document {
	// Identify truck
	group_id: string;
	owner_id: string;
	is_active: boolean;
	type: string;
    truck_id: string;

    // Truck Checklist
    odometer_reading: string;
    def_unit: boolean
    boom_arm: boolean
    boom_drum: boolean
    clean_cab: boolean
    hydraulics: boolean
    tools: boolean
    greased_rails: boolean
    zirc_fittings: boolean
    grease_system: boolean
    compressor: boolean
    air_lines: boolean
    battery: boolean
    belts_hoses: boolean
    truck_body: boolean
    parking_brake: boolean;
    service_brake: boolean;
    couplings: boolean
    heater: boolean
    drive_line: boolean
    engine: boolean
    exhaust: boolean
    fluid_levels: boolean
    frame_assembly: boolean
    front_axle: boolean
    fuel_tank: boolean
    horn: boolean
    lights_head: boolean
    lights_tail: boolean
    lights_turn: boolean
    lights_clearance: boolean
    mirrors: boolean
    muffler: boolean
    oil_pressure: boolean
    radiator: boolean
    rear_end: boolean
    reflectors: boolean
    starter: boolean
    steering: boolean
    suspension: boolean
    tires: boolean
    transmission: boolean
    trip_recorder: boolean
    rims: boolean
    windows: boolean
    windshield_wipers: boolean

    // Safety Equipment
    extinguisher: boolean
    flags: boolean
    reflectives: boolean
    spare_bulbs: boolean

    // Sign-Off
    remarks: string
    vehicle_condition: boolean
    defects_corrected: boolean
    drivers_signature: string // will point to url of driver signature image.
}
