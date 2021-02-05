"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
//import helmet
var helmet_1 = __importDefault(require("helmet"));
//import cors
var cors_1 = __importDefault(require("cors"));
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
var accountRoute_1 = __importDefault(require("./routes/accountRoute"));
var userRoute_1 = __importDefault(require("./routes/userRoute"));
var agreementRoute_1 = __importDefault(require("./routes/agreementRoute"));
var contactRoute_1 = __importDefault(require("./routes/contactRoute"));
var groupRoute_1 = __importDefault(require("./routes/groupRoute"));
var inspectionRoute_1 = __importDefault(require("./routes/inspectionRoute"));
var inspectionRoute_2 = __importDefault(require("./routes/inspectionRoute"));
var orderRoute_1 = __importDefault(require("./routes/orderRoute"));
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
var options = { useNewUrlParser: true, useUnifiedTopology: true };
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
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', function (req, res) { return res.sendFile(__dirname + '/public/index.html'); });
app.use('/api', accountRoute_1.default);
app.use('/api', userRoute_1.default);
app.use('/api', agreementRoute_1.default);
app.use('/api', contactRoute_1.default);
app.use('/api', groupRoute_1.default);
app.use('/api', inspectionRoute_1.default);
app.use('/api', inspectionRoute_2.default);
app.use('/api', orderRoute_1.default);
app.listen(port, function () {
    console.log("Running Smash API on Port " + port);
});
