import nodemailer from "nodemailer";
import path from 'path'
import * as dotenv from 'dotenv';
dotenv.config();
// For emailing forms
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		
		user: process.env.FLEET_USER,
		pass: process.env.FLEET_PASS,
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
