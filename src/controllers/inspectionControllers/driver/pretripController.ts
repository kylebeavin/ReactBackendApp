import PreTrip from "../../../models/inspectionModels/driver/pretripModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allPreTrips = await PreTrip.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allPreTrips) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allPreTrips,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new pretrip
export const add = async function (req: Request, res: Response) {
	try {
		const pretrip = new PreTrip();
		pretrip.group_id = req.body.group_id;
		pretrip.owner_id = req.body.owner_id;
		pretrip.type = req.body.type;
		pretrip.truck_id = req.body.truck_id;
		pretrip.odometer_reading = req.body.odometer_reading;
		pretrip.fuel_level = req.body.fuel_level;
		pretrip.seat_belts =
			req.body.seat_belts != "pass" ? req.body.pretrip : "false";
		pretrip.pto_switch = req.body.pto_switch;
		pretrip.engine_fluids =
			req.body.engine_fluids != "pass" ? req.body.pretrip : "false";
		pretrip.transmission =
			req.body.transmission != "pass" ? req.body.pretrip : "false";
		pretrip.steering_mechanism =
			req.body.steering_mechanism != "pass" ? req.body.pretrip : "false";
		pretrip.horn = req.body.horn != "pass" ? req.body.pretrip : "false";
		pretrip.windshield_wipers =
			req.body.windshield_wipers != "pass" ? req.body.pretrip : "false";
		pretrip.mirrors = req.body.mirrors != "pass" ? req.body.pretrip : "false";
		pretrip.truck_lights =
			req.body.truck_lights != "pass" ? req.body.pretrip : "false";
		pretrip.parking_brake =
			req.body.parking_brake != "pass" ? req.body.pretrip : "false";
		pretrip.service_brake =
			req.body.service_brake != "pass" ? req.body.pretrip : "false";
		pretrip.tires = req.body.tires != "pass" ? req.body.pretrip : "false";
		pretrip.rims = req.body.rims != "pass" ? req.body.pretrip : "false";
		pretrip.emergency_equipment =
			req.body.emergency_equipment != "pass" ? req.body.pretrip : "false";
		pretrip.tools_gear =
			req.body.tools_gear != "pass" ? req.body.pretrip : "false";
		pretrip.chocks_chains =
			req.body.chocks_chains != "pass" ? req.body.pretrip : "false";
		pretrip.drum_cap = req.body.drum_cap != "pass" ? req.body.pretrip : "false";
		pretrip.grease_distribution =
			req.body.grease_distribution != "pass" ? req.body.pretrip : "false";
		pretrip.chain_tension =
			req.body.chain_tension != "pass" ? req.body.pretrip : "false";
		pretrip.machine_lights =
			req.body.machine_lights != "pass" ? req.body.pretrip : "false";
		pretrip.machine_hours = req.body.machine_hours;
		pretrip.vehicle_condition =
			req.body.vehicle_condition != "pass" ? req.body.pretrip : "false";
		pretrip.required_documents = req.body.required_documents;
		pretrip.engine_warning =
			req.body.engine_warning != "pass" ? req.body.pretrip : "false";
		pretrip.drivers_signature = req.body.drivers_signature;

		//Save and check error
		let newPreTrip = await pretrip.save();
		if (newPreTrip) {
			res.status(201).json({
				status: 201,

				message: "New pretrip inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/pretripForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: pretrip.group_id,
					owner_id: pretrip.owner_id,
					type: pretrip.type,
					truck_id: pretrip.truck_id,
					odometer_reading: pretrip.odometer_reading,
					fuel_level: pretrip.fuel_level,
					seat_belts: pretrip.seat_belts,
					pto_switch: pretrip.pto_switch,
					engine_fluids: pretrip.engine_fluids,
					transmission: pretrip.transmission,
					steering_mechanism: pretrip.steering_mechanism,
					horn: pretrip.horn,
					windshield_wipers: pretrip.windshield_wipers,
					mirrors: pretrip.mirrors,
					truck_lights: pretrip.truck_lights,
					parking_brake: pretrip.parking_brake,
					service_brake: pretrip.service_brake,
					tires: pretrip.tires,
					rims: pretrip.rims,
					emergency_equipment: pretrip.emergency_equipment,
					tools_gear: pretrip.tools_gear,
					chocks_chains: pretrip.chocks_chains,
					drum_cap: pretrip.drum_cap,
					grease_distribution: pretrip.grease_distribution,
					chain_tension: pretrip.chain_tension,
					machine_lights: pretrip.machine_lights,
					machine_hours: pretrip.machine_hours,
					vehicle_condition: pretrip.vehicle_condition,
					required_documents: pretrip.required_documents,
					engine_warning: pretrip.engine_warning,
					drivers_signature: pretrip.drivers_signature,
				}
			);
			sendInspection(data);
		} else {
			res.json({ message: "Failed to create an pretrip inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update pretrip by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedPreTrip = await PreTrip.findByIdAndUpdate(req.body._id, data, {
			new: true,
			useFindAndModify: false,
		});

		console.log(updatedPreTrip);
		if (updatedPreTrip) {
			return res.status(200).json({
				status: 200,
				message: "Pre-Trip Inspection Updated Successfully",
				data: updatedPreTrip,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by pretrip id
