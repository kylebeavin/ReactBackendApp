import Gearbox from "../../../models/inspectionModels/tech/gearboxModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection  } from "../../../utils/email"



//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allGearboxs = await Gearbox.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allGearboxs) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allGearboxs,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: "error",
			message: err.stack,
		});
	}
};

//For creating new gearbox
export const add = async function (req: Request, res: Response) {
	try {
		const gearbox = new Gearbox();
		gearbox.group_id = req.body.group_id;
		gearbox.owner_id = req.body.owner_id;
		gearbox.type = req.body.type;
		gearbox.truck_id = req.body.truck_id;
		gearbox.gearbox = req.body.gearbox != "pass" ? req.body.gearbox : "false";
		gearbox.tech_signature = req.body.tech_signature;

		//Save and check error
		let newGearbox = await gearbox.save();
		
		if (newGearbox) {
			res.status(201).json({
				status: 201,
				message: "New inspection created!",
			})
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/gearboxForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: gearbox.group_id,
					owner_id: gearbox.owner_id,
					type: gearbox.type,
					truck_id: gearbox.truck_id,
					gearbox: gearbox.gearbox,
					tech_signature: gearbox.tech_signature
				})
		sendInspection(data);
			
		} else {
			res.json({ message: "Failed to create inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update gearbox by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedGearbox = await Gearbox.findByIdAndUpdate(req.body._id, data, {
			new: true,
			useFindAndModify: false,
		});

		console.log(updatedGearbox);
		if (updatedGearbox) {
			return res.status(200).json({
				status: 200,
				message: "Gearbox Inspection Updated Successfully",
				data: updatedGearbox,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by gearbox id
