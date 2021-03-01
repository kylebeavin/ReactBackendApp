import nodemailer from "nodemailer";
import path from 'path'
import * as dotenv from 'dotenv';
dotenv.config();
// For emailing forms

const fleetEmail = process.env.FLEET_USER
const fleetPass = process.env.FLEET_PASS

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		
		user: fleetEmail,
		pass: fleetPass,
	},
});

export const sendInspection = async function (data: any) {
	var mailOptions = {
		from: "lizardsfleetmgmt@smashmytrash.com",
		to: "alec.davidson@smashmytrash.com",
		subject: "Fleet Management Inspection",
		html: data,
	};
	console.log("html data ======================>", mailOptions.html);
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log("Message sent: " + info.response);
		}
	});
};

