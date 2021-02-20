"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
// For emailing forms
var transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: "lizardsfleetmgmt@smashmytrash.com",
        pass: "Lizard2021!",
    },
});
var mailOptions = {
    from: "lizardsfleetmgmt@smashmytrash.com",
    to: "suravita.roy@tcmcllc.com",
    subject: "Fleet Management Inspection",
    text: "Blinker Fluid Inspection",
};
