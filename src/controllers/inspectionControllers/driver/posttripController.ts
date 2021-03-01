import PostTrip from "../../../models/inspectionModels/driver/posttripModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allPostTrips = await PostTrip.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allPostTrips) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allPostTrips,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new posttrip
export const add = async function (req: Request, res: Response) {
	try {
		const posttrip = new PostTrip();
		posttrip.group_id = req.body.group_id;
		posttrip.owner_id = req.body.owner_id;
		posttrip.type = req.body.type;
		posttrip.truck_id = req.body.truck_id;
		posttrip.odometer_reading = req.body.odometer_reading;
		posttrip.fuel_level = req.body.fuel_level;
		posttrip.seat_belts =
			req.body.seat_belts != "pass" ? req.body.posttrip : "false";
		posttrip.pto_switch =
			req.body.pto_switch != "pass" ? req.body.posttrip : "false";
		posttrip.engine_fluids =
			req.body.engine_fluids != "pass" ? req.body.posttrip : "false";
		posttrip.transmission =
			req.body.transmission != "pass" ? req.body.posttrip : "false";
		posttrip.steering_mechanism =
			req.body.steering_mechanism != "pass" ? req.body.posttrip : "false";
		posttrip.horn = req.body.horn != "pass" ? req.body.posttrip : "false";
		posttrip.windshield_wipers =
			req.body.windshield_wipers != "pass" ? req.body.posttrip : "false";
		posttrip.mirrors = req.body.mirrors != "pass" ? req.body.posttrip : "false";
		posttrip.truck_lights =
			req.body.truck_lights != "pass" ? req.body.posttrip : "false";
		posttrip.parking_brake =
			req.body.parking_brake != "pass" ? req.body.posttrip : "false";
		posttrip.service_brake =
			req.body.service_brake != "pass" ? req.body.posttrip : "false";
		posttrip.tires = req.body.tires != "pass" ? req.body.posttrip : "false";
		posttrip.rims = req.body.rims != "pass" ? req.body.posttrip : "false";
		posttrip.emergency_equipment =
			req.body.emergency_equipment != "pass" ? req.body.posttrip : "false";
		posttrip.tools_gear =
			req.body.tools_gear != "pass" ? req.body.posttrip : "false";
		posttrip.chocks_chains =
			req.body.chocks_chains != "pass" ? req.body.posttrip : "false";
		posttrip.drum_cap =
			req.body.drum_cap != "pass" ? req.body.posttrip : "false";
		posttrip.grease_distribution =
			req.body.grease_distribution != "pass" ? req.body.posttrip : "false";
		posttrip.chain_tension =
			req.body.chain_tension != "pass" ? req.body.posttrip : "false";
		posttrip.machine_lights =
			req.body.machine_lights != "pass" ? req.body.posttrip : "false";
		posttrip.machine_hours =
			req.body.machine_hours != "pass" ? req.body.posttrip : "false";
		posttrip.vehicle_condition =
			req.body.vehicle_condition != "pass" ? req.body.posttrip : "false";
		posttrip.required_documents = req.body.required_documents;
		posttrip.engine_warning =
			req.body.engine_warning != "pass" ? req.body.posttrip : "false";
		posttrip.drivers_signature = req.body.drivers_signature;

		//Save and check error
		let newPostTrip = await posttrip.save();
		if (newPostTrip) {
			res.status(201).json({
				status: 201,

				message: "New post-trip inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/posttripForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: posttrip.group_id,
					owner_id: posttrip.owner_id,
					type: posttrip.type,
					truck_id: posttrip.truck_id,
					odometer_reading: posttrip.odometer_reading,
					fuel_level: posttrip.fuel_level,
					seat_belts: posttrip.seat_belts,
					pto_switch: posttrip.pto_switch,
					engine_fluids: posttrip.engine_fluids,
					transmission: posttrip.transmission,
					steering_mechanism: posttrip.steering_mechanism,
					horn: posttrip.horn,
					windshield_wipers: posttrip.windshield_wipers,
					mirrors: posttrip.mirrors,
					truck_lights: posttrip.truck_lights,
					parking_brake: posttrip.parking_brake,
					service_brake: posttrip.service_brake,
					tires: posttrip.tires,
					rims: posttrip.rims,
					emergency_equipment: posttrip.emergency_equipment,
					tools_gear: posttrip.tools_gear,
					chocks_chains: posttrip.chocks_chains,
					drum_cap: posttrip.drum_cap,
					grease_distribution: posttrip.grease_distribution,
					chain_tension: posttrip.chain_tension,
					machine_lights: posttrip.machine_lights,
					machine_hours: posttrip.machine_hours,
					vehicle_condition: posttrip.vehicle_condition,
					required_documents: posttrip.required_documents,
					engine_warning: posttrip.engine_warning,
					drivers_signature: posttrip.drivers_signature,
				}
			);
			sendInspection(data);
		} else {
			res.json({ message: "Failed to create an post-trip inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update posttrip by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedPostTrip = await PostTrip.findByIdAndUpdate(req.body._id, data, {
			new: true,
			useFindAndModify: false,
		});

		console.log(updatedPostTrip);
		if (updatedPostTrip) {
			return res.status(200).json({
				status: 200,
				message: "Post-Trip Inspection Updated Successfully",
				data: updatedPostTrip,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by posttrip id
