import Weekly from "../../../models/inspectionModels/tech/weeklyTechModel";
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
		weekly.def_unit = req.body.def_unit != "pass" ? req.body.weekly : "false";
		weekly.boom_arm = req.body.boom_arm != "pass" ? req.body.weekly : "false";
		weekly.boom_drum =
			req.body.boom_drum != "pass" ? req.body.weekly : "false";
		weekly.hydraulics =
			req.body.hydraulics != "pass" ? req.body.weekly : "false";
		weekly.tools = req.body.tools != "pass" ? req.body.weekly : "false";
		weekly.greased_rails =
			req.body.greased_rails != "pass" ? req.body.weekly : "false";
		weekly.zirc_fittings =
			req.body.zirc_fittings != "pass" ? req.body.weekly : "false";
		weekly.grease_system =
			req.body.grease_system != "pass" ? req.body.weekly : "false";
		weekly.compressor =
			req.body.compressor != "pass" ? req.body.weekly : "false";
		weekly.air_lines =
			req.body.air_lines != "pass" ? req.body.weekly : "false";
		weekly.battery = req.body.battery != "pass" ? req.body.weekly : "false";
		weekly.belts_hoses =
			req.body.belts_hoses != "pass" ? req.body.weekly : "false";
		weekly.truck_body =
			req.body.truck_body != "pass" ? req.body.weekly : "false";
		weekly.parking_brake =
			req.body.parking_brake != "pass" ? req.body.weekly : "false";
		weekly.service_brake =
			req.body.service_brake != "pass" ? req.body.weekly : "false";
		weekly.couplings =
			req.body.couplings != "pass" ? req.body.weekly : "false";
		weekly.heater = req.body.heater != "pass" ? req.body.weekly : "false";
		weekly.drive_line =
			req.body.drive_line != "pass" ? req.body.weekly : "false";
		weekly.engine = req.body.engine != "pass" ? req.body.weekly : "false";
		weekly.exhaust = req.body.exhaust != "pass" ? req.body.weekly : "false";
		weekly.fluid_levels =
			req.body.fluid_levels != "pass" ? req.body.weekly : "false";
		weekly.frame_assembly =
			req.body.frame_assembly != "pass" ? req.body.weekly : "false";
		weekly.front_axle =
			req.body.front_axle != "pass" ? req.body.weekly : "false";
		weekly.fuel_tank =
			req.body.fuel_tank != "pass" ? req.body.weekly : "false";
		weekly.horn = req.body.horn != "pass" ? req.body.weekly : "false";
		weekly.lights_head =
			req.body.lights_head != "pass" ? req.body.weekly : "false";
		weekly.lights_tail =
			req.body.lights_tail != "pass" ? req.body.weekly : "false";
		weekly.lights_turn =
			req.body.lights_turn != "pass" ? req.body.weekly : "false";
		weekly.lights_clearance =
			req.body.lights_clearance != "pass" ? req.body.weekly : "false";
		weekly.mirrors = req.body.mirrors != "pass" ? req.body.weekly : "false";
		weekly.muffler = req.body.muffler != "pass" ? req.body.weekly : "false";
		weekly.oil_pressure =
			req.body.oil_pressure != "pass" ? req.body.weekly : "false";
		weekly.radiator = req.body.radiator != "pass" ? req.body.weekly : "false";
		weekly.rear_end = req.body.rear_end != "pass" ? req.body.weekly : "false";
		weekly.reflectors =
			req.body.reflectors != "pass" ? req.body.weekly : "false";
		weekly.starter = req.body.starter != "pass" ? req.body.weekly : "false";
		weekly.steering = req.body.steering != "pass" ? req.body.weekly : "false";
		weekly.suspension =
			req.body.suspension != "pass" ? req.body.weekly : "false";
		weekly.tires = req.body.tires != "pass" ? req.body.weekly : "false";
		weekly.transmission =
			req.body.transmission != "pass" ? req.body.weekly : "false";
		weekly.trip_recorder =
			req.body.trip_recorder != "pass" ? req.body.weekly : "false";
		weekly.rims = req.body.rims != "pass" ? req.body.weekly : "false";
		weekly.windows = req.body.windows != "pass" ? req.body.weekly : "false";
		weekly.windshield_wipers =
			req.body.windshield_wipers != "pass" ? req.body.weekly : "false";
		weekly.extinguisher =
			req.body.extinguisher != "pass" ? req.body.weekly : "false";
		weekly.flags = req.body.flags != "pass" ? req.body.weekly : "false";
		weekly.reflectives =
			req.body.reflectives != "pass" ? req.body.weekly : "false";
		weekly.spare_bulbs =
			req.body.spare_bulbs != "pass" ? req.body.weekly : "false";
		weekly.remarks = req.body.remarks;
		weekly.cab_condition =
			req.body.cab_condition != "pass" ? req.body.weekly : "false";
		weekly.vehicle_condition =
			req.body.vehicle_condition != "pass" ? req.body.weekly : "false";
		weekly.defects_corrected =
			req.body.defects_corrected != "pass" ? req.body.weekly : "false";
		weekly.tech_signature = req.body.tech_signature;

		//Save and check error
		let newWeekly = await weekly.save();
		if (newWeekly) {
			res.status(201).json({
				status: 201,

				message: "New weekly inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/techWeeklyForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: weekly.group_id,
					owner_id: weekly.owner_id,
					type: weekly.type,
					truck_id: weekly.truck_id,
					odometer_reading: weekly.odometer_reading,
					def_unit: weekly.def_unit,
					boom_arm: weekly.boom_arm,
					boom_drum: weekly.boom_drum,
					hydraulics: weekly.hydraulics,
					tools: weekly.tools,
					greased_rails: weekly.greased_rails,
					zirc_fittings: weekly.zirc_fittings,
					grease_system: weekly.grease_system,
					compressor: weekly.compressor,
					air_lines: weekly.air_lines,
					battery: weekly.battery,
					belts_hoses: weekly.belts_hoses,
					truck_body: weekly.truck_body,
					parking_brake: weekly.parking_brake,
					service_brake: weekly.service_brake,
					couplings: weekly.couplings,
					heater: weekly.heater,
					drive_line: weekly.drive_line,
					engine: weekly.engine,
					exhaust: weekly.exhaust,
					fluid_levels: weekly.fluid_levels,
					frame_assembly: weekly.frame_assembly,
					front_axle: weekly.front_axle,
					fuel_tank: weekly.fuel_tank,
					horn: weekly.horn,
					lights_head: weekly.lights_head,
					lights_tail: weekly.lights_tail,
					lights_turn: weekly.lights_turn,
					lights_clearance: weekly.lights_clearance,
					mirrors: weekly.mirrors,
					muffler: weekly.muffler,
					oil_pressure: weekly.oil_pressure,
					radiator: weekly.radiator,
					rear_end: weekly.rear_end,
					reflectors: weekly.reflectors,
					starter: weekly.starter,
					steering: weekly.steering,
					suspension: weekly.suspension,
					tires: weekly.tires,
					transmission: weekly.transmission,
					trip_recorder: weekly.trip_recorder,
					rims: weekly.rims,
					windows: weekly.windows,
					windshield_wipers: weekly.windshield_wipers,
					extinguisher: weekly.extinguisher,
					flags: weekly.flags,
					reflectives: weekly.reflectives,
					spare_bulbs: weekly.spare_bulbs,
					remarks: weekly.remarks,
					cab_condition: weekly.cab_condition,
					vehicle_condition: weekly.vehicle_condition,
					defects_corrected: weekly.defects_corrected,
					tech_signature: weekly.tech_signature,
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
