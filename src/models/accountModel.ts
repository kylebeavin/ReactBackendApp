import IAccount from "../interfaces/accountInterface";
import mongoose, { Schema } from "mongoose";

//schema
var accountSchema = new mongoose.Schema(
	{
		// Account Name
		account_name: {
			type: String,
			required: true,
			trim: true,
		},
		// Account City
		address_city: {
			type: String,
			default: null,
			trim: true,
		},
		// Account State
		address_state: {
			type: String,
			default: null,
			trim: true,
		},
		// Account Street address
		address_street: {
			type: String,
			default: null,
			trim: true,
		},
		// Address Zip
		address_zip: {
			type: String,
			default: null,
			trim: true,
		},
		// Document ID's of contacts associated with the account
		contacts: {
			type: [String],
			default: null,
			trim: true,
		},
		// When lead becomes account
		conversion: {
			type: Date,
			default: null,
		},
		// Date for the demo smash
		demo: {
			type: Date,
			default: null,
		},
		// Generic account domain
		email: {
			type: String,
			default: null,
			trim: true,
		},
		// Dumpster location coordinates
		geo_location: {
			type: String,
			default: null,
			trim: true,
		},
		// Document ID of Franchise
		group_id: {
			type: [String],
			required: true,
			trim: true,
		},
		// Hauling contract status
		hauling_contract: {
			type: Boolean,
			default: false,
		},
		// Hauling contract expiration date
		hauling_expiration: {
			type: Date,
			default: null,
		},
		// Industry that the customer is in
		industry: {
			type: String,
			default: null,
			trim: true,
		},
		// Account status active/inactive
		is_active: {
			type: Boolean,
			default: true,
		},
		// Whether or not this is a national account
		national: {
			type: Boolean,
			default: false,
		},
		// Any notes you would like to add to the account
		notes: {
			type: [String],
			default: null,
			trim: true,
		},
		// Document ID of User that created the account
		owner_id: {
			type: String,
			required: true,
			trim: true,
		},
		// Display name that is cached during initial sign in from user
		owner_name: {
			type: String,
			required: true,
			trim: true,
		},
		// Whether or not this account is a referral
		referral: {
			type: Boolean,
			default: false,
		},
		// Group ID of the franchise that referred this account
		referral_group_id: {
			type: String,
			default: null,
			trim: true,
		},
		// Account stage
		stage: {
			type: String,
			enum: ["prospect", "lead", "account"],
			default: "prospect",
			lowercase: true,
		},
	},
	{ timestamps: true }
);

// Export Account Model
var Account = (module.exports = mongoose.model("account", accountSchema));