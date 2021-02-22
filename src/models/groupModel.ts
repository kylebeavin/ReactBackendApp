import IGroup from "../interfaces/groupInterface";
import mongoose, { Schema } from "mongoose";

//schema
var groupSchema = new mongoose.Schema(
	{
		// Address City
		address_city: {
			type: String,
			required: true,
			trim: true,
		},
		// Address State
		address_state: {
			type: String,
			required: true,
			trim: true,
		},
		// Address Street
		address_street: {
			type: String,
			required: true,
			trim: true,
		},
		// Address Zip
		address_zip: {
			type: String,
			required: true,
			trim: true,
		},
		// Document Creation Date
		created: {
			type: Date,
			default: Date.now,
			trim: true,
		},
		// Doing Business As Name
		dba: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise group email
		email: {
			type: String,
			required: true,
			trim: true,
		},
		// Whether or not franchise is active
		is_active: {
			type: Boolean,
			default: true,
		},
		// Franchise Launch Date
		launch_date: {
			type: Date,
			required: true,
		},
		// Actual LLC
		legal_company: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Name
		name: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Phone Number
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Region
		region: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Signing Date
		signing_date: {
			type: Date,
			required: true,
		},
		// State tax percentage for pricing
		tax_rate: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Zip Codes
		territory_zips: {
			type: [String],
			required: true,
			trim: true,
		},
		// Franchise Time Zone
		time_zone: {
			type: String,
			required: true,
			trim: true,
		},
		// Franchise Website
		webpage: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

// Export Contact Model
export default mongoose.model<IGroup>("Group", groupSchema);
