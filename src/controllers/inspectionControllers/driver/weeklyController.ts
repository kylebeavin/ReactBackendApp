import Weekly from "../../../models/inspectionModels/driver/weeklyDriverModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allWeeklys = await Weekly.find(req.body).sort({ created_at: 1 }).exec();
		if (allWeeklys) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allWeeklys,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new weekly
export const add = async function (req: Request, res: Response) {
	try {
		const weekly = new Weekly();
		weekly.group_id = req.body.group_id;
		weekly.owner_id = req.body.owner_id;
		weekly.type = req.body.type;
		weekly.truck_id = req.body.truck_id;
		weekly.odometer_reading = req.body.odometer_reading;
		weekly.def_unit = req.body.def_unitp != "pass" ? req.body.weekly : "false";
		weekly.boom_arm = req.body.boom_armp != "pass" ? req.body.weekly : "false";
		weekly.boom_drum =
			req.body.boom_drump != "pass" ? req.body.weekly : "false";
		weekly.clean_cab =
			req.body.clean_cabp != "pass" ? req.body.weekly : "false";
		weekly.hydraulics =
			req.body.hydraulicsp != "pass" ? req.body.weekly : "false";
		weekly.tools = req.body.toolsp != "pass" ? req.body.weekly : "false";
		weekly.greased_rails =
			req.body.greased_railsp != "pass" ? req.body.weekly : "false";
		weekly.zirc_fittings =
			req.body.zirc_fittingsp != "pass" ? req.body.weekly : "false";
		weekly.grease_system =
			req.body.grease_systemp != "pass" ? req.body.weekly : "false";
		weekly.compressor =
			req.body.compressorp != "pass" ? req.body.weekly : "false";
		weekly.air_lines =
			req.body.air_linesp != "pass" ? req.body.weekly : "false";
		weekly.battery = req.body.batteryp != "pass" ? req.body.weekly : "false";
		weekly.belts_hoses =
			req.body.belts_hosesp != "pass" ? req.body.weekly : "false";
		weekly.truck_body =
			req.body.truck_bodyp != "pass" ? req.body.weekly : "false";
		weekly.parking_brake =
			req.body.parking_brakep != "pass" ? req.body.weekly : "false";
		weekly.service_brake =
			req.body.service_brakep != "pass" ? req.body.weekly : "false";
		weekly.couplings =
			req.body.couplingsp != "pass" ? req.body.weekly : "false";
		weekly.heater = req.body.heaterp != "pass" ? req.body.weekly : "false";
		weekly.drive_line =
			req.body.drive_linep != "pass" ? req.body.weekly : "false";
		weekly.engine = req.body.enginep != "pass" ? req.body.weekly : "false";
		weekly.exhaust = req.body.exhaustp != "pass" ? req.body.weekly : "false";
		weekly.fluid_levels =
			req.body.fluid_levelsp != "pass" ? req.body.weekly : "false";
		weekly.frame_assembly =
			req.body.frame_assemblyp != "pass" ? req.body.weekly : "false";
		weekly.front_axle =
			req.body.front_axlep != "pass" ? req.body.weekly : "false";
		weekly.fuel_tank =
			req.body.fuel_tankp != "pass" ? req.body.weekly : "false";
		weekly.horn = req.body.hornp != "pass" ? req.body.weekly : "false";
		weekly.lights_head =
			req.body.lights_headp != "pass" ? req.body.weekly : "false";
		weekly.lights_tail =
			req.body.lights_tailp != "pass" ? req.body.weekly : "false";
		weekly.lights_turn =
			req.body.lights_turnp != "pass" ? req.body.weekly : "false";
		weekly.lights_clearance =
			req.body.lights_clearancep != "pass" ? req.body.weekly : "false";
		weekly.mirrors = req.body.mirrorsp != "pass" ? req.body.weekly : "false";
		weekly.muffler = req.body.mufflerp != "pass" ? req.body.weekly : "false";
		weekly.oil_pressure =
			req.body.oil_pressurep != "pass" ? req.body.weekly : "false";
		weekly.radiator = req.body.radiatorp != "pass" ? req.body.weekly : "false";
		weekly.rear_end = req.body.rear_endp != "pass" ? req.body.weekly : "false";
		weekly.reflectors =
			req.body.reflectorsp != "pass" ? req.body.weekly : "false";
		weekly.starter = req.body.starterp != "pass" ? req.body.weekly : "false";
		weekly.steering = req.body.steeringp != "pass" ? req.body.weekly : "false";
		weekly.suspension =
			req.body.suspensionp != "pass" ? req.body.weekly : "false";
		weekly.tires = req.body.tiresp != "pass" ? req.body.weekly : "false";
		weekly.transmission =
			req.body.transmissionp != "pass" ? req.body.weekly : "false";
		weekly.trip_recorder =
			req.body.trip_recorderp != "pass" ? req.body.weekly : "false";
		weekly.rims = req.body.rimsp != "pass" ? req.body.weekly : "false";
		weekly.windows = req.body.windowsp != "pass" ? req.body.weekly : "false";
		weekly.windshield_wipers =
			req.body.windshield_wipersp != "pass" ? req.body.weekly : "false";
		weekly.extinguisher =
			req.body.extinguisherp != "pass" ? req.body.weekly : "false";
		weekly.flags = req.body.flagsp != "pass" ? req.body.weekly : "false";
		weekly.reflectives =
			req.body.reflectivesp != "pass" ? req.body.weekly : "false";
		weekly.spare_bulbs =
			req.body.spare_bulbsp != "pass" ? req.body.weekly : "false";
		weekly.remarks = req.body.remarks;
		weekly.vehicle_condition =
			req.body.vehicle_condition != "pass" ? req.body.weekly : "false";
		weekly.defects_corrected =
			req.body.defects_corrected != "pass" ? req.body.weekly : "false";
		weekly.drivers_signature = req.body.drivers_signature;

		//Save and check error
		let newWeekly = await weekly.save();
		if (newWeekly) {
			res.status(201).json({
				status: 201,

				message: "New weekly inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/driverWeeklyForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: req.body.group_id,
					owner_id: req.body.owner_id,
					type: req.body.type,
					truck_id: req.body.truck_id,
					odometer_reading: req.body.odometer_reading,
					def_unit: req.body.def_unit,
					boom_arm: req.body.boom_arm,
					boom_drum: req.body.boom_drum,
					clean_cab: req.body.clean_cab,
					hydraulics: req.body.hydraulics,
					tools: req.body.tools,
					greased_rails: req.body.greased_rails,
					zirc_fittings: req.body.zirc_fittings,
					grease_system: req.body.grease_system,
					compressor: req.body.compressor,
					air_lines: req.body.air_lines,
					battery: req.body.battery,
					belts_hoses: req.body.belts_hoses,
					truck_body: req.body.truck_body,
					parking_brake: req.body.parking_brake,
					service_brake: req.body.service_brake,
					couplings: req.body.couplings,
					heater: req.body.heater,
					drive_line: req.body.drive_line,
					engine: req.body.engine,
					exhaust: req.body.exhaust,
					fluid_levels: req.body.fluid_levels,
					frame_assembly: req.body.frame_assembly,
					front_axle: req.body.front_axle,
					fuel_tank: req.body.fuel_tank,
					horn: req.body.horn,
					lights_head: req.body.lights_head,
					lights_tail: req.body.lights_tail,
					lights_turn: req.body.lights_turn,
					lights_clearance: req.body.lights_clearance,
					mirrors: req.body.mirrors,
					muffler: req.body.muffler,
					oil_pressure: req.body.oil_pressure,
					radiator: req.body.radiator,
					rear_end: req.body.rear_end,
					reflectors: req.body.reflectors,
					starter: req.body.starter,
					steering: req.body.steering,
					suspension: req.body.suspension,
					tires: req.body.tires,
					transmission: req.body.transmission,
					trip_recorder: req.body.trip_recorder,
					rims: req.body.rims,
					windows: req.body.windows,
					windshield_wipers: req.body.windshield_wipers,
					extinguisher: req.body.extinguisher,
					flags: req.body.flags,
					reflectives: req.body.reflectives,
					spare_bulbs: req.body.spare_bulbs,
					remarks: req.body.remarks,
					vehicle_condition: req.body.vehicle_condition,
					defects_corrected: req.body.defects_corrected,
					drivers_signature: req.body.drivers_signature,
				}
			);
			sendInspection(data);
		} else {
			res.json({ message: "Failed to create weekly inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update weekly by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedWeekly = await Weekly.findByIdAndUpdate(req.body._id, data, {
			new: true,
			useFindAndModify: false,
		});

		console.log(updatedWeekly);
		if (updatedWeekly) {
			return res.status(200).json({
				status: 200,
				message: "Weekly Inspection Updated Successfully",
				data: updatedWeekly,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by weekly id
