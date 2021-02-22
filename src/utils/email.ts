import nodemailer from "nodemailer";



// For emailing forms
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "lizardsfleetmgmt@smashmytrash.com", // This should be changed to the fleet management email
		pass: "Lizard2021!",
	},
});

var mailOptions = {
	from: "lizardsfleetmgmt@smashmytrash.com",
	to: "suravita.roy@tcmcllc.com",
	subject: "Fleet Management Inspection",
	text: "Blinker Fluid Inspection",
};