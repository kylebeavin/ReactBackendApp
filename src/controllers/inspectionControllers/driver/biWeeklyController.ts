import BiWeekly from "../../../models/inspectionModels/driver/biWeeklyModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allBiWeeklys = await BiWeekly.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allBiWeeklys) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allBiWeeklys,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new biWeekly
export const add = async function (req: Request, res: Response) {
	try {
		const biWeekly = new BiWeekly();
		biWeekly.group_id = req.body.group_id;
		biWeekly.owner_id = req.body.owner_id;
		biWeekly.type = req.body.type;
		biWeekly.truck_id = req.body.truck_id;
		biWeekly.odometer_reading = req.body.odometer_reading;
		biWeekly.hydraulic_pump =
			req.body.hydraulic_pump != "pass" ? req.body.biWeekly : "false";
		biWeekly.hydraulic_cylinder =
			req.body.hydraulic_cylinder != "pass" ? req.body.biWeekly : "false";
		biWeekly.sprocket_motor =
			req.body.sprocket_motor != "pass" ? req.body.biWeekly : "false";
		biWeekly.boom_arm =
			req.body.boom_arm != "pass" ? req.body.biWeekly : "false";
		biWeekly.boom_drum =
			req.body.boom_drum != "pass" ? req.body.biWeekly : "false";
		biWeekly.machine_assembly =
			req.body.machine_assembly != "pass" ? req.body.biWeekly : "false";
		biWeekly.hook_mount =
			req.body.hook_mount != "pass" ? req.body.biWeekly : "false";
		biWeekly.vehicle_condition =
			req.body.vehicle_condition != "pass" ? req.body.biWeekly : "false";
		biWeekly.drivers_signature = req.body.drivers_signature;

		//Save and check error
		let newBiWeekly = await biWeekly.save();
		if (newBiWeekly) {
			res.status(201).json({
				status: 201,

				message: "New BiWeekly inspection created!",
			});
		} else {
			res.json({ message: "Failed to create BiWeekly inspection" });
		}
		var data = await ejs.renderFile(
			"src/utils/emailTemplates/biWeeklyForm.ejs",
			{
				franchise: "Franchise Name",
				group_id: biWeekly.group_id,
				owner_id: biWeekly.owner_id,
				type: biWeekly.type,
				truck_id: biWeekly.truck_id,
				odometer_reading: biWeekly.odometer_reading,
				hydraulic_pump: biWeekly.hydraulic_pump,
				hydraulic_cylinder: biWeekly.hydraulic_cylinder,
				sprocket_motor: biWeekly.sprocket_motor,
				boom_arm: biWeekly.boom_arm,
				boom_drum: biWeekly.boom_drum,
				machine_assembly: biWeekly.machine_assembly,
				hook_mount: biWeekly.hook_mount,
				vehicle_condition: biWeekly.vehicle_condition,
				drivers_signature: biWeekly.drivers_signature,
			}
		);
		sendInspection(data);
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update biWeekly by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedBiWeekly = await BiWeekly.findByIdAndUpdate(req.body._id, data, {
			new: true,
			useFindAndModify: false,
		});

<<<<<<< HEAD
        
            if (updatedBiWeekly) {
                return res.status(200).json({
                    status: 200,
                    message: "BiWeekly Inspection Updated Successfully",
                    data: updatedBiWeekly
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({status: 400, message: err.message })
    }
=======
		console.log(updatedBiWeekly);
		if (updatedBiWeekly) {
			return res.status(200).json({
				status: 200,
				message: "BiWeekly Inspection Updated Successfully",
				data: updatedBiWeekly,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
>>>>>>> dev
};

//delete by biWeekly id
