import HydraulicFilter from "../../../models/inspectionModels/tech/hydraulicFilterModel";
import { Request, Response } from "express";
import ejs from "ejs";
import { sendInspection } from "../../../utils/email";

//for queries

export const view = async (req: Request, res: Response) => {
	try {
		let allHydraulicFilters = await HydraulicFilter.find(req.body)
			.sort({ created_at: 1 })
			.exec();
		if (allHydraulicFilters) {
			return res.status(200).json({
				status: 200,
				message: "Working",
				data: allHydraulicFilters,
			});
		}
	} catch (err) {
		return res.status(500).json({
			status: 500,
			message: err.stack,
		});
	}
};

//For creating new hydraulicFilter
export const add = async function (req: Request, res: Response) {
	try {
		const hydraulicFilter = new HydraulicFilter();
		hydraulicFilter.group_id = req.body.group_id;
		hydraulicFilter.owner_id = req.body.owner_id;
		hydraulicFilter.type = req.body.type;
		hydraulicFilter.truck_id = req.body.truck_id;
		hydraulicFilter.hydraulics = req.body.hydraulics;
		hydraulicFilter.tech_signature = req.body.tech_signature;

		//Save and check error
		let newHydraulicFilter = await hydraulicFilter.save();
		if (newHydraulicFilter) {
			res.status(201).json({
				status: 201,
				message: "New Hydraulic Filter inspection created!",
			});
			var data = await ejs.renderFile(
				"src/utils/emailTemplates/hydraulicFilterForm.ejs",
				{
					franchise: "Franchise Name",
					group_id: hydraulicFilter.group_id,
					owner_id: hydraulicFilter.owner_id,
					type: hydraulicFilter.type,
					truck_id: hydraulicFilter.truck_id,
                    hydraulics: hydraulicFilter.hydraulics,
					tech_signature: hydraulicFilter.tech_signature
				}
			);
			sendInspection(data);
		} else {
			res.json({ message: "Failed to create Hydraulic Filter inspection" });
		}
	} catch (err) {
		res.json({ message: err.message });
	}
};

//update hydraulicFilter by object id

export const update = async function (req: Request, res: Response) {
	try {
		const data = { ...req.body };
		let updatedHydraulicFilter = await HydraulicFilter.findByIdAndUpdate(
			req.body._id,
			data,
			{ new: true, useFindAndModify: false }
		);

		console.log(updatedHydraulicFilter);
		if (updatedHydraulicFilter) {
			return res.status(200).json({
				status: 200,
				message: "Hydraulic Filter Inspection Updated Successfully",
				data: updatedHydraulicFilter,
			});
		} else {
			return res.status(400).json({ message: "Failed to update" });
		}
	} catch (err) {
		return res.status(400).json({ status: 400, message: err.message });
	}
};

//delete by hydraulicFilter id
