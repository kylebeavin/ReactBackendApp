"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
//import helmet
var helmet_1 = __importDefault(require("helmet"));
//import cors
var cors_1 = __importDefault(require("cors"));
var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
var accountRoute_1 = __importDefault(require("./routes/accountRoute"));
var userRoute_1 = __importDefault(require("./routes/userRoute"));
var agreementRoute_1 = __importDefault(require("./routes/agreementRoute"));
var contactRoute_1 = __importDefault(require("./routes/contactRoute"));
var groupRoute_1 = __importDefault(require("./routes/groupRoute"));
var pretripRoute_1 = __importDefault(require("./routes/inspectionRoutes/driver/pretripRoute"));
var posttripRoute_1 = __importDefault(require("./routes/inspectionRoutes/driver/posttripRoute"));
var weeklyDriverRoute_1 = __importDefault(require("./routes/inspectionRoutes/driver/weeklyDriverRoute"));
var biWeeklyRoute_1 = __importDefault(require("./routes/inspectionRoutes/driver/biWeeklyRoute"));
var bigRigServiceRoute_1 = __importDefault(require("./routes/inspectionRoutes/info/bigRigServiceRoute"));
var emergencyServiceRoute_1 = __importDefault(require("./routes/inspectionRoutes/info/emergencyServiceRoute"));
var kenworthDealerRoute_1 = __importDefault(require("./routes/inspectionRoutes/info/kenworthDealerRoute"));
var localPartsRoute_1 = __importDefault(require("./routes/inspectionRoutes/info/localPartsRoute"));
var tireVendorRoute_1 = __importDefault(require("./routes/inspectionRoutes/info/tireVendorRoute"));
var gearboxRoute_1 = __importDefault(require("./routes/inspectionRoutes/tech/gearboxRoute"));
var hydraulicFilterRoute_1 = __importDefault(require("./routes/inspectionRoutes/tech/hydraulicFilterRoute"));
var weeklyTechRoute_1 = __importDefault(require("./routes/inspectionRoutes/tech/weeklyTechRoute"));
var invoiceRoute_1 = __importDefault(require("./routes/invoiceRoute"));
var orderRoute_1 = __importDefault(require("./routes/orderRoute"));
var truckRoute_1 = __importDefault(require("./routes/truckRoute"));
var meetingRoute_1 = __importDefault(require("./routes/meetingRoute"));
var routeRoute_1 = __importDefault(require("./routes/routeRoute"));
//create app instant
var app = express_1.default();
// configure bodyparser to hande the post requests
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
//use helmet as middleware
app.use(helmet_1.default());
app.use(cors_1.default());
var options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };
var mongo = mongoose_1.default.connect(process.env.DB_PATH || "", options).catch(function (err) { return console.log("Error", err); });
var db = mongoose_1.default.connection;
// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");
// Server Port
var port = process.env.PORT || 3000;
// Welcome/Login Site
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/api', function (req, res) {
    res.status(200).send('Welcome to the Api');
});
app.use('/api', accountRoute_1.default);
app.use('/api', userRoute_1.default);
app.use('/api', agreementRoute_1.default);
app.use('/api', contactRoute_1.default);
app.use('/api', groupRoute_1.default);
app.use('/api', pretripRoute_1.default);
app.use('/api', posttripRoute_1.default);
app.use('/api', weeklyDriverRoute_1.default);
app.use('/api', biWeeklyRoute_1.default);
app.use('/api', bigRigServiceRoute_1.default);
app.use('/api', emergencyServiceRoute_1.default);
app.use('/api', kenworthDealerRoute_1.default);
app.use('/api', localPartsRoute_1.default);
app.use('/api', tireVendorRoute_1.default);
app.use('/api', gearboxRoute_1.default);
app.use('/api', hydraulicFilterRoute_1.default);
app.use('/api', weeklyTechRoute_1.default);
app.use('/api', invoiceRoute_1.default);
app.use('/api', orderRoute_1.default);
app.use('/api', truckRoute_1.default);
app.use('/api', meetingRoute_1.default);
app.use('/api', routeRoute_1.default);
app.listen(port, function () {
    console.log("Running Smash API on Port " + port);
});
