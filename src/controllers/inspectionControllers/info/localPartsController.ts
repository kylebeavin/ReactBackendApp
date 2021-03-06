import LocalParts from "../../../models/inspectionModels/info/localPartsModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allLocalParts = await LocalParts.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allLocalParts) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allLocalParts,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new localParts
export const add = async function (req: Request, res: Response) {
	try {
		const localParts = new LocalParts();
		localParts.group_id = req.body.group_id;
		localParts.owner_id = req.body.owner_id;
		localParts.type = req.body.type;
		localParts.truck_id = req.body.truck_id;
		localParts.location = req.body.location;
		localParts.service_hours = req.body.service_hours;

		//Save and check error
		let newLocalParts = await localParts.save();
		if (newLocalParts) {
			res.status(201).json({
				status: 201,
				message: "New local Parts inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/localPartsForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: localParts.group_id,
					owner_id: localParts.owner_id,
					type: localParts.type,
					truck_id: localParts.truck_id,
					location: localParts.location,
					service_hours: localParts.service_hours,
				}
			);
			sendInspection(data);
		} else {
			res.json({ message: "Failed to create local Parts inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update localParts by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedLocalParts = await LocalParts.findByIdAndUpdate(
			req.body._id,
			data,
			{ new: true, useFindAndModify: false }
		);

		console.log(updatedLocalParts);
		if (updatedLocalParts) {
			return res.status(200).json({
				status: 200,
				message: "Local Parts Inspection Updated Successfully",
				data: updatedLocalParts,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by localParts id
